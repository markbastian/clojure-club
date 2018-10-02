// Compiled by ClojureScript 1.10.238 {}
goog.provide('adzerk.boot_reload.reload');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.Uri');
goog.require('goog.async.DeferredList');
goog.require('goog.html.legacyconversions');
goog.require('goog.net.jsloader');
adzerk.boot_reload.reload.page_uri = (function adzerk$boot_reload$reload$page_uri(){
return (new goog.Uri(window.location.href));
});
adzerk.boot_reload.reload.ends_with_QMARK_ = (function adzerk$boot_reload$reload$ends_with_QMARK_(s,pat){
return cljs.core._EQ_.call(null,pat,cljs.core.subs.call(null,s,(cljs.core.count.call(null,s) - cljs.core.count.call(null,pat))));
});
adzerk.boot_reload.reload.reload_page_BANG_ = (function adzerk$boot_reload$reload$reload_page_BANG_(){
return window.location.reload();
});
adzerk.boot_reload.reload.normalize_href_or_uri = (function adzerk$boot_reload$reload$normalize_href_or_uri(href_or_uri){
var uri = (new goog.Uri(href_or_uri));
return adzerk.boot_reload.reload.page_uri.call(null).resolve(uri).getPath();
});
/**
 * Produce the changed goog.Uri iff the (relative) path is different
 *   compared to the content of changed (a string). Return nil otherwise.
 */
