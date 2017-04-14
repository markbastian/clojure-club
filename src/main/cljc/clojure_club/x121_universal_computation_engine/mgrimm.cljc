(ns clojure-club.x121-universal-computation-engine.mgrimm
  (:require [clojure.walk :as walk]))

(defn f' [e dvar]
  (cond
    (list? e)
    (let [[op u v] e
          u' (f' u dvar) v' (f' v dvar)]
      (case op
        + (list '+ u' v')
        - (list '- u' v')
        * (list '+ (list '* u v') (list '* v u'))
        / (list '/ (list '- (list '* v u') (list '* u v')) (list '* v v))))
    (number? e) 0
    (and (symbol? e) (= e dvar)) 1
    :else 0))

(defn calc [formula]
  (fn [smap]
    (->> formula
         (walk/prewalk
           (fn [x]
             (cond-> x
               (and (list? x) (#{'f'} (first x)))
               (->> rest (apply f')))))
         (walk/postwalk
           (fn [x]
             (if (list? x)
               (let [[op & os] (replace (merge smap {'/ / '* * '+ + '- -}) x)]
                 (apply op os))
               x))))))

;; -----------------------------------------------------------------------------

(assert (= 2 ((calc '(/ a b))
              '{b 8 a 16})))

(assert (= 8 ((calc '(+ a b 2))
              '{a 2 b 4})))

(assert (= [6 0 -4]
           (map (calc '(* (+ 2 a)
                          (- 10 b)))
                '[{a 1 b 8}
                  {b 5 a -2}
                  {a 2 b 11}])))

(assert (= 1 ((calc '(/ (+ x 2)
                        (* 3 (+ y 1))))
              '{x 4 y 1})))

(assert (= 0 ((calc '(f' 2 x)) nil)))
(assert (= 1 ((calc '(f' x x)) nil)))
(assert (= 0 ((calc '(f' y x)) nil)))
(assert (= 3 ((calc '(f' (* x y) x)) '{x -1 y 3})))
(assert (= 10 ((calc '(f' (* x x) x)) '{x 5})))
(assert (= 40 ((calc '(f' (+ (* x x) (* 3 y)) x)) '{x 20 y -1})))
(assert (= 1/8 ((calc '(f' (/ x (* 2 y)) x)) '{x -1 y 4})))
