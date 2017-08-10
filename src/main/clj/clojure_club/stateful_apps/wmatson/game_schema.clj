(ns main.clj.clojure-club.stateful-apps.wmatson.game-schema)

(defrecord Player [name deck hand in-play discard treasure actions buys])
(defrecord Game [players kingdom-cards trash turn-order])

(defmulti play-card (fn [game card] (:name card))
  :default (fn [game card] game))

(defn update-self [game update-fn]
  (let [current-player (-> game :turn-order first)]
    (update-in game [:players current-player] update-fn)))

(defn draw
  ([player amount]
   (->> (iterate draw player)
        (take (inc amount))
        last))
  ([{:keys [deck discard] :as player}]
   (if (and (empty? deck) (empty? discard))
     player
     (let [[next & rest] deck]
       (if next
         (-> player
             (update :hand conj next)
             (assoc :deck rest))
         (-> player
             (assoc :deck (shuffle discard))
             (assoc :discard [])
             (draw player)))))))

(defn add-treasure [game amount]
  (update-self game #(update % :treasure + amount)))
