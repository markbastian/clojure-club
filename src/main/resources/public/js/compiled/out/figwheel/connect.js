// Compiled by ClojureScript 1.8.51 {}
goog.provide('figwheel.connect');
goog.require('cljs.core');
goog.require('clojure_club.core');
goog.require('figwheel.client');
goog.require('figwheel.client.utils');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__26140__delegate = function (x){
if(cljs.core.truth_(clojure_club.core.on_js_reload)){
return cljs.core.apply.call(null,clojure_club.core.on_js_reload,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'clojure-club.core/on-js-reload' is missing");
}
};
var G__26140 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__26141__i = 0, G__26141__a = new Array(arguments.length -  0);
while (G__26141__i < G__26141__a.length) {G__26141__a[G__26141__i] = arguments[G__26141__i + 0]; ++G__26141__i;}
  x = new cljs.core.IndexedSeq(G__26141__a,0);
} 
return G__26140__delegate.call(this,x);};
G__26140.cljs$lang$maxFixedArity = 0;
G__26140.cljs$lang$applyTo = (function (arglist__26142){
var x = cljs.core.seq(arglist__26142);
return G__26140__delegate(x);
});
G__26140.cljs$core$IFn$_invoke$arity$variadic = G__26140__delegate;
return G__26140;
})()
,new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null));

//# sourceMappingURL=connect.js.map?rel=1490072960093