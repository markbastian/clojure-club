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

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorPrWriter = (function (this__25837__auto__,writer__25838__auto__,opt__25839__auto__){
return cljs.core._write.call(null,writer__25838__auto__,"cljs.spec.impl.gen/LazyVar");
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
var args__26346__auto__ = [];
var len__26339__auto___33805 = arguments.length;
var i__26340__auto___33806 = (0);
while(true){
if((i__26340__auto___33806 < len__26339__auto___33805)){
args__26346__auto__.push((arguments[i__26340__auto___33806]));

var G__33807 = (i__26340__auto___33806 + (1));
i__26340__auto___33806 = G__33807;
continue;
} else {
}
break;
}

var argseq__26347__auto__ = ((((0) < args__26346__auto__.length))?(new cljs.core.IndexedSeq(args__26346__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__26347__auto__);
});

cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.quick_check_ref),args);
});

cljs.spec.impl.gen.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.quick_check.cljs$lang$applyTo = (function (seq33804){
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33804));
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
var args__26346__auto__ = [];
var len__26339__auto___33809 = arguments.length;
var i__26340__auto___33810 = (0);
while(true){
if((i__26340__auto___33810 < len__26339__auto___33809)){
args__26346__auto__.push((arguments[i__26340__auto___33810]));

var G__33811 = (i__26340__auto___33810 + (1));
i__26340__auto___33810 = G__33811;
continue;
} else {
}
break;
}

var argseq__26347__auto__ = ((((0) < args__26346__auto__.length))?(new cljs.core.IndexedSeq(args__26346__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__26347__auto__);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.for_all_STAR__ref),args);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$applyTo = (function (seq33808){
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33808));
});

var g_QMARK__33812 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
var g_33813 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__33812){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
});})(g_QMARK__33812))
,null));
var mkg_33814 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__33812,g_33813){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
});})(g_QMARK__33812,g_33813))
,null));
cljs.spec.impl.gen.generator_QMARK_ = ((function (g_QMARK__33812,g_33813,mkg_33814){
return (function cljs$spec$impl$gen$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__33812).call(null,x);
});})(g_QMARK__33812,g_33813,mkg_33814))
;

cljs.spec.impl.gen.generator = ((function (g_QMARK__33812,g_33813,mkg_33814){
return (function cljs$spec$impl$gen$generator(gfn){
return cljs.core.deref.call(null,mkg_33814).call(null,gfn);
});})(g_QMARK__33812,g_33813,mkg_33814))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.impl.gen.generate = ((function (g_QMARK__33812,g_33813,mkg_33814){
return (function cljs$spec$impl$gen$generate(generator){
return cljs.core.deref.call(null,g_33813).call(null,generator);
});})(g_QMARK__33812,g_33813,mkg_33814))
;
cljs.spec.impl.gen.delay_impl = (function cljs$spec$impl$gen$delay_impl(gfnd){
return cljs.spec.impl.gen.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__33776__auto___33834 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.impl.gen.hash_map = ((function (g__33776__auto___33834){
return (function cljs$spec$impl$gen$hash_map(var_args){
var args__26346__auto__ = [];
var len__26339__auto___33835 = arguments.length;
var i__26340__auto___33836 = (0);
while(true){
if((i__26340__auto___33836 < len__26339__auto___33835)){
args__26346__auto__.push((arguments[i__26340__auto___33836]));

var G__33837 = (i__26340__auto___33836 + (1));
i__26340__auto___33836 = G__33837;
continue;
} else {
}
break;
}

var argseq__26347__auto__ = ((((0) < args__26346__auto__.length))?(new cljs.core.IndexedSeq(args__26346__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__26347__auto__);
});})(g__33776__auto___33834))
;

cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33776__auto___33834){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__33776__auto___33834),args);
});})(g__33776__auto___33834))
;

cljs.spec.impl.gen.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.hash_map.cljs$lang$applyTo = ((function (g__33776__auto___33834){
return (function (seq33815){
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33815));
});})(g__33776__auto___33834))
;


var g__33776__auto___33838 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.impl.gen.list = ((function (g__33776__auto___33838){
return (function cljs$spec$impl$gen$list(var_args){
var args__26346__auto__ = [];
var len__26339__auto___33839 = arguments.length;
var i__26340__auto___33840 = (0);
while(true){
if((i__26340__auto___33840 < len__26339__auto___33839)){
args__26346__auto__.push((arguments[i__26340__auto___33840]));

var G__33841 = (i__26340__auto___33840 + (1));
i__26340__auto___33840 = G__33841;
continue;
} else {
}
break;
}

var argseq__26347__auto__ = ((((0) < args__26346__auto__.length))?(new cljs.core.IndexedSeq(args__26346__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(argseq__26347__auto__);
});})(g__33776__auto___33838))
;

cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33776__auto___33838){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__33776__auto___33838),args);
});})(g__33776__auto___33838))
;

cljs.spec.impl.gen.list.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.list.cljs$lang$applyTo = ((function (g__33776__auto___33838){
return (function (seq33816){
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33816));
});})(g__33776__auto___33838))
;


var g__33776__auto___33842 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.impl.gen.map = ((function (g__33776__auto___33842){
return (function cljs$spec$impl$gen$map(var_args){
var args__26346__auto__ = [];
var len__26339__auto___33843 = arguments.length;
var i__26340__auto___33844 = (0);
while(true){
if((i__26340__auto___33844 < len__26339__auto___33843)){
args__26346__auto__.push((arguments[i__26340__auto___33844]));

var G__33845 = (i__26340__auto___33844 + (1));
i__26340__auto___33844 = G__33845;
continue;
} else {
}
break;
}

var argseq__26347__auto__ = ((((0) < args__26346__auto__.length))?(new cljs.core.IndexedSeq(args__26346__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(argseq__26347__auto__);
});})(g__33776__auto___33842))
;

cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33776__auto___33842){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__33776__auto___33842),args);
});})(g__33776__auto___33842))
;

cljs.spec.impl.gen.map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.map.cljs$lang$applyTo = ((function (g__33776__auto___33842){
return (function (seq33817){
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33817));
});})(g__33776__auto___33842))
;


