(ns clojure-club.macros.mbastian
  (:require [taoensso.tufte :as tufte :refer (defnp p profiled profile)]))

;Techniques for manual polynomial creation
(defn canonical-fn [t]
  (+ 134.96340251
     (* 477198.8675605 t)
     (* 0.0088553 t t)
     (* 1.4343E-5 t t t)))

(defn horner-fn [t]
  (+ 134.96340251 (* (+ 477198.8675605 (* (+ 0.0088553 (* 1.4343E-5 t)) t)) t)))

(canonical-fn 0.0426236319)
(horner-fn 0.0426236319)

;Methods for polynomial evaluation given a vector of coefficients
(defn eval-canonical [t cs]
  (reduce +
    (for [i (range (count cs)) :let [c (cs i) p (apply * (repeat i t))]]
      (* c p))))

(defn eval-horner [t c]
  (reduce #(+ (* t %1) %2) (rseq c)))

(eval-canonical 0.0426236319 [134.96340251 477198.8675605 0.0088553 1.4343E-5])
(eval-horner 0.0426236319 [134.96340251 477198.8675605 0.0088553 1.4343E-5])

;Define functions using the evals.
(defn canonical-poly [t]
  (eval-canonical t [134.96340251 477198.8675605 0.0088553 1.4343E-5]))

(defn horner-poly [t]
  (eval-horner t [134.96340251 477198.8675605 0.0088553 1.4343E-5]))

(canonical-poly 0.0426236319)
(horner-poly 0.0426236319)

;Macros that allow for definition of complex polynomials with the convenience
;of a coefficients vector and the performance of manual expansion.
(defmacro defpoly-canonical [n terms]
  (let [t# (eval terms)]
    `(defn ~n [~'t]
       (+ ~@(for [i (range (count t#)) :let [c (t# i)]]
              `(* ~c ~@(repeat i 't)))))))

(defmacro defpoly-horner [n terms]
  (let [t# (rseq (eval terms))]
    `(defn ~n [~'t]
     ~(reduce (fn [b a] `(+ ~a (* ~b ~'t))) t#))))

;Macroexpand to see what happend
(macroexpand
  '(defpoly-canonical canonical-poly-macro [134.96340251 477198.8675605 0.0088553 1.4343E-5]))

(macroexpand
  '(defpoly-horner horner-poly-macro [134.96340251 477198.8675605 0.0088553 1.4343E-5]))

;Define the functions
(defpoly-canonical canonical-poly-macro [134.96340251 477198.8675605 0.0088553 1.4343E-5])
(defpoly-horner horner-poly-macro [134.96340251 477198.8675605 0.0088553 1.4343E-5])

(canonical-poly-macro 0.0426236319)
(horner-poly-macro 0.0426236319)

;How do they perform?
(tufte/add-basic-println-handler! {})
(profile
  {:dynamic? true}
  (dotimes [_ 1000]
    (p :canonical-fn (canonical-fn 0.0426236319))
    (p :horner-fn (horner-fn 0.0426236319))
    (p :canonical-poly-hof (canonical-poly 0.0426236319))
    (p :horner-poly-hof (horner-poly 0.0426236319))
    (p :canonical-poly-macro (canonical-poly-macro 0.0426236319))
    (p :horner-poly-macro (horner-poly-macro 0.0426236319))))

;canonical vs. horner macro and hand-coded solutions are competitive.
;Does this still hold with many coefficients? Note that this is too hard
;to do manually.
(def coefficients
  (vec (repeatedly 100 (comp dec #(* 2 %) rand))))

(macroexpand
  '(defpoly-canonical canonical-poly-macro coefficients))

(defpoly-canonical big-canonical coefficients)
(defpoly-horner big-horner coefficients)

(profile
  {:dynamic? true}
  (dotimes [_ 100]
    (p :big-canonical (big-canonical 0.5))
    (p :big-horner (big-horner 0.5))
    (p :big-canonical-eval (eval-canonical 0.5 coefficients))
    (p :big-horner-eval (eval-horner 0.5 coefficients))))

;Example 2: A macro to rewrite functions with their opposite operation
(defmacro bizzaro-math
  "Do everything the opposite of normal"
  [[op & rest]]
  (conj rest (case op
               + -
               - +
               * /
               / *
               op)))

(bizzaro-math (+ 2 3))
(bizzaro-math (- 2 3))
(bizzaro-math (* 2 3))
(bizzaro-math (/ 2 3))
(bizzaro-math (rem 2 3))