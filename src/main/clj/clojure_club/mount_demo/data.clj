(ns clojure-club.mount-demo.data
  (:require [mount.core :as mount]
            [monger.core :as mg]
            [mount.core :refer [defstate] :as mount]
            [monger.collection :as mc])
  (:import (com.github.fakemongo Fongo)))

(defn fongo-conn [] (Fongo. "mongo server 1"))
;Normally use env to configure connection
(defn mongo-conn [] (mg/connect))

(defstate
  conn
  :start (mongo-conn)
  :stop (prn "Stopping mongo connection."))

(defstate db :start "prod")

(defn get-db [] (.getDB conn db))

(defn insert-data [data] (mc/insert (get-db) "data" data))