# Clojure-Club

Wherein we solve interesting problems on our own then compare to see how we did. Also, we discuss cool and useful ideas and topics.

## How it works
For programming problems: We'll post a problem description here. A package will be created in this project
for participants to post their solutions. Please put your solution in a ns with the name $USER.clj.

For everything (including the above), just show up and learn and have fun.

## Problems/Topics

#### September 26<sup>th</sup>, 2019: [clj-http](https://github.com/dakrone/clj-http)
From Mark: At this meeting we’re going to talk about using the [clj-http client library](https://github.com/dakrone/clj-http) (and perhaps others like cljs-ajax) as a general purpose tool for getting data from any web site or service. Topics include:

* The basics
* Gotchas
* Middleware and the client library
* Building up your own libraries of useful functions – I’ll show some of mine and hopefully you can all show some of yours as well

#### September 10<sup>th</sup>, 2019: Round Table
Wes presented on using the REPL as a general-purpose tool.

#### August 29<sup>th</sup>, 2019: Round Table
This week’s Clojure Club will be a little less formal. We’d like to do a round table and discuss the following topics:

* How do you use Clojure (e.g. as a general-purpose tool, in a production environment, for tooling, etc.)?
* How could we better increase Clojure adoption in the workplace?

#### August 14<sup>th</sup>, 2019: [Simplicity Matters](https://www.youtube.com/watch?v=rI8tNMsozo0&feature=youtu.be)
This we we watched and discussed the excellent talk ["Simplicity Matters," by Rich Hickey](https://www.youtube.com/watch?v=rI8tNMsozo0&feature=youtu.be) given at Rails Conf 2012.

#### July 30<sup>th</sup>, 2019: [Deploying to the Cloud](https://github.com/markbastian/clj-cloud-playground)
From Mark:
This week at Clojure Club I will present multiple ways (with a complete example project) to deploy your applications, including:
* Creating a simple uberjar
* Setting up your app to run in a Docker container
* Deploying your app to AWS EC2
* Deploying your app as a .war or .jar using AWS Elastic Beanstalk

I’ll also show how to instrument your app from the get-go so that you have REPL support. This will give you the power to develop locally as you normally would or to develop your application live and interactively in its hosted environment. This demo also has applicability to anyone interested in learning some AWS basics (Containerization, EC2, EBS, etc.).

Example project found [here](https://github.com/markbastian/clj-cloud-playground).

#### July 16<sup>th</sup>, 2019: Servicing Web Requests with Ring, Compojure and Reitit
From John Conti: Writing web services in Clojure is very different than Java.  Though Clojure allows powerful and concise code, I struggled with how to organize, think about and evolve Clojure web services with clarity and precision.  I will introduce some of the things I've learned in this area and the key abstractions to know.

#### June 25<sup>th</sup>, 2019: System Contruction, Part 1
John gave his first talk in a short series on system construction with Clojure. He introduced ways to initialize web services and evolve them with ease. Topics discussed included system libraries such as component and integrant as well as how to set up your lein project with a dev-mode profile.

#### April 30<sup>th</sup>, 2019: [shadow-cljs](http://shadow-cljs.org/)
Doug talked about shadow-cljs (http://shadow-cljs.org/). From the website, “shadow-cljs provides everything you need to compile your ClojureScript code with a focus on simplicity and ease of use.” I’ve had a chance to try it out recently and it’s pretty awesome. If you’ve written any ClojureScript or want to, this may be your new go-to compilation tool.

#### April 16<sup>th</sup>, 2019: Advent of Code 2018 Problem 13
We showed off several solutions to [Advent of Code 2018 Problem 13](https://adventofcode.com/2018/day/13).

Here are links to different solutions:
 * [Mark's repo](https://github.com/markbastian/adventofcode/blob/master/src/adventofcode/year2018/day13.clj)
 * [Jonathan's repo](https://github.com/jmromrell/advent-of-code/blob/master/day13.clj)
 * [Doug's repo](https://github.com/DougHamil/threeagent-examples/tree/master/karts) and [demo](https://doughamil.github.io/threeagent-examples/karts/)
 * [Travis's repo]()

#### April 2<sup>nd</sup>, 2019: Cognitect AWS API + REPL Awesomeness
Mark and Matt presented on the Cognitect AWS API and how it is so well architected. We also demonstrated and discussed similar ideas to use internally.

#### March 19<sup>th</sup>, 2019: Provider Pact tests
Lora showed us how to write provider-side pact tests in Clojure.

#### March 5<sup>th</sup>, 2019: Pact tests
Lora showed us how to write both sides of pact tests in Clojure.

#### February 19<sup>th</sup>, 2019: Building composable systems with partsbin
Mark presented on the partsbin library along with various general principles for how to build loosely coupled systems.

#### February 5<sup>th</sup>, 2019: Threeagent
Doug Hamilton presented a cool project he is working on called “Threeagent”:
 
Threeagent is a work-in-progress ClojureScript library for building Three.js applications in a reagent-like style.
 
In this training, Doug demonstrated how you can use threeagent to build a simple clone of the VR game “Beat Saber”.

#### January 22<sup>nd</sup>, 2019: Jenkins Pipelines and Leiningen
Lora discussed the greatly simplified Jenkinsfiles she's worked on for making lein builds even easier.

#### January 8<sup>th</sup>, 2019: Etaoin
Travis talked about [Etaoin](https://github.com/igrishaev/etaoin), a webdriver library written in Clojure.

#### December 11<sup>th</sup>, 2018: Clojure i8080 Emulator
Matt talked about emulating the Intel i8080 CPU and Space Invaders hardware in Clojure, starting from a ROM and ending with a functional game (pun intended). He also talked about how integrant and datascript made the experience epic.

#### November 30th<sup>th</sup>, 2018: Property-based Testing
This week Matt will talk about how to start writing fewer, more awesome tests in Clojure using property-based testing. Property-based testing is a technique for random testing of software, or as Clojure's test.check puts it:

"The core idea of test.check is that instead of enumerating expected input and output for unit tests, you write properties about your function that should hold true for all inputs."

#### November 16th<sup>th</sup>, 2018: Programming Challenges - Again!
We weren't able to get to the meadows problem, so we're gonna do it big time this time.

The Challenge:
You will be provided a vector of fixed-length strings representing a map. 
See examples [here](https://github.com/markbastian/clojure-club/blob/master/src/main/cljc/clojure_club/meadow_finder/core.cljc).
A # represents one type of space (e.g. a non-meadow or wall) and a space represents another (e.g. a meadow or a cave).

Tasks (Do as many of these as you wish):
  * Write a function that takes the map and returns all "meadows" as groups. The result will be a collection of 
  collections, where there will 1 subcollection for each meadow and each subcollection will be the coordinates of the 
  cells in the meadow.
  * Implement a pathfinding algorithm that can be used to navigate from one cell in the map to another while avoiding meadows.
  You could implement something like depth first search, breadth first search, Dijkstra's algorithm, or A*. Whatever you want.
  * Assume you want to connect the meadows/caves. Implement a function to create paths between each such that all meadow
  spaces are traversable from any starting location.

When writing your pathfinding algorithm, consider how it could be made general for any implicit or explicit graph representation.
For example, what if you had more complex terrain (with different costs for traversal), a moving "enemy" that you have to
avoid as you traverse, or a non-grid representation.

If you have other ideas to add, feel free to do so.

#### November 2<sup>nd</sup>, 2018: Programming Challenges!
Solve one of these fun problems and submit a PR:
  * Implement Travis’s spiral sequence problem. See [clojure-club.spiral_challenge.theppner](https://github.com/markbastian/clojure-club/blob/master/src/main/cljc/clojure_club/spiral_challenge/theppner.cljc) for details.
  * Implement Run Length Encoding (https://en.wikipedia.org/wiki/Run-length_encoding)
  * Find meadows. Given a textual description of a map in which # is a “hill” and spaces are meadows, 
  determine the coordinates of all meadow cells. [0 0] is top left and ascends to the right and down. 
  The result will be a sequence of sequences. Each inner sequence will contain the coordinates of the meadow cells. 
  Examples can be found [here](https://github.com/markbastian/clojure-club/blob/master/src/main/cljc/clojure_club/meadow_finder/core.cljc).

#### October 19<sup>th</sup>, 2018: DEVCON

#### October 5<sup>th</sup>, 2018: Test Automation in Clojure
Wes will give us a preview of his talk for DEVCON.

#### September 21<sup>st</sup>, 2018: REPL Servers
This week I’ll be demonstrating how to configure your project to run an embedded REPL server. 

#### September 7<sup>th</sup>, 2018: Synthesis and Deconstruction
This time I’ll talk about synthesis and deconstruction of code at the REPL:
  * Synthesis: How do I build new capability in Clojure
  * Deconstruction: How do I understand and debug existing Clojure code

#### August 24<sup>th</sup>, 2018: Back to Basics
Clojure workflow.

#### August 10<sup>th</sup>, 2018: Reagent Tips
Jonathan Romrell discussed best practices with Reagent, a Clojurescript wrapper around React. Jonathan has spent 
significant time working with Reagent and other front-end technologies and is our local expert on how to use these 
libraries effectively and correctly.

#### July 13<sup>th</sup>, 2018: Tile Laying
Many board games such as Carcassonne, Al Hambra, and Lanterns consist of an evolving grid of square tiles that must be 
drawn and placed. Often, placement must be done in such a way that the image or pattern on the drawn tile and the images 
on the grid must match.

Challenge:

 * Develop a model to represent the aspects of this problem (tile encoding, board representation, etc.)
 * Write a function that takes an existing board/game state and a tile and determines every valid location a tile can be placed

Examples:

 * [Alhambra](https://boardgamegeek.com/boardgame/6249/alhambra): Tiles are placed such that wall boundaries must be respected.

 ![](https://cf.geekdo-images.com/medium/img/CVie6sSUZtPT3hMYT9Dxpk9nmUA=/fit-in/500x500/filters:no_upscale()/pic116129.jpg)

 * [Lanterns: The Harvest Festival](https://www.renegadegamestudios.com/lanterns-the-harvest-festival/): In Lanterns, tiles are placed such that colored, floating lanterns are placed in any desired location. However, cards are only awarded if edge colors match.

 ![](https://cf.geekdo-images.com/medium/img/hVU19yWC012X1Gzh_RC3PHhJmuQ=/fit-in/500x500/filters:no_upscale()/pic2289072.jpg)

 * [Carcassonne](https://www.zmangames.com/en/products/carcassonne/): This one is particularly interesting because the edge alignment of each tile and the connectivity of the edge elements in the tile can produce different scoring results. For example, two city boundaries can exist on the left and top edges of a tile or a tile can have a city corner that includes those same edges, or a number of roads can connect to different tile edges but how those roads join or terminate can vary per tile.

 ![Basic Carcassonne Tiles](https://cf.geekdo-images.com/medium/img/fiuwpUNlEJfasztW7zT-CbT0p94=/fit-in/500x500/filters:no_upscale()/pic115467.jpg)

Bonus: Some games have a similar mechanic, but with hexagonal tiles (e.g. Takenoko, Eclipse, Twilight Imperium).
Design your function such that it accommodates either tile shape. Most of these don't require any special orientation, 
but some do (e.g. Eclipse wormholes).

As this is a generic functionality and we may have future meetings in which we render the results as web or thick client apps,
please put your solution in a cljc file. For reference, I've put my stubbed out solution ns at (ns clojure-club.tile-laying.mbastian).
If you create a separate project for this, please add a link here and submit a PR.

#### June 29<sup>th</sup>, 2018: Advanced Datascript/Datomic

Mark Bastian will go over some very interesting datascript examples.

#### June 15<sup>th</sup>, 2018: Systems

Mark Bastian will be talking about building systems using [Component](https://github.com/stuartsierra/component) and [Integrant](https://github.com/weavejester/integrant), how to build system-ready code, and give a demo of a cool XMPP chat-bot using Integrant components.

#### May 4<sup>th</sup>, 2018: [Spyscope](https://github.com/dgrnbrg/spyscope)

John Conti will be discussing Spyscope, a trace-oriented debug tool for Clojure "designed to make it easy to debug single- and multi-threaded applications."

#### April 20<sup>th</sup>, 2018: Datascript and Datomic

Mark Bastian will share information about [Datomic](https://www.datomic.com/on-prem.html) and [Datascript](https://github.com/tonsky/datascript). Things he’ll discuss:
 * When you might choose one of these vs. SQL or Mongo
 * Schemas
 * The pull and entity functions
 * History (Datomic only)
 * Installing Datomic
 
Datascript examples can be found [here](https://github.com/markbastian/datascript-playground/blob/master/src/datascript_playground/schemas.clj).

#### April 6<sup>th</sup>, 2018: Tooling, Benchmarking, Profiling

Matt Grimm will introduce some tooling and strategies for benchmarking and profiling Clojure code. We'll look at tufte, clj-async-profiler, and criterium, and when it's appropriate to use each library.


#### March 23<sup>rd</sup>, 2018: Ring From the Ground Up

Mark Bastian will be discuss building web applications using Ring (https://github.com/ring-clojure/ring), an HTTP server abstraction library. 
He’ll start with an extremely simple “Hello World” server app and work his way up through a variety of different scenarios, demonstrating how to do each of these using Ring and libraries built on top of it. 
Baby-step topics covered include:
 * Jetty and Immutant servers
 * Hiccup
 * Passing parameters
 * Routing
 * Uploads
 * Sessions
 * Static resources
 * Compojure
 * Routing
 * Swagger APIs

The intent is to show a bunch of extremely simple applications that illustrate how each library/middleware works. 
You can then pick and choose from them to make whatever application you want without bringing the full weight of Luminus to bear. 

The repository for this project can be found [here](https://github.com/markbastian/ring-playground).

#### February 23<sup>rd</sup>, 2018: Using Clojure for Testing in Java Apps

Wesley Matson will be talking about some super cool testing work he’s been doing in which he connects a Clojure REPL to a Java project and gets Clojure tests to run against Java code on build. 
This is all done without introducing Clojure as a non-test dependency. 
Anecdotally, this has resulted in significantly less code while achieving feature parity.

#### February 9<sup>th</sup>, 2018: Middlewares Demonstration

Jonathan will demonstrate an application of the middleware pattern he used to implement a domain specific language 
to represent conditional override logic in a format that can be stored as json and later applied to manipulate data.

#### January 26<sup>th</sup>, 2018: Example Middlewares

We’ll be doing some hands-on examples of using middlewares. Mark Bastian has some examples that show how to use
middlewares to perform implicit data coercion and John Conti has some middleware examples to show as well. 

#### January 12<sup>th</sup>, 2018: Intro to the Middleware Pattern

John Conti will be talking about Middleware, a functional programming idiom. His overview:

“Middleware is the name of a functional programming idiom. It is a pattern in the sense of OO patterns. Used throughout web server and client libraries it lurks unseen in many other libraries. It is a workhorse.

However middleware code can be confusing to read.  When this simple pattern is fully understood, many difficult program organization problems become simple. I wish I had learned it a couple of years ago.

This talk will simply seek to introduce the pattern and show its basic function. Follow on talks will walk through specific use cases to show how to make the pattern work for you to solve daily Clojure programming problems.”

#### December 15<sup>th</sup>, 2017: Intro to the Middleware Pattern

Matt Grimm will show us some really cool Quil stuff (I am told particle systems may be involved) and Wes Matson has a bag of coolness to draw from and demo (some combination of cljs, figwheel, matrix/octave stuff, and/or datascript).

#### December 1<sup>st</sup>, 2017: [Datascript (Again)](https://github.com/tonsky/datascript)

This is a follow up to John Conti's initial datascript/datalog talk.

Pull [this repo](https://github.com/markbastian/datascript-playground) to see my demo.

#### November 3<sup>rd</sup>, 2017: Emacs, Robots, etc.

John Conti gave us some Emacs and Rx tips. Mark showed his balance bot, but was unable to get the network connection 
going to show the REPL on the EV3 Brick.

#### October 27<sup>th</sup>, 2017: [Datascript](https://github.com/tonsky/datascript)

John Conti will be introducing Datascript, an in-memory (re)implementation of the Datalog engine in the Datomic database.  
Datascript turns data manipulations into queries, which are declarative and usually closer to the domain model.  
The result is better agility, fewer bugs and more fun at the expense of some performance. Given the IO bound nature of 
server programs though, performance is often no concern.

#### October 13<sup>th</sup>, 2017: [Datascript](https://github.com/tonsky/datascript)

John Conti will talk to us about reactive programming and the beicon library. In his words:

“Reactive Extensions (usually called Rx) is a streaming event library and specification for several languages. 
Netflix is a primary user.  I'm going to introduce Rx using the Clojure beicon library.”

#### October 6<sup>th</sup>, 2017: [Codingame](https://www.codingame.com/start)

This week for Clojure Club, Jonathan will discuss https://www.codingame.com/start.

#### September 22<sup>nd</sup>, 2017: [Quil](http://quil.info/)

Matt Grimm and Mark Bastian will give live demonstrations of the amazing [Quil](http://quil.info/) library. If you want to see reloadable isomorphic code in all its glory along with some cool demos, come on by.

#### September 1<sup>st</sup>, 2017: Records, Protocols, and more Component

John Conti will continue with his discussions on the above.

#### August 25<sup>th</sup>, 2017: Stuart Sierra's Component Library

John Conti will give a presentation on [component](https://github.com/stuartsierra/component).

#### August 11<sup>th</sup>, 2017: Clojure Applications with State - Part 2

Pick a domain model, any domain model, that contains state. Implement a stateful application in your domain. This likely
will have some sort of UI element. Pick any implementation you want (Swing, web, text, etc.).

Ideas:
* A game, such as what we did in our last meeting.
* A simple text or graphical editor.

Things to research if you haven't already:
* atoms, agents, refs
* watches

#### August 4<sup>th</sup>, 2017: Understanding the REPL

John is going to show us all kinds of ways to use the REPL beyond simply using it as an interactive code editor.

#### July 24<sup>th</sup>, 2017: Clojure Applications with State - Part 1

Select an application that requires state, especially with user interaction. Model the domain as data. You may write 
basic functions that do things like set up an initial hand, but the focus should be on the data, not the actions.
This will be the basis for a series on how Clojure separates state, action, and representation, so pick something that
you would like to build upon into an eventual working application.

Suggestions:
* A card game (or any other game)
  * War, Old Maid, Go Fish - Note that some games like War, Chutes & Ladders, and Candyland are completely random. The 
 user simply "makes it go" by performing a repetitive action and resolving the outcome. You might want to avoid this
 type of game.
  * Dominion, Hearts, Pinochle (We really like Dominion the best, though)
* Any other simple game
  * Tetris, Snakes, Missile Command, Asteroids,...
* An editor of any sort (If you have a more "serious" application in mind)
  * Graphics
  * Financial modeling

#### July 14<sup>th</sup>, 2017: Zippers

Zippers are an intuitive way to navigate and modify an arbitrary data structure in any direction. We'll discuss what makes
them distinct from other navigation functions (tree-seq, postwalk, etc.) and where they come in handy, and will explore some
less obvious uses and interesting applications.

Quoting from the [Clojure reference page](https://clojure.org/reference/other_libraries):

"A zipper is a data structure representing a location in a hierarchical data structure, and the path it took to get there.
It provides down/up/left/right navigation, and localized functional 'editing’, insertion and removal of nodes. With zippers
you can write code that looks like an imperative, destructive walk through a tree, call root when you are done and get a new
tree reflecting all the changes, when in fact nothing at all is mutated - it’s all thread safe and shareable."

Follow up:
  * Here's a link to Matt's examples: https://github.com/tkocmathla/zipper-snippets

#### June 23<sup>rd</sup>, 2017: Interesting Macros

We'll be talking about macros. What are they? How do they work? When do you use them instead of functions?

Assignment: Find or write an interesting macro that you are willing to discuss. Something short and simple is preferable
to the alternatives. Put your example in src/main/cljc/clojure_club/macros/$username.cljc. If you can't come up with
anything, try this:

Write a macro called bizarro that replaces a function with its opposite. For example (bizarro + 6 2) should return 4, not 8.
Do this for at least +, -, *, and /. Feel free to make sin be cos and vice-versa.

As always, come even if you weren't able to do anything.

Reading: 
* [The official docs](https://clojure.org/reference/macros)
* [Brave Clojure's treatment](http://www.braveclojure.com/writing-macros/)

Note: Some folks check in namespaces that contain src.main.cljc or similar in them. Please ensure that they are
(ns clojure-club.macros.$username).

#### June 16<sup>th</sup>, 2017: Destructuring

A primary need in a data-oriented language is the ability to easily pull your data structures apart
and get at all of its pieces. Clojure does this wonderfully with destructuring, but it can be 
confusing at first. This week we'll talk all about it.

Here are some useful links:
 * [The official guide](https://clojure.org/guides/destructuring)
 * [Cheatsheet](https://gist.github.com/john2x/e1dca953548bfdfb9844)
 * [Jay Fields' Guide](http://blog.jayfields.com/2010/07/clojure-destructuring.html)
 * [Yet another guide](http://blog.brunobonacci.com/2014/11/16/clojure-complete-guide-to-destructuring/)

#### June 9<sup>th</sup>, 2017: [Core Async](https://github.com/clojure/core.async)
                          
"Facilities for async programming and communication in Clojure"
                         
 * [Code Walkthrough](https://github.com/clojure/core.async/blob/master/examples/walkthrough.clj)

#### June 2<sup>nd</sup>, 2017: [Transducers](https://clojure.org/reference/transducers)

Matt will be discussing transducers, a way to compose algorithmic transforms. A few links:
  * [clojure.org](https://clojure.org/reference/transducers)
  * [Rich's blog post](http://blog.cognitect.com/blog/2014/8/6/transducers-are-coming)
  
Follow up:
  * Here's a link to Matt's examples: https://github.com/tkocmathla/transducer-adducers

#### May 26<sup>th</sup>, 2017: Java Calls Clojure

One of the biggest concerns of decision makers moving to a new JVM language is support for calling artifacts generated
in that language in Java. Clojure has great support for being called from its host platform. We'll spend some time
investigating this and in all of its incarnations, including:
 * gen-class
 * :gen-class
 * definterface
 * records
 * Direct invocation of clojure.lang APIs
 
Some links:
 * [DZone gen-class example](https://dzone.com/articles/java-clojure-interop-calling)
 * [3 Things Java Programmers Can Steal from Clojure](http://www.lispcast.com/3-things-java-can-steal-from-clojure)
 * [Using clojure.lang.RT](https://clojurefun.wordpress.com/2012/12/24/invoking-clojure-code-from-java/)
 
Follow up:
At the meet we discussed these two demo projects that can be used as a launching point for using Clojure in
your Java projects:
 * [clojure-makes-java](https://github.com/markbastian/clojure-makes-java)
 * [java-calls-clojure](https://github.com/markbastian/java-calls-clojure)
 
#### May 19<sup>th</sup>, 2017: [Making Data Dance](http://www.4clojure.com/problem/113)

From 4clojure.com: Write a function that takes a variable number of integer arguments. If the output is coerced into a 
string, it should return a comma (and space) separated list of the inputs sorted smallest to largest. If the output is 
coerced into a sequence, it should return a seq of unique input elements in the same order as they were entered.

Place your solution in src/main/clj/x113_making_data_dance/$username.clj

Note that you may not use proxy. Speaking of proxy...

In addition to the solving this problem, I'd like to discuss several handy methods for Java interop, including:
 * proxy
 * reify
 * definterface
 * doto
 * bean

#### May 12<sup>th</sup>, 2017: [Mount](https://github.com/tolitius/mount)

Mark will be talking about mount, a simple library for managing state in Clojure. For context, any sizeable app will
need some sort of basic configuration (a database being the classic example) to function. For testing you need the
ability to setup and teardown different configs on fly. Mount is a great way to do this. It can be used to mock up any
set of states you might want for dev, test, prod, or whatever.

#### May 5<sup>th</sup>, 2017: Procedural Domain Generation and Modeling Using Spec

[Spec](https://clojure.org/about/spec) is all the hotness in Clojure nowadays. It allows you to 
create specifications for your data and do all kinds of things once you've generated a spec. Here's
the [guide](https://clojure.org/guides/spec).

Assignment:
 * Pick a domain and create a spec that [generates](https://clojure.org/guides/spec#_generators) models within your domain.
 * Suggested domain:
   * D&D characters or similar
     * A character has a:
       * name: string
       * class: fighter, cleric, magic user, assassin, barbarian (you can multiclass)
       * level: integer
       * traits: STR, DEX, INT, CHA, WIS, CON
       * There are other aspects you could model, such as spells, weapons, etc. Go as deep as you want.
 * You can do whatever domain you want, but if you do the above we'll all be on the same page.
 * Put your solution in src/main/cljc/clojure_club/rpg_spec/{username}

#### April 28<sup>th</sup>, 2017: GURPS Data Modeling

Thanks to Wes for providing this exercise. I think it has a variety of interesting aspects, including
data modeling, XML parsing, tree-walking, etc.

Various .adq/.skl/.eqp etc (actually xml format) files exist under this repository: https://github.com/richardwilkes/gcs_library
They’re used by this fun swing app: http://gurpscharactersheet.com/ 

Convert this particular one to .edn https://github.com/richardwilkes/gcs_library/blob/master/Library/Advantages/Basic%20Set.adq
The exact modeling is up to you, but ideally, be able to “easily answer” various queries such as:
 * Get all the Mental advantages/disadvantages
 * Get all the advantage within a given base cost range (e.g. 15-20, < 12, = 10)
   * Bonus points to anyone that makes this work with point modifier applications
 * Find all advantages that give a bonus to a given skill by name
 * Anything else you find entertaining

The nature of each item can wildly differ, but the format stays relatively the same.

Under most of the main folders, you’ll find a “Basic Set.*” file, the format should be mostly similar to the .adq file, but the content will be vastly different.
For bonus points, make a more general xml->edn utility that works for this style of xml modeling.

#### April 21<sup>st</sup>, 2017: [Reducers](https://clojure.org/reference/reducers) or [Transducers](https://clojure.org/reference/transducers)

Nobody groks any of this stuff. Time to grok. 

Assignment: Pick any problem (trivial is fine) that uses reducers or transducers and work on it. 
We'll discuss it next week. The focus will be on reducers, but if there's time we might get to 
transducers.

To begin, you might want to try using reducers on [this example submitted by Mike](https://github.com/markbastian/clojure-club/blob/master/src/main/cljc/clojure_club/playground/reducer_problem.clj).
Be sure to make your own version so everyone isn't clobbering each other.

Mike is leading the discussion.
 
 #### April 14<sup>th</sup>, 2017: [Universal Computation Engine](https://www.4clojure.com/problem/121)
 
 From [4clojure.com](https://www.4clojure.com/problem/121): "Given a mathematical formula 
 in prefix notation, return a function that calculates the value of the formula. The 
 formula can contain nested calculations using the four basic mathematical operators, 
 numeric constants, and symbols representing variables. The returned function has to 
 accept a single parameter containing the map of variable names to their values."
 
 **Note that you may not use eval or resolve.**
 
 I haven't spent much time thinking about *advanced* aspects of this problem, but for bonus
 points you might want to try the following:
  * Add transcendental functions (sin, cos, etc.)
  * Take a look at symbolic differentiation (This may be extra extra out of scope, just
  throwing it out there.)
  
#### April 7<sup>th</sup>, 2017:

We'll be working on two problems - pick the one you want.
* Develop a quine in Clojure (https://www.4clojure.com/problem/125) and/or
* Develop a Sudoku solver
  * Boards will be a 9x9 nested vector with numeric or nil elements
  * Name you function `solve` so that we have a uniform interface
  * Note that there are several ways you could solve this including a search or using a 
  [logic programming library](https://github.com/clojure/core.logic)

#### March 24<sup>th</sup>, 2017: [Analyze Reversi](https://www.4clojure.com/problem/124)

* Implement your solution as a cljc file (src/main/cljc/x124_analyze_reversi/$USERNAME.cljc rather than a .clj.
* If time allows, we’ll discuss reader conditionals, isomorphic Clojure, and the differences between clj, cljc, and cljs files.
* Finally, bonus points for porting last week’s solution to cljc (Hints: I/O can behave differently on different platforms. PersistentQueue is imported from different locations.).

Please submit your answer via git pull request to https://github.com/markbastian/clojure-club. However, if you email it to me I will continue to facilitate your bad behavior and add it myself.

#### March 17<sup>th</sup>, 2017: [Number Maze](http://www.4clojure.com/problem/106)
 * Compute the minimum number of steps required to go from integer S<sub>i</sub> 
 to S<sub>f</sub>.
 * Allowed operations are:
   * S<sub>i+1</sub> = S<sub>i</sub> + 2
   * S<sub>i+1</sub> = S<sub>i</sub> * 2
   * S<sub>i+1</sub> = S<sub>i</sub>  / 2 
 * Modify your solution to return a numeric path from S<sub>i</sub> to S<sub>f</sub>
 (Note that there are cases with more than one solution).
 * Modify your solution to return all minimum paths.
   * Examples of multiple minimum solutions:
     * 2 -> 4
     * 9 -> 2
     * 2 -> 9
 * Modify your solution to return all paths with interleaved operations. This would
 distinguish ambiguous solutions like [[2 4][2 4]], which would become 
 [[2 + 2 = 4][2 * 2 = 4]]. How the operations are expressed aren't important.

## Ideas
 * Setting up your user profile and favorite plugins
   * Create your own!
   * code coverage, etc.
 * Procedural generation of *stuff*
   * including spec (X2)
 * Cool libraries
   * [Mount](https://github.com/tolitius/mount)
   * [Specter](https://github.com/nathanmarz/specter)
   * [Quil](http://quil.info/)
 * More [4clojure](https://www.4clojure.com/)
 * Java interop
   * Java -> Clojure
   * Clojure -> Java
   * Skin a game (two teams - clj, cljs)
   * UIs
   * JavaFX
 
## License

Copyright © 2017 Mark Bastian, Matt Grimm, Jacob Strength, Jerek Anderson, 
Brock Turner, and all other contributors.

Distributed under the Eclipse Public License either version 1.0 or (at
your option) any later version.
