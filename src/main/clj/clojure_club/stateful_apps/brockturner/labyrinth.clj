(ns clojure-club.stateful-apps.brockturner.labyrinth
  (:require [clojure.string :as str]))

(def colors [:red :green :blue :tan])


(defn make-cards [type number]
  (reduce (fn [r c]
            (concat r (repeat number
                              {:type type :color c})))
          [] colors))


(defn make-base-deck []
  (concat
   (make-cards :key 3)
   (make-cards :moon 4)
   (repeat 9 {:type :sun :color :red})
   (repeat 8 {:type :sun :color :blue})
   (repeat 7 {:type :sun :color :green})
   (repeat 6 {:type :sun :color :tan})))


(defn setup-game []
  (let [deck (shuffle (make-base-deck))]
    {:deck (->> deck
                (drop 5)
                (concat (repeat 10 {:type :nightmare})
                        (make-cards :door 2))
                shuffle)
     :hand (take 5 deck)
     :limbo []
     :discard []
     :labyrinth []
     :doors []
     :resolve nil}))


(defn pretty-card [card]
  (->> (keep card [:color :type])
       (map name)
       (str/join " ")))

(defn pick-one [options]
  (doseq [{:keys [i label]} options]
    (println "<" i "> -" label))
  (let [p (str/upper-case (read-line))]
    (if (= p "EXIT")
      (constantly nil)
      (or (first (filter #(= p (:i %)) options))
          (do (println "Invalid input.")
            (recur options))))))


(defn remove-first [card lst]
  (concat (take-while #(not= card %) lst)
          (rest (drop-while #(not= card %) lst))))


(defn discard-from-hand [state card]
  (-> state
      (update :hand (partial remove-first card))
      (update :discard conj card)))

(defmulti resolve-card (comp :type :resolve))

(defmethod resolve-card :nightmare [{resolve :resolve :as state}]
  (some-> state
          ((:fn (pick-one
                 (concat
                  (->> state
                       :hand
                       (filter #(= :key (:type %)))
                       distinct
                       (map-indexed
                        (fn [i c]
                          {:i (str "K" (inc i))
                           :fn #(discard-from-hand % c)
                           :label (str "Discard " (pretty-card c) " card from hand")})))
                  (->> state
                       :doors
                       distinct
                       (map-indexed
                        (fn [i c]
                          {:i (str "D" (inc i))
                           :fn (fn [state]
                                 (-> state
                                     (update :doors (partial remove-first c))
                                     (update :limbo conj c)))
                           :label (str "Send captured " (pretty-card c) " card to limbo")})))
                  [{:i "C"
                    :fn (fn [state]
                          (let [cards (take 5 (:deck state))]
                            (-> state
                                (update :discard concat (remove (comp #{:door :nightmare} :type) cards) [resolve])
                                (update :limbo concat (filter (comp #{:door :nightmare} :type) cards))
                                (update :deck (partial drop 5))
                                (dissoc :resolve))))
                    :label "Discard 5 cards from deck"}
                   {:i "H"
                    :fn (fn [state]
                          (-> state
                              (update :discard concat (:hand state))
                              (assoc :hand [])))
                    :label "Discard current hand"}]))))
          (update :discard conj resolve)
          (dissoc :resolve)))

(defmethod resolve-card :door [{{r-color :color :as resolve} :resolve :as state}]
  (if-let [key-op (->> state
                       :hand
                       (filter #(and (= :key (:type %))
                                     (= r-color (:color %))))
                       (some (fn [c]
                               {:i "K"
                                :fn (fn [state]
                                      (-> state
                                          (update :hand (partial remove-first c))
                                          (update :discard conj c)
                                          (update :doors conj resolve)
                                          (dissoc :resolve)))
                                :label (str "discard " (-> c :color name) " key card to capture door")})))]
    ((:fn (pick-one
           [key-op
            {:i "I"
             :fn (fn [state]
                   (-> state
                       (update :limbo conj resolve)
                       (dissoc :resolve)))
             :label "Ignore door card"}]))
     state)
    (-> state
        (update :limbo conj resolve)
        (dissoc :resolve))))


(defn draw-card [{[card] :deck :as state}]
  (if card
    (let [state (update state :deck rest)]
      (println "You draw a " (pretty-card card) " card")
      (if (#{:door :nightmare} (:type card))
        (assoc state :resolve card)
        (update state :hand conj card)))
    (println "You lose.")))


(defn obtain-door [state color]
  (let [card {:type :door :color color}]
    (println "You acquire a " (pretty-card card) " card")
    (if (->> (concat (:deck state)
                     (:limbo state))
             (filter #(= card %))
             seq)
      (-> state
          (update :deck (partial remove-first card))
          (update :doors conj card))
      state)))

(defn found-door? [state]
  (let [color (-> state
                  :deck
                  last
                  :color)]
    (-> state
        :deck
        reverse
        (->> (take-while #(= color (:color %))))
        count
        (mod 3)
        (= 0))))

(defn add-to-labyrinth [state card]
  (let [state (-> state
                  (update :hand (partial remove-first card))
                  (update :labyrinth conj card))]
    (if (found-door? state)
      (obtain-door state)
      state)))

(defn play-card [state]
  (println "Labyrinth:")
  (->> state
       :labyrinth
       (map pretty-card)
       (str/join ", ")
       println)
  ((:fn (pick-one
         (concat
          (->> state
               :hand
               (remove #(-> state :labyrinth last :type (= (:type %))))
               distinct
               (map-indexed
                (fn [i c]
                  {:i (str "P" (inc i))
                   :fn #(add-to-labyrinth % c)
                   :label (str "Play " (pretty-card c) " card from hand")})))
          (->> state
               :hand
               distinct
               (map-indexed
                (fn [i c]
                  {:i (str "D" (inc i))
                   :fn #(discard-from-hand % c) ;; prophecy
                   :label (str "Discard " (pretty-card c) " card from hand")}))))))
   state))


(defn shuffle-limbo [state]
  (println "Shuffling limbo cards back into the deck.")
  (-> state
      (update :deck (comp shuffle concat) (:limbo state))
      (assoc :limbo [])))


(defn game-step [state]
  (cond
    (-> state :doors count (= 8)) (println "You win!")
    (:resolve state) (resolve-card state)
    (-> state :hand count (< 5)) (draw-card state)
    (-> state :limbo seq) (shuffle-limbo state)
    :else (play-card state)))


(defn play-game []
  (->> (setup-game)
       (iterate game-step)
       (take-while identity)))
