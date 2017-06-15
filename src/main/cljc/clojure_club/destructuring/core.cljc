(ns clojure-club.destructuring.core)

(def fib-seq (map first (iterate (fn [[a b]] [b (+ a b)]) [0N 1N])))

;(defn mxn [fab m]
;  (loop [[f & r] m]
;    (recur r (map () r))))

(defn det2x2 [[[a b] [c d]]]
  (- (* a d) (* b c)))

(defn det3x3 [[[a b c] [d e f] [g h i]]]
  (+ (* a (- (* e i) (* f h)))
     (* b (- (* f g) (* d i)))
     (* c (- (* d h) (* e g)))))

(defn circumcircle [[Ax Ay :as A] [Bx By :as B] [Cx Cy :as C]]
  (let [[cx cy :as c] [(det3x3 [[Ax Ay 1] [Bx By 1] [Cx Cy 1]])
                       (det3x3 [[Ax Ay (reduce + (map * A A))]
                                [Bx By (reduce + (map * B B))]
                                [Cx Cy (reduce + (map * C C))]])]
        d (map - A c)
        r (Math/sqrt (reduce + (map * d d)))]
    {:cx cx :cy cy :r r}))

