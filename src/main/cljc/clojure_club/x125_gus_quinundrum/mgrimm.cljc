(ns clojure-club.x125-gus-quinundrum.mgrimm)

(assert
  (= (str '(fn [] (let [x "(fn [] (let [x " y "(str x (pr-str x) \" y \" (pr-str y) \"] \" y)))"] (str x (pr-str x) " y " (pr-str y) "] " y))))
     ((fn [] (let [x "(fn [] (let [x " y "(str x (pr-str x) \" y \" (pr-str y) \"] \" y)))"] (str x (pr-str x) " y " (pr-str y) "] " y))))))
