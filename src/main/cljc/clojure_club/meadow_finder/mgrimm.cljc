(ns clojure-club.meadow-finder.mgrimm
  (:require
    [clojure.data.priority-map :refer [priority-map]]
    [clojure.pprint :as pp]
    [clojure.set :as set]
    [clojure-club.meadow-finder.core :as mc]))

(defn neighbors [[y x]]
  (let [ys ((juxt dec identity inc identity) y)
        xs ((juxt identity inc identity dec) x)]
    (set (map vector ys xs))))

;; Meadow finding --------------------------------------------------------------

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
  (if (some (partial set/subset? #{coord}) meadows)
    [meadows coords]
    (let [m (meadow-from cave coord)]
      [(conj meadows m) coords])))

(defn meadows [cave]
  (let [h (count cave), w (count (first cave))]
    (->> [[] (for [y (range h), x (range w) :when (= \space (get-in cave [y x]))] [y x])]
         (iterate (partial step-cave cave))
         (drop-while last)
         ffirst
         (map sort))))

;; Path finding ----------------------------------------------------------------

(def inf #?(:clj Double/POSITIVE_INFINITY, :cljs +Infinity))
(def cost
  {nil    inf
   \space inf
   \^     10
   \#     1})

(defn manhattan [[y1 x1] [y2 x2]]
  (+ (Math/abs (- y1 y2)) (Math/abs (- x1 x2))))

(defn a* [{:keys [cave open closed] :as state}]
  (when-let [node (ffirst open)]
    (reduce
      (fn [{:keys [goal score] :as m} neighbor]
        (let [new-score (+ (score node) (cost (get-in cave node)))]
          (cond-> m
            (< new-score (or (score neighbor) inf))
            (-> (update :open assoc neighbor (+ new-score (manhattan neighbor goal)))
                (update :paths assoc neighbor node)
                (update :score assoc neighbor new-score)))))
      (-> state (update :open dissoc node) (update :closed conj node))
      (filter (complement closed) (neighbors node)))))

(defn find-path [cave start goal]
  (letfn [(path [node paths] (reverse (take-while identity (iterate paths node))))]
    (->> {:cave cave
          :goal goal
          :open (priority-map start (manhattan start goal))
          :closed #{}
          :paths {}
          :score {start 0}}
         (iterate a*)
         (drop-while (comp seq :open))
         first
         :paths
         (path goal))))

(defn annotate-path [cave path]
  (let [dot \u00b7]
    (reduce
      (fn [v [y x]]
        (let [pre (subs (v y) 0 x), post (subs (v y) (inc x))]
          (assoc v y (apply str pre dot post))))
      cave path)))

;; -----------------------------------------------------------------------------

;; meadow finding tests
#_
(doseq [x (meadows mc/meadow-32x32x4)]
  (println x))

;; path finding tests
(def expensive-cave
  ["#######"
   "###^###"
   "##^^^^#"
   "^##^###"
   "##^##^#"
   "####^##"])

(def expensive-cave2
  ["##############################"
   "#^^^^^^^^^^^^^^^^^^#^^^^^^^^^#"
   "##############################"])

#_
(let [cave expensive-cave]
  (doseq [x (annotate-path cave (find-path cave [0 15] [2 15]))]
    (println x)))

#_
(let [cave mc/meadow-32x32x4]
  (doseq [x (annotate-path cave (find-path cave [0 0] [31 31]))]
    (println x)))
