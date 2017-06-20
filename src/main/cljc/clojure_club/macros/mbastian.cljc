(ns clojure-club.macros.mbastian
  (:require [taoensso.tufte :as tufte :refer (defnp p profiled profile)]))

(defn horner [t c]
  (reduce #(+ (* t %1) %2) (rseq c)))

(horner 0.0426236319 [134.96340251 477198.8675605 0.0088553 1.4343E-5])

(defn lm-horner [t] (horner t [134.96340251 477198.8675605 0.0088553 1.4343E-5]))
(lm-horner 0.0426236319)

(defn lm-direct [t]
  (+ 134.96340251 (* (+ 477198.8675605 (* (+ 0.0088553 (* 1.4343E-5 t)) t)) t)))
(lm-direct 0.0426236319)

(defmacro defpoly [n terms]
  `(defn ~n [~'t]
     ~(reduce (fn [b a] `(~'+ ~a (~'* ~b ~'t)))
              (rseq terms))))

(defpoly lm-macro [134.96340251 477198.8675605 0.0088553 1.4343E-5])
(lm-macro 0.0426236319)

(macroexpand
  '(defpoly lm-macro [134.96340251 477198.8675605 0.0088553 1.4343E-5]))

(tufte/add-basic-println-handler! {})
(profile
  {:dynamic? true}
  (dotimes [_ 1000]
    (p :horner (lm-horner 0.0426236319))
    (p :expanded (lm-direct 0.0426236319))
    (p :macro (lm-macro 0.0426236319))))