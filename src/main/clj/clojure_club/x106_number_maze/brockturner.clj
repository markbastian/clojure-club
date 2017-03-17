(ns clojure-club.x106-number-maze.brockturner)

(defn maze-runner [start end]
  (loop [current #{start}
         past #{}
         dist 1]
    (if (current end)
      dist
      (recur (->> (reduce
                   (fn [nset n]
                     (let [tmp (conj nset (+ 2 n) (* 2 n))]
                       (if (= 0 (mod n 2))
                         (conj tmp (/ n 2))
                         tmp)))
                   #{} current)
                  (remove (into past current))
                  (apply hash-set))
             (into past current)
             (inc dist)))))

(time (maze-runner 1 4137))
(time (maze-runner 7 43))
(time (maze-runner 9 2))
(time (maze-runner 2 9))
(time (maze-runner 2 4))
(time (maze-runner 2 2))


(defn next-step [goal path]
  (let [current (-> path last last)]
    (cond
      (= current goal) nil
      (and (= 2 current)
           (odd? goal)
           (<= goal 17)
           (< current goal)) (conj path [["/"] -1 1])
      (or (and (odd? current)
               (odd? goal)
               (<= goal 17)
               (< current goal))
          (and (= 4 current) (= 3 goal))
          (and (= 1 current) (= 6 goal))
          ) (conj path [["+"] 2 (+ current 2)])
      (<= (* 2 current) goal) (conj path [["*"] current (* 2 current)])
      (and (> current goal)
           (even? current)) (conj path [["/"] (- (/ current 2)) (/ current 2)])
      (and (> current goal)
           (odd? current)) (conj path [["*" "+" "/" "/"] (-> current dec (/ 2) -) (-> current inc (/ 2))])
      (or (and (odd? current) (odd? goal))
          (and (even? current) (even? goal))) (conj path [["+"] 2 (+ 2 current)])
      :else (conj path [["*" "+" "/"] 1 (inc current)]))))

(defn optimize [path]
  (->> (mapcat first path)
       (reduce #(if (or (and (= %2 "/") (= "*" (peek %1)))
                        (and (= %2 "*") (= "/" (peek %1))))
                  (pop %1)
                  (conj %1 %2)) [])))
;; todo: [* + +] -> [+ *] and [* * + / + +] -> [+ * * + /]


(defn line-runner [start end]
  (->> [["s" start]]
       (iterate (partial next-step end))
       (take-while identity)
       (take 30)
       last
       optimize))

;; issues: 3 1
(defn test-maze [r-start r-end]
  (doseq [x (range r-start r-end) y (range r-start r-end)]
    (let [[l m] ((juxt line-runner maze-runner) x y)]
      (when (not= (count l) m)
        (prn x y l m)))))
