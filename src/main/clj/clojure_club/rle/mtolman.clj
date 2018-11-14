(ns clojure-club.rle.mtolman
  (:require [clojure.string :as str]))
(use 'clojure.test)

(defn rle-encode [input]
  (if
    (= (count input) 0)
    ""
    (let [first-letter (first input)
          size-cur-seq (count (take-while #(= % first-letter) input))
          rest-encoded (rle-encode (subs input size-cur-seq))]
      (str size-cur-seq first-letter rest-encoded))))

(is (= "12W1B12W3B24W1B14W"
       (rle-encode "WWWWWWWWWWWWBWWWWWWWWWWWWBBBWWWWWWWWWWWWWWWWWWWWWWWWBWWWWWWWWWWWWWW")))

(defn rle-expand-seq [input]
  (-> input (first) (Integer/parseInt) (repeat (second input)) str/join))

(is (= "BBBB" (rle-expand-seq ["4", "B"])))

(defn rle-decode [input]
  (let [rle-pieces (re-seq #"(\d+)([\w\s])" input)
        rle-seq (map rest rle-pieces)]
    (str/join (map rle-expand-seq rle-seq))))

(is (= "WWWWWWWWWWWWBWWWWWWWWWWWWBBBWWWWWWWWWWWWWWWWWWWWWWWWBWWWWWWWWWWWWWW"
       (rle-decode "12W1B12W3B24W1B14W")))