var g__33776__auto___33846 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.impl.gen.not_empty = ((function (g__33776__auto___33846){
return (function cljs$spec$impl$gen$not_empty(var_args){
var args__26346__auto__ = [];
var len__26339__auto___33847 = arguments.length;
var i__26340__auto___33848 = (0);
while(true){
if((i__26340__auto___33848 < len__26339__auto___33847)){
args__26346__auto__.push((arguments[i__26340__auto___33848]));

var G__33849 = (i__26340__auto___33848 + (1));
i__26340__auto___33848 = G__33849;
continue;
} else {
}
break;
}

var argseq__26347__auto__ = ((((0) < args__26346__auto__.length))?(new cljs.core.IndexedSeq(args__26346__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__26347__auto__);
});})(g__33776__auto___33846))
;

cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33776__auto___33846){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__33776__auto___33846),args);
});})(g__33776__auto___33846))
;

cljs.spec.impl.gen.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.not_empty.cljs$lang$applyTo = ((function (g__33776__auto___33846){
return (function (seq33818){
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33818));
});})(g__33776__auto___33846))
;


var g__33776__auto___33850 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.impl.gen.set = ((function (g__33776__auto___33850){
return (function cljs$spec$impl$gen$set(var_args){
var args__26346__auto__ = [];
var len__26339__auto___33851 = arguments.length;
var i__26340__auto___33852 = (0);
while(true){
if((i__26340__auto___33852 < len__26339__auto___33851)){
args__26346__auto__.push((arguments[i__26340__auto___33852]));

var G__33853 = (i__26340__auto___33852 + (1));
i__26340__auto___33852 = G__33853;
continue;
} else {
}
break;
}

var argseq__26347__auto__ = ((((0) < args__26346__auto__.length))?(new cljs.core.IndexedSeq(args__26346__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(argseq__26347__auto__);
});})(g__33776__auto___33850))
;

cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33776__auto___33850){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__33776__auto___33850),args);
});})(g__33776__auto___33850))
;

cljs.spec.impl.gen.set.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.set.cljs$lang$applyTo = ((function (g__33776__auto___33850){
return (function (seq33819){
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33819));
});})(g__33776__auto___33850))
;


var g__33776__auto___33854 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.impl.gen.vector = ((function (g__33776__auto___33854){
return (function cljs$spec$impl$gen$vector(var_args){
var args__26346__auto__ = [];
var len__26339__auto___33855 = arguments.length;
var i__26340__auto___33856 = (0);
while(true){
if((i__26340__auto___33856 < len__26339__auto___33855)){
args__26346__auto__.push((arguments[i__26340__auto___33856]));

var G__33857 = (i__26340__auto___33856 + (1));
i__26340__auto___33856 = G__33857;
continue;
} else {
}
break;
}

var argseq__26347__auto__ = ((((0) < args__26346__auto__.length))?(new cljs.core.IndexedSeq(args__26346__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__26347__auto__);
});})(g__33776__auto___33854))
;

cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33776__auto___33854){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__33776__auto___33854),args);
});})(g__33776__auto___33854))
;

cljs.spec.impl.gen.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector.cljs$lang$applyTo = ((function (g__33776__auto___33854){
return (function (seq33820){
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33820));
});})(g__33776__auto___33854))
;


var g__33776__auto___33858 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.impl.gen.vector_distinct = ((function (g__33776__auto___33858){
return (function cljs$spec$impl$gen$vector_distinct(var_args){
var args__26346__auto__ = [];
var len__26339__auto___33859 = arguments.length;
var i__26340__auto___33860 = (0);
while(true){
if((i__26340__auto___33860 < len__26339__auto___33859)){
args__26346__auto__.push((arguments[i__26340__auto___33860]));

var G__33861 = (i__26340__auto___33860 + (1));
i__26340__auto___33860 = G__33861;
continue;
} else {
}
break;
}

var argseq__26347__auto__ = ((((0) < args__26346__auto__.length))?(new cljs.core.IndexedSeq(args__26346__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__26347__auto__);
});})(g__33776__auto___33858))
;

cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33776__auto___33858){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__33776__auto___33858),args);
});})(g__33776__auto___33858))
;

cljs.spec.impl.gen.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector_distinct.cljs$lang$applyTo = ((function (g__33776__auto___33858){
return (function (seq33821){
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33821));
});})(g__33776__auto___33858))
;


var g__33776__auto___33862 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.impl.gen.fmap = ((function (g__33776__auto___33862){
return (function cljs$spec$impl$gen$fmap(var_args){
var args__26346__auto__ = [];
var len__26339__auto___33863 = arguments.length;
var i__26340__auto___33864 = (0);
while(true){
if((i__26340__auto___33864 < len__26339__auto___33863)){
args__26346__auto__.push((arguments[i__26340__auto___33864]));

var G__33865 = (i__26340__auto___33864 + (1));
i__26340__auto___33864 = G__33865;
continue;
} else {
}
break;
}

var argseq__26347__auto__ = ((((0) < args__26346__auto__.length))?(new cljs.core.IndexedSeq(args__26346__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__26347__auto__);
});})(g__33776__auto___33862))
;

cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33776__auto___33862){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__33776__auto___33862),args);
});})(g__33776__auto___33862))
;

cljs.spec.impl.gen.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.fmap.cljs$lang$applyTo = ((function (g__33776__auto___33862){
return (function (seq33822){
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33822));
});})(g__33776__auto___33862))
;


var g__33776__auto___33866 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.impl.gen.elements = ((function (g__33776__auto___33866){
return (function cljs$spec$impl$gen$elements(var_args){
var args__26346__auto__ = [];
var len__26339__auto___33867 = arguments.length;
var i__26340__auto___33868 = (0);
while(true){
if((i__26340__auto___33868 < len__26339__auto___33867)){
args__26346__auto__.push((arguments[i__26340__auto___33868]));

var G__33869 = (i__26340__auto___33868 + (1));
i__26340__auto___33868 = G__33869;
continue;
} else {
}
break;
}

var argseq__26347__auto__ = ((((0) < args__26346__auto__.length))?(new cljs.core.IndexedSeq(args__26346__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__26347__auto__);
});})(g__33776__auto___33866))
;

cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33776__auto___33866){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__33776__auto___33866),args);
});})(g__33776__auto___33866))
;

