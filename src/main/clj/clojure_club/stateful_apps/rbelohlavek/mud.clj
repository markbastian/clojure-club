(ns clojure-club.stateful-apps.rbelohlavek.mud
  (:require [clj-sockets.core :as c]))

(def world (atom {}))
(def pq (ref []))

(defn enqueue [msg]
  (dosync (ref-set pq (conj @pq msg))))

(def dirs
  {:n "north"
   :e "east"
   :s "south"
   :w "west"
   :u "up"
   :d "down"})

(def dir-pairs
  {:n :s
   :s :n
   :w :e
   :e :w
   :u :d
   :d :u})

(defn get-exits [mob-id]
  (let [world @world
        room (get-in world [:rooms (get-in world [:mobs mob-id :in-room])])]
    (:exits room)))

(defn get-room [mob-id]
  (get-in @world [:mobs mob-id :in-room]))

(defn list-room-mobs [room except]
  (->> (:mobs room)
       (filter #(not= % except))
       (map #(get-in @world [:mobs % :ld]))
       (map #(str % "\n"))
       (apply str)))

(defn show-room [room-id except]
  (let [room (get-in @world [:rooms room-id])]
    (str (:sd room) "\n\n" (:ld room) "\n\n" (list-room-mobs room except))))

(defn look [mob-id & args]
  (if (nil? args)
    (show-room (get-room mob-id) mob-id)
    (let [target (get (clojure.set/map-invert dirs) (first args))]
      (if-not (nil? target)
        (let [direction-descrip (get-in @world [:rooms (get-room mob-id) :exits target])]
          (if-not (nil? direction-descrip)
            (second direction-descrip)
            "Nothing that way."))
        "Look where?"))))

(defn to-room [mob-id to-room-id direction]
  (let [current-room-id (get-room mob-id)]
    (swap! world (fn [world mob-id to-room-id]
                   (let [current-room-id (get-room mob-id)
                         current-room-mobs (get-in world [:rooms current-room-id :mobs])
                         to-room-mobs (get-in world [:rooms to-room-id :mobs])]
                     (-> (assoc-in world [:rooms current-room-id :mobs]
                                   (set (remove #(= mob-id %) current-room-mobs)))
                         (assoc-in [:rooms to-room-id :mobs]
                                   (set (conj to-room-mobs mob-id)))
                         (assoc-in [:mobs mob-id :in-room] to-room-id))))
           mob-id
           to-room-id)
    (if (not= current-room-id to-room-id)
      (do
        (let [name (get-in @world [:mobs mob-id :sd])]
          (when (and (not= mob-id 1) (contains? (get-in @world [:rooms to-room-id :mobs]) 1))
            (enqueue (str name " arrives from the " ((dir-pairs direction) dirs "."))))
          (when (and (not= mob-id 1) (contains? (get-in @world [:rooms current-room-id :mobs]) 1))
            (enqueue (str name " leaves, heading " (direction dirs ".")))))
        (show-room to-room-id mob-id))
      nil)))

(defn do-move [mob-id direction]
  (let [exits (get-exits mob-id)
        exit (direction exits)]
    (if (nil? exit)
      "You cannot move that way!"
      (to-room mob-id (first exit) direction))))

(declare str->command)

(defn north [mob-id & args]
  (do-move mob-id :n))
(defn south [mob-id & args]
  (do-move mob-id :s))
(defn east [mob-id & args]
  (do-move mob-id :e))
(defn west [mob-id & args]
  (do-move mob-id :w))
(defn exits [mob-id & args]
  (let [exits (get-exits mob-id)]
    (if (empty? exits)
      "None!\n"
      (apply str (map #(str (dirs (first %))
                            " : "
                            (get-in @world [:rooms (first (second %)) :sd]) "\n") exits)))))

(defn commands [mob-id & args]
  (str "commands available: " (clojure.string/join ", " (keys str->command))))

(def str->command
  {"look"  look
   "l"     look
   "north" north
   "n"     north
   "south" south
   "s"     south
   "east"  east
   "e"     east
   "west"  west
   "w"     west
   "help"  commands
   "h"     commands
   "exits" exits
   "ex"    exits})

(defn dispatch [line]
  (let [parts (clojure.string/split line #" ")
        f (get str->command (first parts))]
    (cond
      (empty? line) ""
      (nil? f) "Huh?"
      :else (apply f 1 (rest parts)))))

(defn get-prompt []
  (str (get-in @world [:mobs 1 :hps]) " H > "))

(defn reset-command [command-str command]
  (swap! world #(assoc-in % [:commands command-str] command)))

(declare socket)

(defn handle-player-io []
  (c/write-to socket (str (dispatch (c/read-line socket))
                          "\n"
                          (get-prompt))))

(defn get-and-reset! []
  (dosync
    (let [curr-results @pq]
      (ref-set pq [])
      curr-results)))

(defn flush-queue [queue]
  (->> queue
       (map #(c/write-to socket (str % "\n")))
       (doall))
  (c/write-to socket (get-prompt)))

(def threads-alive? (atom true))
(def npcs-thread-alive? (atom true))

(defn kill-player []
  (do
    (swap! threads-alive? #(not %))
    (c/close-socket socket)))

(defn npc-move [[mob-id {:keys [in-room]}]]
  (when (< (rand) 0.1)
    (let [exits (get-in @world [:rooms in-room :exits])
          exit (rand-nth (seq exits))]
      (to-room mob-id (first (second exit)) (first exit)))))

(defn start-player-io-thread! []
  (.start (Thread. (fn [] (loop []
                            (try
                              (handle-player-io)
                              (catch Exception e
                                (prn e)
                                nil))
                            (Thread/sleep 250)
                            (if @threads-alive?
                              (recur)
                              (prn "closing player thread")))))))

(defn start-player-io-queue-thread! []
  (.start (Thread. (fn [] (loop []
                            (when (not (empty? @pq))
                              (flush-queue (get-and-reset!)))
                            (Thread/sleep 250)
                            (if @threads-alive?
                              (recur)
                              (prn "closing player queue thread")))))))

(defn start-npcs-thread! []
  (.start (Thread. (fn [] (loop []
                            (doall (map npc-move (-> (get-in @world [:mobs])
                                                     (dissoc 1))))
                            (Thread/sleep 1000)
                            (if @npcs-thread-alive?
                              (recur)
                              (prn "closing npc thread")))))))

;========================================================================================
;(def socket (c/listen (c/create-server 5555)))
;(start-player-io-thread!)
;(start-player-io-queue-thread!)
;(start-npcs-thread!)
;========================================================================================

;     3054
;3000 3001 3063
;     3005
;3013 3014 3015
(def initial-world
  {:rooms {3000
           {
            :sd    "The Reading Room"
            :ld    "You are in a small, simple room which is mostly empty, save a few\nwooden desks and benches.  To the east you hear the bustle of the Temple\nof Midgaard, a sharp contrast to the relative quiet of this peaceful\nroom."
            :exits {:e [3001 "You see the Temple of Midgaard."]}
            :mobs  #{}
            }
           3001
           {
            :sd    "The Temple Of Midgaard"
            :ld    "You are in the southern end of the temple hall in the Temple of Midgaard.\nThe temple has been constructed from giant marble blocks, eternal in\nappearance, and most of the walls are covered by ancient wall paintings\npicturing Gods, Giants and peasants.\n   Large steps lead down through the grand temple gate, descending the huge\nmound upon which the temple is built and ends on the temple square below.\nTo the west, you see the Reading Room.  The donation room is in a small\nalcove to your east."
            :exits {:n [3054 "At the northern end of the temple hall is a statue and a huge altar."]
                    :e [3063 "In the east, you see a small alcove with a rickety wooden sign which reads \"Midgaard Donation Room.\""]
                    :s [3005 "You look down the huge stone steps at the temple square below."]
                    :w [3000 "You see the Reading Room."]}
            :mobs  #{1 2 3 4}
            }
           3005
           {
            :sd    "The Temple Square"
            :ld    "You are standing on the temple square.  Huge marble steps lead up to the\ntemple gate.  The entrance to the Clerics' Guild is to the west, and the old\nGrunting Boar Inn, is to the east.  Just south of here you see the market\nsquare, the center of Midgaard."
            :exits {:n [3001 "You see the temple."]
                    :s [3014 "You see the Market Square."]}
            :mobs  #{}
            }
           3013
           {
            :sd    "Main Street"
            :ld    "You are on the main street passing through the City of Midgaard.  South of\nhere is the entrance to the Armory, and the bakery is to the north.  East of\nhere is the market square."
            :exits {:e [3014 "You see the market square."]}
            :mobs  #{}
            }
           3014
           {
            :sd    "Market Square"
            :ld    "You are standing on the market square, the famous Square of Midgaard.\nA large, peculiar looking statue is standing in the middle of the square.\nRoads lead in every direction, north to the temple square, south to the\ncommon square, east and westbound is the main street."
            :exits {:n [3005 "You see the temple square."]
                    :e [3015 "You see the main street."]
                    :w [3013 "You see the main street."]}
            :mobs  #{}
            }
           3015
           {
            :sd    "Main Street"
            :ld    "You are on the main street crossing through town.  To the north is the\ngeneral store, and the main street continues east.  To the west you see and\nhear the market place, to the south a small door leads into the Pet Shop."
            :exits {:w [3014 "You see the market square."]}
            }
           3054
           {
            :sd    "By The Temple Altar"
            :ld    "You are by the temple altar in the northern end of the Temple of\nMidgaard.  A huge altar made from white polished marble is standing\nin front of you and behind it is a ten foot tall sitting statue of\nOdin, the King of the Gods.\n   To the north, steps lead out the back of the temple towards the\ncountryside."
            :exits {:s [3001 "You see the southern end of the temple."]}
            :mobs  #{}
            }
           3063
           {
            :sd    "The Midgaard Donation Room"
            :ld    "You are in a small, undecorated room just off of the main temple.  There\nare a couple of small wooden benches here where people occasionally sit\nwhile they wait for items to appear.  The temple is to the west."
            :exits {:w [3001 "The busy temple is back west."]}
            :mobs  #{}
            }
           }
   :mobs  {
           1 {:in-room  3001
              :sd       "Player1"
              :ld       ""
              :keywords ["player"]
              :hps      100
              :fighting nil
              }
           2 {:in-room  3001
              :sd       "a rat"
              :ld       "A nasty rat is skulking around..."
              :keywords ["rat" "skulking"]
              :hps      10
              :fighting nil
              }
           3 {:in-room  3001
              :sd       "the beastly fido"
              :ld       "A beastly fido is mucking through the garbage looking for food here."
              :keywords ["dog" "beastly" "fido"]
              :hps      10
              :fighting nil
              }
           4 {:in-room  3001
              :sd       "a drunkard"
              :ld       "A singing, happy drunkard stumbles to and fro."
              :keywords ["drunk" "drunkard" "happy" "singing"]
              :hps      10
              :fighting nil
              }
           }
   })

;;utils
;(c/close-socket socket)
;(swap! threads-alive? #(not %))
;(kill-player-thread)
;@npcs-thread-alive?
;(swap! npcs-thread-alive? (fn [v] (not v)))

(defn reset-world! []
  (reset! world initial-world))

(reset-world!)

