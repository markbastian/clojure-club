(ns clojure-club.macros.brockturner)

(defmacro hasty+ [a b]
  (+ a b))

(defmacro normal+ [a b]
  `(+ ~a ~b))

(defmacro hasty-resolver+ [a b]
  (+ (if (symbol? a) (resolve a) a)
     (if (symbol? b) (resolve b) b)))

(let [a 1]
  (macroexpand-1 '(hasty+ 1 2))
  ; (macroexpand-1 '(hasty+ a 2)) ;; throws error
  (macroexpand-1 '(normal+ 1 2))
  (macroexpand-1 '(hasty-resolver+ a 2)) ;; resolves 'a'
  ; (map normal+ [1 2 3] [4 5 6]) ;; fail: macros are NOT functions
  )



(defmacro safe+ [a b]
  `(when (and (number? ~a) (number? ~b))
     (+ ~a ~b)))

(macroexpand-1 '(safe+ (do (prn "here") 1) 2)) ;; prints "here" twice



(defmacro unsafe-add-4 [a b]
  `(let [~'x 4] (+ ~'x ~a ~b)))

(defmacro safe-add-4 [a b]
  `(let [x# 4] (+ x# ~a ~b)))

(let [x 5000]
  (macroexpand-1 '(unsafe-add-4 x 2)) ;; returns 10 instead of 5006
  (macroexpand-1 '(safe-add-4 x 2))
  )



;; I don't know why you would ever want to do this, but here it is.
(defmacro plus-def [num]
  `(defn ~(symbol (str "plus-" num)) [~'x]
     (+ ~num ~'x)))

(plus-def 2)
(map plus-2 (range 10))



(defmacro plus-range-def [start end]
  (cons `do
        (for [n (range start end)]
          `(plus-def ~n))))

(plus-range-def 10 12)
(map (comp plus-2 plus-10 plus-11) (range 10))
