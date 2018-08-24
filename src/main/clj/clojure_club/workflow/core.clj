(ns clojure-club.workflow.core
  (:gen-class)
  (:require [taoensso.tufte :as tufte :refer [profile p]]
            [clojure.tools.cli :as cli]
            [clojure.pprint :as pp]))

;This sample was taken from:
; https://github.com/markbastian/numerics/blob/master/src/cljc/numerics/integration.cljc

;Challenges
; * What does a function do?
; * What are the arguments?
; * How do I work in the REPL

(defn abs-diff [a b] (Math/abs (double (- a b))))

(defn pct-diff [a b]
  (let [avg (* 0.5 (+ a b))]
    (if (zero? avg)
      (when (== a b 0.0) 0.0)
      (Math/abs (double (/ (- a b) avg 0.01))))))

(defn expand-samples [f s]
  (letfn [(h [[[lo :as a] [hi :as b]]]
            (let [m (* 0.5 (+ lo hi))]
              [a [m (f m)]]))]
    (conj (vec (mapcat h (partition 2 1 s))) (peek s))))

(defn uniform-sampler [f lo hi]
  (iterate (partial expand-samples f) [[lo (f lo)] [hi (f hi)]]))

(defn trapezoid-integrate [sample-points]
  (let [[lo] (first sample-points)
        [hi] (peek sample-points)
        a (->> sample-points (map second) (partition 2 1) flatten (reduce +))]
    (/ (* 0.5 (- hi lo) a) (dec (count sample-points)))))

(defn trapezoidal-integrator [f lo hi]
  (map trapezoid-integrate (uniform-sampler f lo hi)))

(defn romberg-extrapolate [[i s]]
  (let [k (Math/pow 4 i)
        den (dec k)
        f (fn [[a b]] (/ (- (* k b) a) den))]
    [(inc i) (->> s (partition 2 1) (map f))]))

(defn romberg-integrator [f lo hi]
  (->> [1 (trapezoidal-integrator f lo hi)]
       (iterate romberg-extrapolate)
       (map (comp first second))))

(defn iterative-integrator [integrator]
  (fn [f lo hi tol]
    (->> (integrator f lo hi)
         (partition 2 1)
         (drop-while (fn [[a b]] (>= (pct-diff a b) tol)))
         ffirst)))

(def romberg (iterative-integrator romberg-integrator))
(def trapezoid (iterative-integrator trapezoidal-integrator))

(defn simpsons-rule [f a b]
  (let [c (* 0.5 (+ a b))
        h (/ (- b a) 6.0)]
    (* h (+ (f a) (* 4.0 (f c)) (f b)))))

(defn adaptive-simpsons-rule
  ([f a b eps w]
   (let [c (* 0.5 (+ a b))
         l (simpsons-rule f a c)
         r (simpsons-rule f c b)
         ^double x (+ l r (- w))]
     (if (<= (Math/abs x) (* 15.0 eps))
       (+ l r (/ x 15.0))
       (+ (adaptive-simpsons-rule f a c (* 0.5 eps) l)
          (adaptive-simpsons-rule f c b (* 0.5 eps) r)))))
  ([f a b eps]
   (adaptive-simpsons-rule f a b eps (simpsons-rule f a b))))

;(tufte/add-basic-println-handler! {})
;(letfn [(f [x] (+ (Math/sin x) x))]
;  (profile
;    {:dynamic? true}
;    (dotimes [_ 50]
;      (p :romberg (romberg f 1 20 1E-6))
;      (p :trapezoid (trapezoid f 1 20 1E-6))
;      (p :adaptive-simpsons (adaptive-simpsons-rule f 1 20 1E-6)))))

(def cli-options
  ;; An option with a required argument
  [["-m" "--method METHOD" "Integration method"
    :default romberg
    :parse-fn #(symbol "clojure-club.workflow.core" %)
    :validate [(comp #{"romberg" "trapezoid"} name) "Must be one of romberg or trapezoid"]]
   ["-f" "--function function" "Function to be integrated"
    :default (fn [x] x)
    :parse-fn #(-> % read-string eval)]
   ["-l" "--lower-bound lower-bound" "Lower bound"
    :default 0.0
    :parse-fn #(some->> % (re-matches #"\d+(?:\.\d+)") Double/parseDouble)]
   ["-u" "--upper-bound upper-bound" "Upper bound"
    :default 1.0
    :parse-fn #(some->> % (re-matches #"\d+(?:\.\d+)") Double/parseDouble)]
   ["-h" "--help"]])

(defn -main [& args]
  (let [{:keys [options arguments summary errors] :as m} (cli/parse-opts args cli-options)]
    (let [{:keys [method lower-bound upper-bound function help]} options]
      (cond
        errors (prn errors)
        help (prn summary)
        (and method lower-bound upper-bound) (prn ((resolve method) function lower-bound upper-bound 1.0E-10))
        :default (prn summary)))))