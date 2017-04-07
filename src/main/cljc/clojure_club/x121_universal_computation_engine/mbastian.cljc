(ns clojure-club.x121-universal-computation-engine.mbastian)

(defn compute [[op & r]]
  (let [ops {'+ + '- - '/ / '* *}]
    (fn [m] (apply
              (ops op)
              (map (fn [t]
                     (cond
                       (symbol? t) (m t)
                       (number? t) t
                       :default ((compute t) m))) r)))))
