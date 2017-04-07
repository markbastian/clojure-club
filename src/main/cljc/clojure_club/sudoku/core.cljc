(ns clojure-club.sudoku.core
  (:require
    [clojure.string :as cs]
    [clojure-club.sudoku.mbastian :as mbastian]
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

(defn test-solver [solver]
  (time (map solver test-cases)))

(defn test-examples [solver]
  (time (map solver ex/all-example-problems)))

;Put your solver here
#_(profile
  {:dynamic? true}
  (dotimes [_ 5]
    (p :mbastian (doall (map mbastian/solve ex/all-example-problems)))))
#_(profile
    {:dynamic? true}
    (dotimes [_ 5]
      (p :mbastian (doall (map jstrength/solve ex/all-example-problems)))))
