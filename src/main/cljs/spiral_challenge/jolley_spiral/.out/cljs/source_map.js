// Compiled by ClojureScript 1.10.238 {}
goog.provide('cljs.source_map');
goog.require('cljs.core');
goog.require('goog.object');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.source_map.base64_vlq');
/**
 * Take a seq of source file names and return a map from
 * file number to integer index. For reverse source maps.
 */
cljs.source_map.indexed_sources = (function cljs$source_map$indexed_sources(sources){
return cljs.core.reduce.call(null,(function (m,p__2726){
var vec__2727 = p__2726;
var i = cljs.core.nth.call(null,vec__2727,(0),null);
var v = cljs.core.nth.call(null,vec__2727,(1),null);
return cljs.core.assoc.call(null,m,v,i);
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.map_indexed.call(null,(function (a,b){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null);
}),sources));
});
/**
 * Take a seq of source file names and return a comparator
 * that can be used to construct a sorted map. For reverse
 * source maps.
 */
cljs.source_map.source_compare = (function cljs$source_map$source_compare(sources){
var sources__$1 = cljs.source_map.indexed_sources.call(null,sources);
return ((function (sources__$1){
return (function (a,b){
return cljs.core.compare.call(null,sources__$1.call(null,a),sources__$1.call(null,b));
});
;})(sources__$1))
});
/**
 * Take a source map segment represented as a vector
 * and return a map.
 */
cljs.source_map.seg__GT_map = (function cljs$source_map$seg__GT_map(seg,source_map){
var vec__2730 = seg;
var gcol = cljs.core.nth.call(null,vec__2730,(0),null);
var source = cljs.core.nth.call(null,vec__2730,(1),null);
var line = cljs.core.nth.call(null,vec__2730,(2),null);
var col = cljs.core.nth.call(null,vec__2730,(3),null);
var name = cljs.core.nth.call(null,vec__2730,(4),null);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"gcol","gcol",309250807),gcol,new cljs.core.Keyword(null,"source","source",-433931539),(goog.object.get(source_map,"sources")[source]),new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"col","col",-1959363084),col,new cljs.core.Keyword(null,"name","name",1843675177),(function (){var temp__5457__auto__ = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,seg));
if(cljs.core.truth_(temp__5457__auto__)){
var name__$1 = temp__5457__auto__;
return (goog.object.get(source_map,"names")[name__$1]);
} else {
return null;
}
})()], null);
});
/**
 * Combine a source map segment vector and a relative
 * source map segment vector and combine them to get
 * an absolute segment posititon information as a vector.
 */
cljs.source_map.seg_combine = (function cljs$source_map$seg_combine(seg,relseg){
var vec__2733 = seg;
var gcol = cljs.core.nth.call(null,vec__2733,(0),null);
var source = cljs.core.nth.call(null,vec__2733,(1),null);
var line = cljs.core.nth.call(null,vec__2733,(2),null);
var col = cljs.core.nth.call(null,vec__2733,(3),null);
var name = cljs.core.nth.call(null,vec__2733,(4),null);
var vec__2736 = relseg;
var rgcol = cljs.core.nth.call(null,vec__2736,(0),null);
var rsource = cljs.core.nth.call(null,vec__2736,(1),null);
var rline = cljs.core.nth.call(null,vec__2736,(2),null);
var rcol = cljs.core.nth.call(null,vec__2736,(3),null);
var rname = cljs.core.nth.call(null,vec__2736,(4),null);
var nseg = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(gcol + rgcol),((function (){var or__3922__auto__ = source;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return (0);
}
})() + rsource),((function (){var or__3922__auto__ = line;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return (0);
}
})() + rline),((function (){var or__3922__auto__ = col;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return (0);
}
})() + rcol),((function (){var or__3922__auto__ = name;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return (0);
}
})() + rname)], null);
if(cljs.core.truth_(name)){
return cljs.core.with_meta.call(null,nseg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),(name + rname)], null));
} else {
return nseg;
}
});
/**
 * Helper for decode-reverse. Take a reverse source map and
 *   update it with a segment map.
 */
