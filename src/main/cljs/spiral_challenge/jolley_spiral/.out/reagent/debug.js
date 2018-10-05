// Compiled by ClojureScript 1.10.238 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = typeof console !== 'undefined';
reagent.debug.tracking = false;
if(typeof reagent.debug.warnings !== 'undefined'){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if(typeof reagent.debug.track_console !== 'undefined'){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__793__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__793 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__794__i = 0, G__794__a = new Array(arguments.length -  0);
while (G__794__i < G__794__a.length) {G__794__a[G__794__i] = arguments[G__794__i + 0]; ++G__794__i;}
  args = new cljs.core.IndexedSeq(G__794__a,0,null);
} 
return G__793__delegate.call(this,args);};
G__793.cljs$lang$maxFixedArity = 0;
G__793.cljs$lang$applyTo = (function (arglist__795){
var args = cljs.core.seq(arglist__795);
return G__793__delegate(args);
});
G__793.cljs$core$IFn$_invoke$arity$variadic = G__793__delegate;
return G__793;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__796__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__796 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__797__i = 0, G__797__a = new Array(arguments.length -  0);
while (G__797__i < G__797__a.length) {G__797__a[G__797__i] = arguments[G__797__i + 0]; ++G__797__i;}
  args = new cljs.core.IndexedSeq(G__797__a,0,null);
} 
return G__796__delegate.call(this,args);};
G__796.cljs$lang$maxFixedArity = 0;
G__796.cljs$lang$applyTo = (function (arglist__798){
var args = cljs.core.seq(arglist__798);
return G__796__delegate(args);
});
G__796.cljs$core$IFn$_invoke$arity$variadic = G__796__delegate;
return G__796;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=debug.js.map
