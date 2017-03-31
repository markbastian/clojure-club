(ns clojure-club.x125-gus-quinundrum.brockturner)

;; There's likely a cleaner solution, but it works
(fn [] (let [x '[fn [] [let [x y] (str (apply list (update (assoc-in x [2 1 1] (list (quote quote) x)) 2 (partial apply list))))]]] (str (apply list (update (assoc-in x [2 1 1] (list (quote quote) x)) 2 (partial apply list))))))

;; test, for funsies
(assert (= (str '(fn [] (let [x '[fn [] [let [x y] (str (apply list (update (assoc-in x [2 1 1] (list (quote quote) x)) 2 (partial apply list))))]]] (str (apply list (update (assoc-in x [2 1 1] (list (quote quote) x)) 2 (partial apply list)))))))
           ((fn [] (let [x '[fn [] [let [x y] (str (apply list (update (assoc-in x [2 1 1] (list (quote quote) x)) 2 (partial apply list))))]]] (str (apply list (update (assoc-in x [2 1 1] (list (quote quote) x)) 2 (partial apply list)))))))))

;; 4-clojure doesn't like "update", so...
(fn [] (let [x '[fn [] [let [x y] (str (apply list (update-in (assoc-in x [2 1 1] (list (quote quote) x)) [2] (partial apply list))))]]] (str (apply list (update-in (assoc-in x [2 1 1] (list (quote quote) x)) [2] (partial apply list))))))


; This clojure-injection hack works on the 4-clojure site
; -> nil ((fn ([] nil) ([x] "->")))
(assert (= (str '-> nil ((fn ([] nil) ([x] "->"))))
           (-> nil ((fn ([] nil) ([x] "->"))))))
