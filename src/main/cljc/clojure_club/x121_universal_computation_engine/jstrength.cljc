(ns clojure-club.x121-universal-computation-engine.jstrength)

(defn uce [l]
  (fn [m]
    (let [m (merge m {'/ / '+ + '- - '* *})]
      (letfn [(calc [[f & r] ret]
                (if f
                  (if (list? f)
                    (let [[fun & args] (calc f [])]
                      (recur r (conj ret (apply fun args))))
                    (calc r (conj ret (get m f f))))
                  ret))]
        (let [[fun & args] (calc l [])]
          (apply fun args))))))