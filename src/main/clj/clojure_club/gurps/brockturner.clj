(ns clojure-club.gurps.brockturner
  (:require [clojure.xml :as xml]
            [clojure.java.io :as io]))

(defn build-tree
  ([node] (build-tree {} node))
  ([main node]
   (case (:tag node)
     (:name :type :affects :reference :notes :specialization)
     (let [compare (-> node :attrs :compare)
           content (-> node :content first)
           tag (:tag node)]
       (cond-> main
               compare (assoc (-> tag name (str "_compare") keyword) compare)
               content (assoc tag content))),
     (:base_points :amount)
     (assoc main (:tag node) (-> node :content first Double/parseDouble)),
     :cost
     (assoc main :cost (-> node :content first Double/parseDouble)
            :cost_type (-> node :attrs :type)),
     (:advantage :modifier :skill_bonus)
     (update main (-> node :tag name
                      ((fn [s] (if (= \s (last s))
                                 (str s "es")
                                 (str s "s"))))
                      keyword)
             (fnil conj [])
             (->> node :content (reduce build-tree (:attrs node)))),
     :categories
     (assoc main (:tag node) (mapv (comp first :content) (:content node))),
     :advantage_list
     (reduce build-tree (:attrs node) (:content node)),
     ;default
     (assoc main (:tag node) [(:attrs node) (:content node)]))))

#_(->> "clojure_club\\gurps\\basic_set.xml"
     io/resource
     io/input-stream
     xml/parse
     build-tree
     pprint
     with-out-str
     (spit "base_test.edn"))
