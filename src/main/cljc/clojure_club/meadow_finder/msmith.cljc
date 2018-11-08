(ns clojure-club.meadow-finder.msmith
  (:require [clojure-club.meadow-finder.core :as c]
            [clojure.pprint :refer [pprint]]))

(defn neighbors [[x y]]
  (map vector
       ((juxt identity inc identity dec) x)
       ((juxt inc identity dec identity) y)))

(defn neighbor? [c1 c2]
  (some (partial = (take 2 c2)) (neighbors c1)))

(defn add-coord
  "Turns a 2d seq into a seq with elements of the form [x y val]"
  [tdvec]
  (->> tdvec
       (map-indexed (fn [x row]
                      (map-indexed (fn [y char]
                                     [x y char])
                                   row)))
       (reduce concat)))

(defn find-clusters [cfn cells]
  (reduce (fn [clusters cell]
            (let [clusters-with-cell (group-by (partial some (partial cfn cell)) clusters)]
              (if (empty? (clusters-with-cell true))
                ;start a new cluster with the cell
                (conj clusters [cell])
                ; merge all clusters that the cell is a part of
                (conj
                  (clusters-with-cell nil)
                  (reduce concat (conj (clusters-with-cell true)
                                       [cell]))))))
          #{}
          cells))

(defn map->meadows [mmap]
  (->> mmap
    (map #(clojure.string/split % #""))
    (add-coord)
    (filter (fn [[_ _ char]] (= char " ")))
    (find-clusters neighbor?)))


(map->meadows c/meadow-32x32x4)

;; rendering for testing
(defn assign-unique-marks [meadows]
  (map-indexed
    (fn [i group] (map (fn [c] (assoc c 2 (str i))) group))
    meadows))

(defn overlay [ogmap overlay]
  (reduce
    (fn [new-m [x y mark]]
      (update new-m x #(str (subs % 0 y) mark (subs % (inc y)))))
    ogmap
    (mapcat identity overlay)))


(defn print-test [mmap]
  [(->> (map->meadows mmap)
        (assign-unique-marks)
        (overlay mmap))
   mmap])

(print-test c/meadow-2x2-grid)
(print-test c/meadow-32x32x4)