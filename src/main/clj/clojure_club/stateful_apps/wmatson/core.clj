(ns main.clj.clojure-club.stateful-apps.wmatson.core
  (:require [main.clj.clojure-club.stateful-apps.wmatson.game-schema :as gs]
            [lanterna.screen :as ls]))

(def input->axis
  {\a 0
   \w 1
   \d 2
   \s 3
   \q :quit})

(defn radial->cartesian [axis distance]
  (case axis
    0 [(- distance) 0]
    1 [0 (- distance)]
    2 [distance 0]
    3 [0 distance]))

(defn enemy->xyg [{:keys [axis distance graphic]} player-x player-y]
  (let [[x y] (radial->cartesian axis distance)]
    [(+ player-x x) (+ player-y y) graphic]))

(defn enemies->xyg [enemies player-x player-y]
  (map #(enemy->xyg % player-x player-y) enemies))

(defrecord LanternaIO [screen]
  gs/IODevice
  (get-input [{:keys [screen]}]
    (input->axis (ls/get-key-blocking screen {:interval 100 :timeout 500})))
  (display [{:keys [screen]} game]
    (let [size (ls/get-size screen)
          [player-x player-y] (map #(/ % 2) size)
          enemies-xy (enemies->xyg (:enemies game) player-x player-y)]
      (ls/clear screen)
      (ls/put-string screen player-x player-y "+" {:fg :green :bg :black})
      (ls/move-cursor screen player-x player-y)
      (doseq [[x y g] enemies-xy]
        (ls/put-string screen x y (str g) {:bg :red :fg :yellow}))
      (ls/redraw screen))))

(def test-game
  (gs/->Game []
             [(gs/->Enemy 0 10 \A)
              (gs/->Enemy 0 9 \A)
              (gs/->Enemy 0 8 \A)
              (gs/->Enemy 1 8 \W)
              (gs/->Enemy 2 6 \D)
              (gs/->Enemy 3 4 \S)]))

(defn main- []
  (let [scr (ls/get-screen)
        io (->LanternaIO scr)
        initial-game test-game]
    (ls/start scr)
    (gs/game-loop io initial-game)
    (ls/stop scr)))

(main-)
