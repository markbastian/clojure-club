(ns clojure-club.stateful-apps.mgrimm.core
  (:require
    [clojure.pprint :as pp]
    [clojure-club.stateful-apps.mgrimm.cards :refer :all]
    [clojure-club.stateful-apps.mgrimm.util :refer :all]))

; ------------------------------------------------------------------------------
; kingdom

(def kingdom
  {:estate (->Estate 20)
   :duchy (->Duchy 20)
   :province (->Province 20)

   :copper (->Copper 60)
   :silver (->Silver 40)
   :gold (->Gold 30)

   :cellar (->Cellar 20)
   :chapel (->Chapel 20)
   :moat (->Moat 20)
   :chancellor (->Chancellor 20)
   :village (->Village 20)
   :gardens (->Gardens 20)
   :workshop (->Workshop 20)
   :grand-market (->GrandMarket 20)
   :woodcutter (->Woodcutter 20)
   ; ...
   })

; ------------------------------------------------------------------------------
; player

(defrecord Player [deck hand discard actions buys coins])

(def starting-deck (into (repeat 7 :copper) (repeat 3 :estate)))

(defn buying-power [game player]
  (->> (hand game player)
       (reduce 
         (fn [sum name] 
           (let [card (-> game :kingdom name)]
             (cond-> sum 
               (satisfies? TreasureCard card)
               (+ (value card game player))))) 0)
       (+ (get-in game [:players player :coins]))))

(let [buford (->Player (shuffle starting-deck) () () 1 1 0) 
      matt (->Player (shuffle starting-deck) '(:woodcutter) () 1 1 0)
      game {:kingdom kingdom :players {:matt matt :buford buford}}]
  ;(pp/pprint game)
  ;(-> game 
  ;    (draw-n :matt 4)
  ;    (#(action (card game :woodcutter) % :matt nil))
  ;    (#(do (pp/pprint %) %))
  ;    (buying-power :matt))
  ;(pp/pprint (action (card game :workshop) game :matt {:card :grand-market}))
  ;(pp/pprint (points (card game :gardens) game :matt))
  ;(pp/pprint (action (card game :chancellor) game :matt {:discard-deck? true}))
  ;(pp/pprint (action (card game :chapel) game :matt {:cards [:silver :copper]}))
  ;(pp/pprint (action (card game :cellar) game :matt {:cards [:copper]}))
  ;(pp/pprint (action (card game :village) game :matt nil))
  )
