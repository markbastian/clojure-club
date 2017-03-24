// Compiled by ClojureScript 1.8.51 {}
goog.provide('clojure_club.x106_number_maze.mbastian');
goog.require('cljs.core');
goog.require('clojure.string');
clojure_club.x106_number_maze.mbastian.empty_queue = cljs.core.into.call(null,cljs.core.PersistentQueue.EMPTY,cljs.core.PersistentVector.EMPTY);
clojure_club.x106_number_maze.mbastian.number_maze = (function clojure_club$x106_number_maze$mbastian$number_maze(s,g){
var nbrs = (function clojure_club$x106_number_maze$mbastian$number_maze_$_nbrs(x){
var G__29298 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((2) * x),(x + (2))], null);
if(cljs.core.even_QMARK_.call(null,x)){
return cljs.core.conj.call(null,G__29298,(x / (2)));
} else {
return G__29298;
}
});
return (cljs.core.count.call(null,cljs.core.take_while.call(null,(function (p1__29289_SHARP_){
return cljs.core.not.call(null,p1__29289_SHARP_.call(null,g));
}),cljs.core.iterate.call(null,(function (p1__29290_SHARP_){
return cljs.core.reduce.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY,cljs.core.map.call(null,nbrs,p1__29290_SHARP_));
}),cljs.core.PersistentHashSet.fromArray([s], true)))) + (1));
});
clojure_club.x106_number_maze.mbastian.number_path = (function clojure_club$x106_number_maze$mbastian$number_path(s,g){
var nbrs = (function clojure_club$x106_number_maze$mbastian$number_path_$_nbrs(x){
var G__29313 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((2) + x),((2) * x)], null);
if(cljs.core.even_QMARK_.call(null,x)){
return cljs.core.conj.call(null,G__29313,(x / (2)));
} else {
return G__29313;
}
});
var v = cljs.core.PersistentArrayMap.EMPTY;
var G__29316 = cljs.core.conj.call(null,clojure_club.x106_number_maze.mbastian.empty_queue,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,new cljs.core.Keyword(null,"done","done",-889844188)], null));
var vec__29317 = G__29316;
var vec__29318 = cljs.core.nth.call(null,vec__29317,(0),null);
var n = cljs.core.nth.call(null,vec__29318,(0),null);
var edge = vec__29318;
var q = vec__29317;
var v__$1 = v;
var G__29316__$1 = G__29316;
while(true){
var v__$2 = v__$1;
var vec__29319 = G__29316__$1;
var vec__29320 = cljs.core.nth.call(null,vec__29319,(0),null);
var n__$1 = cljs.core.nth.call(null,vec__29320,(0),null);
var edge__$1 = vec__29320;
var q__$1 = vec__29319;
if(cljs.core.truth_(v__$2.call(null,g))){
return cljs.core.reverse.call(null,cljs.core.take_while.call(null,cljs.core.complement.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"done","done",-889844188),null], null), null)),cljs.core.iterate.call(null,v__$2,g)));
} else {
if(cljs.core.truth_(v__$2.call(null,n__$1))){
var G__29321 = v__$2;
var G__29322 = cljs.core.pop.call(null,q__$1);
v__$1 = G__29321;
G__29316__$1 = G__29322;
continue;
} else {
var G__29323 = cljs.core.conj.call(null,v__$2,edge__$1);
var G__29324 = cljs.core.into.call(null,cljs.core.pop.call(null,q__$1),cljs.core.map.call(null,((function (v__$1,G__29316__$1,v__$2,vec__29319,vec__29320,n__$1,edge__$1,q__$1,v,G__29316,vec__29317,vec__29318,n,edge,q){
return (function (x){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,n__$1], null);
});})(v__$1,G__29316__$1,v__$2,vec__29319,vec__29320,n__$1,edge__$1,q__$1,v,G__29316,vec__29317,vec__29318,n,edge,q))
,nbrs.call(null,n__$1)));
v__$1 = G__29323;
G__29316__$1 = G__29324;
continue;

}
}
break;
}
});
clojure_club.x106_number_maze.mbastian.number_paths = (function clojure_club$x106_number_maze$mbastian$number_paths(s,g){
var nbrs = (function clojure_club$x106_number_maze$mbastian$number_paths_$_nbrs(x){
var G__29369 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),((2) * x)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null),(x + (2))], null)], null);
if(cljs.core.even_QMARK_.call(null,x)){
return cljs.core.conj.call(null,G__29369,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),(x / (2))], null));
} else {
return G__29369;
}
});
var expand = (function clojure_club$x106_number_maze$mbastian$number_paths_$_expand(paths){
var iter__19208__auto__ = (function clojure_club$x106_number_maze$mbastian$number_paths_$_expand_$_iter__29376(s__29377){
return (new cljs.core.LazySeq(null,(function (){
var s__29377__$1 = s__29377;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__29377__$1);
if(temp__4657__auto__){
var xs__5205__auto__ = temp__4657__auto__;
var path = cljs.core.first.call(null,xs__5205__auto__);
var iterys__19204__auto__ = ((function (s__29377__$1,path,xs__5205__auto__,temp__4657__auto__){
return (function clojure_club$x106_number_maze$mbastian$number_paths_$_expand_$_iter__29376_$_iter__29378(s__29379){
return (new cljs.core.LazySeq(null,((function (s__29377__$1,path,xs__5205__auto__,temp__4657__auto__){
return (function (){
var s__29379__$1 = s__29379;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__29379__$1);
if(temp__4657__auto____$1){
var s__29379__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__29379__$2)){
var c__19206__auto__ = cljs.core.chunk_first.call(null,s__29379__$2);
var size__19207__auto__ = cljs.core.count.call(null,c__19206__auto__);
var b__29381 = cljs.core.chunk_buffer.call(null,size__19207__auto__);
if((function (){var i__29380 = (0);
while(true){
if((i__29380 < size__19207__auto__)){
var p = cljs.core._nth.call(null,c__19206__auto__,i__29380);
if(cljs.core.not_any_QMARK_.call(null,cljs.core.PersistentHashSet.fromArray([cljs.core.second.call(null,p)], true),path)){
cljs.core.chunk_append.call(null,b__29381,cljs.core.into.call(null,path,p));

var G__29382 = (i__29380 + (1));
i__29380 = G__29382;
continue;
} else {
var G__29383 = (i__29380 + (1));
i__29380 = G__29383;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29381),clojure_club$x106_number_maze$mbastian$number_paths_$_expand_$_iter__29376_$_iter__29378.call(null,cljs.core.chunk_rest.call(null,s__29379__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29381),null);
}
} else {
var p = cljs.core.first.call(null,s__29379__$2);
if(cljs.core.not_any_QMARK_.call(null,cljs.core.PersistentHashSet.fromArray([cljs.core.second.call(null,p)], true),path)){
return cljs.core.cons.call(null,cljs.core.into.call(null,path,p),clojure_club$x106_number_maze$mbastian$number_paths_$_expand_$_iter__29376_$_iter__29378.call(null,cljs.core.rest.call(null,s__29379__$2)));
} else {
var G__29384 = cljs.core.rest.call(null,s__29379__$2);
s__29379__$1 = G__29384;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__29377__$1,path,xs__5205__auto__,temp__4657__auto__))
,null,null));
});})(s__29377__$1,path,xs__5205__auto__,temp__4657__auto__))
;
var fs__19205__auto__ = cljs.core.seq.call(null,iterys__19204__auto__.call(null,nbrs.call(null,cljs.core.peek.call(null,path))));
if(fs__19205__auto__){
return cljs.core.concat.call(null,fs__19205__auto__,clojure_club$x106_number_maze$mbastian$number_paths_$_expand_$_iter__29376.call(null,cljs.core.rest.call(null,s__29377__$1)));
} else {
var G__29385 = cljs.core.rest.call(null,s__29377__$1);
s__29377__$1 = G__29385;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__19208__auto__.call(null,paths);
});
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.PersistentHashSet.fromArray([g], true),cljs.core.peek),cljs.core.some.call(null,(function (p1__29325_SHARP_){
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.comp.call(null,cljs.core.PersistentHashSet.fromArray([g], true),cljs.core.peek),p1__29325_SHARP_))){
return p1__29325_SHARP_;
} else {
return null;
}
}),cljs.core.iterate.call(null,expand,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [s], null)], null))));
});
clojure_club.x106_number_maze.mbastian.fast_number_paths = (function clojure_club$x106_number_maze$mbastian$fast_number_paths(s,g){
var nbrs = (function clojure_club$x106_number_maze$mbastian$fast_number_paths_$_nbrs(x){
var G__29447 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),((2) * x)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null),(x + (2))], null)], null);
if(cljs.core.even_QMARK_.call(null,x)){
return cljs.core.conj.call(null,G__29447,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),(x / (2))], null));
} else {
return G__29447;
}
});
var expand = (function clojure_club$x106_number_maze$mbastian$fast_number_paths_$_expand(p__29448){
var map__29457 = p__29448;
var map__29457__$1 = ((((!((map__29457 == null)))?((((map__29457.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29457.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29457):map__29457);
var paths = cljs.core.get.call(null,map__29457__$1,new cljs.core.Keyword(null,"paths","paths",-1807389588));
var visited = cljs.core.get.call(null,map__29457__$1,new cljs.core.Keyword(null,"visited","visited",-1610853875));
var p = (function (){var iter__19208__auto__ = ((function (map__29457,map__29457__$1,paths,visited){
return (function clojure_club$x106_number_maze$mbastian$fast_number_paths_$_expand_$_iter__29459(s__29460){
return (new cljs.core.LazySeq(null,((function (map__29457,map__29457__$1,paths,visited){
return (function (){
var s__29460__$1 = s__29460;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__29460__$1);
if(temp__4657__auto__){
var xs__5205__auto__ = temp__4657__auto__;
var path = cljs.core.first.call(null,xs__5205__auto__);
var iterys__19204__auto__ = ((function (s__29460__$1,path,xs__5205__auto__,temp__4657__auto__,map__29457,map__29457__$1,paths,visited){
return (function clojure_club$x106_number_maze$mbastian$fast_number_paths_$_expand_$_iter__29459_$_iter__29461(s__29462){
return (new cljs.core.LazySeq(null,((function (s__29460__$1,path,xs__5205__auto__,temp__4657__auto__,map__29457,map__29457__$1,paths,visited){
return (function (){
var s__29462__$1 = s__29462;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__29462__$1);
if(temp__4657__auto____$1){
var s__29462__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__29462__$2)){
var c__19206__auto__ = cljs.core.chunk_first.call(null,s__29462__$2);
var size__19207__auto__ = cljs.core.count.call(null,c__19206__auto__);
var b__29464 = cljs.core.chunk_buffer.call(null,size__19207__auto__);
if((function (){var i__29463 = (0);
while(true){
if((i__29463 < size__19207__auto__)){
var n = cljs.core._nth.call(null,c__19206__auto__,i__29463);
cljs.core.chunk_append.call(null,b__29464,cljs.core.into.call(null,path,n));

var G__29468 = (i__29463 + (1));
i__29463 = G__29468;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29464),clojure_club$x106_number_maze$mbastian$fast_number_paths_$_expand_$_iter__29459_$_iter__29461.call(null,cljs.core.chunk_rest.call(null,s__29462__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29464),null);
}
} else {
var n = cljs.core.first.call(null,s__29462__$2);
return cljs.core.cons.call(null,cljs.core.into.call(null,path,n),clojure_club$x106_number_maze$mbastian$fast_number_paths_$_expand_$_iter__29459_$_iter__29461.call(null,cljs.core.rest.call(null,s__29462__$2)));
}
} else {
return null;
}
break;
}
});})(s__29460__$1,path,xs__5205__auto__,temp__4657__auto__,map__29457,map__29457__$1,paths,visited))
,null,null));
});})(s__29460__$1,path,xs__5205__auto__,temp__4657__auto__,map__29457,map__29457__$1,paths,visited))
;
var fs__19205__auto__ = cljs.core.seq.call(null,iterys__19204__auto__.call(null,cljs.core.remove.call(null,cljs.core.comp.call(null,visited,cljs.core.second),nbrs.call(null,cljs.core.peek.call(null,path)))));
if(fs__19205__auto__){
return cljs.core.concat.call(null,fs__19205__auto__,clojure_club$x106_number_maze$mbastian$fast_number_paths_$_expand_$_iter__29459.call(null,cljs.core.rest.call(null,s__29460__$1)));
} else {
var G__29469 = cljs.core.rest.call(null,s__29460__$1);
s__29460__$1 = G__29469;
continue;
}
} else {
return null;
}
break;
}
});})(map__29457,map__29457__$1,paths,visited))
,null,null));
});})(map__29457,map__29457__$1,paths,visited))
;
return iter__19208__auto__.call(null,paths);
})();
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"paths","paths",-1807389588),p,new cljs.core.Keyword(null,"visited","visited",-1610853875),cljs.core.into.call(null,visited,cljs.core.map.call(null,cljs.core.peek,p))], null);
});
var pred = cljs.core.comp.call(null,cljs.core.PersistentHashSet.fromArray([g], true),cljs.core.peek);
return cljs.core.filter.call(null,pred,cljs.core.some.call(null,((function (pred){
return (function (p__29465){
var map__29466 = p__29465;
var map__29466__$1 = ((((!((map__29466 == null)))?((((map__29466.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29466.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29466):map__29466);
var paths = cljs.core.get.call(null,map__29466__$1,new cljs.core.Keyword(null,"paths","paths",-1807389588));
if(cljs.core.truth_(cljs.core.some.call(null,pred,paths))){
return paths;
} else {
return null;
}
});})(pred))
,cljs.core.iterate.call(null,expand,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"paths","paths",-1807389588),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [s], null)], null),new cljs.core.Keyword(null,"visited","visited",-1610853875),cljs.core.PersistentHashSet.fromArray([s], true)], null))));
});
clojure_club.x106_number_maze.mbastian.nbrs = (function clojure_club$x106_number_maze$mbastian$nbrs(x){
var G__29471 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),((2) * x)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null),(x + (2))], null)], null);
if(cljs.core.even_QMARK_.call(null,x)){
return cljs.core.conj.call(null,G__29471,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),(x / (2))], null));
} else {
return G__29471;
}
});
clojure_club.x106_number_maze.mbastian.expand = (function clojure_club$x106_number_maze$mbastian$expand(p__29472){
var map__29481 = p__29472;
var map__29481__$1 = ((((!((map__29481 == null)))?((((map__29481.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29481.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29481):map__29481);
var paths = cljs.core.get.call(null,map__29481__$1,new cljs.core.Keyword(null,"paths","paths",-1807389588));
var visited = cljs.core.get.call(null,map__29481__$1,new cljs.core.Keyword(null,"visited","visited",-1610853875));
var p = (function (){var iter__19208__auto__ = ((function (map__29481,map__29481__$1,paths,visited){
return (function clojure_club$x106_number_maze$mbastian$expand_$_iter__29483(s__29484){
return (new cljs.core.LazySeq(null,((function (map__29481,map__29481__$1,paths,visited){
return (function (){
var s__29484__$1 = s__29484;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__29484__$1);
if(temp__4657__auto__){
var xs__5205__auto__ = temp__4657__auto__;
var path = cljs.core.first.call(null,xs__5205__auto__);
var iterys__19204__auto__ = ((function (s__29484__$1,path,xs__5205__auto__,temp__4657__auto__,map__29481,map__29481__$1,paths,visited){
return (function clojure_club$x106_number_maze$mbastian$expand_$_iter__29483_$_iter__29485(s__29486){
return (new cljs.core.LazySeq(null,((function (s__29484__$1,path,xs__5205__auto__,temp__4657__auto__,map__29481,map__29481__$1,paths,visited){
return (function (){
var s__29486__$1 = s__29486;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__29486__$1);
if(temp__4657__auto____$1){
var s__29486__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__29486__$2)){
var c__19206__auto__ = cljs.core.chunk_first.call(null,s__29486__$2);
var size__19207__auto__ = cljs.core.count.call(null,c__19206__auto__);
var b__29488 = cljs.core.chunk_buffer.call(null,size__19207__auto__);
if((function (){var i__29487 = (0);
while(true){
if((i__29487 < size__19207__auto__)){
var n = cljs.core._nth.call(null,c__19206__auto__,i__29487);
cljs.core.chunk_append.call(null,b__29488,cljs.core.into.call(null,path,n));

var G__29489 = (i__29487 + (1));
i__29487 = G__29489;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29488),clojure_club$x106_number_maze$mbastian$expand_$_iter__29483_$_iter__29485.call(null,cljs.core.chunk_rest.call(null,s__29486__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29488),null);
}
} else {
var n = cljs.core.first.call(null,s__29486__$2);
return cljs.core.cons.call(null,cljs.core.into.call(null,path,n),clojure_club$x106_number_maze$mbastian$expand_$_iter__29483_$_iter__29485.call(null,cljs.core.rest.call(null,s__29486__$2)));
}
} else {
return null;
}
break;
}
});})(s__29484__$1,path,xs__5205__auto__,temp__4657__auto__,map__29481,map__29481__$1,paths,visited))
,null,null));
});})(s__29484__$1,path,xs__5205__auto__,temp__4657__auto__,map__29481,map__29481__$1,paths,visited))
;
var fs__19205__auto__ = cljs.core.seq.call(null,iterys__19204__auto__.call(null,cljs.core.remove.call(null,cljs.core.comp.call(null,visited,cljs.core.second),clojure_club.x106_number_maze.mbastian.nbrs.call(null,cljs.core.peek.call(null,path)))));
if(fs__19205__auto__){
return cljs.core.concat.call(null,fs__19205__auto__,clojure_club$x106_number_maze$mbastian$expand_$_iter__29483.call(null,cljs.core.rest.call(null,s__29484__$1)));
} else {
var G__29490 = cljs.core.rest.call(null,s__29484__$1);
s__29484__$1 = G__29490;
continue;
}
} else {
return null;
}
break;
}
});})(map__29481,map__29481__$1,paths,visited))
,null,null));
});})(map__29481,map__29481__$1,paths,visited))
;
return iter__19208__auto__.call(null,paths);
})();
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"paths","paths",-1807389588),p,new cljs.core.Keyword(null,"visited","visited",-1610853875),cljs.core.into.call(null,visited,cljs.core.map.call(null,cljs.core.peek,p))], null);
});
clojure_club.x106_number_maze.mbastian.expand_from = (function clojure_club$x106_number_maze$mbastian$expand_from(s){
return cljs.core.iterate.call(null,clojure_club.x106_number_maze.mbastian.expand,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"paths","paths",-1807389588),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [s], null)], null),new cljs.core.Keyword(null,"visited","visited",-1610853875),cljs.core.PersistentHashSet.fromArray([s], true)], null));
});
clojure_club.x106_number_maze.mbastian.stop_cond = (function clojure_club$x106_number_maze$mbastian$stop_cond(pred,p__29491){
var map__29494 = p__29491;
var map__29494__$1 = ((((!((map__29494 == null)))?((((map__29494.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29494.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29494):map__29494);
var paths = cljs.core.get.call(null,map__29494__$1,new cljs.core.Keyword(null,"paths","paths",-1807389588));
if(cljs.core.truth_(cljs.core.some.call(null,pred,paths))){
return paths;
} else {
return null;
}
});
clojure_club.x106_number_maze.mbastian.fast_number_paths_deconstructed = (function clojure_club$x106_number_maze$mbastian$fast_number_paths_deconstructed(s,g){
var pred = cljs.core.comp.call(null,cljs.core.PersistentHashSet.fromArray([g], true),cljs.core.peek);
return cljs.core.filter.call(null,pred,cljs.core.some.call(null,cljs.core.partial.call(null,clojure_club.x106_number_maze.mbastian.stop_cond,pred),clojure_club.x106_number_maze.mbastian.expand_from.call(null,s)));
});
clojure_club.x106_number_maze.mbastian.expand = (function clojure_club$x106_number_maze$mbastian$expand(p__29496){
var map__29502 = p__29496;
var map__29502__$1 = ((((!((map__29502 == null)))?((((map__29502.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29502.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29502):map__29502);
var m = map__29502__$1;
var v = cljs.core.get.call(null,map__29502__$1,new cljs.core.Keyword(null,"visited","visited",-1610853875));
var vec__29503 = cljs.core.get.call(null,map__29502__$1,new cljs.core.Keyword(null,"queue","queue",1455835879));
var vec__29504 = cljs.core.nth.call(null,vec__29503,(0),null);
var n = cljs.core.nth.call(null,vec__29504,(0),null);
var edge = vec__29504;
var nbrs = cljs.core.get.call(null,map__29502__$1,new cljs.core.Keyword(null,"neighbors","neighbors",1430436473));
var G__29506 = cljs.core.update.call(null,m,new cljs.core.Keyword(null,"queue","queue",1455835879),cljs.core.pop);
if(cljs.core.not.call(null,v.call(null,n))){
return cljs.core.update.call(null,cljs.core.update.call(null,G__29506,new cljs.core.Keyword(null,"visited","visited",-1610853875),cljs.core.conj,edge),new cljs.core.Keyword(null,"queue","queue",1455835879),cljs.core.into,cljs.core.map.call(null,((function (G__29506,map__29502,map__29502__$1,m,v,vec__29503,vec__29504,n,edge,nbrs){
return (function (x){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,n], null);
});})(G__29506,map__29502,map__29502__$1,m,v,vec__29503,vec__29504,n,edge,nbrs))
,nbrs.call(null,n)));
} else {
return G__29506;
}
});
clojure_club.x106_number_maze.mbastian.bfs_expander = (function clojure_club$x106_number_maze$mbastian$bfs_expander(p__29507){
var map__29510 = p__29507;
var map__29510__$1 = ((((!((map__29510 == null)))?((((map__29510.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29510.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29510):map__29510);
var start = cljs.core.get.call(null,map__29510__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var neighbors = cljs.core.get.call(null,map__29510__$1,new cljs.core.Keyword(null,"neighbors","neighbors",1430436473));
return cljs.core.iterate.call(null,clojure_club.x106_number_maze.mbastian.expand,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"visited","visited",-1610853875),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"queue","queue",1455835879),cljs.core.conj.call(null,clojure_club.x106_number_maze.mbastian.empty_queue,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start,new cljs.core.Keyword(null,"done","done",-889844188)], null)),new cljs.core.Keyword(null,"neighbors","neighbors",1430436473),neighbors], null));
});
clojure_club.x106_number_maze.mbastian.rsolve_path = (function clojure_club$x106_number_maze$mbastian$rsolve_path(goal,p__29512){
var map__29515 = p__29512;
var map__29515__$1 = ((((!((map__29515 == null)))?((((map__29515.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29515.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29515):map__29515);
var visited = cljs.core.get.call(null,map__29515__$1,new cljs.core.Keyword(null,"visited","visited",-1610853875));
if(cljs.core.truth_(visited.call(null,goal))){
return cljs.core.reverse.call(null,cljs.core.take_while.call(null,cljs.core.complement.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"done","done",-889844188),null], null), null)),cljs.core.iterate.call(null,visited,goal)));
} else {
return null;
}
});
clojure_club.x106_number_maze.mbastian.bfs_solve = (function clojure_club$x106_number_maze$mbastian$bfs_solve(var_args){
var args__19506__auto__ = [];
var len__19499__auto___29524 = arguments.length;
var i__19500__auto___29525 = (0);
while(true){
if((i__19500__auto___29525 < len__19499__auto___29524)){
args__19506__auto__.push((arguments[i__19500__auto___29525]));

var G__29526 = (i__19500__auto___29525 + (1));
i__19500__auto___29525 = G__29526;
continue;
} else {
}
break;
}

var argseq__19507__auto__ = ((((0) < args__19506__auto__.length))?(new cljs.core.IndexedSeq(args__19506__auto__.slice((0)),(0),null)):null);
return clojure_club.x106_number_maze.mbastian.bfs_solve.cljs$core$IFn$_invoke$arity$variadic(argseq__19507__auto__);
});

clojure_club.x106_number_maze.mbastian.bfs_solve.cljs$core$IFn$_invoke$arity$variadic = (function (p__29518){
var map__29519 = p__29518;
var map__29519__$1 = ((((!((map__29519 == null)))?((((map__29519.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29519.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29519):map__29519);
var ic = map__29519__$1;
var goal = cljs.core.get.call(null,map__29519__$1,new cljs.core.Keyword(null,"goal","goal",-2073396501));
return cljs.core.some.call(null,((function (map__29519,map__29519__$1,ic,goal){
return (function (p__29521){
var map__29522 = p__29521;
var map__29522__$1 = ((((!((map__29522 == null)))?((((map__29522.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29522.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29522):map__29522);
var m = map__29522__$1;
var queue = cljs.core.get.call(null,map__29522__$1,new cljs.core.Keyword(null,"queue","queue",1455835879));
var or__18428__auto__ = clojure_club.x106_number_maze.mbastian.rsolve_path.call(null,goal,m);
if(cljs.core.truth_(or__18428__auto__)){
return or__18428__auto__;
} else {
if(cljs.core.empty_QMARK_.call(null,queue)){
return new cljs.core.Keyword(null,"no-solution","no-solution",945066633);
} else {
return null;
}
}
});})(map__29519,map__29519__$1,ic,goal))
,clojure_club.x106_number_maze.mbastian.bfs_expander.call(null,ic));
});

clojure_club.x106_number_maze.mbastian.bfs_solve.cljs$lang$maxFixedArity = (0);

clojure_club.x106_number_maze.mbastian.bfs_solve.cljs$lang$applyTo = (function (seq29517){
return clojure_club.x106_number_maze.mbastian.bfs_solve.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29517));
});
clojure_club.x106_number_maze.mbastian.bfs_solve.call(null,new cljs.core.Keyword(null,"start","start",-355208981),(7),new cljs.core.Keyword(null,"goal","goal",-2073396501),(43),new cljs.core.Keyword(null,"neighbors","neighbors",1430436473),(function clojure_club$x106_number_maze$mbastian$nbrs(x){
var G__29528 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((2) + x),((2) * x)], null);
if(cljs.core.even_QMARK_.call(null,x)){
return cljs.core.conj.call(null,G__29528,(x / (2)));
} else {
return G__29528;
}
}));
clojure_club.x106_number_maze.mbastian.bfs_solve.call(null,new cljs.core.Keyword(null,"start","start",-355208981),(1),new cljs.core.Keyword(null,"goal","goal",-2073396501),(7),new cljs.core.Keyword(null,"neighbors","neighbors",1430436473),new cljs.core.PersistentArrayMap(null, 3, [(1),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2)], null),(2),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(5)], null),(3),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4)], null)], null));
clojure_club.x106_number_maze.mbastian.dungeon = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, ["XXXXXXXX XXXXXXXX","X     XX XX    TX","X XXX       XXXXX","X XXXX XX XXXXX X","X  XXX XXXX     X","XX  XXXX    XXX X","XXX      XXXXXX X","XXS   XXXXXXXXX X"], null);
clojure_club.x106_number_maze.mbastian.find_cell = (function clojure_club$x106_number_maze$mbastian$find_cell(d,sym){
return cljs.core.first.call(null,(function (){var iter__19208__auto__ = (function clojure_club$x106_number_maze$mbastian$find_cell_$_iter__29535(s__29536){
return (new cljs.core.LazySeq(null,(function (){
var s__29536__$1 = s__29536;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__29536__$1);
if(temp__4657__auto__){
var xs__5205__auto__ = temp__4657__auto__;
var i = cljs.core.first.call(null,xs__5205__auto__);
var iterys__19204__auto__ = ((function (s__29536__$1,i,xs__5205__auto__,temp__4657__auto__){
return (function clojure_club$x106_number_maze$mbastian$find_cell_$_iter__29535_$_iter__29537(s__29538){
return (new cljs.core.LazySeq(null,((function (s__29536__$1,i,xs__5205__auto__,temp__4657__auto__){
return (function (){
var s__29538__$1 = s__29538;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__29538__$1);
if(temp__4657__auto____$1){
var s__29538__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__29538__$2)){
var c__19206__auto__ = cljs.core.chunk_first.call(null,s__29538__$2);
var size__19207__auto__ = cljs.core.count.call(null,c__19206__auto__);
var b__29540 = cljs.core.chunk_buffer.call(null,size__19207__auto__);
if((function (){var i__29539 = (0);
while(true){
if((i__29539 < size__19207__auto__)){
var j = cljs.core._nth.call(null,c__19206__auto__,i__29539);
if(cljs.core._EQ_.call(null,sym,cljs.core.get_in.call(null,d,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null)))){
cljs.core.chunk_append.call(null,b__29540,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null));

var G__29541 = (i__29539 + (1));
i__29539 = G__29541;
continue;
} else {
var G__29542 = (i__29539 + (1));
i__29539 = G__29542;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29540),clojure_club$x106_number_maze$mbastian$find_cell_$_iter__29535_$_iter__29537.call(null,cljs.core.chunk_rest.call(null,s__29538__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29540),null);
}
} else {
var j = cljs.core.first.call(null,s__29538__$2);
if(cljs.core._EQ_.call(null,sym,cljs.core.get_in.call(null,d,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null)))){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null),clojure_club$x106_number_maze$mbastian$find_cell_$_iter__29535_$_iter__29537.call(null,cljs.core.rest.call(null,s__29538__$2)));
} else {
var G__29543 = cljs.core.rest.call(null,s__29538__$2);
s__29538__$1 = G__29543;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__29536__$1,i,xs__5205__auto__,temp__4657__auto__))
,null,null));
});})(s__29536__$1,i,xs__5205__auto__,temp__4657__auto__))
;
var fs__19205__auto__ = cljs.core.seq.call(null,iterys__19204__auto__.call(null,cljs.core.range.call(null,cljs.core.count.call(null,d.call(null,i)))));
if(fs__19205__auto__){
return cljs.core.concat.call(null,fs__19205__auto__,clojure_club$x106_number_maze$mbastian$find_cell_$_iter__29535.call(null,cljs.core.rest.call(null,s__29536__$1)));
} else {
var G__29544 = cljs.core.rest.call(null,s__29536__$1);
s__29536__$1 = G__29544;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__19208__auto__.call(null,cljs.core.range.call(null,cljs.core.count.call(null,d)));
})());
});
clojure_club.x106_number_maze.mbastian.square_neighbors = (function clojure_club$x106_number_maze$mbastian$square_neighbors(p__29545){
var vec__29547 = p__29545;
var i = cljs.core.nth.call(null,vec__29547,(0),null);
var j = cljs.core.nth.call(null,vec__29547,(1),null);
return cljs.core.map.call(null,cljs.core.vector,cljs.core.juxt.call(null,cljs.core.inc,cljs.core.identity,cljs.core.dec,cljs.core.identity).call(null,i),cljs.core.juxt.call(null,cljs.core.identity,cljs.core.inc,cljs.core.identity,cljs.core.dec).call(null,j));
});
clojure_club.x106_number_maze.mbastian.dungeon_neigbors = (function clojure_club$x106_number_maze$mbastian$dungeon_neigbors(d,c){
return cljs.core.filter.call(null,(function (p1__29548_SHARP_){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [" ",null,"S",null,"T",null], null), null).call(null,cljs.core.get_in.call(null,d,p1__29548_SHARP_));
}),clojure_club.x106_number_maze.mbastian.square_neighbors.call(null,c));
});
clojure_club.x106_number_maze.mbastian.dungeon_path = clojure_club.x106_number_maze.mbastian.bfs_solve.call(null,new cljs.core.Keyword(null,"start","start",-355208981),clojure_club.x106_number_maze.mbastian.find_cell.call(null,clojure_club.x106_number_maze.mbastian.dungeon,"S"),new cljs.core.Keyword(null,"goal","goal",-2073396501),clojure_club.x106_number_maze.mbastian.find_cell.call(null,clojure_club.x106_number_maze.mbastian.dungeon,"T"),new cljs.core.Keyword(null,"neighbors","neighbors",1430436473),cljs.core.partial.call(null,clojure_club.x106_number_maze.mbastian.dungeon_neigbors,clojure_club.x106_number_maze.mbastian.dungeon));
if(cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"no-solution","no-solution",945066633),clojure_club.x106_number_maze.mbastian.dungeon_path)){
cljs.core.map.call(null,clojure.string.join,cljs.core.reduce.call(null,(function (p1__29549_SHARP_,p2__29550_SHARP_){
return cljs.core.assoc_in.call(null,p1__29549_SHARP_,p2__29550_SHARP_,".");
}),cljs.core.mapv.call(null,cljs.core.vec,clojure_club.x106_number_maze.mbastian.dungeon),cljs.core.rest.call(null,cljs.core.butlast.call(null,clojure_club.x106_number_maze.mbastian.dungeon_path))));
} else {
}

//# sourceMappingURL=mbastian.js.map?rel=1490073073762