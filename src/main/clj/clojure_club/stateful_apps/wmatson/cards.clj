(ns main.clj.clojure-club.stateful-apps.wmatson.cards)

(def base-cards
  [{:name :estate :victory-points 1 :cost 2 :types #{:victory}}
   {:name :duchy :victory-points 3 :cost 5 :types #{:victory}}
   {:name :province :victory-points 6 :cost 8 :types #{:victory}}
   {:name :copper :treasure 1 :cost 0 :types #{:treasure}}
   {:name :silver :treasure 2 :cost 3} :types #{:treasure}
   {:name :gold :treasure 3 :cost 6} :types #{:treasure}
   {:name :curse :victory-points -1 :types #{:curse}}])

(def cards-raw
  (concat base-cards))

(def cards
  (let [group->pair (fn [[key [val]]] [key val])]
    (into {} (map group->pair (group-by :name cards-raw)))))
