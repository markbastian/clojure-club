(ns clojure-club.core
  (:require [reagent.core :as reagent :refer [atom]]))

(enable-console-print!)

(println "Edits to this text should show up in your developer console.")

(defn on-js-reload []
      ;; optionally touch your app-state to force rerendering depending on
      ;; your application
      ;; (swap! app-state update-in [:__figwheel_counter] inc)
      )
