(ns clojure-club.x124-analyze-reversi.brockturner)

(defn gen-path [board path-type end-type start-y-x dir-y-x]
  (when-not (apply = 0 dir-y-x)
    (loop [path [start-y-x]]
      (let [prev (map + dir-y-x (last path))
            next (get-in board prev)]
        (cond
          (= path-type next) (recur (conj path prev))
          (= end-type next) path
          :else nil)))))

(defn get-moves [board turn]
  (->> (for [y (-> board count range)
             x (-> y board count range)
             :when (= 'e (get-in board [y x]))]
         (for [x-dir (range -1 2)
               y-dir (range -1 2)]
           (gen-path board ({'w 'b 'b 'w} turn) turn [y x] [y-dir x-dir])))
       (apply concat)
       (filter #(-> % seq count (> 1)))
       (reduce (fn [m [start & path]]
                 (assoc m start (apply hash-set path)))
               {})))

(assert (= {[1 3] #{[1 2]}, [0 2] #{[1 2]}, [3 1] #{[2 1]}, [2 0] #{[2 1]}}
           (get-moves '[[e e e e]
                        [e w b e]
                        [e b w e]
                        [e e e e]] 'w)))

(assert (= {[3 2] #{[2 2]}, [3 0] #{[2 1]}, [1 0] #{[1 1]}}
           (get-moves '[[e e e e]
                        [e w b e]
                        [w w w e]
                        [e e e e]] 'b)))

(assert (= {[0 3] #{[1 2]}, [1 3] #{[1 2]}, [3 3] #{[2 2]}, [2 3] #{[2 2]}}
           (get-moves '[[e e e e]
                        [e w b e]
                        [w w b e]
                        [e e b e]] 'w)))

(assert (= {[0 3] #{[2 1] [1 2]}, [1 3] #{[1 2]}, [2 3] #{[2 1] [2 2]}}
           (get-moves '[[e e w e]
                        [b b w e]
                        [b w w e]
                        [b w w w]] 'b)))