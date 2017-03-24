// Compiled by ClojureScript 1.8.51 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__25116_25130 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__25117_25131 = null;
var count__25118_25132 = (0);
var i__25119_25133 = (0);
while(true){
if((i__25119_25133 < count__25118_25132)){
var f_25134 = cljs.core._nth.call(null,chunk__25117_25131,i__25119_25133);
cljs.core.println.call(null,"  ",f_25134);

var G__25135 = seq__25116_25130;
var G__25136 = chunk__25117_25131;
var G__25137 = count__25118_25132;
var G__25138 = (i__25119_25133 + (1));
seq__25116_25130 = G__25135;
chunk__25117_25131 = G__25136;
count__25118_25132 = G__25137;
i__25119_25133 = G__25138;
continue;
} else {
var temp__4657__auto___25139 = cljs.core.seq.call(null,seq__25116_25130);
if(temp__4657__auto___25139){
var seq__25116_25140__$1 = temp__4657__auto___25139;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25116_25140__$1)){
var c__19239__auto___25141 = cljs.core.chunk_first.call(null,seq__25116_25140__$1);
var G__25142 = cljs.core.chunk_rest.call(null,seq__25116_25140__$1);
var G__25143 = c__19239__auto___25141;
var G__25144 = cljs.core.count.call(null,c__19239__auto___25141);
var G__25145 = (0);
seq__25116_25130 = G__25142;
chunk__25117_25131 = G__25143;
count__25118_25132 = G__25144;
i__25119_25133 = G__25145;
continue;
} else {
var f_25146 = cljs.core.first.call(null,seq__25116_25140__$1);
cljs.core.println.call(null,"  ",f_25146);

var G__25147 = cljs.core.next.call(null,seq__25116_25140__$1);
var G__25148 = null;
var G__25149 = (0);
var G__25150 = (0);
seq__25116_25130 = G__25147;
chunk__25117_25131 = G__25148;
count__25118_25132 = G__25149;
i__25119_25133 = G__25150;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_25151 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__18428__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__18428__auto__)){
return or__18428__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_25151);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_25151)))?cljs.core.second.call(null,arglists_25151):arglists_25151));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__25120 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__25121 = null;
var count__25122 = (0);
var i__25123 = (0);
while(true){
if((i__25123 < count__25122)){
var vec__25124 = cljs.core._nth.call(null,chunk__25121,i__25123);
var name = cljs.core.nth.call(null,vec__25124,(0),null);
var map__25125 = cljs.core.nth.call(null,vec__25124,(1),null);
var map__25125__$1 = ((((!((map__25125 == null)))?((((map__25125.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25125.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25125):map__25125);
var doc = cljs.core.get.call(null,map__25125__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__25125__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__25152 = seq__25120;
var G__25153 = chunk__25121;
var G__25154 = count__25122;
var G__25155 = (i__25123 + (1));
seq__25120 = G__25152;
chunk__25121 = G__25153;
count__25122 = G__25154;
i__25123 = G__25155;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__25120);
if(temp__4657__auto__){
var seq__25120__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25120__$1)){
var c__19239__auto__ = cljs.core.chunk_first.call(null,seq__25120__$1);
var G__25156 = cljs.core.chunk_rest.call(null,seq__25120__$1);
var G__25157 = c__19239__auto__;
var G__25158 = cljs.core.count.call(null,c__19239__auto__);
var G__25159 = (0);
seq__25120 = G__25156;
chunk__25121 = G__25157;
count__25122 = G__25158;
i__25123 = G__25159;
continue;
} else {
var vec__25127 = cljs.core.first.call(null,seq__25120__$1);
var name = cljs.core.nth.call(null,vec__25127,(0),null);
var map__25128 = cljs.core.nth.call(null,vec__25127,(1),null);
var map__25128__$1 = ((((!((map__25128 == null)))?((((map__25128.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25128.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25128):map__25128);
var doc = cljs.core.get.call(null,map__25128__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__25128__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__25160 = cljs.core.next.call(null,seq__25120__$1);
var G__25161 = null;
var G__25162 = (0);
var G__25163 = (0);
seq__25120 = G__25160;
chunk__25121 = G__25161;
count__25122 = G__25162;
i__25123 = G__25163;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1490072959742