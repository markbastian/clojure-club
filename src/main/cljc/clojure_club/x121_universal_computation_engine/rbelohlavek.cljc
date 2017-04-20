(ns clojure-club.x121-universal-computation-engine.rbelohlavek)

(def operators
  {(symbol "/") /
   (symbol "*") *
   (symbol "+") +
   (symbol "-") -
   (symbol "sin")  #(Math/sin %)
   (symbol "cos")  #(Math/cos %)
   (symbol "tan")  #(Math/tan %)
   (symbol "abs")  #(Math/abs %)
   (symbol "exp")  #(Math/exp %)
   (symbol "cei")  #(Math/ceil %)
   (symbol "flr")  #(Math/floor %)
   (symbol "log")  #(Math/log10 %)
   (symbol "ln")   #(Math/log %)
   (symbol "cosh") #(Math/cosh %)
   (symbol "sinh") #(Math/sinh %)
   (symbol "tanh") #(Math/tanh %)
   ;...
   })

(defn compute [[operator & args]]
  (fn [symvals]
    (apply (get operators operator)
           (map #(cond
                   (symbol? %) (get symvals %)
                   (list? %) ((compute %) symvals)
                   :else %)
                args))))

;tests
(= 2 ((compute '(/ a b))
       '{b 8 a 16}))

(= 8 ((compute '(+ a b 2))
       '{a 2 b 4}))

(= [6 0 -4]
   (map (compute '(* (+ 2 a)
                     (- 10 b)))
        '[{a 1 b 8}
          {b 5 a -2}
          {a 2 b 11}]))

(= 1 ((compute '(/ (+ x 2)
                   (* 3 (+ y 1))))
       '{x 4 y 1}))