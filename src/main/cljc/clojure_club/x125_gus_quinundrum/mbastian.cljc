(ns clojure-club.x125-gus-quinundrum.mbastian)

(def __
  '(fn []
     (let [q (str (quote (fn [] (let [q (str (quote %s))] (format q q)))))]
       (format q q))))

(= (str __) ((eval __)))

(=
  (str '(fn [] (let [q (quote (fn [] (let [q (quote %s)] (format (str q) (str q)))))] (format (str q) (str q)))))
  ((fn [] (let [q (quote (fn [] (let [q (quote %s)] (format (str q) (str q)))))] (format (str q) (str q))))))

;;Even shorter!
(=
  (str '(fn [] (let [q (str (quote (fn [] (let [q (str (quote %s))] (format q q)))))] (format q q))))
  ((fn [] (let [q (str (quote (fn [] (let [q (str (quote %s))] (format q q)))))] (format q q)))))