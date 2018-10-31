(ns clojure-club.rle.mbastian-test
  (:require [clojure.test :refer :all]
            [clojure-club.rle.mbastian :refer [encode decode]]))

(def test-string
  "WWWWWWWWWWWWBWWWWWWWWWWWWBBBWWWWWWWWWWWWWWWWWWWWWWWWBWWWWWWWWWWWWWW")

(deftest encode-test
  (testing "Encoding"
    (is (= "12W1B12W3B24W1B14W"
           (encode test-string)))))

(deftest decode-test
  (testing "Decoding"
    (is (= test-string
           (decode "12W1B12W3B24W1B14W")))))

(deftest round-trip-test
  (testing "We should be able to get our original answer back"
    (is (= test-string
           (-> test-string encode decode)))))