cljs.spec.impl.gen.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.elements.cljs$lang$applyTo = ((function (g__33776__auto___33866){
return (function (seq33823){
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33823));
});})(g__33776__auto___33866))
;


var g__33776__auto___33870 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.impl.gen.bind = ((function (g__33776__auto___33870){
return (function cljs$spec$impl$gen$bind(var_args){
var args__26346__auto__ = [];
var len__26339__auto___33871 = arguments.length;
var i__26340__auto___33872 = (0);
while(true){
if((i__26340__auto___33872 < len__26339__auto___33871)){
args__26346__auto__.push((arguments[i__26340__auto___33872]));

var G__33873 = (i__26340__auto___33872 + (1));
i__26340__auto___33872 = G__33873;
continue;
} else {
}
break;
}

var argseq__26347__auto__ = ((((0) < args__26346__auto__.length))?(new cljs.core.IndexedSeq(args__26346__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__26347__auto__);
});})(g__33776__auto___33870))
;

cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33776__auto___33870){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__33776__auto___33870),args);
});})(g__33776__auto___33870))
;

cljs.spec.impl.gen.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.bind.cljs$lang$applyTo = ((function (g__33776__auto___33870){
return (function (seq33824){
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33824));
});})(g__33776__auto___33870))
;


var g__33776__auto___33874 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.impl.gen.choose = ((function (g__33776__auto___33874){
return (function cljs$spec$impl$gen$choose(var_args){
var args__26346__auto__ = [];
var len__26339__auto___33875 = arguments.length;
var i__26340__auto___33876 = (0);
while(true){
if((i__26340__auto___33876 < len__26339__auto___33875)){
args__26346__auto__.push((arguments[i__26340__auto___33876]));

var G__33877 = (i__26340__auto___33876 + (1));
i__26340__auto___33876 = G__33877;
continue;
} else {
}
break;
}

var argseq__26347__auto__ = ((((0) < args__26346__auto__.length))?(new cljs.core.IndexedSeq(args__26346__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__26347__auto__);
});})(g__33776__auto___33874))
;

cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33776__auto___33874){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__33776__auto___33874),args);
});})(g__33776__auto___33874))
;

cljs.spec.impl.gen.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.choose.cljs$lang$applyTo = ((function (g__33776__auto___33874){
return (function (seq33825){
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33825));
});})(g__33776__auto___33874))
;


var g__33776__auto___33878 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.impl.gen.one_of = ((function (g__33776__auto___33878){
return (function cljs$spec$impl$gen$one_of(var_args){
var args__26346__auto__ = [];
var len__26339__auto___33879 = arguments.length;
var i__26340__auto___33880 = (0);
while(true){
if((i__26340__auto___33880 < len__26339__auto___33879)){
args__26346__auto__.push((arguments[i__26340__auto___33880]));

var G__33881 = (i__26340__auto___33880 + (1));
i__26340__auto___33880 = G__33881;
continue;
} else {
}
break;
}

var argseq__26347__auto__ = ((((0) < args__26346__auto__.length))?(new cljs.core.IndexedSeq(args__26346__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__26347__auto__);
});})(g__33776__auto___33878))
;

cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33776__auto___33878){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__33776__auto___33878),args);
});})(g__33776__auto___33878))
;

cljs.spec.impl.gen.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.one_of.cljs$lang$applyTo = ((function (g__33776__auto___33878){
return (function (seq33826){
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33826));
});})(g__33776__auto___33878))
;


var g__33776__auto___33882 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.impl.gen.such_that = ((function (g__33776__auto___33882){
return (function cljs$spec$impl$gen$such_that(var_args){
var args__26346__auto__ = [];
var len__26339__auto___33883 = arguments.length;
var i__26340__auto___33884 = (0);
while(true){
if((i__26340__auto___33884 < len__26339__auto___33883)){
args__26346__auto__.push((arguments[i__26340__auto___33884]));

var G__33885 = (i__26340__auto___33884 + (1));
i__26340__auto___33884 = G__33885;
continue;
} else {
}
break;
}

var argseq__26347__auto__ = ((((0) < args__26346__auto__.length))?(new cljs.core.IndexedSeq(args__26346__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__26347__auto__);
});})(g__33776__auto___33882))
;

cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33776__auto___33882){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__33776__auto___33882),args);
});})(g__33776__auto___33882))
;

cljs.spec.impl.gen.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.such_that.cljs$lang$applyTo = ((function (g__33776__auto___33882){
return (function (seq33827){
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33827));
});})(g__33776__auto___33882))
;


var g__33776__auto___33886 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.impl.gen.tuple = ((function (g__33776__auto___33886){
return (function cljs$spec$impl$gen$tuple(var_args){
var args__26346__auto__ = [];
var len__26339__auto___33887 = arguments.length;
var i__26340__auto___33888 = (0);
while(true){
if((i__26340__auto___33888 < len__26339__auto___33887)){
args__26346__auto__.push((arguments[i__26340__auto___33888]));

var G__33889 = (i__26340__auto___33888 + (1));
i__26340__auto___33888 = G__33889;
continue;
} else {
}
break;
}

var argseq__26347__auto__ = ((((0) < args__26346__auto__.length))?(new cljs.core.IndexedSeq(args__26346__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__26347__auto__);
});})(g__33776__auto___33886))
;

cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33776__auto___33886){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__33776__auto___33886),args);
});})(g__33776__auto___33886))
;

cljs.spec.impl.gen.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.tuple.cljs$lang$applyTo = ((function (g__33776__auto___33886){
return (function (seq33828){
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33828));
});})(g__33776__auto___33886))
;