cljs.source_map.update_reverse_result = (function cljs$source_map$update_reverse_result(result,segmap,gline){
var map__2739 = segmap;
var map__2739__$1 = ((((!((map__2739 == null)))?(((((map__2739.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2739.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__2739):map__2739);
var gcol = cljs.core.get.call(null,map__2739__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.call(null,map__2739__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.call(null,map__2739__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.call(null,map__2739__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.call(null,map__2739__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gline","gline",-1086242431),gline,new cljs.core.Keyword(null,"gcol","gcol",309250807),gcol], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.call(null,result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [source], null),cljs.core.fnil.call(null,((function (map__2739,map__2739__$1,gcol,source,line,col,name,d,d__$1){
return (function (m){
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [line], null),cljs.core.fnil.call(null,((function (map__2739,map__2739__$1,gcol,source,line,col,name,d,d__$1){
return (function (m__$1){
return cljs.core.update_in.call(null,m__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [col], null),cljs.core.fnil.call(null,((function (map__2739,map__2739__$1,gcol,source,line,col,name,d,d__$1){
return (function (v){
return cljs.core.conj.call(null,v,d__$1);
});})(map__2739,map__2739__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.PersistentVector.EMPTY));
});})(map__2739,map__2739__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});})(map__2739,map__2739__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});
/**
 * Convert a v3 source map JSON object into a reverse source map
 *   mapping original ClojureScript source locations to the generated
 *   JavaScript.
 */
cljs.source_map.decode_reverse = (function cljs$source_map$decode_reverse(var_args){
var G__2742 = arguments.length;
switch (G__2742) {
case 1:
return cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$1 = (function (source_map){
return cljs.source_map.decode_reverse.call(null,goog.object.get(source_map,"mappings"),source_map);
});

cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$2 = (function (mappings,source_map){
var sources = goog.object.get(source_map,"sources");
var relseg_init = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0)], null);
var lines = cljs.core.seq.call(null,clojure.string.split.call(null,mappings,/;/));
var gline = (0);
var lines__$1 = lines;
var relseg = relseg_init;
var result = cljs.core.sorted_map_by.call(null,cljs.source_map.source_compare.call(null,sources));
while(true){
if(lines__$1){
var line = cljs.core.first.call(null,lines__$1);
var vec__2743 = ((clojure.string.blank_QMARK_.call(null,line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq.call(null,clojure.string.split.call(null,line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first.call(null,segs__$1);
var nrelseg = cljs.source_map.seg_combine.call(null,cljs.source_map.base64_vlq.decode.call(null,seg),relseg__$1);
var G__2747 = cljs.core.next.call(null,segs__$1);
var G__2748 = nrelseg;
var G__2749 = cljs.source_map.update_reverse_result.call(null,result__$1,cljs.source_map.seg__GT_map.call(null,nrelseg,source_map),gline);
segs__$1 = G__2747;
relseg__$1 = G__2748;
result__$1 = G__2749;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.call(null,vec__2743,(0),null);
var relseg__$1 = cljs.core.nth.call(null,vec__2743,(1),null);
var G__2750 = (gline + (1));
var G__2751 = cljs.core.next.call(null,lines__$1);
var G__2752 = cljs.core.assoc.call(null,relseg__$1,(0),(0));
var G__2753 = result__$1;
gline = G__2750;
lines__$1 = G__2751;
relseg = G__2752;
result = G__2753;
continue;
} else {
return result;
}
break;
}
});

cljs.source_map.decode_reverse.cljs$lang$maxFixedArity = 2;

/**
 * Helper for decode. Take a source map and update it based on a
 *   segment map.
 */
cljs.source_map.update_result = (function cljs$source_map$update_result(result,segmap,gline){
var map__2755 = segmap;
var map__2755__$1 = ((((!((map__2755 == null)))?(((((map__2755.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2755.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__2755):map__2755);
var gcol = cljs.core.get.call(null,map__2755__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.call(null,map__2755__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.call(null,map__2755__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.call(null,map__2755__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.call(null,map__2755__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"col","col",-1959363084),col,new cljs.core.Keyword(null,"source","source",-433931539),source], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.call(null,result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline], null),cljs.core.fnil.call(null,((function (map__2755,map__2755__$1,gcol,source,line,col,name,d,d__$1){
return (function (m){
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol], null),cljs.core.fnil.call(null,((function (map__2755,map__2755__$1,gcol,source,line,col,name,d,d__$1){
return (function (p1__2754_SHARP_){
return cljs.core.conj.call(null,p1__2754_SHARP_,d__$1);
});})(map__2755,map__2755__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.PersistentVector.EMPTY));
});})(map__2755,map__2755__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});
/**
 * Convert a v3 source map JSON object into a source map mapping
 *   generated JavaScript source locations to the original
 *   ClojureScript.
 */
cljs.source_map.decode = (function cljs$source_map$decode(var_args){
var G__2758 = arguments.length;
switch (G__2758) {
case 1:
return cljs.source_map.decode.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.source_map.decode.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.source_map.decode.cljs$core$IFn$_invoke$arity$1 = (function (source_map){
return cljs.source_map.decode.call(null,goog.object.get(source_map,"mappings"),source_map);
});

cljs.source_map.decode.cljs$core$IFn$_invoke$arity$2 = (function (mappings,source_map){
var sources = goog.object.get(source_map,"sources");
var relseg_init = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0)], null);
var lines = cljs.core.seq.call(null,clojure.string.split.call(null,mappings,/;/));
var gline = (0);
var lines__$1 = lines;
var relseg = relseg_init;
var result = cljs.core.PersistentArrayMap.EMPTY;
while(true){
if(lines__$1){
var line = cljs.core.first.call(null,lines__$1);
var vec__2759 = ((clojure.string.blank_QMARK_.call(null,line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq.call(null,clojure.string.split.call(null,line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first.call(null,segs__$1);
var nrelseg = cljs.source_map.seg_combine.call(null,cljs.source_map.base64_vlq.decode.call(null,seg),relseg__$1);
var G__2763 = cljs.core.next.call(null,segs__$1);
var G__2764 = nrelseg;
var G__2765 = cljs.source_map.update_result.call(null,result__$1,cljs.source_map.seg__GT_map.call(null,nrelseg,source_map),gline);
segs__$1 = G__2763;
relseg__$1 = G__2764;
result__$1 = G__2765;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.call(null,vec__2759,(0),null);
var relseg__$1 = cljs.core.nth.call(null,vec__2759,(1),null);
var G__2766 = (gline + (1));
var G__2767 = cljs.core.next.call(null,lines__$1);
var G__2768 = cljs.core.assoc.call(null,relseg__$1,(0),(0));
var G__2769 = result__$1;
gline = G__2766;
lines__$1 = G__2767;
relseg = G__2768;
result = G__2769;
continue;
} else {
return result;
}
break;
}
});

cljs.source_map.decode.cljs$lang$maxFixedArity = 2;

/**
 * Take a nested sorted map encoding line and column information
 * for a file and return a vector of vectors of encoded segments.
 * Each vector represents a line, and the internal vectors are segments
 * representing the contents of the line.
 */
cljs.source_map.lines__GT_segs = (function cljs$source_map$lines__GT_segs(lines){
var relseg = cljs.core.atom.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0)], null));
return cljs.core.reduce.call(null,((function (relseg){
return (function (segs,cols){
cljs.core.swap_BANG_.call(null,relseg,((function (relseg){
return (function (p__2770){
var vec__2771 = p__2770;
var _ = cljs.core.nth.call(null,vec__2771,(0),null);
var source = cljs.core.nth.call(null,vec__2771,(1),null);
var line = cljs.core.nth.call(null,vec__2771,(2),null);
var col = cljs.core.nth.call(null,vec__2771,(3),null);
var name = cljs.core.nth.call(null,vec__2771,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),source,line,col,name], null);
});})(relseg))
);

return cljs.core.conj.call(null,segs,cljs.core.reduce.call(null,((function (relseg){
return (function (cols__$1,p__2774){
var vec__2775 = p__2774;
var gcol = cljs.core.nth.call(null,vec__2775,(0),null);
var sidx = cljs.core.nth.call(null,vec__2775,(1),null);
var line = cljs.core.nth.call(null,vec__2775,(2),null);
var col = cljs.core.nth.call(null,vec__2775,(3),null);
var name = cljs.core.nth.call(null,vec__2775,(4),null);
var seg = vec__2775;
var offset = cljs.core.map.call(null,cljs.core._,seg,cljs.core.deref.call(null,relseg));
cljs.core.swap_BANG_.call(null,relseg,((function (offset,vec__2775,gcol,sidx,line,col,name,seg,relseg){
return (function (p__2778){
var vec__2779 = p__2778;
var _ = cljs.core.nth.call(null,vec__2779,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__2779,(1),null);
var ___$2 = cljs.core.nth.call(null,vec__2779,(2),null);
var ___$3 = cljs.core.nth.call(null,vec__2779,(3),null);
var lname = cljs.core.nth.call(null,vec__2779,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol,sidx,line,col,(function (){var or__3922__auto__ = name;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return lname;
}
})()], null);
});})(offset,vec__2775,gcol,sidx,line,col,name,seg,relseg))
);

return cljs.core.conj.call(null,cols__$1,cljs.source_map.base64_vlq.encode.call(null,offset));
});})(relseg))
,cljs.core.PersistentVector.EMPTY,cols));
});})(relseg))
,cljs.core.PersistentVector.EMPTY,lines);
});
/**
 * Take an internal source map representation represented as nested
 * sorted maps of file, line, column and return a source map v3 JSON
 * string.
 */
cljs.source_map.encode = (function cljs$source_map$encode(m,opts){
var lines = cljs.core.atom.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null));
var names__GT_idx = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var name_idx = cljs.core.atom.call(null,(0));
var preamble_lines = cljs.core.take.call(null,(function (){var or__3922__auto__ = new cljs.core.Keyword(null,"preamble-line-count","preamble-line-count",-659949744).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return (0);
}
})(),cljs.core.repeat.call(null,cljs.core.PersistentVector.EMPTY));
var info__GT_segv = ((function (lines,names__GT_idx,name_idx,preamble_lines){
return (function (info,source_idx,line,col){
var segv = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gcol","gcol",309250807).cljs$core$IFn$_invoke$arity$1(info),source_idx,line,col], null);
var temp__5455__auto__ = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info);
if(cljs.core.truth_(temp__5455__auto__)){
var name = temp__5455__auto__;
var idx = (function (){var temp__5455__auto____$1 = cljs.core.get.call(null,cljs.core.deref.call(null,names__GT_idx),name);
if(cljs.core.truth_(temp__5455__auto____$1)){
var idx = temp__5455__auto____$1;
return idx;
} else {
var cidx = cljs.core.deref.call(null,name_idx);
cljs.core.swap_BANG_.call(null,names__GT_idx,cljs.core.assoc,name,cidx);

cljs.core.swap_BANG_.call(null,name_idx,cljs.core.inc);

return cidx;
}
})();
return cljs.core.conj.call(null,segv,idx);
} else {
return segv;
}
});})(lines,names__GT_idx,name_idx,preamble_lines))
;
var encode_cols = ((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (infos,source_idx,line,col){
var seq__2785 = cljs.core.seq.call(null,infos);
var chunk__2786 = null;
var count__2787 = (0);
var i__2788 = (0);
while(true){
if((i__2788 < count__2787)){
var info = cljs.core._nth.call(null,chunk__2786,i__2788);
var segv_2867 = info__GT_segv.call(null,info,source_idx,line,col);
var gline_2868 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_2869 = cljs.core.count.call(null,cljs.core.deref.call(null,lines));
if((gline_2868 > (lc_2869 - (1)))){
cljs.core.swap_BANG_.call(null,lines,((function (seq__2785,chunk__2786,count__2787,i__2788,segv_2867,gline_2868,lc_2869,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.call(null,cljs.core.into.call(null,lines__$1,cljs.core.repeat.call(null,((gline_2868 - (lc_2869 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_2867], null));
});})(seq__2785,chunk__2786,count__2787,i__2788,segv_2867,gline_2868,lc_2869,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.call(null,lines,((function (seq__2785,chunk__2786,count__2787,i__2788,segv_2867,gline_2868,lc_2869,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.call(null,lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_2868], null),cljs.core.conj,segv_2867);
});})(seq__2785,chunk__2786,count__2787,i__2788,segv_2867,gline_2868,lc_2869,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}


var G__2870 = seq__2785;
var G__2871 = chunk__2786;
var G__2872 = count__2787;
var G__2873 = (i__2788 + (1));
seq__2785 = G__2870;
chunk__2786 = G__2871;
count__2787 = G__2872;
i__2788 = G__2873;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__2785);
if(temp__5457__auto__){
var seq__2785__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__2785__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__2785__$1);
var G__2874 = cljs.core.chunk_rest.call(null,seq__2785__$1);
var G__2875 = c__4319__auto__;
var G__2876 = cljs.core.count.call(null,c__4319__auto__);
var G__2877 = (0);
seq__2785 = G__2874;
chunk__2786 = G__2875;
count__2787 = G__2876;
i__2788 = G__2877;
continue;
} else {
var info = cljs.core.first.call(null,seq__2785__$1);
var segv_2878 = info__GT_segv.call(null,info,source_idx,line,col);
var gline_2879 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_2880 = cljs.core.count.call(null,cljs.core.deref.call(null,lines));
if((gline_2879 > (lc_2880 - (1)))){
cljs.core.swap_BANG_.call(null,lines,((function (seq__2785,chunk__2786,count__2787,i__2788,segv_2878,gline_2879,lc_2880,info,seq__2785__$1,temp__5457__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.call(null,cljs.core.into.call(null,lines__$1,cljs.core.repeat.call(null,((gline_2879 - (lc_2880 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_2878], null));
});})(seq__2785,chunk__2786,count__2787,i__2788,segv_2878,gline_2879,lc_2880,info,seq__2785__$1,temp__5457__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.call(null,lines,((function (seq__2785,chunk__2786,count__2787,i__2788,segv_2878,gline_2879,lc_2880,info,seq__2785__$1,temp__5457__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.call(null,lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_2879], null),cljs.core.conj,segv_2878);
});})(seq__2785,chunk__2786,count__2787,i__2788,segv_2878,gline_2879,lc_2880,info,seq__2785__$1,temp__5457__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}


var G__2881 = cljs.core.next.call(null,seq__2785__$1);
var G__2882 = null;
var G__2883 = (0);
var G__2884 = (0);
seq__2785 = G__2881;
chunk__2786 = G__2882;
count__2787 = G__2883;
i__2788 = G__2884;
continue;
}
} else {
return null;
}
}
break;
}
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
;
var seq__2789_2885 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (i,v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,v], null);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,m));
var chunk__2790_2886 = null;
var count__2791_2887 = (0);
var i__2792_2888 = (0);
while(true){
if((i__2792_2888 < count__2791_2887)){
var vec__2793_2889 = cljs.core._nth.call(null,chunk__2790_2886,i__2792_2888);
var source_idx_2890 = cljs.core.nth.call(null,vec__2793_2889,(0),null);
var vec__2796_2891 = cljs.core.nth.call(null,vec__2793_2889,(1),null);
var __2892 = cljs.core.nth.call(null,vec__2796_2891,(0),null);
var lines_2893__$1 = cljs.core.nth.call(null,vec__2796_2891,(1),null);
var seq__2799_2894 = cljs.core.seq.call(null,lines_2893__$1);
var chunk__2800_2895 = null;
var count__2801_2896 = (0);
var i__2802_2897 = (0);
while(true){
if((i__2802_2897 < count__2801_2896)){
var vec__2803_2898 = cljs.core._nth.call(null,chunk__2800_2895,i__2802_2897);
var line_2899 = cljs.core.nth.call(null,vec__2803_2898,(0),null);
var cols_2900 = cljs.core.nth.call(null,vec__2803_2898,(1),null);
var seq__2806_2901 = cljs.core.seq.call(null,cols_2900);
var chunk__2807_2902 = null;
var count__2808_2903 = (0);
var i__2809_2904 = (0);
while(true){
if((i__2809_2904 < count__2808_2903)){
var vec__2810_2905 = cljs.core._nth.call(null,chunk__2807_2902,i__2809_2904);
var col_2906 = cljs.core.nth.call(null,vec__2810_2905,(0),null);
var infos_2907 = cljs.core.nth.call(null,vec__2810_2905,(1),null);
encode_cols.call(null,infos_2907,source_idx_2890,line_2899,col_2906);


var G__2908 = seq__2806_2901;
var G__2909 = chunk__2807_2902;
var G__2910 = count__2808_2903;
var G__2911 = (i__2809_2904 + (1));
seq__2806_2901 = G__2908;
chunk__2807_2902 = G__2909;
count__2808_2903 = G__2910;
i__2809_2904 = G__2911;
continue;
} else {
var temp__5457__auto___2912 = cljs.core.seq.call(null,seq__2806_2901);
if(temp__5457__auto___2912){
var seq__2806_2913__$1 = temp__5457__auto___2912;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__2806_2913__$1)){
var c__4319__auto___2914 = cljs.core.chunk_first.call(null,seq__2806_2913__$1);
var G__2915 = cljs.core.chunk_rest.call(null,seq__2806_2913__$1);
var G__2916 = c__4319__auto___2914;
var G__2917 = cljs.core.count.call(null,c__4319__auto___2914);
var G__2918 = (0);
seq__2806_2901 = G__2915;
chunk__2807_2902 = G__2916;
count__2808_2903 = G__2917;
i__2809_2904 = G__2918;
continue;
} else {
var vec__2813_2919 = cljs.core.first.call(null,seq__2806_2913__$1);
var col_2920 = cljs.core.nth.call(null,vec__2813_2919,(0),null);
var infos_2921 = cljs.core.nth.call(null,vec__2813_2919,(1),null);
encode_cols.call(null,infos_2921,source_idx_2890,line_2899,col_2920);


var G__2922 = cljs.core.next.call(null,seq__2806_2913__$1);
var G__2923 = null;
var G__2924 = (0);
var G__2925 = (0);
seq__2806_2901 = G__2922;
chunk__2807_2902 = G__2923;
count__2808_2903 = G__2924;
i__2809_2904 = G__2925;
continue;
}
} else {
}
}
break;
}


var G__2926 = seq__2799_2894;
var G__2927 = chunk__2800_2895;
var G__2928 = count__2801_2896;
var G__2929 = (i__2802_2897 + (1));
seq__2799_2894 = G__2926;
chunk__2800_2895 = G__2927;
count__2801_2896 = G__2928;
i__2802_2897 = G__2929;
continue;
} else {
var temp__5457__auto___2930 = cljs.core.seq.call(null,seq__2799_2894);
if(temp__5457__auto___2930){
var seq__2799_2931__$1 = temp__5457__auto___2930;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__2799_2931__$1)){
var c__4319__auto___2932 = cljs.core.chunk_first.call(null,seq__2799_2931__$1);
var G__2933 = cljs.core.chunk_rest.call(null,seq__2799_2931__$1);
var G__2934 = c__4319__auto___2932;
var G__2935 = cljs.core.count.call(null,c__4319__auto___2932);
var G__2936 = (0);
seq__2799_2894 = G__2933;
chunk__2800_2895 = G__2934;
count__2801_2896 = G__2935;
i__2802_2897 = G__2936;
continue;
} else {
var vec__2816_2937 = cljs.core.first.call(null,seq__2799_2931__$1);
var line_2938 = cljs.core.nth.call(null,vec__2816_2937,(0),null);
var cols_2939 = cljs.core.nth.call(null,vec__2816_2937,(1),null);
var seq__2819_2940 = cljs.core.seq.call(null,cols_2939);
var chunk__2820_2941 = null;
var count__2821_2942 = (0);
var i__2822_2943 = (0);
while(true){
if((i__2822_2943 < count__2821_2942)){
var vec__2823_2944 = cljs.core._nth.call(null,chunk__2820_2941,i__2822_2943);
var col_2945 = cljs.core.nth.call(null,vec__2823_2944,(0),null);
var infos_2946 = cljs.core.nth.call(null,vec__2823_2944,(1),null);
encode_cols.call(null,infos_2946,source_idx_2890,line_2938,col_2945);


var G__2947 = seq__2819_2940;
var G__2948 = chunk__2820_2941;
var G__2949 = count__2821_2942;
var G__2950 = (i__2822_2943 + (1));
seq__2819_2940 = G__2947;
chunk__2820_2941 = G__2948;
count__2821_2942 = G__2949;
i__2822_2943 = G__2950;
continue;
} else {
var temp__5457__auto___2951__$1 = cljs.core.seq.call(null,seq__2819_2940);
if(temp__5457__auto___2951__$1){
var seq__2819_2952__$1 = temp__5457__auto___2951__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__2819_2952__$1)){
var c__4319__auto___2953 = cljs.core.chunk_first.call(null,seq__2819_2952__$1);
var G__2954 = cljs.core.chunk_rest.call(null,seq__2819_2952__$1);
var G__2955 = c__4319__auto___2953;
var G__2956 = cljs.core.count.call(null,c__4319__auto___2953);
var G__2957 = (0);
seq__2819_2940 = G__2954;
chunk__2820_2941 = G__2955;
count__2821_2942 = G__2956;
i__2822_2943 = G__2957;
continue;
} else {
var vec__2826_2958 = cljs.core.first.call(null,seq__2819_2952__$1);
var col_2959 = cljs.core.nth.call(null,vec__2826_2958,(0),null);
var infos_2960 = cljs.core.nth.call(null,vec__2826_2958,(1),null);
encode_cols.call(null,infos_2960,source_idx_2890,line_2938,col_2959);


var G__2961 = cljs.core.next.call(null,seq__2819_2952__$1);
var G__2962 = null;
var G__2963 = (0);
var G__2964 = (0);
seq__2819_2940 = G__2961;
chunk__2820_2941 = G__2962;
count__2821_2942 = G__2963;
i__2822_2943 = G__2964;
continue;
}
} else {
}
}
break;
}


var G__2965 = cljs.core.next.call(null,seq__2799_2931__$1);
var G__2966 = null;
var G__2967 = (0);
var G__2968 = (0);
seq__2799_2894 = G__2965;
chunk__2800_2895 = G__2966;
count__2801_2896 = G__2967;
i__2802_2897 = G__2968;
continue;
}
} else {
}
}
break;
}


var G__2969 = seq__2789_2885;
var G__2970 = chunk__2790_2886;
var G__2971 = count__2791_2887;
var G__2972 = (i__2792_2888 + (1));
seq__2789_2885 = G__2969;
chunk__2790_2886 = G__2970;
count__2791_2887 = G__2971;
i__2792_2888 = G__2972;
continue;
} else {
var temp__5457__auto___2973 = cljs.core.seq.call(null,seq__2789_2885);
if(temp__5457__auto___2973){
var seq__2789_2974__$1 = temp__5457__auto___2973;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__2789_2974__$1)){
var c__4319__auto___2975 = cljs.core.chunk_first.call(null,seq__2789_2974__$1);
var G__2976 = cljs.core.chunk_rest.call(null,seq__2789_2974__$1);
var G__2977 = c__4319__auto___2975;
var G__2978 = cljs.core.count.call(null,c__4319__auto___2975);
var G__2979 = (0);
seq__2789_2885 = G__2976;
chunk__2790_2886 = G__2977;
count__2791_2887 = G__2978;
i__2792_2888 = G__2979;
continue;
} else {
var vec__2829_2980 = cljs.core.first.call(null,seq__2789_2974__$1);
var source_idx_2981 = cljs.core.nth.call(null,vec__2829_2980,(0),null);
var vec__2832_2982 = cljs.core.nth.call(null,vec__2829_2980,(1),null);
var __2983 = cljs.core.nth.call(null,vec__2832_2982,(0),null);
var lines_2984__$1 = cljs.core.nth.call(null,vec__2832_2982,(1),null);
var seq__2835_2985 = cljs.core.seq.call(null,lines_2984__$1);
var chunk__2836_2986 = null;
var count__2837_2987 = (0);
var i__2838_2988 = (0);
while(true){
if((i__2838_2988 < count__2837_2987)){
var vec__2839_2989 = cljs.core._nth.call(null,chunk__2836_2986,i__2838_2988);
var line_2990 = cljs.core.nth.call(null,vec__2839_2989,(0),null);
var cols_2991 = cljs.core.nth.call(null,vec__2839_2989,(1),null);
var seq__2842_2992 = cljs.core.seq.call(null,cols_2991);
var chunk__2843_2993 = null;
var count__2844_2994 = (0);
var i__2845_2995 = (0);
while(true){
if((i__2845_2995 < count__2844_2994)){
var vec__2846_2996 = cljs.core._nth.call(null,chunk__2843_2993,i__2845_2995);
var col_2997 = cljs.core.nth.call(null,vec__2846_2996,(0),null);
var infos_2998 = cljs.core.nth.call(null,vec__2846_2996,(1),null);
encode_cols.call(null,infos_2998,source_idx_2981,line_2990,col_2997);


var G__2999 = seq__2842_2992;
var G__3000 = chunk__2843_2993;
var G__3001 = count__2844_2994;
var G__3002 = (i__2845_2995 + (1));
seq__2842_2992 = G__2999;
chunk__2843_2993 = G__3000;
count__2844_2994 = G__3001;
i__2845_2995 = G__3002;
continue;
} else {
var temp__5457__auto___3003__$1 = cljs.core.seq.call(null,seq__2842_2992);
if(temp__5457__auto___3003__$1){
var seq__2842_3004__$1 = temp__5457__auto___3003__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__2842_3004__$1)){
var c__4319__auto___3005 = cljs.core.chunk_first.call(null,seq__2842_3004__$1);
var G__3006 = cljs.core.chunk_rest.call(null,seq__2842_3004__$1);
var G__3007 = c__4319__auto___3005;
var G__3008 = cljs.core.count.call(null,c__4319__auto___3005);
var G__3009 = (0);
seq__2842_2992 = G__3006;
chunk__2843_2993 = G__3007;
count__2844_2994 = G__3008;
i__2845_2995 = G__3009;
continue;
} else {
var vec__2849_3010 = cljs.core.first.call(null,seq__2842_3004__$1);
var col_3011 = cljs.core.nth.call(null,vec__2849_3010,(0),null);
var infos_3012 = cljs.core.nth.call(null,vec__2849_3010,(1),null);
encode_cols.call(null,infos_3012,source_idx_2981,line_2990,col_3011);


var G__3013 = cljs.core.next.call(null,seq__2842_3004__$1);
var G__3014 = null;
var G__3015 = (0);
var G__3016 = (0);
seq__2842_2992 = G__3013;
chunk__2843_2993 = G__3014;
count__2844_2994 = G__3015;
i__2845_2995 = G__3016;
continue;
}
} else {
}
}
break;
}


var G__3017 = seq__2835_2985;
var G__3018 = chunk__2836_2986;
var G__3019 = count__2837_2987;
var G__3020 = (i__2838_2988 + (1));
seq__2835_2985 = G__3017;
chunk__2836_2986 = G__3018;
count__2837_2987 = G__3019;
i__2838_2988 = G__3020;
continue;
} else {
var temp__5457__auto___3021__$1 = cljs.core.seq.call(null,seq__2835_2985);
if(temp__5457__auto___3021__$1){
var seq__2835_3022__$1 = temp__5457__auto___3021__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__2835_3022__$1)){
var c__4319__auto___3023 = cljs.core.chunk_first.call(null,seq__2835_3022__$1);
var G__3024 = cljs.core.chunk_rest.call(null,seq__2835_3022__$1);
var G__3025 = c__4319__auto___3023;
var G__3026 = cljs.core.count.call(null,c__4319__auto___3023);
var G__3027 = (0);
seq__2835_2985 = G__3024;
chunk__2836_2986 = G__3025;
count__2837_2987 = G__3026;
i__2838_2988 = G__3027;
continue;
} else {
var vec__2852_3028 = cljs.core.first.call(null,seq__2835_3022__$1);
var line_3029 = cljs.core.nth.call(null,vec__2852_3028,(0),null);
var cols_3030 = cljs.core.nth.call(null,vec__2852_3028,(1),null);
var seq__2855_3031 = cljs.core.seq.call(null,cols_3030);
var chunk__2856_3032 = null;
var count__2857_3033 = (0);
var i__2858_3034 = (0);
while(true){
if((i__2858_3034 < count__2857_3033)){
var vec__2859_3035 = cljs.core._nth.call(null,chunk__2856_3032,i__2858_3034);
var col_3036 = cljs.core.nth.call(null,vec__2859_3035,(0),null);
var infos_3037 = cljs.core.nth.call(null,vec__2859_3035,(1),null);
encode_cols.call(null,infos_3037,source_idx_2981,line_3029,col_3036);


var G__3038 = seq__2855_3031;
var G__3039 = chunk__2856_3032;
var G__3040 = count__2857_3033;
var G__3041 = (i__2858_3034 + (1));
seq__2855_3031 = G__3038;
chunk__2856_3032 = G__3039;
count__2857_3033 = G__3040;
i__2858_3034 = G__3041;
continue;
} else {
var temp__5457__auto___3042__$2 = cljs.core.seq.call(null,seq__2855_3031);
if(temp__5457__auto___3042__$2){
var seq__2855_3043__$1 = temp__5457__auto___3042__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__2855_3043__$1)){
var c__4319__auto___3044 = cljs.core.chunk_first.call(null,seq__2855_3043__$1);
var G__3045 = cljs.core.chunk_rest.call(null,seq__2855_3043__$1);
var G__3046 = c__4319__auto___3044;
var G__3047 = cljs.core.count.call(null,c__4319__auto___3044);
var G__3048 = (0);
seq__2855_3031 = G__3045;
chunk__2856_3032 = G__3046;
count__2857_3033 = G__3047;
i__2858_3034 = G__3048;
continue;
} else {
var vec__2862_3049 = cljs.core.first.call(null,seq__2855_3043__$1);
var col_3050 = cljs.core.nth.call(null,vec__2862_3049,(0),null);
var infos_3051 = cljs.core.nth.call(null,vec__2862_3049,(1),null);
encode_cols.call(null,infos_3051,source_idx_2981,line_3029,col_3050);


var G__3052 = cljs.core.next.call(null,seq__2855_3043__$1);
var G__3053 = null;
var G__3054 = (0);
var G__3055 = (0);
seq__2855_3031 = G__3052;
chunk__2856_3032 = G__3053;
count__2857_3033 = G__3054;
i__2858_3034 = G__3055;
continue;
}
} else {
}
}
break;
}


var G__3056 = cljs.core.next.call(null,seq__2835_3022__$1);
var G__3057 = null;
var G__3058 = (0);
var G__3059 = (0);
seq__2835_2985 = G__3056;
chunk__2836_2986 = G__3057;
count__2837_2987 = G__3058;
i__2838_2988 = G__3059;
continue;
}
} else {
}
}
break;
}


var G__3060 = cljs.core.next.call(null,seq__2789_2974__$1);
var G__3061 = null;
var G__3062 = (0);
var G__3063 = (0);
seq__2789_2885 = G__3060;
chunk__2790_2886 = G__3061;
count__2791_2887 = G__3062;
i__2792_2888 = G__3063;
continue;
}
} else {
}
}
break;
}

var source_map_file_contents = (function (){var G__2865 = ({"version": (3), "file": new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(opts), "sources": (function (){var paths = cljs.core.keys.call(null,m);
var f = cljs.core.comp.call(null,((new cljs.core.Keyword(null,"source-map-timestamp","source-map-timestamp",1973015633).cljs$core$IFn$_invoke$arity$1(opts) === true)?((function (paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__2782_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__2782_SHARP_),"?rel=",cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).valueOf())].join('');
});})(paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
:cljs.core.identity),((function (paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__2783_SHARP_){
return cljs.core.last.call(null,clojure.string.split.call(null,p1__2783_SHARP_,/\//));
});})(paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
);
return cljs.core.into_array.call(null,cljs.core.map.call(null,f,paths));
})(), "lineCount": new cljs.core.Keyword(null,"lines","lines",-700165781).cljs$core$IFn$_invoke$arity$1(opts), "mappings": clojure.string.join.call(null,";",cljs.core.map.call(null,((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__2784_SHARP_){
return clojure.string.join.call(null,",",p1__2784_SHARP_);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,cljs.source_map.lines__GT_segs.call(null,cljs.core.concat.call(null,preamble_lines,cljs.core.deref.call(null,lines))))), "names": cljs.core.into_array.call(null,cljs.core.map.call(null,clojure.set.map_invert.call(null,cljs.core.deref.call(null,names__GT_idx)),cljs.core.range.call(null,cljs.core.count.call(null,cljs.core.deref.call(null,names__GT_idx)))))});
if(cljs.core.truth_(new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts))){
var G__2866 = G__2865;
goog.object.set(G__2866,"sourcesContent",cljs.core.into_array.call(null,new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts)));

return G__2866;
} else {
return G__2865;
}
})();
return JSON.stringify(source_map_file_contents);
});
/**
 * Merge an internal source map representation of a single
 * ClojureScript file mapping original to generated with a
 * second source map mapping original JS to generated JS.
 * The is to support source maps that work through multiple
 * compilation steps like Google Closure optimization passes.
 */
cljs.source_map.merge_source_maps = (function cljs$source_map$merge_source_maps(cljs_map,js_map){
var line_map_seq = cljs.core.seq.call(null,cljs_map);
var new_lines = cljs.core.sorted_map.call(null);
while(true){
if(line_map_seq){
var vec__3064 = cljs.core.first.call(null,line_map_seq);
var line = cljs.core.nth.call(null,vec__3064,(0),null);
var col_map = cljs.core.nth.call(null,vec__3064,(1),null);
var new_cols = (function (){var col_map_seq = cljs.core.seq.call(null,col_map);
var new_cols = cljs.core.sorted_map.call(null);
while(true){
if(col_map_seq){
var vec__3067 = cljs.core.first.call(null,col_map_seq);
var col = cljs.core.nth.call(null,vec__3067,(0),null);
var infos = cljs.core.nth.call(null,vec__3067,(1),null);
var G__3073 = cljs.core.next.call(null,col_map_seq);
var G__3074 = cljs.core.assoc.call(null,new_cols,col,cljs.core.reduce.call(null,((function (col_map_seq,new_cols,line_map_seq,new_lines,vec__3067,col,infos,vec__3064,line,col_map){
return (function (v,p__3070){
var map__3071 = p__3070;
var map__3071__$1 = ((((!((map__3071 == null)))?(((((map__3071.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3071.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3071):map__3071);
var gline = cljs.core.get.call(null,map__3071__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol = cljs.core.get.call(null,map__3071__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
return cljs.core.into.call(null,v,cljs.core.get_in.call(null,js_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline,gcol], null)));
});})(col_map_seq,new_cols,line_map_seq,new_lines,vec__3067,col,infos,vec__3064,line,col_map))
,cljs.core.PersistentVector.EMPTY,infos));
col_map_seq = G__3073;
new_cols = G__3074;
continue;
} else {
return new_cols;
}
break;
}
})();
var G__3075 = cljs.core.next.call(null,line_map_seq);
var G__3076 = cljs.core.assoc.call(null,new_lines,line,new_cols);
line_map_seq = G__3075;
new_lines = G__3076;
continue;
} else {
return new_lines;
}
break;
}
});
/**
 * Given a ClojureScript to JavaScript source map, invert it. Useful when
 * mapping JavaScript stack traces when environment support is unavailable.
 */
cljs.source_map.invert_reverse_map = (function cljs$source_map$invert_reverse_map(reverse_map){
var inverted = cljs.core.atom.call(null,cljs.core.sorted_map.call(null));
var seq__3077_3139 = cljs.core.seq.call(null,reverse_map);
var chunk__3078_3140 = null;
var count__3079_3141 = (0);
var i__3080_3142 = (0);
while(true){
if((i__3080_3142 < count__3079_3141)){
var vec__3081_3143 = cljs.core._nth.call(null,chunk__3078_3140,i__3080_3142);
var line_3144 = cljs.core.nth.call(null,vec__3081_3143,(0),null);
var columns_3145 = cljs.core.nth.call(null,vec__3081_3143,(1),null);
var seq__3084_3146 = cljs.core.seq.call(null,columns_3145);
var chunk__3085_3147 = null;
var count__3086_3148 = (0);
var i__3087_3149 = (0);
while(true){
if((i__3087_3149 < count__3086_3148)){
var vec__3088_3150 = cljs.core._nth.call(null,chunk__3085_3147,i__3087_3149);
var column_3151 = cljs.core.nth.call(null,vec__3088_3150,(0),null);
var column_info_3152 = cljs.core.nth.call(null,vec__3088_3150,(1),null);
var seq__3091_3153 = cljs.core.seq.call(null,column_info_3152);
var chunk__3092_3154 = null;
var count__3093_3155 = (0);
var i__3094_3156 = (0);
while(true){
if((i__3094_3156 < count__3093_3155)){
var map__3095_3157 = cljs.core._nth.call(null,chunk__3092_3154,i__3094_3156);
var map__3095_3158__$1 = ((((!((map__3095_3157 == null)))?(((((map__3095_3157.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3095_3157.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3095_3157):map__3095_3157);
var gline_3159 = cljs.core.get.call(null,map__3095_3158__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_3160 = cljs.core.get.call(null,map__3095_3158__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_3161 = cljs.core.get.call(null,map__3095_3158__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_3159], null),cljs.core.fnil.call(null,((function (seq__3091_3153,chunk__3092_3154,count__3093_3155,i__3094_3156,seq__3084_3146,chunk__3085_3147,count__3086_3148,i__3087_3149,seq__3077_3139,chunk__3078_3140,count__3079_3141,i__3080_3142,map__3095_3157,map__3095_3158__$1,gline_3159,gcol_3160,name_3161,vec__3088_3150,column_3151,column_info_3152,vec__3081_3143,line_3144,columns_3145,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_3160], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_3144,new cljs.core.Keyword(null,"col","col",-1959363084),column_3151,new cljs.core.Keyword(null,"name","name",1843675177),name_3161], null));
});})(seq__3091_3153,chunk__3092_3154,count__3093_3155,i__3094_3156,seq__3084_3146,chunk__3085_3147,count__3086_3148,i__3087_3149,seq__3077_3139,chunk__3078_3140,count__3079_3141,i__3080_3142,map__3095_3157,map__3095_3158__$1,gline_3159,gcol_3160,name_3161,vec__3088_3150,column_3151,column_info_3152,vec__3081_3143,line_3144,columns_3145,inverted))
,cljs.core.sorted_map.call(null)));


var G__3162 = seq__3091_3153;
var G__3163 = chunk__3092_3154;
var G__3164 = count__3093_3155;
var G__3165 = (i__3094_3156 + (1));
seq__3091_3153 = G__3162;
chunk__3092_3154 = G__3163;
count__3093_3155 = G__3164;
i__3094_3156 = G__3165;
continue;
} else {
var temp__5457__auto___3166 = cljs.core.seq.call(null,seq__3091_3153);
if(temp__5457__auto___3166){
var seq__3091_3167__$1 = temp__5457__auto___3166;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__3091_3167__$1)){
var c__4319__auto___3168 = cljs.core.chunk_first.call(null,seq__3091_3167__$1);
var G__3169 = cljs.core.chunk_rest.call(null,seq__3091_3167__$1);
var G__3170 = c__4319__auto___3168;
var G__3171 = cljs.core.count.call(null,c__4319__auto___3168);
var G__3172 = (0);
seq__3091_3153 = G__3169;
chunk__3092_3154 = G__3170;
count__3093_3155 = G__3171;
i__3094_3156 = G__3172;
continue;
} else {
var map__3097_3173 = cljs.core.first.call(null,seq__3091_3167__$1);
var map__3097_3174__$1 = ((((!((map__3097_3173 == null)))?(((((map__3097_3173.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3097_3173.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3097_3173):map__3097_3173);
var gline_3175 = cljs.core.get.call(null,map__3097_3174__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_3176 = cljs.core.get.call(null,map__3097_3174__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_3177 = cljs.core.get.call(null,map__3097_3174__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_3175], null),cljs.core.fnil.call(null,((function (seq__3091_3153,chunk__3092_3154,count__3093_3155,i__3094_3156,seq__3084_3146,chunk__3085_3147,count__3086_3148,i__3087_3149,seq__3077_3139,chunk__3078_3140,count__3079_3141,i__3080_3142,map__3097_3173,map__3097_3174__$1,gline_3175,gcol_3176,name_3177,seq__3091_3167__$1,temp__5457__auto___3166,vec__3088_3150,column_3151,column_info_3152,vec__3081_3143,line_3144,columns_3145,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_3176], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_3144,new cljs.core.Keyword(null,"col","col",-1959363084),column_3151,new cljs.core.Keyword(null,"name","name",1843675177),name_3177], null));
});})(seq__3091_3153,chunk__3092_3154,count__3093_3155,i__3094_3156,seq__3084_3146,chunk__3085_3147,count__3086_3148,i__3087_3149,seq__3077_3139,chunk__3078_3140,count__3079_3141,i__3080_3142,map__3097_3173,map__3097_3174__$1,gline_3175,gcol_3176,name_3177,seq__3091_3167__$1,temp__5457__auto___3166,vec__3088_3150,column_3151,column_info_3152,vec__3081_3143,line_3144,columns_3145,inverted))
,cljs.core.sorted_map.call(null)));


var G__3178 = cljs.core.next.call(null,seq__3091_3167__$1);
var G__3179 = null;
var G__3180 = (0);
var G__3181 = (0);
seq__3091_3153 = G__3178;
chunk__3092_3154 = G__3179;
count__3093_3155 = G__3180;
i__3094_3156 = G__3181;
continue;
}
} else {
}
}
break;
}


var G__3182 = seq__3084_3146;
var G__3183 = chunk__3085_3147;
var G__3184 = count__3086_3148;
var G__3185 = (i__3087_3149 + (1));
seq__3084_3146 = G__3182;
chunk__3085_3147 = G__3183;
count__3086_3148 = G__3184;
i__3087_3149 = G__3185;
continue;
} else {
var temp__5457__auto___3186 = cljs.core.seq.call(null,seq__3084_3146);
if(temp__5457__auto___3186){
var seq__3084_3187__$1 = temp__5457__auto___3186;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__3084_3187__$1)){
var c__4319__auto___3188 = cljs.core.chunk_first.call(null,seq__3084_3187__$1);
var G__3189 = cljs.core.chunk_rest.call(null,seq__3084_3187__$1);
var G__3190 = c__4319__auto___3188;
var G__3191 = cljs.core.count.call(null,c__4319__auto___3188);
var G__3192 = (0);
seq__3084_3146 = G__3189;
chunk__3085_3147 = G__3190;
count__3086_3148 = G__3191;
i__3087_3149 = G__3192;
continue;
} else {
var vec__3099_3193 = cljs.core.first.call(null,seq__3084_3187__$1);
var column_3194 = cljs.core.nth.call(null,vec__3099_3193,(0),null);
var column_info_3195 = cljs.core.nth.call(null,vec__3099_3193,(1),null);
var seq__3102_3196 = cljs.core.seq.call(null,column_info_3195);
var chunk__3103_3197 = null;
var count__3104_3198 = (0);
var i__3105_3199 = (0);
while(true){
if((i__3105_3199 < count__3104_3198)){
var map__3106_3200 = cljs.core._nth.call(null,chunk__3103_3197,i__3105_3199);
var map__3106_3201__$1 = ((((!((map__3106_3200 == null)))?(((((map__3106_3200.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3106_3200.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3106_3200):map__3106_3200);
var gline_3202 = cljs.core.get.call(null,map__3106_3201__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_3203 = cljs.core.get.call(null,map__3106_3201__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_3204 = cljs.core.get.call(null,map__3106_3201__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_3202], null),cljs.core.fnil.call(null,((function (seq__3102_3196,chunk__3103_3197,count__3104_3198,i__3105_3199,seq__3084_3146,chunk__3085_3147,count__3086_3148,i__3087_3149,seq__3077_3139,chunk__3078_3140,count__3079_3141,i__3080_3142,map__3106_3200,map__3106_3201__$1,gline_3202,gcol_3203,name_3204,vec__3099_3193,column_3194,column_info_3195,seq__3084_3187__$1,temp__5457__auto___3186,vec__3081_3143,line_3144,columns_3145,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_3203], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_3144,new cljs.core.Keyword(null,"col","col",-1959363084),column_3194,new cljs.core.Keyword(null,"name","name",1843675177),name_3204], null));
});})(seq__3102_3196,chunk__3103_3197,count__3104_3198,i__3105_3199,seq__3084_3146,chunk__3085_3147,count__3086_3148,i__3087_3149,seq__3077_3139,chunk__3078_3140,count__3079_3141,i__3080_3142,map__3106_3200,map__3106_3201__$1,gline_3202,gcol_3203,name_3204,vec__3099_3193,column_3194,column_info_3195,seq__3084_3187__$1,temp__5457__auto___3186,vec__3081_3143,line_3144,columns_3145,inverted))
,cljs.core.sorted_map.call(null)));


var G__3205 = seq__3102_3196;
var G__3206 = chunk__3103_3197;
var G__3207 = count__3104_3198;
var G__3208 = (i__3105_3199 + (1));
seq__3102_3196 = G__3205;
chunk__3103_3197 = G__3206;
count__3104_3198 = G__3207;
i__3105_3199 = G__3208;
continue;
} else {
var temp__5457__auto___3209__$1 = cljs.core.seq.call(null,seq__3102_3196);
if(temp__5457__auto___3209__$1){
var seq__3102_3210__$1 = temp__5457__auto___3209__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__3102_3210__$1)){
var c__4319__auto___3211 = cljs.core.chunk_first.call(null,seq__3102_3210__$1);
var G__3212 = cljs.core.chunk_rest.call(null,seq__3102_3210__$1);
var G__3213 = c__4319__auto___3211;
var G__3214 = cljs.core.count.call(null,c__4319__auto___3211);
var G__3215 = (0);
seq__3102_3196 = G__3212;
chunk__3103_3197 = G__3213;
count__3104_3198 = G__3214;
i__3105_3199 = G__3215;
continue;
} else {
var map__3108_3216 = cljs.core.first.call(null,seq__3102_3210__$1);
var map__3108_3217__$1 = ((((!((map__3108_3216 == null)))?(((((map__3108_3216.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3108_3216.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3108_3216):map__3108_3216);
var gline_3218 = cljs.core.get.call(null,map__3108_3217__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_3219 = cljs.core.get.call(null,map__3108_3217__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_3220 = cljs.core.get.call(null,map__3108_3217__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_3218], null),cljs.core.fnil.call(null,((function (seq__3102_3196,chunk__3103_3197,count__3104_3198,i__3105_3199,seq__3084_3146,chunk__3085_3147,count__3086_3148,i__3087_3149,seq__3077_3139,chunk__3078_3140,count__3079_3141,i__3080_3142,map__3108_3216,map__3108_3217__$1,gline_3218,gcol_3219,name_3220,seq__3102_3210__$1,temp__5457__auto___3209__$1,vec__3099_3193,column_3194,column_info_3195,seq__3084_3187__$1,temp__5457__auto___3186,vec__3081_3143,line_3144,columns_3145,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_3219], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_3144,new cljs.core.Keyword(null,"col","col",-1959363084),column_3194,new cljs.core.Keyword(null,"name","name",1843675177),name_3220], null));
});})(seq__3102_3196,chunk__3103_3197,count__3104_3198,i__3105_3199,seq__3084_3146,chunk__3085_3147,count__3086_3148,i__3087_3149,seq__3077_3139,chunk__3078_3140,count__3079_3141,i__3080_3142,map__3108_3216,map__3108_3217__$1,gline_3218,gcol_3219,name_3220,seq__3102_3210__$1,temp__5457__auto___3209__$1,vec__3099_3193,column_3194,column_info_3195,seq__3084_3187__$1,temp__5457__auto___3186,vec__3081_3143,line_3144,columns_3145,inverted))
,cljs.core.sorted_map.call(null)));


var G__3221 = cljs.core.next.call(null,seq__3102_3210__$1);
var G__3222 = null;
var G__3223 = (0);
var G__3224 = (0);
seq__3102_3196 = G__3221;
chunk__3103_3197 = G__3222;
count__3104_3198 = G__3223;
i__3105_3199 = G__3224;
continue;
}
} else {
}
}
break;
}


var G__3225 = cljs.core.next.call(null,seq__3084_3187__$1);
var G__3226 = null;
var G__3227 = (0);
var G__3228 = (0);
seq__3084_3146 = G__3225;
chunk__3085_3147 = G__3226;
count__3086_3148 = G__3227;
i__3087_3149 = G__3228;
continue;
}
} else {
}
}
break;
}


var G__3229 = seq__3077_3139;
var G__3230 = chunk__3078_3140;
var G__3231 = count__3079_3141;
var G__3232 = (i__3080_3142 + (1));
seq__3077_3139 = G__3229;
chunk__3078_3140 = G__3230;
count__3079_3141 = G__3231;
i__3080_3142 = G__3232;
continue;
} else {
var temp__5457__auto___3233 = cljs.core.seq.call(null,seq__3077_3139);
if(temp__5457__auto___3233){
var seq__3077_3234__$1 = temp__5457__auto___3233;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__3077_3234__$1)){
var c__4319__auto___3235 = cljs.core.chunk_first.call(null,seq__3077_3234__$1);
var G__3236 = cljs.core.chunk_rest.call(null,seq__3077_3234__$1);
var G__3237 = c__4319__auto___3235;
var G__3238 = cljs.core.count.call(null,c__4319__auto___3235);
var G__3239 = (0);
seq__3077_3139 = G__3236;
chunk__3078_3140 = G__3237;
count__3079_3141 = G__3238;
i__3080_3142 = G__3239;
continue;
} else {
var vec__3110_3240 = cljs.core.first.call(null,seq__3077_3234__$1);
var line_3241 = cljs.core.nth.call(null,vec__3110_3240,(0),null);
var columns_3242 = cljs.core.nth.call(null,vec__3110_3240,(1),null);
var seq__3113_3243 = cljs.core.seq.call(null,columns_3242);
var chunk__3114_3244 = null;
var count__3115_3245 = (0);
var i__3116_3246 = (0);
while(true){
if((i__3116_3246 < count__3115_3245)){
var vec__3117_3247 = cljs.core._nth.call(null,chunk__3114_3244,i__3116_3246);
var column_3248 = cljs.core.nth.call(null,vec__3117_3247,(0),null);
var column_info_3249 = cljs.core.nth.call(null,vec__3117_3247,(1),null);
var seq__3120_3250 = cljs.core.seq.call(null,column_info_3249);
var chunk__3121_3251 = null;
var count__3122_3252 = (0);
var i__3123_3253 = (0);
while(true){
if((i__3123_3253 < count__3122_3252)){
var map__3124_3254 = cljs.core._nth.call(null,chunk__3121_3251,i__3123_3253);
var map__3124_3255__$1 = ((((!((map__3124_3254 == null)))?(((((map__3124_3254.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3124_3254.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3124_3254):map__3124_3254);
var gline_3256 = cljs.core.get.call(null,map__3124_3255__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_3257 = cljs.core.get.call(null,map__3124_3255__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_3258 = cljs.core.get.call(null,map__3124_3255__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_3256], null),cljs.core.fnil.call(null,((function (seq__3120_3250,chunk__3121_3251,count__3122_3252,i__3123_3253,seq__3113_3243,chunk__3114_3244,count__3115_3245,i__3116_3246,seq__3077_3139,chunk__3078_3140,count__3079_3141,i__3080_3142,map__3124_3254,map__3124_3255__$1,gline_3256,gcol_3257,name_3258,vec__3117_3247,column_3248,column_info_3249,vec__3110_3240,line_3241,columns_3242,seq__3077_3234__$1,temp__5457__auto___3233,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_3257], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_3241,new cljs.core.Keyword(null,"col","col",-1959363084),column_3248,new cljs.core.Keyword(null,"name","name",1843675177),name_3258], null));
});})(seq__3120_3250,chunk__3121_3251,count__3122_3252,i__3123_3253,seq__3113_3243,chunk__3114_3244,count__3115_3245,i__3116_3246,seq__3077_3139,chunk__3078_3140,count__3079_3141,i__3080_3142,map__3124_3254,map__3124_3255__$1,gline_3256,gcol_3257,name_3258,vec__3117_3247,column_3248,column_info_3249,vec__3110_3240,line_3241,columns_3242,seq__3077_3234__$1,temp__5457__auto___3233,inverted))
,cljs.core.sorted_map.call(null)));


var G__3259 = seq__3120_3250;
var G__3260 = chunk__3121_3251;
var G__3261 = count__3122_3252;
var G__3262 = (i__3123_3253 + (1));
seq__3120_3250 = G__3259;
chunk__3121_3251 = G__3260;
count__3122_3252 = G__3261;
i__3123_3253 = G__3262;
continue;
} else {
var temp__5457__auto___3263__$1 = cljs.core.seq.call(null,seq__3120_3250);
if(temp__5457__auto___3263__$1){
var seq__3120_3264__$1 = temp__5457__auto___3263__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__3120_3264__$1)){
var c__4319__auto___3265 = cljs.core.chunk_first.call(null,seq__3120_3264__$1);
var G__3266 = cljs.core.chunk_rest.call(null,seq__3120_3264__$1);
var G__3267 = c__4319__auto___3265;
var G__3268 = cljs.core.count.call(null,c__4319__auto___3265);
var G__3269 = (0);
seq__3120_3250 = G__3266;
chunk__3121_3251 = G__3267;
count__3122_3252 = G__3268;
i__3123_3253 = G__3269;
continue;
} else {
var map__3126_3270 = cljs.core.first.call(null,seq__3120_3264__$1);
var map__3126_3271__$1 = ((((!((map__3126_3270 == null)))?(((((map__3126_3270.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3126_3270.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3126_3270):map__3126_3270);
var gline_3272 = cljs.core.get.call(null,map__3126_3271__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_3273 = cljs.core.get.call(null,map__3126_3271__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_3274 = cljs.core.get.call(null,map__3126_3271__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_3272], null),cljs.core.fnil.call(null,((function (seq__3120_3250,chunk__3121_3251,count__3122_3252,i__3123_3253,seq__3113_3243,chunk__3114_3244,count__3115_3245,i__3116_3246,seq__3077_3139,chunk__3078_3140,count__3079_3141,i__3080_3142,map__3126_3270,map__3126_3271__$1,gline_3272,gcol_3273,name_3274,seq__3120_3264__$1,temp__5457__auto___3263__$1,vec__3117_3247,column_3248,column_info_3249,vec__3110_3240,line_3241,columns_3242,seq__3077_3234__$1,temp__5457__auto___3233,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_3273], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_3241,new cljs.core.Keyword(null,"col","col",-1959363084),column_3248,new cljs.core.Keyword(null,"name","name",1843675177),name_3274], null));
});})(seq__3120_3250,chunk__3121_3251,count__3122_3252,i__3123_3253,seq__3113_3243,chunk__3114_3244,count__3115_3245,i__3116_3246,seq__3077_3139,chunk__3078_3140,count__3079_3141,i__3080_3142,map__3126_3270,map__3126_3271__$1,gline_3272,gcol_3273,name_3274,seq__3120_3264__$1,temp__5457__auto___3263__$1,vec__3117_3247,column_3248,column_info_3249,vec__3110_3240,line_3241,columns_3242,seq__3077_3234__$1,temp__5457__auto___3233,inverted))
,cljs.core.sorted_map.call(null)));


var G__3275 = cljs.core.next.call(null,seq__3120_3264__$1);
var G__3276 = null;
var G__3277 = (0);
var G__3278 = (0);
seq__3120_3250 = G__3275;
chunk__3121_3251 = G__3276;
count__3122_3252 = G__3277;
i__3123_3253 = G__3278;
continue;
}
} else {
}
}
break;
}


var G__3279 = seq__3113_3243;
var G__3280 = chunk__3114_3244;
var G__3281 = count__3115_3245;
var G__3282 = (i__3116_3246 + (1));
seq__3113_3243 = G__3279;
chunk__3114_3244 = G__3280;
count__3115_3245 = G__3281;
i__3116_3246 = G__3282;
continue;
} else {
var temp__5457__auto___3283__$1 = cljs.core.seq.call(null,seq__3113_3243);
if(temp__5457__auto___3283__$1){
var seq__3113_3284__$1 = temp__5457__auto___3283__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__3113_3284__$1)){
var c__4319__auto___3285 = cljs.core.chunk_first.call(null,seq__3113_3284__$1);
var G__3286 = cljs.core.chunk_rest.call(null,seq__3113_3284__$1);
var G__3287 = c__4319__auto___3285;
var G__3288 = cljs.core.count.call(null,c__4319__auto___3285);
var G__3289 = (0);
seq__3113_3243 = G__3286;
chunk__3114_3244 = G__3287;
count__3115_3245 = G__3288;
i__3116_3246 = G__3289;
continue;
} else {
var vec__3128_3290 = cljs.core.first.call(null,seq__3113_3284__$1);
var column_3291 = cljs.core.nth.call(null,vec__3128_3290,(0),null);
var column_info_3292 = cljs.core.nth.call(null,vec__3128_3290,(1),null);
var seq__3131_3293 = cljs.core.seq.call(null,column_info_3292);
var chunk__3132_3294 = null;
var count__3133_3295 = (0);
var i__3134_3296 = (0);
while(true){
if((i__3134_3296 < count__3133_3295)){
var map__3135_3297 = cljs.core._nth.call(null,chunk__3132_3294,i__3134_3296);
var map__3135_3298__$1 = ((((!((map__3135_3297 == null)))?(((((map__3135_3297.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3135_3297.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3135_3297):map__3135_3297);
var gline_3299 = cljs.core.get.call(null,map__3135_3298__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_3300 = cljs.core.get.call(null,map__3135_3298__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_3301 = cljs.core.get.call(null,map__3135_3298__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_3299], null),cljs.core.fnil.call(null,((function (seq__3131_3293,chunk__3132_3294,count__3133_3295,i__3134_3296,seq__3113_3243,chunk__3114_3244,count__3115_3245,i__3116_3246,seq__3077_3139,chunk__3078_3140,count__3079_3141,i__3080_3142,map__3135_3297,map__3135_3298__$1,gline_3299,gcol_3300,name_3301,vec__3128_3290,column_3291,column_info_3292,seq__3113_3284__$1,temp__5457__auto___3283__$1,vec__3110_3240,line_3241,columns_3242,seq__3077_3234__$1,temp__5457__auto___3233,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_3300], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_3241,new cljs.core.Keyword(null,"col","col",-1959363084),column_3291,new cljs.core.Keyword(null,"name","name",1843675177),name_3301], null));
});})(seq__3131_3293,chunk__3132_3294,count__3133_3295,i__3134_3296,seq__3113_3243,chunk__3114_3244,count__3115_3245,i__3116_3246,seq__3077_3139,chunk__3078_3140,count__3079_3141,i__3080_3142,map__3135_3297,map__3135_3298__$1,gline_3299,gcol_3300,name_3301,vec__3128_3290,column_3291,column_info_3292,seq__3113_3284__$1,temp__5457__auto___3283__$1,vec__3110_3240,line_3241,columns_3242,seq__3077_3234__$1,temp__5457__auto___3233,inverted))
,cljs.core.sorted_map.call(null)));


var G__3302 = seq__3131_3293;
var G__3303 = chunk__3132_3294;
var G__3304 = count__3133_3295;
var G__3305 = (i__3134_3296 + (1));
seq__3131_3293 = G__3302;
chunk__3132_3294 = G__3303;
count__3133_3295 = G__3304;
i__3134_3296 = G__3305;
continue;
} else {
var temp__5457__auto___3306__$2 = cljs.core.seq.call(null,seq__3131_3293);
if(temp__5457__auto___3306__$2){
var seq__3131_3307__$1 = temp__5457__auto___3306__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__3131_3307__$1)){
var c__4319__auto___3308 = cljs.core.chunk_first.call(null,seq__3131_3307__$1);
var G__3309 = cljs.core.chunk_rest.call(null,seq__3131_3307__$1);
var G__3310 = c__4319__auto___3308;
var G__3311 = cljs.core.count.call(null,c__4319__auto___3308);
var G__3312 = (0);
seq__3131_3293 = G__3309;
chunk__3132_3294 = G__3310;
count__3133_3295 = G__3311;
i__3134_3296 = G__3312;
continue;
} else {
var map__3137_3313 = cljs.core.first.call(null,seq__3131_3307__$1);
var map__3137_3314__$1 = ((((!((map__3137_3313 == null)))?(((((map__3137_3313.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3137_3313.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3137_3313):map__3137_3313);
var gline_3315 = cljs.core.get.call(null,map__3137_3314__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_3316 = cljs.core.get.call(null,map__3137_3314__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_3317 = cljs.core.get.call(null,map__3137_3314__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_3315], null),cljs.core.fnil.call(null,((function (seq__3131_3293,chunk__3132_3294,count__3133_3295,i__3134_3296,seq__3113_3243,chunk__3114_3244,count__3115_3245,i__3116_3246,seq__3077_3139,chunk__3078_3140,count__3079_3141,i__3080_3142,map__3137_3313,map__3137_3314__$1,gline_3315,gcol_3316,name_3317,seq__3131_3307__$1,temp__5457__auto___3306__$2,vec__3128_3290,column_3291,column_info_3292,seq__3113_3284__$1,temp__5457__auto___3283__$1,vec__3110_3240,line_3241,columns_3242,seq__3077_3234__$1,temp__5457__auto___3233,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_3316], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_3241,new cljs.core.Keyword(null,"col","col",-1959363084),column_3291,new cljs.core.Keyword(null,"name","name",1843675177),name_3317], null));
});})(seq__3131_3293,chunk__3132_3294,count__3133_3295,i__3134_3296,seq__3113_3243,chunk__3114_3244,count__3115_3245,i__3116_3246,seq__3077_3139,chunk__3078_3140,count__3079_3141,i__3080_3142,map__3137_3313,map__3137_3314__$1,gline_3315,gcol_3316,name_3317,seq__3131_3307__$1,temp__5457__auto___3306__$2,vec__3128_3290,column_3291,column_info_3292,seq__3113_3284__$1,temp__5457__auto___3283__$1,vec__3110_3240,line_3241,columns_3242,seq__3077_3234__$1,temp__5457__auto___3233,inverted))
,cljs.core.sorted_map.call(null)));


var G__3318 = cljs.core.next.call(null,seq__3131_3307__$1);
var G__3319 = null;
var G__3320 = (0);
var G__3321 = (0);
seq__3131_3293 = G__3318;
chunk__3132_3294 = G__3319;
count__3133_3295 = G__3320;
i__3134_3296 = G__3321;
continue;
}
} else {
}
}
break;
}


var G__3322 = cljs.core.next.call(null,seq__3113_3284__$1);
var G__3323 = null;
var G__3324 = (0);
var G__3325 = (0);
seq__3113_3243 = G__3322;
chunk__3114_3244 = G__3323;
count__3115_3245 = G__3324;
i__3116_3246 = G__3325;
continue;
}
} else {
}
}
break;
}


var G__3326 = cljs.core.next.call(null,seq__3077_3234__$1);
var G__3327 = null;
var G__3328 = (0);
var G__3329 = (0);
seq__3077_3139 = G__3326;
chunk__3078_3140 = G__3327;
count__3079_3141 = G__3328;
i__3080_3142 = G__3329;
continue;
}
} else {
}
}
break;
}

return cljs.core.deref.call(null,inverted);
});

//# sourceMappingURL=source_map.js.map
