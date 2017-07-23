(ns clojure-club.stateful-apps.mgrimm.util)

(defn remove-first [x coll]
  (let [[pre [_ & post]] (split-with (complement #{x}) coll)]
    (concat pre post)))

;; -----------------------------------------------------------------------------

(defn card [game name] (get-in game [:kingdom name]))
(defn deck [game player] (get-in game [:players player :deck]))
(defn hand [game player] (get-in game [:players player :hand]))
(defn discards [game player] (get-in game [:players player :discard]))

(defn move-n-cards
  [source-pile target-pile game player n]
  (let [[cards pile] (split-at n (get-in game [:players player source-pile]))] 
    (-> game
        (update-in [:players player target-pile] into cards)
        (assoc-in [:players player source-pile] pile))))

(defn move-card 
  "Move the top card from player's source-pile to player's target-pile."
  [source-pile target-pile game player]
  (move-n-cards source-pile target-pile game player 1))

(defn move-all-cards
  "Moves all cards from player's source-pile to player's target-pile."
  [source-pile target-pile game player]
  (-> game 
      (update-in [:players player target-pile] into (get-in game [:players player source-pile]))
      (assoc-in [:players player source-pile] ())))

; TODO if deck doesn't have enough cards to move, shuffle discard into deck first
(def draw (partial move-card :deck :hand))
(def discard (partial move-card :hand :discard))

(def draw-n (partial move-n-cards :deck :hand))
(def discard-n (partial move-n-cards :hand :discard))

(defn trash-card
  "Move card from player's source-pile to trash."
  [source-pile card game player]
  (-> game
      (update-in [:players player source-pile] (partial remove-first card))
      (update :trash conj card)))

(defn trash-cards 
  [source-pile cards game player]
  (reduce (fn [g c] (trash-card :hand c g player)) game cards))

(defn shuffle-discards-to-deck
  [game player]
  (-> game
      (update-in [:players player :discard] shuffle)
      (#(move-all-cards :discard :deck % player))))


(defn add-n-things [thing game player n] 
  (update-in game [:players player thing] (fnil + 0) n))

(def add-n-actions (partial add-n-things :actions))
(def add-n-buys (partial add-n-things :buys))
(def add-n-coins (partial add-n-things :coins))
