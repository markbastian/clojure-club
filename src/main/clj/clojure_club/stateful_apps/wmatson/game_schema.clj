(ns main.clj.clojure-club.stateful-apps.wmatson.game-schema)

(defprotocol IODevice
  (get-choice [options])
  (display [game]))

(defprotocol PlayerControl
  (choose [game options]))


(deftype HumanPlayerControl [io]
  (reify
    PlayerControl
    (choose [game options]
      (do
        (display io game)
        (get-choice io options)))))
  

(defrecord Player [control name deck hand in-play discard treasure actions buys])
(defn player
  ([name] (player)))

(defrecord Game [ players kingdom-cards trash turn-order phase])


(defn current-player-kw [game]
  (-> game :turn-order first))

(defn current-player [game]
  (get-in game [:players (current-player-kw game)]))

(defmulti can-play? (fn [game card] (:name card)))
  
(defmethod can-play? :default [game card]
      (or (and (#{:main} (:phase game))
               ((:types card) :action)
               (> 0 (:actions (current-player game))))
          (and (#{:buying} (:phase game))
               ((:types card) :treasure))))

(defmulti special-effects (fn [game card] (:name card)))

(defmethod special-effects :default [game card] game)

(defn update-self [game update-fn]
  (let [current-player (current-player-kw game)]
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

(defn add-buys [game amount]
  (update-self game #(update % :buys + amount)))

(defn add-actions [game amount]
  (update-self game #(update % :actions + amount)))

(defn play-card [game card]
  (-> game
      (add-treasure (:treasure card 0))
      (add-buys (:buys card 0))
      (add-actions (:actions card 0))
      (update-self #(draw % (:cards card 0)))
      (special-effects card)))

