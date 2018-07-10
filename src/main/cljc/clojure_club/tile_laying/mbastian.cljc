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

(def tiles
  [
   ;Central monastery
   [:L :L :L :L]
   [:L :L :L :L]
   [:L :L :L :L]
   [:L :L :L :L]
   ;Central monastery
   [:L :L :L :R]
   [:L :L :L :R]
   ;Mega-city with shield
   [:C :C :C :C]
   ;City open at bottom
   [:C :C :C :L]
   [:C :C :C :L]
   [:C :C :C :L]
   ;City open at bottom with shield
   [:C :C :C :L]
   ;City with single road
   [:C :C :C :R]
   ;City with single road + shield
   [:C :C :C :R]
   [:C :C :C :R]
   ;Corner city
   [:L :C :C :L]
   [:L :C :C :L]
   [:L :C :C :L]
   ;Corner city + shield
   [:L :C :C :L]
   [:L :C :C :L]
   ;Corner city with non-connected corner road
   [:R :C :C :R]
   [:R :C :C :R]
   [:R :C :C :R]
   ])

[[:U :U :U :U]
 [:U :R :R :U]
 [:U :C :C :C]
 [:U :U :C :L]]

(def initial-state {[0 0] [:R :C :R :L]})

(def state-1 {[0 0] [:R :C :R :L]
              [1 0] [:R :C :R :L]
              [0 1] [:R :L :R :C]})

(for [n (available-neighbors (keys state-1))]
  [n (mapv (fn [i v] (get v i)) [2 3 0 1] (map state-1 (neighbors n)))])

(defn compatible [piece slot]
  (->> piece
       cycle
       (partition 4 1)
       (take 4)
       ;not quite - maybe reverse seqs?
       (filter (fn [s] (every? true? (map (comp #(apply = %) #(filter identity %) vector) s slot))))))