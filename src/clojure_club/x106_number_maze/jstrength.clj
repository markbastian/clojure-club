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
