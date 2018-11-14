(ns clojure-club.meadow-finder.mbastian
  (:require [clojure.set :refer [difference intersection]]
            [clojure-club.meadow-finder.core :as mc]
            #?(:clj  [clojure.data.priority-map :refer [priority-map]]
               :cljs [tailrecursion.priority-map :refer [priority-map]])
            [clojure.string :as cs]
            [clojure.pprint :as pp]))

(defn neighbors [[x y]]
  [[(inc x) y] [(dec x) y] [x (inc y)] [x (dec y)]])

(defn meadow-coords [grid]
  (for [i (range (count grid))
        j (range (count (grid i)))
        :when (= " " (str (get-in grid [i j])))]
    [i j]))

(defn find-meadows-lr [grid]
  (let [[f & r] (meadow-coords grid)]
    (loop [frontier [f] unvisited (set r) visited [] meadows []]
      (if (first frontier)
        (let [front (filter unvisited (distinct (mapcat neighbors frontier)))
              u (difference unvisited (set frontier))
              v (into visited frontier)]
          (if (seq front)
            (recur front u v meadows)
            (recur [(first u)] (disj u (first u)) [] (conj meadows v))))
        meadows))))

(defn update-frontier [{:keys [frontier unvisited] :as m}]
  (let [u (difference unvisited frontier)]
    (-> m
        (assoc :unvisited u)
        (update :meadow into frontier)
        (assoc :frontier (intersection u (set (mapcat neighbors frontier)))))))

(defn create-meadow [{:keys [unvisited meadow frontier] :as m}]
  (if (empty? frontier)
    (let [f (first unvisited)]
      (cond-> (into m {:meadow #{} :frontier #{}})
              f (update :frontier conj f)
              (seq meadow) (update :meadows conj meadow)))
    m))

(defn find-meadows [c]
  (->> {:unvisited (set (meadow-coords c))}
       (iterate (comp create-meadow update-frontier))
       (drop-while (fn [{:keys [frontier unvisited]}]
                     (or (seq frontier) (seq unvisited))))
       (map :meadows)
       first))

(find-meadows-lr mc/meadow-2x2-grid)
(find-meadows-lr mc/meadow-32x32x4)

(find-meadows mc/meadow-2x2-grid)
(find-meadows mc/meadow-32x32x4)

(= (set (map set (find-meadows-lr mc/meadow-32x32x4)))
   (set (find-meadows mc/meadow-32x32x4)))

;Implement A* - Note that I mostly lifted relevant parts from https://github.com/markbastian/planning
(def infinity #?(:clj Double/POSITIVE_INFINITY, :cljs Number/POSITIVE_INFINITY))

(defn compute-costs [current-state neighbors-fn current-costs cost-fn]
  (for [neighbor (neighbors-fn current-state)
        :let [new-cost (+ (current-costs current-state) (cost-fn current-state neighbor))]
        :when (< new-cost (current-costs neighbor infinity))]
    [neighbor new-cost]))

(defn A*-step [neighbors cost-fn heuristic {:keys [goal frontier cost] :as m}]
  (let [[current-state] (peek frontier)
        costs (compute-costs current-state neighbors cost cost-fn)
        estimates (map (fn [[s c]] [s (+ c (heuristic goal s))]) costs)]
    (-> m
        (update :frontier #(-> % pop (into estimates)))
        (update :cost into costs)
        (update :visited into (map (fn [[c]] [c current-state]) costs)))))

(defn A*-seq [neighbors cost-fn heuristic {:keys [start] :as m}]
  (->> m
       (into {:frontier (priority-map start 0) :cost {start 0} :visited {start nil}})
       (iterate (partial A*-step neighbors cost-fn heuristic))
       (take-while (comp seq :frontier))))

(defn recover-path [goal visited]
  (vec (reverse (take-while some? (iterate visited goal)))))

(defn A* [neighbors cost-fn heuristic {:keys [goal] :as m}]
  (some->> (A*-seq neighbors cost-fn heuristic m)
           (some (fn [{:keys [visited]}] (when (visited goal) visited)))
           (recover-path goal)))

(defn manhattan-distance [a b]
  (reduce + (map (comp #(Math/abs %) -) a b)))

(defn grid-map-solver [{:keys [grid cost-map] :as config}]
  (A*
    (fn [c] (filter #(get-in grid %) (neighbors c)))
    (fn [_ to] (cost-map (get-in grid to)))
    manhattan-distance
    config))

(defn mark-path [grid solution]
  (reduce (fn [g c] (assoc-in g c '.)) grid solution))

(defn solve-and-print [{:keys [grid] :as config}]
  (->> config
       grid-map-solver
       (mark-path (mapv vec grid))
       (mapv cs/join)
       (cs/join "\n")
       println))

(solve-and-print {:start [0 0] :goal [4 4] :cost-map mc/cost :grid mc/expensive-cave})
(solve-and-print {:start [0 0] :goal [31 31] :cost-map mc/cost :grid mc/meadow-32x32x4})
(solve-and-print {:start [0 0] :goal [31 31] :cost-map mc/cost :grid mc/meadow-32x32x4-with-mountains})

;Connect Meadows
(defn center [island]
  (mapv (fn [v] (Math/round (double (/ v (count island))))) (apply mapv + island)))

(defn shuffle-path-to
  ([start finish]
   (letfn [(signum [x] (cond (pos? x) 1 (neg? x) -1 :default 0))]
     (let [[dx dy] (map - finish start)
           x-steps (repeat (Math/abs dx) [(signum dx) 0])
           y-steps (repeat (Math/abs dy) [0 (signum dy)])]
       (->> (into x-steps y-steps)
            shuffle
            (reductions (partial mapv +) start)))))
  ([[start finish]] (shuffle-path-to start finish)))

(defn connect [islands]
  (let [centers (map center islands)
        links (take (dec (count islands)) (partition 2 1 (shuffle centers)))]
    (mapcat shuffle-path-to links)))

(mapv (partial apply str)
      (reduce
        (fn [grid coord] (assoc-in grid coord \space))
        (mapv (comp vec seq) mc/meadow-32x32x4)
        (-> mc/meadow-32x32x4 find-meadows connect)))

(solve-and-print
  {:start    [0 0]
   :goal     [31 31]
   :cost-map {nil    infinity
              \space infinity
              \^     10
              \#     1}
   :grid     ["#########################^^#####"
              "#######################     ####"
              "######################       ###"
              "#####################        ###"
              "##################     ###  ####"
              "#################      #########"
              "#################     ##########"
              "#################     ##########"
              "#####  ##########    ###########"
              "####    ##########  ############"
              "###      ########## ############"
              "###      ##########^############"
              "####    ########### ############"
              "####### ########### ############"
              "####### ##########  ############"
              "####### ########   #############"
              "####### ######## ###############"
              "####### ######   ###############"
              "#######    ### #################"
              "#######     ##^#################"
              "#######     ## #################"
              "#######    ### #################"
              "########   ### #################"
              "########## #   #################"
              "##########   ###################"
              "##########   ###################"
              "#########     ##################"
              "#########     ##################"
              "##########    ##################"
              "###########    #################"
              "###########    #################"
              "############  ##################"]})