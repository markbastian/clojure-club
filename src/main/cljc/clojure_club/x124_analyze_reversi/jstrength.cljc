(ns clojure-club.x124-analyze-reversi.jstrength
   (:require [clojure.test :refer :all]))

(defn south [x]
  (update x 0 inc))

(defn reversi [board color]
  (for [r (range 4)
        c (range 4)]
    (when (= color (get-in board [r c]))
      (loop [r0 r
             c0 c
             cord-dirs #{:s :w :e :n}
             paths {:s {} :w {} :e {} :n {}}]
        (if (= 'b (get-in board [r0 c0]))

          )
        )
      ))
   )

(rest (take-while #(< (% 0) 4) (iterate south [1 2])))

(update [1 2] 0 inc)

(defn reversi [board color]
  (let [ret (for [r (range 1 4)
                  c (repeat 1)
                  :while (= (get-in board [r c]) 'b)]
              (do
                (println [r c])
                [r c]))]
    [(last ret) (rest ret)]))

(defn find-next-empty [board start dir-fn]
  (dir-fn
    (last (take-while #(= 'b (get-in board %))
                      (rest (iterate #(update % 1 inc) [0 1])))))
  )

(let [board '[[e w b b]]]
  #_(take-while #(and (get-in board %) (not= (get-in board %) 'e))
              (rest (iterate #(update % 1 inc) [0 1])))
  (find-next-empty board [0 1] #(update % 1 inc))
  #_(loop []

    ))

(reversi '[[e e e e]
           [e w b e]
           [e b w e]
           [e e e e]] 'w)

(deftest one
  (is (= {[1 3] #{[1 2]}, [0 2] #{[1 2]}, [3 1] #{[2 1]}, [2 0] #{[2 1]}}
         (reversi '[[e e e e]
                    [e w b e]
                    [e b w e]
                    [e e e e]] 'w))))

(run-tests)