adzerk.boot_reload.reload.changed_uri = (function adzerk$boot_reload$reload$changed_uri(href_or_uri,changed){
if(cljs.core.truth_(href_or_uri)){
var path = adzerk.boot_reload.reload.normalize_href_or_uri.call(null,href_or_uri);
var temp__5457__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (path){
return (function (p1__9221_SHARP_){
return adzerk.boot_reload.reload.ends_with_QMARK_.call(null,adzerk.boot_reload.reload.normalize_href_or_uri.call(null,p1__9221_SHARP_),path);
});})(path))
,changed));
if(cljs.core.truth_(temp__5457__auto__)){
var changed__$1 = temp__5457__auto__;
return goog.Uri.parse(changed__$1);
} else {
return null;
}
} else {
return null;
}
});
adzerk.boot_reload.reload.reload_css = (function adzerk$boot_reload$reload$reload_css(changed){
var sheets = document.styleSheets;
var seq__9222 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),sheets.length));
var chunk__9223 = null;
var count__9224 = (0);
var i__9225 = (0);
while(true){
if((i__9225 < count__9224)){
var s = cljs.core._nth.call(null,chunk__9223,i__9225);
var temp__5457__auto___9226 = (sheets[s]);
if(cljs.core.truth_(temp__5457__auto___9226)){
var sheet_9227 = temp__5457__auto___9226;
var temp__5457__auto___9228__$1 = adzerk.boot_reload.reload.changed_uri.call(null,sheet_9227.href,changed);
if(cljs.core.truth_(temp__5457__auto___9228__$1)){
var href_uri_9229 = temp__5457__auto___9228__$1;
sheet_9227.ownerNode.href = href_uri_9229.makeUnique().toString();
} else {
}
} else {
}


var G__9230 = seq__9222;
var G__9231 = chunk__9223;
var G__9232 = count__9224;
var G__9233 = (i__9225 + (1));
seq__9222 = G__9230;
chunk__9223 = G__9231;
count__9224 = G__9232;
i__9225 = G__9233;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__9222);
if(temp__5457__auto__){
var seq__9222__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9222__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__9222__$1);
var G__9234 = cljs.core.chunk_rest.call(null,seq__9222__$1);
var G__9235 = c__4319__auto__;
var G__9236 = cljs.core.count.call(null,c__4319__auto__);
var G__9237 = (0);
seq__9222 = G__9234;
chunk__9223 = G__9235;
count__9224 = G__9236;
i__9225 = G__9237;
continue;
} else {
var s = cljs.core.first.call(null,seq__9222__$1);
var temp__5457__auto___9238__$1 = (sheets[s]);
if(cljs.core.truth_(temp__5457__auto___9238__$1)){
var sheet_9239 = temp__5457__auto___9238__$1;
var temp__5457__auto___9240__$2 = adzerk.boot_reload.reload.changed_uri.call(null,sheet_9239.href,changed);
if(cljs.core.truth_(temp__5457__auto___9240__$2)){
var href_uri_9241 = temp__5457__auto___9240__$2;
sheet_9239.ownerNode.href = href_uri_9241.makeUnique().toString();
} else {
}
} else {
}


var G__9242 = cljs.core.next.call(null,seq__9222__$1);
var G__9243 = null;
var G__9244 = (0);
var G__9245 = (0);
seq__9222 = G__9242;
chunk__9223 = G__9243;
count__9224 = G__9244;
i__9225 = G__9245;
continue;
}
} else {
return null;
}
}
break;
}
});
adzerk.boot_reload.reload.reload_img = (function adzerk$boot_reload$reload$reload_img(changed){
var images = document.images;
var seq__9246 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),images.length));
var chunk__9247 = null;
var count__9248 = (0);
var i__9249 = (0);
while(true){
if((i__9249 < count__9248)){
var s = cljs.core._nth.call(null,chunk__9247,i__9249);
var temp__5457__auto___9250 = (images[s]);
if(cljs.core.truth_(temp__5457__auto___9250)){
var image_9251 = temp__5457__auto___9250;
var temp__5457__auto___9252__$1 = adzerk.boot_reload.reload.changed_uri.call(null,image_9251.src,changed);
if(cljs.core.truth_(temp__5457__auto___9252__$1)){
var href_uri_9253 = temp__5457__auto___9252__$1;
image_9251.src = href_uri_9253.makeUnique().toString();
} else {
}
} else {
}


var G__9254 = seq__9246;
var G__9255 = chunk__9247;
var G__9256 = count__9248;
var G__9257 = (i__9249 + (1));
seq__9246 = G__9254;
chunk__9247 = G__9255;
count__9248 = G__9256;
i__9249 = G__9257;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__9246);
if(temp__5457__auto__){
var seq__9246__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9246__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__9246__$1);
var G__9258 = cljs.core.chunk_rest.call(null,seq__9246__$1);
var G__9259 = c__4319__auto__;
var G__9260 = cljs.core.count.call(null,c__4319__auto__);
var G__9261 = (0);
seq__9246 = G__9258;
chunk__9247 = G__9259;
count__9248 = G__9260;
i__9249 = G__9261;
continue;
} else {
var s = cljs.core.first.call(null,seq__9246__$1);
var temp__5457__auto___9262__$1 = (images[s]);
if(cljs.core.truth_(temp__5457__auto___9262__$1)){
var image_9263 = temp__5457__auto___9262__$1;
var temp__5457__auto___9264__$2 = adzerk.boot_reload.reload.changed_uri.call(null,image_9263.src,changed);
if(cljs.core.truth_(temp__5457__auto___9264__$2)){
var href_uri_9265 = temp__5457__auto___9264__$2;
image_9263.src = href_uri_9265.makeUnique().toString();
} else {
}
} else {
}


var G__9266 = cljs.core.next.call(null,seq__9246__$1);
var G__9267 = null;
var G__9268 = (0);
var G__9269 = (0);
seq__9246 = G__9266;
chunk__9247 = G__9267;
count__9248 = G__9268;
i__9249 = G__9269;
continue;
}
} else {
return null;
}
}
break;
}
});
adzerk.boot_reload.reload.load_files = (function adzerk$boot_reload$reload$load_files(urls){
var opts = ({"cleanupWhenDone": true});
if(typeof goog.net.jsloader.safeLoadMany !== 'undefined'){
return goog.net.jsloader.safeLoadMany(cljs.core.clj__GT_js.call(null,cljs.core.map.call(null,((function (opts){
return (function (p1__9270_SHARP_){
return goog.html.legacyconversions.trustedResourceUrlFromString(p1__9270_SHARP_.toString());
});})(opts))
,urls)),opts);
} else {
if(typeof goog.net.jsloader.loadMany !== 'undefined'){
return goog.net.jsloader.loadMany(cljs.core.clj__GT_js.call(null,urls),opts);
} else {
throw cljs.core.ex_info.call(null,"jsloader/safeLoadMany not found",cljs.core.PersistentArrayMap.EMPTY);

}
}
});
adzerk.boot_reload.reload.reload_js = (function adzerk$boot_reload$reload$reload_js(changed,p__9273){
var map__9274 = p__9273;
var map__9274__$1 = ((((!((map__9274 == null)))?(((((map__9274.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9274.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9274):map__9274);
var on_jsload = cljs.core.get.call(null,map__9274__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),cljs.core.identity);
var js_files = cljs.core.filter.call(null,((function (map__9274,map__9274__$1,on_jsload){
return (function (p1__9271_SHARP_){
return adzerk.boot_reload.reload.ends_with_QMARK_.call(null,p1__9271_SHARP_,".js");
});})(map__9274,map__9274__$1,on_jsload))
,changed);
if(cljs.core.seq.call(null,js_files)){
adzerk.boot_reload.reload.load_files.call(null,cljs.core.map.call(null,((function (js_files,map__9274,map__9274__$1,on_jsload){
return (function (p1__9272_SHARP_){
return goog.Uri.parse(p1__9272_SHARP_).makeUnique();
});})(js_files,map__9274,map__9274__$1,on_jsload))
,js_files)).addCallbacks(((function (js_files,map__9274,map__9274__$1,on_jsload){
return (function() { 
var G__9276__delegate = function (_){
return on_jsload.call(null);
};
var G__9276 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__9277__i = 0, G__9277__a = new Array(arguments.length -  0);
while (G__9277__i < G__9277__a.length) {G__9277__a[G__9277__i] = arguments[G__9277__i + 0]; ++G__9277__i;}
  _ = new cljs.core.IndexedSeq(G__9277__a,0,null);
} 
return G__9276__delegate.call(this,_);};
G__9276.cljs$lang$maxFixedArity = 0;
G__9276.cljs$lang$applyTo = (function (arglist__9278){
var _ = cljs.core.seq(arglist__9278);
return G__9276__delegate(_);
});
G__9276.cljs$core$IFn$_invoke$arity$variadic = G__9276__delegate;
return G__9276;
})()
;})(js_files,map__9274,map__9274__$1,on_jsload))
,((function (js_files,map__9274,map__9274__$1,on_jsload){
return (function (e){
return console.error("Load failed:",e.message);
});})(js_files,map__9274,map__9274__$1,on_jsload))
);

if(cljs.core.truth_((window["jQuery"]))){
return jQuery(document).trigger("page-load");
} else {
return null;
}
} else {
return null;
}
});
adzerk.boot_reload.reload.reload_html = (function adzerk$boot_reload$reload$reload_html(changed){
var page_path = adzerk.boot_reload.reload.page_uri.call(null).getPath();
var html_path = (cljs.core.truth_(adzerk.boot_reload.reload.ends_with_QMARK_.call(null,page_path,"/"))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(page_path),"index.html"].join(''):page_path);
if(cljs.core.truth_(adzerk.boot_reload.reload.changed_uri.call(null,html_path,changed))){
return adzerk.boot_reload.reload.reload_page_BANG_.call(null);
} else {
return null;
}
});
adzerk.boot_reload.reload.group_log = (function adzerk$boot_reload$reload$group_log(title,things_to_log){
console.groupCollapsed(title);

var seq__9279_9283 = cljs.core.seq.call(null,things_to_log);
var chunk__9280_9284 = null;
var count__9281_9285 = (0);
var i__9282_9286 = (0);
while(true){
if((i__9282_9286 < count__9281_9285)){
var t_9287 = cljs.core._nth.call(null,chunk__9280_9284,i__9282_9286);
console.log(t_9287);


var G__9288 = seq__9279_9283;
var G__9289 = chunk__9280_9284;
var G__9290 = count__9281_9285;
var G__9291 = (i__9282_9286 + (1));
seq__9279_9283 = G__9288;
chunk__9280_9284 = G__9289;
count__9281_9285 = G__9290;
i__9282_9286 = G__9291;
continue;
} else {
var temp__5457__auto___9292 = cljs.core.seq.call(null,seq__9279_9283);
if(temp__5457__auto___9292){
var seq__9279_9293__$1 = temp__5457__auto___9292;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9279_9293__$1)){
var c__4319__auto___9294 = cljs.core.chunk_first.call(null,seq__9279_9293__$1);
var G__9295 = cljs.core.chunk_rest.call(null,seq__9279_9293__$1);
var G__9296 = c__4319__auto___9294;
var G__9297 = cljs.core.count.call(null,c__4319__auto___9294);
var G__9298 = (0);
seq__9279_9283 = G__9295;
chunk__9280_9284 = G__9296;
count__9281_9285 = G__9297;
i__9282_9286 = G__9298;
continue;
} else {
var t_9299 = cljs.core.first.call(null,seq__9279_9293__$1);
console.log(t_9299);


var G__9300 = cljs.core.next.call(null,seq__9279_9293__$1);
var G__9301 = null;
var G__9302 = (0);
var G__9303 = (0);
seq__9279_9283 = G__9300;
chunk__9280_9284 = G__9301;
count__9281_9285 = G__9302;
i__9282_9286 = G__9303;
continue;
}
} else {
}
}
break;
}

return console.groupEnd();
});
/**
 * Perform heuristics to check if a non-shimmed DOM is available
 */
