(ns clojure-club.gurps.mgrimm
  (:require 
    [clojure.edn :as edn]
    [clojure.java.io :as io]
    [clojure.pprint :as pp]
    [hickory.core :as hc]
    [hickory.select :as hs :refer :all :exclude [and or not class]]))

(defn ->hik [file] (-> file io/resource slurp hc/parse hc/as-hickory))
(defn ->txt [t hiks] (-> (filter (comp #{t} :tag) hiks) first :content first))
(defn ->num [t hiks] (-> (->txt t hiks) edn/read-string (or 0)))

;; Queries ---------------------------------------------------------------------

(defn advantages-by-re [t re hik] 
  (select (hs/and (hs/tag :advantage) 
                  (has-child (hs/and (tag t) (find-in-text re)))) hik))

(def advantages-by-name (partial advantages-by-re :name))
(def advantages-by-type (partial advantages-by-re :type))

(defn advantages-by-cost [cmp-fn hik]
  (let [tags (hs/or (tag :base_points) (tag :points_per_level) (tag :levels))] 
    (filterv (fn [node] 
               (let [xs (select tags node)
                     bp (->num :base_points xs)
                     ppl (->num :points_per_level xs)
                     lvl (->num :levels xs)]
                 (cmp-fn (+ bp (* ppl lvl)))))
             (select (has-child tags) hik))))

(defn advantages-by-skill [skill hik]
  (let [tags (tag :skill_bonus)] 
    (filterv (fn [node] 
               (some (comp #{skill} first :content first (partial select (tag :name)))
                     (select tags node))) 
           (select (has-child tags) hik))))

;; Tests -----------------------------------------------------------------------

(let [hik (->hik "clojure_club/gurps/basic_set.xml")]
  #_(advantages-by-name #"Walk On Air" hik)
  #_(advantages-by-type #"Mental, Supernatural" hik)
  #_(advantages-by-cost #(> % 100) hik)
  #_(advantages-by-skill "piloting" hik))
