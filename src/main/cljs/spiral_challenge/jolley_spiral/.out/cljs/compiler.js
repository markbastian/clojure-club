// Compiled by ClojureScript 1.10.238 {}
goog.provide('cljs.compiler');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.tools.reader');
goog.require('cljs.env');
goog.require('cljs.analyzer');
goog.require('cljs.source_map');
goog.require('goog.string.StringBuffer');
cljs.compiler.js_reserved = cljs.analyzer.js_reserved;
cljs.compiler.es5_GT__EQ_ = cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.comp.call(null,cljs.core.mapcat.call(null,(function (lang){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lang,cljs.core.keyword.call(null,clojure.string.replace.call(null,cljs.core.name.call(null,lang),/^ecmascript/,"es"))], null);
}))),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ecmascript5","ecmascript5",342717552),new cljs.core.Keyword(null,"ecmascript5-strict","ecmascript5-strict",888234811),new cljs.core.Keyword(null,"ecmascript6","ecmascript6",723864898),new cljs.core.Keyword(null,"ecmascript6-strict","ecmascript6-strict",-786049555),new cljs.core.Keyword(null,"ecmascript-2015","ecmascript-2015",-902254444),new cljs.core.Keyword(null,"ecmascript6-typed","ecmascript6-typed",-1978203054),new cljs.core.Keyword(null,"ecmascript-2016","ecmascript-2016",471574729),new cljs.core.Keyword(null,"ecmascript-2017","ecmascript-2017",620145058),new cljs.core.Keyword(null,"ecmascript-next","ecmascript-next",-1935155962)], null));
cljs.compiler._STAR_recompiled_STAR_ = null;
cljs.compiler._STAR_inputs_STAR_ = null;
cljs.compiler._STAR_source_map_data_STAR_ = null;
cljs.compiler._STAR_lexical_renames_STAR_ = cljs.core.PersistentArrayMap.EMPTY;
cljs.compiler.cljs_reserved_file_names = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["deps.cljs",null], null), null);
/**
 * Gets the part up to the first `.` of a namespace.
 * Returns the empty string for nil.
 * Returns the entire string if no `.` in namespace
 */
