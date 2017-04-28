(ns clojure-club.gurps.rbelohlavek
  (:require [clojure.xml :as xml])
  (:require [com.rpl.specter :as s]))

(def basic_set "src/main/resources/clojure_club/gurps/basic_set.xml")

(def raw
  (xml/parse (java.io.ByteArrayInputStream. (.getBytes (slurp basic_set)))))

;get names of all advantages
(s/select [:content s/ALL :content s/ALL #(= (:tag %) :name) :content] raw)

;get frequencies of cost types
(frequencies (remove nil?
                     (s/select [:content s/ALL :content s/ALL :content s/ALL :attrs :type] raw)))

;get frequencies of advantage types
(frequencies
  (mapcat #(clojure.string/split (% 0) #", " )
          (s/select [:content s/ALL :content s/ALL #(= (:tag %) :type) :content] raw)))

;transform collection to something more easily query-able
(defn vec-of-maps? [x]
  (and (vector? x) (not (empty? x)) (every? map? x)))

(defn vec-of-single-string-to-string [x]
  (if (and (vector? x)
           (= 1 (count x))
           (string? (x 0)))
    (x 0)
    x))

(defn f [vec]
  (reduce
    (fn [col map-in-question]
      (let [k (:tag map-in-question)
            v-content (:content map-in-question)
            v-attributes (:attrs map-in-question)]
        (if (= k :modifier)
          (assoc col :modifiers
                     (conj (:modifiers col [])
                           (merge (if (map? v-attributes) v-attributes {}) (f v-content))))
          (assoc col k (if (vec-of-maps? v-content)
                         (merge (if (map? v-attributes) v-attributes {}) (f v-content))
                         (vec-of-single-string-to-string v-content))))))
    {}
    vec))

(def advantages (s/path :content s/ALL :content))

(def parsed (vec (map f (s/select [advantages] raw))))

;Get all advantage where type is Mental
(s/select
  [s/ALL
   #(.contains (:type %) "Mental")
   (s/selected? [[:categories :category] #(= % "Advantage")])
   :name] parsed)

;Get all the advantage within a given base points range
(defn advantages-where-base-points-is [predicate map]
  (s/select
    [s/ALL
     #(if (not (nil? (:base_points %)))
        (predicate (read-string (:base_points %)))
        false)
     :name] map))

(advantages-where-base-points-is #(< % 40) parsed)
(advantages-where-base-points-is #(< % 0) parsed)
(advantages-where-base-points-is #(<= 0 % 30) parsed)
(advantages-where-base-points-is #(< % -45) parsed)
(advantages-where-base-points-is #(= % 10) parsed)

;-Find all advantages that give a bonus to a given skill by name
; TODO - need to roll up others in a similar manner to 'modifier'
(defn advantages-where-bonus-applied-to [applied-name map]
  (s/select
    [s/ALL
     (s/selected? [[:modifiers s/ALL] #(= (:name %) applied-name)])
     :name] map))

(advantages-where-bonus-applied-to "Armor Divisor" parsed)
(advantages-where-bonus-applied-to "Touch" parsed)

