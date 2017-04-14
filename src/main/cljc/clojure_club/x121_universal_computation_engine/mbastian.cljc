(ns clojure-club.x121-universal-computation-engine.mbastian)

(defn compute [[op & r]]
  (let [ops {'+ + '- - '/ / '* * 'sin #(Math/sin %) 'cos #(Math/cos %) '** #(Math/pow %1 %2)}]
    (fn [m] (apply
              (ops op)
              (map (fn [t]
                     (cond
                       (symbol? t) (m t)
                       (number? t) t
                       :default ((compute t) m))) r)))))

(defn differentiate [f]
  (fn [m]
    (cond
      (number? f) 0
      (m f) 1
      (list f) (case (first f)
                 + (reduce + (map (fn [x] ((differentiate x) m)) (rest f)))
                 - (reduce - (map (fn [x] ((differentiate x) m)) (rest f)))
                 * (reduce + (map
                               (fn [i] (let [[u [x & r]] (split-at i (rest f))]
                                         (* ((differentiate x) m) ((compute (cons '* (into u r))) m))))
                               (range (count (rest f)))))
                 / :not-yet))))


;(differentiate '(+ (* x x x) (* 2 x x) (* -4 x) -3))
;((differentiate '(+ (* x x x 3) (* x x) (* x -87) -84)) {'x 2})
;((compute '(+ (* x x x 3) (* x x) (* x -87) -84)) {'x 2})

;; -----------------------------------------------------------------------------

(assert (= 2 ((compute '(/ a b))
               '{b 8 a 16})))

(assert (= 8 ((compute '(+ a b 2))
               '{a 2 b 4})))

(assert (= [6 0 -4]
           (map (compute '(* (+ 2 a)
                          (- 10 b)))
                '[{a 1 b 8}
                  {b 5 a -2}
                  {a 2 b 11}])))

(assert (= 1 ((compute '(/ (+ x 2)
                        (* 3 (+ y 1))))
               '{x 4 y 1})))

((compute '(+ (** (sin (+ x 2)) 2) (** (cos (+ x 2)) 2))) '{x 1})
