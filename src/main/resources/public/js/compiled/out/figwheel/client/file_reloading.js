// Compiled by ClojureScript 1.9.495 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('goog.async.Deferred');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__25219__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__25219__auto__){
return or__25219__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__25219__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__25219__auto__)){
return or__25219__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__32725_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__32725_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__32730 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__32731 = null;
var count__32732 = (0);
var i__32733 = (0);
while(true){
if((i__32733 < count__32732)){
var n = cljs.core._nth.call(null,chunk__32731,i__32733);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__32734 = seq__32730;
var G__32735 = chunk__32731;
var G__32736 = count__32732;
var G__32737 = (i__32733 + (1));
seq__32730 = G__32734;
chunk__32731 = G__32735;
count__32732 = G__32736;
i__32733 = G__32737;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__32730);
if(temp__4657__auto__){
var seq__32730__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32730__$1)){
var c__26038__auto__ = cljs.core.chunk_first.call(null,seq__32730__$1);
var G__32738 = cljs.core.chunk_rest.call(null,seq__32730__$1);
var G__32739 = c__26038__auto__;
var G__32740 = cljs.core.count.call(null,c__26038__auto__);
var G__32741 = (0);
seq__32730 = G__32738;
chunk__32731 = G__32739;
count__32732 = G__32740;
i__32733 = G__32741;
continue;
} else {
var n = cljs.core.first.call(null,seq__32730__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__32742 = cljs.core.next.call(null,seq__32730__$1);
var G__32743 = null;
var G__32744 = (0);
var G__32745 = (0);
seq__32730 = G__32742;
chunk__32731 = G__32743;
count__32732 = G__32744;
i__32733 = G__32745;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__32796_32807 = cljs.core.seq.call(null,deps);
var chunk__32797_32808 = null;
var count__32798_32809 = (0);
var i__32799_32810 = (0);
while(true){
if((i__32799_32810 < count__32798_32809)){
var dep_32811 = cljs.core._nth.call(null,chunk__32797_32808,i__32799_32810);
topo_sort_helper_STAR_.call(null,dep_32811,(depth + (1)),state);

var G__32812 = seq__32796_32807;
var G__32813 = chunk__32797_32808;
var G__32814 = count__32798_32809;
var G__32815 = (i__32799_32810 + (1));
seq__32796_32807 = G__32812;
chunk__32797_32808 = G__32813;
count__32798_32809 = G__32814;
i__32799_32810 = G__32815;
continue;
} else {
var temp__4657__auto___32816 = cljs.core.seq.call(null,seq__32796_32807);
if(temp__4657__auto___32816){
var seq__32796_32817__$1 = temp__4657__auto___32816;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32796_32817__$1)){
var c__26038__auto___32818 = cljs.core.chunk_first.call(null,seq__32796_32817__$1);
var G__32819 = cljs.core.chunk_rest.call(null,seq__32796_32817__$1);
var G__32820 = c__26038__auto___32818;
var G__32821 = cljs.core.count.call(null,c__26038__auto___32818);
var G__32822 = (0);
seq__32796_32807 = G__32819;
chunk__32797_32808 = G__32820;
count__32798_32809 = G__32821;
i__32799_32810 = G__32822;
continue;
} else {
var dep_32823 = cljs.core.first.call(null,seq__32796_32817__$1);
topo_sort_helper_STAR_.call(null,dep_32823,(depth + (1)),state);

var G__32824 = cljs.core.next.call(null,seq__32796_32817__$1);
var G__32825 = null;
var G__32826 = (0);
var G__32827 = (0);
seq__32796_32807 = G__32824;
chunk__32797_32808 = G__32825;
count__32798_32809 = G__32826;
i__32799_32810 = G__32827;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__32800){
var vec__32804 = p__32800;
var seq__32805 = cljs.core.seq.call(null,vec__32804);
var first__32806 = cljs.core.first.call(null,seq__32805);
var seq__32805__$1 = cljs.core.next.call(null,seq__32805);
var x = first__32806;
var xs = seq__32805__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__32804,seq__32805,first__32806,seq__32805__$1,x,xs,get_deps__$1){
return (function (p1__32746_SHARP_){
return clojure.set.difference.call(null,p1__32746_SHARP_,x);
});})(vec__32804,seq__32805,first__32806,seq__32805__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__32840 = cljs.core.seq.call(null,provides);
var chunk__32841 = null;
var count__32842 = (0);
var i__32843 = (0);
while(true){
if((i__32843 < count__32842)){
var prov = cljs.core._nth.call(null,chunk__32841,i__32843);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__32844_32852 = cljs.core.seq.call(null,requires);
var chunk__32845_32853 = null;
var count__32846_32854 = (0);
var i__32847_32855 = (0);
while(true){
if((i__32847_32855 < count__32846_32854)){
var req_32856 = cljs.core._nth.call(null,chunk__32845_32853,i__32847_32855);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_32856,prov);

var G__32857 = seq__32844_32852;
var G__32858 = chunk__32845_32853;
var G__32859 = count__32846_32854;
var G__32860 = (i__32847_32855 + (1));
seq__32844_32852 = G__32857;
chunk__32845_32853 = G__32858;
count__32846_32854 = G__32859;
i__32847_32855 = G__32860;
continue;
} else {
var temp__4657__auto___32861 = cljs.core.seq.call(null,seq__32844_32852);
if(temp__4657__auto___32861){
var seq__32844_32862__$1 = temp__4657__auto___32861;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32844_32862__$1)){
var c__26038__auto___32863 = cljs.core.chunk_first.call(null,seq__32844_32862__$1);
var G__32864 = cljs.core.chunk_rest.call(null,seq__32844_32862__$1);
var G__32865 = c__26038__auto___32863;
var G__32866 = cljs.core.count.call(null,c__26038__auto___32863);
var G__32867 = (0);
seq__32844_32852 = G__32864;
chunk__32845_32853 = G__32865;
count__32846_32854 = G__32866;
i__32847_32855 = G__32867;
continue;
} else {
var req_32868 = cljs.core.first.call(null,seq__32844_32862__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_32868,prov);

var G__32869 = cljs.core.next.call(null,seq__32844_32862__$1);
var G__32870 = null;
var G__32871 = (0);
var G__32872 = (0);
seq__32844_32852 = G__32869;
chunk__32845_32853 = G__32870;
count__32846_32854 = G__32871;
i__32847_32855 = G__32872;
continue;
}
} else {
}
}
break;
}

var G__32873 = seq__32840;
var G__32874 = chunk__32841;
var G__32875 = count__32842;
var G__32876 = (i__32843 + (1));
seq__32840 = G__32873;
chunk__32841 = G__32874;
count__32842 = G__32875;
i__32843 = G__32876;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__32840);
if(temp__4657__auto__){
var seq__32840__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32840__$1)){
var c__26038__auto__ = cljs.core.chunk_first.call(null,seq__32840__$1);
var G__32877 = cljs.core.chunk_rest.call(null,seq__32840__$1);
var G__32878 = c__26038__auto__;
var G__32879 = cljs.core.count.call(null,c__26038__auto__);
var G__32880 = (0);
seq__32840 = G__32877;
chunk__32841 = G__32878;
count__32842 = G__32879;
i__32843 = G__32880;
continue;
} else {
var prov = cljs.core.first.call(null,seq__32840__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__32848_32881 = cljs.core.seq.call(null,requires);
var chunk__32849_32882 = null;
var count__32850_32883 = (0);
var i__32851_32884 = (0);
while(true){
if((i__32851_32884 < count__32850_32883)){
var req_32885 = cljs.core._nth.call(null,chunk__32849_32882,i__32851_32884);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_32885,prov);

var G__32886 = seq__32848_32881;
var G__32887 = chunk__32849_32882;
var G__32888 = count__32850_32883;
var G__32889 = (i__32851_32884 + (1));
seq__32848_32881 = G__32886;
chunk__32849_32882 = G__32887;
count__32850_32883 = G__32888;
i__32851_32884 = G__32889;
continue;
} else {
var temp__4657__auto___32890__$1 = cljs.core.seq.call(null,seq__32848_32881);
if(temp__4657__auto___32890__$1){
var seq__32848_32891__$1 = temp__4657__auto___32890__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32848_32891__$1)){
var c__26038__auto___32892 = cljs.core.chunk_first.call(null,seq__32848_32891__$1);
var G__32893 = cljs.core.chunk_rest.call(null,seq__32848_32891__$1);
var G__32894 = c__26038__auto___32892;
var G__32895 = cljs.core.count.call(null,c__26038__auto___32892);
var G__32896 = (0);
seq__32848_32881 = G__32893;
chunk__32849_32882 = G__32894;
count__32850_32883 = G__32895;
i__32851_32884 = G__32896;
continue;
} else {
var req_32897 = cljs.core.first.call(null,seq__32848_32891__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_32897,prov);

var G__32898 = cljs.core.next.call(null,seq__32848_32891__$1);
var G__32899 = null;
var G__32900 = (0);
var G__32901 = (0);
seq__32848_32881 = G__32898;
chunk__32849_32882 = G__32899;
count__32850_32883 = G__32900;
i__32851_32884 = G__32901;
continue;
}
} else {
}
}
break;
}

