(ns clojure-club.x106-number-maze.rbelohlavek)

(defn number-maze-length
  ([start end] (number-maze-length [start] end 1))
  ([start end length]
   (if (some #{end} start)
     length
     (number-maze-length (remove nil? (mapcat #(vector
                                                 (* % 2)
                                                 (+ % 2)
                                                 (when (even? %) (/ % 2)))
                                              start)) end (+ 1 length)))))
