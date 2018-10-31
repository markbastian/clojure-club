(ns clojure-club.meadow-finder.mbastian
  (:require [clojure.set :refer [difference intersection]]
            [clojure-club.meadow-finder.core :as mc]))

(defn neighbors [[x y]]
  [[(inc x) y] [(dec x) y] [x (inc y)] [x (dec y)]])

(defn meadow-coords [grid]
  (for [i (range (count grid))
        j (range (count (grid i)))
        :when (= " " (str (get-in grid [i j])))]
    [i j]))

(defn find-meadows [grid]
  (let [[f & r] (meadow-coords grid)]
    (loop [frontier [f] unvisited (set r) visited [] meadows []]
      (if (first frontier)
        (let [front (filter unvisited (distinct (mapcat neighbors frontier)))
              u (difference unvisited (set frontier))
              v (into visited frontier)]
          (if (seq front)
            (recur front u v meadows)
            (recur [(first u)] (disj u (first u)) [] (conj meadows v))))
        meadows))))

(defn update-frontier [{:keys [frontier unvisited] :as m}]
  (let [u (difference unvisited frontier)]
    (-> m
        (assoc :unvisited u)
        (update :meadow into frontier)
        (assoc :frontier (intersection u (set (mapcat neighbors frontier)))))))

(defn create-meadow [{:keys [unvisited meadow frontier] :as m}]
  (if (empty? frontier)
    (let [f (first unvisited)]
      (cond-> (into m {:meadow #{} :frontier #{}})
              f (update :frontier conj f)
              (seq meadow) (update :meadows conj meadow)))
    m))

(defn find-meadows-2 [c]
  (->> { :unvisited (set (meadow-coords c))}
       (iterate (comp create-meadow update-frontier))
       (drop-while (fn [{:keys [frontier unvisited]}]
                     (or (seq frontier) (seq unvisited))))
       (map :meadows)
       first))

(find-meadows mc/meadow-2x2-grid)
(find-meadows mc/meadow-32x32x4)

(find-meadows-2 mc/meadow-2x2-grid)
(find-meadows-2 mc/meadow-32x32x4)

(= (set (map set (find-meadows mc/meadow-32x32x4)))
   (set (find-meadows-2 mc/meadow-32x32x4)))