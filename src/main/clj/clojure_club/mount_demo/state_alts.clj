(ns clojure-club.mount-demo.state-alts
  (:require [monger.core :as mg])
  (:import (com.github.fakemongo Fongo)))

;Note: You can config once from your env, but you can reload or modify.
; env

;;Dynamic vars - In this case I'll leave it unbound. No reloading. No start/stop interdependencies.
;; If I try to initialize this immediately I am likely to have problems.
;(def ^:dynamic *mongo-connection*)
;(alter-var-root #'*mongo-connection* (constantly (mg/connect)))
;(with-bindings {#'*mongo-connection* (Fongo. "mongo server 1")}
;  (prn *mongo-connection*))
;(prn *mongo-connection*)

;;You could use an atom, but you'd have to pass this around everywhere. No reloading or dependency chains.
;; If I try to initialize this immediately I am likely to have problems.
;(def mongo-connection (atom {:conn (mg/connect)}))          ;bad!
;;Switch to Fongo
;(swap! mongo-connection :conn (Fongo. "mongo server 1"))
;(prn mongo-connection)
