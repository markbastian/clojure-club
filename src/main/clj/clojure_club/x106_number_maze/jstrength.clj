(ns clojure-club.x106-number-maze.jstrength)

(defn num-maze [s e]
  (let [ops (juxt (partial * 2)
                  (partial + 2)
                  #(if (even? %) (/ % 2) Integer/MAX_VALUE))]
    (loop [xs [s]
           l 1]
      (if (some (partial = e) xs)
        l
        (recur (mapcat ops xs) (inc l))))))

;(time (num-maze 1 4137))
(time (num-maze 7 43))
(time (num-maze 9 2))
(time (num-maze 2 9))
(time (num-maze 2 4))
(time (num-maze 2 2))