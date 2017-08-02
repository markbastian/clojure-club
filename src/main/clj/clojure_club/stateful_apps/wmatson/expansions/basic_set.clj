(ns main.clj.clojure-club.stateful-apps.wmatson.expansions.basic-set
  (:require [main.clj.clojure-club.stateful-apps.wmatson.game-schema :as gs]))

(def cards
  [{:name :woodcutter :types #{:action} :cost 3}])

(defmethod gs/play-card :woodcutter
  [game card] (gs/update-self game
                 #(-> %
                      (update :treasure + 2)
                      (update :buys inc))))
