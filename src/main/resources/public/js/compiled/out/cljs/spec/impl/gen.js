// Compiled by ClojureScript 1.9.495 {}
goog.provide('cljs.spec.impl.gen');
goog.require('cljs.core');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
cljs.spec.impl.gen.LazyVar = (function (f,cached){
this.f = f;
this.cached = cached;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.impl.gen.LazyVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(!((self__.cached == null))){
return self__.cached;
} else {
var x = self__.f.call(null);
if((x == null)){
} else {
self__.cached = x;
}

return x;
}
});

cljs.spec.impl.gen.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"cached","cached",-1216707864,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

cljs.spec.impl.gen.LazyVar.cljs$lang$type = true;

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorStr = "cljs.spec.impl.gen/LazyVar";

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorPrWriter = (function (this__25830__auto__,writer__25831__auto__,opt__25832__auto__){
return cljs.core._write.call(null,writer__25831__auto__,"cljs.spec.impl.gen/LazyVar");
});

cljs.spec.impl.gen.__GT_LazyVar = (function cljs$spec$impl$gen$__GT_LazyVar(f,cached){
return (new cljs.spec.impl.gen.LazyVar(f,cached));
});

cljs.spec.impl.gen.quick_check_ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined')){
return clojure.test.check.quick_check;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
cljs.spec.impl.gen.quick_check = (function cljs$spec$impl$gen$quick_check(var_args){
var args__26339__auto__ = [];
var len__26332__auto___33798 = arguments.length;
var i__26333__auto___33799 = (0);
while(true){
if((i__26333__auto___33799 < len__26332__auto___33798)){
args__26339__auto__.push((arguments[i__26333__auto___33799]));

var G__33800 = (i__26333__auto___33799 + (1));
i__26333__auto___33799 = G__33800;
continue;
} else {
}
break;
}

var argseq__26340__auto__ = ((((0) < args__26339__auto__.length))?(new cljs.core.IndexedSeq(args__26339__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__26340__auto__);
});

cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.quick_check_ref),args);
});

cljs.spec.impl.gen.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.quick_check.cljs$lang$applyTo = (function (seq33797){
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33797));
});

cljs.spec.impl.gen.for_all_STAR__ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined')){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.impl.gen.for_all_STAR_ = (function cljs$spec$impl$gen$for_all_STAR_(var_args){
var args__26339__auto__ = [];
var len__26332__auto___33802 = arguments.length;
var i__26333__auto___33803 = (0);
while(true){
if((i__26333__auto___33803 < len__26332__auto___33802)){
args__26339__auto__.push((arguments[i__26333__auto___33803]));

var G__33804 = (i__26333__auto___33803 + (1));
i__26333__auto___33803 = G__33804;
continue;
} else {
}
break;
}

var argseq__26340__auto__ = ((((0) < args__26339__auto__.length))?(new cljs.core.IndexedSeq(args__26339__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__26340__auto__);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.for_all_STAR__ref),args);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$applyTo = (function (seq33801){
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33801));
});

var g_QMARK__33805 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
var g_33806 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__33805){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
});})(g_QMARK__33805))
,null));
var mkg_33807 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__33805,g_33806){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
});})(g_QMARK__33805,g_33806))
,null));
cljs.spec.impl.gen.generator_QMARK_ = ((function (g_QMARK__33805,g_33806,mkg_33807){
return (function cljs$spec$impl$gen$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__33805).call(null,x);
});})(g_QMARK__33805,g_33806,mkg_33807))
;

cljs.spec.impl.gen.generator = ((function (g_QMARK__33805,g_33806,mkg_33807){
return (function cljs$spec$impl$gen$generator(gfn){
return cljs.core.deref.call(null,mkg_33807).call(null,gfn);
});})(g_QMARK__33805,g_33806,mkg_33807))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.impl.gen.generate = ((function (g_QMARK__33805,g_33806,mkg_33807){
return (function cljs$spec$impl$gen$generate(generator){
return cljs.core.deref.call(null,g_33806).call(null,generator);
});})(g_QMARK__33805,g_33806,mkg_33807))
;
cljs.spec.impl.gen.delay_impl = (function cljs$spec$impl$gen$delay_impl(gfnd){
return cljs.spec.impl.gen.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__33769__auto___33827 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.impl.gen.hash_map = ((function (g__33769__auto___33827){
return (function cljs$spec$impl$gen$hash_map(var_args){
var args__26339__auto__ = [];
var len__26332__auto___33828 = arguments.length;
var i__26333__auto___33829 = (0);
while(true){
if((i__26333__auto___33829 < len__26332__auto___33828)){
args__26339__auto__.push((arguments[i__26333__auto___33829]));

var G__33830 = (i__26333__auto___33829 + (1));
i__26333__auto___33829 = G__33830;
continue;
} else {
}
break;
}

var argseq__26340__auto__ = ((((0) < args__26339__auto__.length))?(new cljs.core.IndexedSeq(args__26339__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__26340__auto__);
});})(g__33769__auto___33827))
;

cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33769__auto___33827){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__33769__auto___33827),args);
});})(g__33769__auto___33827))
;

cljs.spec.impl.gen.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.hash_map.cljs$lang$applyTo = ((function (g__33769__auto___33827){
return (function (seq33808){
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33808));
});})(g__33769__auto___33827))
;


var g__33769__auto___33831 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.impl.gen.list = ((function (g__33769__auto___33831){
return (function cljs$spec$impl$gen$list(var_args){
var args__26339__auto__ = [];
var len__26332__auto___33832 = arguments.length;
var i__26333__auto___33833 = (0);
while(true){
if((i__26333__auto___33833 < len__26332__auto___33832)){
args__26339__auto__.push((arguments[i__26333__auto___33833]));

var G__33834 = (i__26333__auto___33833 + (1));
i__26333__auto___33833 = G__33834;
continue;
} else {
}
break;
}

var argseq__26340__auto__ = ((((0) < args__26339__auto__.length))?(new cljs.core.IndexedSeq(args__26339__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(argseq__26340__auto__);
});})(g__33769__auto___33831))
;

cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33769__auto___33831){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__33769__auto___33831),args);
});})(g__33769__auto___33831))
;

cljs.spec.impl.gen.list.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.list.cljs$lang$applyTo = ((function (g__33769__auto___33831){
return (function (seq33809){
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33809));
});})(g__33769__auto___33831))
;


