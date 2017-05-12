(ns clojure-club.mount-demo.core
  (:require [mount.core :refer [defstate] :as mount]
            [environ.core :refer [env]]
            [monger.core :as mg]
            [cheshire.core :as ch]
            [clojure-club.mount-demo.data :as d]
            [clojure-club.mount-demo.weather :as wx]
            [clojure.pprint :as pp]
            [monger.collection :as mc])
  (:import (com.github.fakemongo Fongo)))

;(pp/pprint env)

;Global startup and shutdown - Normally call (mount/start) somewhere and don't call (mount/stop).
;(mount/start)
;(pp/pprint (wx/weather))
;(mount/stop)
;
;(mount/start)
;(mc/insert (d/get-db) "data" (wx/weather))
;(mount/stop)

;Note that start-with - stop is not a stack - (mount/stop) does not pop the state. It stops everything.

;Hot swap the db to test.
(let [_ (mount/start-with
          {#'d/db "test"})
      w (wx/weather)
      res (mc/insert (d/get-db) "data" w)
      _ (mount/stop)]
  res)

;Use an alternate weather service
(let [_ (mount/start-with
          {#'wx/weather-service-url wx/openweathermap-url})
      w (wx/weather)
      res (mc/insert (d/get-db) "data" w)
      _ (mount/stop)]
  res)

(let [_ (mount/start-with
          {#'wx/weather-service-url wx/openweathermap-url})
      w (wx/weather)
      res (mc/insert (d/get-db) "data" w)
      _ (mount/stop)]
  res)

;In memory - all else the same
(let [_ (mount/start-with
          {#'d/conn (d/fongo-conn)})
      conn-info (bean d/conn)
      w (wx/weather)
      res (mc/insert (d/get-db) "data" w)
      the-weather (mc/find-maps (d/get-db) "data")
      _ (mount/stop)]
  [conn-info res the-weather])

;In memory + alt wx svc
(let [_ (mount/start-with
          {#'d/conn (d/fongo-conn)
           #'wx/weather-service-url wx/openweathermap-url})
      conn-info (bean d/conn)
      res1 (d/insert-data (wx/weather))
      res2 (d/insert-data (wx/weather))
      the-weather (mc/find-maps (d/get-db) "data")
      _ (mount/stop)]
  {:connection-info conn-info
   :db-results [res1 res2]
   :data the-weather})

;There should be no state here since we've shut it all down.
(pp/pprint d/conn)