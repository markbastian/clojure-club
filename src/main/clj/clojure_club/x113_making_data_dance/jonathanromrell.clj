(ns clojure-club.x113-making-data-dance.jonathanromrell
  (:require [clojure.string :refer :all])
  (:import (clojure.lang Seqable)))

(def f (fn [& nums]
         (reify Seqable
           (seq [this] (when nums (distinct nums)))
           (toString [this] (join ", " (sort nums))))))

(assert (= "1, 2, 3" (str (f 2 1 3))))
(assert (= '(2 1 3) (seq (f 2 1 3))))
(assert (= '(2 1 3) (seq (f 2 1 3 3 1 2))))
(assert (= '(1) (seq (apply f (repeat 5 1)))))
(assert (= "1, 1, 1, 1, 1" (str (apply f (repeat 5 1)))))
(assert (and (= nil (seq (f)))
             (=  "" (str (f)))))
(prn "Ran successfully!")