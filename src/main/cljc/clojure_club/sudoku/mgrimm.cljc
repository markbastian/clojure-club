(ns clojure-club.sudoku.mgrimm
  (:refer-clojure :exclude [==])
  (:use [clojure.core.logic])
  (:require [clojure.core.logic.fd :as fd]
            [clojure-club.sudoku.example-problems :as ex]))

(defn solve [initial]
  (let [cells (mapv (fn [c l] (do (if c (== c l)) l)) 
                   (apply concat initial) (repeatedly 81 lvar))
        rows (partition 9 cells)
        cols (apply map vector rows)
        blks (for [y (range 0 81 27) x (range 0 9 3)] 
               (flatten (take-nth 3 (partition 3 (subvec cells (+ y x) (+ y 27))))))]
    (run 1 [q]
      (== q cells)
      (everyg #(fd/in % (fd/interval 1 9)) cells)
      (everyg fd/distinct rows)
      (everyg fd/distinct cols)
      (everyg fd/distinct blks))))