var g__33769__auto___33835 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.impl.gen.map = ((function (g__33769__auto___33835){
return (function cljs$spec$impl$gen$map(var_args){
var args__26339__auto__ = [];
var len__26332__auto___33836 = arguments.length;
var i__26333__auto___33837 = (0);
while(true){
if((i__26333__auto___33837 < len__26332__auto___33836)){
args__26339__auto__.push((arguments[i__26333__auto___33837]));

var G__33838 = (i__26333__auto___33837 + (1));
i__26333__auto___33837 = G__33838;
continue;
} else {
}
break;
}

var argseq__26340__auto__ = ((((0) < args__26339__auto__.length))?(new cljs.core.IndexedSeq(args__26339__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(argseq__26340__auto__);
});})(g__33769__auto___33835))
;

cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33769__auto___33835){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__33769__auto___33835),args);
});})(g__33769__auto___33835))
;

cljs.spec.impl.gen.map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.map.cljs$lang$applyTo = ((function (g__33769__auto___33835){
return (function (seq33810){
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33810));
});})(g__33769__auto___33835))
;


var g__33769__auto___33839 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.impl.gen.not_empty = ((function (g__33769__auto___33839){
return (function cljs$spec$impl$gen$not_empty(var_args){
var args__26339__auto__ = [];
var len__26332__auto___33840 = arguments.length;
var i__26333__auto___33841 = (0);
while(true){
if((i__26333__auto___33841 < len__26332__auto___33840)){
args__26339__auto__.push((arguments[i__26333__auto___33841]));

var G__33842 = (i__26333__auto___33841 + (1));
i__26333__auto___33841 = G__33842;
continue;
} else {
}
break;
}

var argseq__26340__auto__ = ((((0) < args__26339__auto__.length))?(new cljs.core.IndexedSeq(args__26339__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__26340__auto__);
});})(g__33769__auto___33839))
;

cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33769__auto___33839){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__33769__auto___33839),args);
});})(g__33769__auto___33839))
;

cljs.spec.impl.gen.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.not_empty.cljs$lang$applyTo = ((function (g__33769__auto___33839){
return (function (seq33811){
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33811));
});})(g__33769__auto___33839))
;


var g__33769__auto___33843 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.impl.gen.set = ((function (g__33769__auto___33843){
return (function cljs$spec$impl$gen$set(var_args){
var args__26339__auto__ = [];
var len__26332__auto___33844 = arguments.length;
var i__26333__auto___33845 = (0);
while(true){
if((i__26333__auto___33845 < len__26332__auto___33844)){
args__26339__auto__.push((arguments[i__26333__auto___33845]));

var G__33846 = (i__26333__auto___33845 + (1));
i__26333__auto___33845 = G__33846;
continue;
} else {
}
break;
}

var argseq__26340__auto__ = ((((0) < args__26339__auto__.length))?(new cljs.core.IndexedSeq(args__26339__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(argseq__26340__auto__);
});})(g__33769__auto___33843))
;

cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33769__auto___33843){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__33769__auto___33843),args);
});})(g__33769__auto___33843))
;

cljs.spec.impl.gen.set.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.set.cljs$lang$applyTo = ((function (g__33769__auto___33843){
return (function (seq33812){
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33812));
});})(g__33769__auto___33843))
;


var g__33769__auto___33847 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.impl.gen.vector = ((function (g__33769__auto___33847){
return (function cljs$spec$impl$gen$vector(var_args){
var args__26339__auto__ = [];
var len__26332__auto___33848 = arguments.length;
var i__26333__auto___33849 = (0);
while(true){
if((i__26333__auto___33849 < len__26332__auto___33848)){
args__26339__auto__.push((arguments[i__26333__auto___33849]));

var G__33850 = (i__26333__auto___33849 + (1));
i__26333__auto___33849 = G__33850;
continue;
} else {
}
break;
}

var argseq__26340__auto__ = ((((0) < args__26339__auto__.length))?(new cljs.core.IndexedSeq(args__26339__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__26340__auto__);
});})(g__33769__auto___33847))
;

cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33769__auto___33847){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__33769__auto___33847),args);
});})(g__33769__auto___33847))
;

cljs.spec.impl.gen.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector.cljs$lang$applyTo = ((function (g__33769__auto___33847){
return (function (seq33813){
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33813));
});})(g__33769__auto___33847))
;


var g__33769__auto___33851 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.impl.gen.vector_distinct = ((function (g__33769__auto___33851){
return (function cljs$spec$impl$gen$vector_distinct(var_args){
var args__26339__auto__ = [];
var len__26332__auto___33852 = arguments.length;
var i__26333__auto___33853 = (0);
while(true){
if((i__26333__auto___33853 < len__26332__auto___33852)){
args__26339__auto__.push((arguments[i__26333__auto___33853]));

var G__33854 = (i__26333__auto___33853 + (1));
i__26333__auto___33853 = G__33854;
continue;
} else {
}
break;
}

var argseq__26340__auto__ = ((((0) < args__26339__auto__.length))?(new cljs.core.IndexedSeq(args__26339__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__26340__auto__);
});})(g__33769__auto___33851))
;

cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33769__auto___33851){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__33769__auto___33851),args);
});})(g__33769__auto___33851))
;

cljs.spec.impl.gen.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector_distinct.cljs$lang$applyTo = ((function (g__33769__auto___33851){
return (function (seq33814){
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33814));
});})(g__33769__auto___33851))
;


var g__33769__auto___33855 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.impl.gen.fmap = ((function (g__33769__auto___33855){
return (function cljs$spec$impl$gen$fmap(var_args){
var args__26339__auto__ = [];
var len__26332__auto___33856 = arguments.length;
var i__26333__auto___33857 = (0);
while(true){
if((i__26333__auto___33857 < len__26332__auto___33856)){
args__26339__auto__.push((arguments[i__26333__auto___33857]));

var G__33858 = (i__26333__auto___33857 + (1));
i__26333__auto___33857 = G__33858;
continue;
} else {
}
break;
}

var argseq__26340__auto__ = ((((0) < args__26339__auto__.length))?(new cljs.core.IndexedSeq(args__26339__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__26340__auto__);
});})(g__33769__auto___33855))
;

cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33769__auto___33855){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__33769__auto___33855),args);
});})(g__33769__auto___33855))
;

cljs.spec.impl.gen.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.fmap.cljs$lang$applyTo = ((function (g__33769__auto___33855){
return (function (seq33815){
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33815));
});})(g__33769__auto___33855))
;


