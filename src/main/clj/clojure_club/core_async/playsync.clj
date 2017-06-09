(ns clojure-club.core-async.playsync
  "Examples following along with http://www.braveclojure.com/core-async/"
  (:require [clojure.core.async
             :as a
             :refer [>! <! >!! <!! go go-loop chan buffer close! thread
                     alts! alts!! timeout]]))

;This creates a channel
(def echo-chan (chan))
(go (println (<! echo-chan)))
(go (>! echo-chan "ketchup"))

(do
  (thread (println (count (slurp (<!! echo-chan)))))
  (>!! echo-chan "https://www.sec.gov/Archives/edgar/daily-index/2017/QTR1/master.20170214.idx")
  (prn "This should not be blocked"))

(defn hot-dog-machine
  []
  (let [in (chan)
        out (chan)]
    (go (<! in)
        (>! out "hot dog"))
    [in out]))

(let [[in out] (hot-dog-machine)]
  (>!! in "pocket lint")
  (<!! out))
