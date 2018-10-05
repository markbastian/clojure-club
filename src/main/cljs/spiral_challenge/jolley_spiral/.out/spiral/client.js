// Compiled by ClojureScript 1.10.238 {}
goog.provide('spiral.client');
goog.require('cljs.core');
goog.require('reagent.core');
spiral.client.get_width = (function spiral$client$get_width(n){
return Math.ceil(Math.sqrt(n));
});
spiral.client.get_height = (function spiral$client$get_height(n){
return Math.round(Math.sqrt(n));
});
spiral.client.create_n_vectors = (function spiral$client$create_n_vectors(n){
return cljs.core.vec.call(null,cljs.core.repeat.call(null,n,cljs.core.PersistentVector.EMPTY));
});
spiral.client.prepend = (function spiral$client$prepend(x,v){
return cljs.core.into.call(null,((cljs.core.vector_QMARK_.call(null,x))?x:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null)),v);
});
spiral.client.append = (function spiral$client$append(x,v){
return cljs.core.into.call(null,v,((cljs.core.vector_QMARK_.call(null,x))?x:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null)));
});
spiral.client.transition_spiral = (function spiral$client$transition_spiral(isIncreasing,val,row,spiral__$1){
if(cljs.core.truth_(!(cljs.core.nil_QMARK_).call(null,val))){
var update_fn = (cljs.core.truth_(isIncreasing)?spiral.client.append:spiral.client.prepend);
var oldRow = cljs.core.get.call(null,spiral__$1,row);
var newRow = update_fn.call(null,val,oldRow);
return cljs.core.assoc.call(null,spiral__$1,row,newRow);
} else {
return spiral__$1;
}
});
spiral.client.transition = (function spiral$client$transition(isIncreasing,row,values,spiral__$1){
while(true){
if(cljs.core.empty_QMARK_.call(null,values)){
return spiral__$1;
} else {
var newRow = (cljs.core.truth_(isIncreasing)?cljs.core._PLUS_:cljs.core._).call(null,row,(1));
var val = cljs.core.first.call(null,values);
var newValues = cljs.core.rest.call(null,values);
var newSpiral = spiral.client.transition_spiral.call(null,isIncreasing,val,row,spiral__$1);
var G__1255 = isIncreasing;
var G__1256 = newRow;
var G__1257 = newValues;
var G__1258 = newSpiral;
isIncreasing = G__1255;
row = G__1256;
values = G__1257;
spiral__$1 = G__1258;
continue;
}
break;
}
});
spiral.client.write_spiral_row = (function spiral$client$write_spiral_row(isIncreasing,rowNum,val,spiral__$1){
if(cljs.core.truth_(!(cljs.core.nil_QMARK_).call(null,val))){
var update_fn = (cljs.core.truth_(isIncreasing)?spiral.client.append:spiral.client.prepend);
var oldRow = cljs.core.get.call(null,spiral__$1,rowNum);
var newRow = update_fn.call(null,val,oldRow);
var newSpiral = cljs.core.assoc.call(null,spiral__$1,rowNum,newRow);
return newSpiral;
} else {
return spiral__$1;
}
});
spiral.client.write_spiral = (function spiral$client$write_spiral(isIncreasing,rowNum,values,spiral__$1){
while(true){
if(cljs.core.empty_QMARK_.call(null,values)){
return spiral__$1;
} else {
var val = cljs.core.first.call(null,values);
var newValues = cljs.core.rest.call(null,values);
var newSpiral = spiral.client.write_spiral_row.call(null,isIncreasing,rowNum,val,spiral__$1);
var G__1259 = isIncreasing;
var G__1260 = rowNum;
var G__1261 = newValues;
var G__1262 = newSpiral;
isIncreasing = G__1259;
rowNum = G__1260;
values = G__1261;
spiral__$1 = G__1262;
continue;
}
break;
}
});
spiral.client.color = reagent.core.atom.call(null,"#008000");
spiral.client.hexify_number = (function spiral$client$hexify_number(n){
return n.toString((16));
});
spiral.client.pad_0 = (function spiral$client$pad_0(s){
if(cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,s))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((0)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join('');
} else {
return s;
}
});
spiral.client.update_color = (function spiral$client$update_color(){
var vec__1263 = cljs.core.deref.call(null,spiral.client.color);
var _ = cljs.core.nth.call(null,vec__1263,(0),null);
var a = cljs.core.nth.call(null,vec__1263,(1),null);
var b = cljs.core.nth.call(null,vec__1263,(2),null);
var c = cljs.core.nth.call(null,vec__1263,(3),null);
var d = cljs.core.nth.call(null,vec__1263,(4),null);
var e = cljs.core.nth.call(null,vec__1263,(5),null);
var f = cljs.core.nth.call(null,vec__1263,(6),null);
var red = parseInt([cljs.core.str.cljs$core$IFn$_invoke$arity$1(a),cljs.core.str.cljs$core$IFn$_invoke$arity$1(b)].join(''),(16));
var green = parseInt([cljs.core.str.cljs$core$IFn$_invoke$arity$1(a),cljs.core.str.cljs$core$IFn$_invoke$arity$1(b)].join(''),(16));
var blue = parseInt([cljs.core.str.cljs$core$IFn$_invoke$arity$1(a),cljs.core.str.cljs$core$IFn$_invoke$arity$1(b)].join(''),(16));
var newRed = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(spiral.client.hexify_number.call(null,(function (){var x__4006__auto__ = (0);
var y__4007__auto__ = (function (){var x__4009__auto__ = (200);
var y__4010__auto__ = (red + (5));
return ((x__4009__auto__ < y__4010__auto__) ? x__4009__auto__ : y__4010__auto__);
})();
return ((x__4006__auto__ > y__4007__auto__) ? x__4006__auto__ : y__4007__auto__);
})()))].join('');
var newGreen = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(spiral.client.hexify_number.call(null,(function (){var x__4006__auto__ = (0);
var y__4007__auto__ = (function (){var x__4009__auto__ = (255);
var y__4010__auto__ = ((40) + green);
return ((x__4009__auto__ < y__4010__auto__) ? x__4009__auto__ : y__4010__auto__);
})();
return ((x__4006__auto__ > y__4007__auto__) ? x__4006__auto__ : y__4007__auto__);
})()))].join('');
var newBlue = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(spiral.client.hexify_number.call(null,(function (){var x__4006__auto__ = (0);
var y__4007__auto__ = (function (){var x__4009__auto__ = (200);
var y__4010__auto__ = (blue + (5));
return ((x__4009__auto__ < y__4010__auto__) ? x__4009__auto__ : y__4010__auto__);
})();
return ((x__4006__auto__ > y__4007__auto__) ? x__4006__auto__ : y__4007__auto__);
})()))].join('');
var newColor = ["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(spiral.client.pad_0.call(null,newRed)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(spiral.client.pad_0.call(null,newGreen)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(spiral.client.pad_0.call(null,newBlue))].join('');
cljs.core.reset_BANG_.call(null,spiral.client.color,newColor);

cljs.core.print.call(null,"new color is: ",newColor);

return newColor;
});
/**
 * the workhorse
 */
