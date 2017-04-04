(ns clojure-club.sudoku.mbastian)

;Copied from https://github.com/markbastian/sudoku/blob/master/src/cljc/sudoku/rules.cljc
(def valid-values (apply hash-set (range 1 10)))

(defonce all-cells (for [i (range 9) j (range 9)] [i j]))

(defonce neighbors
         (let [cells
               (juxt
                 #(map (fn [i] [i (second %)]) (range 9))
                 #(map (fn [j] [(first %) j]) (range 9))
                 #(for [a (range 3) b (range 3)]
                    (mapv + [(* 3 (quot (first %) 3)) (* 3 (quot (second %) 3))]
                          [a b])))]
           (zipmap all-cells (map #(disj (reduce into #{} (cells %)) %) all-cells))))

(defn constraints [[board unsolved-cells]]
  (letfn [(solved [cell] (apply hash-set (map #(valid-values (get-in board %)) (neighbors cell))))]
    (->> unsolved-cells
         (map (fn [c] [c (remove (solved c) valid-values)]))
         (group-by (comp count second)))))

(defn lock-cells [[board unsolved-cells] [cell values]]
  (map (fn [value] [(assoc-in board cell value) (disj unsolved-cells cell)]) values))

(defn unknowns [board]
  (apply hash-set (remove #(valid-values (get-in board %)) all-cells)))

(defn solve [initial-board]
  (loop [[[board unsolved-cells :as f] & r] [[initial-board (unknowns initial-board)]]]
    (if-not (empty? unsolved-cells)
      (let [c (constraints f)]
        (if (c 0)
          (recur r)
          (recur (into r (lock-cells f (first (some c (range 1 10))))))))
      board)))

(def hard
  '[[_ _ _ _ _ _ _ 1 2]
    [_ _ 8 _ 3 _ _ _ _]
    [_ _ _ _ _ _ _ 4 _]
    [1 2 _ 5 _ _ _ _ _]
    [_ _ _ _ _ 4 7 _ _]
    [_ 6 _ _ _ _ _ _ _]
    [5 _ 7 _ _ _ 3 _ _]
    [_ _ _ 6 2 _ _ _ _]
    [_ _ _ 1 _ _ _ _ _]])

;(def hard
;  '[[1 _ _ _ _ _ _ 1 2]
;    [_ _ 8 _ 3 _ _ _ _]
;    [_ _ _ _ _ _ _ 4 _]
;    [1 2 _ 5 _ _ _ _ _]
;    [_ _ _ _ _ 4 7 _ _]
;    [_ 6 _ _ _ _ _ _ _]
;    [5 _ 7 _ _ 9 3 _ _]
;    [_ _ _ 6 2 _ _ _ _]
;    [_ _ _ 1 _ _ _ _ _]])

(let [[[board unsolved-cells :as f] & r] [[hard (unknowns hard)]]]
  (first (some (constraints f) (range)))
  #_(if-not (empty? unsolved-cells)
      (into r (lock-cells f (first (some (constraints f) (range)))))
      board))

(time (solve hard))

;;;;;;;;;;;;;;;
(defn valid-cell? [board cell]
  (not-any? #{(get-in board cell)}
            (map (partial get-in board)
                 (neighbors cell))))

(defn bad-cells [board]
  (remove (partial valid-cell? board) all-cells))

(defn valid-board? [board]
  (and
    (every? (partial get-in board) all-cells)
    (empty? (bad-cells board))))