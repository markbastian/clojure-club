(ns clojure-club.playground.mbastian
  (:require [clojure.core.reducers :as r]
            [taoensso.tufte :as tufte :refer (defnp p profiled profile)]))

(defn slow-range [n delay] (map (fn [i] (fn [] (when delay (Thread/sleep delay)) i)) (range n)))
(defn slow-rangev [n delay] (mapv (fn [i] (fn [] (when delay (Thread/sleep delay)) i)) (range n)))

(defn work-proxy [input]  (Thread/sleep input)  1)

(def work-proxy-thunk (partial work-proxy 1000))

(defn counter [thunk]
  (thunk))

;Plain old threading
(defn baseline [limit delay]
  (->> (slow-range limit delay) (map counter) (map inc) (filter odd?) (reduce +)))

;pmap
(defn baseline+pmap [limit delay]
  (->> (slow-range limit delay) (pmap counter) (map inc) (filter odd?) (reduce +)))

;Not reduced since it's not in a vec
(defn slow-range-reducer [limit delay partitions]
  (if partitions
    (->> (slow-range limit delay) (r/map counter) (r/map inc) (r/filter odd?) (r/fold partitions + +))
    (->> (slow-range limit delay) (r/map counter) (r/map inc) (r/filter odd?) (r/fold +))))

;Reduced since it's in a vec
(defn slow-rangev-reducer [limit delay partitions]
  (if partitions
    (->> (slow-rangev limit delay) (r/map counter) (r/map inc) (r/filter odd?) (r/fold partitions + +))
    (->> (slow-rangev limit delay) (r/map counter) (r/map inc) (r/filter odd?) (r/fold +))))

;Same as above, but with logic broken out
(def rxf #(->> % (r/map counter) (r/map inc) (r/filter odd?)))

(defn slow-rangev-reducer-pipe [limit delay partitions]
  (if partitions
    (->> (slow-rangev limit delay) rxf (r/fold partitions + +))
    (->> (slow-rangev limit delay) rxf (r/fold +))))

;Transducers compose pipelines
(def xf
  (comp (map counter) (map inc) (filter odd?)))

;This is not executed in parallel. When would I transduce vs. reduce?
(defn slow-rangev-transducer [limit delay]
  (transduce xf + (slow-rangev limit delay)))

(tufte/add-basic-println-handler! {})
(profile
  {:dynamic? true}
  (let
    ;[samples 16384 delay nil partitions 8]
    ;[samples 1048576 delay nil partitions nil]
    [samples 64 delay 1 partitions 8]
    (dotimes [_ 5]
      (p :baseline (do (baseline samples delay)))
      (p :pmap (do (baseline+pmap samples delay)))
      (p :reducer-seq (do (slow-range-reducer samples delay partitions)))
      (p :reducer-vec (do (slow-rangev-reducer samples delay partitions)))
      (p :reducer-vec-pipe (do (slow-rangev-reducer-pipe samples delay partitions)))
      (p :transducer (do (slow-rangev-transducer samples delay))))))

(defn froo [v]
  [(p :fold (r/fold + v))
   (p :r-reduce (r/reduce + v))
   (p :simple-reduce (reduce + v))])

(defonce v (vec (doall (range 10000000))))

(profile
  {:dynamic? true}
  (dotimes [_ 1] (p :basic-comparisons (froo v))))

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
        (r/map inc)
        (r/filter odd?)
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

;Transducers - non-parallel?
(def xf2
  (comp
    (take 40)
    (map counter)
    (map inc)))
;(time (transduce xf2 + (repeat work-proxy-thunk)))
