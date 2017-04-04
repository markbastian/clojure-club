(ns clojure-club.x124-analyze-reversi.jstrength
   (:require [clojure.test :refer :all]))

(defn reversi [b c]
  (let [neighbors [[1 -1] [0 1] [1 0] [1 1]
                   [-1 1] [0 -1] [-1 0] [-1 -1]]
        opp (fn [c] (if (= c 'w) 'b 'w))
        oob? (fn [[x y]] (or (< x 0) (< y 0) (> y 3) (> x 3)))]
    (into {}
          (filter (comp not nil?)
                  (for [x (range 0 4)
                        y (range 0 4)
                        :when (= c (get-in b [x y]))
                        n neighbors]
                    (when (= (opp c) (get-in b (map + [x y] n)))
                      (loop [d [x y]
                             p []]
                        (if (oob? d)
                          nil (if (= 'e (get-in b d))
                                {d (into (sorted-set) (vec (drop-last p)))} (recur (map + d n) (conj p (mapv + d n))))))))))))

(deftest one
  (is (= {[1 3] #{[1 2]}, [0 2] #{[1 2]}, [3 1] #{[2 1]}, [2 0] #{[2 1]}}
         (reversi '[[e e e e]
                    [e w b e]
                    [e b w e]
                    [e e e e]] 'w))))

(run-tests)
