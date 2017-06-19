(ns clojure-club.core-async.simple-chanduce
  (:require [clojure.core.async
             :as a
             :refer [>! <! >!! <!! go go-loop chan buffer close! thread
                     alts! alts!! timeout pipeline]]))

;;;;;;;;;;;;;;Very simple single transducer with one channel an go block;;;;;;;;;;;;;;
(def multistage-xducer
  (comp
    (map str)
    (map reverse)))

(def rechan (chan 10 multistage-xducer))
;Only gets one value
(go (println (<! rechan)))

;Execute the above go block for every put since we aren't looping
(>!! rechan 1123)
(>!! rechan (rand))

;;;;;;;;;;;;;A network of channels with transducers;;;;;;;;;;;;;;

;The transducers
(def doubler (map (partial * 2)))
(def squarer (map #(* % %)))

;The channels
(def in-chan (chan))
(def even-chan (chan 10 squarer))
(def odd-chan (chan 10 doubler))

;Go loops that keep things live
(go-loop [res (<! in-chan)]
         (if (even? res) (>!! even-chan res) (>!! odd-chan res))
         (recur (<! in-chan)))

(go-loop [e (<! even-chan) o (<! odd-chan)]
         (prn (+ e o))
         (recur (<! even-chan) (<! odd-chan)))

;Inject some stuff
(defn prime-the-channel []
  (doseq [i (range 100)] (>!! in-chan i)))