spiral.client.build_spiral = (function spiral$client$build_spiral(my_seq,n,isTransition,isIncreasing,startRow,numWrite,numTransition,i,spiral__$1){
while(true){
if((i > n)){
return cljs.core.remove.call(null,cljs.core.empty_QMARK_,cljs.core.reverse.call(null,spiral__$1));
} else {
var values = cljs.core.map.call(null,((function (my_seq,n,isTransition,isIncreasing,startRow,numWrite,numTransition,i,spiral__$1){
return (function (p1__1266_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"val","val",128701612),new cljs.core.Keyword(null,"color","color",1011675173)],[p1__1266_SHARP_,spiral.client.update_color.call(null)]);
});})(my_seq,n,isTransition,isIncreasing,startRow,numWrite,numTransition,i,spiral__$1))
,cljs.core.take.call(null,(cljs.core.truth_(isTransition)?numTransition:numWrite),cljs.core.drop.call(null,i,my_seq)));
var newIsIncreasing = (cljs.core.truth_(isTransition)?cljs.core.not.call(null,isIncreasing):isIncreasing);
var newStartRow = (cljs.core.truth_(isIncreasing)?cljs.core._PLUS_:cljs.core._).call(null,startRow,(cljs.core.truth_(isTransition)?numTransition:(1)));
var newI = (i + cljs.core.count.call(null,values));
var newSpiral = (cljs.core.truth_(isTransition)?spiral.client.transition:spiral.client.write_spiral).call(null,isIncreasing,startRow,values,spiral__$1);
var newNumTransition = (function (){var x__4009__auto__ = ((n + (1)) - i);
var y__4010__auto__ = (cljs.core.truth_(isTransition)?(numTransition + (1)):numTransition);
return ((x__4009__auto__ < y__4010__auto__) ? x__4009__auto__ : y__4010__auto__);
})();
var newNumWrite = (function (){var x__4009__auto__ = ((n + (1)) - i);
var y__4010__auto__ = (cljs.core.truth_(isTransition)?numWrite:(numWrite + (1)));
return ((x__4009__auto__ < y__4010__auto__) ? x__4009__auto__ : y__4010__auto__);
})();
var G__1267 = my_seq;
var G__1268 = n;
var G__1269 = cljs.core.not.call(null,isTransition);
var G__1270 = newIsIncreasing;
var G__1271 = newStartRow;
var G__1272 = newNumWrite;
var G__1273 = newNumTransition;
var G__1274 = newI;
var G__1275 = newSpiral;
my_seq = G__1267;
n = G__1268;
isTransition = G__1269;
isIncreasing = G__1270;
startRow = G__1271;
numWrite = G__1272;
numTransition = G__1273;
i = G__1274;
spiral__$1 = G__1275;
continue;
}
break;
}
});
/**
 * A function that generates a spiral with the provided sequence
 */