cljs.compiler.get_first_ns_segment = (function cljs$compiler$get_first_ns_segment(ns){
var ns__$1 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns)].join('');
var idx = ns__$1.indexOf(".");
if(((-1) === idx)){
return ns__$1;
} else {
return cljs.core.subs.call(null,ns__$1,(0),idx);
}
});
cljs.compiler.find_ns_starts_with = (function cljs$compiler$find_ns_starts_with(needle){
return cljs.core.reduce_kv.call(null,(function (xs,ns,_){
if(cljs.core._EQ_.call(null,needle,cljs.compiler.get_first_ns_segment.call(null,ns))){
return cljs.core.reduced.call(null,needle);
} else {
return null;
}
}),null,new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)));
});
cljs.compiler.shadow_depth = (function cljs$compiler$shadow_depth(s){
var map__3348 = s;
var map__3348__$1 = ((((!((map__3348 == null)))?(((((map__3348.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3348.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3348):map__3348);
var name = cljs.core.get.call(null,map__3348__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.call(null,map__3348__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var d = (0);
var G__3351 = info;
var map__3352 = G__3351;
var map__3352__$1 = ((((!((map__3352 == null)))?(((((map__3352.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3352.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3352):map__3352);
var shadow = cljs.core.get.call(null,map__3352__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
var d__$1 = d;
var G__3351__$1 = G__3351;
while(true){
var d__$2 = d__$1;
var map__3354 = G__3351__$1;
var map__3354__$1 = ((((!((map__3354 == null)))?(((((map__3354.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3354.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3354):map__3354);
var shadow__$1 = cljs.core.get.call(null,map__3354__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
if(cljs.core.truth_(shadow__$1)){
var G__3356 = (d__$2 + (1));
var G__3357 = shadow__$1;
d__$1 = G__3356;
G__3351__$1 = G__3357;
continue;
} else {
if(cljs.core.truth_(cljs.compiler.find_ns_starts_with.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join('')))){
return (d__$2 + (1));
} else {
return d__$2;

}
}
break;
}
});
cljs.compiler.hash_scope = (function cljs$compiler$hash_scope(s){
return cljs.core.hash_combine.call(null,cljs.core._hash.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(s)),cljs.compiler.shadow_depth.call(null,s));
});
cljs.compiler.fn_self_name = (function cljs$compiler$fn_self_name(p__3358){
var map__3359 = p__3358;
var map__3359__$1 = ((((!((map__3359 == null)))?(((((map__3359.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3359.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3359):map__3359);
var name_var = map__3359__$1;
var name = cljs.core.get.call(null,map__3359__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.call(null,map__3359__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var name__$1 = clojure.string.replace.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''),"..","_DOT__DOT_");
var map__3361 = info;
var map__3361__$1 = ((((!((map__3361 == null)))?(((((map__3361.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3361.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3361):map__3361);
var ns = cljs.core.get.call(null,map__3361__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var fn_scope = cljs.core.get.call(null,map__3361__$1,new cljs.core.Keyword(null,"fn-scope","fn-scope",-865664859));
var scoped_name = cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,"_$_",cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.comp.call(null,cljs.core.str,new cljs.core.Keyword(null,"name","name",1843675177)),fn_scope),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [name__$1], null))));
return cljs.core.symbol.call(null,cljs.compiler.munge.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.replace.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns)].join(''),".","$")),"$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(scoped_name)].join('')));
});
cljs.compiler.munge_reserved = (function cljs$compiler$munge_reserved(reserved){
return (function (s){
if(!((cljs.core.get.call(null,reserved,s) == null))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),"$"].join('');
} else {
return s;
}
});
});
cljs.compiler.munge = (function cljs$compiler$munge(var_args){
var G__3364 = arguments.length;
switch (G__3364) {
case 1:
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1 = (function (s){
return cljs.compiler.munge.call(null,s,cljs.compiler.js_reserved);
});

cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2 = (function (s,reserved){
if(cljs.analyzer.cljs_map_QMARK_.call(null,s)){
var name_var = s;
var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(name_var);
var field = new cljs.core.Keyword(null,"field","field",-1302436500).cljs$core$IFn$_invoke$arity$1(name_var);
var info = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(name_var);
if(!((new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531).cljs$core$IFn$_invoke$arity$1(info) == null))){
return cljs.compiler.fn_self_name.call(null,s);
} else {
var depth = cljs.compiler.shadow_depth.call(null,s);
var code = cljs.compiler.hash_scope.call(null,s);
var renamed = cljs.core.get.call(null,cljs.compiler._STAR_lexical_renames_STAR_,code);
var name__$1 = ((field === true)?["self__.",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''):((!((renamed == null)))?renamed:name
));
var munged_name = cljs.compiler.munge.call(null,name__$1,reserved);
if(((field === true) || ((depth === (0))))){
return munged_name;
} else {
return cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(munged_name),"__$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(depth)].join(''));
}
}
} else {
var ss = clojure.string.replace.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join(''),"..","_DOT__DOT_");
var ss__$1 = clojure.string.replace.call(null,ss,(new RegExp("\\/(.)")),".$1");
var rf = cljs.compiler.munge_reserved.call(null,reserved);
var ss__$2 = cljs.core.map.call(null,rf,clojure.string.split.call(null,ss__$1,/\./));
var ss__$3 = clojure.string.join.call(null,".",ss__$2);
var ms = cljs.core.munge_str.call(null,ss__$3);
if((s instanceof cljs.core.Symbol)){
return cljs.core.symbol.call(null,ms);
} else {
return ms;
}
}
});

cljs.compiler.munge.cljs$lang$maxFixedArity = 2;

cljs.compiler.comma_sep = (function cljs$compiler$comma_sep(xs){
return cljs.core.interpose.call(null,",",xs);
});
cljs.compiler.escape_char = (function cljs$compiler$escape_char(c){
var cp = goog.string.hashCode(c);
var G__3366 = cp;
switch (G__3366) {
case (34):
return "\\\"";

break;
case (92):
return "\\\\";

break;
case (8):
return "\\b";

break;
case (12):
return "\\f";

break;
case (10):
return "\\n";

break;
case (13):
return "\\r";

break;
case (9):
return "\\t";

break;
default:
if(((((31) < cp)) && ((cp < (127))))){
return c;
} else {
var unpadded = cp.toString((16));
var pad = cljs.core.subs.call(null,"0000",unpadded.length);
return ["\\u",cljs.core.str.cljs$core$IFn$_invoke$arity$1(pad),cljs.core.str.cljs$core$IFn$_invoke$arity$1(unpadded)].join('');
}

}
});
cljs.compiler.escape_string = (function cljs$compiler$escape_string(s){
var sb = (new goog.string.StringBuffer());
var seq__3368_3372 = cljs.core.seq.call(null,s);
var chunk__3369_3373 = null;
var count__3370_3374 = (0);
var i__3371_3375 = (0);
while(true){
if((i__3371_3375 < count__3370_3374)){
var c_3376 = cljs.core._nth.call(null,chunk__3369_3373,i__3371_3375);
sb.append(cljs.compiler.escape_char.call(null,c_3376));


var G__3377 = seq__3368_3372;
var G__3378 = chunk__3369_3373;
var G__3379 = count__3370_3374;
var G__3380 = (i__3371_3375 + (1));
seq__3368_3372 = G__3377;
chunk__3369_3373 = G__3378;
count__3370_3374 = G__3379;
i__3371_3375 = G__3380;
continue;
} else {
var temp__5457__auto___3381 = cljs.core.seq.call(null,seq__3368_3372);
if(temp__5457__auto___3381){
var seq__3368_3382__$1 = temp__5457__auto___3381;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__3368_3382__$1)){
var c__4319__auto___3383 = cljs.core.chunk_first.call(null,seq__3368_3382__$1);
var G__3384 = cljs.core.chunk_rest.call(null,seq__3368_3382__$1);
var G__3385 = c__4319__auto___3383;
var G__3386 = cljs.core.count.call(null,c__4319__auto___3383);
var G__3387 = (0);
seq__3368_3372 = G__3384;
chunk__3369_3373 = G__3385;
count__3370_3374 = G__3386;
i__3371_3375 = G__3387;
continue;
} else {
var c_3388 = cljs.core.first.call(null,seq__3368_3382__$1);
sb.append(cljs.compiler.escape_char.call(null,c_3388));


var G__3389 = cljs.core.next.call(null,seq__3368_3382__$1);
var G__3390 = null;
var G__3391 = (0);
var G__3392 = (0);
seq__3368_3372 = G__3389;
chunk__3369_3373 = G__3390;
count__3370_3374 = G__3391;
i__3371_3375 = G__3392;
continue;
}
} else {
}
}
break;
}

return sb.toString();
});
cljs.compiler.wrap_in_double_quotes = (function cljs$compiler$wrap_in_double_quotes(x){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("\""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\"")].join('');
});
if(typeof cljs.compiler.emit_STAR_ !== 'undefined'){
} else {
cljs.compiler.emit_STAR_ = (function (){var method_table__4382__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4383__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4384__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4385__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4386__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.compiler","emit*"),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4386__auto__,method_table__4382__auto__,prefer_table__4383__auto__,method_cache__4384__auto__,cached_hierarchy__4385__auto__));
})();
}
cljs.compiler.emit = (function cljs$compiler$emit(ast){
var val__1742__auto__ = cljs.env._STAR_compiler_STAR_;
if((val__1742__auto__ == null)){
cljs.env._STAR_compiler_STAR_ = cljs.env.default_compiler_env.call(null);
} else {
}

try{if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
var map__3393_3398 = ast;
var map__3393_3399__$1 = ((((!((map__3393_3398 == null)))?(((((map__3393_3398.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3393_3398.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3393_3398):map__3393_3398);
var env_3400 = cljs.core.get.call(null,map__3393_3399__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core.truth_(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(env_3400))){
var map__3395_3401 = env_3400;
var map__3395_3402__$1 = ((((!((map__3395_3401 == null)))?(((((map__3395_3401.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3395_3401.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3395_3401):map__3395_3401);
var line_3403 = cljs.core.get.call(null,map__3395_3402__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_3404 = cljs.core.get.call(null,map__3395_3402__$1,new cljs.core.Keyword(null,"column","column",2078222095));
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,((function (map__3395_3401,map__3395_3402__$1,line_3403,column_3404,map__3393_3398,map__3393_3399__$1,env_3400,val__1742__auto__){
return (function (m){
var minfo = (function (){var G__3397 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gcol","gcol",309250807),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"gline","gline",-1086242431),new cljs.core.Keyword(null,"gen-line","gen-line",589592125).cljs$core$IFn$_invoke$arity$1(m)], null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(ast),new cljs.core.Keyword(null,"var","var",-769682797))){
return cljs.core.assoc.call(null,G__3397,new cljs.core.Keyword(null,"name","name",1843675177),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(ast)))].join(''));
} else {
return G__3397;
}
})();
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source-map","source-map",1706252311),(line_3403 - (1))], null),cljs.core.fnil.call(null,((function (minfo,map__3395_3401,map__3395_3402__$1,line_3403,column_3404,map__3393_3398,map__3393_3399__$1,env_3400,val__1742__auto__){
return (function (line__$1){
return cljs.core.update_in.call(null,line__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(column_3404)?(column_3404 - (1)):(0))], null),cljs.core.fnil.call(null,((function (minfo,map__3395_3401,map__3395_3402__$1,line_3403,column_3404,map__3393_3398,map__3393_3399__$1,env_3400,val__1742__auto__){
return (function (column__$1){
return cljs.core.conj.call(null,column__$1,minfo);
});})(minfo,map__3395_3401,map__3395_3402__$1,line_3403,column_3404,map__3393_3398,map__3393_3399__$1,env_3400,val__1742__auto__))
,cljs.core.PersistentVector.EMPTY));
});})(minfo,map__3395_3401,map__3395_3402__$1,line_3403,column_3404,map__3393_3398,map__3393_3399__$1,env_3400,val__1742__auto__))
,cljs.core.sorted_map.call(null)));
});})(map__3395_3401,map__3395_3402__$1,line_3403,column_3404,map__3393_3398,map__3393_3399__$1,env_3400,val__1742__auto__))
);
} else {
}
} else {
}

return cljs.compiler.emit_STAR_.call(null,ast);
}finally {if((val__1742__auto__ == null)){
cljs.env._STAR_compiler_STAR_ = null;
} else {
}
}});
cljs.compiler.emits = (function cljs$compiler$emits(var_args){
var args__4502__auto__ = [];
var len__4499__auto___3411 = arguments.length;
var i__4500__auto___3412 = (0);
while(true){
if((i__4500__auto___3412 < len__4499__auto___3411)){
args__4502__auto__.push((arguments[i__4500__auto___3412]));

var G__3413 = (i__4500__auto___3412 + (1));
i__4500__auto___3412 = G__3413;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
var seq__3407_3414 = cljs.core.seq.call(null,xs);
var chunk__3408_3415 = null;
var count__3409_3416 = (0);
var i__3410_3417 = (0);
while(true){
if((i__3410_3417 < count__3409_3416)){
var x_3418 = cljs.core._nth.call(null,chunk__3408_3415,i__3410_3417);
if((x_3418 == null)){
} else {
if(cljs.analyzer.cljs_map_QMARK_.call(null,x_3418)){
cljs.compiler.emit.call(null,x_3418);
} else {
if(cljs.analyzer.cljs_seq_QMARK_.call(null,x_3418)){
cljs.core.apply.call(null,cljs.compiler.emits,x_3418);
} else {
if(goog.isFunction(x_3418)){
x_3418.call(null);
} else {
var s_3419 = cljs.core.print_str.call(null,x_3418);
if((cljs.compiler._STAR_source_map_data_STAR_ == null)){
} else {
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gen-col","gen-col",1901918303)], null),((function (seq__3407_3414,chunk__3408_3415,count__3409_3416,i__3410_3417,s_3419,x_3418){
return (function (p1__3405_SHARP_){
return (p1__3405_SHARP_ + cljs.core.count.call(null,s_3419));
});})(seq__3407_3414,chunk__3408_3415,count__3409_3416,i__3410_3417,s_3419,x_3418))
);
}

cljs.core.print.call(null,s_3419);

}
}
}
}


var G__3420 = seq__3407_3414;
var G__3421 = chunk__3408_3415;
var G__3422 = count__3409_3416;
var G__3423 = (i__3410_3417 + (1));
seq__3407_3414 = G__3420;
chunk__3408_3415 = G__3421;
count__3409_3416 = G__3422;
i__3410_3417 = G__3423;
continue;
} else {
var temp__5457__auto___3424 = cljs.core.seq.call(null,seq__3407_3414);
if(temp__5457__auto___3424){
var seq__3407_3425__$1 = temp__5457__auto___3424;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__3407_3425__$1)){
var c__4319__auto___3426 = cljs.core.chunk_first.call(null,seq__3407_3425__$1);
var G__3427 = cljs.core.chunk_rest.call(null,seq__3407_3425__$1);
var G__3428 = c__4319__auto___3426;
var G__3429 = cljs.core.count.call(null,c__4319__auto___3426);
var G__3430 = (0);
seq__3407_3414 = G__3427;
chunk__3408_3415 = G__3428;
count__3409_3416 = G__3429;
i__3410_3417 = G__3430;
continue;
} else {
var x_3431 = cljs.core.first.call(null,seq__3407_3425__$1);
if((x_3431 == null)){
} else {
if(cljs.analyzer.cljs_map_QMARK_.call(null,x_3431)){
cljs.compiler.emit.call(null,x_3431);
} else {
if(cljs.analyzer.cljs_seq_QMARK_.call(null,x_3431)){
cljs.core.apply.call(null,cljs.compiler.emits,x_3431);
} else {
if(goog.isFunction(x_3431)){
x_3431.call(null);
} else {
var s_3432 = cljs.core.print_str.call(null,x_3431);
if((cljs.compiler._STAR_source_map_data_STAR_ == null)){
} else {
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gen-col","gen-col",1901918303)], null),((function (seq__3407_3414,chunk__3408_3415,count__3409_3416,i__3410_3417,s_3432,x_3431,seq__3407_3425__$1,temp__5457__auto___3424){
return (function (p1__3405_SHARP_){
return (p1__3405_SHARP_ + cljs.core.count.call(null,s_3432));
});})(seq__3407_3414,chunk__3408_3415,count__3409_3416,i__3410_3417,s_3432,x_3431,seq__3407_3425__$1,temp__5457__auto___3424))
);
}

cljs.core.print.call(null,s_3432);

}
}
}
}


var G__3433 = cljs.core.next.call(null,seq__3407_3425__$1);
var G__3434 = null;
var G__3435 = (0);
var G__3436 = (0);
seq__3407_3414 = G__3433;
chunk__3408_3415 = G__3434;
count__3409_3416 = G__3435;
i__3410_3417 = G__3436;
continue;
}
} else {
}
}
break;
}

return null;
});

cljs.compiler.emits.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.compiler.emits.cljs$lang$applyTo = (function (seq3406){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq3406));
});

cljs.compiler.emitln = (function cljs$compiler$emitln(var_args){
var args__4502__auto__ = [];
var len__4499__auto___3442 = arguments.length;
var i__4500__auto___3443 = (0);
while(true){
if((i__4500__auto___3443 < len__4499__auto___3442)){
args__4502__auto__.push((arguments[i__4500__auto___3443]));

var G__3444 = (i__4500__auto___3443 + (1));
i__4500__auto___3443 = G__3444;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
cljs.core.apply.call(null,cljs.compiler.emits,xs);

var _STAR_flush_on_newline_STAR_3438_3445 = cljs.core._STAR_flush_on_newline_STAR_;
cljs.core._STAR_flush_on_newline_STAR_ = false;

try{cljs.core.println.call(null);
}finally {cljs.core._STAR_flush_on_newline_STAR_ = _STAR_flush_on_newline_STAR_3438_3445;
}
if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,(function (p__3439){
var map__3440 = p__3439;
var map__3440__$1 = ((((!((map__3440 == null)))?(((((map__3440.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3440.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3440):map__3440);
var m = map__3440__$1;
var gen_line = cljs.core.get.call(null,map__3440__$1,new cljs.core.Keyword(null,"gen-line","gen-line",589592125));
return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"gen-line","gen-line",589592125),(gen_line + (1)),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303),(0));
}));
} else {
}

return null;
});

cljs.compiler.emitln.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.compiler.emitln.cljs$lang$applyTo = (function (seq3437){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq3437));
});

cljs.compiler.emit_str = (function cljs$compiler$emit_str(expr){
var sb__4430__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_3446_3448 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_3447_3449 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_3446_3448,_STAR_print_fn_STAR_3447_3449,sb__4430__auto__){
return (function (x__4431__auto__){
return sb__4430__auto__.append(x__4431__auto__);
});})(_STAR_print_newline_STAR_3446_3448,_STAR_print_fn_STAR_3447_3449,sb__4430__auto__))
;

try{cljs.compiler.emit.call(null,expr);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_3447_3449;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_3446_3448;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4430__auto__)].join('');
});
if(typeof cljs.compiler.emit_constant !== 'undefined'){
} else {
cljs.compiler.emit_constant = (function (){var method_table__4382__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4383__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4384__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4385__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4386__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.compiler","emit-constant"),cljs.core.type,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4386__auto__,method_table__4382__auto__,prefer_table__4383__auto__,method_cache__4384__auto__,cached_hierarchy__4385__auto__));
})();
}
cljs.core._add_method.call(null,cljs.compiler.emit_constant,new cljs.core.Keyword(null,"default","default",-1987822328),(function (x){
throw cljs.core.ex_info.call(null,["failed compiling constant: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),"; ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type.call(null,x))," is not a valid ClojureScript constant."].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"constant","constant",-379609303),x,new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.type.call(null,x)], null));
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant,null,(function (x){
return cljs.compiler.emits.call(null,"null");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant,Number,(function (x){
if(cljs.core.truth_(isNaN(x))){
return cljs.compiler.emits.call(null,"NaN");
} else {
if(cljs.core.not.call(null,isFinite(x))){
return cljs.compiler.emits.call(null,(((x > (0)))?"Infinity":"-Infinity"));
} else {
return cljs.compiler.emits.call(null,"(",x,")");

}
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant,String,(function (x){
return cljs.compiler.emits.call(null,cljs.compiler.wrap_in_double_quotes.call(null,cljs.compiler.escape_string.call(null,x)));
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant,Boolean,(function (x){
return cljs.compiler.emits.call(null,(cljs.core.truth_(x)?"true":"false"));
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant,RegExp,(function (x){
if(cljs.core._EQ_.call(null,"",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join(''))){
return cljs.compiler.emits.call(null,"(new RegExp(\"\"))");
} else {
var vec__3450 = cljs.core.re_find.call(null,/^(?:\(\?([idmsux]*)\))?(.*)/,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join(''));
var _ = cljs.core.nth.call(null,vec__3450,(0),null);
var flags = cljs.core.nth.call(null,vec__3450,(1),null);
var pattern = cljs.core.nth.call(null,vec__3450,(2),null);
return cljs.compiler.emits.call(null,pattern);
}
}));
cljs.compiler.emits_keyword = (function cljs$compiler$emits_keyword(kw){
var ns = cljs.core.namespace.call(null,kw);
var name = cljs.core.name.call(null,kw);
cljs.compiler.emits.call(null,"new cljs.core.Keyword(");

cljs.compiler.emit_constant.call(null,ns);

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,name);

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,(cljs.core.truth_(ns)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''):name));

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,cljs.core.hash.call(null,kw));

return cljs.compiler.emits.call(null,")");
});
cljs.compiler.emits_symbol = (function cljs$compiler$emits_symbol(sym){
var ns = cljs.core.namespace.call(null,sym);
var name = cljs.core.name.call(null,sym);
var symstr = ((!((ns == null)))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''):name);
cljs.compiler.emits.call(null,"new cljs.core.Symbol(");

cljs.compiler.emit_constant.call(null,ns);

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,name);

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,symstr);

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,cljs.core.hash.call(null,sym));

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,null);

return cljs.compiler.emits.call(null,")");
});
cljs.core._add_method.call(null,cljs.compiler.emit_constant,cljs.core.Keyword,(function (x){
var temp__5455__auto__ = (function (){var and__3911__auto__ = new cljs.core.Keyword(null,"emit-constants","emit-constants",-476585410).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)));
if(cljs.core.truth_(and__3911__auto__)){
return x.call(null,new cljs.core.Keyword("cljs.analyzer","constant-table","cljs.analyzer/constant-table",-114131889).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)));
} else {
return and__3911__auto__;
}
})();
if(cljs.core.truth_(temp__5455__auto__)){
var value = temp__5455__auto__;
return cljs.compiler.emits.call(null,"cljs.core.",value);
} else {
return cljs.compiler.emits_keyword.call(null,x);
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant,cljs.core.Symbol,(function (x){
var temp__5455__auto__ = (function (){var and__3911__auto__ = new cljs.core.Keyword(null,"emit-constants","emit-constants",-476585410).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)));
if(cljs.core.truth_(and__3911__auto__)){
return x.call(null,new cljs.core.Keyword("cljs.analyzer","constant-table","cljs.analyzer/constant-table",-114131889).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)));
} else {
return and__3911__auto__;
}
})();
if(cljs.core.truth_(temp__5455__auto__)){
var value = temp__5455__auto__;
return cljs.compiler.emits.call(null,"cljs.core.",value);
} else {
return cljs.compiler.emits_symbol.call(null,x);
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant,Date,(function (date){
return cljs.compiler.emits.call(null,"new Date(",date.getTime(),")");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant,cljs.core.UUID,(function (uuid){
var uuid_str = uuid.toString();
return cljs.compiler.emits.call(null,"new cljs.core.UUID(\"",uuid_str,"\", ",cljs.core.hash.call(null,uuid_str),")");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"no-op","no-op",-93046065),(function (m){
return null;
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"var","var",-769682797),(function (p__3454){
var map__3455 = p__3454;
var map__3455__$1 = ((((!((map__3455 == null)))?(((((map__3455.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3455.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3455):map__3455);
var ast = map__3455__$1;
var info = cljs.core.get.call(null,map__3455__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var env = cljs.core.get.call(null,map__3455__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var form = cljs.core.get.call(null,map__3455__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var temp__5455__auto__ = new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292).cljs$core$IFn$_invoke$arity$1(ast);
if(cljs.core.truth_(temp__5455__auto__)){
var const_expr = temp__5455__auto__;
return cljs.compiler.emit.call(null,cljs.core.assoc.call(null,const_expr,new cljs.core.Keyword(null,"env","env",-1815813235),env));
} else {
var map__3457 = cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_);
var map__3457__$1 = ((((!((map__3457 == null)))?(((((map__3457.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3457.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3457):map__3457);
var cenv = map__3457__$1;
var options = cljs.core.get.call(null,map__3457__$1,new cljs.core.Keyword(null,"options","options",99638489));
var var_name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info);
var info__$1 = ((cljs.core._EQ_.call(null,cljs.core.namespace.call(null,var_name),"js"))?(function (){var js_module_name = cljs.core.get_in.call(null,cenv,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"js-module-index","js-module-index",2072061931),cljs.core.name.call(null,var_name),new cljs.core.Keyword(null,"name","name",1843675177)], null));
var or__3922__auto__ = js_module_name;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.name.call(null,var_name);
}
})():info);
if(cljs.core.truth_(new cljs.core.Keyword(null,"binding-form?","binding-form?",1728940169).cljs$core$IFn$_invoke$arity$1(ast))){
return cljs.compiler.emits.call(null,cljs.compiler.munge.call(null,ast));
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var reserved = (function (){var G__3459 = cljs.compiler.js_reserved;
if(cljs.core.truth_((function (){var and__3911__auto__ = cljs.compiler.es5_GT__EQ_.call(null,new cljs.core.Keyword(null,"language-out","language-out",334619882).cljs$core$IFn$_invoke$arity$1(options));
if(cljs.core.truth_(and__3911__auto__)){
return !((cljs.core.namespace.call(null,var_name) == null));
} else {
return and__3911__auto__;
}
})())){
return clojure.set.difference.call(null,G__3459,cljs.analyzer.es5_allowed);
} else {
return G__3459;
}
})();
var js_module = cljs.core.get_in.call(null,cenv,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"js-namespaces","js-namespaces",-471353612),(function (){var or__3922__auto__ = cljs.core.namespace.call(null,var_name);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.name.call(null,var_name);
}
})()], null));
var info__$2 = (function (){var G__3460 = info__$1;
if(cljs.core.not_EQ_.call(null,form,new cljs.core.Symbol("js","-Infinity","js/-Infinity",958706333,null))){
return cljs.compiler.munge.call(null,G__3460,reserved);
} else {
return G__3460;
}
})();
var env__3340__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__3340__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

var G__3461_3462 = new cljs.core.Keyword(null,"module-type","module-type",1392760304).cljs$core$IFn$_invoke$arity$1(js_module);
var G__3461_3463__$1 = (((G__3461_3462 instanceof cljs.core.Keyword))?G__3461_3462.fqn:null);
switch (G__3461_3463__$1) {
case "commonjs":
if(cljs.core.truth_(cljs.core.namespace.call(null,var_name))){
cljs.compiler.emits.call(null,cljs.compiler.munge.call(null,cljs.core.namespace.call(null,var_name),reserved),"[\"default\"].",cljs.compiler.munge.call(null,cljs.core.name.call(null,var_name),reserved));
} else {
cljs.compiler.emits.call(null,cljs.compiler.munge.call(null,cljs.core.name.call(null,var_name),reserved),"[\"default\"]");
}

break;
case "es6":
if(cljs.core.truth_((function (){var and__3911__auto__ = cljs.core.namespace.call(null,var_name);
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core._EQ_.call(null,"default",cljs.core.name.call(null,var_name));
} else {
return and__3911__auto__;
}
})())){
cljs.compiler.emits.call(null,cljs.compiler.munge.call(null,cljs.core.namespace.call(null,var_name),reserved),"[\"default\"]");
} else {
cljs.compiler.emits.call(null,info__$2);
}

break;
default:
cljs.compiler.emits.call(null,info__$2);

}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__3340__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"var-special","var-special",1131576802),(function (p__3465){
var map__3466 = p__3465;
var map__3466__$1 = ((((!((map__3466 == null)))?(((((map__3466.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3466.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3466):map__3466);
var arg = map__3466__$1;
var env = cljs.core.get.call(null,map__3466__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var var$ = cljs.core.get.call(null,map__3466__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var sym = cljs.core.get.call(null,map__3466__$1,new cljs.core.Keyword(null,"sym","sym",-1444860305));
var meta = cljs.core.get.call(null,map__3466__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
if(cljs.analyzer.ast_QMARK_.call(null,sym)){
} else {
throw (new Error("Assert failed: (ana/ast? sym)"));
}

if(cljs.analyzer.ast_QMARK_.call(null,meta)){
} else {
throw (new Error("Assert failed: (ana/ast? meta)"));
}

var map__3468 = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(var$);
var map__3468__$1 = ((((!((map__3468 == null)))?(((((map__3468.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3468.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3468):map__3468);
var name = cljs.core.get.call(null,map__3468__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env__3340__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__3340__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"new cljs.core.Var(function(){return ",cljs.compiler.munge.call(null,name),";},",sym,",",meta,")");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__3340__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"meta","meta",1499536964),(function (p__3470){
var map__3471 = p__3470;
var map__3471__$1 = ((((!((map__3471 == null)))?(((((map__3471.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3471.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3471):map__3471);
var expr = cljs.core.get.call(null,map__3471__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var meta = cljs.core.get.call(null,map__3471__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
var env = cljs.core.get.call(null,map__3471__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__3340__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__3340__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"cljs.core.with_meta(",expr,",",meta,")");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__3340__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.array_map_threshold = (8);
cljs.compiler.distinct_keys_QMARK_ = (function cljs$compiler$distinct_keys_QMARK_(keys){
return ((cljs.core.every_QMARK_.call(null,(function (p1__3473_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__3473_SHARP_),new cljs.core.Keyword(null,"constant","constant",-379609303));
}),keys)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,keys)),cljs.core.count.call(null,keys))));
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"map","map",1371690461),(function (p__3474){
var map__3475 = p__3474;
var map__3475__$1 = ((((!((map__3475 == null)))?(((((map__3475.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3475.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3475):map__3475);
var env = cljs.core.get.call(null,map__3475__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var keys = cljs.core.get.call(null,map__3475__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var vals = cljs.core.get.call(null,map__3475__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
var env__3340__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__3340__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if((cljs.core.count.call(null,keys) === (0))){
cljs.compiler.emits.call(null,"cljs.core.PersistentArrayMap.EMPTY");
} else {
if((cljs.core.count.call(null,keys) <= cljs.compiler.array_map_threshold)){
if(cljs.core.truth_(cljs.compiler.distinct_keys_QMARK_.call(null,keys))){
cljs.compiler.emits.call(null,"new cljs.core.PersistentArrayMap(null, ",cljs.core.count.call(null,keys),", [",cljs.compiler.comma_sep.call(null,cljs.core.interleave.call(null,keys,vals)),"], null)");
} else {
cljs.compiler.emits.call(null,"cljs.core.PersistentArrayMap.createAsIfByAssoc([",cljs.compiler.comma_sep.call(null,cljs.core.interleave.call(null,keys,vals)),"])");
}
} else {
cljs.compiler.emits.call(null,"cljs.core.PersistentHashMap.fromArrays([",cljs.compiler.comma_sep.call(null,keys),"],[",cljs.compiler.comma_sep.call(null,vals),"])");

}
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__3340__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"list","list",765357683),(function (p__3477){
var map__3478 = p__3477;
var map__3478__$1 = ((((!((map__3478 == null)))?(((((map__3478.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3478.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3478):map__3478);
var items = cljs.core.get.call(null,map__3478__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__3478__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__3340__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__3340__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.empty_QMARK_.call(null,items)){
cljs.compiler.emits.call(null,"cljs.core.List.EMPTY");
} else {
cljs.compiler.emits.call(null,"cljs.core.list(",cljs.compiler.comma_sep.call(null,items),")");
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__3340__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"vector","vector",1902966158),(function (p__3480){
var map__3481 = p__3480;
var map__3481__$1 = ((((!((map__3481 == null)))?(((((map__3481.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3481.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3481):map__3481);
var items = cljs.core.get.call(null,map__3481__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__3481__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__3340__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__3340__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.empty_QMARK_.call(null,items)){
cljs.compiler.emits.call(null,"cljs.core.PersistentVector.EMPTY");
} else {
var cnt_3483 = cljs.core.count.call(null,items);
if((cnt_3483 < (32))){
cljs.compiler.emits.call(null,"new cljs.core.PersistentVector(null, ",cnt_3483,", 5, cljs.core.PersistentVector.EMPTY_NODE, [",cljs.compiler.comma_sep.call(null,items),"], null)");
} else {
cljs.compiler.emits.call(null,"cljs.core.PersistentVector.fromArray([",cljs.compiler.comma_sep.call(null,items),"], true)");
}
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__3340__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.distinct_constants_QMARK_ = (function cljs$compiler$distinct_constants_QMARK_(items){
return ((cljs.core.every_QMARK_.call(null,(function (p1__3484_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__3484_SHARP_),new cljs.core.Keyword(null,"constant","constant",-379609303));
}),items)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,items)),cljs.core.count.call(null,items))));
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"set","set",304602554),(function (p__3485){
var map__3486 = p__3485;
var map__3486__$1 = ((((!((map__3486 == null)))?(((((map__3486.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3486.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3486):map__3486);
var items = cljs.core.get.call(null,map__3486__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__3486__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__3340__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__3340__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.empty_QMARK_.call(null,items)){
cljs.compiler.emits.call(null,"cljs.core.PersistentHashSet.EMPTY");
} else {
if(cljs.core.truth_(cljs.compiler.distinct_constants_QMARK_.call(null,items))){
cljs.compiler.emits.call(null,"new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, ",cljs.core.count.call(null,items),", [",cljs.compiler.comma_sep.call(null,cljs.core.interleave.call(null,items,cljs.core.repeat.call(null,"null"))),"], null), null)");
} else {
cljs.compiler.emits.call(null,"cljs.core.PersistentHashSet.createAsIfByAssoc([",cljs.compiler.comma_sep.call(null,items),"])");

}
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__3340__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js-value","js-value",-758336661),(function (p__3488){
var map__3489 = p__3488;
var map__3489__$1 = ((((!((map__3489 == null)))?(((((map__3489.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3489.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3489):map__3489);
var items = cljs.core.get.call(null,map__3489__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var js_type = cljs.core.get.call(null,map__3489__$1,new cljs.core.Keyword(null,"js-type","js-type",539386702));
var env = cljs.core.get.call(null,map__3489__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__3340__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__3340__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core._EQ_.call(null,js_type,new cljs.core.Keyword(null,"object","object",1474613949))){
cljs.compiler.emits.call(null,"({");

var temp__5457__auto___3507 = cljs.core.seq.call(null,items);
if(temp__5457__auto___3507){
var items_3508__$1 = temp__5457__auto___3507;
var vec__3491_3509 = items_3508__$1;
var seq__3492_3510 = cljs.core.seq.call(null,vec__3491_3509);
var first__3493_3511 = cljs.core.first.call(null,seq__3492_3510);
var seq__3492_3512__$1 = cljs.core.next.call(null,seq__3492_3510);
var vec__3494_3513 = first__3493_3511;
var k_3514 = cljs.core.nth.call(null,vec__3494_3513,(0),null);
var v_3515 = cljs.core.nth.call(null,vec__3494_3513,(1),null);
var r_3516 = seq__3492_3512__$1;
cljs.compiler.emits.call(null,"\"",cljs.core.name.call(null,k_3514),"\": ",v_3515);

var seq__3497_3517 = cljs.core.seq.call(null,r_3516);
var chunk__3498_3518 = null;
var count__3499_3519 = (0);
var i__3500_3520 = (0);
while(true){
if((i__3500_3520 < count__3499_3519)){
var vec__3501_3521 = cljs.core._nth.call(null,chunk__3498_3518,i__3500_3520);
var k_3522__$1 = cljs.core.nth.call(null,vec__3501_3521,(0),null);
var v_3523__$1 = cljs.core.nth.call(null,vec__3501_3521,(1),null);
cljs.compiler.emits.call(null,", \"",cljs.core.name.call(null,k_3522__$1),"\": ",v_3523__$1);


var G__3524 = seq__3497_3517;
var G__3525 = chunk__3498_3518;
var G__3526 = count__3499_3519;
var G__3527 = (i__3500_3520 + (1));
seq__3497_3517 = G__3524;
chunk__3498_3518 = G__3525;
count__3499_3519 = G__3526;
i__3500_3520 = G__3527;
continue;
} else {
var temp__5457__auto___3528__$1 = cljs.core.seq.call(null,seq__3497_3517);
if(temp__5457__auto___3528__$1){
var seq__3497_3529__$1 = temp__5457__auto___3528__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__3497_3529__$1)){
var c__4319__auto___3530 = cljs.core.chunk_first.call(null,seq__3497_3529__$1);
var G__3531 = cljs.core.chunk_rest.call(null,seq__3497_3529__$1);
var G__3532 = c__4319__auto___3530;
var G__3533 = cljs.core.count.call(null,c__4319__auto___3530);
var G__3534 = (0);
seq__3497_3517 = G__3531;
chunk__3498_3518 = G__3532;
count__3499_3519 = G__3533;
i__3500_3520 = G__3534;
continue;
} else {
var vec__3504_3535 = cljs.core.first.call(null,seq__3497_3529__$1);
var k_3536__$1 = cljs.core.nth.call(null,vec__3504_3535,(0),null);
var v_3537__$1 = cljs.core.nth.call(null,vec__3504_3535,(1),null);
cljs.compiler.emits.call(null,", \"",cljs.core.name.call(null,k_3536__$1),"\": ",v_3537__$1);


var G__3538 = cljs.core.next.call(null,seq__3497_3529__$1);
var G__3539 = null;
var G__3540 = (0);
var G__3541 = (0);
seq__3497_3517 = G__3538;
chunk__3498_3518 = G__3539;
count__3499_3519 = G__3540;
i__3500_3520 = G__3541;
continue;
}
} else {
}
}
break;
}
} else {
}

cljs.compiler.emits.call(null,"})");
} else {
cljs.compiler.emits.call(null,"[",cljs.compiler.comma_sep.call(null,items),"]");
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__3340__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"record-value","record-value",-367500392),(function (p__3542){
var map__3543 = p__3542;
var map__3543__$1 = ((((!((map__3543 == null)))?(((((map__3543.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3543.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3543):map__3543);
var items = cljs.core.get.call(null,map__3543__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var ns = cljs.core.get.call(null,map__3543__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var name = cljs.core.get.call(null,map__3543__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.call(null,map__3543__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__3340__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__3340__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,ns,".map__GT_",name,"(",items,")");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__3340__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"constant","constant",-379609303),(function (p__3545){
var map__3546 = p__3545;
var map__3546__$1 = ((((!((map__3546 == null)))?(((((map__3546.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3546.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3546):map__3546);
var form = cljs.core.get.call(null,map__3546__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var env = cljs.core.get.call(null,map__3546__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var env__3340__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__3340__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_constant.call(null,form);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__3340__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}));
cljs.compiler.truthy_constant_QMARK_ = (function cljs$compiler$truthy_constant_QMARK_(p__3548){
var map__3549 = p__3548;
var map__3549__$1 = ((((!((map__3549 == null)))?(((((map__3549.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3549.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3549):map__3549);
var op = cljs.core.get.call(null,map__3549__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.call(null,map__3549__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var const_expr = cljs.core.get.call(null,map__3549__$1,new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292));
var or__3922__auto__ = (function (){var and__3911__auto__ = cljs.core._EQ_.call(null,op,new cljs.core.Keyword(null,"constant","constant",-379609303));
if(and__3911__auto__){
var and__3911__auto____$1 = form;
if(cljs.core.truth_(and__3911__auto____$1)){
return !(((((typeof form === 'string') && (cljs.core._EQ_.call(null,form,"")))) || (((typeof form === 'number') && ((form === (0)))))));
} else {
return and__3911__auto____$1;
}
} else {
return and__3911__auto__;
}
})();
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
var and__3911__auto__ = !((const_expr == null));
if(and__3911__auto__){
return cljs.compiler.truthy_constant_QMARK_.call(null,const_expr);
} else {
return and__3911__auto__;
}
}
});
cljs.compiler.falsey_constant_QMARK_ = (function cljs$compiler$falsey_constant_QMARK_(p__3551){
var map__3552 = p__3551;
var map__3552__$1 = ((((!((map__3552 == null)))?(((((map__3552.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3552.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3552):map__3552);
var op = cljs.core.get.call(null,map__3552__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.call(null,map__3552__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var const_expr = cljs.core.get.call(null,map__3552__$1,new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292));
var or__3922__auto__ = ((cljs.core._EQ_.call(null,op,new cljs.core.Keyword(null,"constant","constant",-379609303))) && (((form === false) || ((form == null)))));
if(or__3922__auto__){
return or__3922__auto__;
} else {
var and__3911__auto__ = !((const_expr == null));
if(and__3911__auto__){
return cljs.compiler.falsey_constant_QMARK_.call(null,const_expr);
} else {
return and__3911__auto__;
}
}
});
cljs.compiler.safe_test_QMARK_ = (function cljs$compiler$safe_test_QMARK_(env,e){
var tag = cljs.analyzer.infer_tag.call(null,env,e);
var or__3922__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"seq","seq",-177272256,null),null,new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),null], null), null).call(null,tag);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.compiler.truthy_constant_QMARK_.call(null,e);
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"if","if",-458814265),(function (p__3554){
var map__3555 = p__3554;
var map__3555__$1 = ((((!((map__3555 == null)))?(((((map__3555.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3555.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3555):map__3555);
var test = cljs.core.get.call(null,map__3555__$1,new cljs.core.Keyword(null,"test","test",577538877));
var then = cljs.core.get.call(null,map__3555__$1,new cljs.core.Keyword(null,"then","then",460598070));
var else$ = cljs.core.get.call(null,map__3555__$1,new cljs.core.Keyword(null,"else","else",-1508377146));
var env = cljs.core.get.call(null,map__3555__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var unchecked = cljs.core.get.call(null,map__3555__$1,new cljs.core.Keyword(null,"unchecked","unchecked",924418378));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
var checked = cljs.core.not.call(null,(function (){var or__3922__auto__ = unchecked;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.compiler.safe_test_QMARK_.call(null,env,test);
}
})());
if(cljs.core.truth_(cljs.compiler.truthy_constant_QMARK_.call(null,test))){
return cljs.compiler.emitln.call(null,then);
} else {
if(cljs.core.truth_(cljs.compiler.falsey_constant_QMARK_.call(null,test))){
return cljs.compiler.emitln.call(null,else$);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
return cljs.compiler.emits.call(null,"(",((checked)?"cljs.core.truth_":null),"(",test,")?",then,":",else$,")");
} else {
if(checked){
cljs.compiler.emitln.call(null,"if(cljs.core.truth_(",test,")){");
} else {
cljs.compiler.emitln.call(null,"if(",test,"){");
}

cljs.compiler.emitln.call(null,then,"} else {");

return cljs.compiler.emitln.call(null,else$,"}");
}

}
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"case*","case*",716180697),(function (p__3557){
var map__3558 = p__3557;
var map__3558__$1 = ((((!((map__3558 == null)))?(((((map__3558.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3558.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3558):map__3558);
var v = cljs.core.get.call(null,map__3558__$1,new cljs.core.Keyword(null,"v","v",21465059));
var tests = cljs.core.get.call(null,map__3558__$1,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var thens = cljs.core.get.call(null,map__3558__$1,new cljs.core.Keyword(null,"thens","thens",226631442));
var default$ = cljs.core.get.call(null,map__3558__$1,new cljs.core.Keyword(null,"default","default",-1987822328));
var env = cljs.core.get.call(null,map__3558__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env),new cljs.core.Keyword(null,"expr","expr",745722291))){
cljs.compiler.emitln.call(null,"(function(){");
} else {
}

var gs = cljs.core.gensym.call(null,"caseval__");
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,"var ",gs,";");
} else {
}

cljs.compiler.emitln.call(null,"switch (",v,") {");

var seq__3560_3578 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),cljs.core.interleave.call(null,tests,thens)));
var chunk__3561_3579 = null;
var count__3562_3580 = (0);
var i__3563_3581 = (0);
while(true){
if((i__3563_3581 < count__3562_3580)){
var vec__3564_3582 = cljs.core._nth.call(null,chunk__3561_3579,i__3563_3581);
var ts_3583 = cljs.core.nth.call(null,vec__3564_3582,(0),null);
var then_3584 = cljs.core.nth.call(null,vec__3564_3582,(1),null);
var seq__3567_3585 = cljs.core.seq.call(null,ts_3583);
var chunk__3568_3586 = null;
var count__3569_3587 = (0);
var i__3570_3588 = (0);
while(true){
if((i__3570_3588 < count__3569_3587)){
var test_3589 = cljs.core._nth.call(null,chunk__3568_3586,i__3570_3588);
cljs.compiler.emitln.call(null,"case ",test_3589,":");


var G__3590 = seq__3567_3585;
var G__3591 = chunk__3568_3586;
var G__3592 = count__3569_3587;
var G__3593 = (i__3570_3588 + (1));
seq__3567_3585 = G__3590;
chunk__3568_3586 = G__3591;
count__3569_3587 = G__3592;
i__3570_3588 = G__3593;
continue;
} else {
var temp__5457__auto___3594 = cljs.core.seq.call(null,seq__3567_3585);
if(temp__5457__auto___3594){
var seq__3567_3595__$1 = temp__5457__auto___3594;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__3567_3595__$1)){
var c__4319__auto___3596 = cljs.core.chunk_first.call(null,seq__3567_3595__$1);
var G__3597 = cljs.core.chunk_rest.call(null,seq__3567_3595__$1);
var G__3598 = c__4319__auto___3596;
var G__3599 = cljs.core.count.call(null,c__4319__auto___3596);
var G__3600 = (0);
seq__3567_3585 = G__3597;
chunk__3568_3586 = G__3598;
count__3569_3587 = G__3599;
i__3570_3588 = G__3600;
continue;
} else {
var test_3601 = cljs.core.first.call(null,seq__3567_3595__$1);
cljs.compiler.emitln.call(null,"case ",test_3601,":");


var G__3602 = cljs.core.next.call(null,seq__3567_3595__$1);
var G__3603 = null;
var G__3604 = (0);
var G__3605 = (0);
seq__3567_3585 = G__3602;
chunk__3568_3586 = G__3603;
count__3569_3587 = G__3604;
i__3570_3588 = G__3605;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",then_3584);
} else {
cljs.compiler.emitln.call(null,then_3584);
}

cljs.compiler.emitln.call(null,"break;");


var G__3606 = seq__3560_3578;
var G__3607 = chunk__3561_3579;
var G__3608 = count__3562_3580;
var G__3609 = (i__3563_3581 + (1));
seq__3560_3578 = G__3606;
chunk__3561_3579 = G__3607;
count__3562_3580 = G__3608;
i__3563_3581 = G__3609;
continue;
} else {
var temp__5457__auto___3610 = cljs.core.seq.call(null,seq__3560_3578);
if(temp__5457__auto___3610){
var seq__3560_3611__$1 = temp__5457__auto___3610;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__3560_3611__$1)){
var c__4319__auto___3612 = cljs.core.chunk_first.call(null,seq__3560_3611__$1);
var G__3613 = cljs.core.chunk_rest.call(null,seq__3560_3611__$1);
var G__3614 = c__4319__auto___3612;
var G__3615 = cljs.core.count.call(null,c__4319__auto___3612);
var G__3616 = (0);
seq__3560_3578 = G__3613;
chunk__3561_3579 = G__3614;
count__3562_3580 = G__3615;
i__3563_3581 = G__3616;
continue;
} else {
var vec__3571_3617 = cljs.core.first.call(null,seq__3560_3611__$1);
var ts_3618 = cljs.core.nth.call(null,vec__3571_3617,(0),null);
var then_3619 = cljs.core.nth.call(null,vec__3571_3617,(1),null);
var seq__3574_3620 = cljs.core.seq.call(null,ts_3618);
var chunk__3575_3621 = null;
var count__3576_3622 = (0);
var i__3577_3623 = (0);
while(true){
if((i__3577_3623 < count__3576_3622)){
var test_3624 = cljs.core._nth.call(null,chunk__3575_3621,i__3577_3623);
cljs.compiler.emitln.call(null,"case ",test_3624,":");


var G__3625 = seq__3574_3620;
var G__3626 = chunk__3575_3621;
var G__3627 = count__3576_3622;
var G__3628 = (i__3577_3623 + (1));
seq__3574_3620 = G__3625;
chunk__3575_3621 = G__3626;
count__3576_3622 = G__3627;
i__3577_3623 = G__3628;
continue;
} else {
var temp__5457__auto___3629__$1 = cljs.core.seq.call(null,seq__3574_3620);
if(temp__5457__auto___3629__$1){
var seq__3574_3630__$1 = temp__5457__auto___3629__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__3574_3630__$1)){
var c__4319__auto___3631 = cljs.core.chunk_first.call(null,seq__3574_3630__$1);
var G__3632 = cljs.core.chunk_rest.call(null,seq__3574_3630__$1);
var G__3633 = c__4319__auto___3631;
var G__3634 = cljs.core.count.call(null,c__4319__auto___3631);
var G__3635 = (0);
seq__3574_3620 = G__3632;
chunk__3575_3621 = G__3633;
count__3576_3622 = G__3634;
i__3577_3623 = G__3635;
continue;
} else {
var test_3636 = cljs.core.first.call(null,seq__3574_3630__$1);
cljs.compiler.emitln.call(null,"case ",test_3636,":");


var G__3637 = cljs.core.next.call(null,seq__3574_3630__$1);
var G__3638 = null;
var G__3639 = (0);
var G__3640 = (0);
seq__3574_3620 = G__3637;
chunk__3575_3621 = G__3638;
count__3576_3622 = G__3639;
i__3577_3623 = G__3640;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",then_3619);
} else {
cljs.compiler.emitln.call(null,then_3619);
}

cljs.compiler.emitln.call(null,"break;");


var G__3641 = cljs.core.next.call(null,seq__3560_3611__$1);
var G__3642 = null;
var G__3643 = (0);
var G__3644 = (0);
seq__3560_3578 = G__3641;
chunk__3561_3579 = G__3642;
count__3562_3580 = G__3643;
i__3563_3581 = G__3644;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(default$)){
cljs.compiler.emitln.call(null,"default:");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",default$);
} else {
cljs.compiler.emitln.call(null,default$);
}
} else {
}

cljs.compiler.emitln.call(null,"}");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emitln.call(null,"return ",gs,";})()");
} else {
return null;
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"throw","throw",-1044625833),(function (p__3645){
var map__3646 = p__3645;
var map__3646__$1 = ((((!((map__3646 == null)))?(((((map__3646.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3646.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3646):map__3646);
var throw$ = cljs.core.get.call(null,map__3646__$1,new cljs.core.Keyword(null,"throw","throw",-1044625833));
var env = cljs.core.get.call(null,map__3646__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emits.call(null,"(function(){throw ",throw$,"})()");
} else {
return cljs.compiler.emitln.call(null,"throw ",throw$,";");
}
}));
cljs.compiler.base_types = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 15, ["boolean",null,"object",null,"*",null,"string",null,"Object",null,"Number",null,"null",null,"Date",null,"number",null,"String",null,"RegExp",null,"...*",null,"Array",null,"array",null,"Boolean",null], null), null);
cljs.compiler.mapped_types = new cljs.core.PersistentArrayMap(null, 1, ["nil","null"], null);
cljs.compiler.resolve_type = (function cljs$compiler$resolve_type(env,t){
if(cljs.core.truth_(cljs.core.get.call(null,cljs.compiler.base_types,t))){
return t;
} else {
if(cljs.core.truth_(cljs.core.get.call(null,cljs.compiler.mapped_types,t))){
return cljs.core.get.call(null,cljs.compiler.mapped_types,t);
} else {
if(cljs.core.truth_(goog.string.startsWith(t,"!"))){
return ["!",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.resolve_type.call(null,env,cljs.core.subs.call(null,t,(1))))].join('');
} else {
if(cljs.core.truth_(goog.string.startsWith(t,"{"))){
return t;
} else {
if(cljs.core.truth_(goog.string.startsWith(t,"function"))){
var idx = t.lastIndexOf(":");
var vec__3649 = ((!(((-1) === idx)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.call(null,t,(0),idx),cljs.core.subs.call(null,t,(idx + (1)),cljs.core.count.call(null,t))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,null], null));
var fstr = cljs.core.nth.call(null,vec__3649,(0),null);
var rstr = cljs.core.nth.call(null,vec__3649,(1),null);
var ret_t = (cljs.core.truth_(rstr)?cljs.compiler.resolve_type.call(null,env,rstr):null);
var axstr = cljs.core.subs.call(null,fstr,(9),(cljs.core.count.call(null,fstr) - (1)));
var args_ts = ((clojure.string.blank_QMARK_.call(null,axstr))?null:cljs.core.map.call(null,cljs.core.comp.call(null,((function (idx,vec__3649,fstr,rstr,ret_t,axstr){
return (function (p1__3648_SHARP_){
return cljs.compiler.resolve_type.call(null,env,p1__3648_SHARP_);
});})(idx,vec__3649,fstr,rstr,ret_t,axstr))
,clojure.string.trim),clojure.string.split.call(null,axstr,/,/)));
var G__3652 = ["function(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null,",",args_ts)),")"].join('');
if(cljs.core.truth_(ret_t)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__3652),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ret_t)].join('');
} else {
return G__3652;
}
} else {
if(cljs.core.truth_(goog.string.endsWith(t,"="))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.resolve_type.call(null,env,cljs.core.subs.call(null,t,(0),(cljs.core.count.call(null,t) - (1))))),"="].join('');
} else {
return cljs.compiler.munge.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.call(null,env,cljs.core.symbol.call(null,t))))].join(''));

}
}
}
}
}
}
});
cljs.compiler.resolve_types = (function cljs$compiler$resolve_types(env,ts){
var ts__$1 = cljs.core.subs.call(null,clojure.string.trim.call(null,ts),(1),(cljs.core.count.call(null,ts) - (1)));
var xs = clojure.string.split.call(null,ts__$1,/\|/);
return ["{",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null,"|",cljs.core.map.call(null,((function (ts__$1,xs){
return (function (p1__3653_SHARP_){
return cljs.compiler.resolve_type.call(null,env,p1__3653_SHARP_);
});})(ts__$1,xs))
,xs))),"}"].join('');
});
cljs.compiler.munge_param_return = (function cljs$compiler$munge_param_return(env,line){
if(cljs.core.truth_(cljs.core.re_find.call(null,/@param/,line))){
var vec__3654 = cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,clojure.string.trim.call(null,line),/ /));
var seq__3655 = cljs.core.seq.call(null,vec__3654);
var first__3656 = cljs.core.first.call(null,seq__3655);
var seq__3655__$1 = cljs.core.next.call(null,seq__3655);
var p = first__3656;
var first__3656__$1 = cljs.core.first.call(null,seq__3655__$1);
var seq__3655__$2 = cljs.core.next.call(null,seq__3655__$1);
var ts = first__3656__$1;
var first__3656__$2 = cljs.core.first.call(null,seq__3655__$2);
var seq__3655__$3 = cljs.core.next.call(null,seq__3655__$2);
var n = first__3656__$2;
var xs = seq__3655__$3;
if(cljs.core.truth_((function (){var and__3911__auto__ = cljs.core._EQ_.call(null,"@param",p);
if(and__3911__auto__){
var and__3911__auto____$1 = ts;
if(cljs.core.truth_(and__3911__auto____$1)){
return goog.string.startsWith(ts,"{");
} else {
return and__3911__auto____$1;
}
} else {
return and__3911__auto__;
}
})())){
return clojure.string.join.call(null," ",cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.compiler.resolve_types.call(null,env,ts),cljs.compiler.munge.call(null,n)], null),xs));
} else {
return line;
}
} else {
if(cljs.core.truth_(cljs.core.re_find.call(null,/@return/,line))){
var vec__3657 = cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,clojure.string.trim.call(null,line),/ /));
var seq__3658 = cljs.core.seq.call(null,vec__3657);
var first__3659 = cljs.core.first.call(null,seq__3658);
var seq__3658__$1 = cljs.core.next.call(null,seq__3658);
var p = first__3659;
var first__3659__$1 = cljs.core.first.call(null,seq__3658__$1);
var seq__3658__$2 = cljs.core.next.call(null,seq__3658__$1);
var ts = first__3659__$1;
var xs = seq__3658__$2;
if(cljs.core.truth_((function (){var and__3911__auto__ = cljs.core._EQ_.call(null,"@return",p);
if(and__3911__auto__){
var and__3911__auto____$1 = ts;
if(cljs.core.truth_(and__3911__auto____$1)){
return goog.string.startsWith(ts,"{");
} else {
return and__3911__auto____$1;
}
} else {
return and__3911__auto__;
}
})())){
return clojure.string.join.call(null," ",cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.compiler.resolve_types.call(null,env,ts)], null),xs));
} else {
return line;
}
} else {
return line;

}
}
});
cljs.compiler.checking_types_QMARK_ = (function cljs$compiler$checking_types_QMARK_(){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"warning","warning",-1685650671),null,new cljs.core.Keyword(null,"error","error",-978969032),null], null), null).call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"closure-warnings","closure-warnings",1362834211),new cljs.core.Keyword(null,"check-types","check-types",-833794607)], null)));
});
/**
 * Emit a nicely formatted comment string.
 */
cljs.compiler.emit_comment = (function cljs$compiler$emit_comment(var_args){
var G__3662 = arguments.length;
switch (G__3662) {
case 2:
return cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$2 = (function (doc,jsdoc){
return cljs.compiler.emit_comment.call(null,null,doc,jsdoc);
});

cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$3 = (function (env,doc,jsdoc){
var docs = (cljs.core.truth_(doc)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [doc], null):null);
var docs__$1 = (cljs.core.truth_(jsdoc)?cljs.core.concat.call(null,docs,jsdoc):docs);
var docs__$2 = cljs.core.remove.call(null,cljs.core.nil_QMARK_,docs__$1);
var print_comment_lines = ((function (docs,docs__$1,docs__$2){
return (function cljs$compiler$print_comment_lines(e){
var vec__3670 = cljs.core.map.call(null,((function (docs,docs__$1,docs__$2){
return (function (p1__3660_SHARP_){
if(cljs.core.truth_(cljs.compiler.checking_types_QMARK_.call(null))){
return cljs.compiler.munge_param_return.call(null,env,p1__3660_SHARP_);
} else {
return p1__3660_SHARP_;
}
});})(docs,docs__$1,docs__$2))
,clojure.string.split_lines.call(null,e));
var seq__3671 = cljs.core.seq.call(null,vec__3670);
var first__3672 = cljs.core.first.call(null,seq__3671);
var seq__3671__$1 = cljs.core.next.call(null,seq__3671);
var x = first__3672;
var ys = seq__3671__$1;
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,x,"*/","* /"));

var seq__3673 = cljs.core.seq.call(null,ys);
var chunk__3674 = null;
var count__3675 = (0);
var i__3676 = (0);
while(true){
if((i__3676 < count__3675)){
var next_line = cljs.core._nth.call(null,chunk__3674,i__3676);
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,clojure.string.replace.call(null,next_line,/^   /,""),"*/","* /"));


var G__3682 = seq__3673;
var G__3683 = chunk__3674;
var G__3684 = count__3675;
var G__3685 = (i__3676 + (1));
seq__3673 = G__3682;
chunk__3674 = G__3683;
count__3675 = G__3684;
i__3676 = G__3685;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__3673);
if(temp__5457__auto__){
var seq__3673__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__3673__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__3673__$1);
var G__3686 = cljs.core.chunk_rest.call(null,seq__3673__$1);
var G__3687 = c__4319__auto__;
var G__3688 = cljs.core.count.call(null,c__4319__auto__);
var G__3689 = (0);
seq__3673 = G__3686;
chunk__3674 = G__3687;
count__3675 = G__3688;
i__3676 = G__3689;
continue;
} else {
var next_line = cljs.core.first.call(null,seq__3673__$1);
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,clojure.string.replace.call(null,next_line,/^   /,""),"*/","* /"));


var G__3690 = cljs.core.next.call(null,seq__3673__$1);
var G__3691 = null;
var G__3692 = (0);
var G__3693 = (0);
seq__3673 = G__3690;
chunk__3674 = G__3691;
count__3675 = G__3692;
i__3676 = G__3693;
continue;
}
} else {
return null;
}
}
break;
}
});})(docs,docs__$1,docs__$2))
;
if(cljs.core.seq.call(null,docs__$2)){
cljs.compiler.emitln.call(null,"/**");

var seq__3677_3694 = cljs.core.seq.call(null,docs__$2);
var chunk__3678_3695 = null;
var count__3679_3696 = (0);
var i__3680_3697 = (0);
while(true){
if((i__3680_3697 < count__3679_3696)){
var e_3698 = cljs.core._nth.call(null,chunk__3678_3695,i__3680_3697);
if(cljs.core.truth_(e_3698)){
print_comment_lines.call(null,e_3698);
} else {
}


var G__3699 = seq__3677_3694;
var G__3700 = chunk__3678_3695;
var G__3701 = count__3679_3696;
var G__3702 = (i__3680_3697 + (1));
seq__3677_3694 = G__3699;
chunk__3678_3695 = G__3700;
count__3679_3696 = G__3701;
i__3680_3697 = G__3702;
continue;
} else {
var temp__5457__auto___3703 = cljs.core.seq.call(null,seq__3677_3694);
if(temp__5457__auto___3703){
var seq__3677_3704__$1 = temp__5457__auto___3703;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__3677_3704__$1)){
var c__4319__auto___3705 = cljs.core.chunk_first.call(null,seq__3677_3704__$1);
var G__3706 = cljs.core.chunk_rest.call(null,seq__3677_3704__$1);
var G__3707 = c__4319__auto___3705;
var G__3708 = cljs.core.count.call(null,c__4319__auto___3705);
var G__3709 = (0);
seq__3677_3694 = G__3706;
chunk__3678_3695 = G__3707;
count__3679_3696 = G__3708;
i__3680_3697 = G__3709;
continue;
} else {
var e_3710 = cljs.core.first.call(null,seq__3677_3704__$1);
if(cljs.core.truth_(e_3710)){
print_comment_lines.call(null,e_3710);
} else {
}


var G__3711 = cljs.core.next.call(null,seq__3677_3704__$1);
var G__3712 = null;
var G__3713 = (0);
var G__3714 = (0);
seq__3677_3694 = G__3711;
chunk__3678_3695 = G__3712;
count__3679_3696 = G__3713;
i__3680_3697 = G__3714;
continue;
}
} else {
}
}
break;
}

return cljs.compiler.emitln.call(null," */");
} else {
return null;
}
});

cljs.compiler.emit_comment.cljs$lang$maxFixedArity = 3;

cljs.compiler.valid_define_value_QMARK_ = (function cljs$compiler$valid_define_value_QMARK_(x){
return ((typeof x === 'string') || (x === true) || (x === false) || (typeof x === 'number'));
});
cljs.compiler.get_define = (function cljs$compiler$get_define(mname,jsdoc){
var opts = cljs.core.get.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.Keyword(null,"options","options",99638489));
var and__3911__auto__ = cljs.core.some.call(null,((function (opts){
return (function (p1__3716_SHARP_){
return goog.string.startsWith(p1__3716_SHARP_,"@define");
});})(opts))
,jsdoc);
if(cljs.core.truth_(and__3911__auto__)){
var and__3911__auto____$1 = opts;
if(cljs.core.truth_(and__3911__auto____$1)){
var and__3911__auto____$2 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"optimizations","optimizations",-2047476854).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"none","none",1333468478));
if(and__3911__auto____$2){
var define = cljs.core.get_in.call(null,opts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"closure-defines","closure-defines",-1213856476),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname)].join('')], null));
if(cljs.core.truth_(cljs.compiler.valid_define_value_QMARK_.call(null,define))){
return cljs.core.pr_str.call(null,define);
} else {
return null;
}
} else {
return and__3911__auto____$2;
}
} else {
return and__3911__auto____$1;
}
} else {
return and__3911__auto__;
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"def","def",-1043430536),(function (p__3717){
var map__3718 = p__3717;
var map__3718__$1 = ((((!((map__3718 == null)))?(((((map__3718.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3718.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3718):map__3718);
var name = cljs.core.get.call(null,map__3718__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var var$ = cljs.core.get.call(null,map__3718__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var init = cljs.core.get.call(null,map__3718__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
var env = cljs.core.get.call(null,map__3718__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var doc = cljs.core.get.call(null,map__3718__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var jsdoc = cljs.core.get.call(null,map__3718__$1,new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516));
var export$ = cljs.core.get.call(null,map__3718__$1,new cljs.core.Keyword(null,"export","export",214356590));
var test = cljs.core.get.call(null,map__3718__$1,new cljs.core.Keyword(null,"test","test",577538877));
var var_ast = cljs.core.get.call(null,map__3718__$1,new cljs.core.Keyword(null,"var-ast","var-ast",1200379319));
if(cljs.core.truth_((function (){var or__3922__auto__ = init;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(env);
}
})())){
var mname = cljs.compiler.munge.call(null,name);
cljs.compiler.emit_comment.call(null,env,doc,cljs.core.concat.call(null,jsdoc,new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516).cljs$core$IFn$_invoke$arity$1(init)));

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,"return (");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,"(function (){");
} else {
}

cljs.compiler.emits.call(null,var$);

if(cljs.core.truth_(init)){
cljs.compiler.emits.call(null," = ",(function (){var temp__5455__auto__ = cljs.compiler.get_define.call(null,mname,jsdoc);
if(cljs.core.truth_(temp__5455__auto__)){
var define = temp__5455__auto__;
return define;
} else {
return init;
}
})());
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,"; return (");

cljs.compiler.emits.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"var-special","var-special",1131576802),new cljs.core.Keyword(null,"env","env",-1815813235),cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291))], null),var_ast));

cljs.compiler.emitln.call(null,");})()");
} else {
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,")");
} else {
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
} else {
cljs.compiler.emitln.call(null,";");
}

if(cljs.core.truth_(export$)){
cljs.compiler.emitln.call(null,"goog.exportSymbol('",cljs.compiler.munge.call(null,export$),"', ",mname,");");
} else {
}

if(cljs.core.truth_((function (){var and__3911__auto__ = cljs.analyzer._STAR_load_tests_STAR_;
if(and__3911__auto__){
return test;
} else {
return and__3911__auto__;
}
})())){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,";");
} else {
}

return cljs.compiler.emitln.call(null,var$,".cljs$lang$test = ",test,";");
} else {
return null;
}
} else {
return null;
}
}));
cljs.compiler.emit_apply_to = (function cljs$compiler$emit_apply_to(p__3720){
var map__3721 = p__3720;
var map__3721__$1 = ((((!((map__3721 == null)))?(((((map__3721.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3721.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3721):map__3721);
var name = cljs.core.get.call(null,map__3721__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.call(null,map__3721__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.call(null,map__3721__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var arglist = cljs.core.gensym.call(null,"arglist__");
var delegate_name = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,name)),"__delegate"].join('');
cljs.compiler.emitln.call(null,"(function (",arglist,"){");

var seq__3723_3741 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,cljs.core.vector,cljs.core.drop_last.call(null,(2),params)));
var chunk__3724_3742 = null;
var count__3725_3743 = (0);
var i__3726_3744 = (0);
while(true){
if((i__3726_3744 < count__3725_3743)){
var vec__3727_3745 = cljs.core._nth.call(null,chunk__3724_3742,i__3726_3744);
var i_3746 = cljs.core.nth.call(null,vec__3727_3745,(0),null);
var param_3747 = cljs.core.nth.call(null,vec__3727_3745,(1),null);
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,param_3747);

cljs.compiler.emits.call(null," = cljs.core.first(");

cljs.compiler.emitln.call(null,arglist,");");

cljs.compiler.emitln.call(null,arglist," = cljs.core.next(",arglist,");");


var G__3748 = seq__3723_3741;
var G__3749 = chunk__3724_3742;
var G__3750 = count__3725_3743;
var G__3751 = (i__3726_3744 + (1));
seq__3723_3741 = G__3748;
chunk__3724_3742 = G__3749;
count__3725_3743 = G__3750;
i__3726_3744 = G__3751;
continue;
} else {
var temp__5457__auto___3752 = cljs.core.seq.call(null,seq__3723_3741);
if(temp__5457__auto___3752){
var seq__3723_3753__$1 = temp__5457__auto___3752;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__3723_3753__$1)){
var c__4319__auto___3754 = cljs.core.chunk_first.call(null,seq__3723_3753__$1);
var G__3755 = cljs.core.chunk_rest.call(null,seq__3723_3753__$1);
var G__3756 = c__4319__auto___3754;
var G__3757 = cljs.core.count.call(null,c__4319__auto___3754);
var G__3758 = (0);
seq__3723_3741 = G__3755;
chunk__3724_3742 = G__3756;
count__3725_3743 = G__3757;
i__3726_3744 = G__3758;
continue;
} else {
var vec__3730_3759 = cljs.core.first.call(null,seq__3723_3753__$1);
var i_3760 = cljs.core.nth.call(null,vec__3730_3759,(0),null);
var param_3761 = cljs.core.nth.call(null,vec__3730_3759,(1),null);
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,param_3761);

cljs.compiler.emits.call(null," = cljs.core.first(");

cljs.compiler.emitln.call(null,arglist,");");

cljs.compiler.emitln.call(null,arglist," = cljs.core.next(",arglist,");");


var G__3762 = cljs.core.next.call(null,seq__3723_3753__$1);
var G__3763 = null;
var G__3764 = (0);
var G__3765 = (0);
seq__3723_3741 = G__3762;
chunk__3724_3742 = G__3763;
count__3725_3743 = G__3764;
i__3726_3744 = G__3765;
continue;
}
} else {
}
}
break;
}

if(((1) < cljs.core.count.call(null,params))){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,cljs.core.butlast.call(null,params)));

cljs.compiler.emitln.call(null," = cljs.core.first(",arglist,");");

cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,params));

cljs.compiler.emitln.call(null," = cljs.core.rest(",arglist,");");

cljs.compiler.emits.call(null,"return ",delegate_name,"(");

var seq__3733_3766 = cljs.core.seq.call(null,params);
var chunk__3734_3767 = null;
var count__3735_3768 = (0);
var i__3736_3769 = (0);
while(true){
if((i__3736_3769 < count__3735_3768)){
var param_3770 = cljs.core._nth.call(null,chunk__3734_3767,i__3736_3769);
cljs.compiler.emit.call(null,param_3770);

if(cljs.core._EQ_.call(null,param_3770,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__3771 = seq__3733_3766;
var G__3772 = chunk__3734_3767;
var G__3773 = count__3735_3768;
var G__3774 = (i__3736_3769 + (1));
seq__3733_3766 = G__3771;
chunk__3734_3767 = G__3772;
count__3735_3768 = G__3773;
i__3736_3769 = G__3774;
continue;
} else {
var temp__5457__auto___3775 = cljs.core.seq.call(null,seq__3733_3766);
if(temp__5457__auto___3775){
var seq__3733_3776__$1 = temp__5457__auto___3775;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__3733_3776__$1)){
var c__4319__auto___3777 = cljs.core.chunk_first.call(null,seq__3733_3776__$1);
var G__3778 = cljs.core.chunk_rest.call(null,seq__3733_3776__$1);
var G__3779 = c__4319__auto___3777;
var G__3780 = cljs.core.count.call(null,c__4319__auto___3777);
var G__3781 = (0);
seq__3733_3766 = G__3778;
chunk__3734_3767 = G__3779;
count__3735_3768 = G__3780;
i__3736_3769 = G__3781;
continue;
} else {
var param_3782 = cljs.core.first.call(null,seq__3733_3776__$1);
cljs.compiler.emit.call(null,param_3782);

if(cljs.core._EQ_.call(null,param_3782,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__3783 = cljs.core.next.call(null,seq__3733_3776__$1);
var G__3784 = null;
var G__3785 = (0);
var G__3786 = (0);
seq__3733_3766 = G__3783;
chunk__3734_3767 = G__3784;
count__3735_3768 = G__3785;
i__3736_3769 = G__3786;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,");");
} else {
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,params));

cljs.compiler.emitln.call(null," = cljs.core.seq(",arglist,");");

cljs.compiler.emits.call(null,"return ",delegate_name,"(");

var seq__3737_3787 = cljs.core.seq.call(null,params);
var chunk__3738_3788 = null;
var count__3739_3789 = (0);
var i__3740_3790 = (0);
while(true){
if((i__3740_3790 < count__3739_3789)){
var param_3791 = cljs.core._nth.call(null,chunk__3738_3788,i__3740_3790);
cljs.compiler.emit.call(null,param_3791);

if(cljs.core._EQ_.call(null,param_3791,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__3792 = seq__3737_3787;
var G__3793 = chunk__3738_3788;
var G__3794 = count__3739_3789;
var G__3795 = (i__3740_3790 + (1));
seq__3737_3787 = G__3792;
chunk__3738_3788 = G__3793;
count__3739_3789 = G__3794;
i__3740_3790 = G__3795;
continue;
} else {
var temp__5457__auto___3796 = cljs.core.seq.call(null,seq__3737_3787);
if(temp__5457__auto___3796){
var seq__3737_3797__$1 = temp__5457__auto___3796;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__3737_3797__$1)){
var c__4319__auto___3798 = cljs.core.chunk_first.call(null,seq__3737_3797__$1);
var G__3799 = cljs.core.chunk_rest.call(null,seq__3737_3797__$1);
var G__3800 = c__4319__auto___3798;
var G__3801 = cljs.core.count.call(null,c__4319__auto___3798);
var G__3802 = (0);
seq__3737_3787 = G__3799;
chunk__3738_3788 = G__3800;
count__3739_3789 = G__3801;
i__3740_3790 = G__3802;
continue;
} else {
var param_3803 = cljs.core.first.call(null,seq__3737_3797__$1);
cljs.compiler.emit.call(null,param_3803);

if(cljs.core._EQ_.call(null,param_3803,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__3804 = cljs.core.next.call(null,seq__3737_3797__$1);
var G__3805 = null;
var G__3806 = (0);
var G__3807 = (0);
seq__3737_3787 = G__3804;
chunk__3738_3788 = G__3805;
count__3739_3789 = G__3806;
i__3740_3790 = G__3807;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,");");
}

return cljs.compiler.emits.call(null,"})");
});
cljs.compiler.emit_fn_params = (function cljs$compiler$emit_fn_params(params){
var seq__3808 = cljs.core.seq.call(null,params);
var chunk__3809 = null;
var count__3810 = (0);
var i__3811 = (0);
while(true){
if((i__3811 < count__3810)){
var param = cljs.core._nth.call(null,chunk__3809,i__3811);
cljs.compiler.emit.call(null,param);

if(cljs.core._EQ_.call(null,param,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__3812 = seq__3808;
var G__3813 = chunk__3809;
var G__3814 = count__3810;
var G__3815 = (i__3811 + (1));
seq__3808 = G__3812;
chunk__3809 = G__3813;
count__3810 = G__3814;
i__3811 = G__3815;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__3808);
if(temp__5457__auto__){
var seq__3808__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__3808__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__3808__$1);
var G__3816 = cljs.core.chunk_rest.call(null,seq__3808__$1);
var G__3817 = c__4319__auto__;
var G__3818 = cljs.core.count.call(null,c__4319__auto__);
var G__3819 = (0);
seq__3808 = G__3816;
chunk__3809 = G__3817;
count__3810 = G__3818;
i__3811 = G__3819;
continue;
} else {
var param = cljs.core.first.call(null,seq__3808__$1);
cljs.compiler.emit.call(null,param);

if(cljs.core._EQ_.call(null,param,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__3820 = cljs.core.next.call(null,seq__3808__$1);
var G__3821 = null;
var G__3822 = (0);
var G__3823 = (0);
seq__3808 = G__3820;
chunk__3809 = G__3821;
count__3810 = G__3822;
i__3811 = G__3823;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.compiler.emit_fn_method = (function cljs$compiler$emit_fn_method(p__3824){
var map__3825 = p__3824;
var map__3825__$1 = ((((!((map__3825 == null)))?(((((map__3825.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3825.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3825):map__3825);
var type = cljs.core.get.call(null,map__3825__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.call(null,map__3825__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var variadic = cljs.core.get.call(null,map__3825__$1,new cljs.core.Keyword(null,"variadic","variadic",882626057));
var params = cljs.core.get.call(null,map__3825__$1,new cljs.core.Keyword(null,"params","params",710516235));
var expr = cljs.core.get.call(null,map__3825__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.call(null,map__3825__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.call(null,map__3825__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var max_fixed_arity = cljs.core.get.call(null,map__3825__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var env__3340__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__3340__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"(function ",cljs.compiler.munge.call(null,name),"(");

cljs.compiler.emit_fn_params.call(null,params);

cljs.compiler.emitln.call(null,"){");

if(cljs.core.truth_(type)){
cljs.compiler.emitln.call(null,"var self__ = this;");
} else {
}

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.call(null,"while(true){");
} else {
}

cljs.compiler.emits.call(null,expr);

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.call(null,"break;");

cljs.compiler.emitln.call(null,"}");
} else {
}

cljs.compiler.emits.call(null,"})");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__3340__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
});
/**
 * Emit code that copies function arguments into an array starting at an index.
 *   Returns name of var holding the array.
 */
cljs.compiler.emit_arguments_to_array = (function cljs$compiler$emit_arguments_to_array(startslice){
if((((startslice >= (0))) && (cljs.core.integer_QMARK_.call(null,startslice)))){
} else {
throw (new Error("Assert failed: (and (>= startslice 0) (integer? startslice))"));
}

var mname = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
var i = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname),"__i"].join('');
var a = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname),"__a"].join('');
cljs.compiler.emitln.call(null,"var ",i," = 0, ",a," = new Array(arguments.length -  ",startslice,");");

cljs.compiler.emitln.call(null,"while (",i," < ",a,".length) {",a,"[",i,"] = arguments[",i," + ",startslice,"]; ++",i,";}");

return a;
});
cljs.compiler.emit_variadic_fn_method = (function cljs$compiler$emit_variadic_fn_method(p__3827){
var map__3828 = p__3827;
var map__3828__$1 = ((((!((map__3828 == null)))?(((((map__3828.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3828.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3828):map__3828);
var f = map__3828__$1;
var type = cljs.core.get.call(null,map__3828__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.call(null,map__3828__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var variadic = cljs.core.get.call(null,map__3828__$1,new cljs.core.Keyword(null,"variadic","variadic",882626057));
var params = cljs.core.get.call(null,map__3828__$1,new cljs.core.Keyword(null,"params","params",710516235));
var expr = cljs.core.get.call(null,map__3828__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.call(null,map__3828__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.call(null,map__3828__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var max_fixed_arity = cljs.core.get.call(null,map__3828__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var env__3340__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__3340__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

var name_3838__$1 = (function (){var or__3922__auto__ = name;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.gensym.call(null);
}
})();
var mname_3839 = cljs.compiler.munge.call(null,name_3838__$1);
var delegate_name_3840 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname_3839),"__delegate"].join('');
cljs.compiler.emitln.call(null,"(function() { ");

cljs.compiler.emits.call(null,"var ",delegate_name_3840," = function (");

var seq__3830_3841 = cljs.core.seq.call(null,params);
var chunk__3831_3842 = null;
var count__3832_3843 = (0);
var i__3833_3844 = (0);
while(true){
if((i__3833_3844 < count__3832_3843)){
var param_3845 = cljs.core._nth.call(null,chunk__3831_3842,i__3833_3844);
cljs.compiler.emit.call(null,param_3845);

if(cljs.core._EQ_.call(null,param_3845,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__3846 = seq__3830_3841;
var G__3847 = chunk__3831_3842;
var G__3848 = count__3832_3843;
var G__3849 = (i__3833_3844 + (1));
seq__3830_3841 = G__3846;
chunk__3831_3842 = G__3847;
count__3832_3843 = G__3848;
i__3833_3844 = G__3849;
continue;
} else {
var temp__5457__auto___3850 = cljs.core.seq.call(null,seq__3830_3841);
if(temp__5457__auto___3850){
var seq__3830_3851__$1 = temp__5457__auto___3850;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__3830_3851__$1)){
var c__4319__auto___3852 = cljs.core.chunk_first.call(null,seq__3830_3851__$1);
var G__3853 = cljs.core.chunk_rest.call(null,seq__3830_3851__$1);
var G__3854 = c__4319__auto___3852;
var G__3855 = cljs.core.count.call(null,c__4319__auto___3852);
var G__3856 = (0);
seq__3830_3841 = G__3853;
chunk__3831_3842 = G__3854;
count__3832_3843 = G__3855;
i__3833_3844 = G__3856;
continue;
} else {
var param_3857 = cljs.core.first.call(null,seq__3830_3851__$1);
cljs.compiler.emit.call(null,param_3857);

if(cljs.core._EQ_.call(null,param_3857,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__3858 = cljs.core.next.call(null,seq__3830_3851__$1);
var G__3859 = null;
var G__3860 = (0);
var G__3861 = (0);
seq__3830_3841 = G__3858;
chunk__3831_3842 = G__3859;
count__3832_3843 = G__3860;
i__3833_3844 = G__3861;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"){");

if(cljs.core.truth_(type)){
cljs.compiler.emitln.call(null,"var self__ = this;");
} else {
}

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.call(null,"while(true){");
} else {
}

cljs.compiler.emits.call(null,expr);

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.call(null,"break;");

cljs.compiler.emitln.call(null,"}");
} else {
}

cljs.compiler.emitln.call(null,"};");

cljs.compiler.emitln.call(null,"var ",mname_3839," = function (",cljs.compiler.comma_sep.call(null,(cljs.core.truth_(variadic)?cljs.core.concat.call(null,cljs.core.butlast.call(null,params),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):params)),"){");

if(cljs.core.truth_(type)){
cljs.compiler.emitln.call(null,"var self__ = this;");
} else {
}

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,params));

cljs.compiler.emitln.call(null," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",(cljs.core.count.call(null,params) - (1)),") {");

var a_3862 = cljs.compiler.emit_arguments_to_array.call(null,(cljs.core.count.call(null,params) - (1)));
cljs.compiler.emitln.call(null,"  ",cljs.core.last.call(null,params)," = new cljs.core.IndexedSeq(",a_3862,",0,null);");

cljs.compiler.emitln.call(null,"} ");
} else {
}

cljs.compiler.emits.call(null,"return ",delegate_name_3840,".call(this,");

var seq__3834_3863 = cljs.core.seq.call(null,params);
var chunk__3835_3864 = null;
var count__3836_3865 = (0);
var i__3837_3866 = (0);
while(true){
if((i__3837_3866 < count__3836_3865)){
var param_3867 = cljs.core._nth.call(null,chunk__3835_3864,i__3837_3866);
cljs.compiler.emit.call(null,param_3867);

if(cljs.core._EQ_.call(null,param_3867,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__3868 = seq__3834_3863;
var G__3869 = chunk__3835_3864;
var G__3870 = count__3836_3865;
var G__3871 = (i__3837_3866 + (1));
seq__3834_3863 = G__3868;
chunk__3835_3864 = G__3869;
count__3836_3865 = G__3870;
i__3837_3866 = G__3871;
continue;
} else {
var temp__5457__auto___3872 = cljs.core.seq.call(null,seq__3834_3863);
if(temp__5457__auto___3872){
var seq__3834_3873__$1 = temp__5457__auto___3872;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__3834_3873__$1)){
var c__4319__auto___3874 = cljs.core.chunk_first.call(null,seq__3834_3873__$1);
var G__3875 = cljs.core.chunk_rest.call(null,seq__3834_3873__$1);
var G__3876 = c__4319__auto___3874;
var G__3877 = cljs.core.count.call(null,c__4319__auto___3874);
var G__3878 = (0);
seq__3834_3863 = G__3875;
chunk__3835_3864 = G__3876;
count__3836_3865 = G__3877;
i__3837_3866 = G__3878;
continue;
} else {
var param_3879 = cljs.core.first.call(null,seq__3834_3873__$1);
cljs.compiler.emit.call(null,param_3879);

if(cljs.core._EQ_.call(null,param_3879,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__3880 = cljs.core.next.call(null,seq__3834_3873__$1);
var G__3881 = null;
var G__3882 = (0);
var G__3883 = (0);
seq__3834_3863 = G__3880;
chunk__3835_3864 = G__3881;
count__3836_3865 = G__3882;
i__3837_3866 = G__3883;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emits.call(null,");");

cljs.compiler.emitln.call(null,"};");

cljs.compiler.emitln.call(null,mname_3839,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emits.call(null,mname_3839,".cljs$lang$applyTo = ");

cljs.compiler.emit_apply_to.call(null,cljs.core.assoc.call(null,f,new cljs.core.Keyword(null,"name","name",1843675177),name_3838__$1));

cljs.compiler.emitln.call(null,";");

cljs.compiler.emitln.call(null,mname_3839,".cljs$core$IFn$_invoke$arity$variadic = ",delegate_name_3840,";");

cljs.compiler.emitln.call(null,"return ",mname_3839,";");

cljs.compiler.emitln.call(null,"})()");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__3340__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (p__3887){
var map__3888 = p__3887;
var map__3888__$1 = ((((!((map__3888 == null)))?(((((map__3888.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3888.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3888):map__3888);
var name = cljs.core.get.call(null,map__3888__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.call(null,map__3888__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var methods$ = cljs.core.get.call(null,map__3888__$1,new cljs.core.Keyword(null,"methods","methods",453930866));
var max_fixed_arity = cljs.core.get.call(null,map__3888__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var variadic = cljs.core.get.call(null,map__3888__$1,new cljs.core.Keyword(null,"variadic","variadic",882626057));
var recur_frames = cljs.core.get.call(null,map__3888__$1,new cljs.core.Keyword(null,"recur-frames","recur-frames",-307205196));
var loop_lets = cljs.core.get.call(null,map__3888__$1,new cljs.core.Keyword(null,"loop-lets","loop-lets",2036794185));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var loop_locals = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.compiler.munge,cljs.core.concat.call(null,cljs.core.mapcat.call(null,new cljs.core.Keyword(null,"params","params",710516235),cljs.core.filter.call(null,((function (map__3888,map__3888__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__3884_SHARP_){
var and__3911__auto__ = p1__3884_SHARP_;
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.deref.call(null,new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(p1__3884_SHARP_));
} else {
return and__3911__auto__;
}
});})(map__3888,map__3888__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,recur_frames)),cljs.core.mapcat.call(null,new cljs.core.Keyword(null,"params","params",710516235),loop_lets))));
if(loop_locals){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emitln.call(null,"((function (",cljs.compiler.comma_sep.call(null,cljs.core.map.call(null,cljs.compiler.munge,loop_locals)),"){");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
} else {
cljs.compiler.emits.call(null,"return ");
}
} else {
}

if(cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,methods$))){
if(cljs.core.truth_(variadic)){
cljs.compiler.emit_variadic_fn_method.call(null,cljs.core.assoc.call(null,cljs.core.first.call(null,methods$),new cljs.core.Keyword(null,"name","name",1843675177),name));
} else {
cljs.compiler.emit_fn_method.call(null,cljs.core.assoc.call(null,cljs.core.first.call(null,methods$),new cljs.core.Keyword(null,"name","name",1843675177),name));
}
} else {
var name_3923__$1 = (function (){var or__3922__auto__ = name;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.gensym.call(null);
}
})();
var mname_3924 = cljs.compiler.munge.call(null,name_3923__$1);
var maxparams_3925 = cljs.core.apply.call(null,cljs.core.max_key,cljs.core.count,cljs.core.map.call(null,new cljs.core.Keyword(null,"params","params",710516235),methods$));
var mmap_3926 = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (name_3923__$1,mname_3924,maxparams_3925,loop_locals,map__3888,map__3888__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (method){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.compiler.munge.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname_3924),"__",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(method)))].join(''))),method], null);
});})(name_3923__$1,mname_3924,maxparams_3925,loop_locals,map__3888,map__3888__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,methods$));
var ms_3927 = cljs.core.sort_by.call(null,((function (name_3923__$1,mname_3924,maxparams_3925,mmap_3926,loop_locals,map__3888,map__3888__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__3885_SHARP_){
return cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__3885_SHARP_)));
});})(name_3923__$1,mname_3924,maxparams_3925,mmap_3926,loop_locals,map__3888,map__3888__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,cljs.core.seq.call(null,mmap_3926));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emitln.call(null,"(function() {");

cljs.compiler.emitln.call(null,"var ",mname_3924," = null;");

var seq__3890_3928 = cljs.core.seq.call(null,ms_3927);
var chunk__3891_3929 = null;
var count__3892_3930 = (0);
var i__3893_3931 = (0);
while(true){
if((i__3893_3931 < count__3892_3930)){
var vec__3894_3932 = cljs.core._nth.call(null,chunk__3891_3929,i__3893_3931);
var n_3933 = cljs.core.nth.call(null,vec__3894_3932,(0),null);
var meth_3934 = cljs.core.nth.call(null,vec__3894_3932,(1),null);
cljs.compiler.emits.call(null,"var ",n_3933," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_3934))){
cljs.compiler.emit_variadic_fn_method.call(null,meth_3934);
} else {
cljs.compiler.emit_fn_method.call(null,meth_3934);
}

cljs.compiler.emitln.call(null,";");


var G__3935 = seq__3890_3928;
var G__3936 = chunk__3891_3929;
var G__3937 = count__3892_3930;
var G__3938 = (i__3893_3931 + (1));
seq__3890_3928 = G__3935;
chunk__3891_3929 = G__3936;
count__3892_3930 = G__3937;
i__3893_3931 = G__3938;
continue;
} else {
var temp__5457__auto___3939 = cljs.core.seq.call(null,seq__3890_3928);
if(temp__5457__auto___3939){
var seq__3890_3940__$1 = temp__5457__auto___3939;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__3890_3940__$1)){
var c__4319__auto___3941 = cljs.core.chunk_first.call(null,seq__3890_3940__$1);
var G__3942 = cljs.core.chunk_rest.call(null,seq__3890_3940__$1);
var G__3943 = c__4319__auto___3941;
var G__3944 = cljs.core.count.call(null,c__4319__auto___3941);
var G__3945 = (0);
seq__3890_3928 = G__3942;
chunk__3891_3929 = G__3943;
count__3892_3930 = G__3944;
i__3893_3931 = G__3945;
continue;
} else {
var vec__3897_3946 = cljs.core.first.call(null,seq__3890_3940__$1);
var n_3947 = cljs.core.nth.call(null,vec__3897_3946,(0),null);
var meth_3948 = cljs.core.nth.call(null,vec__3897_3946,(1),null);
cljs.compiler.emits.call(null,"var ",n_3947," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_3948))){
cljs.compiler.emit_variadic_fn_method.call(null,meth_3948);
} else {
cljs.compiler.emit_fn_method.call(null,meth_3948);
}

cljs.compiler.emitln.call(null,";");


var G__3949 = cljs.core.next.call(null,seq__3890_3940__$1);
var G__3950 = null;
var G__3951 = (0);
var G__3952 = (0);
seq__3890_3928 = G__3949;
chunk__3891_3929 = G__3950;
count__3892_3930 = G__3951;
i__3893_3931 = G__3952;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,mname_3924," = function(",cljs.compiler.comma_sep.call(null,(cljs.core.truth_(variadic)?cljs.core.concat.call(null,cljs.core.butlast.call(null,maxparams_3925),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):maxparams_3925)),"){");

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,maxparams_3925));

cljs.compiler.emitln.call(null," = var_args;");
} else {
}

cljs.compiler.emitln.call(null,"switch(arguments.length){");

var seq__3900_3953 = cljs.core.seq.call(null,ms_3927);
var chunk__3901_3954 = null;
var count__3902_3955 = (0);
var i__3903_3956 = (0);
while(true){
if((i__3903_3956 < count__3902_3955)){
var vec__3904_3957 = cljs.core._nth.call(null,chunk__3901_3954,i__3903_3956);
var n_3958 = cljs.core.nth.call(null,vec__3904_3957,(0),null);
var meth_3959 = cljs.core.nth.call(null,vec__3904_3957,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_3959))){
cljs.compiler.emitln.call(null,"default:");

var restarg_3960 = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
cljs.compiler.emitln.call(null,"var ",restarg_3960," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",max_fixed_arity,") {");

var a_3961 = cljs.compiler.emit_arguments_to_array.call(null,max_fixed_arity);
cljs.compiler.emitln.call(null,restarg_3960," = new cljs.core.IndexedSeq(",a_3961,",0,null);");

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"return ",n_3958,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep.call(null,cljs.core.butlast.call(null,maxparams_3925)),(((cljs.core.count.call(null,maxparams_3925) > (1)))?", ":null),restarg_3960,");");
} else {
var pcnt_3962 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_3959));
cljs.compiler.emitln.call(null,"case ",pcnt_3962,":");

cljs.compiler.emitln.call(null,"return ",n_3958,".call(this",(((pcnt_3962 === (0)))?null:(new cljs.core.List(null,",",(new cljs.core.List(null,cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,pcnt_3962,maxparams_3925)),null,(1),null)),(2),null))),");");
}


var G__3963 = seq__3900_3953;
var G__3964 = chunk__3901_3954;
var G__3965 = count__3902_3955;
var G__3966 = (i__3903_3956 + (1));
seq__3900_3953 = G__3963;
chunk__3901_3954 = G__3964;
count__3902_3955 = G__3965;
i__3903_3956 = G__3966;
continue;
} else {
var temp__5457__auto___3967 = cljs.core.seq.call(null,seq__3900_3953);
if(temp__5457__auto___3967){
var seq__3900_3968__$1 = temp__5457__auto___3967;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__3900_3968__$1)){
var c__4319__auto___3969 = cljs.core.chunk_first.call(null,seq__3900_3968__$1);
var G__3970 = cljs.core.chunk_rest.call(null,seq__3900_3968__$1);
var G__3971 = c__4319__auto___3969;
var G__3972 = cljs.core.count.call(null,c__4319__auto___3969);
var G__3973 = (0);
seq__3900_3953 = G__3970;
chunk__3901_3954 = G__3971;
count__3902_3955 = G__3972;
i__3903_3956 = G__3973;
continue;
} else {
var vec__3907_3974 = cljs.core.first.call(null,seq__3900_3968__$1);
var n_3975 = cljs.core.nth.call(null,vec__3907_3974,(0),null);
var meth_3976 = cljs.core.nth.call(null,vec__3907_3974,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_3976))){
cljs.compiler.emitln.call(null,"default:");

var restarg_3977 = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
cljs.compiler.emitln.call(null,"var ",restarg_3977," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",max_fixed_arity,") {");

var a_3978 = cljs.compiler.emit_arguments_to_array.call(null,max_fixed_arity);
cljs.compiler.emitln.call(null,restarg_3977," = new cljs.core.IndexedSeq(",a_3978,",0,null);");

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"return ",n_3975,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep.call(null,cljs.core.butlast.call(null,maxparams_3925)),(((cljs.core.count.call(null,maxparams_3925) > (1)))?", ":null),restarg_3977,");");
} else {
var pcnt_3979 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_3976));
cljs.compiler.emitln.call(null,"case ",pcnt_3979,":");

cljs.compiler.emitln.call(null,"return ",n_3975,".call(this",(((pcnt_3979 === (0)))?null:(new cljs.core.List(null,",",(new cljs.core.List(null,cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,pcnt_3979,maxparams_3925)),null,(1),null)),(2),null))),");");
}


var G__3980 = cljs.core.next.call(null,seq__3900_3968__$1);
var G__3981 = null;
var G__3982 = (0);
var G__3983 = (0);
seq__3900_3953 = G__3980;
chunk__3901_3954 = G__3981;
count__3902_3955 = G__3982;
i__3903_3956 = G__3983;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"throw(new Error('Invalid arity: ' + (arguments.length - 1)));");

cljs.compiler.emitln.call(null,"};");

if(cljs.core.truth_(variadic)){
cljs.compiler.emitln.call(null,mname_3924,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emitln.call(null,mname_3924,".cljs$lang$applyTo = ",cljs.core.some.call(null,((function (name_3923__$1,mname_3924,maxparams_3925,mmap_3926,ms_3927,loop_locals,map__3888,map__3888__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__3886_SHARP_){
var vec__3910 = p1__3886_SHARP_;
var n = cljs.core.nth.call(null,vec__3910,(0),null);
var m = cljs.core.nth.call(null,vec__3910,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(m))){
return n;
} else {
return null;
}
});})(name_3923__$1,mname_3924,maxparams_3925,mmap_3926,ms_3927,loop_locals,map__3888,map__3888__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,ms_3927),".cljs$lang$applyTo;");
} else {
}

var seq__3913_3984 = cljs.core.seq.call(null,ms_3927);
var chunk__3914_3985 = null;
var count__3915_3986 = (0);
var i__3916_3987 = (0);
while(true){
if((i__3916_3987 < count__3915_3986)){
var vec__3917_3988 = cljs.core._nth.call(null,chunk__3914_3985,i__3916_3987);
var n_3989 = cljs.core.nth.call(null,vec__3917_3988,(0),null);
var meth_3990 = cljs.core.nth.call(null,vec__3917_3988,(1),null);
var c_3991 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_3990));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_3990))){
cljs.compiler.emitln.call(null,mname_3924,".cljs$core$IFn$_invoke$arity$variadic = ",n_3989,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.call(null,mname_3924,".cljs$core$IFn$_invoke$arity$",c_3991," = ",n_3989,";");
}


var G__3992 = seq__3913_3984;
var G__3993 = chunk__3914_3985;
var G__3994 = count__3915_3986;
var G__3995 = (i__3916_3987 + (1));
seq__3913_3984 = G__3992;
chunk__3914_3985 = G__3993;
count__3915_3986 = G__3994;
i__3916_3987 = G__3995;
continue;
} else {
var temp__5457__auto___3996 = cljs.core.seq.call(null,seq__3913_3984);
if(temp__5457__auto___3996){
var seq__3913_3997__$1 = temp__5457__auto___3996;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__3913_3997__$1)){
var c__4319__auto___3998 = cljs.core.chunk_first.call(null,seq__3913_3997__$1);
var G__3999 = cljs.core.chunk_rest.call(null,seq__3913_3997__$1);
var G__4000 = c__4319__auto___3998;
var G__4001 = cljs.core.count.call(null,c__4319__auto___3998);
var G__4002 = (0);
seq__3913_3984 = G__3999;
chunk__3914_3985 = G__4000;
count__3915_3986 = G__4001;
i__3916_3987 = G__4002;
continue;
} else {
var vec__3920_4003 = cljs.core.first.call(null,seq__3913_3997__$1);
var n_4004 = cljs.core.nth.call(null,vec__3920_4003,(0),null);
var meth_4005 = cljs.core.nth.call(null,vec__3920_4003,(1),null);
var c_4006 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_4005));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_4005))){
cljs.compiler.emitln.call(null,mname_3924,".cljs$core$IFn$_invoke$arity$variadic = ",n_4004,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.call(null,mname_3924,".cljs$core$IFn$_invoke$arity$",c_4006," = ",n_4004,";");
}


var G__4007 = cljs.core.next.call(null,seq__3913_3997__$1);
var G__4008 = null;
var G__4009 = (0);
var G__4010 = (0);
seq__3913_3984 = G__4007;
chunk__3914_3985 = G__4008;
count__3915_3986 = G__4009;
i__3916_3987 = G__4010;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"return ",mname_3924,";");

cljs.compiler.emitln.call(null,"})()");
}

if(loop_locals){
return cljs.compiler.emitln.call(null,";})(",cljs.compiler.comma_sep.call(null,loop_locals),"))");
} else {
return null;
}
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"do","do",46310725),(function (p__4011){
var map__4012 = p__4011;
var map__4012__$1 = ((((!((map__4012 == null)))?(((((map__4012.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4012.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4012):map__4012);
var statements = cljs.core.get.call(null,map__4012__$1,new cljs.core.Keyword(null,"statements","statements",600349855));
var ret = cljs.core.get.call(null,map__4012__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var env = cljs.core.get.call(null,map__4012__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core.truth_((function (){var and__3911__auto__ = statements;
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context);
} else {
return and__3911__auto__;
}
})())){
cljs.compiler.emitln.call(null,"(function (){");
} else {
}

var seq__4014_4018 = cljs.core.seq.call(null,statements);
var chunk__4015_4019 = null;
var count__4016_4020 = (0);
var i__4017_4021 = (0);
while(true){
if((i__4017_4021 < count__4016_4020)){
var s_4022 = cljs.core._nth.call(null,chunk__4015_4019,i__4017_4021);
cljs.compiler.emitln.call(null,s_4022);


var G__4023 = seq__4014_4018;
var G__4024 = chunk__4015_4019;
var G__4025 = count__4016_4020;
var G__4026 = (i__4017_4021 + (1));
seq__4014_4018 = G__4023;
chunk__4015_4019 = G__4024;
count__4016_4020 = G__4025;
i__4017_4021 = G__4026;
continue;
} else {
var temp__5457__auto___4027 = cljs.core.seq.call(null,seq__4014_4018);
if(temp__5457__auto___4027){
var seq__4014_4028__$1 = temp__5457__auto___4027;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__4014_4028__$1)){
var c__4319__auto___4029 = cljs.core.chunk_first.call(null,seq__4014_4028__$1);
var G__4030 = cljs.core.chunk_rest.call(null,seq__4014_4028__$1);
var G__4031 = c__4319__auto___4029;
var G__4032 = cljs.core.count.call(null,c__4319__auto___4029);
var G__4033 = (0);
seq__4014_4018 = G__4030;
chunk__4015_4019 = G__4031;
count__4016_4020 = G__4032;
i__4017_4021 = G__4033;
continue;
} else {
var s_4034 = cljs.core.first.call(null,seq__4014_4028__$1);
cljs.compiler.emitln.call(null,s_4034);


var G__4035 = cljs.core.next.call(null,seq__4014_4028__$1);
var G__4036 = null;
var G__4037 = (0);
var G__4038 = (0);
seq__4014_4018 = G__4035;
chunk__4015_4019 = G__4036;
count__4016_4020 = G__4037;
i__4017_4021 = G__4038;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emit.call(null,ret);

if(cljs.core.truth_((function (){var and__3911__auto__ = statements;
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context);
} else {
return and__3911__auto__;
}
})())){
return cljs.compiler.emitln.call(null,"})()");
} else {
return null;
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"try","try",1380742522),(function (p__4039){
var map__4040 = p__4039;
var map__4040__$1 = ((((!((map__4040 == null)))?(((((map__4040.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4040.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4040):map__4040);
var env = cljs.core.get.call(null,map__4040__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var try$ = cljs.core.get.call(null,map__4040__$1,new cljs.core.Keyword(null,"try","try",1380742522));
var catch$ = cljs.core.get.call(null,map__4040__$1,new cljs.core.Keyword(null,"catch","catch",1038065524));
var name = cljs.core.get.call(null,map__4040__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var finally$ = cljs.core.get.call(null,map__4040__$1,new cljs.core.Keyword(null,"finally","finally",1589088705));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core.truth_((function (){var or__3922__auto__ = name;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return finally$;
}
})())){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

cljs.compiler.emits.call(null,"try{",try$,"}");

if(cljs.core.truth_(name)){
cljs.compiler.emits.call(null,"catch (",cljs.compiler.munge.call(null,name),"){",catch$,"}");
} else {
}

if(cljs.core.truth_(finally$)){
if(cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"constant","constant",-379609303),new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(finally$))){
} else {
throw (new Error(["Assert failed: ","finally block cannot contain constant","\n","(not= :constant (:op finally))"].join('')));
}

cljs.compiler.emits.call(null,"finally {",finally$,"}");
} else {
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
return cljs.compiler.emits.call(null,"})()");
} else {
return null;
}
} else {
return cljs.compiler.emits.call(null,try$);
}
}));
cljs.compiler.emit_let = (function cljs$compiler$emit_let(p__4042,is_loop){
var map__4043 = p__4042;
var map__4043__$1 = ((((!((map__4043 == null)))?(((((map__4043.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4043.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4043):map__4043);
var bindings = cljs.core.get.call(null,map__4043__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var expr = cljs.core.get.call(null,map__4043__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.call(null,map__4043__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

var _STAR_lexical_renames_STAR_4045_4054 = cljs.compiler._STAR_lexical_renames_STAR_;
cljs.compiler._STAR_lexical_renames_STAR_ = cljs.core.into.call(null,cljs.compiler._STAR_lexical_renames_STAR_,((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),context))?cljs.core.map.call(null,((function (_STAR_lexical_renames_STAR_4045_4054,context,map__4043,map__4043__$1,bindings,expr,env){
return (function (binding){
var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(binding);
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.compiler.hash_scope.call(null,binding),cljs.core.gensym.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"-"].join(''))],null));
});})(_STAR_lexical_renames_STAR_4045_4054,context,map__4043,map__4043__$1,bindings,expr,env))
,bindings):null));

try{var seq__4046_4055 = cljs.core.seq.call(null,bindings);
var chunk__4047_4056 = null;
var count__4048_4057 = (0);
var i__4049_4058 = (0);
while(true){
if((i__4049_4058 < count__4048_4057)){
var map__4050_4059 = cljs.core._nth.call(null,chunk__4047_4056,i__4049_4058);
var map__4050_4060__$1 = ((((!((map__4050_4059 == null)))?(((((map__4050_4059.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4050_4059.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4050_4059):map__4050_4059);
var binding_4061 = map__4050_4060__$1;
var init_4062 = cljs.core.get.call(null,map__4050_4060__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,binding_4061);

cljs.compiler.emitln.call(null," = ",init_4062,";");


var G__4063 = seq__4046_4055;
var G__4064 = chunk__4047_4056;
var G__4065 = count__4048_4057;
var G__4066 = (i__4049_4058 + (1));
seq__4046_4055 = G__4063;
chunk__4047_4056 = G__4064;
count__4048_4057 = G__4065;
i__4049_4058 = G__4066;
continue;
} else {
var temp__5457__auto___4067 = cljs.core.seq.call(null,seq__4046_4055);
if(temp__5457__auto___4067){
var seq__4046_4068__$1 = temp__5457__auto___4067;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__4046_4068__$1)){
var c__4319__auto___4069 = cljs.core.chunk_first.call(null,seq__4046_4068__$1);
var G__4070 = cljs.core.chunk_rest.call(null,seq__4046_4068__$1);
var G__4071 = c__4319__auto___4069;
var G__4072 = cljs.core.count.call(null,c__4319__auto___4069);
var G__4073 = (0);
seq__4046_4055 = G__4070;
chunk__4047_4056 = G__4071;
count__4048_4057 = G__4072;
i__4049_4058 = G__4073;
continue;
} else {
var map__4052_4074 = cljs.core.first.call(null,seq__4046_4068__$1);
var map__4052_4075__$1 = ((((!((map__4052_4074 == null)))?(((((map__4052_4074.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4052_4074.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4052_4074):map__4052_4074);
var binding_4076 = map__4052_4075__$1;
var init_4077 = cljs.core.get.call(null,map__4052_4075__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,binding_4076);

cljs.compiler.emitln.call(null," = ",init_4077,";");


var G__4078 = cljs.core.next.call(null,seq__4046_4068__$1);
var G__4079 = null;
var G__4080 = (0);
var G__4081 = (0);
seq__4046_4055 = G__4078;
chunk__4047_4056 = G__4079;
count__4048_4057 = G__4080;
i__4049_4058 = G__4081;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(is_loop)){
cljs.compiler.emitln.call(null,"while(true){");
} else {
}

cljs.compiler.emits.call(null,expr);

if(cljs.core.truth_(is_loop)){
cljs.compiler.emitln.call(null,"break;");

cljs.compiler.emitln.call(null,"}");
} else {
}
}finally {cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR_4045_4054;
}
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
return cljs.compiler.emits.call(null,"})()");
} else {
return null;
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"let","let",-1282412701),(function (ast){
return cljs.compiler.emit_let.call(null,ast,false);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"loop","loop",-395552849),(function (ast){
return cljs.compiler.emit_let.call(null,ast,true);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"recur","recur",-437573268),(function (p__4082){
var map__4083 = p__4082;
var map__4083__$1 = ((((!((map__4083 == null)))?(((((map__4083.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4083.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4083):map__4083);
var frame = cljs.core.get.call(null,map__4083__$1,new cljs.core.Keyword(null,"frame","frame",-1711082588));
var exprs = cljs.core.get.call(null,map__4083__$1,new cljs.core.Keyword(null,"exprs","exprs",1795829094));
var env = cljs.core.get.call(null,map__4083__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var temps = cljs.core.vec.call(null,cljs.core.take.call(null,cljs.core.count.call(null,exprs),cljs.core.repeatedly.call(null,cljs.core.gensym)));
var params = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(frame);
var n__4376__auto___4085 = cljs.core.count.call(null,exprs);
var i_4086 = (0);
while(true){
if((i_4086 < n__4376__auto___4085)){
cljs.compiler.emitln.call(null,"var ",temps.call(null,i_4086)," = ",exprs.call(null,i_4086),";");

var G__4087 = (i_4086 + (1));
i_4086 = G__4087;
continue;
} else {
}
break;
}

var n__4376__auto___4088 = cljs.core.count.call(null,exprs);
var i_4089 = (0);
while(true){
if((i_4089 < n__4376__auto___4088)){
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,params.call(null,i_4089))," = ",temps.call(null,i_4089),";");

var G__4090 = (i_4089 + (1));
i_4089 = G__4090;
continue;
} else {
}
break;
}

return cljs.compiler.emitln.call(null,"continue;");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"letfn","letfn",-2121022354),(function (p__4091){
var map__4092 = p__4091;
var map__4092__$1 = ((((!((map__4092 == null)))?(((((map__4092.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4092.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4092):map__4092);
var bindings = cljs.core.get.call(null,map__4092__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var expr = cljs.core.get.call(null,map__4092__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.call(null,map__4092__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

var seq__4094_4102 = cljs.core.seq.call(null,bindings);
var chunk__4095_4103 = null;
var count__4096_4104 = (0);
var i__4097_4105 = (0);
while(true){
if((i__4097_4105 < count__4096_4104)){
var map__4098_4106 = cljs.core._nth.call(null,chunk__4095_4103,i__4097_4105);
var map__4098_4107__$1 = ((((!((map__4098_4106 == null)))?(((((map__4098_4106.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4098_4106.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4098_4106):map__4098_4106);
var binding_4108 = map__4098_4107__$1;
var init_4109 = cljs.core.get.call(null,map__4098_4107__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.call(null,"var ",cljs.compiler.munge.call(null,binding_4108)," = ",init_4109,";");


var G__4110 = seq__4094_4102;
var G__4111 = chunk__4095_4103;
var G__4112 = count__4096_4104;
var G__4113 = (i__4097_4105 + (1));
seq__4094_4102 = G__4110;
chunk__4095_4103 = G__4111;
count__4096_4104 = G__4112;
i__4097_4105 = G__4113;
continue;
} else {
var temp__5457__auto___4114 = cljs.core.seq.call(null,seq__4094_4102);
if(temp__5457__auto___4114){
var seq__4094_4115__$1 = temp__5457__auto___4114;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__4094_4115__$1)){
var c__4319__auto___4116 = cljs.core.chunk_first.call(null,seq__4094_4115__$1);
var G__4117 = cljs.core.chunk_rest.call(null,seq__4094_4115__$1);
var G__4118 = c__4319__auto___4116;
var G__4119 = cljs.core.count.call(null,c__4319__auto___4116);
var G__4120 = (0);
seq__4094_4102 = G__4117;
chunk__4095_4103 = G__4118;
count__4096_4104 = G__4119;
i__4097_4105 = G__4120;
continue;
} else {
var map__4100_4121 = cljs.core.first.call(null,seq__4094_4115__$1);
var map__4100_4122__$1 = ((((!((map__4100_4121 == null)))?(((((map__4100_4121.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4100_4121.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4100_4121):map__4100_4121);
var binding_4123 = map__4100_4122__$1;
var init_4124 = cljs.core.get.call(null,map__4100_4122__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.call(null,"var ",cljs.compiler.munge.call(null,binding_4123)," = ",init_4124,";");


var G__4125 = cljs.core.next.call(null,seq__4094_4115__$1);
var G__4126 = null;
var G__4127 = (0);
var G__4128 = (0);
seq__4094_4102 = G__4125;
chunk__4095_4103 = G__4126;
count__4096_4104 = G__4127;
i__4097_4105 = G__4128;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emits.call(null,expr);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
return cljs.compiler.emits.call(null,"})()");
} else {
return null;
}
}));
cljs.compiler.protocol_prefix = (function cljs$compiler$protocol_prefix(psym){
return cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(psym)].join('').replace((new RegExp("\\.","g")),"$").replace("/","$")),"$"].join(''));
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"invoke","invoke",1145927159),(function (p__4131){
var map__4132 = p__4131;
var map__4132__$1 = ((((!((map__4132 == null)))?(((((map__4132.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4132.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4132):map__4132);
var expr = map__4132__$1;
var f = cljs.core.get.call(null,map__4132__$1,new cljs.core.Keyword(null,"f","f",-1597136552));
var args = cljs.core.get.call(null,map__4132__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__4132__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var info = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(f);
var fn_QMARK_ = (function (){var and__3911__auto__ = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(and__3911__auto__){
var and__3911__auto____$1 = cljs.core.not.call(null,new cljs.core.Keyword(null,"dynamic","dynamic",704819571).cljs$core$IFn$_invoke$arity$1(info));
if(and__3911__auto____$1){
return new cljs.core.Keyword(null,"fn-var","fn-var",1086204730).cljs$core$IFn$_invoke$arity$1(info);
} else {
return and__3911__auto____$1;
}
} else {
return and__3911__auto__;
}
})();
var protocol = new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(info);
var tag = cljs.analyzer.infer_tag.call(null,env,cljs.core.first.call(null,new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(expr)));
var proto_QMARK_ = (function (){var and__3911__auto__ = protocol;
if(cljs.core.truth_(and__3911__auto__)){
var and__3911__auto____$1 = tag;
if(cljs.core.truth_(and__3911__auto____$1)){
var or__3922__auto__ = (function (){var and__3911__auto____$2 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(and__3911__auto____$2){
var and__3911__auto____$3 = protocol;
if(cljs.core.truth_(and__3911__auto____$3)){
return cljs.core._EQ_.call(null,tag,new cljs.core.Symbol(null,"not-native","not-native",-236392494,null));
} else {
return and__3911__auto____$3;
}
} else {
return and__3911__auto____$2;
}
})();
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
var and__3911__auto____$2 = (function (){var or__3922__auto____$1 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(or__3922__auto____$1){
return or__3922__auto____$1;
} else {
return new cljs.core.Keyword(null,"protocol-inline","protocol-inline",1550487556).cljs$core$IFn$_invoke$arity$1(env);
}
})();
if(cljs.core.truth_(and__3911__auto____$2)){
var or__3922__auto____$1 = cljs.core._EQ_.call(null,protocol,tag);
if(or__3922__auto____$1){
return or__3922__auto____$1;
} else {
var and__3911__auto____$3 = !(cljs.core.set_QMARK_.call(null,tag));
if(and__3911__auto____$3){
var and__3911__auto____$4 = cljs.core.not.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 11, [new cljs.core.Symbol(null,"clj","clj",980036099,null),null,new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),null,new cljs.core.Symbol(null,"object","object",-1179821820,null),null,new cljs.core.Symbol(null,"any","any",-948528346,null),null,new cljs.core.Symbol(null,"js","js",-886355190,null),null,new cljs.core.Symbol(null,"number","number",-1084057331,null),null,new cljs.core.Symbol(null,"clj-or-nil","clj-or-nil",-2008798668,null),null,new cljs.core.Symbol(null,"array","array",-440182315,null),null,new cljs.core.Symbol(null,"string","string",-349010059,null),null,new cljs.core.Symbol(null,"function","function",-486723946,null),null,new cljs.core.Symbol(null,"clj-nil","clj-nil",1321798654,null),null], null), null).call(null,tag));
if(and__3911__auto____$4){
var temp__5457__auto__ = new cljs.core.Keyword(null,"protocols","protocols",-5615896).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_existing_var.call(null,env,tag));
if(cljs.core.truth_(temp__5457__auto__)){
var ps = temp__5457__auto__;
return ps.call(null,protocol);
} else {
return null;
}
} else {
return and__3911__auto____$4;
}
} else {
return and__3911__auto____$3;
}
}
} else {
return and__3911__auto____$2;
}
}
} else {
return and__3911__auto____$1;
}
} else {
return and__3911__auto__;
}
})();
var opt_not_QMARK_ = ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info),new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null))) && (cljs.core._EQ_.call(null,cljs.analyzer.infer_tag.call(null,env,cljs.core.first.call(null,new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(expr))),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null))));
var ns = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(info);
var js_QMARK_ = ((cljs.core._EQ_.call(null,ns,new cljs.core.Symbol(null,"js","js",-886355190,null))) || (cljs.core._EQ_.call(null,ns,new cljs.core.Symbol(null,"Math","Math",2033287572,null))));
var goog_QMARK_ = (cljs.core.truth_(ns)?(function (){var or__3922__auto__ = cljs.core._EQ_.call(null,ns,new cljs.core.Symbol(null,"goog","goog",-70603925,null));
if(or__3922__auto__){
return or__3922__auto__;
} else {
var or__3922__auto____$1 = (function (){var temp__5457__auto__ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns)].join('');
if(cljs.core.truth_(temp__5457__auto__)){
var ns_str = temp__5457__auto__;
return cljs.core._EQ_.call(null,cljs.core.get.call(null,clojure.string.split.call(null,ns_str,/\./),(0),null),"goog");
} else {
return null;
}
})();
if(cljs.core.truth_(or__3922__auto____$1)){
return or__3922__auto____$1;
} else {
return !(cljs.core.contains_QMARK_.call(null,new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)),ns));
}
}
})():null);
var keyword_QMARK_ = ((cljs.core._EQ_.call(null,new cljs.core.Symbol("cljs.core","Keyword","cljs.core/Keyword",-451434488,null),cljs.analyzer.infer_tag.call(null,env,f))) || (((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(f),new cljs.core.Keyword(null,"constant","constant",-379609303))) && ((new cljs.core.Keyword(null,"form","form",-1624062471).cljs$core$IFn$_invoke$arity$1(f) instanceof cljs.core.Keyword)))));
var vec__4134 = (cljs.core.truth_(fn_QMARK_)?(function (){var arity = cljs.core.count.call(null,args);
var variadic_QMARK_ = new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(info);
var mps = new cljs.core.Keyword(null,"method-params","method-params",-980792179).cljs$core$IFn$_invoke$arity$1(info);
var mfa = new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(info);
if(((cljs.core.not.call(null,variadic_QMARK_)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,mps),(1))))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
} else {
if(cljs.core.truth_((function (){var and__3911__auto__ = variadic_QMARK_;
if(cljs.core.truth_(and__3911__auto__)){
return (arity > mfa);
} else {
return and__3911__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.call(null,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__4132,map__4132__$1,expr,f,args,env){
return (function (info__$1){
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,info__$1)),".cljs$core$IFn$_invoke$arity$variadic"].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__4132,map__4132__$1,expr,f,args,env){
return (function (p1__4129_SHARP_){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,p1__4129_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
});})(arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__4132,map__4132__$1,expr,f,args,env))
);
});})(arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__4132,map__4132__$1,expr,f,args,env))
),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),mfa], null)], null);
} else {
var arities = cljs.core.map.call(null,cljs.core.count,mps);
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([arity]),arities))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.call(null,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__4132,map__4132__$1,expr,f,args,env){
return (function (info__$1){
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,info__$1)),".cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arity)].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__4132,map__4132__$1,expr,f,args,env){
return (function (p1__4130_SHARP_){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,p1__4130_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
});})(arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__4132,map__4132__$1,expr,f,args,env))
);
});})(arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__4132,map__4132__$1,expr,f,args,env))
),null], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
}

}
}
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null));
var f__$1 = cljs.core.nth.call(null,vec__4134,(0),null);
var variadic_invoke = cljs.core.nth.call(null,vec__4134,(1),null);
var env__3340__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__3340__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(opt_not_QMARK_){
cljs.compiler.emits.call(null,"!(",cljs.core.first.call(null,args),")");
} else {
if(cljs.core.truth_(proto_QMARK_)){
var pimpl_4137 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,cljs.compiler.protocol_prefix.call(null,protocol))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,cljs.core.name.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info)))),"$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,args))].join('');
cljs.compiler.emits.call(null,cljs.core.first.call(null,args),".",pimpl_4137,"(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",cljs.core.rest.call(null,args))),")");
} else {
if(keyword_QMARK_){
cljs.compiler.emits.call(null,f__$1,".cljs$core$IFn$_invoke$arity$",cljs.core.count.call(null,args),"(",cljs.compiler.comma_sep.call(null,args),")");
} else {
if(cljs.core.truth_(variadic_invoke)){
var mfa_4138 = new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(variadic_invoke);
cljs.compiler.emits.call(null,f__$1,"(",cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,mfa_4138,args)),(((mfa_4138 === (0)))?null:","),"cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([",cljs.compiler.comma_sep.call(null,cljs.core.drop.call(null,mfa_4138,args)),"], 0))");
} else {
if(cljs.core.truth_((function (){var or__3922__auto__ = fn_QMARK_;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
var or__3922__auto____$1 = js_QMARK_;
if(or__3922__auto____$1){
return or__3922__auto____$1;
} else {
return goog_QMARK_;
}
}
})())){
cljs.compiler.emits.call(null,f__$1,"(",cljs.compiler.comma_sep.call(null,args),")");
} else {
if(((cljs.analyzer._STAR_cljs_static_fns_STAR_) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(f__$1),new cljs.core.Keyword(null,"var","var",-769682797))))){
var fprop_4139 = [".cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,args))].join('');
if(cljs.analyzer._STAR_fn_invoke_direct_STAR_){
cljs.compiler.emits.call(null,"(",f__$1,fprop_4139," ? ",f__$1,fprop_4139,"(",cljs.compiler.comma_sep.call(null,args),") : ",f__$1,"(",cljs.compiler.comma_sep.call(null,args),"))");
} else {
cljs.compiler.emits.call(null,"(",f__$1,fprop_4139," ? ",f__$1,fprop_4139,"(",cljs.compiler.comma_sep.call(null,args),") : ",f__$1,".call(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",args)),"))");
}
} else {
cljs.compiler.emits.call(null,f__$1,".call(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",args)),")");
}

}
}
}
}
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__3340__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"new","new",-2085437848),(function (p__4140){
var map__4141 = p__4140;
var map__4141__$1 = ((((!((map__4141 == null)))?(((((map__4141.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4141.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4141):map__4141);
var ctor = cljs.core.get.call(null,map__4141__$1,new cljs.core.Keyword(null,"ctor","ctor",1750864802));
var args = cljs.core.get.call(null,map__4141__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__4141__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__3340__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__3340__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"(new ",ctor,"(",cljs.compiler.comma_sep.call(null,args),"))");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__3340__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"set!","set!",-1389817006),(function (p__4143){
var map__4144 = p__4143;
var map__4144__$1 = ((((!((map__4144 == null)))?(((((map__4144.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4144.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4144):map__4144);
var target = cljs.core.get.call(null,map__4144__$1,new cljs.core.Keyword(null,"target","target",253001721));
var val = cljs.core.get.call(null,map__4144__$1,new cljs.core.Keyword(null,"val","val",128701612));
var env = cljs.core.get.call(null,map__4144__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__3340__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__3340__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,target," = ",val);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__3340__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.load_libs = (function cljs$compiler$load_libs(libs,seen,reloads,deps,ns_name){
var map__4146 = cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_);
var map__4146__$1 = ((((!((map__4146 == null)))?(((((map__4146.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4146.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4146):map__4146);
var options = cljs.core.get.call(null,map__4146__$1,new cljs.core.Keyword(null,"options","options",99638489));
var js_dependency_index = cljs.core.get.call(null,map__4146__$1,new cljs.core.Keyword(null,"js-dependency-index","js-dependency-index",-1887042131));
var map__4147 = options;
var map__4147__$1 = ((((!((map__4147 == null)))?(((((map__4147.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4147.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4147):map__4147);
var target = cljs.core.get.call(null,map__4147__$1,new cljs.core.Keyword(null,"target","target",253001721));
var optimizations = cljs.core.get.call(null,map__4147__$1,new cljs.core.Keyword(null,"optimizations","optimizations",-2047476854));
var loaded_libs = cljs.compiler.munge.call(null,new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null));
var loaded_libs_temp = cljs.compiler.munge.call(null,cljs.core.gensym.call(null,new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null)));
var vec__4148 = (function (){var libs__$1 = cljs.core.remove.call(null,cljs.core.set.call(null,cljs.core.vals.call(null,seen)),cljs.core.filter.call(null,cljs.core.set.call(null,cljs.core.vals.call(null,libs)),deps));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"nodejs","nodejs",321212524),target)){
var map__4153 = cljs.core.group_by.call(null,cljs.analyzer.node_module_dep_QMARK_,libs__$1);
var map__4153__$1 = ((((!((map__4153 == null)))?(((((map__4153.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4153.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4153):map__4153);
var node_libs = cljs.core.get.call(null,map__4153__$1,true);
var libs_to_load = cljs.core.get.call(null,map__4153__$1,false);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node_libs,libs_to_load], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,libs__$1], null);
}
})();
var node_libs = cljs.core.nth.call(null,vec__4148,(0),null);
var libs_to_load = cljs.core.nth.call(null,vec__4148,(1),null);
var global_exports_libs = cljs.core.filter.call(null,cljs.analyzer.dep_has_global_exports_QMARK_,libs_to_load);
if(cljs.core.truth_(new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs)))){
cljs.compiler.emitln.call(null,"if(!COMPILED) ",loaded_libs_temp," = ",loaded_libs," || cljs.core.set([\"cljs.core\"]);");

cljs.compiler.emitln.call(null,"if(!COMPILED) ",loaded_libs," = cljs.core.set([\"cljs.core\"]);");
} else {
}

var seq__4155_4171 = cljs.core.seq.call(null,libs_to_load);
var chunk__4156_4172 = null;
var count__4157_4173 = (0);
var i__4158_4174 = (0);
while(true){
if((i__4158_4174 < count__4157_4173)){
var lib_4175 = cljs.core._nth.call(null,chunk__4156_4172,i__4158_4174);
if(((cljs.analyzer.foreign_dep_QMARK_.call(null,lib_4175)) && (!(cljs.core.keyword_identical_QMARK_.call(null,optimizations,new cljs.core.Keyword(null,"none","none",1333468478)))))){
} else {
if(cljs.core.truth_((function (){var or__3922__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_4175),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_4175),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__3922__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_4175),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_4175),"', 'reload-all');");
} else {
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_4175),"');");

}
}
}


var G__4176 = seq__4155_4171;
var G__4177 = chunk__4156_4172;
var G__4178 = count__4157_4173;
var G__4179 = (i__4158_4174 + (1));
seq__4155_4171 = G__4176;
chunk__4156_4172 = G__4177;
count__4157_4173 = G__4178;
i__4158_4174 = G__4179;
continue;
} else {
var temp__5457__auto___4180 = cljs.core.seq.call(null,seq__4155_4171);
if(temp__5457__auto___4180){
var seq__4155_4181__$1 = temp__5457__auto___4180;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__4155_4181__$1)){
var c__4319__auto___4182 = cljs.core.chunk_first.call(null,seq__4155_4181__$1);
var G__4183 = cljs.core.chunk_rest.call(null,seq__4155_4181__$1);
var G__4184 = c__4319__auto___4182;
var G__4185 = cljs.core.count.call(null,c__4319__auto___4182);
var G__4186 = (0);
seq__4155_4171 = G__4183;
chunk__4156_4172 = G__4184;
count__4157_4173 = G__4185;
i__4158_4174 = G__4186;
continue;
} else {
var lib_4187 = cljs.core.first.call(null,seq__4155_4181__$1);
if(((cljs.analyzer.foreign_dep_QMARK_.call(null,lib_4187)) && (!(cljs.core.keyword_identical_QMARK_.call(null,optimizations,new cljs.core.Keyword(null,"none","none",1333468478)))))){
} else {
if(cljs.core.truth_((function (){var or__3922__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_4187),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_4187),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__3922__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_4187),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_4187),"', 'reload-all');");
} else {
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_4187),"');");

}
}
}


var G__4188 = cljs.core.next.call(null,seq__4155_4181__$1);
var G__4189 = null;
var G__4190 = (0);
var G__4191 = (0);
seq__4155_4171 = G__4188;
chunk__4156_4172 = G__4189;
count__4157_4173 = G__4190;
i__4158_4174 = G__4191;
continue;
}
} else {
}
}
break;
}

var seq__4159_4192 = cljs.core.seq.call(null,node_libs);
var chunk__4160_4193 = null;
var count__4161_4194 = (0);
var i__4162_4195 = (0);
while(true){
if((i__4162_4195 < count__4161_4194)){
var lib_4196 = cljs.core._nth.call(null,chunk__4160_4193,i__4162_4195);
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,ns_name),".",cljs.analyzer.munge_node_lib.call(null,lib_4196)," = require('",lib_4196,"');");


var G__4197 = seq__4159_4192;
var G__4198 = chunk__4160_4193;
var G__4199 = count__4161_4194;
var G__4200 = (i__4162_4195 + (1));
seq__4159_4192 = G__4197;
chunk__4160_4193 = G__4198;
count__4161_4194 = G__4199;
i__4162_4195 = G__4200;
continue;
} else {
var temp__5457__auto___4201 = cljs.core.seq.call(null,seq__4159_4192);
if(temp__5457__auto___4201){
var seq__4159_4202__$1 = temp__5457__auto___4201;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__4159_4202__$1)){
var c__4319__auto___4203 = cljs.core.chunk_first.call(null,seq__4159_4202__$1);
var G__4204 = cljs.core.chunk_rest.call(null,seq__4159_4202__$1);
var G__4205 = c__4319__auto___4203;
var G__4206 = cljs.core.count.call(null,c__4319__auto___4203);
var G__4207 = (0);
seq__4159_4192 = G__4204;
chunk__4160_4193 = G__4205;
count__4161_4194 = G__4206;
i__4162_4195 = G__4207;
continue;
} else {
var lib_4208 = cljs.core.first.call(null,seq__4159_4202__$1);
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,ns_name),".",cljs.analyzer.munge_node_lib.call(null,lib_4208)," = require('",lib_4208,"');");


var G__4209 = cljs.core.next.call(null,seq__4159_4202__$1);
var G__4210 = null;
var G__4211 = (0);
var G__4212 = (0);
seq__4159_4192 = G__4209;
chunk__4160_4193 = G__4210;
count__4161_4194 = G__4211;
i__4162_4195 = G__4212;
continue;
}
} else {
}
}
break;
}

var seq__4163_4213 = cljs.core.seq.call(null,global_exports_libs);
var chunk__4164_4214 = null;
var count__4165_4215 = (0);
var i__4166_4216 = (0);
while(true){
if((i__4166_4216 < count__4165_4215)){
var lib_4217 = cljs.core._nth.call(null,chunk__4164_4214,i__4166_4216);
var map__4167_4218 = cljs.core.get.call(null,js_dependency_index,cljs.core.name.call(null,lib_4217));
var map__4167_4219__$1 = ((((!((map__4167_4218 == null)))?(((((map__4167_4218.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4167_4218.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4167_4218):map__4167_4218);
var global_exports_4220 = cljs.core.get.call(null,map__4167_4219__$1,new cljs.core.Keyword(null,"global-exports","global-exports",-1644865592));
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,ns_name),".",cljs.analyzer.munge_global_export.call(null,lib_4217)," = goog.global.",cljs.core.get.call(null,global_exports_4220,cljs.core.symbol.call(null,lib_4217)),";");


var G__4221 = seq__4163_4213;
var G__4222 = chunk__4164_4214;
var G__4223 = count__4165_4215;
var G__4224 = (i__4166_4216 + (1));
seq__4163_4213 = G__4221;
chunk__4164_4214 = G__4222;
count__4165_4215 = G__4223;
i__4166_4216 = G__4224;
continue;
} else {
var temp__5457__auto___4225 = cljs.core.seq.call(null,seq__4163_4213);
if(temp__5457__auto___4225){
var seq__4163_4226__$1 = temp__5457__auto___4225;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__4163_4226__$1)){
var c__4319__auto___4227 = cljs.core.chunk_first.call(null,seq__4163_4226__$1);
var G__4228 = cljs.core.chunk_rest.call(null,seq__4163_4226__$1);
var G__4229 = c__4319__auto___4227;
var G__4230 = cljs.core.count.call(null,c__4319__auto___4227);
var G__4231 = (0);
seq__4163_4213 = G__4228;
chunk__4164_4214 = G__4229;
count__4165_4215 = G__4230;
i__4166_4216 = G__4231;
continue;
} else {
var lib_4232 = cljs.core.first.call(null,seq__4163_4226__$1);
var map__4169_4233 = cljs.core.get.call(null,js_dependency_index,cljs.core.name.call(null,lib_4232));
var map__4169_4234__$1 = ((((!((map__4169_4233 == null)))?(((((map__4169_4233.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4169_4233.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4169_4233):map__4169_4233);
var global_exports_4235 = cljs.core.get.call(null,map__4169_4234__$1,new cljs.core.Keyword(null,"global-exports","global-exports",-1644865592));
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,ns_name),".",cljs.analyzer.munge_global_export.call(null,lib_4232)," = goog.global.",cljs.core.get.call(null,global_exports_4235,cljs.core.symbol.call(null,lib_4232)),";");


var G__4236 = cljs.core.next.call(null,seq__4163_4226__$1);
var G__4237 = null;
var G__4238 = (0);
var G__4239 = (0);
seq__4163_4213 = G__4236;
chunk__4164_4214 = G__4237;
count__4165_4215 = G__4238;
i__4166_4216 = G__4239;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs)))){
return cljs.compiler.emitln.call(null,"if(!COMPILED) ",loaded_libs," = cljs.core.into(",loaded_libs_temp,", ",loaded_libs,");");
} else {
return null;
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"ns*","ns*",200417856),(function (p__4240){
var map__4241 = p__4240;
var map__4241__$1 = ((((!((map__4241 == null)))?(((((map__4241.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4241.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4241):map__4241);
var name = cljs.core.get.call(null,map__4241__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.call(null,map__4241__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.call(null,map__4241__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.call(null,map__4241__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.call(null,map__4241__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.call(null,map__4241__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var deps = cljs.core.get.call(null,map__4241__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
cljs.compiler.load_libs.call(null,requires,null,new cljs.core.Keyword(null,"require","require",-468001333).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

cljs.compiler.load_libs.call(null,uses,requires,new cljs.core.Keyword(null,"use","use",-1846382424).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-env","repl-env",-1976503928).cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emitln.call(null,"null;");
} else {
return null;
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"ns","ns",441598760),(function (p__4243){
var map__4244 = p__4243;
var map__4244__$1 = ((((!((map__4244 == null)))?(((((map__4244.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4244.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4244):map__4244);
var name = cljs.core.get.call(null,map__4244__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.call(null,map__4244__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.call(null,map__4244__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.call(null,map__4244__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.call(null,map__4244__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.call(null,map__4244__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var deps = cljs.core.get.call(null,map__4244__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
cljs.compiler.emitln.call(null,"goog.provide('",cljs.compiler.munge.call(null,name),"');");

if(cljs.core._EQ_.call(null,name,new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null))){
} else {
cljs.compiler.emitln.call(null,"goog.require('cljs.core');");

if(cljs.core.truth_(new cljs.core.Keyword(null,"emit-constants","emit-constants",-476585410).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_))))){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,cljs.analyzer.constants_ns_sym),"');");
} else {
}
}

cljs.compiler.load_libs.call(null,requires,null,new cljs.core.Keyword(null,"require","require",-468001333).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

return cljs.compiler.load_libs.call(null,uses,requires,new cljs.core.Keyword(null,"use","use",-1846382424).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"deftype*","deftype*",-677871637),(function (p__4246){
var map__4247 = p__4246;
var map__4247__$1 = ((((!((map__4247 == null)))?(((((map__4247.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4247.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4247):map__4247);
var t = cljs.core.get.call(null,map__4247__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.call(null,map__4247__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.call(null,map__4247__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.call(null,map__4247__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.call(null,map__4247__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.map.call(null,cljs.compiler.munge,fields);
cljs.compiler.emitln.call(null,"");

cljs.compiler.emitln.call(null,"/**");

cljs.compiler.emitln.call(null,"* @constructor");

var seq__4249_4267 = cljs.core.seq.call(null,protocols);
var chunk__4250_4268 = null;
var count__4251_4269 = (0);
var i__4252_4270 = (0);
while(true){
if((i__4252_4270 < count__4251_4269)){
var protocol_4271 = cljs.core._nth.call(null,chunk__4250_4268,i__4252_4270);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_4271)].join('')),"}");


var G__4272 = seq__4249_4267;
var G__4273 = chunk__4250_4268;
var G__4274 = count__4251_4269;
var G__4275 = (i__4252_4270 + (1));
seq__4249_4267 = G__4272;
chunk__4250_4268 = G__4273;
count__4251_4269 = G__4274;
i__4252_4270 = G__4275;
continue;
} else {
var temp__5457__auto___4276 = cljs.core.seq.call(null,seq__4249_4267);
if(temp__5457__auto___4276){
var seq__4249_4277__$1 = temp__5457__auto___4276;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__4249_4277__$1)){
var c__4319__auto___4278 = cljs.core.chunk_first.call(null,seq__4249_4277__$1);
var G__4279 = cljs.core.chunk_rest.call(null,seq__4249_4277__$1);
var G__4280 = c__4319__auto___4278;
var G__4281 = cljs.core.count.call(null,c__4319__auto___4278);
var G__4282 = (0);
seq__4249_4267 = G__4279;
chunk__4250_4268 = G__4280;
count__4251_4269 = G__4281;
i__4252_4270 = G__4282;
continue;
} else {
var protocol_4283 = cljs.core.first.call(null,seq__4249_4277__$1);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_4283)].join('')),"}");


var G__4284 = cljs.core.next.call(null,seq__4249_4277__$1);
var G__4285 = null;
var G__4286 = (0);
var G__4287 = (0);
seq__4249_4267 = G__4284;
chunk__4250_4268 = G__4285;
count__4251_4269 = G__4286;
i__4252_4270 = G__4287;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"*/");

cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,t)," = (function (",cljs.compiler.comma_sep.call(null,fields__$1),"){");

var seq__4253_4288 = cljs.core.seq.call(null,fields__$1);
var chunk__4254_4289 = null;
var count__4255_4290 = (0);
var i__4256_4291 = (0);
while(true){
if((i__4256_4291 < count__4255_4290)){
var fld_4292 = cljs.core._nth.call(null,chunk__4254_4289,i__4256_4291);
cljs.compiler.emitln.call(null,"this.",fld_4292," = ",fld_4292,";");


var G__4293 = seq__4253_4288;
var G__4294 = chunk__4254_4289;
var G__4295 = count__4255_4290;
var G__4296 = (i__4256_4291 + (1));
seq__4253_4288 = G__4293;
chunk__4254_4289 = G__4294;
count__4255_4290 = G__4295;
i__4256_4291 = G__4296;
continue;
} else {
var temp__5457__auto___4297 = cljs.core.seq.call(null,seq__4253_4288);
if(temp__5457__auto___4297){
var seq__4253_4298__$1 = temp__5457__auto___4297;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__4253_4298__$1)){
var c__4319__auto___4299 = cljs.core.chunk_first.call(null,seq__4253_4298__$1);
var G__4300 = cljs.core.chunk_rest.call(null,seq__4253_4298__$1);
var G__4301 = c__4319__auto___4299;
var G__4302 = cljs.core.count.call(null,c__4319__auto___4299);
var G__4303 = (0);
seq__4253_4288 = G__4300;
chunk__4254_4289 = G__4301;
count__4255_4290 = G__4302;
i__4256_4291 = G__4303;
continue;
} else {
var fld_4304 = cljs.core.first.call(null,seq__4253_4298__$1);
cljs.compiler.emitln.call(null,"this.",fld_4304," = ",fld_4304,";");


var G__4305 = cljs.core.next.call(null,seq__4253_4298__$1);
var G__4306 = null;
var G__4307 = (0);
var G__4308 = (0);
seq__4253_4288 = G__4305;
chunk__4254_4289 = G__4306;
count__4255_4290 = G__4307;
i__4256_4291 = G__4308;
continue;
}
} else {
}
}
break;
}

var seq__4257_4309 = cljs.core.seq.call(null,pmasks);
var chunk__4258_4310 = null;
var count__4259_4311 = (0);
var i__4260_4312 = (0);
while(true){
if((i__4260_4312 < count__4259_4311)){
var vec__4261_4313 = cljs.core._nth.call(null,chunk__4258_4310,i__4260_4312);
var pno_4314 = cljs.core.nth.call(null,vec__4261_4313,(0),null);
var pmask_4315 = cljs.core.nth.call(null,vec__4261_4313,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_4314,"$ = ",pmask_4315,";");


var G__4316 = seq__4257_4309;
var G__4317 = chunk__4258_4310;
var G__4318 = count__4259_4311;
var G__4319 = (i__4260_4312 + (1));
seq__4257_4309 = G__4316;
chunk__4258_4310 = G__4317;
count__4259_4311 = G__4318;
i__4260_4312 = G__4319;
continue;
} else {
var temp__5457__auto___4320 = cljs.core.seq.call(null,seq__4257_4309);
if(temp__5457__auto___4320){
var seq__4257_4321__$1 = temp__5457__auto___4320;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__4257_4321__$1)){
var c__4319__auto___4322 = cljs.core.chunk_first.call(null,seq__4257_4321__$1);
var G__4323 = cljs.core.chunk_rest.call(null,seq__4257_4321__$1);
var G__4324 = c__4319__auto___4322;
var G__4325 = cljs.core.count.call(null,c__4319__auto___4322);
var G__4326 = (0);
seq__4257_4309 = G__4323;
chunk__4258_4310 = G__4324;
count__4259_4311 = G__4325;
i__4260_4312 = G__4326;
continue;
} else {
var vec__4264_4327 = cljs.core.first.call(null,seq__4257_4321__$1);
var pno_4328 = cljs.core.nth.call(null,vec__4264_4327,(0),null);
var pmask_4329 = cljs.core.nth.call(null,vec__4264_4327,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_4328,"$ = ",pmask_4329,";");


var G__4330 = cljs.core.next.call(null,seq__4257_4321__$1);
var G__4331 = null;
var G__4332 = (0);
var G__4333 = (0);
seq__4257_4309 = G__4330;
chunk__4258_4310 = G__4331;
count__4259_4311 = G__4332;
i__4260_4312 = G__4333;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"});");

return cljs.compiler.emit.call(null,body);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"defrecord*","defrecord*",718069562),(function (p__4334){
var map__4335 = p__4334;
var map__4335__$1 = ((((!((map__4335 == null)))?(((((map__4335.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4335.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4335):map__4335);
var t = cljs.core.get.call(null,map__4335__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.call(null,map__4335__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.call(null,map__4335__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.call(null,map__4335__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.call(null,map__4335__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.concat.call(null,cljs.core.map.call(null,cljs.compiler.munge,fields),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"__meta","__meta",-946752628,null),new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null)], null));
cljs.compiler.emitln.call(null,"");

cljs.compiler.emitln.call(null,"/**");

cljs.compiler.emitln.call(null,"* @constructor");

var seq__4337_4355 = cljs.core.seq.call(null,protocols);
var chunk__4338_4356 = null;
var count__4339_4357 = (0);
var i__4340_4358 = (0);
while(true){
if((i__4340_4358 < count__4339_4357)){
var protocol_4359 = cljs.core._nth.call(null,chunk__4338_4356,i__4340_4358);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_4359)].join('')),"}");


var G__4360 = seq__4337_4355;
var G__4361 = chunk__4338_4356;
var G__4362 = count__4339_4357;
var G__4363 = (i__4340_4358 + (1));
seq__4337_4355 = G__4360;
chunk__4338_4356 = G__4361;
count__4339_4357 = G__4362;
i__4340_4358 = G__4363;
continue;
} else {
var temp__5457__auto___4364 = cljs.core.seq.call(null,seq__4337_4355);
if(temp__5457__auto___4364){
var seq__4337_4365__$1 = temp__5457__auto___4364;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__4337_4365__$1)){
var c__4319__auto___4366 = cljs.core.chunk_first.call(null,seq__4337_4365__$1);
var G__4367 = cljs.core.chunk_rest.call(null,seq__4337_4365__$1);
var G__4368 = c__4319__auto___4366;
var G__4369 = cljs.core.count.call(null,c__4319__auto___4366);
var G__4370 = (0);
seq__4337_4355 = G__4367;
chunk__4338_4356 = G__4368;
count__4339_4357 = G__4369;
i__4340_4358 = G__4370;
continue;
} else {
var protocol_4371 = cljs.core.first.call(null,seq__4337_4365__$1);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_4371)].join('')),"}");


var G__4372 = cljs.core.next.call(null,seq__4337_4365__$1);
var G__4373 = null;
var G__4374 = (0);
var G__4375 = (0);
seq__4337_4355 = G__4372;
chunk__4338_4356 = G__4373;
count__4339_4357 = G__4374;
i__4340_4358 = G__4375;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"*/");

cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,t)," = (function (",cljs.compiler.comma_sep.call(null,fields__$1),"){");

var seq__4341_4376 = cljs.core.seq.call(null,fields__$1);
var chunk__4342_4377 = null;
var count__4343_4378 = (0);
var i__4344_4379 = (0);
while(true){
if((i__4344_4379 < count__4343_4378)){
var fld_4380 = cljs.core._nth.call(null,chunk__4342_4377,i__4344_4379);
cljs.compiler.emitln.call(null,"this.",fld_4380," = ",fld_4380,";");


var G__4381 = seq__4341_4376;
var G__4382 = chunk__4342_4377;
var G__4383 = count__4343_4378;
var G__4384 = (i__4344_4379 + (1));
seq__4341_4376 = G__4381;
chunk__4342_4377 = G__4382;
count__4343_4378 = G__4383;
i__4344_4379 = G__4384;
continue;
} else {
var temp__5457__auto___4385 = cljs.core.seq.call(null,seq__4341_4376);
if(temp__5457__auto___4385){
var seq__4341_4386__$1 = temp__5457__auto___4385;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__4341_4386__$1)){
var c__4319__auto___4387 = cljs.core.chunk_first.call(null,seq__4341_4386__$1);
var G__4388 = cljs.core.chunk_rest.call(null,seq__4341_4386__$1);
var G__4389 = c__4319__auto___4387;
var G__4390 = cljs.core.count.call(null,c__4319__auto___4387);
var G__4391 = (0);
seq__4341_4376 = G__4388;
chunk__4342_4377 = G__4389;
count__4343_4378 = G__4390;
i__4344_4379 = G__4391;
continue;
} else {
var fld_4392 = cljs.core.first.call(null,seq__4341_4386__$1);
cljs.compiler.emitln.call(null,"this.",fld_4392," = ",fld_4392,";");


var G__4393 = cljs.core.next.call(null,seq__4341_4386__$1);
var G__4394 = null;
var G__4395 = (0);
var G__4396 = (0);
seq__4341_4376 = G__4393;
chunk__4342_4377 = G__4394;
count__4343_4378 = G__4395;
i__4344_4379 = G__4396;
continue;
}
} else {
}
}
break;
}

var seq__4345_4397 = cljs.core.seq.call(null,pmasks);
var chunk__4346_4398 = null;
var count__4347_4399 = (0);
var i__4348_4400 = (0);
while(true){
if((i__4348_4400 < count__4347_4399)){
var vec__4349_4401 = cljs.core._nth.call(null,chunk__4346_4398,i__4348_4400);
var pno_4402 = cljs.core.nth.call(null,vec__4349_4401,(0),null);
var pmask_4403 = cljs.core.nth.call(null,vec__4349_4401,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_4402,"$ = ",pmask_4403,";");


var G__4404 = seq__4345_4397;
var G__4405 = chunk__4346_4398;
var G__4406 = count__4347_4399;
var G__4407 = (i__4348_4400 + (1));
seq__4345_4397 = G__4404;
chunk__4346_4398 = G__4405;
count__4347_4399 = G__4406;
i__4348_4400 = G__4407;
continue;
} else {
var temp__5457__auto___4408 = cljs.core.seq.call(null,seq__4345_4397);
if(temp__5457__auto___4408){
var seq__4345_4409__$1 = temp__5457__auto___4408;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__4345_4409__$1)){
var c__4319__auto___4410 = cljs.core.chunk_first.call(null,seq__4345_4409__$1);
var G__4411 = cljs.core.chunk_rest.call(null,seq__4345_4409__$1);
var G__4412 = c__4319__auto___4410;
var G__4413 = cljs.core.count.call(null,c__4319__auto___4410);
var G__4414 = (0);
seq__4345_4397 = G__4411;
chunk__4346_4398 = G__4412;
count__4347_4399 = G__4413;
i__4348_4400 = G__4414;
continue;
} else {
var vec__4352_4415 = cljs.core.first.call(null,seq__4345_4409__$1);
var pno_4416 = cljs.core.nth.call(null,vec__4352_4415,(0),null);
var pmask_4417 = cljs.core.nth.call(null,vec__4352_4415,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_4416,"$ = ",pmask_4417,";");


var G__4418 = cljs.core.next.call(null,seq__4345_4409__$1);
var G__4419 = null;
var G__4420 = (0);
var G__4421 = (0);
seq__4345_4397 = G__4418;
chunk__4346_4398 = G__4419;
count__4347_4399 = G__4420;
i__4348_4400 = G__4421;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"});");

return cljs.compiler.emit.call(null,body);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"dot","dot",1442709401),(function (p__4422){
var map__4423 = p__4422;
var map__4423__$1 = ((((!((map__4423 == null)))?(((((map__4423.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4423.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4423):map__4423);
var target = cljs.core.get.call(null,map__4423__$1,new cljs.core.Keyword(null,"target","target",253001721));
var field = cljs.core.get.call(null,map__4423__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var method = cljs.core.get.call(null,map__4423__$1,new cljs.core.Keyword(null,"method","method",55703592));
var args = cljs.core.get.call(null,map__4423__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__4423__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__3340__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__3340__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.truth_(field)){
cljs.compiler.emits.call(null,target,".",cljs.compiler.munge.call(null,field,cljs.core.PersistentHashSet.EMPTY));
} else {
cljs.compiler.emits.call(null,target,".",cljs.compiler.munge.call(null,method,cljs.core.PersistentHashSet.EMPTY),"(",cljs.compiler.comma_sep.call(null,args),")");
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__3340__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js","js",1768080579),(function (p__4425){
var map__4426 = p__4425;
var map__4426__$1 = ((((!((map__4426 == null)))?(((((map__4426.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4426.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4426):map__4426);
var op = cljs.core.get.call(null,map__4426__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var env = cljs.core.get.call(null,map__4426__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var code = cljs.core.get.call(null,map__4426__$1,new cljs.core.Keyword(null,"code","code",1586293142));
var segs = cljs.core.get.call(null,map__4426__$1,new cljs.core.Keyword(null,"segs","segs",-1940299576));
var args = cljs.core.get.call(null,map__4426__$1,new cljs.core.Keyword(null,"args","args",1315556576));
if(cljs.core.truth_((function (){var and__3911__auto__ = code;
if(cljs.core.truth_(and__3911__auto__)){
return goog.string.startsWith(clojure.string.trim.call(null,code),"/*");
} else {
return and__3911__auto__;
}
})())){
return cljs.compiler.emits.call(null,code);
} else {
var env__3340__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__3340__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.truth_(code)){
cljs.compiler.emits.call(null,code);
} else {
cljs.compiler.emits.call(null,cljs.core.interleave.call(null,cljs.core.concat.call(null,segs,cljs.core.repeat.call(null,null)),cljs.core.concat.call(null,args,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null))));
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__3340__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}));
cljs.compiler.emit_constants_table = (function cljs$compiler$emit_constants_table(table){
cljs.compiler.emitln.call(null,"goog.provide('",cljs.compiler.munge.call(null,cljs.analyzer.constants_ns_sym),"');");

cljs.compiler.emitln.call(null,"goog.require('cljs.core');");

var seq__4431 = cljs.core.seq.call(null,table);
var chunk__4432 = null;
var count__4433 = (0);
var i__4434 = (0);
while(true){
if((i__4434 < count__4433)){
var vec__4435 = cljs.core._nth.call(null,chunk__4432,i__4434);
var sym = cljs.core.nth.call(null,vec__4435,(0),null);
var value = cljs.core.nth.call(null,vec__4435,(1),null);
var ns_4441 = cljs.core.namespace.call(null,sym);
var name_4442 = cljs.core.name.call(null,sym);
cljs.compiler.emits.call(null,"cljs.core.",value," = ");

if((sym instanceof cljs.core.Keyword)){
cljs.compiler.emits_keyword.call(null,sym);
} else {
if((sym instanceof cljs.core.Symbol)){
cljs.compiler.emits_symbol.call(null,sym);
} else {
throw cljs.core.ex_info.call(null,["Cannot emit constant for type ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type.call(null,sym))].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"invalid-constant-type","invalid-constant-type",1294847471)], null));

}
}

cljs.compiler.emits.call(null,";\n");


var G__4443 = seq__4431;
var G__4444 = chunk__4432;
var G__4445 = count__4433;
var G__4446 = (i__4434 + (1));
seq__4431 = G__4443;
chunk__4432 = G__4444;
count__4433 = G__4445;
i__4434 = G__4446;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__4431);
if(temp__5457__auto__){
var seq__4431__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__4431__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__4431__$1);
var G__4447 = cljs.core.chunk_rest.call(null,seq__4431__$1);
var G__4448 = c__4319__auto__;
var G__4449 = cljs.core.count.call(null,c__4319__auto__);
var G__4450 = (0);
seq__4431 = G__4447;
chunk__4432 = G__4448;
count__4433 = G__4449;
i__4434 = G__4450;
continue;
} else {
var vec__4438 = cljs.core.first.call(null,seq__4431__$1);
var sym = cljs.core.nth.call(null,vec__4438,(0),null);
var value = cljs.core.nth.call(null,vec__4438,(1),null);
var ns_4451 = cljs.core.namespace.call(null,sym);
var name_4452 = cljs.core.name.call(null,sym);
cljs.compiler.emits.call(null,"cljs.core.",value," = ");

if((sym instanceof cljs.core.Keyword)){
cljs.compiler.emits_keyword.call(null,sym);
} else {
if((sym instanceof cljs.core.Symbol)){
cljs.compiler.emits_symbol.call(null,sym);
} else {
throw cljs.core.ex_info.call(null,["Cannot emit constant for type ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type.call(null,sym))].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"invalid-constant-type","invalid-constant-type",1294847471)], null));

}
}

cljs.compiler.emits.call(null,";\n");


var G__4453 = cljs.core.next.call(null,seq__4431__$1);
var G__4454 = null;
var G__4455 = (0);
var G__4456 = (0);
seq__4431 = G__4453;
chunk__4432 = G__4454;
count__4433 = G__4455;
i__4434 = G__4456;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.compiler.emit_externs = (function cljs$compiler$emit_externs(var_args){
var G__4458 = arguments.length;
switch (G__4458) {
case 1:
return cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 4:
return cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$1 = (function (externs){
return cljs.compiler.emit_externs.call(null,cljs.core.PersistentVector.EMPTY,externs,cljs.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY),(cljs.core.truth_(cljs.env._STAR_compiler_STAR_)?new cljs.core.Keyword("cljs.analyzer","externs","cljs.analyzer/externs",893359239).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)):null));
});

cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$4 = (function (prefix,externs,top_level,known_externs){
var ks = cljs.core.seq.call(null,cljs.core.keys.call(null,externs));
while(true){
if(ks){
var k_4463 = cljs.core.first.call(null,ks);
var vec__4459_4464 = cljs.core.conj.call(null,prefix,k_4463);
var top_4465 = cljs.core.nth.call(null,vec__4459_4464,(0),null);
var prefix_SINGLEQUOTE__4466 = vec__4459_4464;
if(((cljs.core.not_EQ_.call(null,new cljs.core.Symbol(null,"prototype","prototype",519166522,null),k_4463)) && ((cljs.core.get_in.call(null,known_externs,prefix_SINGLEQUOTE__4466) == null)))){
if(!(((cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,top_level),top_4465)) || (cljs.core.contains_QMARK_.call(null,known_externs,top_4465))))){
cljs.compiler.emitln.call(null,"var ",clojure.string.join.call(null,".",cljs.core.map.call(null,cljs.compiler.munge,prefix_SINGLEQUOTE__4466)),";");

cljs.core.swap_BANG_.call(null,top_level,cljs.core.conj,top_4465);
} else {
cljs.compiler.emitln.call(null,clojure.string.join.call(null,".",cljs.core.map.call(null,cljs.compiler.munge,prefix_SINGLEQUOTE__4466)),";");
}
} else {
}

var m_4467 = cljs.core.get.call(null,externs,k_4463);
if(cljs.core.empty_QMARK_.call(null,m_4467)){
} else {
cljs.compiler.emit_externs.call(null,prefix_SINGLEQUOTE__4466,m_4467,top_level,known_externs);
}

var G__4468 = cljs.core.next.call(null,ks);
ks = G__4468;
continue;
} else {
return null;
}
break;
}
});

cljs.compiler.emit_externs.cljs$lang$maxFixedArity = 4;


//# sourceMappingURL=compiler.js.map
