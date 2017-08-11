(ns main.clj.clojure-club.stateful-apps.wmatson.core
  (:require [main.clj.clojure-club.stateful-apps.wmatson.game-schema :as gs]
            [main.clj.clojure-club.stateful-apps.wmatson.cards :as dc]))

(defprotocol IODevice
  (get-choice [this options])
  (display [this game]))

(deftype HumanPlayerControl [io]
    PlayerControl
    (choose [this game options]
      (do
        (display io game)
        (get-choice io options))))

(defn starting-deck []
  (shuffle (concat (repeat 7 :copper) (repeat 3 :estate))))

(defn new-player [name]
  (-> (gs/->Player name (starting-deck) [] [] [] 0 1 1)
      (gs/draw 5)))

(defn new-game [player-names]
  (let [player-map (into {}  (map #(vector (keyword %) (new-player %)) player-names))]
    (gs/->Game player-map [] [] (vec (keys player-map)) :main)))

(def test-game (new-game ["Bob" "Sally"]))

(:treasure (get-in test-game [:players (-> test-game :turn-order first)]))

(gs/play-card test-game (:village dc/cards))