var g__33769__auto___33859 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.impl.gen.elements = ((function (g__33769__auto___33859){
return (function cljs$spec$impl$gen$elements(var_args){
var args__26339__auto__ = [];
var len__26332__auto___33860 = arguments.length;
var i__26333__auto___33861 = (0);
while(true){
if((i__26333__auto___33861 < len__26332__auto___33860)){
args__26339__auto__.push((arguments[i__26333__auto___33861]));

var G__33862 = (i__26333__auto___33861 + (1));
i__26333__auto___33861 = G__33862;
continue;
} else {
}
break;
}

var argseq__26340__auto__ = ((((0) < args__26339__auto__.length))?(new cljs.core.IndexedSeq(args__26339__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__26340__auto__);
});})(g__33769__auto___33859))
;

cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33769__auto___33859){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__33769__auto___33859),args);
});})(g__33769__auto___33859))
;

cljs.spec.impl.gen.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.elements.cljs$lang$applyTo = ((function (g__33769__auto___33859){
return (function (seq33816){
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33816));
});})(g__33769__auto___33859))
;


var g__33769__auto___33863 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.impl.gen.bind = ((function (g__33769__auto___33863){
return (function cljs$spec$impl$gen$bind(var_args){
var args__26339__auto__ = [];
var len__26332__auto___33864 = arguments.length;
var i__26333__auto___33865 = (0);
while(true){
if((i__26333__auto___33865 < len__26332__auto___33864)){
args__26339__auto__.push((arguments[i__26333__auto___33865]));

var G__33866 = (i__26333__auto___33865 + (1));
i__26333__auto___33865 = G__33866;
continue;
} else {
}
break;
}

var argseq__26340__auto__ = ((((0) < args__26339__auto__.length))?(new cljs.core.IndexedSeq(args__26339__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__26340__auto__);
});})(g__33769__auto___33863))
;

cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33769__auto___33863){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__33769__auto___33863),args);
});})(g__33769__auto___33863))
;

cljs.spec.impl.gen.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.bind.cljs$lang$applyTo = ((function (g__33769__auto___33863){
return (function (seq33817){
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33817));
});})(g__33769__auto___33863))
;


var g__33769__auto___33867 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.impl.gen.choose = ((function (g__33769__auto___33867){
return (function cljs$spec$impl$gen$choose(var_args){
var args__26339__auto__ = [];
var len__26332__auto___33868 = arguments.length;
var i__26333__auto___33869 = (0);
while(true){
if((i__26333__auto___33869 < len__26332__auto___33868)){
args__26339__auto__.push((arguments[i__26333__auto___33869]));

var G__33870 = (i__26333__auto___33869 + (1));
i__26333__auto___33869 = G__33870;
continue;
} else {
}
break;
}

var argseq__26340__auto__ = ((((0) < args__26339__auto__.length))?(new cljs.core.IndexedSeq(args__26339__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__26340__auto__);
});})(g__33769__auto___33867))
;

cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33769__auto___33867){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__33769__auto___33867),args);
});})(g__33769__auto___33867))
;

cljs.spec.impl.gen.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.choose.cljs$lang$applyTo = ((function (g__33769__auto___33867){
return (function (seq33818){
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33818));
});})(g__33769__auto___33867))
;


var g__33769__auto___33871 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.impl.gen.one_of = ((function (g__33769__auto___33871){
return (function cljs$spec$impl$gen$one_of(var_args){
var args__26339__auto__ = [];
var len__26332__auto___33872 = arguments.length;
var i__26333__auto___33873 = (0);
while(true){
if((i__26333__auto___33873 < len__26332__auto___33872)){
args__26339__auto__.push((arguments[i__26333__auto___33873]));

var G__33874 = (i__26333__auto___33873 + (1));
i__26333__auto___33873 = G__33874;
continue;
} else {
}
break;
}

var argseq__26340__auto__ = ((((0) < args__26339__auto__.length))?(new cljs.core.IndexedSeq(args__26339__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__26340__auto__);
});})(g__33769__auto___33871))
;

cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33769__auto___33871){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__33769__auto___33871),args);
});})(g__33769__auto___33871))
;

cljs.spec.impl.gen.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.one_of.cljs$lang$applyTo = ((function (g__33769__auto___33871){
return (function (seq33819){
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33819));
});})(g__33769__auto___33871))
;


var g__33769__auto___33875 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.impl.gen.such_that = ((function (g__33769__auto___33875){
return (function cljs$spec$impl$gen$such_that(var_args){
var args__26339__auto__ = [];
var len__26332__auto___33876 = arguments.length;
var i__26333__auto___33877 = (0);
while(true){
if((i__26333__auto___33877 < len__26332__auto___33876)){
args__26339__auto__.push((arguments[i__26333__auto___33877]));

var G__33878 = (i__26333__auto___33877 + (1));
i__26333__auto___33877 = G__33878;
continue;
} else {
}
break;
}

var argseq__26340__auto__ = ((((0) < args__26339__auto__.length))?(new cljs.core.IndexedSeq(args__26339__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__26340__auto__);
});})(g__33769__auto___33875))
;

cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33769__auto___33875){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__33769__auto___33875),args);
});})(g__33769__auto___33875))
;

cljs.spec.impl.gen.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.such_that.cljs$lang$applyTo = ((function (g__33769__auto___33875){
return (function (seq33820){
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33820));
});})(g__33769__auto___33875))
;


var g__33769__auto___33879 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.impl.gen.tuple = ((function (g__33769__auto___33879){
return (function cljs$spec$impl$gen$tuple(var_args){
var args__26339__auto__ = [];
var len__26332__auto___33880 = arguments.length;
var i__26333__auto___33881 = (0);
while(true){
if((i__26333__auto___33881 < len__26332__auto___33880)){
args__26339__auto__.push((arguments[i__26333__auto___33881]));

var G__33882 = (i__26333__auto___33881 + (1));
i__26333__auto___33881 = G__33882;
continue;
} else {
}
break;
}

var argseq__26340__auto__ = ((((0) < args__26339__auto__.length))?(new cljs.core.IndexedSeq(args__26339__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__26340__auto__);
});})(g__33769__auto___33879))
;

cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33769__auto___33879){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__33769__auto___33879),args);
});})(g__33769__auto___33879))
;

