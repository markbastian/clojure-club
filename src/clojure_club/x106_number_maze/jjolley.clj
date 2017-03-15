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