adzerk.boot_reload.reload.has_dom_QMARK_ = (function adzerk$boot_reload$reload$has_dom_QMARK_(){
return ((typeof window !== 'undefined') && (typeof window.document !== 'undefined') && (typeof window.document.documentURI !== 'undefined'));
});
adzerk.boot_reload.reload.reload = (function adzerk$boot_reload$reload$reload(changed,opts){
var changed_STAR_ = cljs.core.map.call(null,(function (p1__9304_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"asset-host","asset-host",-899289050).cljs$core$IFn$_invoke$arity$1(opts)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__9304_SHARP_)].join('');
}),cljs.core.map.call(null,(function (p__9305){
var map__9306 = p__9305;
var map__9306__$1 = ((((!((map__9306 == null)))?(((((map__9306.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9306.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9306):map__9306);
var canonical_path = cljs.core.get.call(null,map__9306__$1,new cljs.core.Keyword(null,"canonical-path","canonical-path",-1891747854));
var web_path = cljs.core.get.call(null,map__9306__$1,new cljs.core.Keyword(null,"web-path","web-path",594590673));
if(cljs.core._EQ_.call(null,"file:",(function (){var G__9308 = window;
var G__9308__$1 = (((G__9308 == null))?null:G__9308.location);
if((G__9308__$1 == null)){
return null;
} else {
return G__9308__$1.protocol;
}
})())){
return canonical_path;
} else {
return web_path;
}
}),changed));
adzerk.boot_reload.reload.group_log.call(null,"Reload",changed_STAR_);

adzerk.boot_reload.reload.reload_js.call(null,changed_STAR_,opts);

if(cljs.core.truth_(adzerk.boot_reload.reload.has_dom_QMARK_.call(null))){
var G__9309 = changed_STAR_;
adzerk.boot_reload.reload.reload_html.call(null,G__9309);

adzerk.boot_reload.reload.reload_css.call(null,G__9309);

adzerk.boot_reload.reload.reload_img.call(null,G__9309);

return G__9309;
} else {
return null;
}
});

//# sourceMappingURL=reload.js.map
