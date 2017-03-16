(ns clojure-club.x106-number-maze.jjolley)

(defn number-maze
  [start finish]
  (letfn [(a [x] (if (not= nil x) (+ 2 x)))
          (d [x] (if (not= nil x) (* 2 x)))
          (h [x] (if (and (not= nil x) (even? x)) (/ x 2)))
          (append-ops [coll] (vector (conj coll a) (conj coll d) (conj coll h)))]
    (loop [tree [[identity]]]
      (if-let [path (some #(and (= finish ((apply comp %) start)) %) tree)]
        (do
          (println path)
          (count path))
        (recur (reduce #(into %1 (append-ops %2)) [] tree))))))

;(time (number-maze 1 4137))
;(time (number-maze 7 43))
;(time (number-maze 9 2))
;(time (number-maze 2 9))
;(time (number-maze 2 4))
