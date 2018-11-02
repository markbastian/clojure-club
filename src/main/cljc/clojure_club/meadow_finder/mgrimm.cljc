(ns clojure-club.meadow-finder.mgrimm
  (:require
    [clojure.set :as set]
    [clojure.string :as string]
    [clojure-club.meadow-finder.core :as mc]))

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

;; -----------------------------------------------------------------------------

(comment
  (= [[[0 0]] [[1 1]]] (meadows mc/meadow-2x2-grid))
  (meadows mc/meadow-32x32x4))
