(ns clojure-club.rpg-spec.mgrimm
  (:require 
    [clojure.core.reducers :as r]
    [clojure.spec.alpha :as s]
    [clojure.spec.gen.alpha :as g]))

;; Elder Scrolls names ---------------------------------------------------------

(def altmer   {:pre #{:Core :Corri :Cyre :Gan :Kala :Kelkemme :Lilland :Lovi :Mith :Saru :Sau :Soli}
               :suf #{:dalf :las :lian :llon :man :mon :nar :ra :riil :ril :ron :tar}})
(def argonian {:pre #{:Alex :Antigon :August :Calig :Claud :Demetr :Dioclet :German :Her :Jul :Ner :Pil :Tib}
               :suf #{:acles :andros :ate :erius :ian :iar :icus :ides :ios :ius :os :ula :us}})
(def bosmer   {:pre #{:An :Ara :Ar :Co :Elis :Karo :Lego :Li :Pali :Ria :Sil :Ta}
               :suf #{:cher :dell :driel :gan :gorn :las :man :nis :nor :rim :tan :van}})
(def breton   {:pre #{:Agr :Alab :And :Bed :Dun :Edw :Gond :Mord :Per :Rod :Theod :Trist :Uth}
               :suf #{:ane :ard :astyr :istair :istyr :ore :oryan :yctor :yn :ynak :yrick :yval :ywyr}})
(def dunmer   {:pre #{:Azar :Cas :Ereb :Hel :Nis :Shal :Shur :Tur :Ul :Vanik :Zan :Zir}
               :suf #{:ain :ath :far :ien :ik :il :imal :imar :kan :on :par :seth}})
(def khajiit  {:pre #{:Ab' :Ak' :Akh' :Am :Fa' :Hus :Mo :Moham :Moj :Na :Om :Sha :Sin :Za' :Zan'}
               :suf #{:ar :bar :bil :der :dul :gh :ir :kir :med :nir :noud :sien :soud :taba :tabe :urabi}})
(def nord     {:pre #{:Al :Asg :Bj :Er :Fenr :Har :Ingm :Jurg :Kj :Moj :Sor :Torb :Ulr}
               :suf #{:ald :an :ar :arik :arke :arne :eld :en :ens :er :ik :is :orn}})
(def names #{altmer argonian bosmer breton dunmer khajiit nord})

;; -----------------------------------------------------------------------------

(def class-base-hp
  {:barbarian 12 :bard 8 :cleric 8 :druid 8 :fighter 10
   :monk 8 :paladin 10 :ranger 10 :rogue 8 :sorcerer 6 :wizard 6})

(s/def ::1d6 (s/int-in 1 7))
(s/def ::4d6 (s/tuple ::1d6 ::1d6 ::1d6 ::1d6))

(s/def ::attribute (s/with-gen (s/int-in 4 25)
                     #(s/gen (into #{} (r/map (partial r/fold +) (g/sample (s/gen ::4d6) 100))))))

(s/def ::str ::attribute)
(s/def ::dex ::attribute)
(s/def ::int ::attribute)
(s/def ::cha ::attribute)
(s/def ::wis ::attribute)
(s/def ::con ::attribute)
(s/def ::attributes (s/keys :req [::str ::dex ::int ::cha ::wis ::con]))

(s/def ::name (s/with-gen string?
                #(s/gen (into #{} (apply map (fn [p s] (str (name p) (name s)))
                                         (vals (rand-nth (seq names))))))))

(s/def ::gender #{:male :female})

(s/def ::race #{:dwarf :elf :gnome :half-elf :half-orc :halfling :human})

(s/def ::class (s/coll-of (into #{} (keys class-base-hp))
                          :min-count 1 :max-count 2 :distinct true :into #{}))

(s/def ::alignment #{:lawful-good :lawful-neutral :lawful-evil
                     :neutral-good :true-neutral :neutral-evil
                     :chaotic-good :chaotic-neutral :chaotic-evil})

(s/def ::level (s/with-gen (s/int-in 1 21) #(s/gen #{1})))

(s/def ::hp (s/and integer? (some-fn zero? pos?)))

(s/def ::character (s/keys :req [::name ::gender ::race ::class ::alignment
                                 ::level ::attributes ::hp]))

;; -----------------------------------------------------------------------------

(defn one-sample [spec] (first (g/sample (s/gen spec) 100)))

(defn create-character []
  (let [{cls ::class {con ::con} ::attributes :as ch} (one-sample ::character)
        start-cls (first (seq cls))
        hp (+ con (class-base-hp start-cls))]
    (assoc ch ::hp hp)))

#_(clojure.pprint/pprint (create-character))
