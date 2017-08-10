(ns main.clj.clojure-club.stateful-apps.wmatson.expansions.basic-set
  (:require [main.clj.clojure-club.stateful-apps.wmatson.game-schema :as gs]))

(def cards
  [{:name :woodcutter :types #{:action} :cost 3 :buys 1 :treasure 2}
   {:name :village :types #{:action} :cost 3 :actions 2 :cards 1}])
