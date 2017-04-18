(ns clojure-club.playground.mbastian
  (:require [clojure.core.reducers :as r]))

(defn work-proxy [input]  (Thread/sleep input)  1)

(def work-proxy-thunk (partial work-proxy 1000))

(defn counter [thunk]
  (thunk))

;Think of work proxy as set amount of calculation we want to do.
;What I was trying to do was get the reducers to run each thunk in parallel.
; I can do this with pmap, but if I try to use transducers, it seems its immediately realized.

;(time (count-state-reducer 40))
;"Elapsed time: 40019.119145 msecs"
;Note this is the same time as count-state, probably because the thunks aren't
;execute in parallel, but during the r/map?
(defn count-state-reducer [limit]
  (->>  (repeat limit work-proxy-thunk)
        ;http://clojure.com/blog/2012/05/08/reducers-a-library-and-model-for-collection-processing.html
        ;You must use a vec or map to get free parallelism. No lists or generic seqs!
        vec
        ;(r/take limit)
        (r/map counter)
        (r/fold 8 + +)
        ))

;(time (count-state-better 40))
;"Elapsed time: 4006.483026 msecs"
(defn count-state-better [limit]
  (->> (repeat work-proxy-thunk)
       (take limit)
       (pmap counter)
       (reduce +)))

;(time (count-state 40))
;"Elapsed time: 40020.016874 msecs"
(defn count-state [limit]
  (->> (repeat work-proxy-thunk)
       (take limit)
       (map counter)
       (reduce +)))
