(ns clojure-club.sudoku.jstrength
  (:require [clojure.set :refer [difference]]))

(def get-neighbor-coords
  (memoize
    (fn [x y]
      (concat
        (let [s (fn [n] (* 3 (quot n 3)))]
          (for [x (range (s x) (+ (s x) 3))
                y (range (s y) (+ 3 (s y)))]
            [x y]))
        (for [x (range 0 9)]
          [x y])
        (for [y (range 0 9)]
          [x y])))))

(defn get-candidates [p x y]
  (difference
    (set (range 1 10))
    (set (keep (partial get-in p) (get-neighbor-coords x y)))))

(defn calc-candidates [p]
  (sort-by (comp count second)
           (for [x (range 0 9)
                 y (range 0 9)
                 :when (nil? (get-in p [x y]))
                 :let [candidates (get-candidates p x y)]]
             [[x y] candidates])))

(defn solve
  ([p] (solve p (calc-candidates p)))
  ([p [[coord cands] & r]]
   (if-not coord
     p
     (reduce
       (fn [p cand]
         (let [new-p (solve (assoc-in p coord cand))]
           (if (every? (comp not nil?) (flatten new-p))
             (reduced new-p)
             p)))
       p
       cands))))
