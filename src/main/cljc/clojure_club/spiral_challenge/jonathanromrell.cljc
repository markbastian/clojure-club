(ns clojure-club.spiral-challenge.jonathanromrell)

(def spiral-dirs ((fn step [dirs n]
                    (lazy-seq (concat (repeat n (first dirs))
                                      (repeat n (second dirs))
                                      (step (drop 2 dirs) (inc n)))))
                   (cycle [[1 0] [0 1] [-1 0] [0 -1]]) 1))

(defn seq->spiral [coll]
  (let [length (-> coll count Math/sqrt Math/ceil)
        init-grid (vec (repeat length (vec (repeat length nil)))) ;create nil-populated 2D array with calculated side-length
        center (long (/ (dec length) 2))]
    (loop [grid init-grid, remaining-items coll, loc [center center], dir-seq spiral-dirs]
      (if (seq remaining-items)
        (recur (assoc-in grid loc (first remaining-items))
               (rest remaining-items)
               (mapv + loc (first dir-seq))
               (rest dir-seq))
        grid))))