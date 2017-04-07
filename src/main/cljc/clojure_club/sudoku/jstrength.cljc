(ns clojure-club.sudoku.jstrength)

(defn get-candidates [p [x y]]
  (clojure.set/difference
    (set (range 1 10))
    (set
      (filter
        (comp not nil?)
        (concat
          (let [s (fn [n] (* 3 (quot n 3)))]
            (for [x (range (s x) (+ (s x) 3))
                  y (range (s y) (+ 3 (s y)))]
              (get-in p [x y])))
          (for [x (range 0 9)]
            (get-in p [x y]))
          (for [y (range 0 9)]
            (get-in p [x y])))))))

(defn calc-candidates [p]
  (sort-by (comp count second)
           (for [x (range 0 9)
                 y (range 0 9)
                 :when (nil? (get-in p [x y]))
                 :let [candidates (get-candidates p [x y])]]
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