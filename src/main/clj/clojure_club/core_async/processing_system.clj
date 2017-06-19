(ns clojure-club.core-async.processing-system
  (:require [clojure.core.async
             :as a
             :refer [>! <! >!! <!! go go-loop chan buffer close! thread
                     alts! alts!! timeout pipeline]]
            [clojure.string :as cs]
            [cheshire.core :as ch]
            [clojure.java.io :as io]
            [clojure-csv.core :as csv]
            [clojure.edn :as edn]
            [hickory.core :as hik]
            [hickory.select :as hsel]))

(def json-channel (chan 1024))
(def csv-channel (chan 1024))
(def html-channel (chan 1024))
(def misc-channel (chan 1024))
(def results-channel (chan 1024))

(defn handle-csv [s]
  (Thread/sleep (rand-int 1000))
  (->> s
       csv/parse-csv
       (map (fn [v] (zipmap [:name :age :state] v)))
       (map #(update % :age edn/read-string))))

(defn handle-json [s]
  (Thread/sleep (rand-int 1000))
  (ch/parse-string s true))

(defn handle-html [s]
  (Thread/sleep (rand-int 1000))
  (->> s
       hik/parse
       hik/as-hickory
       (hsel/select (hsel/tag :td))
       (map (comp first :content))
       (partition 2)
       (map #(zipmap [:name :age] %))
       (map #(update % :age edn/read-string))))

(defn uploader [filename]
  (cond
    (cs/ends-with? filename ".json") json-channel
    (cs/ends-with? filename ".csv") csv-channel
    (cs/ends-with? filename ".html") html-channel
    :default misc-channel))

(def queue (chan 1024 (map #(go (>! (uploader %) %)))))

(def scrape
  (comp
    (map #(str "clojure_club/core_async/" %))
    (map io/resource)
    (map slurp)))

(pipeline 16 results-channel (comp scrape (mapcat handle-json)) json-channel)
(pipeline 16 results-channel (comp scrape (mapcat handle-csv)) csv-channel)
(pipeline 16 results-channel (comp scrape (mapcat handle-html)) html-channel)

(go-loop []
  (prn (<! results-channel))
  (recur))

(go (>! queue "foo.json"))
(go (>! queue "foo.csv"))
(go (>! queue "foo.html"))
