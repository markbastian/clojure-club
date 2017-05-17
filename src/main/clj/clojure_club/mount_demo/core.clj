(ns clojure-club.mount-demo.core
  (:require [mount.core :refer [defstate] :as mount]
            [environ.core :refer [env]]
            [monger.core :as mg]
            [cheshire.core :as ch])
  (:import (com.github.fakemongo Fongo)))

;You can config once from your env, but you can reload or modify.
env

;(mg/connect-via-uri connection-str)

;Dynamic vars
(def ^:dynamic *mongo-connection* (Fongo. "mongo server 1"))
(alter-var-root #'*mongo-connection* (constantly "New binding here"))
(with-bindings {#'*mongo-connection* (Fongo. "mongo server 1")}
  (prn *mongo-connection*))
(prn *mongo-connection*)

;You could use an atom, but you'd have to pass this around everywhere
(def mongo-connection (atom {:conn (Fongo. "mongo server 1")}))

(defstate
  db
  :start (Fongo. "mongo server 1")
  :stop (prn "It's over!"))

(defn wx->edn [url] (ch/parse-string (slurp url) true))

(defstate
  weather-service-url
  :start "http://api.wunderground.com/api/46b315c0cf22f273/conditions/q/ID/Boise.json")

;(mount/start)
;(wx->edn weather-service-url)

;(let [_ (mount/start-with
;        {#'weather-service-url
;         "http://api.openweathermap.org/data/2.5/weather?q=Boise,ID&appid=f5f2079dd7f4a6c3b6730d3441efb2c2&units=imperial"})
;      wx (wx->edn weather-service-url)
;      _ (mount/stop)]
;  wx)

;(mount/stop)
;(mount/start)
;(:current_observation (wx->edn weather-service-url))

;DB db = fongo.getDB("mydb");
;DBCollection collection = db.getCollection("mycollection");
;collection.insert(new BasicDBObject("name", "jon"));