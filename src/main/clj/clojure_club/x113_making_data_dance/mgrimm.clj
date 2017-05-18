(ns clojure-club.x113-making-data-dance.mgrimm
  (:require [clojure.string :as s]))

(defn dance [& xs]
  (reify
    clojure.lang.Seqable
    (toString [_] (s/join ", " (sort xs)))
    (seq [_] (when xs (distinct xs)))))

;; -----------------------------------------------------------------------------

(assert (= "1, 2, 3" (str (dance 2 1 3))))
(assert (= '(2 1 3) (seq (dance 2 1 3))))
(assert (= '(2 1 3) (seq (dance 2 1 3 3 1 2))))
(assert (= '(1) (seq (apply dance (repeat 5 1)))))
(assert (= "1, 1, 1, 1, 1" (str (apply dance (repeat 5 1)))))
(assert (and (= nil (seq (dance)))
             (= "" (str (dance)))))
