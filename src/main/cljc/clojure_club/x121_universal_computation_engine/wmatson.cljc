(ns main.cljc.clojure-club.x121-universal-computation-engine.wmatson)

;;http://stackoverflow.com/a/19113820
(def fix-op-quote-maddness {'+ + '/ / '- - '* *})

(defn node-evaluator [var-map]
   #(cond
      (var-map %) (var-map %)
      (list? %) (apply (fix-op-quote-maddness (first %)) (rest %))
      :default %))

(defn weird-eval [expr]
   (fn [var-map]
     (clojure.walk/postwalk
       (node-evaluator var-map)
       expr)))

;; (= 2 ((weird-eval '(/ a b)) '{b 8 a 16}))
;; (= 8 ((weird-eval '(+ a b 2)) '{a 2 b 4}))
;; (= [6 0 -4]
;;    (map (weird-eval '(* (+ 2 a)
;;                         (- 10 b)))
;;         '[{a 1 b 8}
;;           {b 5 a -2}
;;           {a 2 b 11}]))
;; (= 1 ((weird-eval '(/ (+ x 2)
;;                       (* 3 (+ y 1))))
;;       '{x 4 y 1}))