var g__33776__auto___33890 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.impl.gen.sample = ((function (g__33776__auto___33890){
return (function cljs$spec$impl$gen$sample(var_args){
var args__26346__auto__ = [];
var len__26339__auto___33891 = arguments.length;
var i__26340__auto___33892 = (0);
while(true){
if((i__26340__auto___33892 < len__26339__auto___33891)){
args__26346__auto__.push((arguments[i__26340__auto___33892]));

var G__33893 = (i__26340__auto___33892 + (1));
i__26340__auto___33892 = G__33893;
continue;
} else {
}
break;
}

var argseq__26347__auto__ = ((((0) < args__26346__auto__.length))?(new cljs.core.IndexedSeq(args__26346__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__26347__auto__);
});})(g__33776__auto___33890))
;

cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33776__auto___33890){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__33776__auto___33890),args);
});})(g__33776__auto___33890))
;

cljs.spec.impl.gen.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.sample.cljs$lang$applyTo = ((function (g__33776__auto___33890){
return (function (seq33829){
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33829));
});})(g__33776__auto___33890))
;


var g__33776__auto___33894 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.impl.gen.return$ = ((function (g__33776__auto___33894){
return (function cljs$spec$impl$gen$return(var_args){
var args__26346__auto__ = [];
var len__26339__auto___33895 = arguments.length;
var i__26340__auto___33896 = (0);
while(true){
if((i__26340__auto___33896 < len__26339__auto___33895)){
args__26346__auto__.push((arguments[i__26340__auto___33896]));

var G__33897 = (i__26340__auto___33896 + (1));
i__26340__auto___33896 = G__33897;
continue;
} else {
}
break;
}

var argseq__26347__auto__ = ((((0) < args__26346__auto__.length))?(new cljs.core.IndexedSeq(args__26346__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__26347__auto__);
});})(g__33776__auto___33894))
;

cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33776__auto___33894){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__33776__auto___33894),args);
});})(g__33776__auto___33894))
;

cljs.spec.impl.gen.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.return$.cljs$lang$applyTo = ((function (g__33776__auto___33894){
return (function (seq33830){
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33830));
});})(g__33776__auto___33894))
;


var g__33776__auto___33898 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.impl.gen.large_integer_STAR_ = ((function (g__33776__auto___33898){
return (function cljs$spec$impl$gen$large_integer_STAR_(var_args){
var args__26346__auto__ = [];
var len__26339__auto___33899 = arguments.length;
var i__26340__auto___33900 = (0);
while(true){
if((i__26340__auto___33900 < len__26339__auto___33899)){
args__26346__auto__.push((arguments[i__26340__auto___33900]));

var G__33901 = (i__26340__auto___33900 + (1));
i__26340__auto___33900 = G__33901;
continue;
} else {
}
break;
}

var argseq__26347__auto__ = ((((0) < args__26346__auto__.length))?(new cljs.core.IndexedSeq(args__26346__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__26347__auto__);
});})(g__33776__auto___33898))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33776__auto___33898){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__33776__auto___33898),args);
});})(g__33776__auto___33898))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$applyTo = ((function (g__33776__auto___33898){
return (function (seq33831){
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33831));
});})(g__33776__auto___33898))
;


var g__33776__auto___33902 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.impl.gen.double_STAR_ = ((function (g__33776__auto___33902){
return (function cljs$spec$impl$gen$double_STAR_(var_args){
var args__26346__auto__ = [];
var len__26339__auto___33903 = arguments.length;
var i__26340__auto___33904 = (0);
while(true){
if((i__26340__auto___33904 < len__26339__auto___33903)){
args__26346__auto__.push((arguments[i__26340__auto___33904]));

var G__33905 = (i__26340__auto___33904 + (1));
i__26340__auto___33904 = G__33905;
continue;
} else {
}
break;
}

var argseq__26347__auto__ = ((((0) < args__26346__auto__.length))?(new cljs.core.IndexedSeq(args__26346__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__26347__auto__);
});})(g__33776__auto___33902))
;

cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33776__auto___33902){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__33776__auto___33902),args);
});})(g__33776__auto___33902))
;

cljs.spec.impl.gen.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double_STAR_.cljs$lang$applyTo = ((function (g__33776__auto___33902){
return (function (seq33832){
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33832));
});})(g__33776__auto___33902))
;


var g__33776__auto___33906 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.frequency !== 'undefined')){
return clojure.test.check.generators.frequency;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/frequency
 */
cljs.spec.impl.gen.frequency = ((function (g__33776__auto___33906){
return (function cljs$spec$impl$gen$frequency(var_args){
var args__26346__auto__ = [];
var len__26339__auto___33907 = arguments.length;
var i__26340__auto___33908 = (0);
while(true){
if((i__26340__auto___33908 < len__26339__auto___33907)){
args__26346__auto__.push((arguments[i__26340__auto___33908]));

var G__33909 = (i__26340__auto___33908 + (1));
i__26340__auto___33908 = G__33909;
continue;
} else {
}
break;
}

var argseq__26347__auto__ = ((((0) < args__26346__auto__.length))?(new cljs.core.IndexedSeq(args__26346__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.frequency.cljs$core$IFn$_invoke$arity$variadic(argseq__26347__auto__);
});})(g__33776__auto___33906))
;

cljs.spec.impl.gen.frequency.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33776__auto___33906){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__33776__auto___33906),args);
});})(g__33776__auto___33906))
;

cljs.spec.impl.gen.frequency.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.frequency.cljs$lang$applyTo = ((function (g__33776__auto___33906){
return (function (seq33833){
return cljs.spec.impl.gen.frequency.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33833));
});})(g__33776__auto___33906))
;

var g__33789__auto___33931 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.impl.gen.any = ((function (g__33789__auto___33931){
return (function cljs$spec$impl$gen$any(var_args){
var args__26346__auto__ = [];
var len__26339__auto___33932 = arguments.length;
var i__26340__auto___33933 = (0);
while(true){
if((i__26340__auto___33933 < len__26339__auto___33932)){
args__26346__auto__.push((arguments[i__26340__auto___33933]));

var G__33934 = (i__26340__auto___33933 + (1));
i__26340__auto___33933 = G__33934;
continue;
} else {
}
break;
}

var argseq__26347__auto__ = ((((0) < args__26346__auto__.length))?(new cljs.core.IndexedSeq(args__26346__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(argseq__26347__auto__);
});})(g__33789__auto___33931))
;

cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33789__auto___33931){
return (function (args){
return cljs.core.deref.call(null,g__33789__auto___33931);
});})(g__33789__auto___33931))
;

