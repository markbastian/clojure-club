// Compiled by ClojureScript 1.9.495 {}
goog.provide('figwheel.connect.dev');
goog.require('cljs.core');
goog.require('clojure_club.core');
goog.require('figwheel.client');
goog.require('figwheel.client.utils');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__27927__delegate = function (x){
if(cljs.core.truth_(clojure_club.core.on_js_reload)){
return cljs.core.apply.call(null,clojure_club.core.on_js_reload,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'clojure-club.core/on-js-reload' is missing");
}
};
var G__27927 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__27928__i = 0, G__27928__a = new Array(arguments.length -  0);
while (G__27928__i < G__27928__a.length) {G__27928__a[G__27928__i] = arguments[G__27928__i + 0]; ++G__27928__i;}
  x = new cljs.core.IndexedSeq(G__27928__a,0);
} 
return G__27927__delegate.call(this,x);};
G__27927.cljs$lang$maxFixedArity = 0;
G__27927.cljs$lang$applyTo = (function (arglist__27929){
var x = cljs.core.seq(arglist__27929);
return G__27927__delegate(x);
});
G__27927.cljs$core$IFn$_invoke$arity$variadic = G__27927__delegate;
return G__27927;
})()
,new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null));

//# sourceMappingURL=dev.js.map?rel=1490072841384