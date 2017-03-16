(ns clojure-club.x106-number-maze.mbastian
  (:import (clojure.lang PersistentQueue)))

;Produce only the number of steps.
(defn number-maze[s g]
  (letfn[(nbrs[x] (cond-> [(* 2 x) (+ x 2)] (even? x) (conj (/ x 2))))]
    (inc (count (take-while #(not (% g)) (iterate #(reduce into #{} (map nbrs %)) #{s}))))))

(time (number-maze 1 4137))
(time (number-maze 7 43))
(time (number-maze 9 2))
(time (number-maze 2 9))
(time (number-maze 2 4))
(time (number-maze 2 2))

;Return a single path
(defn number-path [s g]
  (letfn [(nbrs [x] (cond-> [(+ 2 x) (* 2 x)] (even? x) (conj (/ x 2))))]
    (loop [v {} [[n :as edge] :as q] (conj PersistentQueue/EMPTY [s :done])]
      (cond
        (v g) (reverse (take-while (complement #{:done}) (iterate v g)))
        (v n) (recur v (pop q))
        :default (recur (conj v edge) (into (pop q) (map (fn [x] [x n]) (nbrs n))))))))

(time (number-path 1 4137))
(time (number-path 7 43))
(time (number-path 9 2))
(time (number-path 2 9))
(time (number-path 2 4))
(time (number-path 2 2))

;Return them all - very slow
(defn number-paths[s g]
  (letfn[(nbrs[x] (cond-> [['* (* 2 x)] ['+ (+ x 2)]] (even? x) (conj ['/ (/ x 2)])))
         (expand [paths] (for [path paths p (nbrs (peek path))
                               :when (not-any? #{(second p)} path)] (into path p)))]
    (->> (iterate expand [[s]])
         (some #(when (some (comp #{g} peek) %) %))
         (filter (comp #{g} peek)))))

;(time (number-paths 1 4137))
(time (number-paths 7 43))
(time (number-paths 9 2))
(time (number-paths 2 9))
(time (number-paths 2 4))
(time (number-paths 2 2))

;Return them all
(defn fast-number-paths[s g]
  (letfn[(nbrs[x] (cond-> [['* (* 2 x)] ['+ (+ x 2)]] (even? x) (conj ['/ (/ x 2)])))
         (expand [{:keys [paths visited]}]
           (let [p (for [path paths n (remove (comp visited second) (nbrs (peek path)))] (into path n))]
             {:paths p :visited (into visited (map peek p))}))]
    (let [pred (comp #{g} peek)]
      (->> (iterate expand {:paths [[s]] :visited #{s}})
           (some (fn [{:keys [paths]}] (when (some pred paths) paths)))
           (filter pred)))))

(time (fast-number-paths 1 4137))
(time (fast-number-paths 7 43))
(time (fast-number-paths 9 2))
(time (fast-number-paths 2 9))
(time (fast-number-paths 2 4))
(time (fast-number-paths 2 2))

;The below code deconstructs the above function to demonstrate how easy it is to
; assemble/dissassemble and debug Clojure forms.

;How the front grows
(defn nbrs[x] (cond-> [['* (* 2 x)] ['+ (+ x 2)]] (even? x) (conj ['/ (/ x 2)])))

;One generation/step of growth - Must be self-similar for iteration
(defn expand [{:keys [paths visited]}]
  (let [p (for [path paths n (remove (comp visited second) (nbrs (peek path)))] (into path n))]
    {:paths p :visited (into visited (map peek p))}))

;Lazy sequence that expands all paths.
; Note that iterate vs. loop-recur separates concerns of iteration from termination.
(defn expand-from [s]
  (iterate expand {:paths [[s]] :visited #{s}}))

;When to stop
(defn stop-cond [pred {:keys [paths]}] (when (some pred paths) paths))

;The entire solution
(defn fast-number-paths-deconstructed[s g]
  (let [pred (comp #{g} peek)]
    (->> (expand-from s)
         (some (partial stop-cond pred))
         (filter pred))))

(time (fast-number-paths-deconstructed 1 4137))
(time (fast-number-paths-deconstructed 7 43))
(time (fast-number-paths-deconstructed 9 2))
(time (fast-number-paths-deconstructed 2 9))
(time (fast-number-paths-deconstructed 2 4))
(time (fast-number-paths-deconstructed 2 2))