cljs.spec.impl.gen.any.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any.cljs$lang$applyTo = ((function (g__33789__auto___33931){
return (function (seq33910){
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33910));
});})(g__33789__auto___33931))
;


var g__33789__auto___33935 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.impl.gen.any_printable = ((function (g__33789__auto___33935){
return (function cljs$spec$impl$gen$any_printable(var_args){
var args__26346__auto__ = [];
var len__26339__auto___33936 = arguments.length;
var i__26340__auto___33937 = (0);
while(true){
if((i__26340__auto___33937 < len__26339__auto___33936)){
args__26346__auto__.push((arguments[i__26340__auto___33937]));

var G__33938 = (i__26340__auto___33937 + (1));
i__26340__auto___33937 = G__33938;
continue;
} else {
}
break;
}

var argseq__26347__auto__ = ((((0) < args__26346__auto__.length))?(new cljs.core.IndexedSeq(args__26346__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__26347__auto__);
});})(g__33789__auto___33935))
;

cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33789__auto___33935){
return (function (args){
return cljs.core.deref.call(null,g__33789__auto___33935);
});})(g__33789__auto___33935))
;

cljs.spec.impl.gen.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any_printable.cljs$lang$applyTo = ((function (g__33789__auto___33935){
return (function (seq33911){
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33911));
});})(g__33789__auto___33935))
;


var g__33789__auto___33939 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.impl.gen.boolean$ = ((function (g__33789__auto___33939){
return (function cljs$spec$impl$gen$boolean(var_args){
var args__26346__auto__ = [];
var len__26339__auto___33940 = arguments.length;
var i__26340__auto___33941 = (0);
while(true){
if((i__26340__auto___33941 < len__26339__auto___33940)){
args__26346__auto__.push((arguments[i__26340__auto___33941]));

var G__33942 = (i__26340__auto___33941 + (1));
i__26340__auto___33941 = G__33942;
continue;
} else {
}
break;
}

var argseq__26347__auto__ = ((((0) < args__26346__auto__.length))?(new cljs.core.IndexedSeq(args__26346__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__26347__auto__);
});})(g__33789__auto___33939))
;

cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33789__auto___33939){
return (function (args){
return cljs.core.deref.call(null,g__33789__auto___33939);
});})(g__33789__auto___33939))
;

cljs.spec.impl.gen.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.boolean$.cljs$lang$applyTo = ((function (g__33789__auto___33939){
return (function (seq33912){
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33912));
});})(g__33789__auto___33939))
;


var g__33789__auto___33943 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.impl.gen.char$ = ((function (g__33789__auto___33943){
return (function cljs$spec$impl$gen$char(var_args){
var args__26346__auto__ = [];
var len__26339__auto___33944 = arguments.length;
var i__26340__auto___33945 = (0);
while(true){
if((i__26340__auto___33945 < len__26339__auto___33944)){
args__26346__auto__.push((arguments[i__26340__auto___33945]));

var G__33946 = (i__26340__auto___33945 + (1));
i__26340__auto___33945 = G__33946;
continue;
} else {
}
break;
}

var argseq__26347__auto__ = ((((0) < args__26346__auto__.length))?(new cljs.core.IndexedSeq(args__26346__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__26347__auto__);
});})(g__33789__auto___33943))
;

cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33789__auto___33943){
return (function (args){
return cljs.core.deref.call(null,g__33789__auto___33943);
});})(g__33789__auto___33943))
;

cljs.spec.impl.gen.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char$.cljs$lang$applyTo = ((function (g__33789__auto___33943){
return (function (seq33913){
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33913));
});})(g__33789__auto___33943))
;


var g__33789__auto___33947 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.impl.gen.char_alpha = ((function (g__33789__auto___33947){
return (function cljs$spec$impl$gen$char_alpha(var_args){
var args__26346__auto__ = [];
var len__26339__auto___33948 = arguments.length;
var i__26340__auto___33949 = (0);
while(true){
if((i__26340__auto___33949 < len__26339__auto___33948)){
args__26346__auto__.push((arguments[i__26340__auto___33949]));

var G__33950 = (i__26340__auto___33949 + (1));
i__26340__auto___33949 = G__33950;
continue;
} else {
}
break;
}

var argseq__26347__auto__ = ((((0) < args__26346__auto__.length))?(new cljs.core.IndexedSeq(args__26346__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__26347__auto__);
});})(g__33789__auto___33947))
;

cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33789__auto___33947){
return (function (args){
return cljs.core.deref.call(null,g__33789__auto___33947);
});})(g__33789__auto___33947))
;

cljs.spec.impl.gen.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alpha.cljs$lang$applyTo = ((function (g__33789__auto___33947){
return (function (seq33914){
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33914));
});})(g__33789__auto___33947))
;


var g__33789__auto___33951 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.impl.gen.char_alphanumeric = ((function (g__33789__auto___33951){
return (function cljs$spec$impl$gen$char_alphanumeric(var_args){
var args__26346__auto__ = [];
var len__26339__auto___33952 = arguments.length;
var i__26340__auto___33953 = (0);
while(true){
if((i__26340__auto___33953 < len__26339__auto___33952)){
args__26346__auto__.push((arguments[i__26340__auto___33953]));

var G__33954 = (i__26340__auto___33953 + (1));
i__26340__auto___33953 = G__33954;
continue;
} else {
}
break;
}

var argseq__26347__auto__ = ((((0) < args__26346__auto__.length))?(new cljs.core.IndexedSeq(args__26346__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__26347__auto__);
});})(g__33789__auto___33951))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33789__auto___33951){
return (function (args){
return cljs.core.deref.call(null,g__33789__auto___33951);
});})(g__33789__auto___33951))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$applyTo = ((function (g__33789__auto___33951){
return (function (seq33915){
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33915));
});})(g__33789__auto___33951))
;


