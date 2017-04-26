(ns clojure-club.gurps.mbastian
  (:require [clojure.java.io :as io]
            [clojure.data.xml :as xml]
            [clojure.string :as cs]
            [clojure.string :as s]
            [clojure.edn :as edn]))

(def x (->> "clojure_club/gurps/basic_set.adq" io/resource slurp xml/parse-str))

(defn numeric-attr [{:keys [tag content]}]
  {tag (some-> content first)})

(defn string-attr [{:keys [tag content]}]
  {tag (some-> content first cs/trim)})

(defmulti parse-adq :tag)

(defmethod parse-adq :advantage_list [{:keys [content]}]
  (map parse-adq content))

(defmethod parse-adq :advantage [{:keys [content]}]
  {:advantage (apply merge (map parse-adq content))})

(defmethod parse-adq :base_points [m] (numeric-attr m))
(defmethod parse-adq :points_per_level [m] (numeric-attr m))
(defmethod parse-adq :levels [m] (numeric-attr m))
(defmethod parse-adq :amount [m] (numeric-attr m))
(defmethod parse-adq :cr [m] (numeric-attr m))
(defmethod parse-adq :percentage [m] (numeric-attr m))

(defmethod parse-adq :name [m] (string-attr m))
(defmethod parse-adq :reference [m] (string-attr m))
(defmethod parse-adq :notes [m] (string-attr m))
(defmethod parse-adq :affects [m] (string-attr m))
(defmethod parse-adq :damage [m] (string-attr m))
(defmethod parse-adq :usage [m] (string-attr m))
(defmethod parse-adq :reach [m] (string-attr m))
(defmethod parse-adq :parry [m] (string-attr m))
(defmethod parse-adq :block [m] (string-attr m))
(defmethod parse-adq :attribute [m] (string-attr m))
(defmethod parse-adq :college_name [m] (string-attr m))
(defmethod parse-adq :accuracy [m] (string-attr m))
(defmethod parse-adq :range [m] (string-attr m))
(defmethod parse-adq :rate_of_fire [m] (string-attr m))
(defmethod parse-adq :recoil [m] (string-attr m))
(defmethod parse-adq :location [m] (string-attr m))

(defmethod parse-adq :type [{:keys [content]}]
  {:type (set (map cs/trim (cs/split (first content) #",")))})

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
  (first content))

(defmethod parse-adq :prereq_list [{:keys [content attrs]}]
  {:prerequisites
   (set (map parse-adq content))})

(defmethod parse-adq :modifier [{:keys [content attrs]}]
  {:modifier (apply merge (map parse-adq content))})

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

(defmethod parse-adq :skill_bonus [{:keys [content]}]
  {:skill-bonus (map parse-adq content)})

(defmethod parse-adq :attribute_bonus [{:keys [content]}]
  {:attribute_bonus (map parse-adq content)})

(defmethod parse-adq :default [{:keys [tag content]}]
  (if (= :default tag)
    {:default (map parse-adq content)}
    (prn tag)))

;(parse-adq x)
