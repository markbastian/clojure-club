(ns clojure-club.x106-number-maze.wmatson)

(def even-operations
  {:double (partial * 2)
   :halve #(/ % 2)
   :plus2 (partial + 2)})

(def odd-operations
  (dissoc even-operations :halve))

(defn node [num] {:num num :path [[:start num]]})

(defn take-path [node [op-kw op]]
  (-> node
    (update :num op)
    (update :path conj [op-kw (op (:num node))])))

(defn get-ops [node]
  (if (even? (:num node))
    even-operations
    odd-operations))

(defn branch [node]
  (map (partial take-path node) (get-ops node)))

(defn min-solutions [start finish]
  (let [branch-seq (iterate (partial mapcat branch) [(node start)])
        is-solution? (fn [node] (= finish (:num node)))
        skip-wrong (drop-while #(not-any? is-solution? %) branch-seq)]
     (filter is-solution? (first skip-wrong))))

(defn min-path-size [start finish]
  (first (map (comp count :path) (min-solutions start finish))))

;; (min-path-size 9 2)
;; (map #(map second (:path %)) (min-solutions 9 2))
;; (min-solutions 9 2)
;; (clojure.pprint/pprint (min-solutions 9 2))

(defn number-maze [start finish]
  (let [ops [#(* 2 %) #(+ 2 %) #(/ % 2)]
        branch-single (fn [num] (map #(% num) ops))
        branch (fn [current] (set (filter integer? (mapcat branch-single current))))
        branch-seq (iterate branch #{start})
        unsolved? (complement #(% finish))]
     (inc (count (take-while unsolved? branch-seq)))))

;; (time (number-maze 1 4137))
;; (time (number-maze 7 43))
;; (time (number-maze 9 2))
;; (time (number-maze 2 9))
;; (time (number-maze 2 4))
