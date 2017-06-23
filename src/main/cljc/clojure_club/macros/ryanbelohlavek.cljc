(ns clojure-club.macros.ryanbelohlavek)

;;taken from: http://blog.klipse.tech/clojure/2016/05/09/macro-tutorial-4.html

;;define a macro that defines a function, which when called, will println
;;its args before evaluating

;;first attempt
(defmacro defnargprinter [func-name args & body]
  `(defn ~func-name [& ~args]
     (println '~func-name "called with" (vec ~args))
     ~@body))

;;which works...
(defnargprinter foo [x y] (+ x y 10))

(foo 1 2)
;(macroexpand-1 '(defnargprinter foo [x y] (+ x y 1)))

;;but when you try to use it with a destructured args (using &) fn...
(defnargprinter foo2 [w & [x y z & rest]]
                (println w)
                (+ x z))
;;CompilerException java.lang.RuntimeException: Unable to resolve symbol: & in this context

;(macroexpand-1 '(defnargprinter foo [w & [x y z & rest]]
;                 (println w)
;                 (+ x z)))
;(foo2 1 2 3 4 5)


;;one way around this is...
;(defmacro defnargprinter [func-name args & body]
;  `(defn ~func-name [& args#]
;     (println '~func-name "called with" (vec args#))
;     (let [~args args#] ;<--- here, plus auto-gensym
;       ~@body)))

;;since
;(let [[w & [x y z & rest]] [1 2 3 4 5 6 7]]
;  (println w x y z rest))

;;now it works
;(defnargprinter foo2 [w & [x y z & rest]]
;                (println w)
;                (+ x z))

;(foo2 1 2 3 4 5)
;(foo2 1 2 3 4 5 6 7 8)

;TODO next make this work with multi-arity function defn


