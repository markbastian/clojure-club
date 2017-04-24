(ns clojure-club.gurps.mbastian
  (:require [clojure.java.io :as io]
            [clojure.data.xml :as xml]))

(def x (->> "clojure_club/gurps/basic_set.adq" io/resource slurp xml/parse-str))

(loop [[{:keys [tag attrs content] :as f} :as l] [x] res #{} depth 0]
  (if (and f (< depth 5000))
    (recur (into (pop l) content) (conj res tag) (inc depth))
    res))