cljs.spec.impl.gen.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.tuple.cljs$lang$applyTo = ((function (g__33769__auto___33879){
return (function (seq33821){
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33821));
});})(g__33769__auto___33879))
;


var g__33769__auto___33883 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.impl.gen.sample = ((function (g__33769__auto___33883){
return (function cljs$spec$impl$gen$sample(var_args){
var args__26339__auto__ = [];
var len__26332__auto___33884 = arguments.length;
var i__26333__auto___33885 = (0);
while(true){
if((i__26333__auto___33885 < len__26332__auto___33884)){
args__26339__auto__.push((arguments[i__26333__auto___33885]));

var G__33886 = (i__26333__auto___33885 + (1));
i__26333__auto___33885 = G__33886;
continue;
} else {
}
break;
}

var argseq__26340__auto__ = ((((0) < args__26339__auto__.length))?(new cljs.core.IndexedSeq(args__26339__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__26340__auto__);
});})(g__33769__auto___33883))
;

cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33769__auto___33883){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__33769__auto___33883),args);
});})(g__33769__auto___33883))
;

cljs.spec.impl.gen.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.sample.cljs$lang$applyTo = ((function (g__33769__auto___33883){
return (function (seq33822){
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33822));
});})(g__33769__auto___33883))
;


var g__33769__auto___33887 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.impl.gen.return$ = ((function (g__33769__auto___33887){
return (function cljs$spec$impl$gen$return(var_args){
var args__26339__auto__ = [];
var len__26332__auto___33888 = arguments.length;
var i__26333__auto___33889 = (0);
while(true){
if((i__26333__auto___33889 < len__26332__auto___33888)){
args__26339__auto__.push((arguments[i__26333__auto___33889]));

var G__33890 = (i__26333__auto___33889 + (1));
i__26333__auto___33889 = G__33890;
continue;
} else {
}
break;
}

var argseq__26340__auto__ = ((((0) < args__26339__auto__.length))?(new cljs.core.IndexedSeq(args__26339__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__26340__auto__);
});})(g__33769__auto___33887))
;

cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33769__auto___33887){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__33769__auto___33887),args);
});})(g__33769__auto___33887))
;

cljs.spec.impl.gen.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.return$.cljs$lang$applyTo = ((function (g__33769__auto___33887){
return (function (seq33823){
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33823));
});})(g__33769__auto___33887))
;


var g__33769__auto___33891 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.impl.gen.large_integer_STAR_ = ((function (g__33769__auto___33891){
return (function cljs$spec$impl$gen$large_integer_STAR_(var_args){
var args__26339__auto__ = [];
var len__26332__auto___33892 = arguments.length;
var i__26333__auto___33893 = (0);
while(true){
if((i__26333__auto___33893 < len__26332__auto___33892)){
args__26339__auto__.push((arguments[i__26333__auto___33893]));

var G__33894 = (i__26333__auto___33893 + (1));
i__26333__auto___33893 = G__33894;
continue;
} else {
}
break;
}

var argseq__26340__auto__ = ((((0) < args__26339__auto__.length))?(new cljs.core.IndexedSeq(args__26339__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__26340__auto__);
});})(g__33769__auto___33891))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33769__auto___33891){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__33769__auto___33891),args);
});})(g__33769__auto___33891))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$applyTo = ((function (g__33769__auto___33891){
return (function (seq33824){
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33824));
});})(g__33769__auto___33891))
;


var g__33769__auto___33895 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.impl.gen.double_STAR_ = ((function (g__33769__auto___33895){
return (function cljs$spec$impl$gen$double_STAR_(var_args){
var args__26339__auto__ = [];
var len__26332__auto___33896 = arguments.length;
var i__26333__auto___33897 = (0);
while(true){
if((i__26333__auto___33897 < len__26332__auto___33896)){
args__26339__auto__.push((arguments[i__26333__auto___33897]));

var G__33898 = (i__26333__auto___33897 + (1));
i__26333__auto___33897 = G__33898;
continue;
} else {
}
break;
}

var argseq__26340__auto__ = ((((0) < args__26339__auto__.length))?(new cljs.core.IndexedSeq(args__26339__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__26340__auto__);
});})(g__33769__auto___33895))
;

cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33769__auto___33895){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__33769__auto___33895),args);
});})(g__33769__auto___33895))
;

cljs.spec.impl.gen.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double_STAR_.cljs$lang$applyTo = ((function (g__33769__auto___33895){
return (function (seq33825){
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33825));
});})(g__33769__auto___33895))
;


var g__33769__auto___33899 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.frequency !== 'undefined')){
return clojure.test.check.generators.frequency;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/frequency
 */
cljs.spec.impl.gen.frequency = ((function (g__33769__auto___33899){
return (function cljs$spec$impl$gen$frequency(var_args){
var args__26339__auto__ = [];
var len__26332__auto___33900 = arguments.length;
var i__26333__auto___33901 = (0);
while(true){
if((i__26333__auto___33901 < len__26332__auto___33900)){
args__26339__auto__.push((arguments[i__26333__auto___33901]));

var G__33902 = (i__26333__auto___33901 + (1));
i__26333__auto___33901 = G__33902;
continue;
} else {
}
break;
}

var argseq__26340__auto__ = ((((0) < args__26339__auto__.length))?(new cljs.core.IndexedSeq(args__26339__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.frequency.cljs$core$IFn$_invoke$arity$variadic(argseq__26340__auto__);
});})(g__33769__auto___33899))
;

cljs.spec.impl.gen.frequency.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33769__auto___33899){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__33769__auto___33899),args);
});})(g__33769__auto___33899))
;

cljs.spec.impl.gen.frequency.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.frequency.cljs$lang$applyTo = ((function (g__33769__auto___33899){
return (function (seq33826){
return cljs.spec.impl.gen.frequency.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33826));
});})(g__33769__auto___33899))
;

var g__33782__auto___33924 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.impl.gen.any = ((function (g__33782__auto___33924){
return (function cljs$spec$impl$gen$any(var_args){
var args__26339__auto__ = [];
var len__26332__auto___33925 = arguments.length;
var i__26333__auto___33926 = (0);
while(true){
if((i__26333__auto___33926 < len__26332__auto___33925)){
args__26339__auto__.push((arguments[i__26333__auto___33926]));

var G__33927 = (i__26333__auto___33926 + (1));
i__26333__auto___33926 = G__33927;
continue;
} else {
}
break;
}

var argseq__26340__auto__ = ((((0) < args__26339__auto__.length))?(new cljs.core.IndexedSeq(args__26339__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(argseq__26340__auto__);
});})(g__33782__auto___33924))
;

cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33782__auto___33924){
return (function (args){
return cljs.core.deref.call(null,g__33782__auto___33924);
});})(g__33782__auto___33924))
;

