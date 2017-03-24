// Compiled by ClojureScript 1.8.51 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
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
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__18428__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__18428__auto__){
return or__18428__auto__;
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
figwheel.client.file_reloading.fix_node_request_url = (function figwheel$client$file_reloading$fix_node_request_url(url){

if(cljs.core.truth_(goog.string.startsWith(url,"../"))){
return clojure.string.replace.call(null,url,"../","");
} else {
return [cljs.core.str("goog/"),cljs.core.str(url)].join('');
}
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__18428__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__18428__auto__)){
return or__18428__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__24092_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__24092_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
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
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
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
var seq__24097 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__24098 = null;
var count__24099 = (0);
var i__24100 = (0);
while(true){
if((i__24100 < count__24099)){
var n = cljs.core._nth.call(null,chunk__24098,i__24100);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__24101 = seq__24097;
var G__24102 = chunk__24098;
var G__24103 = count__24099;
var G__24104 = (i__24100 + (1));
seq__24097 = G__24101;
chunk__24098 = G__24102;
count__24099 = G__24103;
i__24100 = G__24104;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__24097);
if(temp__4657__auto__){
var seq__24097__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24097__$1)){
var c__19239__auto__ = cljs.core.chunk_first.call(null,seq__24097__$1);
var G__24105 = cljs.core.chunk_rest.call(null,seq__24097__$1);
var G__24106 = c__19239__auto__;
var G__24107 = cljs.core.count.call(null,c__19239__auto__);
var G__24108 = (0);
seq__24097 = G__24105;
chunk__24098 = G__24106;
count__24099 = G__24107;
i__24100 = G__24108;
continue;
} else {
var n = cljs.core.first.call(null,seq__24097__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__24109 = cljs.core.next.call(null,seq__24097__$1);
var G__24110 = null;
var G__24111 = (0);
var G__24112 = (0);
seq__24097 = G__24109;
chunk__24098 = G__24110;
count__24099 = G__24111;
i__24100 = G__24112;
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

var seq__24151_24158 = cljs.core.seq.call(null,deps);
var chunk__24152_24159 = null;
var count__24153_24160 = (0);
var i__24154_24161 = (0);
while(true){
if((i__24154_24161 < count__24153_24160)){
var dep_24162 = cljs.core._nth.call(null,chunk__24152_24159,i__24154_24161);
topo_sort_helper_STAR_.call(null,dep_24162,(depth + (1)),state);

var G__24163 = seq__24151_24158;
var G__24164 = chunk__24152_24159;
var G__24165 = count__24153_24160;
var G__24166 = (i__24154_24161 + (1));
seq__24151_24158 = G__24163;
chunk__24152_24159 = G__24164;
count__24153_24160 = G__24165;
i__24154_24161 = G__24166;
continue;
} else {
var temp__4657__auto___24167 = cljs.core.seq.call(null,seq__24151_24158);
if(temp__4657__auto___24167){
var seq__24151_24168__$1 = temp__4657__auto___24167;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24151_24168__$1)){
var c__19239__auto___24169 = cljs.core.chunk_first.call(null,seq__24151_24168__$1);
var G__24170 = cljs.core.chunk_rest.call(null,seq__24151_24168__$1);
var G__24171 = c__19239__auto___24169;
var G__24172 = cljs.core.count.call(null,c__19239__auto___24169);
var G__24173 = (0);
seq__24151_24158 = G__24170;
chunk__24152_24159 = G__24171;
count__24153_24160 = G__24172;
i__24154_24161 = G__24173;
continue;
} else {
var dep_24174 = cljs.core.first.call(null,seq__24151_24168__$1);
topo_sort_helper_STAR_.call(null,dep_24174,(depth + (1)),state);

var G__24175 = cljs.core.next.call(null,seq__24151_24168__$1);
var G__24176 = null;
var G__24177 = (0);
var G__24178 = (0);
seq__24151_24158 = G__24175;
chunk__24152_24159 = G__24176;
count__24153_24160 = G__24177;
i__24154_24161 = G__24178;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__24155){
var vec__24157 = p__24155;
var x = cljs.core.nth.call(null,vec__24157,(0),null);
var xs = cljs.core.nthnext.call(null,vec__24157,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__24157,x,xs,get_deps__$1){
return (function (p1__24113_SHARP_){
return clojure.set.difference.call(null,p1__24113_SHARP_,x);
});})(vec__24157,x,xs,get_deps__$1))
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

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__24191 = cljs.core.seq.call(null,provides);
var chunk__24192 = null;
var count__24193 = (0);
var i__24194 = (0);
while(true){
if((i__24194 < count__24193)){
var prov = cljs.core._nth.call(null,chunk__24192,i__24194);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__24195_24203 = cljs.core.seq.call(null,requires);
var chunk__24196_24204 = null;
var count__24197_24205 = (0);
var i__24198_24206 = (0);
while(true){
if((i__24198_24206 < count__24197_24205)){
var req_24207 = cljs.core._nth.call(null,chunk__24196_24204,i__24198_24206);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_24207,prov);

var G__24208 = seq__24195_24203;
var G__24209 = chunk__24196_24204;
var G__24210 = count__24197_24205;
var G__24211 = (i__24198_24206 + (1));
seq__24195_24203 = G__24208;
chunk__24196_24204 = G__24209;
count__24197_24205 = G__24210;
i__24198_24206 = G__24211;
continue;
} else {
var temp__4657__auto___24212 = cljs.core.seq.call(null,seq__24195_24203);
if(temp__4657__auto___24212){
var seq__24195_24213__$1 = temp__4657__auto___24212;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24195_24213__$1)){
var c__19239__auto___24214 = cljs.core.chunk_first.call(null,seq__24195_24213__$1);
var G__24215 = cljs.core.chunk_rest.call(null,seq__24195_24213__$1);
var G__24216 = c__19239__auto___24214;
var G__24217 = cljs.core.count.call(null,c__19239__auto___24214);
var G__24218 = (0);
seq__24195_24203 = G__24215;
chunk__24196_24204 = G__24216;
count__24197_24205 = G__24217;
i__24198_24206 = G__24218;
continue;
} else {
var req_24219 = cljs.core.first.call(null,seq__24195_24213__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_24219,prov);

var G__24220 = cljs.core.next.call(null,seq__24195_24213__$1);
var G__24221 = null;
var G__24222 = (0);
var G__24223 = (0);
seq__24195_24203 = G__24220;
chunk__24196_24204 = G__24221;
count__24197_24205 = G__24222;
i__24198_24206 = G__24223;
continue;
}
} else {
}
}
break;
}

var G__24224 = seq__24191;
var G__24225 = chunk__24192;
var G__24226 = count__24193;
var G__24227 = (i__24194 + (1));
seq__24191 = G__24224;
chunk__24192 = G__24225;
count__24193 = G__24226;
i__24194 = G__24227;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__24191);
if(temp__4657__auto__){
var seq__24191__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24191__$1)){
var c__19239__auto__ = cljs.core.chunk_first.call(null,seq__24191__$1);
var G__24228 = cljs.core.chunk_rest.call(null,seq__24191__$1);
var G__24229 = c__19239__auto__;
var G__24230 = cljs.core.count.call(null,c__19239__auto__);
var G__24231 = (0);
seq__24191 = G__24228;
chunk__24192 = G__24229;
count__24193 = G__24230;
i__24194 = G__24231;
continue;
} else {
var prov = cljs.core.first.call(null,seq__24191__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__24199_24232 = cljs.core.seq.call(null,requires);
var chunk__24200_24233 = null;
var count__24201_24234 = (0);
var i__24202_24235 = (0);
while(true){
if((i__24202_24235 < count__24201_24234)){
var req_24236 = cljs.core._nth.call(null,chunk__24200_24233,i__24202_24235);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_24236,prov);

var G__24237 = seq__24199_24232;
var G__24238 = chunk__24200_24233;
var G__24239 = count__24201_24234;
var G__24240 = (i__24202_24235 + (1));
seq__24199_24232 = G__24237;
chunk__24200_24233 = G__24238;
count__24201_24234 = G__24239;
i__24202_24235 = G__24240;
continue;
} else {
var temp__4657__auto___24241__$1 = cljs.core.seq.call(null,seq__24199_24232);
if(temp__4657__auto___24241__$1){
var seq__24199_24242__$1 = temp__4657__auto___24241__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24199_24242__$1)){
var c__19239__auto___24243 = cljs.core.chunk_first.call(null,seq__24199_24242__$1);
var G__24244 = cljs.core.chunk_rest.call(null,seq__24199_24242__$1);
var G__24245 = c__19239__auto___24243;
var G__24246 = cljs.core.count.call(null,c__19239__auto___24243);
var G__24247 = (0);
seq__24199_24232 = G__24244;
chunk__24200_24233 = G__24245;
count__24201_24234 = G__24246;
i__24202_24235 = G__24247;
continue;
} else {
var req_24248 = cljs.core.first.call(null,seq__24199_24242__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_24248,prov);

var G__24249 = cljs.core.next.call(null,seq__24199_24242__$1);
var G__24250 = null;
var G__24251 = (0);
var G__24252 = (0);
seq__24199_24232 = G__24249;
chunk__24200_24233 = G__24250;
count__24201_24234 = G__24251;
i__24202_24235 = G__24252;
continue;
}
} else {
}
}
break;
}

