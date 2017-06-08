(ns clojure-club.core-async.playsync
  "Examples following along with http://www.braveclojure.com/core-async/"
  (:require [clojure.core.async
             :as a
             :refer [>! <! >!! <!! go chan buffer close! thread
                     alts! alts!! timeout]]))

;This creates a channel
(def echo-chan (chan))
(go (println (<! echo-chan)))
(>!! echo-chan "ketchup")

(do
  (thread (println (count (slurp (<!! echo-chan)))))
  (>!! echo-chan "https://www.sec.gov/Archives/edgar/daily-index/2017/QTR1/master.20170214.idx")
  (prn "This should not be blocked"))

(defn dl [url c]
  (go (>! c url)))

(def dlf
  (comp
    (map slurp)
    (map count)))

(let [c1 (chan 1 dlf) c2 (chan 1 dlf) c3 (chan 1 dlf) c4 (chan 1 dlf)]
  (dl "https://www.sec.gov/Archives/edgar/daily-index/2016/QTR1/company.20160104.idx" c1)
  (dl "https://www.sec.gov/Archives/edgar/daily-index/2016/QTR2/company.20160401.idx" c2)
  (dl "https://www.sec.gov/Archives/edgar/daily-index/2016/QTR3/company.20160701.idx" c3)
  (dl "https://www.sec.gov/Archives/edgar/daily-index/2016/QTR4/company.20161003.idx" c4)
  (let [[v c] (alts!! [c1 c2 c3 c4])] (prn v)))

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

(def x
  (comp
    (map str)
    (map reverse)))

(def rechan (chan 10 x))
(go (println (<! rechan)))
(>!! rechan 1123)