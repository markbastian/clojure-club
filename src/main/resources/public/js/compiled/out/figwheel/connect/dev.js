// Compiled by ClojureScript 1.9.495 {}
goog.provide('figwheel.connect.dev');
goog.require('cljs.core');
goog.require('clojure_club.core');
goog.require('figwheel.client');
goog.require('figwheel.client.utils');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__36410__delegate = function (x){
if(cljs.core.truth_(clojure_club.core.on_js_reload)){
return cljs.core.apply.call(null,clojure_club.core.on_js_reload,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'clojure-club.core/on-js-reload' is missing");
}
};
var G__36410 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__36411__i = 0, G__36411__a = new Array(arguments.length -  0);
while (G__36411__i < G__36411__a.length) {G__36411__a[G__36411__i] = arguments[G__36411__i + 0]; ++G__36411__i;}
  x = new cljs.core.IndexedSeq(G__36411__a,0);
} 
return G__36410__delegate.call(this,x);};
G__36410.cljs$lang$maxFixedArity = 0;
G__36410.cljs$lang$applyTo = (function (arglist__36412){
var x = cljs.core.seq(arglist__36412);
return G__36410__delegate(x);
});
G__36410.cljs$core$IFn$_invoke$arity$variadic = G__36410__delegate;
return G__36410;
})()
,new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null));

//# sourceMappingURL=dev.js.map?rel=1491273379035