(ns clojure-club.x113-making-data-dance.rbelohlavek)

(defn f [& args]
  (reify
    Object (toString [this] (clojure.string/join ", " (map str (sort args))))
    clojure.lang.Seqable (seq [this] (if (empty? args) nil (distinct args)))))

;tests
(= "1, 2, 3" (str (f 2 1 3)))
(= '(2 1 3) (seq (f 2 1 3)))
(= '(2 1 3) (seq (f 2 1 3 3 1 2)))
(= '(1) (seq (apply f (repeat 5 1))))
(= "1, 1, 1, 1, 1" (str (apply f (repeat 5 1))))
(and (= nil (seq (f)))
     (=  "" (str (f))))

