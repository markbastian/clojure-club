(ns clojure-club.macros.jstrength
  (:require [taoensso.timbre :as timbre])
  (:import (org.slf4j MDC) ))

(defmacro with-attribute
  "Adds any custom attribute to kibana logs."
  [^String attr value & body]
  `(do
     (. MDC put ~attr (str ~value))
     ~@body
     (. MDC remove ~attr)))

(with-attribute "count" 12 (timbre/info "Aggregated some documents"))
