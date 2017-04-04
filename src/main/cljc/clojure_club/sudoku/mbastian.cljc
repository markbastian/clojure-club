(ns clojure-club.sudoku.mbastian)

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

(defn set-cell [board cell value]
  (letfn [(safe-set [b c] (cond-> b (set? (get-in b c)) (update-in c disj value)))]
    (-> (reduce safe-set board (neighbors cell)) (assoc-in cell value))))

(defn most-constrained [board]
  (->> all-cells
       (filter #(set? (get-in board %)))
       (apply min-key #(count (get-in board %)))))

(defn initialize [problem]
  (reduce
    (fn [board cell]
      (if-let [v (valid-values (get-in problem cell))]
        (set-cell board cell v)
        board))
    (vec (repeat 9 (vec (repeat 9 valid-values))))
    all-cells))

(defn solve-step [board]
  (let [best-cell (most-constrained board)]
    (for [v (get-in board best-cell)] (set-cell board best-cell v))))

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

(defn solve [board]
  (loop [[f & r] [(initialize board)]]
    (cond
      (every? #(every? integer? %) f) f
      (nil? f) f
      :default (recur (into r (solve-step f))))))

;(solve hard)

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