cljs.spec.impl.gen.any.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any.cljs$lang$applyTo = ((function (g__33782__auto___33924){
return (function (seq33903){
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33903));
});})(g__33782__auto___33924))
;


var g__33782__auto___33928 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.impl.gen.any_printable = ((function (g__33782__auto___33928){
return (function cljs$spec$impl$gen$any_printable(var_args){
var args__26339__auto__ = [];
var len__26332__auto___33929 = arguments.length;
var i__26333__auto___33930 = (0);
while(true){
if((i__26333__auto___33930 < len__26332__auto___33929)){
args__26339__auto__.push((arguments[i__26333__auto___33930]));

var G__33931 = (i__26333__auto___33930 + (1));
i__26333__auto___33930 = G__33931;
continue;
} else {
}
break;
}

var argseq__26340__auto__ = ((((0) < args__26339__auto__.length))?(new cljs.core.IndexedSeq(args__26339__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__26340__auto__);
});})(g__33782__auto___33928))
;

cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33782__auto___33928){
return (function (args){
return cljs.core.deref.call(null,g__33782__auto___33928);
});})(g__33782__auto___33928))
;

cljs.spec.impl.gen.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any_printable.cljs$lang$applyTo = ((function (g__33782__auto___33928){
return (function (seq33904){
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33904));
});})(g__33782__auto___33928))
;


var g__33782__auto___33932 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.impl.gen.boolean$ = ((function (g__33782__auto___33932){
return (function cljs$spec$impl$gen$boolean(var_args){
var args__26339__auto__ = [];
var len__26332__auto___33933 = arguments.length;
var i__26333__auto___33934 = (0);
while(true){
if((i__26333__auto___33934 < len__26332__auto___33933)){
args__26339__auto__.push((arguments[i__26333__auto___33934]));

var G__33935 = (i__26333__auto___33934 + (1));
i__26333__auto___33934 = G__33935;
continue;
} else {
}
break;
}

var argseq__26340__auto__ = ((((0) < args__26339__auto__.length))?(new cljs.core.IndexedSeq(args__26339__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__26340__auto__);
});})(g__33782__auto___33932))
;

cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33782__auto___33932){
return (function (args){
return cljs.core.deref.call(null,g__33782__auto___33932);
});})(g__33782__auto___33932))
;

cljs.spec.impl.gen.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.boolean$.cljs$lang$applyTo = ((function (g__33782__auto___33932){
return (function (seq33905){
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33905));
});})(g__33782__auto___33932))
;


var g__33782__auto___33936 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.impl.gen.char$ = ((function (g__33782__auto___33936){
return (function cljs$spec$impl$gen$char(var_args){
var args__26339__auto__ = [];
var len__26332__auto___33937 = arguments.length;
var i__26333__auto___33938 = (0);
while(true){
if((i__26333__auto___33938 < len__26332__auto___33937)){
args__26339__auto__.push((arguments[i__26333__auto___33938]));

var G__33939 = (i__26333__auto___33938 + (1));
i__26333__auto___33938 = G__33939;
continue;
} else {
}
break;
}

var argseq__26340__auto__ = ((((0) < args__26339__auto__.length))?(new cljs.core.IndexedSeq(args__26339__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__26340__auto__);
});})(g__33782__auto___33936))
;

cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33782__auto___33936){
return (function (args){
return cljs.core.deref.call(null,g__33782__auto___33936);
});})(g__33782__auto___33936))
;

cljs.spec.impl.gen.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char$.cljs$lang$applyTo = ((function (g__33782__auto___33936){
return (function (seq33906){
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33906));
});})(g__33782__auto___33936))
;


var g__33782__auto___33940 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.impl.gen.char_alpha = ((function (g__33782__auto___33940){
return (function cljs$spec$impl$gen$char_alpha(var_args){
var args__26339__auto__ = [];
var len__26332__auto___33941 = arguments.length;
var i__26333__auto___33942 = (0);
while(true){
if((i__26333__auto___33942 < len__26332__auto___33941)){
args__26339__auto__.push((arguments[i__26333__auto___33942]));

var G__33943 = (i__26333__auto___33942 + (1));
i__26333__auto___33942 = G__33943;
continue;
} else {
}
break;
}

var argseq__26340__auto__ = ((((0) < args__26339__auto__.length))?(new cljs.core.IndexedSeq(args__26339__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__26340__auto__);
});})(g__33782__auto___33940))
;

cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33782__auto___33940){
return (function (args){
return cljs.core.deref.call(null,g__33782__auto___33940);
});})(g__33782__auto___33940))
;

cljs.spec.impl.gen.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alpha.cljs$lang$applyTo = ((function (g__33782__auto___33940){
return (function (seq33907){
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33907));
});})(g__33782__auto___33940))
;


var g__33782__auto___33944 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.impl.gen.char_alphanumeric = ((function (g__33782__auto___33944){
return (function cljs$spec$impl$gen$char_alphanumeric(var_args){
var args__26339__auto__ = [];
var len__26332__auto___33945 = arguments.length;
var i__26333__auto___33946 = (0);
while(true){
if((i__26333__auto___33946 < len__26332__auto___33945)){
args__26339__auto__.push((arguments[i__26333__auto___33946]));

var G__33947 = (i__26333__auto___33946 + (1));
i__26333__auto___33946 = G__33947;
continue;
} else {
}
break;
}

var argseq__26340__auto__ = ((((0) < args__26339__auto__.length))?(new cljs.core.IndexedSeq(args__26339__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__26340__auto__);
});})(g__33782__auto___33944))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33782__auto___33944){
return (function (args){
return cljs.core.deref.call(null,g__33782__auto___33944);
});})(g__33782__auto___33944))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$applyTo = ((function (g__33782__auto___33944){
return (function (seq33908){
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33908));
});})(g__33782__auto___33944))
;


