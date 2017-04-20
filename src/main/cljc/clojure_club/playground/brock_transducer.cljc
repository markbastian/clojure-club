(ns clojure-club.playground.brock-transducer)

(defmacro time-forms [coll & forms]
  (->> `(->> ~coll ~@forms count time)
       (repeat 10)
       (into `((prn "finished threading")))
       (concat (->> `(-> (comp ~@forms)
                         (sequence ~coll)
                         count
                         time)
                    (repeat 10)
                    (into `((prn "finished seq transducing")))))
       (concat (->> `(-> (into [] (comp ~@forms) ~coll)
                         count
                         time)
                    (repeat 10)
                    (into `((prn "finished into transducing")))))
      (concat (->> `(-> (comp ~@forms)
                        (transduce (fn ([] 0)([x# & r#](inc x#))) ~coll)
                        time)
                   (repeat 10)
                   (into `((prn "finished eager transducing")))))
       (concat (->> `(->> (eduction ~@forms ~coll)
                          (into [])
                          count
                          time)
                    (repeat 10)
                    (into `((prn "finished eduction")))))
       (cons `do)
       seq))

#_(time-forms (range 10000) (map inc))

#_(time-forms (range 1000000) (map (partial * 2)) (map inc) (map (partial str "stuff-")))

#_(time-forms (range 1000) (map (partial * 2)) (map inc) (mapcat range) (map (partial str "stuff-")))
