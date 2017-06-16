(ns clojure-club.destructuring.core)

;;;;;;;;;;;;Seq Destructuring;;;;;;;;;;;;

;you can do any number of placeholders
;& captures the rest
;:as captures the entire seq
(let [[a b _ & r :as v] (range 5)] [a b r v])

;"overbinding" maps to nil
(let [[a b _ & r :as v] (range 1)] [a b r v])

;"underbinding" drops the rest
(let [[a _ b _ c] (range)] [a b c])

;You can nest destructuring
(let [[a _ & [f & [g :as h] :as b] :as c] (range 10)]
  [a f (last h)])

;Use seq destructuring with regexes
(defn year-reformatter [s]
  (let [[_ m d [_ _ y0 y1]] (re-matches #"(\d{2})-(\d{2})-(\d{4})" s)]
    (str y0 y1 "/" m "/" d)))

;(year-reformatter "07-04-1776")

;Seq destructuring function arguments
(defn det2x2 [[[a b] [c d]]]
  (- (* a d) (* b c)))

(det2x2
  [[1 2]
   [4 5]])

(defn det3x3 [[[a b c] [d e f] [g h i]]]
  (+ (* a (- (* e i) (* f h)))
     (* b (- (* f g) (* d i)))
     (* c (- (* d h) (* e g)))))

(det3x3
  [[6 1 1]
   [4 -2 5]
   [2 8 7]])

(defn dot [u v] (reduce + (map * u v)))

(defn circumcircle [[ux uy :as u] [vx vy :as v] [wx wy :as w]]
  (let [a (det3x3 [[ux uy 1] [vx vy 1] [wx wy 1]])
        [uu vv ww] (map #(dot % %) [u v w])
        [bx by :as b] [(* -1 (det3x3 [[uu uy 1] [vv vy 1] [ww wy 1]]))
                       (det3x3 [[uu ux 1] [vv vx 1] [ww wx 1]])]
        c (* -1 (det3x3 [[uu ux uy] [vv vx vy] [ww wx wy]]))
        desc (- (dot b b) (* 4.0 a c))]
    {:cx (/ bx -2.0 a)
     :cy (/ by -2.0 a)
     :r (/ (Math/sqrt desc) 2.0 (Math/abs a))}))

(circumcircle [0 1] [1 0] [0 -1])
(circumcircle [2 1.5] [3 0.5] [2 -0.5])

;Clever destructuring with map for a lazy fib seq
(def fib-seq (map first (iterate (fn [[a b]] [b (+ a b)]) [0N 1N])))

;(take 1000 fib-seq)

;map implement the sequence abstraction as key-value pairs
(let [[[k v]] (seq {:a 1 :b 2})] [k v])

;Here we destructure map pairs in a for comprehension
(defn invert-map [mp]
  (reduce
    (fn [m [k v]] (update m k conj v))
    {}
    (for [[k v] mp n v] [n k])))

(invert-map {:a '(1 2 3), :b '(1 2 3 6 7), :c '(1 2 8 9 10)})

;destructuring an argument list with a seq
(defn update-kvs [m & [k v & r]]
  (if k
    (recur (update m k v) r)
    m))

(update-kvs {:a 1 :b 2} :a inc :b (comp dec dec))

;Function arguments are nothing more than destructured seqs (and maps)
(defn mean [& v]
  (let [c (count v)]
    (when (pos? c) (double (/ (reduce + v) c)))))

;Destructuring in a loop recur can make the code quite concise and easy to think about
(defn n-primes [n]
  (loop [[f & r] (drop 2 (range)) res []]
  (if (= n (count res))
    res
    (recur (remove #(zero? (mod % f)) r) (conj res f)))))

;Another example
(defn lazy-seq-primes
  ([[f & r]] (cons f (lazy-seq (lazy-seq-primes (remove #(zero? (mod % f)) r)))))
  ([] (lazy-seq-primes (drop 2 (range)))))

;And another one using iterate
(def prime-seq
  (letfn [(remover [n s](remove #(zero? (mod % n)) s))]
    (->> [2 (remover 2 (drop 2 (range)))]
         (iterate (fn [[p [f & r]]] [f (remover f r)]))
         (map first))))

;;;;;;;;;;;;Map Destructuring;;;;;;;;;;;;

;keys grabs the keys corresponding to the keywords
(let [{:keys [a b c]} {:a 1 :b 2 :c 3}] [a b c])

;There's also strs and syms, which are almost never used
(let [{:strs [a b c]} {"a" 1 "b" 2 "c" 3}] [a b c])
(let [{:syms [a b c]} {'a 1 'b 2 'c 3}] [a b c])

;:as works the same as with seq destructuring
(let [{:keys [a b c] :as m} {:a 1 :b 2 :c 3}]
  [a b c m])

;missing keys are nil
(let [{:keys [a b c d] :as m} {:a 1 :b 2 :c 3}]
  [a b c d m])

;defaults can be provided
(let [{:keys [a b c d] :as m :or {a 3 d 4}} {:a 1 :b 2 :c 3}]
  [a b c d m])

;reverse maps can also be used. This is useful for name clashes
;as well as deeper destructuring
(let [{x :a y :b z :c} {:a 1 :b 2 :c 3}]
  [x y z])

;You can also mix and match
(let [{:keys [x z] v :y :as m :or {z 3}} {:x 1 :y 2}]
  [x v z m])

;Argument name clash. Might also want to prevent collision with
;standard name and int functions.
(defn smarter [{:keys [name int]} { n :name i :int}]
  (if (>= int i) name n))

(smarter {:name "Mark" :int 100} {:name "Thomas" :int 100})
(smarter {:name "Mark" :int 100}
         (update-kvs {:name "Thomas" :int 100} :int inc))

;Named and default arguments
;tip - when args > 2, use named arguments
(defn stream [title & {:keys [service] :or {service :netflix}}]
  (str "Watching: "
       (get (case service
              :netflix #{"Supergirl" "Sherlock"}
              :amazon-prime #{"Endeavour" "A Man Called Ove"}
              :hbo #{"Game of Thrones"}) title "nothing")))

;Nested destructuring works
(defn this-is-weird [{:keys [x] [f s & r] :y}]
  (let [[a b] (split-with (complement #{x}) r)]
    [a f b s]))

;loop-recur complects iteration and termination, so it can be nice
;to convert to an iterate.

;I can convert any loop-recur into an iterate with a map

;Write a step function that captures all arguments as a map
;(iterate requires structural similarity)
(defn prime-step [{[f & r] :sieve :as m}]
  (-> m
      (update :primes conj f)
      (assoc :sieve (remove #(zero? (mod % f)) r))))

;Drop the step function into an iterate and map over the result key
;Use take n to debug or take-while to terminate (or whatever else you want)
(nth (map :primes (iterate prime-step {:sieve (drop 2 (range))})) 100)

;See clojure-club.x106-number-maze.mbastian, starting at line 102
;expand is the step function
;bfs-expander creates the iterator
;bfs-solve configures the solver using named arguments

;;Other good resources
;https://clojure.org/guides/destructuring
;https://gist.github.com/john2x/e1dca953548bfdfb9844
;http://blog.jayfields.com/2010/07/clojure-destructuring.html




