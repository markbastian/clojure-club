(ns clojure-club.tile-laying.mbastian)

(defn neighbors [[i j]]
  (let [x ((juxt inc identity dec identity) i)
        y ((juxt identity inc identity dec) j)]
    (map vector x y)))

(defn available-neighbors [tiles]
  (->> tiles (mapcat neighbors) distinct (remove (set tiles))))

(defn compute-slots [state]
  (for [n (available-neighbors (keys state))]
    [n (mapv (fn [i v] (get v i)) [2 3 0 1] (map state (neighbors n)))]))

(defn compatible? [oriented-piece slot]
  (let [match (comp #(apply = %) #(filter identity %) vector)]
    (every? true? (map match oriented-piece slot))))

(defn compatible-orientations [piece slot]
  (let [c (count piece)]
    ;Do I put distinct in the butlast position?
    (->> piece cycle (partition c 1) (take c) (filter #(compatible? % slot)) seq)))

(defn all-possible-moves [state piece]
  (->>
    state
    compute-slots
    (map (fn [[location slot]] [location (compatible-orientations piece slot)]))
    (filter second)
    (reduce (fn [m [k v]] (update m k into v)) {})))

;Coords are arranged as:
;[right top left bottom]

(def tiles
  [[:L :L :L :L]
   [:L :L :L :R]
   [:C :C :C :C]
   [:C :C :C :L]
   [:C :C :C :R]
   [:L :C :C :L]
   [:R :C :C :R]
   [:C :L :C :L]
   [:L :C :L :L]
   [:L :C :R :R]
   [:R :C :L :R]
   [:R :C :R :R]
   [:R :C :R :L]
   [:L :R :L :R]
   [:L :L :R :R]
   [:R :L :R :R]
   [:R :R :R :R]])

(def initial-state {[0 0] [:R :C :R :L]})

(def state-0 {[0 0] [:R :C :R :L]
              [1 0] [:C :R :R :C]
              [0 1] [:L :C :L :C]})

(all-possible-moves state-0 [:L :L :R :L])
(all-possible-moves state-0 (rand-nth tiles))

(defn random-move [state]
  (let [[loc moves] (->> tiles rand-nth (all-possible-moves state) seq rand-nth)]
    (assoc state loc (rand-nth moves))))

(take 10 (iterate random-move initial-state))