var G__24253 = cljs.core.next.call(null,seq__24191__$1);
var G__24254 = null;
var G__24255 = (0);
var G__24256 = (0);
seq__24191 = G__24253;
chunk__24192 = G__24254;
count__24193 = G__24255;
i__24194 = G__24256;
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
goog.require = figwheel$client$file_reloading$figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__24261_24265 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__24262_24266 = null;
var count__24263_24267 = (0);
var i__24264_24268 = (0);
while(true){
if((i__24264_24268 < count__24263_24267)){
var ns_24269 = cljs.core._nth.call(null,chunk__24262_24266,i__24264_24268);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_24269);

var G__24270 = seq__24261_24265;
var G__24271 = chunk__24262_24266;
var G__24272 = count__24263_24267;
var G__24273 = (i__24264_24268 + (1));
seq__24261_24265 = G__24270;
chunk__24262_24266 = G__24271;
count__24263_24267 = G__24272;
i__24264_24268 = G__24273;
continue;
} else {
var temp__4657__auto___24274 = cljs.core.seq.call(null,seq__24261_24265);
if(temp__4657__auto___24274){
var seq__24261_24275__$1 = temp__4657__auto___24274;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24261_24275__$1)){
var c__19239__auto___24276 = cljs.core.chunk_first.call(null,seq__24261_24275__$1);
var G__24277 = cljs.core.chunk_rest.call(null,seq__24261_24275__$1);
var G__24278 = c__19239__auto___24276;
var G__24279 = cljs.core.count.call(null,c__19239__auto___24276);
var G__24280 = (0);
seq__24261_24265 = G__24277;
chunk__24262_24266 = G__24278;
count__24263_24267 = G__24279;
i__24264_24268 = G__24280;
continue;
} else {
var ns_24281 = cljs.core.first.call(null,seq__24261_24275__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_24281);

var G__24282 = cljs.core.next.call(null,seq__24261_24275__$1);
var G__24283 = null;
var G__24284 = (0);
var G__24285 = (0);
seq__24261_24265 = G__24282;
chunk__24262_24266 = G__24283;
count__24263_24267 = G__24284;
i__24264_24268 = G__24285;
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
goog.require_figwheel_backup_ = (function (){var or__18428__auto__ = goog.require__;
if(cljs.core.truth_(or__18428__auto__)){
return or__18428__auto__;
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
var G__24286__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__24286 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24287__i = 0, G__24287__a = new Array(arguments.length -  0);
while (G__24287__i < G__24287__a.length) {G__24287__a[G__24287__i] = arguments[G__24287__i + 0]; ++G__24287__i;}
  args = new cljs.core.IndexedSeq(G__24287__a,0);
} 
return G__24286__delegate.call(this,args);};
G__24286.cljs$lang$maxFixedArity = 0;
G__24286.cljs$lang$applyTo = (function (arglist__24288){
var args = cljs.core.seq(arglist__24288);
return G__24286__delegate(args);
});
G__24286.cljs$core$IFn$_invoke$arity$variadic = G__24286__delegate;
return G__24286;
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
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__24290 = cljs.core._EQ_;
var expr__24291 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__24290.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__24291))){
var path_parts = ((function (pred__24290,expr__24291){
return (function (p1__24289_SHARP_){
return clojure.string.split.call(null,p1__24289_SHARP_,/[\/\\]/);
});})(pred__24290,expr__24291))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__24290,expr__24291){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e24293){if((e24293 instanceof Error)){
var e = e24293;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e24293;

}
}})());
});
;})(path_parts,sep,root,pred__24290,expr__24291))
} else {
if(cljs.core.truth_(pred__24290.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__24291))){
return ((function (pred__24290,expr__24291){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__24290,expr__24291){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__24290,expr__24291))
);

return deferred.addErrback(((function (deferred,pred__24290,expr__24291){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__24290,expr__24291))
);
});
;})(pred__24290,expr__24291))
} else {
return ((function (pred__24290,expr__24291){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__24290,expr__24291))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__24294,callback){
var map__24297 = p__24294;
var map__24297__$1 = ((((!((map__24297 == null)))?((((map__24297.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24297.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24297):map__24297);
var file_msg = map__24297__$1;
var request_url = cljs.core.get.call(null,map__24297__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__24297,map__24297__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__24297,map__24297__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__21223__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21223__auto__){
return (function (){
var f__21224__auto__ = (function (){var switch__21111__auto__ = ((function (c__21223__auto__){
return (function (state_24321){
var state_val_24322 = (state_24321[(1)]);
if((state_val_24322 === (7))){
var inst_24317 = (state_24321[(2)]);
var state_24321__$1 = state_24321;
var statearr_24323_24343 = state_24321__$1;
(statearr_24323_24343[(2)] = inst_24317);

(statearr_24323_24343[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24322 === (1))){
var state_24321__$1 = state_24321;
var statearr_24324_24344 = state_24321__$1;
(statearr_24324_24344[(2)] = null);

(statearr_24324_24344[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24322 === (4))){
var inst_24301 = (state_24321[(7)]);
var inst_24301__$1 = (state_24321[(2)]);
var state_24321__$1 = (function (){var statearr_24325 = state_24321;
(statearr_24325[(7)] = inst_24301__$1);

return statearr_24325;
})();
if(cljs.core.truth_(inst_24301__$1)){
var statearr_24326_24345 = state_24321__$1;
(statearr_24326_24345[(1)] = (5));

} else {
var statearr_24327_24346 = state_24321__$1;
(statearr_24327_24346[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24322 === (6))){
var state_24321__$1 = state_24321;
var statearr_24328_24347 = state_24321__$1;
(statearr_24328_24347[(2)] = null);

(statearr_24328_24347[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24322 === (3))){
var inst_24319 = (state_24321[(2)]);
var state_24321__$1 = state_24321;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24321__$1,inst_24319);
} else {
if((state_val_24322 === (2))){
var state_24321__$1 = state_24321;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24321__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_24322 === (11))){
var inst_24313 = (state_24321[(2)]);
var state_24321__$1 = (function (){var statearr_24329 = state_24321;
(statearr_24329[(8)] = inst_24313);

return statearr_24329;
})();
var statearr_24330_24348 = state_24321__$1;
(statearr_24330_24348[(2)] = null);

(statearr_24330_24348[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24322 === (9))){
var inst_24307 = (state_24321[(9)]);
var inst_24305 = (state_24321[(10)]);
var inst_24309 = inst_24307.call(null,inst_24305);
var state_24321__$1 = state_24321;
var statearr_24331_24349 = state_24321__$1;
(statearr_24331_24349[(2)] = inst_24309);

(statearr_24331_24349[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24322 === (5))){
var inst_24301 = (state_24321[(7)]);
var inst_24303 = figwheel.client.file_reloading.blocking_load.call(null,inst_24301);
var state_24321__$1 = state_24321;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24321__$1,(8),inst_24303);
} else {
if((state_val_24322 === (10))){
var inst_24305 = (state_24321[(10)]);
var inst_24311 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_24305);
var state_24321__$1 = state_24321;
var statearr_24332_24350 = state_24321__$1;
(statearr_24332_24350[(2)] = inst_24311);

(statearr_24332_24350[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24322 === (8))){
var inst_24301 = (state_24321[(7)]);
var inst_24307 = (state_24321[(9)]);
var inst_24305 = (state_24321[(2)]);
var inst_24306 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_24307__$1 = cljs.core.get.call(null,inst_24306,inst_24301);
var state_24321__$1 = (function (){var statearr_24333 = state_24321;
(statearr_24333[(9)] = inst_24307__$1);

(statearr_24333[(10)] = inst_24305);

return statearr_24333;
})();
if(cljs.core.truth_(inst_24307__$1)){
var statearr_24334_24351 = state_24321__$1;
(statearr_24334_24351[(1)] = (9));

} else {
var statearr_24335_24352 = state_24321__$1;
(statearr_24335_24352[(1)] = (10));

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
});})(c__21223__auto__))
;
return ((function (switch__21111__auto__,c__21223__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__21112__auto__ = null;
var figwheel$client$file_reloading$state_machine__21112__auto____0 = (function (){
var statearr_24339 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24339[(0)] = figwheel$client$file_reloading$state_machine__21112__auto__);

(statearr_24339[(1)] = (1));

return statearr_24339;
});
var figwheel$client$file_reloading$state_machine__21112__auto____1 = (function (state_24321){
while(true){
var ret_value__21113__auto__ = (function (){try{while(true){
var result__21114__auto__ = switch__21111__auto__.call(null,state_24321);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21114__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21114__auto__;
}
break;
}
}catch (e24340){if((e24340 instanceof Object)){
var ex__21115__auto__ = e24340;
var statearr_24341_24353 = state_24321;
(statearr_24341_24353[(5)] = ex__21115__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24321);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24340;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24354 = state_24321;
state_24321 = G__24354;
continue;
} else {
return ret_value__21113__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__21112__auto__ = function(state_24321){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__21112__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__21112__auto____1.call(this,state_24321);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__21112__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__21112__auto____0;
figwheel$client$file_reloading$state_machine__21112__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__21112__auto____1;
return figwheel$client$file_reloading$state_machine__21112__auto__;
})()
;})(switch__21111__auto__,c__21223__auto__))
})();
var state__21225__auto__ = (function (){var statearr_24342 = f__21224__auto__.call(null);
(statearr_24342[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21223__auto__);

return statearr_24342;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21225__auto__);
});})(c__21223__auto__))
);

return c__21223__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__24355,callback){
var map__24358 = p__24355;
var map__24358__$1 = ((((!((map__24358 == null)))?((((map__24358.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24358.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24358):map__24358);
var file_msg = map__24358__$1;
var namespace = cljs.core.get.call(null,map__24358__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__24358,map__24358__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__24358,map__24358__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__24360){
var map__24363 = p__24360;
var map__24363__$1 = ((((!((map__24363 == null)))?((((map__24363.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24363.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24363):map__24363);
var file_msg = map__24363__$1;
var namespace = cljs.core.get.call(null,map__24363__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__18416__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__18416__auto__){
var or__18428__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__18428__auto__)){
return or__18428__auto__;
} else {
var or__18428__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__18428__auto____$1)){
return or__18428__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__18416__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__24365,callback){
var map__24368 = p__24365;
var map__24368__$1 = ((((!((map__24368 == null)))?((((map__24368.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24368.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24368):map__24368);
var file_msg = map__24368__$1;
var request_url = cljs.core.get.call(null,map__24368__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__24368__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

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
var c__21223__auto___24456 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21223__auto___24456,out){
return (function (){
var f__21224__auto__ = (function (){var switch__21111__auto__ = ((function (c__21223__auto___24456,out){
return (function (state_24438){
var state_val_24439 = (state_24438[(1)]);
if((state_val_24439 === (1))){
var inst_24416 = cljs.core.nth.call(null,files,(0),null);
var inst_24417 = cljs.core.nthnext.call(null,files,(1));
var inst_24418 = files;
var state_24438__$1 = (function (){var statearr_24440 = state_24438;
(statearr_24440[(7)] = inst_24417);

(statearr_24440[(8)] = inst_24418);

(statearr_24440[(9)] = inst_24416);

return statearr_24440;
})();
var statearr_24441_24457 = state_24438__$1;
(statearr_24441_24457[(2)] = null);

(statearr_24441_24457[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24439 === (2))){
var inst_24418 = (state_24438[(8)]);
var inst_24421 = (state_24438[(10)]);
var inst_24421__$1 = cljs.core.nth.call(null,inst_24418,(0),null);
var inst_24422 = cljs.core.nthnext.call(null,inst_24418,(1));
var inst_24423 = (inst_24421__$1 == null);
var inst_24424 = cljs.core.not.call(null,inst_24423);
var state_24438__$1 = (function (){var statearr_24442 = state_24438;
(statearr_24442[(11)] = inst_24422);

(statearr_24442[(10)] = inst_24421__$1);

return statearr_24442;
})();
if(inst_24424){
var statearr_24443_24458 = state_24438__$1;
(statearr_24443_24458[(1)] = (4));

} else {
var statearr_24444_24459 = state_24438__$1;
(statearr_24444_24459[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24439 === (3))){
var inst_24436 = (state_24438[(2)]);
var state_24438__$1 = state_24438;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24438__$1,inst_24436);
} else {
if((state_val_24439 === (4))){
var inst_24421 = (state_24438[(10)]);
var inst_24426 = figwheel.client.file_reloading.reload_js_file.call(null,inst_24421);
var state_24438__$1 = state_24438;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24438__$1,(7),inst_24426);
} else {
if((state_val_24439 === (5))){
var inst_24432 = cljs.core.async.close_BANG_.call(null,out);
var state_24438__$1 = state_24438;
var statearr_24445_24460 = state_24438__$1;
(statearr_24445_24460[(2)] = inst_24432);

(statearr_24445_24460[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24439 === (6))){
var inst_24434 = (state_24438[(2)]);
var state_24438__$1 = state_24438;
var statearr_24446_24461 = state_24438__$1;
(statearr_24446_24461[(2)] = inst_24434);

(statearr_24446_24461[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24439 === (7))){
var inst_24422 = (state_24438[(11)]);
var inst_24428 = (state_24438[(2)]);
var inst_24429 = cljs.core.async.put_BANG_.call(null,out,inst_24428);
var inst_24418 = inst_24422;
var state_24438__$1 = (function (){var statearr_24447 = state_24438;
(statearr_24447[(8)] = inst_24418);

(statearr_24447[(12)] = inst_24429);

return statearr_24447;
})();
var statearr_24448_24462 = state_24438__$1;
(statearr_24448_24462[(2)] = null);

(statearr_24448_24462[(1)] = (2));


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
});})(c__21223__auto___24456,out))
;
return ((function (switch__21111__auto__,c__21223__auto___24456,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__21112__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__21112__auto____0 = (function (){
var statearr_24452 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24452[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__21112__auto__);

(statearr_24452[(1)] = (1));

return statearr_24452;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__21112__auto____1 = (function (state_24438){
while(true){
var ret_value__21113__auto__ = (function (){try{while(true){
var result__21114__auto__ = switch__21111__auto__.call(null,state_24438);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21114__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21114__auto__;
}
break;
}
}catch (e24453){if((e24453 instanceof Object)){
var ex__21115__auto__ = e24453;
var statearr_24454_24463 = state_24438;
(statearr_24454_24463[(5)] = ex__21115__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24438);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24453;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24464 = state_24438;
state_24438 = G__24464;
continue;
} else {
return ret_value__21113__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__21112__auto__ = function(state_24438){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__21112__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__21112__auto____1.call(this,state_24438);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__21112__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__21112__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__21112__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__21112__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__21112__auto__;
})()
;})(switch__21111__auto__,c__21223__auto___24456,out))
})();
var state__21225__auto__ = (function (){var statearr_24455 = f__21224__auto__.call(null);
(statearr_24455[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21223__auto___24456);

return statearr_24455;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21225__auto__);
});})(c__21223__auto___24456,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__24465,opts){
var map__24469 = p__24465;
var map__24469__$1 = ((((!((map__24469 == null)))?((((map__24469.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24469.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24469):map__24469);
var eval_body__$1 = cljs.core.get.call(null,map__24469__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__24469__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__18416__auto__ = eval_body__$1;
if(cljs.core.truth_(and__18416__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__18416__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e24471){var e = e24471;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__24472_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__24472_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__24477){
var vec__24478 = p__24477;
var k = cljs.core.nth.call(null,vec__24478,(0),null);
var v = cljs.core.nth.call(null,vec__24478,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__24479){
var vec__24480 = p__24479;
var k = cljs.core.nth.call(null,vec__24480,(0),null);
var v = cljs.core.nth.call(null,vec__24480,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__24484,p__24485){
var map__24732 = p__24484;
var map__24732__$1 = ((((!((map__24732 == null)))?((((map__24732.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24732.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24732):map__24732);
var opts = map__24732__$1;
var before_jsload = cljs.core.get.call(null,map__24732__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__24732__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__24732__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__24733 = p__24485;
var map__24733__$1 = ((((!((map__24733 == null)))?((((map__24733.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24733.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24733):map__24733);
var msg = map__24733__$1;
var files = cljs.core.get.call(null,map__24733__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__24733__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__24733__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__21223__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21223__auto__,map__24732,map__24732__$1,opts,before_jsload,on_jsload,reload_dependents,map__24733,map__24733__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__21224__auto__ = (function (){var switch__21111__auto__ = ((function (c__21223__auto__,map__24732,map__24732__$1,opts,before_jsload,on_jsload,reload_dependents,map__24733,map__24733__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_24886){
var state_val_24887 = (state_24886[(1)]);
if((state_val_24887 === (7))){
var inst_24747 = (state_24886[(7)]);
var inst_24750 = (state_24886[(8)]);
var inst_24748 = (state_24886[(9)]);
var inst_24749 = (state_24886[(10)]);
var inst_24755 = cljs.core._nth.call(null,inst_24748,inst_24750);
var inst_24756 = figwheel.client.file_reloading.eval_body.call(null,inst_24755,opts);
var inst_24757 = (inst_24750 + (1));
var tmp24888 = inst_24747;
var tmp24889 = inst_24748;
var tmp24890 = inst_24749;
var inst_24747__$1 = tmp24888;
var inst_24748__$1 = tmp24889;
var inst_24749__$1 = tmp24890;
var inst_24750__$1 = inst_24757;
var state_24886__$1 = (function (){var statearr_24891 = state_24886;
(statearr_24891[(7)] = inst_24747__$1);

(statearr_24891[(8)] = inst_24750__$1);

(statearr_24891[(11)] = inst_24756);

(statearr_24891[(9)] = inst_24748__$1);

(statearr_24891[(10)] = inst_24749__$1);

return statearr_24891;
})();
var statearr_24892_24978 = state_24886__$1;
(statearr_24892_24978[(2)] = null);

(statearr_24892_24978[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24887 === (20))){
var inst_24790 = (state_24886[(12)]);
var inst_24798 = figwheel.client.file_reloading.sort_files.call(null,inst_24790);
var state_24886__$1 = state_24886;
var statearr_24893_24979 = state_24886__$1;
(statearr_24893_24979[(2)] = inst_24798);

(statearr_24893_24979[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24887 === (27))){
var state_24886__$1 = state_24886;
var statearr_24894_24980 = state_24886__$1;
(statearr_24894_24980[(2)] = null);

(statearr_24894_24980[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24887 === (1))){
var inst_24739 = (state_24886[(13)]);
var inst_24736 = before_jsload.call(null,files);
var inst_24737 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_24738 = (function (){return ((function (inst_24739,inst_24736,inst_24737,state_val_24887,c__21223__auto__,map__24732,map__24732__$1,opts,before_jsload,on_jsload,reload_dependents,map__24733,map__24733__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__24481_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__24481_SHARP_);
});
;})(inst_24739,inst_24736,inst_24737,state_val_24887,c__21223__auto__,map__24732,map__24732__$1,opts,before_jsload,on_jsload,reload_dependents,map__24733,map__24733__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_24739__$1 = cljs.core.filter.call(null,inst_24738,files);
var inst_24740 = cljs.core.not_empty.call(null,inst_24739__$1);
var state_24886__$1 = (function (){var statearr_24895 = state_24886;
(statearr_24895[(14)] = inst_24737);

(statearr_24895[(15)] = inst_24736);

(statearr_24895[(13)] = inst_24739__$1);

return statearr_24895;
})();
if(cljs.core.truth_(inst_24740)){
var statearr_24896_24981 = state_24886__$1;
(statearr_24896_24981[(1)] = (2));

} else {
var statearr_24897_24982 = state_24886__$1;
(statearr_24897_24982[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24887 === (24))){
var state_24886__$1 = state_24886;
var statearr_24898_24983 = state_24886__$1;
(statearr_24898_24983[(2)] = null);

(statearr_24898_24983[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24887 === (39))){
var inst_24840 = (state_24886[(16)]);
var state_24886__$1 = state_24886;
var statearr_24899_24984 = state_24886__$1;
(statearr_24899_24984[(2)] = inst_24840);

(statearr_24899_24984[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24887 === (46))){
var inst_24881 = (state_24886[(2)]);
var state_24886__$1 = state_24886;
var statearr_24900_24985 = state_24886__$1;
(statearr_24900_24985[(2)] = inst_24881);

(statearr_24900_24985[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24887 === (4))){
var inst_24784 = (state_24886[(2)]);
var inst_24785 = cljs.core.List.EMPTY;
var inst_24786 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_24785);
var inst_24787 = (function (){return ((function (inst_24784,inst_24785,inst_24786,state_val_24887,c__21223__auto__,map__24732,map__24732__$1,opts,before_jsload,on_jsload,reload_dependents,map__24733,map__24733__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__24482_SHARP_){
var and__18416__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__24482_SHARP_);
if(cljs.core.truth_(and__18416__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__24482_SHARP_));
} else {
return and__18416__auto__;
}
});
;})(inst_24784,inst_24785,inst_24786,state_val_24887,c__21223__auto__,map__24732,map__24732__$1,opts,before_jsload,on_jsload,reload_dependents,map__24733,map__24733__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_24788 = cljs.core.filter.call(null,inst_24787,files);
var inst_24789 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_24790 = cljs.core.concat.call(null,inst_24788,inst_24789);
var state_24886__$1 = (function (){var statearr_24901 = state_24886;
(statearr_24901[(17)] = inst_24784);

(statearr_24901[(18)] = inst_24786);

(statearr_24901[(12)] = inst_24790);

return statearr_24901;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_24902_24986 = state_24886__$1;
(statearr_24902_24986[(1)] = (16));

} else {
var statearr_24903_24987 = state_24886__$1;
(statearr_24903_24987[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24887 === (15))){
var inst_24774 = (state_24886[(2)]);
var state_24886__$1 = state_24886;
var statearr_24904_24988 = state_24886__$1;
(statearr_24904_24988[(2)] = inst_24774);

(statearr_24904_24988[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24887 === (21))){
var inst_24800 = (state_24886[(19)]);
var inst_24800__$1 = (state_24886[(2)]);
var inst_24801 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_24800__$1);
var state_24886__$1 = (function (){var statearr_24905 = state_24886;
(statearr_24905[(19)] = inst_24800__$1);

return statearr_24905;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24886__$1,(22),inst_24801);
} else {
if((state_val_24887 === (31))){
var inst_24884 = (state_24886[(2)]);
var state_24886__$1 = state_24886;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24886__$1,inst_24884);
} else {
if((state_val_24887 === (32))){
var inst_24840 = (state_24886[(16)]);
var inst_24845 = inst_24840.cljs$lang$protocol_mask$partition0$;
var inst_24846 = (inst_24845 & (64));
var inst_24847 = inst_24840.cljs$core$ISeq$;
var inst_24848 = (inst_24846) || (inst_24847);
var state_24886__$1 = state_24886;
if(cljs.core.truth_(inst_24848)){
var statearr_24906_24989 = state_24886__$1;
(statearr_24906_24989[(1)] = (35));

} else {
var statearr_24907_24990 = state_24886__$1;
(statearr_24907_24990[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24887 === (40))){
var inst_24861 = (state_24886[(20)]);
var inst_24860 = (state_24886[(2)]);
var inst_24861__$1 = cljs.core.get.call(null,inst_24860,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_24862 = cljs.core.get.call(null,inst_24860,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_24863 = cljs.core.not_empty.call(null,inst_24861__$1);
var state_24886__$1 = (function (){var statearr_24908 = state_24886;
(statearr_24908[(20)] = inst_24861__$1);

(statearr_24908[(21)] = inst_24862);

return statearr_24908;
})();
if(cljs.core.truth_(inst_24863)){
var statearr_24909_24991 = state_24886__$1;
(statearr_24909_24991[(1)] = (41));

} else {
var statearr_24910_24992 = state_24886__$1;
(statearr_24910_24992[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24887 === (33))){
var state_24886__$1 = state_24886;
var statearr_24911_24993 = state_24886__$1;
(statearr_24911_24993[(2)] = false);

(statearr_24911_24993[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24887 === (13))){
var inst_24760 = (state_24886[(22)]);
var inst_24764 = cljs.core.chunk_first.call(null,inst_24760);
var inst_24765 = cljs.core.chunk_rest.call(null,inst_24760);
var inst_24766 = cljs.core.count.call(null,inst_24764);
var inst_24747 = inst_24765;
var inst_24748 = inst_24764;
var inst_24749 = inst_24766;
var inst_24750 = (0);
var state_24886__$1 = (function (){var statearr_24912 = state_24886;
(statearr_24912[(7)] = inst_24747);

(statearr_24912[(8)] = inst_24750);

(statearr_24912[(9)] = inst_24748);

(statearr_24912[(10)] = inst_24749);

return statearr_24912;
})();
var statearr_24913_24994 = state_24886__$1;
(statearr_24913_24994[(2)] = null);

(statearr_24913_24994[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24887 === (22))){
var inst_24804 = (state_24886[(23)]);
var inst_24800 = (state_24886[(19)]);
var inst_24808 = (state_24886[(24)]);
var inst_24803 = (state_24886[(25)]);
var inst_24803__$1 = (state_24886[(2)]);
var inst_24804__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_24803__$1);
var inst_24805 = (function (){var all_files = inst_24800;
var res_SINGLEQUOTE_ = inst_24803__$1;
var res = inst_24804__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_24804,inst_24800,inst_24808,inst_24803,inst_24803__$1,inst_24804__$1,state_val_24887,c__21223__auto__,map__24732,map__24732__$1,opts,before_jsload,on_jsload,reload_dependents,map__24733,map__24733__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__24483_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__24483_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_24804,inst_24800,inst_24808,inst_24803,inst_24803__$1,inst_24804__$1,state_val_24887,c__21223__auto__,map__24732,map__24732__$1,opts,before_jsload,on_jsload,reload_dependents,map__24733,map__24733__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_24806 = cljs.core.filter.call(null,inst_24805,inst_24803__$1);
var inst_24807 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_24808__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_24807);
var inst_24809 = cljs.core.not_empty.call(null,inst_24808__$1);
var state_24886__$1 = (function (){var statearr_24914 = state_24886;
(statearr_24914[(23)] = inst_24804__$1);

(statearr_24914[(26)] = inst_24806);

(statearr_24914[(24)] = inst_24808__$1);

(statearr_24914[(25)] = inst_24803__$1);

return statearr_24914;
})();
if(cljs.core.truth_(inst_24809)){
var statearr_24915_24995 = state_24886__$1;
(statearr_24915_24995[(1)] = (23));

} else {
var statearr_24916_24996 = state_24886__$1;
(statearr_24916_24996[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24887 === (36))){
var state_24886__$1 = state_24886;
var statearr_24917_24997 = state_24886__$1;
(statearr_24917_24997[(2)] = false);

(statearr_24917_24997[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24887 === (41))){
var inst_24861 = (state_24886[(20)]);
var inst_24865 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_24866 = cljs.core.map.call(null,inst_24865,inst_24861);
var inst_24867 = cljs.core.pr_str.call(null,inst_24866);
var inst_24868 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_24867)].join('');
var inst_24869 = figwheel.client.utils.log.call(null,inst_24868);
var state_24886__$1 = state_24886;
var statearr_24918_24998 = state_24886__$1;
(statearr_24918_24998[(2)] = inst_24869);

(statearr_24918_24998[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24887 === (43))){
var inst_24862 = (state_24886[(21)]);
var inst_24872 = (state_24886[(2)]);
var inst_24873 = cljs.core.not_empty.call(null,inst_24862);
var state_24886__$1 = (function (){var statearr_24919 = state_24886;
(statearr_24919[(27)] = inst_24872);

return statearr_24919;
})();
if(cljs.core.truth_(inst_24873)){
var statearr_24920_24999 = state_24886__$1;
(statearr_24920_24999[(1)] = (44));

} else {
var statearr_24921_25000 = state_24886__$1;
(statearr_24921_25000[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24887 === (29))){
var inst_24840 = (state_24886[(16)]);
var inst_24804 = (state_24886[(23)]);
var inst_24806 = (state_24886[(26)]);
var inst_24800 = (state_24886[(19)]);
var inst_24808 = (state_24886[(24)]);
var inst_24803 = (state_24886[(25)]);
var inst_24836 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_24839 = (function (){var all_files = inst_24800;
var res_SINGLEQUOTE_ = inst_24803;
var res = inst_24804;
var files_not_loaded = inst_24806;
var dependencies_that_loaded = inst_24808;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_24840,inst_24804,inst_24806,inst_24800,inst_24808,inst_24803,inst_24836,state_val_24887,c__21223__auto__,map__24732,map__24732__$1,opts,before_jsload,on_jsload,reload_dependents,map__24733,map__24733__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__24838){
var map__24922 = p__24838;
var map__24922__$1 = ((((!((map__24922 == null)))?((((map__24922.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24922.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24922):map__24922);
var namespace = cljs.core.get.call(null,map__24922__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_24840,inst_24804,inst_24806,inst_24800,inst_24808,inst_24803,inst_24836,state_val_24887,c__21223__auto__,map__24732,map__24732__$1,opts,before_jsload,on_jsload,reload_dependents,map__24733,map__24733__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_24840__$1 = cljs.core.group_by.call(null,inst_24839,inst_24806);
var inst_24842 = (inst_24840__$1 == null);
var inst_24843 = cljs.core.not.call(null,inst_24842);
var state_24886__$1 = (function (){var statearr_24924 = state_24886;
(statearr_24924[(16)] = inst_24840__$1);

(statearr_24924[(28)] = inst_24836);

return statearr_24924;
})();
if(inst_24843){
var statearr_24925_25001 = state_24886__$1;
(statearr_24925_25001[(1)] = (32));

} else {
var statearr_24926_25002 = state_24886__$1;
(statearr_24926_25002[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24887 === (44))){
var inst_24862 = (state_24886[(21)]);
var inst_24875 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_24862);
var inst_24876 = cljs.core.pr_str.call(null,inst_24875);
var inst_24877 = [cljs.core.str("not required: "),cljs.core.str(inst_24876)].join('');
var inst_24878 = figwheel.client.utils.log.call(null,inst_24877);
var state_24886__$1 = state_24886;
var statearr_24927_25003 = state_24886__$1;
(statearr_24927_25003[(2)] = inst_24878);

(statearr_24927_25003[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24887 === (6))){
var inst_24781 = (state_24886[(2)]);
var state_24886__$1 = state_24886;
var statearr_24928_25004 = state_24886__$1;
(statearr_24928_25004[(2)] = inst_24781);

(statearr_24928_25004[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24887 === (28))){
var inst_24806 = (state_24886[(26)]);
var inst_24833 = (state_24886[(2)]);
var inst_24834 = cljs.core.not_empty.call(null,inst_24806);
var state_24886__$1 = (function (){var statearr_24929 = state_24886;
(statearr_24929[(29)] = inst_24833);

return statearr_24929;
})();
if(cljs.core.truth_(inst_24834)){
var statearr_24930_25005 = state_24886__$1;
(statearr_24930_25005[(1)] = (29));

} else {
var statearr_24931_25006 = state_24886__$1;
(statearr_24931_25006[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24887 === (25))){
var inst_24804 = (state_24886[(23)]);
var inst_24820 = (state_24886[(2)]);
var inst_24821 = cljs.core.not_empty.call(null,inst_24804);
var state_24886__$1 = (function (){var statearr_24932 = state_24886;
(statearr_24932[(30)] = inst_24820);

return statearr_24932;
})();
if(cljs.core.truth_(inst_24821)){
var statearr_24933_25007 = state_24886__$1;
(statearr_24933_25007[(1)] = (26));

} else {
var statearr_24934_25008 = state_24886__$1;
(statearr_24934_25008[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24887 === (34))){
var inst_24855 = (state_24886[(2)]);
var state_24886__$1 = state_24886;
if(cljs.core.truth_(inst_24855)){
var statearr_24935_25009 = state_24886__$1;
(statearr_24935_25009[(1)] = (38));

} else {
var statearr_24936_25010 = state_24886__$1;
(statearr_24936_25010[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24887 === (17))){
var state_24886__$1 = state_24886;
var statearr_24937_25011 = state_24886__$1;
(statearr_24937_25011[(2)] = recompile_dependents);

(statearr_24937_25011[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24887 === (3))){
var state_24886__$1 = state_24886;
var statearr_24938_25012 = state_24886__$1;
(statearr_24938_25012[(2)] = null);

(statearr_24938_25012[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24887 === (12))){
var inst_24777 = (state_24886[(2)]);
var state_24886__$1 = state_24886;
var statearr_24939_25013 = state_24886__$1;
(statearr_24939_25013[(2)] = inst_24777);

(statearr_24939_25013[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24887 === (2))){
var inst_24739 = (state_24886[(13)]);
var inst_24746 = cljs.core.seq.call(null,inst_24739);
var inst_24747 = inst_24746;
var inst_24748 = null;
var inst_24749 = (0);
var inst_24750 = (0);
var state_24886__$1 = (function (){var statearr_24940 = state_24886;
(statearr_24940[(7)] = inst_24747);

(statearr_24940[(8)] = inst_24750);

(statearr_24940[(9)] = inst_24748);

(statearr_24940[(10)] = inst_24749);

return statearr_24940;
})();
var statearr_24941_25014 = state_24886__$1;
(statearr_24941_25014[(2)] = null);

(statearr_24941_25014[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24887 === (23))){
var inst_24804 = (state_24886[(23)]);
var inst_24806 = (state_24886[(26)]);
var inst_24800 = (state_24886[(19)]);
var inst_24808 = (state_24886[(24)]);
var inst_24803 = (state_24886[(25)]);
var inst_24811 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_24813 = (function (){var all_files = inst_24800;
var res_SINGLEQUOTE_ = inst_24803;
var res = inst_24804;
var files_not_loaded = inst_24806;
var dependencies_that_loaded = inst_24808;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_24804,inst_24806,inst_24800,inst_24808,inst_24803,inst_24811,state_val_24887,c__21223__auto__,map__24732,map__24732__$1,opts,before_jsload,on_jsload,reload_dependents,map__24733,map__24733__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__24812){
var map__24942 = p__24812;
var map__24942__$1 = ((((!((map__24942 == null)))?((((map__24942.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24942.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24942):map__24942);
var request_url = cljs.core.get.call(null,map__24942__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_24804,inst_24806,inst_24800,inst_24808,inst_24803,inst_24811,state_val_24887,c__21223__auto__,map__24732,map__24732__$1,opts,before_jsload,on_jsload,reload_dependents,map__24733,map__24733__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_24814 = cljs.core.reverse.call(null,inst_24808);
var inst_24815 = cljs.core.map.call(null,inst_24813,inst_24814);
var inst_24816 = cljs.core.pr_str.call(null,inst_24815);
var inst_24817 = figwheel.client.utils.log.call(null,inst_24816);
var state_24886__$1 = (function (){var statearr_24944 = state_24886;
(statearr_24944[(31)] = inst_24811);

return statearr_24944;
})();
var statearr_24945_25015 = state_24886__$1;
(statearr_24945_25015[(2)] = inst_24817);

(statearr_24945_25015[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24887 === (35))){
var state_24886__$1 = state_24886;
var statearr_24946_25016 = state_24886__$1;
(statearr_24946_25016[(2)] = true);

(statearr_24946_25016[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24887 === (19))){
var inst_24790 = (state_24886[(12)]);
var inst_24796 = figwheel.client.file_reloading.expand_files.call(null,inst_24790);
var state_24886__$1 = state_24886;
var statearr_24947_25017 = state_24886__$1;
(statearr_24947_25017[(2)] = inst_24796);

(statearr_24947_25017[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24887 === (11))){
var state_24886__$1 = state_24886;
var statearr_24948_25018 = state_24886__$1;
(statearr_24948_25018[(2)] = null);

(statearr_24948_25018[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24887 === (9))){
var inst_24779 = (state_24886[(2)]);
var state_24886__$1 = state_24886;
var statearr_24949_25019 = state_24886__$1;
(statearr_24949_25019[(2)] = inst_24779);

(statearr_24949_25019[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24887 === (5))){
var inst_24750 = (state_24886[(8)]);
var inst_24749 = (state_24886[(10)]);
var inst_24752 = (inst_24750 < inst_24749);
var inst_24753 = inst_24752;
var state_24886__$1 = state_24886;
if(cljs.core.truth_(inst_24753)){
var statearr_24950_25020 = state_24886__$1;
(statearr_24950_25020[(1)] = (7));

} else {
var statearr_24951_25021 = state_24886__$1;
(statearr_24951_25021[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24887 === (14))){
var inst_24760 = (state_24886[(22)]);
var inst_24769 = cljs.core.first.call(null,inst_24760);
var inst_24770 = figwheel.client.file_reloading.eval_body.call(null,inst_24769,opts);
var inst_24771 = cljs.core.next.call(null,inst_24760);
var inst_24747 = inst_24771;
var inst_24748 = null;
var inst_24749 = (0);
var inst_24750 = (0);
var state_24886__$1 = (function (){var statearr_24952 = state_24886;
(statearr_24952[(7)] = inst_24747);

(statearr_24952[(8)] = inst_24750);

(statearr_24952[(9)] = inst_24748);

(statearr_24952[(10)] = inst_24749);

(statearr_24952[(32)] = inst_24770);

return statearr_24952;
})();
var statearr_24953_25022 = state_24886__$1;
(statearr_24953_25022[(2)] = null);

(statearr_24953_25022[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24887 === (45))){
var state_24886__$1 = state_24886;
var statearr_24954_25023 = state_24886__$1;
(statearr_24954_25023[(2)] = null);

(statearr_24954_25023[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24887 === (26))){
var inst_24804 = (state_24886[(23)]);
var inst_24806 = (state_24886[(26)]);
var inst_24800 = (state_24886[(19)]);
var inst_24808 = (state_24886[(24)]);
var inst_24803 = (state_24886[(25)]);
var inst_24823 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_24825 = (function (){var all_files = inst_24800;
var res_SINGLEQUOTE_ = inst_24803;
var res = inst_24804;
var files_not_loaded = inst_24806;
var dependencies_that_loaded = inst_24808;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_24804,inst_24806,inst_24800,inst_24808,inst_24803,inst_24823,state_val_24887,c__21223__auto__,map__24732,map__24732__$1,opts,before_jsload,on_jsload,reload_dependents,map__24733,map__24733__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__24824){
var map__24955 = p__24824;
var map__24955__$1 = ((((!((map__24955 == null)))?((((map__24955.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24955.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24955):map__24955);
var namespace = cljs.core.get.call(null,map__24955__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__24955__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_24804,inst_24806,inst_24800,inst_24808,inst_24803,inst_24823,state_val_24887,c__21223__auto__,map__24732,map__24732__$1,opts,before_jsload,on_jsload,reload_dependents,map__24733,map__24733__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_24826 = cljs.core.map.call(null,inst_24825,inst_24804);
var inst_24827 = cljs.core.pr_str.call(null,inst_24826);
var inst_24828 = figwheel.client.utils.log.call(null,inst_24827);
var inst_24829 = (function (){var all_files = inst_24800;
var res_SINGLEQUOTE_ = inst_24803;
var res = inst_24804;
var files_not_loaded = inst_24806;
var dependencies_that_loaded = inst_24808;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_24804,inst_24806,inst_24800,inst_24808,inst_24803,inst_24823,inst_24825,inst_24826,inst_24827,inst_24828,state_val_24887,c__21223__auto__,map__24732,map__24732__$1,opts,before_jsload,on_jsload,reload_dependents,map__24733,map__24733__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_24804,inst_24806,inst_24800,inst_24808,inst_24803,inst_24823,inst_24825,inst_24826,inst_24827,inst_24828,state_val_24887,c__21223__auto__,map__24732,map__24732__$1,opts,before_jsload,on_jsload,reload_dependents,map__24733,map__24733__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_24830 = setTimeout(inst_24829,(10));
var state_24886__$1 = (function (){var statearr_24957 = state_24886;
(statearr_24957[(33)] = inst_24828);

(statearr_24957[(34)] = inst_24823);

return statearr_24957;
})();
var statearr_24958_25024 = state_24886__$1;
(statearr_24958_25024[(2)] = inst_24830);

(statearr_24958_25024[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24887 === (16))){
var state_24886__$1 = state_24886;
var statearr_24959_25025 = state_24886__$1;
(statearr_24959_25025[(2)] = reload_dependents);

(statearr_24959_25025[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24887 === (38))){
var inst_24840 = (state_24886[(16)]);
var inst_24857 = cljs.core.apply.call(null,cljs.core.hash_map,inst_24840);
var state_24886__$1 = state_24886;
var statearr_24960_25026 = state_24886__$1;
(statearr_24960_25026[(2)] = inst_24857);

(statearr_24960_25026[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24887 === (30))){
var state_24886__$1 = state_24886;
var statearr_24961_25027 = state_24886__$1;
(statearr_24961_25027[(2)] = null);

(statearr_24961_25027[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24887 === (10))){
var inst_24760 = (state_24886[(22)]);
var inst_24762 = cljs.core.chunked_seq_QMARK_.call(null,inst_24760);
var state_24886__$1 = state_24886;
if(inst_24762){
var statearr_24962_25028 = state_24886__$1;
(statearr_24962_25028[(1)] = (13));

} else {
var statearr_24963_25029 = state_24886__$1;
(statearr_24963_25029[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24887 === (18))){
var inst_24794 = (state_24886[(2)]);
var state_24886__$1 = state_24886;
if(cljs.core.truth_(inst_24794)){
var statearr_24964_25030 = state_24886__$1;
(statearr_24964_25030[(1)] = (19));

} else {
var statearr_24965_25031 = state_24886__$1;
(statearr_24965_25031[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24887 === (42))){
var state_24886__$1 = state_24886;
var statearr_24966_25032 = state_24886__$1;
(statearr_24966_25032[(2)] = null);

(statearr_24966_25032[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24887 === (37))){
var inst_24852 = (state_24886[(2)]);
var state_24886__$1 = state_24886;
var statearr_24967_25033 = state_24886__$1;
(statearr_24967_25033[(2)] = inst_24852);

(statearr_24967_25033[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24887 === (8))){
var inst_24747 = (state_24886[(7)]);
var inst_24760 = (state_24886[(22)]);
var inst_24760__$1 = cljs.core.seq.call(null,inst_24747);
var state_24886__$1 = (function (){var statearr_24968 = state_24886;
(statearr_24968[(22)] = inst_24760__$1);

return statearr_24968;
})();
if(inst_24760__$1){
var statearr_24969_25034 = state_24886__$1;
(statearr_24969_25034[(1)] = (10));

} else {
var statearr_24970_25035 = state_24886__$1;
(statearr_24970_25035[(1)] = (11));

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
});})(c__21223__auto__,map__24732,map__24732__$1,opts,before_jsload,on_jsload,reload_dependents,map__24733,map__24733__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__21111__auto__,c__21223__auto__,map__24732,map__24732__$1,opts,before_jsload,on_jsload,reload_dependents,map__24733,map__24733__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__21112__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__21112__auto____0 = (function (){
var statearr_24974 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24974[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__21112__auto__);

(statearr_24974[(1)] = (1));

return statearr_24974;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__21112__auto____1 = (function (state_24886){
while(true){
var ret_value__21113__auto__ = (function (){try{while(true){
var result__21114__auto__ = switch__21111__auto__.call(null,state_24886);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21114__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21114__auto__;
}
break;
}
}catch (e24975){if((e24975 instanceof Object)){
var ex__21115__auto__ = e24975;
var statearr_24976_25036 = state_24886;
(statearr_24976_25036[(5)] = ex__21115__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24886);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24975;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25037 = state_24886;
state_24886 = G__25037;
continue;
} else {
return ret_value__21113__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__21112__auto__ = function(state_24886){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__21112__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__21112__auto____1.call(this,state_24886);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__21112__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__21112__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__21112__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__21112__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__21112__auto__;
})()
;})(switch__21111__auto__,c__21223__auto__,map__24732,map__24732__$1,opts,before_jsload,on_jsload,reload_dependents,map__24733,map__24733__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__21225__auto__ = (function (){var statearr_24977 = f__21224__auto__.call(null);
(statearr_24977[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21223__auto__);

return statearr_24977;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21225__auto__);
});})(c__21223__auto__,map__24732,map__24732__$1,opts,before_jsload,on_jsload,reload_dependents,map__24733,map__24733__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__21223__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__25040,link){
var map__25043 = p__25040;
var map__25043__$1 = ((((!((map__25043 == null)))?((((map__25043.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25043.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25043):map__25043);
var file = cljs.core.get.call(null,map__25043__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__25043,map__25043__$1,file){
return (function (p1__25038_SHARP_,p2__25039_SHARP_){
if(cljs.core._EQ_.call(null,p1__25038_SHARP_,p2__25039_SHARP_)){
return p1__25038_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__25043,map__25043__$1,file))
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
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__25049){
var map__25050 = p__25049;
var map__25050__$1 = ((((!((map__25050 == null)))?((((map__25050.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25050.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25050):map__25050);
var match_length = cljs.core.get.call(null,map__25050__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__25050__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__25045_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__25045_SHARP_);
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
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(var_args){
var args25052 = [];
var len__19499__auto___25055 = arguments.length;
var i__19500__auto___25056 = (0);
while(true){
if((i__19500__auto___25056 < len__19499__auto___25055)){
args25052.push((arguments[i__19500__auto___25056]));

var G__25057 = (i__19500__auto___25056 + (1));
i__19500__auto___25056 = G__25057;
continue;
} else {
}
break;
}

var G__25054 = args25052.length;
switch (G__25054) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25052.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.distictify = (function figwheel$client$file_reloading$distictify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__25059_SHARP_,p2__25060_SHARP_){
return cljs.core.assoc.call(null,p1__25059_SHARP_,cljs.core.get.call(null,p2__25060_SHARP_,key),p2__25060_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__25061){
var map__25064 = p__25061;
var map__25064__$1 = ((((!((map__25064 == null)))?((((map__25064.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25064.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25064):map__25064);
var f_data = map__25064__$1;
var file = cljs.core.get.call(null,map__25064__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4657__auto__)){
var link = temp__4657__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__25066,files_msg){
var map__25073 = p__25066;
var map__25073__$1 = ((((!((map__25073 == null)))?((((map__25073.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25073.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25073):map__25073);
var opts = map__25073__$1;
var on_cssload = cljs.core.get.call(null,map__25073__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__25075_25079 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__25076_25080 = null;
var count__25077_25081 = (0);
var i__25078_25082 = (0);
while(true){
if((i__25078_25082 < count__25077_25081)){
var f_25083 = cljs.core._nth.call(null,chunk__25076_25080,i__25078_25082);
figwheel.client.file_reloading.reload_css_file.call(null,f_25083);

var G__25084 = seq__25075_25079;
var G__25085 = chunk__25076_25080;
var G__25086 = count__25077_25081;
var G__25087 = (i__25078_25082 + (1));
seq__25075_25079 = G__25084;
chunk__25076_25080 = G__25085;
count__25077_25081 = G__25086;
i__25078_25082 = G__25087;
continue;
} else {
var temp__4657__auto___25088 = cljs.core.seq.call(null,seq__25075_25079);
if(temp__4657__auto___25088){
var seq__25075_25089__$1 = temp__4657__auto___25088;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25075_25089__$1)){
var c__19239__auto___25090 = cljs.core.chunk_first.call(null,seq__25075_25089__$1);
var G__25091 = cljs.core.chunk_rest.call(null,seq__25075_25089__$1);
var G__25092 = c__19239__auto___25090;
var G__25093 = cljs.core.count.call(null,c__19239__auto___25090);
var G__25094 = (0);
seq__25075_25079 = G__25091;
chunk__25076_25080 = G__25092;
count__25077_25081 = G__25093;
i__25078_25082 = G__25094;
continue;
} else {
var f_25095 = cljs.core.first.call(null,seq__25075_25089__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_25095);

var G__25096 = cljs.core.next.call(null,seq__25075_25089__$1);
var G__25097 = null;
var G__25098 = (0);
var G__25099 = (0);
seq__25075_25079 = G__25096;
chunk__25076_25080 = G__25097;
count__25077_25081 = G__25098;
i__25078_25082 = G__25099;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__25073,map__25073__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__25073,map__25073__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1490072959687