spiral.client.generate_spiral = (function spiral$client$generate_spiral(my_seq,n){
var height = spiral.client.get_height.call(null,n);
var spiral__$1 = spiral.client.create_n_vectors.call(null,height);
var startRow = Math.floor((height / (2)));
cljs.core.reset_BANG_.call(null,spiral.client.color,"#008000");

return spiral.client.build_spiral.call(null,my_seq,n,false,true,startRow,(2),(0),(1),spiral__$1);
});
spiral.client.odd_numbers = cljs.core.iterate.call(null,cljs.core.partial.call(null,cljs.core._PLUS_,(2)),(1));
spiral.client.top_right_corner = cljs.core.map.call(null,cljs.core.first,cljs.core.iterate.call(null,(function (p__1276){
var vec__1277 = p__1276;
var val = cljs.core.nth.call(null,vec__1277,(0),null);
var delta = cljs.core.nth.call(null,vec__1277,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(delta + val),(delta + (8))], null);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)));
spiral.client.bottom_left_corner = cljs.core.map.call(null,cljs.core.first,cljs.core.iterate.call(null,(function (p__1280){
var vec__1281 = p__1280;
var val = cljs.core.nth.call(null,vec__1281,(0),null);
var delta = cljs.core.nth.call(null,vec__1281,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(delta + val),(delta + (8))], null);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(6)], null)));
spiral.client.get_pad_transition_number = (function spiral$client$get_pad_transition_number(n){
var height = spiral.client.get_height.call(null,n);
return cljs.core.count.call(null,cljs.core.take_while.call(null,((function (height){
return (function (p1__1284_SHARP_){
return (height > p1__1284_SHARP_);
});})(height))
,spiral.client.odd_numbers));
});
spiral.client.get_pad_fn = (function spiral$client$get_pad_fn(n){
var pad_transition_number = spiral.client.get_pad_transition_number.call(null,n);
var bottom_left = cljs.core.nth.call(null,spiral.client.bottom_left_corner,pad_transition_number);
var top_right = cljs.core.nth.call(null,spiral.client.top_right_corner,(pad_transition_number + (1)));
if((((n >= bottom_left)) && ((n < top_right)))){
return spiral.client.append;
} else {
return spiral.client.prepend;
}
});
spiral.client.pad_spiral = (function spiral$client$pad_spiral(width,spiral__$1){
var update_fn = spiral.client.get_pad_fn.call(null,cljs.core.count.call(null,cljs.core.flatten.call(null,spiral__$1)));
return cljs.core.map.call(null,((function (update_fn){
return (function (row){
if((cljs.core.count.call(null,row) < width)){
return update_fn.call(null,cljs.core.take.call(null,(width - cljs.core.count.call(null,row)),cljs.core.repeat.call(null,null)),row);
} else {
return row;
}
});})(update_fn))
,spiral__$1);
});
spiral.client.print_spiral = (function spiral$client$print_spiral(spiral__$1){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.map.call(null,(function (row){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.map.call(null,(function (p1__1285_SHARP_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__1285_SHARP_)].join('')], null).call(null,row);
}))], null);
}))], null);
});
spiral.client.get_max_width = (function spiral$client$get_max_width(spiral__$1){
return cljs.core.reduce.call(null,(function (p1__1286_SHARP_,p2__1287_SHARP_){
var x__4006__auto__ = p1__1286_SHARP_;
var y__4007__auto__ = cljs.core.count.call(null,p2__1287_SHARP_);
return ((x__4006__auto__ > y__4007__auto__) ? x__4006__auto__ : y__4007__auto__);
}),(0),spiral__$1);
});
spiral.client.spiral_n = reagent.core.atom.call(null,(9));
spiral.client.atom_input = (function spiral$client$atom_input(value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"number",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,value),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__1288_SHARP_){
return cljs.core.reset_BANG_.call(null,value,p1__1288_SHARP_.target.value);
})], null)], null);
});
spiral.client.get_spiral = (function spiral$client$get_spiral(my_seq,n){
var spiral__$1 = spiral.client.generate_spiral.call(null,my_seq,n);
var max_width = spiral.client.get_max_width.call(null,spiral__$1);
var padded_spiral = spiral.client.pad_spiral.call(null,max_width,spiral__$1);
return padded_spiral;
});
spiral.client.content = (function spiral$client$content(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Number",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [spiral.client.atom_input,spiral.client.spiral_n], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Spiral: ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var iter__4292__auto__ = (function spiral$client$content_$_iter__1289(s__1290){
return (new cljs.core.LazySeq(null,(function (){
var s__1290__$1 = s__1290;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__1290__$1);
if(temp__5457__auto__){
var s__1290__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__1290__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__1290__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__1292 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__1291 = (0);
while(true){
if((i__1291 < size__4291__auto__)){
var row = cljs.core._nth.call(null,c__4290__auto__,i__1291);
cljs.core.chunk_append.call(null,b__1292,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"height","height",1025178622),"55px"], null)], null),(function (){var iter__4292__auto__ = ((function (i__1291,row,c__4290__auto__,size__4291__auto__,b__1292,s__1290__$2,temp__5457__auto__){
return (function spiral$client$content_$_iter__1289_$_iter__1293(s__1294){
return (new cljs.core.LazySeq(null,((function (i__1291,row,c__4290__auto__,size__4291__auto__,b__1292,s__1290__$2,temp__5457__auto__){
return (function (){
var s__1294__$1 = s__1294;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__1294__$1);
if(temp__5457__auto____$1){
var s__1294__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__1294__$2)){
var c__4290__auto____$1 = cljs.core.chunk_first.call(null,s__1294__$2);
var size__4291__auto____$1 = cljs.core.count.call(null,c__4290__auto____$1);
var b__1296 = cljs.core.chunk_buffer.call(null,size__4291__auto____$1);
if((function (){var i__1295 = (0);
while(true){
if((i__1295 < size__4291__auto____$1)){
var item = cljs.core._nth.call(null,c__4290__auto____$1,i__1295);
cljs.core.chunk_append.call(null,b__1296,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"margin","margin",-995903681),"2px",new cljs.core.Keyword(null,"width","width",-384071477),"50px",new cljs.core.Keyword(null,"height","height",1025178622),"50px",new cljs.core.Keyword(null,"background-color","background-color",570434026),new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(item),new cljs.core.Keyword(null,"float","float",-1732389368),"left",new cljs.core.Keyword(null,"color","color",1011675173),"white",new cljs.core.Keyword(null,"text-align","text-align",1786091845),"center",new cljs.core.Keyword(null,"line-height","line-height",1870784992),"50px"], null)], null),new cljs.core.Keyword(null,"val","val",128701612).cljs$core$IFn$_invoke$arity$1(item)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),item], null)));

var G__1301 = (i__1295 + (1));
i__1295 = G__1301;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__1296),spiral$client$content_$_iter__1289_$_iter__1293.call(null,cljs.core.chunk_rest.call(null,s__1294__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__1296),null);
}
} else {
var item = cljs.core.first.call(null,s__1294__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"margin","margin",-995903681),"2px",new cljs.core.Keyword(null,"width","width",-384071477),"50px",new cljs.core.Keyword(null,"height","height",1025178622),"50px",new cljs.core.Keyword(null,"background-color","background-color",570434026),new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(item),new cljs.core.Keyword(null,"float","float",-1732389368),"left",new cljs.core.Keyword(null,"color","color",1011675173),"white",new cljs.core.Keyword(null,"text-align","text-align",1786091845),"center",new cljs.core.Keyword(null,"line-height","line-height",1870784992),"50px"], null)], null),new cljs.core.Keyword(null,"val","val",128701612).cljs$core$IFn$_invoke$arity$1(item)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),item], null)),spiral$client$content_$_iter__1289_$_iter__1293.call(null,cljs.core.rest.call(null,s__1294__$2)));
}
} else {
return null;
}
break;
}
});})(i__1291,row,c__4290__auto__,size__4291__auto__,b__1292,s__1290__$2,temp__5457__auto__))
,null,null));
});})(i__1291,row,c__4290__auto__,size__4291__auto__,b__1292,s__1290__$2,temp__5457__auto__))
;
return iter__4292__auto__.call(null,row);
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),row], null)));

