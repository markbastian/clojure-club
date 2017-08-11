(defproject clojure-club "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure "1.9.0-alpha16"]
                 [org.clojure/clojurescript "1.9.495"]
                 [com.taoensso/timbre "4.8.0"]
                 [reagent "0.6.1"]
                 [hickory "0.7.1"]
                 [com.taoensso/tufte "1.1.1"]
                 [org.clojure/core.logic "0.8.11"]
                 [org.clojure/data.xml "0.0.8"]
                 [com.rpl/specter "1.0.1"]
                 [mount "0.1.11"]
                 [clojure-lanterna "0.9.7"]
                 ;[uncomplicate/neanderthal "0.9.0"]
                 ;[uncomplicate/clojurecl "0.7.1"]
                 [com.novemberain/monger "3.1.0"]
                 [com.github.fakemongo/fongo "2.0.13"]
                 [environ "1.1.0"]
                 [cheshire "5.7.1"]
                 ;; https://mvnrepository.com/artifact/org.slf4j/slf4j-api
                 [org.slf4j/slf4j-api "1.7.25"]
                 [org.clojure/tools.trace "0.7.9"]
                 [org.clojure/core.async "0.3.443"]
                 [clojure-csv/clojure-csv "2.0.1"]
                 [clj-sockets "0.1.0"]]

  :plugins [[lein-cljsbuild "1.1.5" :exclusions [[org.clojure/clojure]]]
            [lein-figwheel "0.5.9"]
            [lein-environ "1.1.0"]]

  :source-paths ["src/main/clj" "src/main/cljc"]
  :test-paths ["src/test/clj" "src/test/cljc"]
  :resource-paths ["src/main/resources"]
  :java-source-paths ["src/main/java"]

  :clean-targets ^{:protect false} ["src/main/resources/public/js/compiled" "target"]
  :jar-exclusions [#"\.swp|\.swo|\.DS_Store"]

  :profiles {:uberjar {:aot :all}
             :dev {:plugins [[lein-cljsbuild "1.1.5"]
                             [org.clojure/clojurescript "1.9.495"]]
                   :dependencies [[com.cemerick/piggieback "0.2.1"]
                                  [figwheel-sidecar "0.5.9"]
                                  [org.clojure/test.check "0.9.0"]]
                   :repl-options {:nrepl-middleware
                                  [cemerick.piggieback/wrap-cljs-repl]}}
             :cljs {:plugins [[lein-cljsbuild "1.1.5"]] }}

  :cljsbuild {:builds [{:id "dev"
                        :source-paths ["src/main/cljs" "src/main/cljc"]

                        ;; If no code is to be run, set :figwheel true for continued automagical reloading
                        :figwheel {:on-jsload "clojure-club.core/on-js-reload"}

                        :compiler {:main clojure-club.core
                                   :asset-path "js/compiled/out"
                                   :output-to "src/main/resources/public/js/compiled/clojure_club.js"
                                   :output-dir "src/main/resources/public/js/compiled/out"
                                   :source-map-timestamp true}}
                       ;; This next build is an compressed minified build for
                       ;; production. You can build this with:
                       ;; lein cljsbuild once min
                       {:id "min"
                        :source-paths ["src/main/cljs" "src/main/cljc"]
                        :compiler {:output-to "src/main/resources/public/js/compiled/clojure_club.js"
                                   :main clojure-club.core
                                   :optimizations :advanced
                                   :pretty-print false}}]}

  :figwheel {
             ;; :http-server-root "public" ;; default and assumes "resources"
             ;; :server-port 3449 ;; default
             ;; :server-ip "127.0.0.1"

             :css-dirs ["src/main/resources/public/css"] ;; watch and update CSS

             ;; Start an nREPL server into the running figwheel process
             ;; :nrepl-port 7888

             ;; Server Ring Handler (optional)
             ;; if you want to embed a ring handler into the figwheel http-kit
             ;; server, this is for simple ring servers, if this
             ;; doesn't work for you just run your own server :)
             ;; :ring-handler hello_world.server/handler

             ;; To be able to open files in your editor from the heads up display
             ;; you will need to put a script on your path.
             ;; that script will have to take a file path and a line number
             ;; ie. in  ~/bin/myfile-opener
             ;; #! /bin/sh
             ;; emacsclient -n +$2 $1
             ;;
             ;; :open-file-command "myfile-opener"

             ;; if you want to disable the REPL
             ;; :repl false

             ;; to configure a different figwheel logfile path
             ;; :server-logfile "tmp/logs/figwheel-logfile.log"
             })
