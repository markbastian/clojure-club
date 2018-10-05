(ns main.clj.clojure-club.stateful-apps.wmatson.util)

(defn remove-one [pred coll]
  (let [[left [_ & right]] (split-with (complement pred) coll)]
    (concat left right)))
