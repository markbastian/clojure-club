(ns clojure-club.x121-universal-computation-engine.mgrimm)

(defn calc [formula] 
  (fn [smap] 
    (clojure.walk/postwalk 
      #(if (list? %) 
         (let [[op & os] (replace (merge smap {'/ / '* * '+ + '- -}) %)] 
           (apply op os)) 
         %) 
      formula)))

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
