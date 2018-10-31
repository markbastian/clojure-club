(ns clojure-club.rle.mbastian
  (:require [clojure.string :as cs]
            [clojure.edn :as edn]))

(def test-string
  "WWWWWWWWWWWWBWWWWWWWWWWWWBBBWWWWWWWWWWWWWWWWWWWWWWWWBWWWWWWWWWWWWWW")

(defn encode [s]
  (->> s
       (partition-by identity)
       (map (fn [[f :as s]] (str (count s) f)))
       cs/join))

(defn decode [s]
  (->> s
       (re-seq #"(\d+)([^\d]+)")
       (mapcat (fn [[_ c s]] (repeat (edn/read-string c) s)))
       cs/join))

(= test-string
   (-> test-string encode decode))