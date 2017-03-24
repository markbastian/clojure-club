// Compiled by ClojureScript 1.8.51 {}
goog.provide('clojure_club.x124_analyze_reversi.mbastian');
goog.require('cljs.core');
clojure_club.x124_analyze_reversi.mbastian.boardwalk = (function clojure_club$x124_analyze_reversi$mbastian$boardwalk(board,player_color,start_cell,dir){
var f = cljs.core.disj.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"w","w",1994700528,null),null,new cljs.core.Symbol(null,"b","b",-1172211299,null),null], null), null),player_color);
var g = cljs.core.PersistentHashSet.fromArray([player_color], true);
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"e","e",-1273166571,null),cljs.core.get_in.call(null,board,start_cell))){
var c = cljs.core.mapv.call(null,cljs.core._PLUS_,start_cell,dir);
var res = cljs.core.PersistentVector.EMPTY;
while(true){
var x = cljs.core.get_in.call(null,board,c);
if(cljs.core.truth_(f.call(null,x))){
var G__29781 = cljs.core.mapv.call(null,cljs.core._PLUS_,c,dir);
var G__29782 = cljs.core.conj.call(null,res,c);
c = G__29781;
res = G__29782;
continue;
} else {
if(cljs.core.truth_(g.call(null,x))){
return res;
} else {
return null;

}
}
break;
}
} else {
return null;
}
});
clojure_club.x124_analyze_reversi.mbastian.analyze = (function clojure_club$x124_analyze_reversi$mbastian$analyze(board,color){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var directions = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(-1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(-1)], null)], null);
var iter__19208__auto__ = ((function (directions){
return (function clojure_club$x124_analyze_reversi$mbastian$analyze_$_iter__29791(s__29792){
return (new cljs.core.LazySeq(null,((function (directions){
return (function (){
var s__29792__$1 = s__29792;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__29792__$1);
if(temp__4657__auto__){
var xs__5205__auto__ = temp__4657__auto__;
var i = cljs.core.first.call(null,xs__5205__auto__);
var iterys__19204__auto__ = ((function (s__29792__$1,i,xs__5205__auto__,temp__4657__auto__,directions){
return (function clojure_club$x124_analyze_reversi$mbastian$analyze_$_iter__29791_$_iter__29793(s__29794){
return (new cljs.core.LazySeq(null,((function (s__29792__$1,i,xs__5205__auto__,temp__4657__auto__,directions){
return (function (){
var s__29794__$1 = s__29794;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__29794__$1);
if(temp__4657__auto____$1){
var xs__5205__auto____$1 = temp__4657__auto____$1;
var j = cljs.core.first.call(null,xs__5205__auto____$1);
var iterys__19204__auto__ = ((function (s__29794__$1,s__29792__$1,j,xs__5205__auto____$1,temp__4657__auto____$1,i,xs__5205__auto__,temp__4657__auto__,directions){
return (function clojure_club$x124_analyze_reversi$mbastian$analyze_$_iter__29791_$_iter__29793_$_iter__29795(s__29796){
return (new cljs.core.LazySeq(null,((function (s__29794__$1,s__29792__$1,j,xs__5205__auto____$1,temp__4657__auto____$1,i,xs__5205__auto__,temp__4657__auto__,directions){
return (function (){
var s__29796__$1 = s__29796;
while(true){
var temp__4657__auto____$2 = cljs.core.seq.call(null,s__29796__$1);
if(temp__4657__auto____$2){
var s__29796__$2 = temp__4657__auto____$2;
if(cljs.core.chunked_seq_QMARK_.call(null,s__29796__$2)){
var c__19206__auto__ = cljs.core.chunk_first.call(null,s__29796__$2);
var size__19207__auto__ = cljs.core.count.call(null,c__19206__auto__);
var b__29798 = cljs.core.chunk_buffer.call(null,size__19207__auto__);
if((function (){var i__29797 = (0);
while(true){
if((i__29797 < size__19207__auto__)){
var d = cljs.core._nth.call(null,c__19206__auto__,i__29797);
var b = clojure_club.x124_analyze_reversi.mbastian.boardwalk.call(null,board,color,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null),d);
if(cljs.core.truth_(cljs.core.not_empty.call(null,b))){
cljs.core.chunk_append.call(null,b__29798,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null),cljs.core.set.call(null,b)], null));

var G__29799 = (i__29797 + (1));
i__29797 = G__29799;
continue;
} else {
var G__29800 = (i__29797 + (1));
i__29797 = G__29800;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29798),clojure_club$x124_analyze_reversi$mbastian$analyze_$_iter__29791_$_iter__29793_$_iter__29795.call(null,cljs.core.chunk_rest.call(null,s__29796__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29798),null);
}
} else {
var d = cljs.core.first.call(null,s__29796__$2);
var b = clojure_club.x124_analyze_reversi.mbastian.boardwalk.call(null,board,color,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null),d);
if(cljs.core.truth_(cljs.core.not_empty.call(null,b))){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null),cljs.core.set.call(null,b)], null),clojure_club$x124_analyze_reversi$mbastian$analyze_$_iter__29791_$_iter__29793_$_iter__29795.call(null,cljs.core.rest.call(null,s__29796__$2)));
} else {
var G__29801 = cljs.core.rest.call(null,s__29796__$2);
s__29796__$1 = G__29801;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__29794__$1,s__29792__$1,j,xs__5205__auto____$1,temp__4657__auto____$1,i,xs__5205__auto__,temp__4657__auto__,directions))
,null,null));
});})(s__29794__$1,s__29792__$1,j,xs__5205__auto____$1,temp__4657__auto____$1,i,xs__5205__auto__,temp__4657__auto__,directions))
;
var fs__19205__auto__ = cljs.core.seq.call(null,iterys__19204__auto__.call(null,directions));
if(fs__19205__auto__){
return cljs.core.concat.call(null,fs__19205__auto__,clojure_club$x124_analyze_reversi$mbastian$analyze_$_iter__29791_$_iter__29793.call(null,cljs.core.rest.call(null,s__29794__$1)));
} else {
var G__29802 = cljs.core.rest.call(null,s__29794__$1);
s__29794__$1 = G__29802;
continue;
}
} else {
return null;
}
break;
}
});})(s__29792__$1,i,xs__5205__auto__,temp__4657__auto__,directions))
,null,null));
});})(s__29792__$1,i,xs__5205__auto__,temp__4657__auto__,directions))
;
var fs__19205__auto__ = cljs.core.seq.call(null,iterys__19204__auto__.call(null,cljs.core.range.call(null,cljs.core.count.call(null,board.call(null,i)))));
if(fs__19205__auto__){
return cljs.core.concat.call(null,fs__19205__auto__,clojure_club$x124_analyze_reversi$mbastian$analyze_$_iter__29791.call(null,cljs.core.rest.call(null,s__29792__$1)));
} else {
var G__29803 = cljs.core.rest.call(null,s__29792__$1);
s__29792__$1 = G__29803;
continue;
}
} else {
return null;
}
break;
}
});})(directions))
,null,null));
});})(directions))
;
return iter__19208__auto__.call(null,cljs.core.range.call(null,cljs.core.count.call(null,board)));
})());
});
if(cljs.core._EQ_.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(3)], null),cljs.core.PersistentHashSet.fromArray([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)], true),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2)], null),cljs.core.PersistentHashSet.fromArray([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)], true),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(1)], null),cljs.core.PersistentHashSet.fromArray([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(1)], null)], true),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(0)], null),cljs.core.PersistentHashSet.fromArray([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(1)], null)], true)], true, false),clojure_club.x124_analyze_reversi.mbastian.analyze.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"e","e",-1273166571,null),new cljs.core.Symbol(null,"e","e",-1273166571,null),new cljs.core.Symbol(null,"e","e",-1273166571,null),new cljs.core.Symbol(null,"e","e",-1273166571,null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"e","e",-1273166571,null),new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"b","b",-1172211299,null),new cljs.core.Symbol(null,"e","e",-1273166571,null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"e","e",-1273166571,null),new cljs.core.Symbol(null,"b","b",-1172211299,null),new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"e","e",-1273166571,null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"e","e",-1273166571,null),new cljs.core.Symbol(null,"e","e",-1273166571,null),new cljs.core.Symbol(null,"e","e",-1273166571,null),new cljs.core.Symbol(null,"e","e",-1273166571,null)], null)], null),new cljs.core.Symbol(null,"w","w",1994700528,null)))){
} else {
throw (new Error("Assert failed: (= {[1 3] #{[1 2]}, [0 2] #{[1 2]}, [3 1] #{[2 1]}, [2 0] #{[2 1]}} (analyze (quote [[e e e e] [e w b e] [e b w e] [e e e e]]) (quote w)))"));
}
if(cljs.core._EQ_.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(2)], null),cljs.core.PersistentHashSet.fromArray([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(2)], null)], true),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(0)], null),cljs.core.PersistentHashSet.fromArray([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(1)], null)], true),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),cljs.core.PersistentHashSet.fromArray([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null)], true)], true, false),clojure_club.x124_analyze_reversi.mbastian.analyze.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"e","e",-1273166571,null),new cljs.core.Symbol(null,"e","e",-1273166571,null),new cljs.core.Symbol(null,"e","e",-1273166571,null),new cljs.core.Symbol(null,"e","e",-1273166571,null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"e","e",-1273166571,null),new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"b","b",-1172211299,null),new cljs.core.Symbol(null,"e","e",-1273166571,null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"e","e",-1273166571,null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"e","e",-1273166571,null),new cljs.core.Symbol(null,"e","e",-1273166571,null),new cljs.core.Symbol(null,"e","e",-1273166571,null),new cljs.core.Symbol(null,"e","e",-1273166571,null)], null)], null),new cljs.core.Symbol(null,"b","b",-1172211299,null)))){
} else {
throw (new Error("Assert failed: (= {[3 2] #{[2 2]}, [3 0] #{[2 1]}, [1 0] #{[1 1]}} (analyze (quote [[e e e e] [e w b e] [w w w e] [e e e e]]) (quote b)))"));
}
if(cljs.core._EQ_.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(3)], null),cljs.core.PersistentHashSet.fromArray([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)], true),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(3)], null),cljs.core.PersistentHashSet.fromArray([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)], true),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(3)], null),cljs.core.PersistentHashSet.fromArray([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(2)], null)], true),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(3)], null),cljs.core.PersistentHashSet.fromArray([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(2)], null)], true)], true, false),clojure_club.x124_analyze_reversi.mbastian.analyze.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"e","e",-1273166571,null),new cljs.core.Symbol(null,"e","e",-1273166571,null),new cljs.core.Symbol(null,"e","e",-1273166571,null),new cljs.core.Symbol(null,"e","e",-1273166571,null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"e","e",-1273166571,null),new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"b","b",-1172211299,null),new cljs.core.Symbol(null,"e","e",-1273166571,null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"b","b",-1172211299,null),new cljs.core.Symbol(null,"e","e",-1273166571,null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"e","e",-1273166571,null),new cljs.core.Symbol(null,"e","e",-1273166571,null),new cljs.core.Symbol(null,"b","b",-1172211299,null),new cljs.core.Symbol(null,"e","e",-1273166571,null)], null)], null),new cljs.core.Symbol(null,"w","w",1994700528,null)))){
} else {
throw (new Error("Assert failed: (= {[0 3] #{[1 2]}, [1 3] #{[1 2]}, [3 3] #{[2 2]}, [2 3] #{[2 2]}} (analyze (quote [[e e e e] [e w b e] [w w b e] [e e b e]]) (quote w)))"));
}
if(cljs.core._EQ_.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(3)], null),cljs.core.PersistentHashSet.fromArray([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)], true),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(3)], null),cljs.core.PersistentHashSet.fromArray([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)], true),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(3)], null),cljs.core.PersistentHashSet.fromArray([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(1)], null)], true)], true, false),clojure_club.x124_analyze_reversi.mbastian.analyze.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"e","e",-1273166571,null),new cljs.core.Symbol(null,"e","e",-1273166571,null),new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"e","e",-1273166571,null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"b","b",-1172211299,null),new cljs.core.Symbol(null,"b","b",-1172211299,null),new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"e","e",-1273166571,null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"b","b",-1172211299,null),new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"e","e",-1273166571,null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"b","b",-1172211299,null),new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null),new cljs.core.Symbol(null,"b","b",-1172211299,null)))){
} else {
throw (new Error("Assert failed: (= {[0 3] #{[2 1] [1 2]}, [1 3] #{[1 2]}, [2 3] #{[2 2] [2 1]}} (analyze (quote [[e e w e] [b b w e] [b w w e] [b w w w]]) (quote b)))"));
}

//# sourceMappingURL=mbastian.js.map?rel=1490073192544