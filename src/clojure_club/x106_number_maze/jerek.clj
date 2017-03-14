(ns clojure-club.x106-number-maze.jerek)

(defn my106 [a b]
  (loop [paths [[a]]]
    (let [happy-paths (filter #(= (last %) b) paths)]
      (if (not-empty happy-paths)
        happy-paths
        (recur (->> paths
                    (map #(let [n (last %)
                                n1 (* n 2)
                                n2 (+ n 2)
                                n3 (/ n 2)]
                            (map (partial conj %) (if (even? n) [n1 n2 n3] [n1 n2]))))
                    (apply concat)))))))

