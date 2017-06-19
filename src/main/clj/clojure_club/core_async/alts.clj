(ns clojure-club.core-async.alts
  (:require [clojure.core.async
             :as a
             :refer [>! <! >!! <!! go go-loop chan buffer close! thread
                     alts! alts!! timeout]]))

(defn schedule-download [url channel]
  (go (>! channel url)))

(def processing-function
  (comp
    (map slurp)
    (map count)))

(let [c1 (chan 1 processing-function)
      c2 (chan 1 processing-function)
      c3 (chan 1 processing-function)
      c4 (chan 1 processing-function)]
  (schedule-download "https://www.sec.gov/Archives/edgar/daily-index/2016/QTR1/company.20160104.idx" c1)
  (schedule-download "https://www.sec.gov/Archives/edgar/daily-index/2016/QTR2/company.20160401.idx" c2)
  (schedule-download "https://www.sec.gov/Archives/edgar/daily-index/2016/QTR3/company.20160701.idx" c3)
  (schedule-download "https://www.sec.gov/Archives/edgar/daily-index/2016/QTR4/company.20161003.idx" c4)
  (let [[v c] (alts!! [c1 c2 c3 c4])]
    (prn v)))

(def urls
  ["https://www.sec.gov/Archives/edgar/daily-index/2016/QTR1/company.20160104.idx"
   "https://www.sec.gov/Archives/edgar/daily-index/2016/QTR2/company.20160401.idx"
   "https://www.sec.gov/Archives/edgar/daily-index/2016/QTR3/company.20160701.idx"
   "https://www.sec.gov/Archives/edgar/daily-index/2016/QTR4/company.20161003.idx"])

(let [[v c] (alts!! (map #(let [c (chan 1 processing-function)]
                            (schedule-download % c)
                            c) urls))]
  (prn v))

(let [downloads (map #(let [c (chan 1 processing-function)]
                        (schedule-download % c) c) urls)]
  (go
    (while true
      (let [[v c] (alts!! downloads)]
        (prn v)))))


