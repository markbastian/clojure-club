(ns clojure-club.spiral-challenge.brockturner)


(defn seq->spiral [s]
  (loop [spiral [[]]
         s s]
    (let [new-spiral (apply mapv (comp vec reverse vector) spiral)
          n (max 1 (count (first new-spiral)))
          final-spiral (conj new-spiral (vec (take n s)))
          final-seq (drop n s)]
      (if (seq final-seq)
        (recur final-spiral final-seq)
        final-spiral))))


(defn padded-num [c n]
  (let [s (str n)]
    (str (apply str (repeat (- c (count s)) " "))
         s)))

(defn pretty-print-spiral [s]
  (let [len (->> (flatten s)
                 (map (comp count str))
                 (apply max))]
    (run! #(apply println (map (partial padded-num len) %))
          s)))

;; (pretty-print-spiral (seq->spiral (range 20)))


;; simple "compression" algorithm

(defn compress [coll]
  (reduce (fn [r i]
            (let [[v c] (peek r)]
              (if (= v i)
                (conj (pop r) [v (inc c)])
                (conj r [i 1]))))
          [] coll))

(defn str-compress [string]
  (reduce (fn [r [v c]] (str r v (char c)))
          "" (compress string)))


;; "Find the meadow"

(defn find-meadow [field]
  (for [[y r] (map-indexed vector field)
        [x c] (map-indexed vector r)
        :when (= c \space)]
    [x y]))
