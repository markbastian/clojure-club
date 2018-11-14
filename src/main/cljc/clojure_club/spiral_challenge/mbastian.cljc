(ns clojure-club.spiral-challenge.mbastian
  (:require [clojure.string :as cs]))

(def dirs [[0 -1] [1 0] [0 1] [-1 0]])

(def dir-map (zipmap dirs (drop 1 (cycle dirs))))

(defn punch-out [{:keys [dir] :as m}]
  (case dir
    [1 0] (update m :max-x inc)
    [0 1] (update m :max-y inc)
    [-1 0] (update m :min-x dec)
    [0 -1] (update m :min-y dec)))

(defn spiral-step [{:keys [min-x max-x min-y max-y dir loc] :as m}]
  (let [[cx cy :as n] (mapv + (peek loc) dir)]
    (cond-> (update m :loc conj n)
            (or (< cx min-x) (< cy min-y) (> cx max-x) (> cy max-y))
            (-> punch-out (update :dir dir-map)))))

;;The actual sequence of spirals, decomplected from spiral contents
(def spiral-seq
  (iterate spiral-step {:loc [[0 0]] :min-x 0 :max-x 0 :min-y 0 :max-y 0 :dir [1 0]}))

(defn construct-grid
  "Convert grid boundaries to an empty grid"
  [{:keys [min-x max-x min-y max-y]}]
  (let [r (vec (repeat (inc (- max-x min-x)) nil))]
    (vec (repeat (inc (- max-y min-y)) r))))

(def fib-seq (map first (iterate (fn [[a b]] [b (+ a b)]) [1 1])))

(defn char-sqrs
  ([] (char-sqrs 2N))
  ([n] (let [digits (reverse (map (comp #(Long/parseLong %) str) (seq (str n))))]
         (lazy-seq (reduce (fn [s digit] (cons digit s)) (char-sqrs (* n n)) digits)))))

(defn grid-sum [grid [x y :as coord]]
  (let [xs ((juxt inc inc identity dec dec dec identity inc) x)
        ys ((juxt identity inc inc inc identity dec dec dec) y)
        neighbors (map vector xs ys)]
    (max 1 (reduce + (map #(or (get-in grid (rseq %)) 0) neighbors)))))

(defn generate-spiral [f n]
  (let [{:keys [min-x min-y loc] :as s} (nth spiral-seq n)
        locs (mapv #(mapv - % [min-x min-y]) loc)
        grid (construct-grid s)]
    (reduce (fn [g loc] (assoc-in g (rseq loc) (f g loc))) grid locs)))

(defn seq-spiral [sequ n]
  (let [fibs (take n sequ)
        {:keys [min-x min-y loc] :as grid-data} (nth spiral-seq n)]
    (reduce
      (fn [g [coord v]] (assoc-in g (mapv - coord [min-x min-y]) v))
      (construct-grid grid-data) (map vector loc fibs))))

(comment
  (seq-spiral fib-seq 20)
  (seq-spiral (char-sqrs) 20)
  (generate-spiral grid-sum 100))

(defn print! [grid]
  (doseq [row (rseq grid)]
    (prn row)))