var g__33782__auto___33948 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.impl.gen.char_ascii = ((function (g__33782__auto___33948){
return (function cljs$spec$impl$gen$char_ascii(var_args){
var args__26339__auto__ = [];
var len__26332__auto___33949 = arguments.length;
var i__26333__auto___33950 = (0);
while(true){
if((i__26333__auto___33950 < len__26332__auto___33949)){
args__26339__auto__.push((arguments[i__26333__auto___33950]));

var G__33951 = (i__26333__auto___33950 + (1));
i__26333__auto___33950 = G__33951;
continue;
} else {
}
break;
}

var argseq__26340__auto__ = ((((0) < args__26339__auto__.length))?(new cljs.core.IndexedSeq(args__26339__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__26340__auto__);
});})(g__33782__auto___33948))
;

cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33782__auto___33948){
return (function (args){
return cljs.core.deref.call(null,g__33782__auto___33948);
});})(g__33782__auto___33948))
;

cljs.spec.impl.gen.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_ascii.cljs$lang$applyTo = ((function (g__33782__auto___33948){
return (function (seq33909){
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33909));
});})(g__33782__auto___33948))
;


var g__33782__auto___33952 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.impl.gen.double$ = ((function (g__33782__auto___33952){
return (function cljs$spec$impl$gen$double(var_args){
var args__26339__auto__ = [];
var len__26332__auto___33953 = arguments.length;
var i__26333__auto___33954 = (0);
while(true){
if((i__26333__auto___33954 < len__26332__auto___33953)){
args__26339__auto__.push((arguments[i__26333__auto___33954]));

var G__33955 = (i__26333__auto___33954 + (1));
i__26333__auto___33954 = G__33955;
continue;
} else {
}
break;
}

var argseq__26340__auto__ = ((((0) < args__26339__auto__.length))?(new cljs.core.IndexedSeq(args__26339__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__26340__auto__);
});})(g__33782__auto___33952))
;

cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33782__auto___33952){
return (function (args){
return cljs.core.deref.call(null,g__33782__auto___33952);
});})(g__33782__auto___33952))
;

cljs.spec.impl.gen.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double$.cljs$lang$applyTo = ((function (g__33782__auto___33952){
return (function (seq33910){
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33910));
});})(g__33782__auto___33952))
;


var g__33782__auto___33956 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.impl.gen.int$ = ((function (g__33782__auto___33956){
return (function cljs$spec$impl$gen$int(var_args){
var args__26339__auto__ = [];
var len__26332__auto___33957 = arguments.length;
var i__26333__auto___33958 = (0);
while(true){
if((i__26333__auto___33958 < len__26332__auto___33957)){
args__26339__auto__.push((arguments[i__26333__auto___33958]));

var G__33959 = (i__26333__auto___33958 + (1));
i__26333__auto___33958 = G__33959;
continue;
} else {
}
break;
}

var argseq__26340__auto__ = ((((0) < args__26339__auto__.length))?(new cljs.core.IndexedSeq(args__26339__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__26340__auto__);
});})(g__33782__auto___33956))
;

cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33782__auto___33956){
return (function (args){
return cljs.core.deref.call(null,g__33782__auto___33956);
});})(g__33782__auto___33956))
;

cljs.spec.impl.gen.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.int$.cljs$lang$applyTo = ((function (g__33782__auto___33956){
return (function (seq33911){
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33911));
});})(g__33782__auto___33956))
;


var g__33782__auto___33960 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.impl.gen.keyword = ((function (g__33782__auto___33960){
return (function cljs$spec$impl$gen$keyword(var_args){
var args__26339__auto__ = [];
var len__26332__auto___33961 = arguments.length;
var i__26333__auto___33962 = (0);
while(true){
if((i__26333__auto___33962 < len__26332__auto___33961)){
args__26339__auto__.push((arguments[i__26333__auto___33962]));

var G__33963 = (i__26333__auto___33962 + (1));
i__26333__auto___33962 = G__33963;
continue;
} else {
}
break;
}

var argseq__26340__auto__ = ((((0) < args__26339__auto__.length))?(new cljs.core.IndexedSeq(args__26339__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__26340__auto__);
});})(g__33782__auto___33960))
;

cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33782__auto___33960){
return (function (args){
return cljs.core.deref.call(null,g__33782__auto___33960);
});})(g__33782__auto___33960))
;

cljs.spec.impl.gen.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword.cljs$lang$applyTo = ((function (g__33782__auto___33960){
return (function (seq33912){
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33912));
});})(g__33782__auto___33960))
;


var g__33782__auto___33964 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.impl.gen.keyword_ns = ((function (g__33782__auto___33964){
return (function cljs$spec$impl$gen$keyword_ns(var_args){
var args__26339__auto__ = [];
var len__26332__auto___33965 = arguments.length;
var i__26333__auto___33966 = (0);
while(true){
if((i__26333__auto___33966 < len__26332__auto___33965)){
args__26339__auto__.push((arguments[i__26333__auto___33966]));

var G__33967 = (i__26333__auto___33966 + (1));
i__26333__auto___33966 = G__33967;
continue;
} else {
}
break;
}

var argseq__26340__auto__ = ((((0) < args__26339__auto__.length))?(new cljs.core.IndexedSeq(args__26339__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__26340__auto__);
});})(g__33782__auto___33964))
;

cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33782__auto___33964){
return (function (args){
return cljs.core.deref.call(null,g__33782__auto___33964);
});})(g__33782__auto___33964))
;

cljs.spec.impl.gen.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword_ns.cljs$lang$applyTo = ((function (g__33782__auto___33964){
return (function (seq33913){
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33913));
});})(g__33782__auto___33964))
;


var g__33782__auto___33968 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.impl.gen.large_integer = ((function (g__33782__auto___33968){
return (function cljs$spec$impl$gen$large_integer(var_args){
var args__26339__auto__ = [];
var len__26332__auto___33969 = arguments.length;
var i__26333__auto___33970 = (0);
while(true){
if((i__26333__auto___33970 < len__26332__auto___33969)){
args__26339__auto__.push((arguments[i__26333__auto___33970]));

var G__33971 = (i__26333__auto___33970 + (1));
i__26333__auto___33970 = G__33971;
continue;
} else {
}
break;
}

var argseq__26340__auto__ = ((((0) < args__26339__auto__.length))?(new cljs.core.IndexedSeq(args__26339__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__26340__auto__);
});})(g__33782__auto___33968))
;

cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33782__auto___33968){
return (function (args){
return cljs.core.deref.call(null,g__33782__auto___33968);
});})(g__33782__auto___33968))
;

cljs.spec.impl.gen.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer.cljs$lang$applyTo = ((function (g__33782__auto___33968){
return (function (seq33914){
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33914));
});})(g__33782__auto___33968))
;


