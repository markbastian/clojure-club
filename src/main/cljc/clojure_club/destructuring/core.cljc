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

(defn invert-map [mp]
  (reduce
    (fn [m [k v]] (update m k conj v))
    {}
    (for [[k v] mp n v] [n k])))

(invert-map {:a '(1 2 3), :b '(1 2 3 6 7), :c '(1 2 8 9 10)})

(defn n-primes [n]
  (loop [[f & r] (drop 2 (range)) res []]
  (if (= n (count res))
    res
    (recur (remove #(zero? (mod % f)) r) (conj res f)))))

;I can convert any loop-recur into an iterate with a map
(defn sieve [{[f & r] :sieve :as m}]
  (-> m
      (update :primes conj f)
      (assoc :sieve (remove #(zero? (mod % f)) r))))

(nth (map :primes (iterate sieve {:sieve (drop 2 (range))})) 100)

(def prime-seq
  (letfn [(remover [n s](remove #(zero? (mod % n)) s))]
    (->> [2 (remover 2 (drop 2 (range)))]
         (iterate (fn [[p [f & r]]] [f (remover f r)]))
         (map first))))