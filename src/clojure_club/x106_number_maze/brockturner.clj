(ns clojure-club.x106-number-maze.brockturner)

(defn maze-runner [start end]
  (loop [current #{start}
         past #{}
         dist 1]
    (if (current end)
      dist
      (recur (->> (reduce
                   (fn [nset n]
                     (let [tmp (conj nset (+ 2 n) (* 2 n))]
                       (if (= 0 (mod n 2))
                         (conj tmp (/ n 2))
                         tmp)))
                   #{} current)
                  (remove (into past current))
                  (apply hash-set))
             (into past current)
             (inc dist)))))

(time (maze-runner 1 4137))
(time (maze-runner 7 43))
(time (maze-runner 9 2))
(time (maze-runner 2 9))
(time (maze-runner 2 4))
