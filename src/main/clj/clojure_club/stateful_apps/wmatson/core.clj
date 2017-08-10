(ns main.clj.clojure-club.stateful-apps.wmatson.core
  (:require [main.clj.clojure-club.stateful-apps.wmatson.game-schema :as gs]
            [main.clj.clojure-club.stateful-apps.wmatson.cards :as dc]))

(defn starting-deck []
  (shuffle (concat (repeat 7 :copper) (repeat 3 :estate))))

(defn new-player [name]
  (gs/->Player name (starting-deck) [] [] [] 0 1 1))

(def test-game (gs/->Game {:bob (new-player "Bob")}
                          [] [] [:bob]))

(:treasure (get-in test-game [:players (-> test-game :turn-order first)]))
(gs/play-card test-game (:gold dc/cards))
