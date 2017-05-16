(ns main.clj.clojure-club.gurps.wmatson
  (:require [clojure.data.xml :as xml]
            [clojure.java.io :as io]))

(def raw-data (->> "clojure_club/gurps/basic_set.xml" io/resource slurp xml/parse-str))

(def raw-data (clojure.walk/prewalk #(if (map? %) (into {} %) %) (xml/parse file)))

(def vis360 (first (:content raw-data)))

(defn leaf? [node]
  (and (:content node) (not (some :content (:content node)))))

(defn numberify [s]
  (if (and (string? s) (re-matches #"^-?\d+(\.\d+)?$" s))
    (read-string s)
    s))

(defn single->item [s]
  (if (and (seq s) (= 1 (count s)))
    (numberify (first s))
    s))

(defn- collision->vec [a b]
  (if (vector? a)
    (conj a b)
    (conj [] a b)))

(defn safe-merge [attrs parts]
  (if (some map? parts)
    (apply merge-with collision->vec attrs parts)
    parts))

(defn merge-attrs [node]
  (merge (dissoc node :attrs) (:attrs node)))

(defn clean [node]
  (let [tag (:tag node)
        content (single->item (safe-merge (:attrs node) (:content node)))
        rest (dissoc node :tag :content :version :attrs)]
    (if ((complement empty?) rest)
      {tag (assoc rest :value content)}
      {tag content})))


(defn remove-version [root]
  (clojure.walk/postwalk #(if (map? %) (dissoc % :version :id) %)
                         root))

(defn walk-transform [node]
  (if (and (leaf? node))
    (clean node)
    node))

;; (def clean-data (map :advantage (clojure.walk/postwalk walk-transform (:content (remove-version raw-data)))))
;; (clojure.pprint/pprint clean-data)
