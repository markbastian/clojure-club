(ns spiral.client
  (:require [reagent.core :as r]))

(defn get-width [n] (-> n Math/sqrt Math/ceil))
(defn get-height [n] (-> n Math/sqrt Math/round))

(defn create-n-vectors [n] (vec (repeat n [])))

(defn prepend [x v] 
  (into (if (vector? x) x [x]) v))

(defn append [x v]
  (into v (if (vector? x) x [x])))

(defn transition-spiral [isIncreasing val row spiral]
  (if ((not nil?) val)
    (let [update-fn (if isIncreasing append prepend)
          oldRow (get spiral row)
          newRow (update-fn val oldRow)]
      (assoc spiral row newRow))
    spiral))
  
(defn transition 
  [isIncreasing row values spiral]
  (if (empty? values)
    spiral
    (let [newRow ((if isIncreasing + -) row 1)
          val (first values)
          newValues (rest values)
          newSpiral (transition-spiral isIncreasing val row spiral)]
      (recur isIncreasing newRow newValues newSpiral)))) 

(defn write-spiral-row [isIncreasing rowNum val spiral]
  (if ((not nil?) val)
    (let [update-fn (if isIncreasing append prepend)
          oldRow (get spiral rowNum)
          newRow (update-fn val oldRow)
          newSpiral (assoc spiral rowNum newRow)]
      newSpiral)
    spiral))

(defn write-spiral [isIncreasing rowNum values spiral]
  (if (empty? values)
    spiral
    (let [val (first values)
          newValues (rest values)
          newSpiral (write-spiral-row isIncreasing rowNum val spiral)]
      (recur isIncreasing rowNum newValues newSpiral))))

(def color (r/atom "#008000"))
(defn hexify-number [n]
  (.toString n 16))

(defn pad-0 [s]
  (if (= 1 (count s))
    (str 0 s)
    s))
    
(defn update-color []
  (let [[_ a b c d e f] @color
        red (js/parseInt (str a b) 16)
        green (js/parseInt (str a b) 16)
        blue (js/parseInt (str a b) 16)
        newRed (str (hexify-number (max 0 (min 200 (+ red 5)))))
        newGreen (str (hexify-number (max 0 (min 255 (+ 40 green)))))
        newBlue (str (hexify-number (max 0 (min 200 (+ blue 5)))))
        newColor (str "#" (pad-0 newRed) (pad-0 newGreen) (pad-0 newBlue))]
    (reset! color newColor)
    (print "new color is: " newColor)
    newColor))

(defn build-spiral
  "the workhorse"
  [my-seq n isTransition isIncreasing startRow numWrite numTransition i spiral]
  (if (> i n)    
    (remove empty? (reverse spiral))
    (let [values (map #(hash-map :val %1 :color (update-color)) (take (if isTransition numTransition numWrite) (drop i my-seq)))
          newIsIncreasing (if isTransition (not isIncreasing) isIncreasing)
          newStartRow ((if isIncreasing + -) startRow (if isTransition numTransition 1))
          newI (+ i (count values))
          newSpiral ((if isTransition transition write-spiral) isIncreasing startRow values spiral)
          newNumTransition (min (- (inc n) i) (if isTransition (inc numTransition) numTransition))
          newNumWrite (min (- (inc n) i) (if isTransition numWrite (inc numWrite)))]
      (recur my-seq n (not isTransition) newIsIncreasing newStartRow newNumWrite newNumTransition newI newSpiral))))

(defn generate-spiral
  "A function that generates a spiral with the provided sequence"
  [my-seq n]
  (let [height (get-height n)
        spiral (create-n-vectors height)
        startRow (Math.floor (/ height 2))]
    (reset! color "#008000")
    (build-spiral my-seq n false true startRow 2 0 1 spiral)))

(def odd-numbers (iterate (partial + 2) 1))
(def top-right-corner (map first (iterate (fn [[val delta]] [(+ delta val) (+ delta 8)]) [1 2])))
(def bottom-left-corner (map first (iterate (fn [[val delta]] [(+ delta val) (+ delta 8)]) [1 6])))

(defn get-pad-transition-number [n]
  (let [height (get-height n)]
    (count (take-while #(> height %1) odd-numbers)))) 

(defn get-pad-fn [n]
  (let [pad-transition-number (get-pad-transition-number n)
        bottom-left (nth bottom-left-corner pad-transition-number)
        top-right (nth top-right-corner (inc pad-transition-number))]
    (if (and (>= n bottom-left) (< n top-right))
      append
      prepend)))

(defn pad-spiral [width spiral]
  (let [update-fn (get-pad-fn (count (flatten spiral)))]
     (map 
       (fn [row] 
         (if (< (count row) width) 
           (update-fn (take (- width (count row)) (repeat nil)) row) 
           row)) 
       spiral)))

(defn print-spiral [spiral]
  [:div
    (map (fn [row] [:div (map #([:span (str % )] row))]))])

(defn get-max-width [spiral]
  (reduce #(max %1 (count %2)) 0 spiral))

(def spiral-n (r/atom 9))

(defn atom-input [value]
  [:input {:type "number"
           :value @value
           :on-change #(reset! value (-> % .-target .-value))}])
                          
(defn get-spiral [my-seq n]
  (let [spiral (generate-spiral my-seq n)
        max-width (get-max-width spiral)
        padded-spiral (pad-spiral max-width spiral)]
    padded-spiral))
  
(defn content []
  [:div 
   [:div "Number"
    [atom-input spiral-n]]
   [:div "Spiral: "
    [:div (for 
            [row (get-spiral (range) @spiral-n)] 
            ^{:key row} [:div 
                         {:style {:height "55px"}} 
                         (for 
                           [item row] 
                           ^{:key item} [:div 
                                         {:style 
                                          {:margin "2px" 
                                           :width "50px" 
                                           :height "50px" 
                                           :background-color (:color item) 
                                           :float "left" :color "white" 
                                           :text-align "center" 
                                           :line-height "50px"}} (:val item)])])]]])

(r/render-component [content]
  (.querySelector js/document "#app"))
