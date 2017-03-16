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

;(time (my106 1 4137))
(time (my106 7 43))
(time (my106 9 2))
(time (my106 2 9))
(time (my106 2 4))
(time (my106 2 2))
(time (my106 2 3))

(defn my106-faster [a b]
  (loop [paths [[a]] steps 1]
    (let [happy-paths (filter #(= (last %) b) paths)]
      (if (not-empty happy-paths)
        {:steps steps :paths happy-paths}
        (recur (->> paths
                    (map #(let [n (last %)
                                n1 (* n 2)
                                n2 (+ n 2)
                                n3 (/ n 2)]
                            (map (partial conj %) (if (and (even? n) (> n b)) [n1 n2 n3] [n1 n2]))))
                    (apply concat))
               (inc steps))))))

(time (my106-faster 1 4137))
(time (my106-faster 7 43))
(time (my106-faster 9 2))
(time (my106-faster 2 9))
(time (my106-faster 2 4))
(time (my106-faster 2 2))
(time (my106-faster 2 3))
