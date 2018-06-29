(ns clojure-club.tile-laying.mbastian)

(defn neighbors [[i j]]
  (let [x ((juxt inc identity dec identity) i)
        y ((juxt identity inc identity dec) j)]
    (map vector x y)))

(defn available-neighbors [tiles]
  (->> tiles (mapcat neighbors) distinct (remove (set tiles))))

(defn random-neigbhor [tiles]
  (rand-nth (available-neighbors tiles)))

(defn random-grow [tiles]
  (conj tiles (random-neigbhor tiles)))

(defn rotate-ccw [shape]
  (apply mapv vector (map rseq shape)))