var g__33789__auto___33955 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.impl.gen.char_ascii = ((function (g__33789__auto___33955){
return (function cljs$spec$impl$gen$char_ascii(var_args){
var args__26346__auto__ = [];
var len__26339__auto___33956 = arguments.length;
var i__26340__auto___33957 = (0);
while(true){
if((i__26340__auto___33957 < len__26339__auto___33956)){
args__26346__auto__.push((arguments[i__26340__auto___33957]));

var G__33958 = (i__26340__auto___33957 + (1));
i__26340__auto___33957 = G__33958;
continue;
} else {
}
break;
}

var argseq__26347__auto__ = ((((0) < args__26346__auto__.length))?(new cljs.core.IndexedSeq(args__26346__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__26347__auto__);
});})(g__33789__auto___33955))
;

cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33789__auto___33955){
return (function (args){
return cljs.core.deref.call(null,g__33789__auto___33955);
});})(g__33789__auto___33955))
;

cljs.spec.impl.gen.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_ascii.cljs$lang$applyTo = ((function (g__33789__auto___33955){
return (function (seq33916){
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33916));
});})(g__33789__auto___33955))
;


var g__33789__auto___33959 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.impl.gen.double$ = ((function (g__33789__auto___33959){
return (function cljs$spec$impl$gen$double(var_args){
var args__26346__auto__ = [];
var len__26339__auto___33960 = arguments.length;
var i__26340__auto___33961 = (0);
while(true){
if((i__26340__auto___33961 < len__26339__auto___33960)){
args__26346__auto__.push((arguments[i__26340__auto___33961]));

var G__33962 = (i__26340__auto___33961 + (1));
i__26340__auto___33961 = G__33962;
continue;
} else {
}
break;
}

var argseq__26347__auto__ = ((((0) < args__26346__auto__.length))?(new cljs.core.IndexedSeq(args__26346__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__26347__auto__);
});})(g__33789__auto___33959))
;

cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33789__auto___33959){
return (function (args){
return cljs.core.deref.call(null,g__33789__auto___33959);
});})(g__33789__auto___33959))
;

cljs.spec.impl.gen.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double$.cljs$lang$applyTo = ((function (g__33789__auto___33959){
return (function (seq33917){
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33917));
});})(g__33789__auto___33959))
;


var g__33789__auto___33963 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.impl.gen.int$ = ((function (g__33789__auto___33963){
return (function cljs$spec$impl$gen$int(var_args){
var args__26346__auto__ = [];
var len__26339__auto___33964 = arguments.length;
var i__26340__auto___33965 = (0);
while(true){
if((i__26340__auto___33965 < len__26339__auto___33964)){
args__26346__auto__.push((arguments[i__26340__auto___33965]));

var G__33966 = (i__26340__auto___33965 + (1));
i__26340__auto___33965 = G__33966;
continue;
} else {
}
break;
}

var argseq__26347__auto__ = ((((0) < args__26346__auto__.length))?(new cljs.core.IndexedSeq(args__26346__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__26347__auto__);
});})(g__33789__auto___33963))
;

cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33789__auto___33963){
return (function (args){
return cljs.core.deref.call(null,g__33789__auto___33963);
});})(g__33789__auto___33963))
;

cljs.spec.impl.gen.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.int$.cljs$lang$applyTo = ((function (g__33789__auto___33963){
return (function (seq33918){
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33918));
});})(g__33789__auto___33963))
;


var g__33789__auto___33967 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.impl.gen.keyword = ((function (g__33789__auto___33967){
return (function cljs$spec$impl$gen$keyword(var_args){
var args__26346__auto__ = [];
var len__26339__auto___33968 = arguments.length;
var i__26340__auto___33969 = (0);
while(true){
if((i__26340__auto___33969 < len__26339__auto___33968)){
args__26346__auto__.push((arguments[i__26340__auto___33969]));

var G__33970 = (i__26340__auto___33969 + (1));
i__26340__auto___33969 = G__33970;
continue;
} else {
}
break;
}

var argseq__26347__auto__ = ((((0) < args__26346__auto__.length))?(new cljs.core.IndexedSeq(args__26346__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__26347__auto__);
});})(g__33789__auto___33967))
;

cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33789__auto___33967){
return (function (args){
return cljs.core.deref.call(null,g__33789__auto___33967);
});})(g__33789__auto___33967))
;

cljs.spec.impl.gen.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword.cljs$lang$applyTo = ((function (g__33789__auto___33967){
return (function (seq33919){
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33919));
});})(g__33789__auto___33967))
;


var g__33789__auto___33971 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.impl.gen.keyword_ns = ((function (g__33789__auto___33971){
return (function cljs$spec$impl$gen$keyword_ns(var_args){
var args__26346__auto__ = [];
var len__26339__auto___33972 = arguments.length;
var i__26340__auto___33973 = (0);
while(true){
if((i__26340__auto___33973 < len__26339__auto___33972)){
args__26346__auto__.push((arguments[i__26340__auto___33973]));

var G__33974 = (i__26340__auto___33973 + (1));
i__26340__auto___33973 = G__33974;
continue;
} else {
}
break;
}

var argseq__26347__auto__ = ((((0) < args__26346__auto__.length))?(new cljs.core.IndexedSeq(args__26346__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__26347__auto__);
});})(g__33789__auto___33971))
;

cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33789__auto___33971){
return (function (args){
return cljs.core.deref.call(null,g__33789__auto___33971);
});})(g__33789__auto___33971))
;

cljs.spec.impl.gen.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword_ns.cljs$lang$applyTo = ((function (g__33789__auto___33971){
return (function (seq33920){
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33920));
});})(g__33789__auto___33971))
;


var g__33789__auto___33975 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.impl.gen.large_integer = ((function (g__33789__auto___33975){
return (function cljs$spec$impl$gen$large_integer(var_args){
var args__26346__auto__ = [];
var len__26339__auto___33976 = arguments.length;
var i__26340__auto___33977 = (0);
while(true){
if((i__26340__auto___33977 < len__26339__auto___33976)){
args__26346__auto__.push((arguments[i__26340__auto___33977]));

var G__33978 = (i__26340__auto___33977 + (1));
i__26340__auto___33977 = G__33978;
continue;
} else {
}
break;
}

var argseq__26347__auto__ = ((((0) < args__26346__auto__.length))?(new cljs.core.IndexedSeq(args__26346__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__26347__auto__);
});})(g__33789__auto___33975))
;

cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33789__auto___33975){
return (function (args){
return cljs.core.deref.call(null,g__33789__auto___33975);
});})(g__33789__auto___33975))
;

