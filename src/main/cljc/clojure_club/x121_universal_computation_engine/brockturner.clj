(ns clojure-club.x121-universal-computation-engine.brockturner)

(defn engine [l]
  (letfn [(solve [m e]
            (if (sequential? e)
              (let [[op & r] e
                    fop ({'+ + '/ / '- - '* *} op)]
                (reduce fop (map (partial solve m) r)))
              (m e e)))]
    (fn [m]
      (solve m l))))

(defn solve [m e]
  (if (sequential? e)
    (let [[op & r] e
          fop ({'+ + '/ / '- - '* *} op)]
      (reduce fop (map (partial solve m) r)))
    (m e e)))
