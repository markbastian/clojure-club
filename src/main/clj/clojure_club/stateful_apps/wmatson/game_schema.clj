(ns main.clj.clojure-club.stateful-apps.wmatson.game-schema)

(defrecord Game [players kingdom-cards trash turn-order])

(defmulti play-card (fn [game card] (:name card))
  :default (fn [game card] game))

(defn update-self [game update-fn]
  (let [current-player (-> game :turn-order first)]
    (update-in game [:players current-player update-fn])))
