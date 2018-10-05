// Compiled by ClojureScript 1.10.238 {}
goog.provide('lightmod.init');
goog.require('cljs.core');
goog.require('adzerk.boot_reload.client');
goog.require('adzerk.boot_reload.reload');
goog.require('adzerk.boot_reload.display');
goog.require('adzerk.boot_reload.connection');
goog.require('goog.dom');
goog.require('eval_soup.core');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('goog.net.XhrIo');
lightmod.init.clj_logo = "<svg version=\"1.1\" id=\"svg2\" xmlns=\"http://www.w3.org/2000/svg\">\r\n  <path d=\"M 20 0 C 8.972 0 0 8.972 0 20 C 0 31.028 8.972 40 20 40 C 31.028 40 40 31.028 40 20 C 40 8.972 31.028 0 20 0\" id=\"path8\" style=\"fill:#ffffff\"/>\r\n  <path d=\"M 19.268 20.359 C 19.089 20.749 18.89 21.186 18.685 21.652 C 17.959 23.296 17.156 25.297 16.862 26.579 C 16.757 27.036 16.691 27.601 16.693 28.229 C 16.693 28.477 16.706 28.738 16.727 29.003 C 17.753 29.38 18.861 29.588 20.019 29.59 C 21.072 29.588 22.084 29.413 23.032 29.098 C 22.809 28.895 22.597 28.678 22.403 28.433 C 21.119 26.796 20.402 24.395 19.268 20.359\" id=\"path10\" style=\"fill:#91dc47\"/>\r\n  <path d=\"M 14.527 12.222 C 12.074 13.951 10.468 16.802 10.462 20.034 C 10.468 23.216 12.025 26.031 14.417 27.767 C 15.003 25.323 16.473 23.086 18.678 18.602 C 18.547 18.242 18.398 17.849 18.231 17.435 C 17.62 15.903 16.739 14.123 15.952 13.318 C 15.551 12.897 15.064 12.533 14.527 12.222\" id=\"path12\" style=\"fill:#91dc47\"/>\r\n  <path d=\"M 28.343 30.994 C 27.077 30.836 26.033 30.644 25.119 30.322 C 23.582 31.085 21.851 31.516 20.019 31.516 C 13.677 31.516 8.537 26.377 8.536 20.034 C 8.536 16.592 10.052 13.507 12.451 11.402 C 11.81 11.247 11.14 11.157 10.457 11.158 C 7.088 11.19 3.532 13.054 2.051 18.09 C 1.912 18.823 1.945 19.377 1.945 20.034 C 1.945 30.016 10.038 38.108 20.019 38.108 C 26.132 38.108 31.532 35.071 34.802 30.425 C 33.033 30.866 31.332 31.077 29.876 31.081 C 29.33 31.081 28.817 31.052 28.343 30.994\" id=\"path14\" style=\"fill:#63b132\"/>\r\n  <path d=\"M 24.947 27.492 C 25.058 27.547 25.311 27.638 25.663 27.738 C 28.031 25.999 29.57 23.199 29.577 20.034 L 29.576 20.034 C 29.567 14.757 25.297 10.487 20.019 10.477 C 18.97 10.479 17.962 10.652 17.018 10.965 C 18.959 13.177 19.892 16.337 20.794 19.795 C 20.795 19.797 20.796 19.798 20.796 19.799 C 20.798 19.802 21.085 20.759 21.577 22.029 C 22.067 23.298 22.764 24.868 23.524 26.012 C 24.024 26.779 24.573 27.33 24.947 27.492\" id=\"path16\" style=\"fill:#90b4fe\"/>\r\n  <path d=\"M 20.019 1.959 C 13.965 1.959 8.61 4.94 5.33 9.509 C 7.037 8.44 8.78 8.054 10.301 8.068 C 12.402 8.074 14.054 8.726 14.847 9.171 C 15.038 9.282 15.22 9.4 15.398 9.522 C 16.812 8.9 18.374 8.551 20.019 8.551 C 26.361 8.552 31.502 13.692 31.503 20.034 L 31.502 20.034 C 31.502 23.231 30.194 26.122 28.086 28.204 C 28.603 28.262 29.155 28.298 29.719 28.295 C 31.72 28.296 33.884 27.854 35.506 26.49 C 36.564 25.599 37.45 24.295 37.941 22.339 C 38.037 21.583 38.093 20.815 38.093 20.034 C 38.093 10.052 30.001 1.959 20.019 1.959\" id=\"path18\" style=\"fill:#5881d8\"/>\r\n</svg>";
lightmod.init.construct_hud_node = (function lightmod$init$construct_hud_node(p__10802){
var map__10803 = p__10802;
var map__10803__$1 = ((((!((map__10803 == null)))?(((((map__10803.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10803.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10803):map__10803);
var messages = map__10803__$1;
var type = cljs.core.get.call(null,map__10803__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var warnings = cljs.core.get.call(null,map__10803__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
var exception = cljs.core.get.call(null,map__10803__$1,new cljs.core.Keyword(null,"exception","exception",-335277064));
var G__10805 = adzerk.boot_reload.display.mk_node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),adzerk.boot_reload.display.style.call(null,new cljs.core.Keyword(null,"pad","pad",-36734541),new cljs.core.Keyword(null,"flex","flex",-1425124628),new cljs.core.Keyword(null,"flex-c","flex-c",1898731114),(cljs.core.truth_(exception)?new cljs.core.Keyword(null,"bg-red","bg-red",-1645498040):((cljs.core.seq.call(null,warnings))?new cljs.core.Keyword(null,"bg-yellow","bg-yellow",-1293468429):new cljs.core.Keyword(null,"bg-clear","bg-clear",-673074101)
))));
goog.dom.append(G__10805,adzerk.boot_reload.display.mk_node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),adzerk.boot_reload.display.style.call(null,new cljs.core.Keyword(null,"logo","logo",1237980263),new cljs.core.Keyword(null,"mr10","mr10",-144509621)),adzerk.boot_reload.display.logo_node.call(null,((cljs.core._EQ_.call(null,type,new cljs.core.Keyword(null,"visual-clj","visual-clj",-1170100936)))?lightmod.init.clj_logo:adzerk.boot_reload.display.cljs_logo))));

goog.dom.append(G__10805,(cljs.core.truth_(exception)?adzerk.boot_reload.display.exception_node.call(null,exception):((cljs.core.seq.call(null,warnings))?adzerk.boot_reload.display.warnings_node.call(null,warnings):adzerk.boot_reload.display.reloaded_node.call(null)
)));

return G__10805;
});
adzerk.boot_reload.display.construct_hud_node = lightmod.init.construct_hud_node;
cljs.core._add_method.call(null,adzerk.boot_reload.client.handle,new cljs.core.Keyword(null,"visual-clj","visual-clj",-1170100936),(function (state,opts){
if(cljs.core.truth_(adzerk.boot_reload.reload.has_dom_QMARK_.call(null))){
return adzerk.boot_reload.display.display.call(null,state,opts);
} else {
return null;
}
}));
cljs.core.add_watch.call(null,adzerk.boot_reload.connection.ws_conn,new cljs.core.Keyword(null,"disconnect","disconnect",-132009289),(function (_,___$1,___$2,new_val){
if((new_val == null)){
return adzerk.boot_reload.client.handle.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"visual","visual",942787224),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),"Lost connection to server."], null)], null));
} else {
return null;
}
}));
window.addEventListener("load",(function (){
goog.net.XhrIo.send(".out/lightmod.edn",(function (e){
if(cljs.core.truth_(e.target.isSuccess())){
var map__10806 = cljs.reader.read_string.call(null,e.target.getResponseText());
var map__10806__$1 = ((((!((map__10806 == null)))?(((((map__10806.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10806.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10806):map__10806);
var reload_port = cljs.core.get.call(null,map__10806__$1,new cljs.core.Keyword(null,"reload-port","reload-port",-1277696459));
return adzerk.boot_reload.client.connect.call(null,["ws://localhost:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(reload_port)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),cljs.core._PLUS_], null));
} else {
return console.log("WARNING: Couldn't find reload port");
}
}),"GET");

window.status = "MY-MAGIC-VALUE";

window.status = "";

if(cljs.core.truth_(window.java)){
return window.java.onload();
} else {
return null;
}
}));
lightmod.init.form__GT_serializable = (function lightmod$init$form__GT_serializable(form){
if((form instanceof Error)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var or__3922__auto__ = (function (){var G__10809 = form;
var G__10809__$1 = (((G__10809 == null))?null:G__10809.cause);
if((G__10809__$1 == null)){
return null;
} else {
return G__10809__$1.message;
}
})();
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return form.message;
}
})(),form.fileName,form.lineNumber], null);
} else {
return cljs.core.pr_str.call(null,form);
}
});
lightmod.init._STAR_current_ns = cljs.core.atom.call(null,new cljs.core.Symbol(null,"cljs.user","cljs.user",877795071,null));
lightmod.init.eval_code = (function lightmod$init$eval_code(path,code){
if(cljs.core.truth_(window.java)){
var _STAR_current_ns = (cljs.core.truth_(path)?cljs.core.atom.call(null,new cljs.core.Symbol(null,"cljs.user","cljs.user",877795071,null)):lightmod.init._STAR_current_ns);
return eval_soup.core.code__GT_results.call(null,cljs.reader.read_string.call(null,code),((function (_STAR_current_ns){
return (function (results){
return window.java.onevalcomplete(path,cljs.core.pr_str.call(null,cljs.core.mapv.call(null,lightmod.init.form__GT_serializable,results)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,_STAR_current_ns))].join(''));
});})(_STAR_current_ns))
,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"*current-ns","*current-ns",547476271),_STAR_current_ns,new cljs.core.Keyword(null,"custom-load","custom-load",-1830353108),((function (_STAR_current_ns){
return (function (opts,cb){
return cb.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"lang","lang",-1819677104),new cljs.core.Keyword(null,"clj","clj",-660495428),new cljs.core.Keyword(null,"source","source",-433931539),""], null));
});})(_STAR_current_ns))
], null));
} else {
return null;
}
});
goog.exportSymbol('lightmod.init.eval_code', lightmod.init.eval_code);

//# sourceMappingURL=init.js.map
