(ns clojure-club.mount-demo.weather
  (:require [mount.core :refer [defstate] :as mount]
            [cheshire.core :as ch]))

(def wunderground-url "http://api.wunderground.com/api/46b315c0cf22f273/conditions/q/ID/Boise.json")
(def openweathermap-url "http://api.openweathermap.org/data/2.5/weather?q=Boise,ID&appid=f5f2079dd7f4a6c3b6730d3441efb2c2")

(defn get-weather [url] (ch/parse-string (slurp url) true))

(defstate weather-service-url :start wunderground-url)

(defn weather [] (ch/parse-string (slurp weather-service-url) true))

