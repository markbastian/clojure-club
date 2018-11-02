(ns clojure-club.meadow-finder.solutions
  (:require [clojure-club.meadow-finder.core :as mf]
            [clojure-club.meadow-finder.mbastian :as mbastian]
            [clojure-club.meadow-finder.mgrimm :as mgrimm]))

(= (mf/solution-normalizer (mbastian/find-meadows mf/meadow-32x32x4))
   (mf/solution-normalizer (mbastian/find-meadows-2 mf/meadow-32x32x4))
   (mf/solution-normalizer (mgrimm/meadows mf/meadow-32x32x4)))
