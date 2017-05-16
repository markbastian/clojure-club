(ns clojure-club.x113-making-data-dance.brockturner)

(defn fun [& all]
  (reify Iterable
    (toString [_] (clojure.string/join ", " (sort all)))
    (iterator [_] (.iterator (distinct all)))))

(assert (= "1, 2, 3" (str (fun 2 1 3))))
(assert (= '(2 1 3) (seq (fun 2 1 3))))
(assert (= '(2 1 3) (seq (fun 2 1 3 3 1 2))))
(assert (= '(1) (seq (apply fun (repeat 5 1)))))
(assert (= "1, 1, 1, 1, 1" (str (apply fun (repeat 5 1)))))
(assert (and (= nil (seq (fun)))
             (=  "" (str (fun)))))