var G__1302 = (i__1291 + (1));
i__1291 = G__1302;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__1292),spiral$client$content_$_iter__1289.call(null,cljs.core.chunk_rest.call(null,s__1290__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__1292),null);
}
} else {
var row = cljs.core.first.call(null,s__1290__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"height","height",1025178622),"55px"], null)], null),(function (){var iter__4292__auto__ = ((function (row,s__1290__$2,temp__5457__auto__){
return (function spiral$client$content_$_iter__1289_$_iter__1297(s__1298){
return (new cljs.core.LazySeq(null,((function (row,s__1290__$2,temp__5457__auto__){
return (function (){
var s__1298__$1 = s__1298;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__1298__$1);
if(temp__5457__auto____$1){
var s__1298__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__1298__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__1298__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__1300 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__1299 = (0);
while(true){
if((i__1299 < size__4291__auto__)){
var item = cljs.core._nth.call(null,c__4290__auto__,i__1299);
cljs.core.chunk_append.call(null,b__1300,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"margin","margin",-995903681),"2px",new cljs.core.Keyword(null,"width","width",-384071477),"50px",new cljs.core.Keyword(null,"height","height",1025178622),"50px",new cljs.core.Keyword(null,"background-color","background-color",570434026),new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(item),new cljs.core.Keyword(null,"float","float",-1732389368),"left",new cljs.core.Keyword(null,"color","color",1011675173),"white",new cljs.core.Keyword(null,"text-align","text-align",1786091845),"center",new cljs.core.Keyword(null,"line-height","line-height",1870784992),"50px"], null)], null),new cljs.core.Keyword(null,"val","val",128701612).cljs$core$IFn$_invoke$arity$1(item)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),item], null)));

var G__1303 = (i__1299 + (1));
i__1299 = G__1303;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__1300),spiral$client$content_$_iter__1289_$_iter__1297.call(null,cljs.core.chunk_rest.call(null,s__1298__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__1300),null);
}
} else {
var item = cljs.core.first.call(null,s__1298__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"margin","margin",-995903681),"2px",new cljs.core.Keyword(null,"width","width",-384071477),"50px",new cljs.core.Keyword(null,"height","height",1025178622),"50px",new cljs.core.Keyword(null,"background-color","background-color",570434026),new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(item),new cljs.core.Keyword(null,"float","float",-1732389368),"left",new cljs.core.Keyword(null,"color","color",1011675173),"white",new cljs.core.Keyword(null,"text-align","text-align",1786091845),"center",new cljs.core.Keyword(null,"line-height","line-height",1870784992),"50px"], null)], null),new cljs.core.Keyword(null,"val","val",128701612).cljs$core$IFn$_invoke$arity$1(item)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),item], null)),spiral$client$content_$_iter__1289_$_iter__1297.call(null,cljs.core.rest.call(null,s__1298__$2)));
}
} else {
return null;
}
break;
}
});})(row,s__1290__$2,temp__5457__auto__))
,null,null));
});})(row,s__1290__$2,temp__5457__auto__))
;
return iter__4292__auto__.call(null,row);
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),row], null)),spiral$client$content_$_iter__1289.call(null,cljs.core.rest.call(null,s__1290__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4292__auto__.call(null,spiral.client.get_spiral.call(null,cljs.core.range.call(null),cljs.core.deref.call(null,spiral.client.spiral_n)));
})()], null)], null)], null);
});
reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [spiral.client.content], null),document.querySelector("#app"));

//# sourceMappingURL=client.js.map
