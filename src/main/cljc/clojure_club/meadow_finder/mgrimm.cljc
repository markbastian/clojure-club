(ns clojure-club.meadow-finder.mgrimm
  (:require
    [clojure.set :as set]
    [clojure.string :as string]))

(defn ->cave [cave]
  (reduce (fn [v x] (conj v (string/split x #""))) [] cave))

(defn neighbors [[y x]]
  (let [ys ((juxt dec identity inc identity) y)
        xs ((juxt identity inc identity dec) x)]
    (set (map vector ys xs))))

(defn step-meadow [cave [meadow seen [coord & coords]]]
  (if coord
    (if (= (get-in cave coord) " ")
      [(conj meadow coord) (conj seen coord) (into coords (set/difference (neighbors coord) seen))]
      [meadow (conj seen coord) coords])
    meadow))

(defn meadow-from [cave coord]
  (->> [#{} #{} [coord]]
       (iterate (partial step-meadow cave))
       (drop-while last)
       ffirst))

(defn step-cave [cave [meadows seen [coord & coords]]]
  (let [cell (get-in cave coord)]
    (cond
      (seen coord) [meadows seen coords]
      (= cell " ") (let [b (meadow-from cave coord)] [(conj meadows b) (into seen b) coords])
      :else [meadows (conj seen coord) coords])))

(defn meadows [cave]
  (let [h (count cave), w (count (first cave))]
    (->> [[] #{} (for [y (range h), x (range w)] [y x])]
         (iterate (partial step-cave cave))
         (drop-while last)
         ffirst
         (map sort))))

;; -----------------------------------------------------------------------------

(comment
  (= [[[0 0]] [[1 1]]] (meadows (->cave [" #" "# "]))))

