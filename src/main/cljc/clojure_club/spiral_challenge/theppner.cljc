(ns clojure-club.spiral_challenge.theppner)

(def problem-description
  "
  Create a number spiral of one of the specified sequences.
  A number spiral is a 2 dimensional grid of numbers starting from the center and spiraling out (let's say counter-clockwise for this problem).
  Here's the 9th and 10th entry using the sequence of consecutive integers:
  [[5 4 3]
   [6 1 2]
   [7 8 9]]


  [[5 4 3]
   [6 1 2]
   [7 8 9 10]]

  sequences:
    -easy: sequence of squares (1 4 9 16 25 ...)
    [[25 16 9 ]
     [36 1  4 ]
     [49 64 81]]

    -medium: Fibonacci (1 1 2 3 5 8 13 ...)
    [[5  3  2 ]
     [8  1  1 ]
     [13 21 34]]

    -medium: Characters of squares of the previous term (2 2^2 4^2 16^2 256^2 ...) -> (2 4 16 256 65536 ...) -> (2 4 1 6 2 5 6 6 5 5 3 6 ...)
    [[2 6 1 6]
     [5 2 4 3]
     [6 6 5 5]]

    -hard: sum of previous adjacent and diagonal numbers
    [[5  4  2 ]
     [10 1  1 ]
     [11 22 x ]]
     -> (see that 22 + 1 + 1 = 24)
    [[5  4  2 ]
     [10 1  1 ]
     [11 22 24]]

  You will want to generate the nth spiral.  So you should be able to call a function like:
  (generate-spiral n)

  Even better:
  (generate-spiral sequence-fn n)")


;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;display the grid;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
(defn print-grid [coords]
      (let [min-x (apply min (map :x coords))
            max-x (apply max (map :x coords))
            width (apply max (map #(count (str (or (:value %) (:order %)))) coords))
            y-groups (->> (group-by :y coords) (sort-by first) reverse)]
           (keep (fn [[y row]]
                     (->> (reduce (fn [spots {x :x :as coord}] (assoc spots x coord))
                                  (apply merge (map (fn [x] {x {:x x :y y}}) (range min-x max-x))) row)
                          (map (comp :value second))
                          (map #(if % (format (str "[%" width "d]") %)
                                      (format (str "[%" width "s]") "")))
                          (apply println))) y-groups)))


;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;produce a lazy sequence for coordinates;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
(defn add-layer [coords]
      (let [side (Math/sqrt (:order (last coords)))
            n (-> (update (last coords) :x inc) (update :order inc))
            s1 (take (inc side) (iterate (fn [p] (-> (update p :y inc) (update :order inc))) n))
            s2 (take (inc side) (rest (iterate (fn [p] (-> (update p :x dec) (update :order inc))) (last s1))))
            s3 (take (inc side) (rest (iterate (fn [p] (-> (update p :y dec) (update :order inc))) (last s2))))
            s4 (take (inc side) (rest (iterate (fn [p] (-> (update p :x inc) (update :order inc))) (last s3))))]
           (concat s1 s2 s3 s4)))
(defn spiral-coords [] (flatten (iterate add-layer [{:x 0 :y 0 :order 1}])))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;sequence functions;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
(defn sequence-of-squares [spiral]
      (map #(assoc % :value (* (:order %) (:order %))) spiral))

(defn char-squares [spiral]
      (->> (iterate #(* % %) (biginteger 2))
           (mapcat (comp str))
           (map (comp read-string str))
           (map #(assoc %1 :value %2) spiral)))

;todo find better pattern than (rest (map last (reductions fn lazy-seq))) -> lazy-seq
(defn fibonacci [spiral]
      (->> (reductions
             (fn [new-spiral coordinate]
                 (->> (take-last 2 new-spiral)
                      (map :value)
                      (reduce +)
                      (#(if (zero? %) 1 %))
                      (assoc coordinate :value)
                      (conj new-spiral))) [] spiral)
           (map last)
           rest))

(defn sequence-of-summed-neighbors [spiral]
      (->> (reductions
             (fn [new-spiral {xp :x yp :y :as coordinate}]
                 (->> (keep (fn [{:keys [x y value order]}]
                                (when (and (<= (dec xp) x (inc xp))
                                           (<= (dec yp) y (inc yp)))
                                      (or value order))) new-spiral)
                      (reduce +)
                      (#(if (zero? %) 1 %))
                      (#(conj new-spiral (assoc coordinate :value %))))) [] spiral)
           (map last)
           rest))


;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;the meat of things;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn generate-spiral [stop-after sequence-fn]
      (->> (spiral-coords)
           sequence-fn
           (take-while #(>= stop-after (:value %)))
           print-grid
           doall))

(defn generate-nth-spiral [stop-after sequence-fn]
      (->> (spiral-coords)
           sequence-fn
           (take stop-after)
           print-grid
           doall))

(defn run-problem []
      (do
        (println "----------sequence of squares-------------")
        (generate-spiral 1000 sequence-of-squares)
        (println "----------------fibonacci-----------------")
        (generate-spiral 10000 fibonacci)
        (println "--------------char squares----------------")
        (generate-spiral    8 char-squares)
        (println "--------------char squares----------------")
        (generate-nth-spiral 39 char-squares)
        (println "-------sequence of summed neighbors-------")
        (generate-spiral 1000 sequence-of-summed-neighbors)
        "done!"))
