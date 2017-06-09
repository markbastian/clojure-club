(ns clojure-club.core-async.pipeline
  (:require [clojure.core.async
             :as a
             :refer [>! <! >!! <!! go go-loop chan buffer close! thread
                     alts! alts!! timeout pipeline]]
            [clojure.string :as cs]))

;;;;;;;Create a pipeline;;;;;;;;;;
(def a (chan))
(def b (chan))
(def c (chan))
(def d (chan))

(def x0
  (comp
    (mapcat #(cs/split % #"\s+"))
    (map count)
    (filter even?)))

(pipeline 10 b x0 a)
(pipeline 10 c (map inc) b)
(pipeline 10 d (replace {1 "one" 2 "two" 3 "three" 4 "four" 5 "five" 6 "six" 7 "seven"}) c)

(go (>! a "The quick brown fox jumped over the lazy dog"))
(go (>! a "Cheese and sprinkles"))
(go (>! a "I like turtles"))

(go-loop []
         (println (<! d))
         (recur))