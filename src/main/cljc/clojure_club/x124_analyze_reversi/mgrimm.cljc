(ns clojure-club.x124-analyze-reversi.mgrimm)

(defn analyze-reversi [board color]
  (let [moves [[-1 -1] [-1 0] [-1 1] [0 -1] [0 1] [1 -1] [1 0] [1 1]]] 
    (letfn [(opponent [c] (condp = c 'b 'w 'w 'b nil))
            (walk [board color [coord flips dir :as pos]] 
              (if dir
                (let [move (mapv + coord dir) next-color (get-in board move)] 
                  (cond
                    (and (= next-color 'e) (seq flips)) [move flips nil]
                    (= next-color (opponent color)) [move (conj flips move) dir]))
                pos))
            (start [board color]
              (apply concat (keep-indexed (fn [i r] (apply concat (keep-indexed (fn [j c] (when (= c color) (keep #(walk board c [[i j] #{} %]) moves))) r))) board)))] 
      (->> (start board color)
        (iterate (partial keep (partial walk board color)))
        (drop-while (fn [xs] (some #(nth % 2) xs)))
        first
        (map (juxt first second))
        (into {})))))

;; -----------------------------------------------------------------------------

(assert
  (= {[1 3] #{[1 2]}, [0 2] #{[1 2]}, [3 1] #{[2 1]}, [2 0] #{[2 1]}}
     (analyze-reversi '[[e e e e]
                        [e w b e]
                        [e b w e]
                        [e e e e]] 'w)))
(assert
  (= {[3 2] #{[2 2]}, [3 0] #{[2 1]}, [1 0] #{[1 1]}}
     (analyze-reversi '[[e e e e]
                        [e w b e]
                        [w w w e]
                        [e e e e]] 'b)))
(assert
  (= {[0 3] #{[1 2]}, [1 3] #{[1 2]}, [3 3] #{[2 2]}, [2 3] #{[2 2]}}
     (analyze-reversi '[[e e e e]
                        [e w b e]
                        [w w b e]
                        [e e b e]] 'w)))
(assert
  (= {[0 3] #{[2 1] [1 2]}, [1 3] #{[1 2]}, [2 3] #{[2 1] [2 2]}}
     (analyze-reversi '[[e e w e]
                        [b b w e]
                        [b w w e]
                        [b w w w]] 'b)))