var g__33782__auto___33972 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.impl.gen.ratio = ((function (g__33782__auto___33972){
return (function cljs$spec$impl$gen$ratio(var_args){
var args__26339__auto__ = [];
var len__26332__auto___33973 = arguments.length;
var i__26333__auto___33974 = (0);
while(true){
if((i__26333__auto___33974 < len__26332__auto___33973)){
args__26339__auto__.push((arguments[i__26333__auto___33974]));

var G__33975 = (i__26333__auto___33974 + (1));
i__26333__auto___33974 = G__33975;
continue;
} else {
}
break;
}

var argseq__26340__auto__ = ((((0) < args__26339__auto__.length))?(new cljs.core.IndexedSeq(args__26339__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__26340__auto__);
});})(g__33782__auto___33972))
;

cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33782__auto___33972){
return (function (args){
return cljs.core.deref.call(null,g__33782__auto___33972);
});})(g__33782__auto___33972))
;

cljs.spec.impl.gen.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.ratio.cljs$lang$applyTo = ((function (g__33782__auto___33972){
return (function (seq33915){
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33915));
});})(g__33782__auto___33972))
;


var g__33782__auto___33976 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.impl.gen.simple_type = ((function (g__33782__auto___33976){
return (function cljs$spec$impl$gen$simple_type(var_args){
var args__26339__auto__ = [];
var len__26332__auto___33977 = arguments.length;
var i__26333__auto___33978 = (0);
while(true){
if((i__26333__auto___33978 < len__26332__auto___33977)){
args__26339__auto__.push((arguments[i__26333__auto___33978]));

var G__33979 = (i__26333__auto___33978 + (1));
i__26333__auto___33978 = G__33979;
continue;
} else {
}
break;
}

var argseq__26340__auto__ = ((((0) < args__26339__auto__.length))?(new cljs.core.IndexedSeq(args__26339__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__26340__auto__);
});})(g__33782__auto___33976))
;

cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33782__auto___33976){
return (function (args){
return cljs.core.deref.call(null,g__33782__auto___33976);
});})(g__33782__auto___33976))
;

cljs.spec.impl.gen.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type.cljs$lang$applyTo = ((function (g__33782__auto___33976){
return (function (seq33916){
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33916));
});})(g__33782__auto___33976))
;


var g__33782__auto___33980 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.impl.gen.simple_type_printable = ((function (g__33782__auto___33980){
return (function cljs$spec$impl$gen$simple_type_printable(var_args){
var args__26339__auto__ = [];
var len__26332__auto___33981 = arguments.length;
var i__26333__auto___33982 = (0);
while(true){
if((i__26333__auto___33982 < len__26332__auto___33981)){
args__26339__auto__.push((arguments[i__26333__auto___33982]));

var G__33983 = (i__26333__auto___33982 + (1));
i__26333__auto___33982 = G__33983;
continue;
} else {
}
break;
}

var argseq__26340__auto__ = ((((0) < args__26339__auto__.length))?(new cljs.core.IndexedSeq(args__26339__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__26340__auto__);
});})(g__33782__auto___33980))
;

cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33782__auto___33980){
return (function (args){
return cljs.core.deref.call(null,g__33782__auto___33980);
});})(g__33782__auto___33980))
;

cljs.spec.impl.gen.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type_printable.cljs$lang$applyTo = ((function (g__33782__auto___33980){
return (function (seq33917){
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33917));
});})(g__33782__auto___33980))
;


var g__33782__auto___33984 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.impl.gen.string = ((function (g__33782__auto___33984){
return (function cljs$spec$impl$gen$string(var_args){
var args__26339__auto__ = [];
var len__26332__auto___33985 = arguments.length;
var i__26333__auto___33986 = (0);
while(true){
if((i__26333__auto___33986 < len__26332__auto___33985)){
args__26339__auto__.push((arguments[i__26333__auto___33986]));

var G__33987 = (i__26333__auto___33986 + (1));
i__26333__auto___33986 = G__33987;
continue;
} else {
}
break;
}

var argseq__26340__auto__ = ((((0) < args__26339__auto__.length))?(new cljs.core.IndexedSeq(args__26339__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(argseq__26340__auto__);
});})(g__33782__auto___33984))
;

cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33782__auto___33984){
return (function (args){
return cljs.core.deref.call(null,g__33782__auto___33984);
});})(g__33782__auto___33984))
;

cljs.spec.impl.gen.string.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string.cljs$lang$applyTo = ((function (g__33782__auto___33984){
return (function (seq33918){
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33918));
});})(g__33782__auto___33984))
;


var g__33782__auto___33988 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.impl.gen.string_ascii = ((function (g__33782__auto___33988){
return (function cljs$spec$impl$gen$string_ascii(var_args){
var args__26339__auto__ = [];
var len__26332__auto___33989 = arguments.length;
var i__26333__auto___33990 = (0);
while(true){
if((i__26333__auto___33990 < len__26332__auto___33989)){
args__26339__auto__.push((arguments[i__26333__auto___33990]));

var G__33991 = (i__26333__auto___33990 + (1));
i__26333__auto___33990 = G__33991;
continue;
} else {
}
break;
}

var argseq__26340__auto__ = ((((0) < args__26339__auto__.length))?(new cljs.core.IndexedSeq(args__26339__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__26340__auto__);
});})(g__33782__auto___33988))
;

cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33782__auto___33988){
return (function (args){
return cljs.core.deref.call(null,g__33782__auto___33988);
});})(g__33782__auto___33988))
;

cljs.spec.impl.gen.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_ascii.cljs$lang$applyTo = ((function (g__33782__auto___33988){
return (function (seq33919){
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33919));
});})(g__33782__auto___33988))
;


var g__33782__auto___33992 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.impl.gen.string_alphanumeric = ((function (g__33782__auto___33992){
return (function cljs$spec$impl$gen$string_alphanumeric(var_args){
var args__26339__auto__ = [];
var len__26332__auto___33993 = arguments.length;
var i__26333__auto___33994 = (0);
while(true){
if((i__26333__auto___33994 < len__26332__auto___33993)){
args__26339__auto__.push((arguments[i__26333__auto___33994]));

var G__33995 = (i__26333__auto___33994 + (1));
i__26333__auto___33994 = G__33995;
continue;
} else {
}
break;
}

var argseq__26340__auto__ = ((((0) < args__26339__auto__.length))?(new cljs.core.IndexedSeq(args__26339__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__26340__auto__);
});})(g__33782__auto___33992))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33782__auto___33992){
return (function (args){
return cljs.core.deref.call(null,g__33782__auto___33992);
});})(g__33782__auto___33992))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$applyTo = ((function (g__33782__auto___33992){
return (function (seq33920){
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33920));
});})(g__33782__auto___33992))
;