cljs.spec.impl.gen.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer.cljs$lang$applyTo = ((function (g__33789__auto___33975){
return (function (seq33921){
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33921));
});})(g__33789__auto___33975))
;


var g__33789__auto___33979 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.impl.gen.ratio = ((function (g__33789__auto___33979){
return (function cljs$spec$impl$gen$ratio(var_args){
var args__26346__auto__ = [];
var len__26339__auto___33980 = arguments.length;
var i__26340__auto___33981 = (0);
while(true){
if((i__26340__auto___33981 < len__26339__auto___33980)){
args__26346__auto__.push((arguments[i__26340__auto___33981]));

var G__33982 = (i__26340__auto___33981 + (1));
i__26340__auto___33981 = G__33982;
continue;
} else {
}
break;
}

var argseq__26347__auto__ = ((((0) < args__26346__auto__.length))?(new cljs.core.IndexedSeq(args__26346__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__26347__auto__);
});})(g__33789__auto___33979))
;

cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33789__auto___33979){
return (function (args){
return cljs.core.deref.call(null,g__33789__auto___33979);
});})(g__33789__auto___33979))
;

cljs.spec.impl.gen.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.ratio.cljs$lang$applyTo = ((function (g__33789__auto___33979){
return (function (seq33922){
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33922));
});})(g__33789__auto___33979))
;


var g__33789__auto___33983 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.impl.gen.simple_type = ((function (g__33789__auto___33983){
return (function cljs$spec$impl$gen$simple_type(var_args){
var args__26346__auto__ = [];
var len__26339__auto___33984 = arguments.length;
var i__26340__auto___33985 = (0);
while(true){
if((i__26340__auto___33985 < len__26339__auto___33984)){
args__26346__auto__.push((arguments[i__26340__auto___33985]));

var G__33986 = (i__26340__auto___33985 + (1));
i__26340__auto___33985 = G__33986;
continue;
} else {
}
break;
}

var argseq__26347__auto__ = ((((0) < args__26346__auto__.length))?(new cljs.core.IndexedSeq(args__26346__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__26347__auto__);
});})(g__33789__auto___33983))
;

cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33789__auto___33983){
return (function (args){
return cljs.core.deref.call(null,g__33789__auto___33983);
});})(g__33789__auto___33983))
;

cljs.spec.impl.gen.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type.cljs$lang$applyTo = ((function (g__33789__auto___33983){
return (function (seq33923){
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33923));
});})(g__33789__auto___33983))
;


var g__33789__auto___33987 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.impl.gen.simple_type_printable = ((function (g__33789__auto___33987){
return (function cljs$spec$impl$gen$simple_type_printable(var_args){
var args__26346__auto__ = [];
var len__26339__auto___33988 = arguments.length;
var i__26340__auto___33989 = (0);
while(true){
if((i__26340__auto___33989 < len__26339__auto___33988)){
args__26346__auto__.push((arguments[i__26340__auto___33989]));

var G__33990 = (i__26340__auto___33989 + (1));
i__26340__auto___33989 = G__33990;
continue;
} else {
}
break;
}

var argseq__26347__auto__ = ((((0) < args__26346__auto__.length))?(new cljs.core.IndexedSeq(args__26346__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__26347__auto__);
});})(g__33789__auto___33987))
;

cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33789__auto___33987){
return (function (args){
return cljs.core.deref.call(null,g__33789__auto___33987);
});})(g__33789__auto___33987))
;

cljs.spec.impl.gen.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type_printable.cljs$lang$applyTo = ((function (g__33789__auto___33987){
return (function (seq33924){
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33924));
});})(g__33789__auto___33987))
;


var g__33789__auto___33991 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.impl.gen.string = ((function (g__33789__auto___33991){
return (function cljs$spec$impl$gen$string(var_args){
var args__26346__auto__ = [];
var len__26339__auto___33992 = arguments.length;
var i__26340__auto___33993 = (0);
while(true){
if((i__26340__auto___33993 < len__26339__auto___33992)){
args__26346__auto__.push((arguments[i__26340__auto___33993]));

var G__33994 = (i__26340__auto___33993 + (1));
i__26340__auto___33993 = G__33994;
continue;
} else {
}
break;
}

var argseq__26347__auto__ = ((((0) < args__26346__auto__.length))?(new cljs.core.IndexedSeq(args__26346__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(argseq__26347__auto__);
});})(g__33789__auto___33991))
;

cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33789__auto___33991){
return (function (args){
return cljs.core.deref.call(null,g__33789__auto___33991);
});})(g__33789__auto___33991))
;

cljs.spec.impl.gen.string.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string.cljs$lang$applyTo = ((function (g__33789__auto___33991){
return (function (seq33925){
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33925));
});})(g__33789__auto___33991))
;


var g__33789__auto___33995 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.impl.gen.string_ascii = ((function (g__33789__auto___33995){
return (function cljs$spec$impl$gen$string_ascii(var_args){
var args__26346__auto__ = [];
var len__26339__auto___33996 = arguments.length;
var i__26340__auto___33997 = (0);
while(true){
if((i__26340__auto___33997 < len__26339__auto___33996)){
args__26346__auto__.push((arguments[i__26340__auto___33997]));

var G__33998 = (i__26340__auto___33997 + (1));
i__26340__auto___33997 = G__33998;
continue;
} else {
}
break;
}

var argseq__26347__auto__ = ((((0) < args__26346__auto__.length))?(new cljs.core.IndexedSeq(args__26346__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__26347__auto__);
});})(g__33789__auto___33995))
;

cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33789__auto___33995){
return (function (args){
return cljs.core.deref.call(null,g__33789__auto___33995);
});})(g__33789__auto___33995))
;

