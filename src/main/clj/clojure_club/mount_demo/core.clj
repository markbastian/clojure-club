(ns clojure-club.mount-demo.core
  (:require [mount.core :refer [defstate]])
  (:import (com.github.fakemongo Fongo)))

;(defstate db :start (Fongo. "mongo server 1"))
;
;(slurp "http://api.wunderground.com/api/46b315c0cf22f273/conditions/q/ID/Boise.json")
;(slurp "http://api.openweathermap.org/data/2.5/weather?q=Boise,ID&appid=f5f2079dd7f4a6c3b6730d3441efb2c2")

;DB db = fongo.getDB("mydb");
;DBCollection collection = db.getCollection("mycollection");
;collection.insert(new BasicDBObject("name", "jon"));