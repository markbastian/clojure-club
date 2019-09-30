(ns clojure-club.clj-http.programming-quotes-api
  (:require [clj-http.client :as client]))

(defn all-quotes []
  (let [request {:method :get
                 :as :json-strict
                 :url "https://programming-quotes-api.herokuapp.com/quotes"}]
    (:body (client/request request))))

(comment
  (->> (all-quotes)
       (filter (fn [{:keys [en]}]
                 (some-> en
                         cs/upper-case
                         (cs/includes? "COMPLEX"))))
       (map (juxt :en :author))))
