(defproject clojure-club "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure "1.9.0-alpha15"]
                 [org.clojure/clojurescript "1.9.494"]]

  :plugins [[lein-cljsbuild "1.1.5"]]

  :source-paths ["src/main/clj" "src/main/cljc"]
  :test-paths ["src/test/clj" "src/test/cljc"]
  :resource-paths ["src/main/resources"]
  :java-source-paths ["src/main/java"]

  :cljsbuild
  {
   :builds [ { :id "example"
              :source-paths ["src/main/cljs"]
              :test-paths ["src/test/cljs"]
              :figwheel true
              :compiler {                                   ;:main "example.core"
                         :asset-path "js/out"
                         :output-to "resources/public/js/clojure-club.js"
                         :output-dir "resources/public/js/out" } } ]
   })