cljs.spec.impl.gen.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_ascii.cljs$lang$applyTo = ((function (g__33789__auto___33995){
return (function (seq33926){
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33926));
});})(g__33789__auto___33995))
;


var g__33789__auto___33999 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.impl.gen.string_alphanumeric = ((function (g__33789__auto___33999){
return (function cljs$spec$impl$gen$string_alphanumeric(var_args){
var args__26346__auto__ = [];
var len__26339__auto___34000 = arguments.length;
var i__26340__auto___34001 = (0);
while(true){
if((i__26340__auto___34001 < len__26339__auto___34000)){
args__26346__auto__.push((arguments[i__26340__auto___34001]));

var G__34002 = (i__26340__auto___34001 + (1));
i__26340__auto___34001 = G__34002;
continue;
} else {
}
break;
}

var argseq__26347__auto__ = ((((0) < args__26346__auto__.length))?(new cljs.core.IndexedSeq(args__26346__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__26347__auto__);
});})(g__33789__auto___33999))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33789__auto___33999){
return (function (args){
return cljs.core.deref.call(null,g__33789__auto___33999);
});})(g__33789__auto___33999))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$applyTo = ((function (g__33789__auto___33999){
return (function (seq33927){
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33927));
});})(g__33789__auto___33999))
;


var g__33789__auto___34003 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.impl.gen.symbol = ((function (g__33789__auto___34003){
return (function cljs$spec$impl$gen$symbol(var_args){
var args__26346__auto__ = [];
var len__26339__auto___34004 = arguments.length;
var i__26340__auto___34005 = (0);
while(true){
if((i__26340__auto___34005 < len__26339__auto___34004)){
args__26346__auto__.push((arguments[i__26340__auto___34005]));

var G__34006 = (i__26340__auto___34005 + (1));
i__26340__auto___34005 = G__34006;
continue;
} else {
}
break;
}

var argseq__26347__auto__ = ((((0) < args__26346__auto__.length))?(new cljs.core.IndexedSeq(args__26346__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__26347__auto__);
});})(g__33789__auto___34003))
;

cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33789__auto___34003){
return (function (args){
return cljs.core.deref.call(null,g__33789__auto___34003);
});})(g__33789__auto___34003))
;

cljs.spec.impl.gen.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol.cljs$lang$applyTo = ((function (g__33789__auto___34003){
return (function (seq33928){
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33928));
});})(g__33789__auto___34003))
;


var g__33789__auto___34007 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.impl.gen.symbol_ns = ((function (g__33789__auto___34007){
return (function cljs$spec$impl$gen$symbol_ns(var_args){
var args__26346__auto__ = [];
var len__26339__auto___34008 = arguments.length;
var i__26340__auto___34009 = (0);
while(true){
if((i__26340__auto___34009 < len__26339__auto___34008)){
args__26346__auto__.push((arguments[i__26340__auto___34009]));

var G__34010 = (i__26340__auto___34009 + (1));
i__26340__auto___34009 = G__34010;
continue;
} else {
}
break;
}

var argseq__26347__auto__ = ((((0) < args__26346__auto__.length))?(new cljs.core.IndexedSeq(args__26346__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__26347__auto__);
});})(g__33789__auto___34007))
;

cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33789__auto___34007){
return (function (args){
return cljs.core.deref.call(null,g__33789__auto___34007);
});})(g__33789__auto___34007))
;

cljs.spec.impl.gen.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol_ns.cljs$lang$applyTo = ((function (g__33789__auto___34007){
return (function (seq33929){
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33929));
});})(g__33789__auto___34007))
;


var g__33789__auto___34011 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.impl.gen.uuid = ((function (g__33789__auto___34011){
return (function cljs$spec$impl$gen$uuid(var_args){
var args__26346__auto__ = [];
var len__26339__auto___34012 = arguments.length;
var i__26340__auto___34013 = (0);
while(true){
if((i__26340__auto___34013 < len__26339__auto___34012)){
args__26346__auto__.push((arguments[i__26340__auto___34013]));

var G__34014 = (i__26340__auto___34013 + (1));
i__26340__auto___34013 = G__34014;
continue;
} else {
}
break;
}

var argseq__26347__auto__ = ((((0) < args__26346__auto__.length))?(new cljs.core.IndexedSeq(args__26346__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__26347__auto__);
});})(g__33789__auto___34011))
;

cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33789__auto___34011){
return (function (args){
return cljs.core.deref.call(null,g__33789__auto___34011);
});})(g__33789__auto___34011))
;

cljs.spec.impl.gen.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.uuid.cljs$lang$applyTo = ((function (g__33789__auto___34011){
return (function (seq33930){
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33930));
});})(g__33789__auto___34011))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.impl.gen.cat = (function cljs$spec$impl$gen$cat(var_args){
var args__26346__auto__ = [];
var len__26339__auto___34017 = arguments.length;
var i__26340__auto___34018 = (0);
while(true){
if((i__26340__auto___34018 < len__26339__auto___34017)){
args__26346__auto__.push((arguments[i__26340__auto___34018]));

var G__34019 = (i__26340__auto___34018 + (1));
i__26340__auto___34018 = G__34019;
continue;
} else {
}
break;
}

var argseq__26347__auto__ = ((((0) < args__26346__auto__.length))?(new cljs.core.IndexedSeq(args__26346__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__26347__auto__);
});

cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.impl.gen.fmap.call(null,(function (p1__34015_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__34015_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.impl.gen.tuple,gens));
});

cljs.spec.impl.gen.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.cat.cljs$lang$applyTo = (function (seq34016){
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34016));
});

cljs.spec.impl.gen.qualified_QMARK_ = (function cljs$spec$impl$gen$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.impl.gen.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.impl.gen.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.float_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.double_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.keyword_ns.call(null)),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.any_printable.call(null)], null)),cljs.spec.impl.gen.boolean$.call(null),cljs.spec.impl.gen.char$.call(null),cljs.spec.impl.gen.fmap.call(null,((function (simple){
return (function (p1__34020_SHARP_){
return (new Date(p1__34020_SHARP_));
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

//# sourceMappingURL=gen.js.map?rel=1490072503972