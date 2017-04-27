(ns clojure-club.gurps.mbastian
  (:require [clojure.java.io :as io]
            [clojure.data.xml :as xml]
            [clojure.string :as cs]
            [clojure.string :as s]
            [clojure.edn :as edn]))

(def x (->> "clojure_club/gurps/basic_set.xml" io/resource slurp xml/parse-str))

(defn numeric-attr [{:keys [tag content]}]
  {tag (some-> content first edn/read-string)})

(defn string-attr [{:keys [tag content]}]
  {tag (some-> content first cs/trim)})

(defmulti parse-adq
          (fn [{:keys [tag]}]
            (case tag
              (:base_points :points_per_level :levels :amount :cr :percentage :level)
              :numeric-attr
              (:name :reference :notes :affects :damage :usage :reach
                :parry :block :attribute :college_name :accuracy :range
                :rate_of_fire :recoil :location) :string-attr
              (:skill_bonus :advantage) :map
              tag)))

(defn map-attr [{:keys [tag content]}]
  {tag (apply merge (map parse-adq content))})

(defmethod parse-adq :modifier [{:keys [tag content attrs] :as m}]
  (if (every? string? content)
    (numeric-attr m)
    (map-attr m)))

(defmethod parse-adq :advantage_list [{:keys [content]}]
  (mapcat (comp vals parse-adq) content))

(defmethod parse-adq :numeric-attr [m] (numeric-attr m))

(defmethod parse-adq :string-attr [m] (string-attr m))

(defmethod parse-adq :map [m] (map-attr m))

(defmethod parse-adq :type [{:keys [content]}]
  {:type (set (map (comp keyword cs/lower-case cs/trim) (cs/split (first content) #",")))})

(defmethod parse-adq :skill_prereq [{:keys [content]}]
  {:skill_prereq (map parse-adq content)})

(defmethod parse-adq :advantage_prereq [{:keys [content]}]
  {:advantage_prereq (map parse-adq content)})

(defmethod parse-adq :attribute_prereq [{:keys [content]}]
  {:attribute_prereq (map parse-adq content)})

(defmethod parse-adq :spell_bonus [{:keys [content]}]
  {:spell_bonus (map parse-adq content)})

(defmethod parse-adq :specialization [{:keys [tag content attrs]}]
  ;how do these attrs work?
  {:specialization (first content)})

(defmethod parse-adq :categories [{:keys [content]}]
  {:categories (set (map parse-adq content))})

(defmethod parse-adq :category [{:keys [content]}]
  (-> content first cs/trim cs/lower-case keyword))

(defmethod parse-adq :prereq_list [{:keys [content attrs]}]
  {:prerequisites
   (set (map parse-adq content))})

(defmethod parse-adq :ranged_weapon[{:keys [content attrs]}]
  {:ranged-weapon (map parse-adq content)
   ;(apply merge (map parse-adq content))
   })

(defmethod parse-adq :dr_bonus [{:keys [content attrs]}]
  {:dr_bonus (map parse-adq content)})

(defmethod parse-adq :cost_reduction [{:keys [content attrs]}]
  {:cost_reduction (map parse-adq content)})

(defmethod parse-adq :melee_weapon [{:keys [tag content]}]
  {tag (map parse-adq content)})

(defmethod parse-adq :cost [{:keys [content attrs]}]
  {:cost [(some-> content first edn/read-string) (keyword (:type attrs))]})

(defmethod parse-adq :attribute_bonus [{:keys [content]}]
  {:attribute_bonus (map parse-adq content)})

(defmethod parse-adq :default [{:keys [tag content]}]
  (if (= :default tag)
    {:default (map parse-adq content)}
    (prn tag)))

;(def m (parse-adq x))
;(parse-adq x)

;filters
(defn mental-disadvangate [{:keys [type categories] :as m}]
  (and (type :mental) (categories :disadvantage)))

(defn mental-advangate [{:keys [type categories] :as m}]
  (and (type :mental) (categories :advantage)))

;(filter (fn [{:keys [categories base_points] :as m}]
;          (and base_points
;               (categories :advantage)
;               (<= 5 base_points 15)))
;        m)
