(ns main.clj.clojure-club.stateful-apps.wmatson.game-schema
  (:require [main.clj.clojure-club.stateful-apps.wmatson.util :as u]))

(defprotocol IODevice
  (get-input [this])
  (display [this game]))

(defrecord Enemy [axis distance graphic])

(defrecord Game [input-queue enemies])

(defn take-input [io game]
  (if-let [input (get-input io)]
    ;;TODO set up operations to keep this a vector
    (do
      (update game :input-queue vec)
      (update game :input-queue conj input))
    game))

(defn- kill-nearest [enemies axis]
  (->> (sort-by :distance enemies);;TODO: Keep enemies sorted
       (u/remove-one #(#{axis} (:axis %)))))
       
(defn- player-move [game]
  (let [input (-> game :input-queue first)]
    (if ((complement #{:quit}) input)
      (-> game
          (update :enemies kill-nearest input)
          (update :input-queue rest))
      game)))

(defn- enemy-move [game]
  (update game :enemies (fn [enemies] (map #(update % :distance dec) enemies))))

(defn- step [game]
  (-> game
      player-move
      enemy-move))

(defn io-step [io game]
  (->> game
      (take-input io)
      step))

(defn game-loop [io game]
  (display io game)
  (let [input-queue (:input-queue game)
        quit? (some #{:quit} input-queue)]
    (if (not quit?)
      (recur io  (io-step io game)))))

;; (gs/game-loop (reify gs/IODevice
;;                (display [this game]
;;                  (clojure.pprint/pprint game))
;;                (get-input [this] :quit)) test-game)
