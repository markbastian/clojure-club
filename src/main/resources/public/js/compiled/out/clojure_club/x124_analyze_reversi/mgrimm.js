// Compiled by ClojureScript 1.9.495 {}
goog.provide('clojure_club.x124_analyze_reversi.mgrimm');
goog.require('cljs.core');
clojure_club.x124_analyze_reversi.mgrimm.analyze_reversi = (function clojure_club$x124_analyze_reversi$mgrimm$analyze_reversi(board,color){
var moves = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(-1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(-1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null)], null);
var opponent = ((function (moves){
return (function clojure_club$x124_analyze_reversi$mgrimm$analyze_reversi_$_opponent(c){
var pred__36459 = cljs.core._EQ_;
var expr__36460 = c;
if(cljs.core.truth_(pred__36459.call(null,new cljs.core.Symbol(null,"b","b",-1172211299,null),expr__36460))){
return new cljs.core.Symbol(null,"w","w",1994700528,null);
} else {
if(cljs.core.truth_(pred__36459.call(null,new cljs.core.Symbol(null,"w","w",1994700528,null),expr__36460))){
return new cljs.core.Symbol(null,"b","b",-1172211299,null);
} else {
return null;
}
}
});})(moves))
;
var walk = ((function (moves){
return (function clojure_club$x124_analyze_reversi$mgrimm$analyze_reversi_$_walk(board__$1,color__$1,p__36462){
var vec__36466 = p__36462;
var coord = cljs.core.nth.call(null,vec__36466,(0),null);
var flips = cljs.core.nth.call(null,vec__36466,(1),null);
var dir = cljs.core.nth.call(null,vec__36466,(2),null);
var pos = vec__36466;
if(cljs.core.truth_(dir)){
var move = cljs.core.mapv.call(null,cljs.core._PLUS_,coord,dir);
var next_color = cljs.core.get_in.call(null,board__$1,move);
if((cljs.core._EQ_.call(null,next_color,new cljs.core.Symbol(null,"e","e",-1273166571,null))) && (cljs.core.seq.call(null,flips))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [move,flips,null], null);
} else {
if(cljs.core._EQ_.call(null,next_color,opponent.call(null,color__$1))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [move,cljs.core.conj.call(null,flips,move),dir], null);
} else {
return null;
}
}
} else {
return pos;
}
});})(moves))
;
var start = ((function (moves){
return (function clojure_club$x124_analyze_reversi$mgrimm$analyze_reversi_$_start(board__$1,color__$1){
return cljs.core.apply.call(null,cljs.core.concat,cljs.core.keep_indexed.call(null,((function (moves){
return (function (i,r){
return cljs.core.apply.call(null,cljs.core.concat,cljs.core.keep_indexed.call(null,((function (moves){
return (function (j,c){
if(cljs.core._EQ_.call(null,c,color__$1)){
return cljs.core.keep.call(null,((function (moves){
return (function (p1__36415_SHARP_){
return walk.call(null,board__$1,c,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null),cljs.core.PersistentHashSet.EMPTY,p1__36415_SHARP_], null));
});})(moves))
,moves);
} else {
return null;
}
});})(moves))
,r));
});})(moves))
,board__$1));
});})(moves))
;
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,cljs.core.juxt.call(null,cljs.core.first,cljs.core.second),cljs.core.first.call(null,cljs.core.drop_while.call(null,((function (moves){
return (function (xs){
return cljs.core.some.call(null,((function (moves){
return (function (p1__36416_SHARP_){
return cljs.core.nth.call(null,p1__36416_SHARP_,(2));
});})(moves))
,xs);
});})(moves))
,cljs.core.iterate.call(null,cljs.core.partial.call(null,cljs.core.keep,cljs.core.partial.call(null,walk,board,color)),start.call(null,board,color))))));
});
if(cljs.core._EQ_.call(null,cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(3)], null),cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)], true),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2)], null),cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)], true),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(1)], null),cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(1)], null)], true),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(0)], null),cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(1)], null)], true)]),clojure_club.x124_analyze_reversi.mgrimm.analyze_reversi.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"e","e",-1273166571,null),new cljs.core.Symbol(null,"e","e",-1273166571,null),new cljs.core.Symbol(null,"e","e",-1273166571,null),new cljs.core.Symbol(null,"e","e",-1273166571,null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"e","e",-1273166571,null),new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"b","b",-1172211299,null),new cljs.core.Symbol(null,"e","e",-1273166571,null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"e","e",-1273166571,null),new cljs.core.Symbol(null,"b","b",-1172211299,null),new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"e","e",-1273166571,null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"e","e",-1273166571,null),new cljs.core.Symbol(null,"e","e",-1273166571,null),new cljs.core.Symbol(null,"e","e",-1273166571,null),new cljs.core.Symbol(null,"e","e",-1273166571,null)], null)], null),new cljs.core.Symbol(null,"w","w",1994700528,null)))){
} else {
throw (new Error("Assert failed: (= {[1 3] #{[1 2]}, [0 2] #{[1 2]}, [3 1] #{[2 1]}, [2 0] #{[2 1]}} (analyze-reversi (quote [[e e e e] [e w b e] [e b w e] [e e e e]]) (quote w)))"));
}
if(cljs.core._EQ_.call(null,cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(2)], null),cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(2)], null)], true),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(0)], null),cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(1)], null)], true),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null)], true)]),clojure_club.x124_analyze_reversi.mgrimm.analyze_reversi.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"e","e",-1273166571,null),new cljs.core.Symbol(null,"e","e",-1273166571,null),new cljs.core.Symbol(null,"e","e",-1273166571,null),new cljs.core.Symbol(null,"e","e",-1273166571,null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"e","e",-1273166571,null),new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"b","b",-1172211299,null),new cljs.core.Symbol(null,"e","e",-1273166571,null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"e","e",-1273166571,null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"e","e",-1273166571,null),new cljs.core.Symbol(null,"e","e",-1273166571,null),new cljs.core.Symbol(null,"e","e",-1273166571,null),new cljs.core.Symbol(null,"e","e",-1273166571,null)], null)], null),new cljs.core.Symbol(null,"b","b",-1172211299,null)))){
} else {
throw (new Error("Assert failed: (= {[3 2] #{[2 2]}, [3 0] #{[2 1]}, [1 0] #{[1 1]}} (analyze-reversi (quote [[e e e e] [e w b e] [w w w e] [e e e e]]) (quote b)))"));
}
if(cljs.core._EQ_.call(null,cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(3)], null),cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)], true),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(3)], null),cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)], true),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(3)], null),cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(2)], null)], true),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(3)], null),cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(2)], null)], true)]),clojure_club.x124_analyze_reversi.mgrimm.analyze_reversi.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"e","e",-1273166571,null),new cljs.core.Symbol(null,"e","e",-1273166571,null),new cljs.core.Symbol(null,"e","e",-1273166571,null),new cljs.core.Symbol(null,"e","e",-1273166571,null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"e","e",-1273166571,null),new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"b","b",-1172211299,null),new cljs.core.Symbol(null,"e","e",-1273166571,null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"b","b",-1172211299,null),new cljs.core.Symbol(null,"e","e",-1273166571,null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"e","e",-1273166571,null),new cljs.core.Symbol(null,"e","e",-1273166571,null),new cljs.core.Symbol(null,"b","b",-1172211299,null),new cljs.core.Symbol(null,"e","e",-1273166571,null)], null)], null),new cljs.core.Symbol(null,"w","w",1994700528,null)))){
} else {
throw (new Error("Assert failed: (= {[0 3] #{[1 2]}, [1 3] #{[1 2]}, [3 3] #{[2 2]}, [2 3] #{[2 2]}} (analyze-reversi (quote [[e e e e] [e w b e] [w w b e] [e e b e]]) (quote w)))"));
}
if(cljs.core._EQ_.call(null,cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(3)], null),cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)], true),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(3)], null),cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)], true),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(3)], null),cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(1)], null)], true)]),clojure_club.x124_analyze_reversi.mgrimm.analyze_reversi.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"e","e",-1273166571,null),new cljs.core.Symbol(null,"e","e",-1273166571,null),new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"e","e",-1273166571,null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"b","b",-1172211299,null),new cljs.core.Symbol(null,"b","b",-1172211299,null),new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"e","e",-1273166571,null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"b","b",-1172211299,null),new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"e","e",-1273166571,null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"b","b",-1172211299,null),new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null),new cljs.core.Symbol(null,"b","b",-1172211299,null)))){
} else {
throw (new Error("Assert failed: (= {[0 3] #{[2 1] [1 2]}, [1 3] #{[1 2]}, [2 3] #{[2 2] [2 1]}} (analyze-reversi (quote [[e e w e] [b b w e] [b w w e] [b w w w]]) (quote b)))"));
}

//# sourceMappingURL=mgrimm.js.map?rel=1491273379062