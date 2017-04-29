(ns clojure-club.rpg-spec.mgrimm
  (:require 
    [clojure.pprint :as pp]
    [clojure.string :as string]
    [clojure.core.reducers :as r]
    [clojure.spec.alpha :as s]
    [clojure.spec.gen.alpha :as g]))

(s/def ::1d6 (s/int-in 2 7))
(s/def ::4d6 (s/tuple ::1d6 ::1d6 ::1d6 ::1d6))

(s/def ::trait (s/with-gen (s/int-in 8 25)
                 #(s/gen (into #{} (r/map (partial r/fold +) (g/sample (s/gen ::4d6) 100))))))

(s/def ::str ::trait)
(s/def ::dex ::trait)
(s/def ::int ::trait)
(s/def ::cha ::trait)
(s/def ::wis ::trait)
(s/def ::con ::trait)
(s/def ::traits (s/keys :req [::str ::dex ::int ::cha ::wis ::con]))

(s/def ::name-prefix 
  (s/with-gen string? #(s/gen #{"bry" "cuth" "gor" "kal" "le" "mar" "men" "roc'" "tom" "war"})))
(s/def ::name-suffix 
  (s/with-gen string? #(s/gen #{"ber" "eli" "-guth" "ginlaf" "ham" "mann" "mond" "roy" "son" "sung" "thel"})))
(s/def ::name 
  (s/with-gen string?  #(s/gen (into #{} (map (comp string/capitalize str)
                                              (g/sample (s/gen ::name-prefix) 100) 
                                              (g/sample (s/gen ::name-suffix) 100))))))

(s/def ::gender #{:male :female})
(s/def ::race #{:dwarf :elf :gnome :half-elf :half-orc :halfling :human})
(s/def ::class #{:barbarian :bard :cleric :druid :fighter :monk :paladin :ranger :rogue :sorcerer :wizard})
(s/def ::level (s/with-gen (s/int-in 1 21) #(s/gen #{1})))

(s/def ::character (s/keys :req [::name ::gender ::race ::class ::level ::traits]))

;; -----------------------------------------------------------------------------

(defn create-character []
  (first (g/sample (s/gen ::character) 100)))

#_(pp/pprint (create-character))
