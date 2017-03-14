(ns clojure-club.x106-number-maze.mgrimm
  (:import (clojure.lang PersistentQueue)))

(defn number-maze [start end]
  (loop [seen #{} q (conj PersistentQueue/EMPTY [start 1 [start]])]
    (let [[x depth path] (peek q)]
      (if (= x end)
        [depth (->> q seq (filter (fn [[y d p]] (and (= y end) (= d depth)))) (map last))]
        (recur (conj seen x)
               (let [a (+ x 2) b (* x 2) c (/ x 2)]
                 (cond-> (pop q)
                         (not (seen a)) (conj [a (inc depth) (conj path a)])
                         (not (seen b)) (conj [b (inc depth) (conj path b)])
                         (not (or (seen c) (odd? x))) (conj [c (inc depth) (conj path c)]))))))))
