// Compiled by ClojureScript 1.9.495 {}
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
var G__26487__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__26487 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26488__i = 0, G__26488__a = new Array(arguments.length -  0);
while (G__26488__i < G__26488__a.length) {G__26488__a[G__26488__i] = arguments[G__26488__i + 0]; ++G__26488__i;}
  args = new cljs.core.IndexedSeq(G__26488__a,0);
} 
return G__26487__delegate.call(this,args);};
G__26487.cljs$lang$maxFixedArity = 0;
G__26487.cljs$lang$applyTo = (function (arglist__26489){
var args = cljs.core.seq(arglist__26489);
return G__26487__delegate(args);
});
G__26487.cljs$core$IFn$_invoke$arity$variadic = G__26487__delegate;
return G__26487;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__26490__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__26490 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26491__i = 0, G__26491__a = new Array(arguments.length -  0);
while (G__26491__i < G__26491__a.length) {G__26491__a[G__26491__i] = arguments[G__26491__i + 0]; ++G__26491__i;}
  args = new cljs.core.IndexedSeq(G__26491__a,0);
} 
return G__26490__delegate.call(this,args);};
G__26490.cljs$lang$maxFixedArity = 0;
G__26490.cljs$lang$applyTo = (function (arglist__26492){
var args = cljs.core.seq(arglist__26492);
return G__26490__delegate(args);
});
G__26490.cljs$core$IFn$_invoke$arity$variadic = G__26490__delegate;
return G__26490;
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

//# sourceMappingURL=debug.js.map?rel=1491273372065