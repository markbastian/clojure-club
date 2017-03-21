(ns clojure-club.x124-analyze-reversi.wmatson)

(def opponent
  {'w 'b
   'b 'w})

(def directions
  (remove #{[0 0]}
    (for [row (map dec (range 3))
          col (map dec (range 3))]
      [row col])))

(defn line [board row col [row-vec col-vec :as direction]]
  (let [cell (get-in board [row col])]
    (if (some? cell)
      (lazy-seq
       (cons [[row col] cell]
         (line board (+ row row-vec) (+ col col-vec) direction))))))

(defn flips [line color]
  (let [split-pred #(= (opponent color) (second %))
        [moves [[_ flipper]]] (split-with split-pred line)]
    (if (= flipper color)
      (map first moves))))

(defn cell-moves [board row col color]
  (if (= 'e (get-in board [row col]))
    (let [lines (map #(rest (line board row col %)) directions)
          moves (mapcat #(flips % color) lines)]
      [[row col] (set (filter seq moves))])))

(defn board-moves [board color]
  (for [row-index (range (count board))
        col-index (range (count (get board row-index)))]
     (cell-moves board row-index col-index color)))

(defn reversi-moves [board color]
  (->> (board-moves board color)
       (filter (comp seq second))
       (apply concat)
       (apply hash-map)))

;; (reversi-moves '[[e e e e]
;;                  [e w b e]
;;                  [e b w e]
;;                  [e e e e]] 'b)
