(ns clojure-club.sudoku.core
  (:require
    [clojure.string :as cs]
    [clojure-club.sudoku.mbastian :as mbastian]
    [clojure-club.sudoku.mgrimm :as mgrimm]
    [clojure-club.sudoku.jstrength :as jstrength]
    [clojure-club.sudoku.example-problems :as ex]
    [taoensso.tufte :as tufte :refer (defnp p profiled profile)]
    #?(:clj [clojure.java.io :as io])))

(tufte/add-basic-println-handler! {})

(def charmap #?(:clj {\1 1 \2 2 \3 3 \4 4 \5 5 \6 6 \7 7 \8 8 \9 9}
                :cljs {"1" 1 "2" 2 "3" 3 "4" 4 "5" 5 "6" 6 "7" 7 "8" 8 "9" 9}))

(defn read-soln [line]
  (->> line (partition 9) (mapv #(mapv charmap %))))

(defn read-solns [lines]
  (map read-soln (cs/split-lines lines)))

(def test-cases
  #?(:clj (-> "clojure_club/sudoku/sudoku17.txt" io/resource slurp read-solns)
     :cljs []))

(def test-cases-1k
  #?(:clj (-> "clojure_club/sudoku/sudoku17.1000.txt" io/resource slurp read-solns)
     :cljs []))

(defn test-solver [solver]
  (time (map solver test-cases)))

(defn test-examples [solver]
  (time (map solver ex/all-example-problems)))

;Put your solver here
#_(profile
  {:dynamic? true}
  (dotimes [_ 5]
    ;(p :mbastian (doall (map mbastian/solve ex/all-example-problems)))
    ;(p :jstrength (doall (map jstrength/solve ex/all-example-problems)))
    ;(p :mbastian-easy (doall (mbastian/solve ex/easy)))
    ;(p :mgrimm-easy (doall (mgrimm/solve ex/easy)))
    ;(p :jstrength-easy (doall (jstrength/solve ex/easy)))
    ;(p :mbastian-hard (doall (mbastian/solve ex/hard)))
    ;(p :mgrimm-hard (doall (mgrimm/solve ex/hard)))
    ;(p :jstrength-hard (doall (jstrength/solve ex/hard)))
    ;(p :mbastian-hard-17 (doall (mbastian/solve ex/hard-17)))
    ;(p :mgrimm-hard-17 (doall (mgrimm/solve ex/hard-17)))
    ;(p :jstrength-hard-17 (doall (jstrength/solve ex/hard-17)))
    ))
