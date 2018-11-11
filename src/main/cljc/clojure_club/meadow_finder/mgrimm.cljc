(ns clojure-club.meadow-finder.mgrimm
  (:require
    [clojure.pprint :as pp]
    [clojure.set :as set]
    [clojure-club.meadow-finder.core :as mc]))

;; Meadow finding --------------------------------------------------------------

(defn neighbors [[y x]]
  (let [ys ((juxt dec identity inc identity) y)
        xs ((juxt identity inc identity dec) x)]
    (set (map vector ys xs))))

(defn step-meadow [cave [meadow seen [coord & coords]]]
  (if coord
    (if (= (get-in cave coord) \space)
      [(conj meadow coord) (conj seen coord) (into coords (set/difference (neighbors coord) seen))]
      [meadow (conj seen coord) coords])
    meadow))

(defn meadow-from [cave coord]
  (->> [#{} #{} [coord]]
       (iterate (partial step-meadow cave))
       (drop-while last)
       ffirst))

(defn step-cave [cave [meadows [coord & coords]]]
  (let [cell (get-in cave coord)]
    (cond
      (some (partial set/subset? #{coord}) meadows) [meadows coords]
      (= cell \space) (let [m (meadow-from cave coord)] [(conj meadows m) coords])
      :else [meadows coords])))

(defn meadows [cave]
  (let [h (count cave), w (count (first cave))]
    (->> [[] (for [y (range h), x (range w)] [y x])]
         (iterate (partial step-cave cave))
         (drop-while last)
         ffirst
         (map sort))))

;; Path finding ----------------------------------------------------------------

(defn a* [state]
  (when-let [node (apply min-key (:fscore state) (:open state))]
    (reduce
      (fn [{:keys [open paths gscore fscore] :as m} neighbor]
        (let [score (inc (gscore node))]
          (cond-> m
            (< score (or (gscore neighbor) Double/POSITIVE_INFINITY))
            (-> (update :open conj neighbor)
                (update :paths assoc neighbor node)
                (update :gscore assoc neighbor score)
                (update :fscore assoc neighbor (inc score))))))
      (-> state (update :open disj node) (update :closed conj node))
      (for [x (neighbors node)
            :when (= \# (get-in (:cave state) x))
            :when (not ((:closed state) x))]
        x))))

(defn find-path [cave start goal]
  (letfn [(path [node paths] (take-while identity (iterate paths node)))]
    (->> {:cave cave
          :open #{start}
          :closed #{}
          :paths {}
          :gscore {start 0}
          :fscore {start Double/POSITIVE_INFINITY}}
      (iterate a*)
      (drop-while (comp seq :open))
      first
      :paths
      (path goal)
      reverse)))

(defn annotate-path [cave path]
  (reduce (fn [v [y x]]
            (let [pre (subs (v y) 0 x), post (subs (v y) (inc x))]
              (assoc v y (apply str pre \o post))))
          cave path))

;; -----------------------------------------------------------------------------

;; meadow finding
#_
(doseq [x (meadows mc/meadow-32x32x4)]
  (println x))

;; path finding
#_
(let [cave mc/meadow-32x32x4]
  (doseq [x (annotate-path cave (find-path cave [0 0] [31 31]))]
    (println x)))
