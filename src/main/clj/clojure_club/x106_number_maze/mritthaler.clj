(ns clojure-club.x106-number-maze.mritthaler)

(defn add_2 [[d n]] ["+2" (+ n 2)] )
(defn mult_2 [[d n]] ["*2" (* n 2)] )
(defn halve [[d n]] (when (even? n) ["/2" (/ n 2)]))
(def next-nodes (juxt add_2 mult_2 halve))
(defn m-contains [c n] (some #{(second n)} (map second c)))
(defn conj-no-cycle [c n]  (when (not (m-contains c n)) (conj c n) ))
(defn gen-path [path] (remove nil? (map (partial conj-no-cycle  path) (remove nil? (next-nodes (first path))))))
(defn gen-paths [[paths dest]] [(distinct (reduce (partial reduce conj) (map gen-path paths))) dest])
(defn has-dest? [[paths dest]]  (filter (fn [p] (= (second (first p)) dest)) paths))
(defn find-path [start end]
  (let [paths   ((comp has-dest? gen-paths)
                  (last (take-while (comp empty? has-dest?)
                                    (iterate gen-paths [(list (list ["s" start])) end])))) ]

    {:count (count (first paths))
     :paths (map reverse paths)
     :path-count (count paths)
     }
    ))

;(time (find-path 1 4137))
(time (find-path 7 43))
(time (find-path 9 2))
(time (find-path 2 9))
(time (find-path 2 4))
;(time (find-path 2 2))

