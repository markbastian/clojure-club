(ns clojure-club.rpg-spec.mbastian
  #?(:clj
           (:require [clojure.spec.alpha :as s]
                     [clojure.spec.gen.alpha :as gen]
                     [clojure.spec.test.alpha :as stest]
                     [clojure.pprint :as pp])
     :cljs (:require [cljs.spec :as s]
             ;[cljs.spec.gen :as gen]
             [cljs.spec.test :as stest]
             [cljs.pprint :as pp])))


(s/def ::d4 (s/int-in 1 5))
(s/def ::d6 (s/int-in 1 7))
(s/def ::d8 (s/int-in 1 9))
(s/def ::d10 (s/int-in 1 11))
(s/def ::d12 (s/int-in 1 13))
(s/def ::d20 (s/int-in 1 21))
(s/def ::3d6 (s/tuple ::d6 ::d6 ::d6))

(s/def ::good-evil #{:good :neutral :evil})
(s/def ::lawful-chaotic #{:lawful :neutral :chaotic})
(s/def ::alignment (s/tuple ::lawful-chaotic ::good-evil))

(s/def ::name string?)

(s/def ::race #{::human ::elf ::half-elf ::orc ::dwarf ::gnome ::halfling})

(s/def ::character-class
  #{::barbarian ::bard ::cleric ::druid ::fighter ::magic-user ::monk
    ::paladin ::ranger ::sorcerer ::thief ::warlock})

(s/def ::ability-score (s/with-gen (s/int-in 1 26)
                                   #(gen/fmap (fn [d] (reduce + d)) (s/gen ::3d6))))
(s/def ::str ::ability-score)
(s/def ::dex ::ability-score)
(s/def ::con ::ability-score)
(s/def ::int ::ability-score)
(s/def ::wis ::ability-score)
(s/def ::cha ::ability-score)
(s/def ::character-stats (s/keys :req [::str ::dex ::con ::int ::wis ::cha]))

(s/def ::skill #{:acrobatics :animal-handling :arcana :athletics :deception
                 :history :insight :intimidation :investigation :medicine
                 :nature :perception :performance :persuasions :religion
                 :slight-of-hand :stealth :survival})

(s/def ::skills (s/with-gen (s/* ::skill)
                            #(gen/fmap
                               (fn [d] (set (take 2 d)))
                               (s/gen (s/+ ::skill)))))

(s/def ::weapon-class #{:ranged :meelee})

(s/def ::level (s/and int? pos?))

(s/def ::character
  (s/keys :req [::name ::race ::level ::character-class ::character-stats ::skills ::weapon-class]))

;(gen/sample (s/gen ::character) 10)

;;;;;;;;;;;;;;;Using pre/post conds;;;;;;;;;;;;;;
;Conditions only work when asserts are enabled
;(s/check-asserts true)

(defn level-up [c]
  {:pre [(s/assert ::character c)]
   :post [(and (s/assert ::character %) (> (::level %) (::level c)))]}
  (update c ::level inc))

;(level-up (first (gen/sample (s/gen ::character) 10)))

;;This will fail since the keywords aren't ns-qualified.
;(level-up
;  {:name "",
;   :race :clojure-club.rpg-spec.mbastian/elf,
;   :character-class :clojure-club.rpg-spec.mbastian/ranger,
;   :level 2
;   :character-stats {:str 6,
;                     :dex 4,
;                     :con 4,
;                     :int 3,
;                     :wis 4,
;                     :cha 5},
;   :skills #{:survival},
;   :weapon-class :meelee})
;
;(level-up 3)
;
;;;;;;;;;;;;;;;;Using instrument;;;;;;;;;;;;;;
;(defn enskill [c]
;  (update c ::skills conj :stealth))
;
;(s/fdef enskill
;        :args (s/cat :character ::character)
;        :ret ::character)
;
;(stest/instrument `enskill)
;
;(enskill (first (gen/sample (s/gen ::character) 10)))
;(enskill 34)