var G__32902 = cljs.core.next.call(null,seq__32840__$1);
var G__32903 = null;
var G__32904 = (0);
var G__32905 = (0);
seq__32840 = G__32902;
chunk__32841 = G__32903;
count__32842 = G__32904;
i__32843 = G__32905;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel.client.file_reloading.figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__32910_32914 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__32911_32915 = null;
var count__32912_32916 = (0);
var i__32913_32917 = (0);
while(true){
if((i__32913_32917 < count__32912_32916)){
var ns_32918 = cljs.core._nth.call(null,chunk__32911_32915,i__32913_32917);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_32918);

var G__32919 = seq__32910_32914;
var G__32920 = chunk__32911_32915;
var G__32921 = count__32912_32916;
var G__32922 = (i__32913_32917 + (1));
seq__32910_32914 = G__32919;
chunk__32911_32915 = G__32920;
count__32912_32916 = G__32921;
i__32913_32917 = G__32922;
continue;
} else {
var temp__4657__auto___32923 = cljs.core.seq.call(null,seq__32910_32914);
if(temp__4657__auto___32923){
var seq__32910_32924__$1 = temp__4657__auto___32923;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32910_32924__$1)){
var c__26038__auto___32925 = cljs.core.chunk_first.call(null,seq__32910_32924__$1);
var G__32926 = cljs.core.chunk_rest.call(null,seq__32910_32924__$1);
var G__32927 = c__26038__auto___32925;
var G__32928 = cljs.core.count.call(null,c__26038__auto___32925);
var G__32929 = (0);
seq__32910_32914 = G__32926;
chunk__32911_32915 = G__32927;
count__32912_32916 = G__32928;
i__32913_32917 = G__32929;
continue;
} else {
var ns_32930 = cljs.core.first.call(null,seq__32910_32924__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_32930);

var G__32931 = cljs.core.next.call(null,seq__32910_32924__$1);
var G__32932 = null;
var G__32933 = (0);
var G__32934 = (0);
seq__32910_32914 = G__32931;
chunk__32911_32915 = G__32932;
count__32912_32916 = G__32933;
i__32913_32917 = G__32934;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__25219__auto__ = goog.require__;
if(cljs.core.truth_(or__25219__auto__)){
return or__25219__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__32935__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__32935 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__32936__i = 0, G__32936__a = new Array(arguments.length -  0);
while (G__32936__i < G__32936__a.length) {G__32936__a[G__32936__i] = arguments[G__32936__i + 0]; ++G__32936__i;}
  args = new cljs.core.IndexedSeq(G__32936__a,0);
} 
return G__32935__delegate.call(this,args);};
G__32935.cljs$lang$maxFixedArity = 0;
G__32935.cljs$lang$applyTo = (function (arglist__32937){
var args = cljs.core.seq(arglist__32937);
return G__32935__delegate(args);
});
G__32935.cljs$core$IFn$_invoke$arity$variadic = G__32935__delegate;
return G__32935;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__32938 = cljs.core._EQ_;
var expr__32939 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__32938.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__32939))){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern,pred__32938,expr__32939){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern,pred__32938,expr__32939))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path,pred__32938,expr__32939){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e32941){if((e32941 instanceof Error)){
var e = e32941;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Error loading file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e32941;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path,pred__32938,expr__32939))
} else {
if(cljs.core.truth_(pred__32938.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__32939))){
return ((function (pred__32938,expr__32939){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
deferred.addCallback(((function (deferred,pred__32938,expr__32939){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__32938,expr__32939))
);

return deferred.addErrback(((function (deferred,pred__32938,expr__32939){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__32938,expr__32939))
);
});
;})(pred__32938,expr__32939))
} else {
if(cljs.core.truth_(pred__32938.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__32939))){
return ((function (pred__32938,expr__32939){
return (function (request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e32942){if((e32942 instanceof Error)){
var e = e32942;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Error loading file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e32942;

}
}})());
});
;})(pred__32938,expr__32939))
} else {
return ((function (pred__32938,expr__32939){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__32938,expr__32939))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__32943,callback){
var map__32946 = p__32943;
var map__32946__$1 = ((((!((map__32946 == null)))?((((map__32946.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32946.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32946):map__32946);
var file_msg = map__32946__$1;
var request_url = cljs.core.get.call(null,map__32946__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("FigWheel: Attempting to load "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__32946,map__32946__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("FigWheel: Successfully loaded "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Error loading file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__32946,map__32946__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__28113__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28113__auto__){
return (function (){
var f__28114__auto__ = (function (){var switch__28001__auto__ = ((function (c__28113__auto__){
return (function (state_32970){
var state_val_32971 = (state_32970[(1)]);
if((state_val_32971 === (7))){
var inst_32966 = (state_32970[(2)]);
var state_32970__$1 = state_32970;
var statearr_32972_32992 = state_32970__$1;
(statearr_32972_32992[(2)] = inst_32966);

(statearr_32972_32992[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32971 === (1))){
var state_32970__$1 = state_32970;
var statearr_32973_32993 = state_32970__$1;
(statearr_32973_32993[(2)] = null);

(statearr_32973_32993[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32971 === (4))){
var inst_32950 = (state_32970[(7)]);
var inst_32950__$1 = (state_32970[(2)]);
var state_32970__$1 = (function (){var statearr_32974 = state_32970;
(statearr_32974[(7)] = inst_32950__$1);

return statearr_32974;
})();
if(cljs.core.truth_(inst_32950__$1)){
var statearr_32975_32994 = state_32970__$1;
(statearr_32975_32994[(1)] = (5));

} else {
var statearr_32976_32995 = state_32970__$1;
(statearr_32976_32995[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32971 === (6))){
var state_32970__$1 = state_32970;
var statearr_32977_32996 = state_32970__$1;
(statearr_32977_32996[(2)] = null);

(statearr_32977_32996[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32971 === (3))){
var inst_32968 = (state_32970[(2)]);
var state_32970__$1 = state_32970;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32970__$1,inst_32968);
} else {
if((state_val_32971 === (2))){
var state_32970__$1 = state_32970;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32970__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_32971 === (11))){
var inst_32962 = (state_32970[(2)]);
var state_32970__$1 = (function (){var statearr_32978 = state_32970;
(statearr_32978[(8)] = inst_32962);

return statearr_32978;
})();
var statearr_32979_32997 = state_32970__$1;
(statearr_32979_32997[(2)] = null);

(statearr_32979_32997[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32971 === (9))){
var inst_32954 = (state_32970[(9)]);
var inst_32956 = (state_32970[(10)]);
var inst_32958 = inst_32956.call(null,inst_32954);
var state_32970__$1 = state_32970;
var statearr_32980_32998 = state_32970__$1;
(statearr_32980_32998[(2)] = inst_32958);

(statearr_32980_32998[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32971 === (5))){
var inst_32950 = (state_32970[(7)]);
var inst_32952 = figwheel.client.file_reloading.blocking_load.call(null,inst_32950);
var state_32970__$1 = state_32970;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32970__$1,(8),inst_32952);
} else {
if((state_val_32971 === (10))){
var inst_32954 = (state_32970[(9)]);
var inst_32960 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_32954);
var state_32970__$1 = state_32970;
var statearr_32981_32999 = state_32970__$1;
(statearr_32981_32999[(2)] = inst_32960);

(statearr_32981_32999[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32971 === (8))){
var inst_32950 = (state_32970[(7)]);
var inst_32956 = (state_32970[(10)]);
var inst_32954 = (state_32970[(2)]);
var inst_32955 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_32956__$1 = cljs.core.get.call(null,inst_32955,inst_32950);
var state_32970__$1 = (function (){var statearr_32982 = state_32970;
(statearr_32982[(9)] = inst_32954);

(statearr_32982[(10)] = inst_32956__$1);

return statearr_32982;
})();
if(cljs.core.truth_(inst_32956__$1)){
var statearr_32983_33000 = state_32970__$1;
(statearr_32983_33000[(1)] = (9));

} else {
var statearr_32984_33001 = state_32970__$1;
(statearr_32984_33001[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__28113__auto__))
;
return ((function (switch__28001__auto__,c__28113__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__28002__auto__ = null;
var figwheel$client$file_reloading$state_machine__28002__auto____0 = (function (){
var statearr_32988 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32988[(0)] = figwheel$client$file_reloading$state_machine__28002__auto__);

(statearr_32988[(1)] = (1));

return statearr_32988;
});
var figwheel$client$file_reloading$state_machine__28002__auto____1 = (function (state_32970){
while(true){
var ret_value__28003__auto__ = (function (){try{while(true){
var result__28004__auto__ = switch__28001__auto__.call(null,state_32970);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28004__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28004__auto__;
}
break;
}
}catch (e32989){if((e32989 instanceof Object)){
var ex__28005__auto__ = e32989;
var statearr_32990_33002 = state_32970;
(statearr_32990_33002[(5)] = ex__28005__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32970);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32989;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28003__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33003 = state_32970;
state_32970 = G__33003;
continue;
} else {
return ret_value__28003__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__28002__auto__ = function(state_32970){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__28002__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__28002__auto____1.call(this,state_32970);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__28002__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__28002__auto____0;
figwheel$client$file_reloading$state_machine__28002__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__28002__auto____1;
return figwheel$client$file_reloading$state_machine__28002__auto__;
})()
;})(switch__28001__auto__,c__28113__auto__))
})();
var state__28115__auto__ = (function (){var statearr_32991 = f__28114__auto__.call(null);
(statearr_32991[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28113__auto__);

return statearr_32991;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28115__auto__);
});})(c__28113__auto__))
);

return c__28113__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__33004,callback){
var map__33007 = p__33004;
var map__33007__$1 = ((((!((map__33007 == null)))?((((map__33007.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33007.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33007):map__33007);
var file_msg = map__33007__$1;
var namespace = cljs.core.get.call(null,map__33007__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__33007,map__33007__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__33007,map__33007__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__33009){
var map__33012 = p__33009;
var map__33012__$1 = ((((!((map__33012 == null)))?((((map__33012.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33012.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33012):map__33012);
var file_msg = map__33012__$1;
var namespace = cljs.core.get.call(null,map__33012__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__33014){
var map__33017 = p__33014;
var map__33017__$1 = ((((!((map__33017 == null)))?((((map__33017.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33017.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33017):map__33017);
var file_msg = map__33017__$1;
var namespace = cljs.core.get.call(null,map__33017__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__25207__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__25207__auto__){
var or__25219__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__25219__auto__)){
return or__25219__auto__;
} else {
var or__25219__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__25219__auto____$1)){
return or__25219__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__25207__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__33019,callback){
var map__33022 = p__33019;
var map__33022__$1 = ((((!((map__33022 == null)))?((((map__33022.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33022.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33022):map__33022);
var file_msg = map__33022__$1;
var request_url = cljs.core.get.call(null,map__33022__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__33022__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Not trying to load file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__28113__auto___33126 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28113__auto___33126,out){
return (function (){
var f__28114__auto__ = (function (){var switch__28001__auto__ = ((function (c__28113__auto___33126,out){
return (function (state_33108){
var state_val_33109 = (state_33108[(1)]);
if((state_val_33109 === (1))){
var inst_33082 = cljs.core.seq.call(null,files);
var inst_33083 = cljs.core.first.call(null,inst_33082);
var inst_33084 = cljs.core.next.call(null,inst_33082);
var inst_33085 = files;
var state_33108__$1 = (function (){var statearr_33110 = state_33108;
(statearr_33110[(7)] = inst_33083);

(statearr_33110[(8)] = inst_33084);

(statearr_33110[(9)] = inst_33085);

return statearr_33110;
})();
var statearr_33111_33127 = state_33108__$1;
(statearr_33111_33127[(2)] = null);

(statearr_33111_33127[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33109 === (2))){
var inst_33091 = (state_33108[(10)]);
var inst_33085 = (state_33108[(9)]);
var inst_33090 = cljs.core.seq.call(null,inst_33085);
var inst_33091__$1 = cljs.core.first.call(null,inst_33090);
var inst_33092 = cljs.core.next.call(null,inst_33090);
var inst_33093 = (inst_33091__$1 == null);
var inst_33094 = cljs.core.not.call(null,inst_33093);
var state_33108__$1 = (function (){var statearr_33112 = state_33108;
(statearr_33112[(10)] = inst_33091__$1);

(statearr_33112[(11)] = inst_33092);

return statearr_33112;
})();
if(inst_33094){
var statearr_33113_33128 = state_33108__$1;
(statearr_33113_33128[(1)] = (4));

} else {
var statearr_33114_33129 = state_33108__$1;
(statearr_33114_33129[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33109 === (3))){
var inst_33106 = (state_33108[(2)]);
var state_33108__$1 = state_33108;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33108__$1,inst_33106);
} else {
if((state_val_33109 === (4))){
var inst_33091 = (state_33108[(10)]);
var inst_33096 = figwheel.client.file_reloading.reload_js_file.call(null,inst_33091);
var state_33108__$1 = state_33108;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33108__$1,(7),inst_33096);
} else {
if((state_val_33109 === (5))){
var inst_33102 = cljs.core.async.close_BANG_.call(null,out);
var state_33108__$1 = state_33108;
var statearr_33115_33130 = state_33108__$1;
(statearr_33115_33130[(2)] = inst_33102);

(statearr_33115_33130[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33109 === (6))){
var inst_33104 = (state_33108[(2)]);
var state_33108__$1 = state_33108;
var statearr_33116_33131 = state_33108__$1;
(statearr_33116_33131[(2)] = inst_33104);

(statearr_33116_33131[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33109 === (7))){
var inst_33092 = (state_33108[(11)]);
var inst_33098 = (state_33108[(2)]);
var inst_33099 = cljs.core.async.put_BANG_.call(null,out,inst_33098);
var inst_33085 = inst_33092;
var state_33108__$1 = (function (){var statearr_33117 = state_33108;
(statearr_33117[(12)] = inst_33099);

(statearr_33117[(9)] = inst_33085);

return statearr_33117;
})();
var statearr_33118_33132 = state_33108__$1;
(statearr_33118_33132[(2)] = null);

(statearr_33118_33132[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__28113__auto___33126,out))
;
return ((function (switch__28001__auto__,c__28113__auto___33126,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__28002__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__28002__auto____0 = (function (){
var statearr_33122 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33122[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__28002__auto__);

(statearr_33122[(1)] = (1));

return statearr_33122;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__28002__auto____1 = (function (state_33108){
while(true){
var ret_value__28003__auto__ = (function (){try{while(true){
var result__28004__auto__ = switch__28001__auto__.call(null,state_33108);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28004__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28004__auto__;
}
break;
}
}catch (e33123){if((e33123 instanceof Object)){
var ex__28005__auto__ = e33123;
var statearr_33124_33133 = state_33108;
(statearr_33124_33133[(5)] = ex__28005__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33108);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33123;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28003__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33134 = state_33108;
state_33108 = G__33134;
continue;
} else {
return ret_value__28003__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__28002__auto__ = function(state_33108){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__28002__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__28002__auto____1.call(this,state_33108);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__28002__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__28002__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__28002__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__28002__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__28002__auto__;
})()
;})(switch__28001__auto__,c__28113__auto___33126,out))
})();
var state__28115__auto__ = (function (){var statearr_33125 = f__28114__auto__.call(null);
(statearr_33125[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28113__auto___33126);

return statearr_33125;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28115__auto__);
});})(c__28113__auto___33126,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__33135,opts){
var map__33139 = p__33135;
var map__33139__$1 = ((((!((map__33139 == null)))?((((map__33139.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33139.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33139):map__33139);
var eval_body = cljs.core.get.call(null,map__33139__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__33139__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__25207__auto__ = eval_body;
if(cljs.core.truth_(and__25207__auto__)){
return typeof eval_body === 'string';
} else {
return and__25207__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Evaling file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e33141){var e = e33141;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Unable to evaluate "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__33142_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__33142_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4655__auto__)){
var file_msg = temp__4655__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__33151){
var vec__33152 = p__33151;
var k = cljs.core.nth.call(null,vec__33152,(0),null);
var v = cljs.core.nth.call(null,vec__33152,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__33155){
var vec__33156 = p__33155;
var k = cljs.core.nth.call(null,vec__33156,(0),null);
var v = cljs.core.nth.call(null,vec__33156,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__33162,p__33163){
var map__33411 = p__33162;
var map__33411__$1 = ((((!((map__33411 == null)))?((((map__33411.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33411.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33411):map__33411);
var opts = map__33411__$1;
var before_jsload = cljs.core.get.call(null,map__33411__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__33411__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__33411__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__33412 = p__33163;
var map__33412__$1 = ((((!((map__33412 == null)))?((((map__33412.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33412.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33412):map__33412);
var msg = map__33412__$1;
var files = cljs.core.get.call(null,map__33412__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__33412__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__33412__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__28113__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28113__auto__,map__33411,map__33411__$1,opts,before_jsload,on_jsload,reload_dependents,map__33412,map__33412__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__28114__auto__ = (function (){var switch__28001__auto__ = ((function (c__28113__auto__,map__33411,map__33411__$1,opts,before_jsload,on_jsload,reload_dependents,map__33412,map__33412__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_33566){
var state_val_33567 = (state_33566[(1)]);
if((state_val_33567 === (7))){
var inst_33426 = (state_33566[(7)]);
var inst_33427 = (state_33566[(8)]);
var inst_33429 = (state_33566[(9)]);
var inst_33428 = (state_33566[(10)]);
var inst_33434 = cljs.core._nth.call(null,inst_33427,inst_33429);
var inst_33435 = figwheel.client.file_reloading.eval_body.call(null,inst_33434,opts);
var inst_33436 = (inst_33429 + (1));
var tmp33568 = inst_33426;
var tmp33569 = inst_33427;
var tmp33570 = inst_33428;
var inst_33426__$1 = tmp33568;
var inst_33427__$1 = tmp33569;
var inst_33428__$1 = tmp33570;
var inst_33429__$1 = inst_33436;
var state_33566__$1 = (function (){var statearr_33571 = state_33566;
(statearr_33571[(7)] = inst_33426__$1);

(statearr_33571[(8)] = inst_33427__$1);

(statearr_33571[(9)] = inst_33429__$1);

(statearr_33571[(10)] = inst_33428__$1);

(statearr_33571[(11)] = inst_33435);

return statearr_33571;
})();
var statearr_33572_33658 = state_33566__$1;
(statearr_33572_33658[(2)] = null);

(statearr_33572_33658[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33567 === (20))){
var inst_33469 = (state_33566[(12)]);
var inst_33477 = figwheel.client.file_reloading.sort_files.call(null,inst_33469);
var state_33566__$1 = state_33566;
var statearr_33573_33659 = state_33566__$1;
(statearr_33573_33659[(2)] = inst_33477);

(statearr_33573_33659[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33567 === (27))){
var state_33566__$1 = state_33566;
var statearr_33574_33660 = state_33566__$1;
(statearr_33574_33660[(2)] = null);

(statearr_33574_33660[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33567 === (1))){
var inst_33418 = (state_33566[(13)]);
var inst_33415 = before_jsload.call(null,files);
var inst_33416 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_33417 = (function (){return ((function (inst_33418,inst_33415,inst_33416,state_val_33567,c__28113__auto__,map__33411,map__33411__$1,opts,before_jsload,on_jsload,reload_dependents,map__33412,map__33412__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__33159_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__33159_SHARP_);
});
;})(inst_33418,inst_33415,inst_33416,state_val_33567,c__28113__auto__,map__33411,map__33411__$1,opts,before_jsload,on_jsload,reload_dependents,map__33412,map__33412__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_33418__$1 = cljs.core.filter.call(null,inst_33417,files);
var inst_33419 = cljs.core.not_empty.call(null,inst_33418__$1);
var state_33566__$1 = (function (){var statearr_33575 = state_33566;
(statearr_33575[(13)] = inst_33418__$1);

(statearr_33575[(14)] = inst_33416);

(statearr_33575[(15)] = inst_33415);

return statearr_33575;
})();
if(cljs.core.truth_(inst_33419)){
var statearr_33576_33661 = state_33566__$1;
(statearr_33576_33661[(1)] = (2));

} else {
var statearr_33577_33662 = state_33566__$1;
(statearr_33577_33662[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33567 === (24))){
var state_33566__$1 = state_33566;
var statearr_33578_33663 = state_33566__$1;
(statearr_33578_33663[(2)] = null);

(statearr_33578_33663[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33567 === (39))){
var inst_33519 = (state_33566[(16)]);
var state_33566__$1 = state_33566;
var statearr_33579_33664 = state_33566__$1;
(statearr_33579_33664[(2)] = inst_33519);

(statearr_33579_33664[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33567 === (46))){
var inst_33561 = (state_33566[(2)]);
var state_33566__$1 = state_33566;
var statearr_33580_33665 = state_33566__$1;
(statearr_33580_33665[(2)] = inst_33561);

(statearr_33580_33665[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33567 === (4))){
var inst_33463 = (state_33566[(2)]);
var inst_33464 = cljs.core.List.EMPTY;
var inst_33465 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_33464);
var inst_33466 = (function (){return ((function (inst_33463,inst_33464,inst_33465,state_val_33567,c__28113__auto__,map__33411,map__33411__$1,opts,before_jsload,on_jsload,reload_dependents,map__33412,map__33412__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__33160_SHARP_){
var and__25207__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__33160_SHARP_);
if(cljs.core.truth_(and__25207__auto__)){
return (cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__33160_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__33160_SHARP_)));
} else {
return and__25207__auto__;
}
});
;})(inst_33463,inst_33464,inst_33465,state_val_33567,c__28113__auto__,map__33411,map__33411__$1,opts,before_jsload,on_jsload,reload_dependents,map__33412,map__33412__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_33467 = cljs.core.filter.call(null,inst_33466,files);
var inst_33468 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_33469 = cljs.core.concat.call(null,inst_33467,inst_33468);
var state_33566__$1 = (function (){var statearr_33581 = state_33566;
(statearr_33581[(12)] = inst_33469);

(statearr_33581[(17)] = inst_33463);

(statearr_33581[(18)] = inst_33465);

return statearr_33581;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_33582_33666 = state_33566__$1;
(statearr_33582_33666[(1)] = (16));

} else {
var statearr_33583_33667 = state_33566__$1;
(statearr_33583_33667[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33567 === (15))){
var inst_33453 = (state_33566[(2)]);
var state_33566__$1 = state_33566;
var statearr_33584_33668 = state_33566__$1;
(statearr_33584_33668[(2)] = inst_33453);

(statearr_33584_33668[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33567 === (21))){
var inst_33479 = (state_33566[(19)]);
var inst_33479__$1 = (state_33566[(2)]);
var inst_33480 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_33479__$1);
var state_33566__$1 = (function (){var statearr_33585 = state_33566;
(statearr_33585[(19)] = inst_33479__$1);

return statearr_33585;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33566__$1,(22),inst_33480);
} else {
if((state_val_33567 === (31))){
var inst_33564 = (state_33566[(2)]);
var state_33566__$1 = state_33566;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33566__$1,inst_33564);
} else {
if((state_val_33567 === (32))){
var inst_33519 = (state_33566[(16)]);
var inst_33524 = inst_33519.cljs$lang$protocol_mask$partition0$;
var inst_33525 = (inst_33524 & (64));
var inst_33526 = inst_33519.cljs$core$ISeq$;
var inst_33527 = (cljs.core.PROTOCOL_SENTINEL === inst_33526);
var inst_33528 = (inst_33525) || (inst_33527);
var state_33566__$1 = state_33566;
if(cljs.core.truth_(inst_33528)){
var statearr_33586_33669 = state_33566__$1;
(statearr_33586_33669[(1)] = (35));

} else {
var statearr_33587_33670 = state_33566__$1;
(statearr_33587_33670[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33567 === (40))){
var inst_33541 = (state_33566[(20)]);
var inst_33540 = (state_33566[(2)]);
var inst_33541__$1 = cljs.core.get.call(null,inst_33540,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_33542 = cljs.core.get.call(null,inst_33540,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_33543 = cljs.core.not_empty.call(null,inst_33541__$1);
var state_33566__$1 = (function (){var statearr_33588 = state_33566;
(statearr_33588[(20)] = inst_33541__$1);

(statearr_33588[(21)] = inst_33542);

return statearr_33588;
})();
if(cljs.core.truth_(inst_33543)){
var statearr_33589_33671 = state_33566__$1;
(statearr_33589_33671[(1)] = (41));

} else {
var statearr_33590_33672 = state_33566__$1;
(statearr_33590_33672[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33567 === (33))){
var state_33566__$1 = state_33566;
var statearr_33591_33673 = state_33566__$1;
(statearr_33591_33673[(2)] = false);

(statearr_33591_33673[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33567 === (13))){
var inst_33439 = (state_33566[(22)]);
var inst_33443 = cljs.core.chunk_first.call(null,inst_33439);
var inst_33444 = cljs.core.chunk_rest.call(null,inst_33439);
var inst_33445 = cljs.core.count.call(null,inst_33443);
var inst_33426 = inst_33444;
var inst_33427 = inst_33443;
var inst_33428 = inst_33445;
var inst_33429 = (0);
var state_33566__$1 = (function (){var statearr_33592 = state_33566;
(statearr_33592[(7)] = inst_33426);

(statearr_33592[(8)] = inst_33427);

(statearr_33592[(9)] = inst_33429);

(statearr_33592[(10)] = inst_33428);

return statearr_33592;
})();
var statearr_33593_33674 = state_33566__$1;
(statearr_33593_33674[(2)] = null);

(statearr_33593_33674[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33567 === (22))){
var inst_33487 = (state_33566[(23)]);
var inst_33479 = (state_33566[(19)]);
var inst_33483 = (state_33566[(24)]);
var inst_33482 = (state_33566[(25)]);
var inst_33482__$1 = (state_33566[(2)]);
var inst_33483__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_33482__$1);
var inst_33484 = (function (){var all_files = inst_33479;
var res_SINGLEQUOTE_ = inst_33482__$1;
var res = inst_33483__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_33487,inst_33479,inst_33483,inst_33482,inst_33482__$1,inst_33483__$1,state_val_33567,c__28113__auto__,map__33411,map__33411__$1,opts,before_jsload,on_jsload,reload_dependents,map__33412,map__33412__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__33161_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__33161_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_33487,inst_33479,inst_33483,inst_33482,inst_33482__$1,inst_33483__$1,state_val_33567,c__28113__auto__,map__33411,map__33411__$1,opts,before_jsload,on_jsload,reload_dependents,map__33412,map__33412__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_33485 = cljs.core.filter.call(null,inst_33484,inst_33482__$1);
var inst_33486 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_33487__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_33486);
var inst_33488 = cljs.core.not_empty.call(null,inst_33487__$1);
var state_33566__$1 = (function (){var statearr_33594 = state_33566;
(statearr_33594[(23)] = inst_33487__$1);

(statearr_33594[(26)] = inst_33485);

(statearr_33594[(24)] = inst_33483__$1);

(statearr_33594[(25)] = inst_33482__$1);

return statearr_33594;
})();
if(cljs.core.truth_(inst_33488)){
var statearr_33595_33675 = state_33566__$1;
(statearr_33595_33675[(1)] = (23));

} else {
var statearr_33596_33676 = state_33566__$1;
(statearr_33596_33676[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33567 === (36))){
var state_33566__$1 = state_33566;
var statearr_33597_33677 = state_33566__$1;
(statearr_33597_33677[(2)] = false);

(statearr_33597_33677[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33567 === (41))){
var inst_33541 = (state_33566[(20)]);
var inst_33545 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_33546 = cljs.core.map.call(null,inst_33545,inst_33541);
var inst_33547 = cljs.core.pr_str.call(null,inst_33546);
var inst_33548 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("figwheel-no-load meta-data: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_33547)].join('');
var inst_33549 = figwheel.client.utils.log.call(null,inst_33548);
var state_33566__$1 = state_33566;
var statearr_33598_33678 = state_33566__$1;
(statearr_33598_33678[(2)] = inst_33549);

(statearr_33598_33678[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33567 === (43))){
var inst_33542 = (state_33566[(21)]);
var inst_33552 = (state_33566[(2)]);
var inst_33553 = cljs.core.not_empty.call(null,inst_33542);
var state_33566__$1 = (function (){var statearr_33599 = state_33566;
(statearr_33599[(27)] = inst_33552);

return statearr_33599;
})();
if(cljs.core.truth_(inst_33553)){
var statearr_33600_33679 = state_33566__$1;
(statearr_33600_33679[(1)] = (44));

} else {
var statearr_33601_33680 = state_33566__$1;
(statearr_33601_33680[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33567 === (29))){
var inst_33487 = (state_33566[(23)]);
var inst_33479 = (state_33566[(19)]);
var inst_33519 = (state_33566[(16)]);
var inst_33485 = (state_33566[(26)]);
var inst_33483 = (state_33566[(24)]);
var inst_33482 = (state_33566[(25)]);
var inst_33515 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_33518 = (function (){var all_files = inst_33479;
var res_SINGLEQUOTE_ = inst_33482;
var res = inst_33483;
var files_not_loaded = inst_33485;
var dependencies_that_loaded = inst_33487;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_33487,inst_33479,inst_33519,inst_33485,inst_33483,inst_33482,inst_33515,state_val_33567,c__28113__auto__,map__33411,map__33411__$1,opts,before_jsload,on_jsload,reload_dependents,map__33412,map__33412__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__33517){
var map__33602 = p__33517;
var map__33602__$1 = ((((!((map__33602 == null)))?((((map__33602.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33602.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33602):map__33602);
var namespace = cljs.core.get.call(null,map__33602__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_33487,inst_33479,inst_33519,inst_33485,inst_33483,inst_33482,inst_33515,state_val_33567,c__28113__auto__,map__33411,map__33411__$1,opts,before_jsload,on_jsload,reload_dependents,map__33412,map__33412__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_33519__$1 = cljs.core.group_by.call(null,inst_33518,inst_33485);
var inst_33521 = (inst_33519__$1 == null);
var inst_33522 = cljs.core.not.call(null,inst_33521);
var state_33566__$1 = (function (){var statearr_33604 = state_33566;
(statearr_33604[(16)] = inst_33519__$1);

(statearr_33604[(28)] = inst_33515);

return statearr_33604;
})();
if(inst_33522){
var statearr_33605_33681 = state_33566__$1;
(statearr_33605_33681[(1)] = (32));

} else {
var statearr_33606_33682 = state_33566__$1;
(statearr_33606_33682[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33567 === (44))){
var inst_33542 = (state_33566[(21)]);
var inst_33555 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_33542);
var inst_33556 = cljs.core.pr_str.call(null,inst_33555);
var inst_33557 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("not required: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_33556)].join('');
var inst_33558 = figwheel.client.utils.log.call(null,inst_33557);
var state_33566__$1 = state_33566;
var statearr_33607_33683 = state_33566__$1;
(statearr_33607_33683[(2)] = inst_33558);

(statearr_33607_33683[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33567 === (6))){
var inst_33460 = (state_33566[(2)]);
var state_33566__$1 = state_33566;
var statearr_33608_33684 = state_33566__$1;
(statearr_33608_33684[(2)] = inst_33460);

(statearr_33608_33684[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33567 === (28))){
var inst_33485 = (state_33566[(26)]);
var inst_33512 = (state_33566[(2)]);
var inst_33513 = cljs.core.not_empty.call(null,inst_33485);
var state_33566__$1 = (function (){var statearr_33609 = state_33566;
(statearr_33609[(29)] = inst_33512);

return statearr_33609;
})();
if(cljs.core.truth_(inst_33513)){
var statearr_33610_33685 = state_33566__$1;
(statearr_33610_33685[(1)] = (29));

} else {
var statearr_33611_33686 = state_33566__$1;
(statearr_33611_33686[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33567 === (25))){
var inst_33483 = (state_33566[(24)]);
var inst_33499 = (state_33566[(2)]);
var inst_33500 = cljs.core.not_empty.call(null,inst_33483);
var state_33566__$1 = (function (){var statearr_33612 = state_33566;
(statearr_33612[(30)] = inst_33499);

return statearr_33612;
})();
if(cljs.core.truth_(inst_33500)){
var statearr_33613_33687 = state_33566__$1;
(statearr_33613_33687[(1)] = (26));

} else {
var statearr_33614_33688 = state_33566__$1;
(statearr_33614_33688[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33567 === (34))){
var inst_33535 = (state_33566[(2)]);
var state_33566__$1 = state_33566;
if(cljs.core.truth_(inst_33535)){
var statearr_33615_33689 = state_33566__$1;
(statearr_33615_33689[(1)] = (38));

} else {
var statearr_33616_33690 = state_33566__$1;
(statearr_33616_33690[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33567 === (17))){
var state_33566__$1 = state_33566;
var statearr_33617_33691 = state_33566__$1;
(statearr_33617_33691[(2)] = recompile_dependents);

(statearr_33617_33691[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33567 === (3))){
var state_33566__$1 = state_33566;
var statearr_33618_33692 = state_33566__$1;
(statearr_33618_33692[(2)] = null);

(statearr_33618_33692[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33567 === (12))){
var inst_33456 = (state_33566[(2)]);
var state_33566__$1 = state_33566;
var statearr_33619_33693 = state_33566__$1;
(statearr_33619_33693[(2)] = inst_33456);

(statearr_33619_33693[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33567 === (2))){
var inst_33418 = (state_33566[(13)]);
var inst_33425 = cljs.core.seq.call(null,inst_33418);
var inst_33426 = inst_33425;
var inst_33427 = null;
var inst_33428 = (0);
var inst_33429 = (0);
var state_33566__$1 = (function (){var statearr_33620 = state_33566;
(statearr_33620[(7)] = inst_33426);

(statearr_33620[(8)] = inst_33427);

(statearr_33620[(9)] = inst_33429);

(statearr_33620[(10)] = inst_33428);

return statearr_33620;
})();
var statearr_33621_33694 = state_33566__$1;
(statearr_33621_33694[(2)] = null);

(statearr_33621_33694[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33567 === (23))){
var inst_33487 = (state_33566[(23)]);
var inst_33479 = (state_33566[(19)]);
var inst_33485 = (state_33566[(26)]);
var inst_33483 = (state_33566[(24)]);
var inst_33482 = (state_33566[(25)]);
var inst_33490 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_33492 = (function (){var all_files = inst_33479;
var res_SINGLEQUOTE_ = inst_33482;
var res = inst_33483;
var files_not_loaded = inst_33485;
var dependencies_that_loaded = inst_33487;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_33487,inst_33479,inst_33485,inst_33483,inst_33482,inst_33490,state_val_33567,c__28113__auto__,map__33411,map__33411__$1,opts,before_jsload,on_jsload,reload_dependents,map__33412,map__33412__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__33491){
var map__33622 = p__33491;
var map__33622__$1 = ((((!((map__33622 == null)))?((((map__33622.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33622.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33622):map__33622);
var request_url = cljs.core.get.call(null,map__33622__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_33487,inst_33479,inst_33485,inst_33483,inst_33482,inst_33490,state_val_33567,c__28113__auto__,map__33411,map__33411__$1,opts,before_jsload,on_jsload,reload_dependents,map__33412,map__33412__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_33493 = cljs.core.reverse.call(null,inst_33487);
var inst_33494 = cljs.core.map.call(null,inst_33492,inst_33493);
var inst_33495 = cljs.core.pr_str.call(null,inst_33494);
var inst_33496 = figwheel.client.utils.log.call(null,inst_33495);
var state_33566__$1 = (function (){var statearr_33624 = state_33566;
(statearr_33624[(31)] = inst_33490);

return statearr_33624;
})();
var statearr_33625_33695 = state_33566__$1;
(statearr_33625_33695[(2)] = inst_33496);

(statearr_33625_33695[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33567 === (35))){
var state_33566__$1 = state_33566;
var statearr_33626_33696 = state_33566__$1;
(statearr_33626_33696[(2)] = true);

(statearr_33626_33696[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33567 === (19))){
var inst_33469 = (state_33566[(12)]);
var inst_33475 = figwheel.client.file_reloading.expand_files.call(null,inst_33469);
var state_33566__$1 = state_33566;
var statearr_33627_33697 = state_33566__$1;
(statearr_33627_33697[(2)] = inst_33475);

(statearr_33627_33697[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33567 === (11))){
var state_33566__$1 = state_33566;
var statearr_33628_33698 = state_33566__$1;
(statearr_33628_33698[(2)] = null);

(statearr_33628_33698[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33567 === (9))){
var inst_33458 = (state_33566[(2)]);
var state_33566__$1 = state_33566;
var statearr_33629_33699 = state_33566__$1;
(statearr_33629_33699[(2)] = inst_33458);

(statearr_33629_33699[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33567 === (5))){
var inst_33429 = (state_33566[(9)]);
var inst_33428 = (state_33566[(10)]);
var inst_33431 = (inst_33429 < inst_33428);
var inst_33432 = inst_33431;
var state_33566__$1 = state_33566;
if(cljs.core.truth_(inst_33432)){
var statearr_33630_33700 = state_33566__$1;
(statearr_33630_33700[(1)] = (7));

} else {
var statearr_33631_33701 = state_33566__$1;
(statearr_33631_33701[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33567 === (14))){
var inst_33439 = (state_33566[(22)]);
var inst_33448 = cljs.core.first.call(null,inst_33439);
var inst_33449 = figwheel.client.file_reloading.eval_body.call(null,inst_33448,opts);
var inst_33450 = cljs.core.next.call(null,inst_33439);
var inst_33426 = inst_33450;
var inst_33427 = null;
var inst_33428 = (0);
var inst_33429 = (0);
var state_33566__$1 = (function (){var statearr_33632 = state_33566;
(statearr_33632[(7)] = inst_33426);

(statearr_33632[(8)] = inst_33427);

(statearr_33632[(32)] = inst_33449);

(statearr_33632[(9)] = inst_33429);

(statearr_33632[(10)] = inst_33428);

return statearr_33632;
})();
var statearr_33633_33702 = state_33566__$1;
(statearr_33633_33702[(2)] = null);

(statearr_33633_33702[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33567 === (45))){
var state_33566__$1 = state_33566;
var statearr_33634_33703 = state_33566__$1;
(statearr_33634_33703[(2)] = null);

(statearr_33634_33703[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33567 === (26))){
var inst_33487 = (state_33566[(23)]);
var inst_33479 = (state_33566[(19)]);
var inst_33485 = (state_33566[(26)]);
var inst_33483 = (state_33566[(24)]);
var inst_33482 = (state_33566[(25)]);
var inst_33502 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_33504 = (function (){var all_files = inst_33479;
var res_SINGLEQUOTE_ = inst_33482;
var res = inst_33483;
var files_not_loaded = inst_33485;
var dependencies_that_loaded = inst_33487;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_33487,inst_33479,inst_33485,inst_33483,inst_33482,inst_33502,state_val_33567,c__28113__auto__,map__33411,map__33411__$1,opts,before_jsload,on_jsload,reload_dependents,map__33412,map__33412__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__33503){
var map__33635 = p__33503;
var map__33635__$1 = ((((!((map__33635 == null)))?((((map__33635.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33635.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33635):map__33635);
var namespace = cljs.core.get.call(null,map__33635__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__33635__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_33487,inst_33479,inst_33485,inst_33483,inst_33482,inst_33502,state_val_33567,c__28113__auto__,map__33411,map__33411__$1,opts,before_jsload,on_jsload,reload_dependents,map__33412,map__33412__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_33505 = cljs.core.map.call(null,inst_33504,inst_33483);
var inst_33506 = cljs.core.pr_str.call(null,inst_33505);
var inst_33507 = figwheel.client.utils.log.call(null,inst_33506);
var inst_33508 = (function (){var all_files = inst_33479;
var res_SINGLEQUOTE_ = inst_33482;
var res = inst_33483;
var files_not_loaded = inst_33485;
var dependencies_that_loaded = inst_33487;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_33487,inst_33479,inst_33485,inst_33483,inst_33482,inst_33502,inst_33504,inst_33505,inst_33506,inst_33507,state_val_33567,c__28113__auto__,map__33411,map__33411__$1,opts,before_jsload,on_jsload,reload_dependents,map__33412,map__33412__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_33487,inst_33479,inst_33485,inst_33483,inst_33482,inst_33502,inst_33504,inst_33505,inst_33506,inst_33507,state_val_33567,c__28113__auto__,map__33411,map__33411__$1,opts,before_jsload,on_jsload,reload_dependents,map__33412,map__33412__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_33509 = setTimeout(inst_33508,(10));
var state_33566__$1 = (function (){var statearr_33637 = state_33566;
(statearr_33637[(33)] = inst_33507);

(statearr_33637[(34)] = inst_33502);

return statearr_33637;
})();
var statearr_33638_33704 = state_33566__$1;
(statearr_33638_33704[(2)] = inst_33509);

(statearr_33638_33704[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33567 === (16))){
var state_33566__$1 = state_33566;
var statearr_33639_33705 = state_33566__$1;
(statearr_33639_33705[(2)] = reload_dependents);

(statearr_33639_33705[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33567 === (38))){
var inst_33519 = (state_33566[(16)]);
var inst_33537 = cljs.core.apply.call(null,cljs.core.hash_map,inst_33519);
var state_33566__$1 = state_33566;
var statearr_33640_33706 = state_33566__$1;
(statearr_33640_33706[(2)] = inst_33537);

(statearr_33640_33706[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33567 === (30))){
var state_33566__$1 = state_33566;
var statearr_33641_33707 = state_33566__$1;
(statearr_33641_33707[(2)] = null);

(statearr_33641_33707[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33567 === (10))){
var inst_33439 = (state_33566[(22)]);
var inst_33441 = cljs.core.chunked_seq_QMARK_.call(null,inst_33439);
var state_33566__$1 = state_33566;
if(inst_33441){
var statearr_33642_33708 = state_33566__$1;
(statearr_33642_33708[(1)] = (13));

} else {
var statearr_33643_33709 = state_33566__$1;
(statearr_33643_33709[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33567 === (18))){
var inst_33473 = (state_33566[(2)]);
var state_33566__$1 = state_33566;
if(cljs.core.truth_(inst_33473)){
var statearr_33644_33710 = state_33566__$1;
(statearr_33644_33710[(1)] = (19));

} else {
var statearr_33645_33711 = state_33566__$1;
(statearr_33645_33711[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33567 === (42))){
var state_33566__$1 = state_33566;
var statearr_33646_33712 = state_33566__$1;
(statearr_33646_33712[(2)] = null);

(statearr_33646_33712[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33567 === (37))){
var inst_33532 = (state_33566[(2)]);
var state_33566__$1 = state_33566;
var statearr_33647_33713 = state_33566__$1;
(statearr_33647_33713[(2)] = inst_33532);

(statearr_33647_33713[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33567 === (8))){
var inst_33426 = (state_33566[(7)]);
var inst_33439 = (state_33566[(22)]);
var inst_33439__$1 = cljs.core.seq.call(null,inst_33426);
var state_33566__$1 = (function (){var statearr_33648 = state_33566;
(statearr_33648[(22)] = inst_33439__$1);

return statearr_33648;
})();
if(inst_33439__$1){
var statearr_33649_33714 = state_33566__$1;
(statearr_33649_33714[(1)] = (10));

} else {
var statearr_33650_33715 = state_33566__$1;
(statearr_33650_33715[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__28113__auto__,map__33411,map__33411__$1,opts,before_jsload,on_jsload,reload_dependents,map__33412,map__33412__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__28001__auto__,c__28113__auto__,map__33411,map__33411__$1,opts,before_jsload,on_jsload,reload_dependents,map__33412,map__33412__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__28002__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__28002__auto____0 = (function (){
var statearr_33654 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33654[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__28002__auto__);

(statearr_33654[(1)] = (1));

return statearr_33654;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__28002__auto____1 = (function (state_33566){
while(true){
var ret_value__28003__auto__ = (function (){try{while(true){
var result__28004__auto__ = switch__28001__auto__.call(null,state_33566);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28004__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28004__auto__;
}
break;
}
}catch (e33655){if((e33655 instanceof Object)){
var ex__28005__auto__ = e33655;
var statearr_33656_33716 = state_33566;
(statearr_33656_33716[(5)] = ex__28005__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33566);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33655;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28003__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33717 = state_33566;
state_33566 = G__33717;
continue;
} else {
return ret_value__28003__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__28002__auto__ = function(state_33566){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__28002__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__28002__auto____1.call(this,state_33566);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__28002__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__28002__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__28002__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__28002__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__28002__auto__;
})()
;})(switch__28001__auto__,c__28113__auto__,map__33411,map__33411__$1,opts,before_jsload,on_jsload,reload_dependents,map__33412,map__33412__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__28115__auto__ = (function (){var statearr_33657 = f__28114__auto__.call(null);
(statearr_33657[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28113__auto__);

return statearr_33657;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28115__auto__);
});})(c__28113__auto__,map__33411,map__33411__$1,opts,before_jsload,on_jsload,reload_dependents,map__33412,map__33412__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__28113__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),cljs.core.str.cljs$core$IFn$_invoke$arity$1("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__33720,link){
var map__33723 = p__33720;
var map__33723__$1 = ((((!((map__33723 == null)))?((((map__33723.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33723.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33723):map__33723);
var file = cljs.core.get.call(null,map__33723__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__33723,map__33723__$1,file){
return (function (p1__33718_SHARP_,p2__33719_SHARP_){
if(cljs.core._EQ_.call(null,p1__33718_SHARP_,p2__33719_SHARP_)){
return p1__33718_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__33723,map__33723__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__33729){
var map__33730 = p__33729;
var map__33730__$1 = ((((!((map__33730 == null)))?((((map__33730.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33730.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33730):map__33730);
var match_length = cljs.core.get.call(null,map__33730__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__33730__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__33725_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__33725_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4657__auto__)){
var res = temp__4657__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__33732_SHARP_,p2__33733_SHARP_){
return cljs.core.assoc.call(null,p1__33732_SHARP_,cljs.core.get.call(null,p2__33733_SHARP_,key),p2__33733_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
});})(parent))
,(300));
});
if(typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__4655__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4655__auto__)){
var link = temp__4655__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),((function (link,temp__4655__auto__){
return (function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
});})(link,temp__4655__auto__))
);
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_33734 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_33734);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_33734);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__33735,p__33736){
var map__33741 = p__33735;
var map__33741__$1 = ((((!((map__33741 == null)))?((((map__33741.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33741.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33741):map__33741);
var on_cssload = cljs.core.get.call(null,map__33741__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__33742 = p__33736;
var map__33742__$1 = ((((!((map__33742 == null)))?((((map__33742.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33742.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33742):map__33742);
var files_msg = map__33742__$1;
var files = cljs.core.get.call(null,map__33742__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var temp__4657__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__4657__auto__)){
var f_datas = temp__4657__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1491273377129