var g__33782__auto___33996 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.impl.gen.symbol = ((function (g__33782__auto___33996){
return (function cljs$spec$impl$gen$symbol(var_args){
var args__26339__auto__ = [];
var len__26332__auto___33997 = arguments.length;
var i__26333__auto___33998 = (0);
while(true){
if((i__26333__auto___33998 < len__26332__auto___33997)){
args__26339__auto__.push((arguments[i__26333__auto___33998]));

var G__33999 = (i__26333__auto___33998 + (1));
i__26333__auto___33998 = G__33999;
continue;
} else {
}
break;
}

var argseq__26340__auto__ = ((((0) < args__26339__auto__.length))?(new cljs.core.IndexedSeq(args__26339__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__26340__auto__);
});})(g__33782__auto___33996))
;

cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33782__auto___33996){
return (function (args){
return cljs.core.deref.call(null,g__33782__auto___33996);
});})(g__33782__auto___33996))
;

cljs.spec.impl.gen.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol.cljs$lang$applyTo = ((function (g__33782__auto___33996){
return (function (seq33921){
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33921));
});})(g__33782__auto___33996))
;


var g__33782__auto___34000 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.impl.gen.symbol_ns = ((function (g__33782__auto___34000){
return (function cljs$spec$impl$gen$symbol_ns(var_args){
var args__26339__auto__ = [];
var len__26332__auto___34001 = arguments.length;
var i__26333__auto___34002 = (0);
while(true){
if((i__26333__auto___34002 < len__26332__auto___34001)){
args__26339__auto__.push((arguments[i__26333__auto___34002]));

var G__34003 = (i__26333__auto___34002 + (1));
i__26333__auto___34002 = G__34003;
continue;
} else {
}
break;
}

var argseq__26340__auto__ = ((((0) < args__26339__auto__.length))?(new cljs.core.IndexedSeq(args__26339__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__26340__auto__);
});})(g__33782__auto___34000))
;

cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33782__auto___34000){
return (function (args){
return cljs.core.deref.call(null,g__33782__auto___34000);
});})(g__33782__auto___34000))
;

cljs.spec.impl.gen.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol_ns.cljs$lang$applyTo = ((function (g__33782__auto___34000){
return (function (seq33922){
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33922));
});})(g__33782__auto___34000))
;


var g__33782__auto___34004 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.impl.gen.uuid = ((function (g__33782__auto___34004){
return (function cljs$spec$impl$gen$uuid(var_args){
var args__26339__auto__ = [];
var len__26332__auto___34005 = arguments.length;
var i__26333__auto___34006 = (0);
while(true){
if((i__26333__auto___34006 < len__26332__auto___34005)){
args__26339__auto__.push((arguments[i__26333__auto___34006]));

var G__34007 = (i__26333__auto___34006 + (1));
i__26333__auto___34006 = G__34007;
continue;
} else {
}
break;
}

var argseq__26340__auto__ = ((((0) < args__26339__auto__.length))?(new cljs.core.IndexedSeq(args__26339__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__26340__auto__);
});})(g__33782__auto___34004))
;

cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33782__auto___34004){
return (function (args){
return cljs.core.deref.call(null,g__33782__auto___34004);
});})(g__33782__auto___34004))
;

cljs.spec.impl.gen.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.uuid.cljs$lang$applyTo = ((function (g__33782__auto___34004){
return (function (seq33923){
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33923));
});})(g__33782__auto___34004))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.impl.gen.cat = (function cljs$spec$impl$gen$cat(var_args){
var args__26339__auto__ = [];
var len__26332__auto___34010 = arguments.length;
var i__26333__auto___34011 = (0);
while(true){
if((i__26333__auto___34011 < len__26332__auto___34010)){
args__26339__auto__.push((arguments[i__26333__auto___34011]));

var G__34012 = (i__26333__auto___34011 + (1));
i__26333__auto___34011 = G__34012;
continue;
} else {
}
break;
}

var argseq__26340__auto__ = ((((0) < args__26339__auto__.length))?(new cljs.core.IndexedSeq(args__26339__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__26340__auto__);
});

cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.impl.gen.fmap.call(null,(function (p1__34008_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__34008_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.impl.gen.tuple,gens));
});

cljs.spec.impl.gen.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.cat.cljs$lang$applyTo = (function (seq34009){
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34009));
});

cljs.spec.impl.gen.qualified_QMARK_ = (function cljs$spec$impl$gen$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.impl.gen.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.impl.gen.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.float_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.double_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.keyword_ns.call(null)),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.any_printable.call(null)], null)),cljs.spec.impl.gen.boolean$.call(null),cljs.spec.impl.gen.char$.call(null),cljs.spec.impl.gen.fmap.call(null,((function (simple){
return (function (p1__34013_SHARP_){
return (new Date(p1__34013_SHARP_));
});})(simple))
,cljs.spec.impl.gen.large_integer.call(null)),cljs.spec.impl.gen.symbol.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.double$.call(null),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.elements.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)),cljs.spec.impl.gen.string_alphanumeric.call(null),cljs.spec.impl.gen.double$.call(null),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.return$.call(null,(0)),cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(-1)], null)),cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null))),cljs.spec.impl.gen.return$.call(null,true),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)),cljs.spec.impl.gen.uuid.call(null),cljs.spec.impl.gen.return$.call(null,false),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.symbol.call(null)], null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.double$.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.symbol_ns.call(null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.string_alphanumeric.call(null)], null)),cljs.spec.impl.gen.symbol_ns.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.set.call(null,simple)], null))]);
}),null));
/**
 * Given a predicate, returns a built-in generator if one exists.
 */
cljs.spec.impl.gen.gen_for_pred = (function cljs$spec$impl$gen$gen_for_pred(pred){
if(cljs.core.set_QMARK_.call(null,pred)){
return cljs.spec.impl.gen.elements.call(null,pred);
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.gen_builtins),pred);
}
});

//# sourceMappingURL=gen.js.map?rel=1491273377387