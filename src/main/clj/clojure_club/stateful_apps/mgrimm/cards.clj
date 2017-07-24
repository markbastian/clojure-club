(ns clojure-club.stateful-apps.mgrimm.cards
  (:require
    [clojure-club.stateful-apps.mgrimm.util :refer :all]))

(defprotocol Card (cost [this game player]))
(defprotocol TreasureCard (value [this game player]))
(defprotocol VictoryCard (points [this game player]))

(defprotocol Operation
  (can-acquire? [this game player])
  (acquire [this game player])
  (action [this game player options])
  (reaction [this game player options])
  (attack [this game player options]))

;; Victory cards ---------------------------------------------------------------

(defrecord Estate [quantity]
  Card (cost [_ _ _] 2)
  VictoryCard (points [_ _ _] 1)

  Operation
  (can-acquire? [this game player] (pos? (count (:quantity this))))
  (acquire [this game player] (update this :quantity dec)))

(defrecord Duchy [quantity]
  Card (cost [_ _ _] 5)
  VictoryCard (points [_ _ _] 3)

  Operation
  (can-acquire? [this game player] (pos? (count (:quantity this))))
  (acquire [this game player] (update this :quantity dec)))

(defrecord Province [quantity]
  Card (cost [_ _ _] 8)
  VictoryCard (points [_ _ _] 6)

  Operation 
  (can-acquire? [this game player] (pos? (count (:quantity this))))
  (acquire [this game player] (update this :quantity dec)))

(defrecord Gardens [quantity]
  Card (cost [_ _ _] 4)
  VictoryCard
  (points [this game player] 
    (->> (select-keys (get-in game [:players player]) [:deck :hand :discard])
         vals
         (map count)
         (reduce +)
         (#(quot % 10))))
  
  Operation 
  (can-acquire? [this game player] (pos? (count (:quantity this))))
  (acquire [this game player] (update this :quantity dec)))

;; Treasure cards --------------------------------------------------------------

(defrecord Copper [quantity]
  Card (cost [_ _ _] 0)
  TreasureCard (value [_ _ _] 1)

  Operation 
  (can-acquire? [this game player] (pos? (count (:quantity this))))
  (acquire [this game player] (update this :quantity dec)))

(defrecord Silver [quantity]
  Card (cost [_ _ _] 3)
  TreasureCard (value [_ _ _] 2)

  Operation 
  (can-acquire? [this game player] (pos? (count (:quantity this))))
  (acquire [this game player] (update this :quantity dec)))

(defrecord Gold [quantity]
  Card (cost [_ _ _] 6)
  TreasureCard (value [_ _ _] 3)

  Operation 
  (can-acquire? [this game player] (pos? (count (:quantity this))))
  (acquire [this game player] (update this :quantity dec)))

;; Kingdom cards ---------------------------------------------------------------

(defrecord Cellar [quantity]
  Card (cost [_ _ _] 2)

  Operation
  (can-acquire? [this game player] (pos? (count (:quantity this))))
  (acquire [this game player] (update this :quantity dec))

  ; +1 action; discard any number of cards; +1 card per card discarded.
  (action [this game player {:keys [cards]}]
    (-> game
        (add-n-actions player 1)
        ((fn [game] 
           (reduce (fn [g c] (-> g
                                 (update-in [:players player :hand] (partial remove-first c))
                                 (update-in [:players player :discard] conj c))) 
                   game cards)))
        (draw-n player (count cards)))))


(defrecord Chapel [quantity]
  Card (cost [_ _ _] 2)

  Operation
  (can-acquire? [this game player] (pos? (count (:quantity this))))
  (acquire [this game player] (update this :quantity dec))

  ; Trash up to 4 cards from your hand
  (action [this game player {:keys [cards]}]
    {:pre [(<= (count cards) 4)]}
    (trash-cards :hand cards game player)))


(defrecord Chancellor [quantity]
  Card (cost [_ _ _] 3)

  Operation
  (can-acquire? [this game player] (pos? (count (:quantity this))))
  (acquire [this game player] (update this :quantity dec))

  ; +$2; you may immediately put your deck into your discard pile
  (action [this game player {:keys [discard-deck?]}]
    (cond-> (add-n-coins game player 2)
      discard-deck?
      (#(move-all-cards :deck :discard % player)))))


(defrecord GrandMarket [quantity]
  Card (cost [_ _ _] 6)

  Operation
  (can-acquire? [this game player] (not (some-fn #{:copper} (get-in game [:players player :hand]))))
  (acquire [this game player] (update this :quantity dec))

  ; +1 card; +1 action; +1 buy; +$2
  (action [this game player _]
    (-> game
        (draw player)
        (add-n-actions player 1)
        (add-n-buys player 1)
        (add-n-coins player 2))))


(defrecord GreatHall [quantity]
  Card (cost [_ _ _] 3)
  VictoryCard (points [_ _ _] 1)

  Operation
  (can-acquire? [this game player] (pos? (count (:quantity this))))
  (acquire [this game player] (update this :quantity dec)) 

  ; +1 card; +1 action
  (action [this game player _]
    (-> game
        (draw player)
        (add-n-actions player 1))))


(defrecord Moat [quantity]
  Card (cost [_ _ _] 2)

  Operation
  (can-acquire? [this game player] (pos? (count (:quantity this))))
  (acquire [this game player] (update this :quantity dec))

  ; +2 cards
  (action [this game player _]
    (draw-n player game 2))

  ; TODO
  ; When another player plays an attack card, you may reveal this from your
  ; hand. If you do, you are unaffected by that attack.
  (reaction [this game player options]))


(defrecord Village [quantity]
  Card (cost [_ _ _] 3)

  Operation
  (can-acquire? [this game player] (pos? (count (:quantity this))))
  (acquire [this game player] (update this :quantity dec))

  ; +1 card; +2 actions
  (action [this game player _]
    (-> (draw player game)
        (add-n-actions player 2))))


(defrecord Woodcutter [quantity]
  Card (cost [_ _ _] 3)

  Operation
  (can-acquire? [this game player] (pos? (count (:quantity this))))
  (acquire [this game player] (update this :quantity dec))

  ; +1 buy; +$2
  (action [this game player _]
    (-> game
        (add-n-buys player 1)
        (add-n-coins player 2))))


(defrecord Workshop [quantity]
  Card (cost [_ _ _] 3)

  Operation
  (can-acquire? [this game player] (pos? (count (:quantity this))))
  (acquire [this game player] (update this :quantity dec))

  ; Gain a card costing up to $4
  (action [this game player {:keys [card]}]
    {:pre [(<= (cost (get-in game [:kingdom card]) game player) 4)]}
    (-> game
        (update-in [:kingdom card :quantity] dec)
        (update-in [:players player :discard] conj card))))
