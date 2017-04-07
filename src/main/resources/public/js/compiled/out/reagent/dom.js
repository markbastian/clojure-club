// Compiled by ClojureScript 1.9.495 {}
goog.provide('reagent.dom');
goog.require('cljs.core');
goog.require('cljsjs.react.dom');
goog.require('reagent.impl.util');
goog.require('reagent.impl.template');
goog.require('reagent.impl.batching');
goog.require('reagent.ratom');
goog.require('reagent.debug');
goog.require('reagent.interop');
if(typeof reagent.dom.imported !== 'undefined'){
} else {
reagent.dom.imported = null;
}
reagent.dom.module = (function reagent$dom$module(){
if(!((reagent.dom.imported == null))){
return reagent.dom.imported;
} else {
if(typeof ReactDOM !== 'undefined'){
return reagent.dom.imported = ReactDOM;
} else {
if(typeof require !== 'undefined'){
var or__25219__auto__ = reagent.dom.imported = require("react-dom");
if(cljs.core.truth_(or__25219__auto__)){
return or__25219__auto__;
} else {
throw (new Error("require('react-dom') failed"));
}
} else {
throw (new Error("js/ReactDOM is missing"));

}
}
}
});
if(typeof reagent.dom.roots !== 'undefined'){
} else {
reagent.dom.roots = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.dissoc,container);

return (reagent.dom.module.call(null)["unmountComponentAtNode"])(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR_26946 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = true;

try{return (reagent.dom.module.call(null)["render"])(comp.call(null),container,((function (_STAR_always_update_STAR_26946){
return (function (){
var _STAR_always_update_STAR_26947 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = false;

try{cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.assoc,container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp,container], null));

reagent.impl.batching.flush_after_render.call(null);

if(!((callback == null))){
return callback.call(null);
} else {
return null;
}
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_26947;
}});})(_STAR_always_update_STAR_26946))
);
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_26946;
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp.call(null,comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element. The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var args26948 = [];
var len__26332__auto___26951 = arguments.length;
var i__26333__auto___26952 = (0);
while(true){
if((i__26333__auto___26952 < len__26332__auto___26951)){
args26948.push((arguments[i__26333__auto___26952]));

var G__26953 = (i__26333__auto___26952 + (1));
i__26333__auto___26952 = G__26953;
continue;
} else {
}
break;
}

var G__26950 = args26948.length;
switch (G__26950) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args26948.length)].join('')));

}
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.call(null,comp,container,null);
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback){
reagent.ratom.flush_BANG_.call(null);

var f = (function (){
return reagent.impl.template.as_element.call(null,((cljs.core.fn_QMARK_.call(null,comp))?comp.call(null):comp));
});
return reagent.dom.render_comp.call(null,f,container,callback);
});

reagent.dom.render.cljs$lang$maxFixedArity = 3;

reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp.call(null,container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return (reagent.dom.module.call(null)["findDOMNode"])(this$);
});
reagent.impl.template.find_dom_node = reagent.dom.dom_node;
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_.call(null);

var seq__26959_26963 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,reagent.dom.roots)));
var chunk__26960_26964 = null;
var count__26961_26965 = (0);
var i__26962_26966 = (0);
while(true){
if((i__26962_26966 < count__26961_26965)){
var v_26967 = cljs.core._nth.call(null,chunk__26960_26964,i__26962_26966);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_26967);

var G__26968 = seq__26959_26963;
var G__26969 = chunk__26960_26964;
var G__26970 = count__26961_26965;
var G__26971 = (i__26962_26966 + (1));
seq__26959_26963 = G__26968;
chunk__26960_26964 = G__26969;
count__26961_26965 = G__26970;
i__26962_26966 = G__26971;
continue;
} else {
var temp__4657__auto___26972 = cljs.core.seq.call(null,seq__26959_26963);
if(temp__4657__auto___26972){
var seq__26959_26973__$1 = temp__4657__auto___26972;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26959_26973__$1)){
var c__26038__auto___26974 = cljs.core.chunk_first.call(null,seq__26959_26973__$1);
var G__26975 = cljs.core.chunk_rest.call(null,seq__26959_26973__$1);
var G__26976 = c__26038__auto___26974;
var G__26977 = cljs.core.count.call(null,c__26038__auto___26974);
var G__26978 = (0);
seq__26959_26963 = G__26975;
chunk__26960_26964 = G__26976;
count__26961_26965 = G__26977;
i__26962_26966 = G__26978;
continue;
} else {
var v_26979 = cljs.core.first.call(null,seq__26959_26973__$1);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_26979);

var G__26980 = cljs.core.next.call(null,seq__26959_26973__$1);
var G__26981 = null;
var G__26982 = (0);
var G__26983 = (0);
seq__26959_26963 = G__26980;
chunk__26960_26964 = G__26981;
count__26961_26965 = G__26982;
i__26962_26966 = G__26983;
continue;
}
} else {
}
}
break;
}

return "Updated";
});

//# sourceMappingURL=dom.js.map?rel=1491273373384