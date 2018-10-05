(ns clojure-club.spiral-challenge.mbastian)


(def seed [[0]])

(def dirs [[1 0] [0 1] [-1 0] [0 -1]])

(def dir-map (zipmap dirs (drop 1 (cycle dirs))))

(defn step [{:keys [grid dir loc f]}]
  (let [turn? (nil? (get-in grid (mapv + loc (dirs dir))))]
    {:grid grid :dir dir :loc n f}))

(step {:grid [[0]] :dir [1 0] :loc [0 0] :f inc})