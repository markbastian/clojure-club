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

;(time (number-maze-length 1 4137))
;(time (number-maze-length 7 43))
;(time (number-maze-length 9 2))
;(time (number-maze-length 2 9))
;(time (number-maze-length 2 4))
;(time (number-maze-length 2 2))
