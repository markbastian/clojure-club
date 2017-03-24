// Compiled by ClojureScript 1.8.51 {}
goog.provide('clojure_club.x124_analyze_reversi.wmatson');
goog.require('cljs.core');
clojure_club.x124_analyze_reversi.wmatson.opponent = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"b","b",-1172211299,null),new cljs.core.Symbol(null,"b","b",-1172211299,null),new cljs.core.Symbol(null,"w","w",1994700528,null)], null);
clojure_club.x124_analyze_reversi.wmatson.directions = cljs.core.remove.call(null,cljs.core.PersistentHashSet.fromArray([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null)], true),(function (){var iter__19208__auto__ = (function clojure_club$x124_analyze_reversi$wmatson$iter__26145(s__26146){
return (new cljs.core.LazySeq(null,(function (){
var s__26146__$1 = s__26146;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__26146__$1);
if(temp__4657__auto__){
var xs__5205__auto__ = temp__4657__auto__;
var row = cljs.core.first.call(null,xs__5205__auto__);
var iterys__19204__auto__ = ((function (s__26146__$1,row,xs__5205__auto__,temp__4657__auto__){
return (function clojure_club$x124_analyze_reversi$wmatson$iter__26145_$_iter__26147(s__26148){
return (new cljs.core.LazySeq(null,((function (s__26146__$1,row,xs__5205__auto__,temp__4657__auto__){
return (function (){
var s__26148__$1 = s__26148;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__26148__$1);
if(temp__4657__auto____$1){
var s__26148__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__26148__$2)){
var c__19206__auto__ = cljs.core.chunk_first.call(null,s__26148__$2);
var size__19207__auto__ = cljs.core.count.call(null,c__19206__auto__);
var b__26150 = cljs.core.chunk_buffer.call(null,size__19207__auto__);
if((function (){var i__26149 = (0);
while(true){
if((i__26149 < size__19207__auto__)){
var col = cljs.core._nth.call(null,c__19206__auto__,i__26149);
cljs.core.chunk_append.call(null,b__26150,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,col], null));

var G__26151 = (i__26149 + (1));
i__26149 = G__26151;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26150),clojure_club$x124_analyze_reversi$wmatson$iter__26145_$_iter__26147.call(null,cljs.core.chunk_rest.call(null,s__26148__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26150),null);
}
} else {
var col = cljs.core.first.call(null,s__26148__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,col], null),clojure_club$x124_analyze_reversi$wmatson$iter__26145_$_iter__26147.call(null,cljs.core.rest.call(null,s__26148__$2)));
}
} else {
return null;
}
break;
}
});})(s__26146__$1,row,xs__5205__auto__,temp__4657__auto__))
,null,null));
});})(s__26146__$1,row,xs__5205__auto__,temp__4657__auto__))
;
var fs__19205__auto__ = cljs.core.seq.call(null,iterys__19204__auto__.call(null,cljs.core.map.call(null,cljs.core.dec,cljs.core.range.call(null,(3)))));
if(fs__19205__auto__){
return cljs.core.concat.call(null,fs__19205__auto__,clojure_club$x124_analyze_reversi$wmatson$iter__26145.call(null,cljs.core.rest.call(null,s__26146__$1)));
} else {
var G__26152 = cljs.core.rest.call(null,s__26146__$1);
s__26146__$1 = G__26152;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__19208__auto__.call(null,cljs.core.map.call(null,cljs.core.dec,cljs.core.range.call(null,(3))));
})());
clojure_club.x124_analyze_reversi.wmatson.line = (function clojure_club$x124_analyze_reversi$wmatson$line(board,row,col,p__26153){
var vec__26155 = p__26153;
var row_vec = cljs.core.nth.call(null,vec__26155,(0),null);
var col_vec = cljs.core.nth.call(null,vec__26155,(1),null);
var direction = vec__26155;
var cell = cljs.core.get_in.call(null,board,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,col], null));
if(cljs.core.some_QMARK_.call(null,cell)){
return (new cljs.core.LazySeq(null,((function (cell,vec__26155,row_vec,col_vec,direction){
return (function (){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,col], null),cell], null),clojure_club$x124_analyze_reversi$wmatson$line.call(null,board,(row + row_vec),(col + col_vec),direction));
});})(cell,vec__26155,row_vec,col_vec,direction))
,null,null));
} else {
return null;
}
});
clojure_club.x124_analyze_reversi.wmatson.flips = (function clojure_club$x124_analyze_reversi$wmatson$flips(line,color){
var split_pred = (function (p1__26156_SHARP_){
return cljs.core._EQ_.call(null,clojure_club.x124_analyze_reversi.wmatson.opponent.call(null,color),cljs.core.second.call(null,p1__26156_SHARP_));
});
var vec__26160 = cljs.core.split_with.call(null,split_pred,line);
var moves = cljs.core.nth.call(null,vec__26160,(0),null);
var vec__26161 = cljs.core.nth.call(null,vec__26160,(1),null);
var vec__26162 = cljs.core.nth.call(null,vec__26161,(0),null);
var _ = cljs.core.nth.call(null,vec__26162,(0),null);
var flipper = cljs.core.nth.call(null,vec__26162,(1),null);
if(cljs.core._EQ_.call(null,flipper,color)){
return cljs.core.map.call(null,cljs.core.first,moves);
} else {
return null;
}
});
clojure_club.x124_analyze_reversi.wmatson.cell_moves = (function clojure_club$x124_analyze_reversi$wmatson$cell_moves(board,row,col,color){
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"e","e",-1273166571,null),cljs.core.get_in.call(null,board,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,col], null)))){
var lines = cljs.core.map.call(null,(function (p1__26163_SHARP_){
return cljs.core.rest.call(null,clojure_club.x124_analyze_reversi.wmatson.line.call(null,board,row,col,p1__26163_SHARP_));
}),clojure_club.x124_analyze_reversi.wmatson.directions);
var moves = cljs.core.mapcat.call(null,((function (lines){
return (function (p1__26164_SHARP_){
return clojure_club.x124_analyze_reversi.wmatson.flips.call(null,p1__26164_SHARP_,color);
});})(lines))
,lines);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,col], null),cljs.core.set.call(null,cljs.core.filter.call(null,cljs.core.seq,moves))], null);
} else {
return null;
}
});
clojure_club.x124_analyze_reversi.wmatson.board_moves = (function clojure_club$x124_analyze_reversi$wmatson$board_moves(board,color){
var iter__19208__auto__ = (function clojure_club$x124_analyze_reversi$wmatson$board_moves_$_iter__26171(s__26172){
return (new cljs.core.LazySeq(null,(function (){
var s__26172__$1 = s__26172;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__26172__$1);
if(temp__4657__auto__){
var xs__5205__auto__ = temp__4657__auto__;
var row_index = cljs.core.first.call(null,xs__5205__auto__);
var iterys__19204__auto__ = ((function (s__26172__$1,row_index,xs__5205__auto__,temp__4657__auto__){
return (function clojure_club$x124_analyze_reversi$wmatson$board_moves_$_iter__26171_$_iter__26173(s__26174){
return (new cljs.core.LazySeq(null,((function (s__26172__$1,row_index,xs__5205__auto__,temp__4657__auto__){
return (function (){
var s__26174__$1 = s__26174;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__26174__$1);
if(temp__4657__auto____$1){
var s__26174__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__26174__$2)){
var c__19206__auto__ = cljs.core.chunk_first.call(null,s__26174__$2);
var size__19207__auto__ = cljs.core.count.call(null,c__19206__auto__);
var b__26176 = cljs.core.chunk_buffer.call(null,size__19207__auto__);
if((function (){var i__26175 = (0);
while(true){
if((i__26175 < size__19207__auto__)){
var col_index = cljs.core._nth.call(null,c__19206__auto__,i__26175);
cljs.core.chunk_append.call(null,b__26176,clojure_club.x124_analyze_reversi.wmatson.cell_moves.call(null,board,row_index,col_index,color));

var G__26177 = (i__26175 + (1));
i__26175 = G__26177;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26176),clojure_club$x124_analyze_reversi$wmatson$board_moves_$_iter__26171_$_iter__26173.call(null,cljs.core.chunk_rest.call(null,s__26174__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26176),null);
}
} else {
var col_index = cljs.core.first.call(null,s__26174__$2);
return cljs.core.cons.call(null,clojure_club.x124_analyze_reversi.wmatson.cell_moves.call(null,board,row_index,col_index,color),clojure_club$x124_analyze_reversi$wmatson$board_moves_$_iter__26171_$_iter__26173.call(null,cljs.core.rest.call(null,s__26174__$2)));
}
} else {
return null;
}
break;
}
});})(s__26172__$1,row_index,xs__5205__auto__,temp__4657__auto__))
,null,null));
});})(s__26172__$1,row_index,xs__5205__auto__,temp__4657__auto__))
;
var fs__19205__auto__ = cljs.core.seq.call(null,iterys__19204__auto__.call(null,cljs.core.range.call(null,cljs.core.count.call(null,cljs.core.get.call(null,board,row_index)))));
if(fs__19205__auto__){
return cljs.core.concat.call(null,fs__19205__auto__,clojure_club$x124_analyze_reversi$wmatson$board_moves_$_iter__26171.call(null,cljs.core.rest.call(null,s__26172__$1)));
} else {
var G__26178 = cljs.core.rest.call(null,s__26172__$1);
s__26172__$1 = G__26178;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__19208__auto__.call(null,cljs.core.range.call(null,cljs.core.count.call(null,board)));
});
clojure_club.x124_analyze_reversi.wmatson.reversi_moves = (function clojure_club$x124_analyze_reversi$wmatson$reversi_moves(board,color){
return cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.apply.call(null,cljs.core.concat,cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.seq,cljs.core.second),clojure_club.x124_analyze_reversi.wmatson.board_moves.call(null,board,color))));
});

//# sourceMappingURL=wmatson.js.map?rel=1490072960129