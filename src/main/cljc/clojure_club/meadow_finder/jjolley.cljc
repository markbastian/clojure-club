(ns clojure-club.meadow-finder.jjolley
  (:require [clojure.math.numeric-tower :as math] [clojure.data])
  (:gen-class))

(def my-map
  ["################################"
   "#######################     ####"
   "######################       ###"
   "#####################        ###"
   "##################     ###  ####"
   "#################     ##########"
   "#################     ##########"
   "#################     ##########"
   "#####  ##########    ###########"
   "####    ##########  ############"
   "###      #######################"
   "###      #######################"
   "####    ########################"
   "################################"
   "################################"
   "################################"
   "################################"
   "################################"
   "########   #####################"
   "#######     ####################"
   "#######     ####################"
   "#######    #####################"
   "########  ######################"
   "################################"
   "################################"
   "##########   ###################"
   "#########     ##################"
   "#########     ##################"
   "##########    ##################"
   "###########    #################" 
   "###########    #################"
   "############  ##################"
   "################################"])


(defn is-meadow? [c] (= \space c))

(defn strs->coords
  [strs]
  (set (for [y (range (count strs))
             x (range (count (first strs)))
             :when (is-meadow? (get-in strs [y x]))]
         [x y])))

(defn get-adjacent 
  [[x y]]
  [[(inc x) y] [(dec x) y] [x (inc y)] [x (dec y)]])

(defn create-meadow
  [adjacent coords meadow]
  (if (empty? adjacent)
    [coords meadow]
    (recur 
      (filter coords (mapcat get-adjacent adjacent))
      (apply disj coords adjacent)
      (into meadow adjacent))))

(defn create-meadows
  [meadows coords]
  (if (empty? coords)
    meadows
    (let [[new-coords new-meadow] (create-meadow #{(first coords)} coords #{})]
      (recur (conj meadows new-meadow) new-coords))))

(defn find-meadows [strs]
  (->> strs
       strs->coords
       (create-meadows #{})))

(defn distance
  [p1 p2]
  (->> [p1 p2]
       (apply map #(math/expt (- %2 %1) 2))
       (reduce +)
       math/sqrt))
  
(defn get-closest-points
  [m1 m2]
  (apply min-key first (for [p1 m1
                             p2 m2]
                         [(distance p1 p2) p1 p2])))

(defn create-path
  [path [[x1 y1 :as p1] [x2 y2 :as p2]]]
  (if (= p1 p2)
    (conj path p2)
    (let [new-point (cond 
                      (< x1 x2) [(inc x1) y1]
                      (< y1 y2) [x1 (inc y1)]
                      (> x1 x2) [(dec x1) y1]
                      (> y1 y2) [x1 (dec y1)])]
      (recur (conj path p1) [new-point p2]))))

(defn connect-meadows
  [m1 m2]
  (->> [m1 m2]
       (apply (comp rest get-closest-points))
       (create-path [])))

; TODO: Make a function that updates the starting map
; TODO: Make a function that finds the two closest unconnected meadows
; TODO: Make a function that recursively connectes unconnected meadows


(defn -main 
  []
  (println (find-meadows my-map)))

  
