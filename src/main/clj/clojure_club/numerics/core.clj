(ns clojure-club.numerics.core
  (:require [uncomplicate.clojurecl.core
             :refer [with-default finish!]]
            [uncomplicate.neanderthal
             [core :refer [asum dot axpy! mv! mm! transfer! copy]]
             [native :refer [fv fge]]
             [opencl :refer [with-default-engine clv clge]]]))

;(with-default
;  (with-default-engine
;    (asum (fv 1 -2 3))))