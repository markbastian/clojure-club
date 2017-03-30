(ns clojure-club.x125-gus-quinundrum.mbastian)

(fn [] (let [q (quote (fn [] (let [q (quote %s)] (format (str q) (str q)))))] (format (str q) (str q))))

(= 
  (str '(fn [] (let [q (quote (fn [] (let [q (quote %s)] (format (str q) (str q)))))] (format (str q) (str q)))))
       ((fn [] (let [q (quote (fn [] (let [q (quote %s)] (format (str q) (str q)))))] (format (str q) (str q))))))