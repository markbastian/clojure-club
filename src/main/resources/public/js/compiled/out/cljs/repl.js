// Compiled by ClojureScript 1.9.495 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__35132){
var map__35157 = p__35132;
var map__35157__$1 = ((((!((map__35157 == null)))?((((map__35157.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35157.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35157):map__35157);
var m = map__35157__$1;
var n = cljs.core.get.call(null,map__35157__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__35157__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/")].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__35159_35181 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__35160_35182 = null;
var count__35161_35183 = (0);
var i__35162_35184 = (0);
while(true){
if((i__35162_35184 < count__35161_35183)){
var f_35185 = cljs.core._nth.call(null,chunk__35160_35182,i__35162_35184);
cljs.core.println.call(null,"  ",f_35185);

var G__35186 = seq__35159_35181;
var G__35187 = chunk__35160_35182;
var G__35188 = count__35161_35183;
var G__35189 = (i__35162_35184 + (1));
seq__35159_35181 = G__35186;
chunk__35160_35182 = G__35187;
count__35161_35183 = G__35188;
i__35162_35184 = G__35189;
continue;
} else {
var temp__4657__auto___35190 = cljs.core.seq.call(null,seq__35159_35181);
if(temp__4657__auto___35190){
var seq__35159_35191__$1 = temp__4657__auto___35190;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35159_35191__$1)){
var c__26038__auto___35192 = cljs.core.chunk_first.call(null,seq__35159_35191__$1);
var G__35193 = cljs.core.chunk_rest.call(null,seq__35159_35191__$1);
var G__35194 = c__26038__auto___35192;
var G__35195 = cljs.core.count.call(null,c__26038__auto___35192);
var G__35196 = (0);
seq__35159_35181 = G__35193;
chunk__35160_35182 = G__35194;
count__35161_35183 = G__35195;
i__35162_35184 = G__35196;
continue;
} else {
var f_35197 = cljs.core.first.call(null,seq__35159_35191__$1);
cljs.core.println.call(null,"  ",f_35197);

var G__35198 = cljs.core.next.call(null,seq__35159_35191__$1);
var G__35199 = null;
var G__35200 = (0);
var G__35201 = (0);
seq__35159_35181 = G__35198;
chunk__35160_35182 = G__35199;
count__35161_35183 = G__35200;
i__35162_35184 = G__35201;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_35202 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__25219__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__25219__auto__)){
return or__25219__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_35202);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_35202)))?cljs.core.second.call(null,arglists_35202):arglists_35202));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n  Please see http://clojure.org/"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n  Please see http://clojure.org/special_forms#"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
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
var seq__35163_35203 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__35164_35204 = null;
var count__35165_35205 = (0);
var i__35166_35206 = (0);
while(true){
if((i__35166_35206 < count__35165_35205)){
var vec__35167_35207 = cljs.core._nth.call(null,chunk__35164_35204,i__35166_35206);
var name_35208 = cljs.core.nth.call(null,vec__35167_35207,(0),null);
var map__35170_35209 = cljs.core.nth.call(null,vec__35167_35207,(1),null);
var map__35170_35210__$1 = ((((!((map__35170_35209 == null)))?((((map__35170_35209.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35170_35209.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35170_35209):map__35170_35209);
var doc_35211 = cljs.core.get.call(null,map__35170_35210__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_35212 = cljs.core.get.call(null,map__35170_35210__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_35208);

cljs.core.println.call(null," ",arglists_35212);

if(cljs.core.truth_(doc_35211)){
cljs.core.println.call(null," ",doc_35211);
} else {
}

var G__35213 = seq__35163_35203;
var G__35214 = chunk__35164_35204;
var G__35215 = count__35165_35205;
var G__35216 = (i__35166_35206 + (1));
seq__35163_35203 = G__35213;
chunk__35164_35204 = G__35214;
count__35165_35205 = G__35215;
i__35166_35206 = G__35216;
continue;
} else {
var temp__4657__auto___35217 = cljs.core.seq.call(null,seq__35163_35203);
if(temp__4657__auto___35217){
var seq__35163_35218__$1 = temp__4657__auto___35217;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35163_35218__$1)){
var c__26038__auto___35219 = cljs.core.chunk_first.call(null,seq__35163_35218__$1);
var G__35220 = cljs.core.chunk_rest.call(null,seq__35163_35218__$1);
var G__35221 = c__26038__auto___35219;
var G__35222 = cljs.core.count.call(null,c__26038__auto___35219);
var G__35223 = (0);
seq__35163_35203 = G__35220;
chunk__35164_35204 = G__35221;
count__35165_35205 = G__35222;
i__35166_35206 = G__35223;
continue;
} else {
var vec__35172_35224 = cljs.core.first.call(null,seq__35163_35218__$1);
var name_35225 = cljs.core.nth.call(null,vec__35172_35224,(0),null);
var map__35175_35226 = cljs.core.nth.call(null,vec__35172_35224,(1),null);
var map__35175_35227__$1 = ((((!((map__35175_35226 == null)))?((((map__35175_35226.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35175_35226.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35175_35226):map__35175_35226);
var doc_35228 = cljs.core.get.call(null,map__35175_35227__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_35229 = cljs.core.get.call(null,map__35175_35227__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_35225);

cljs.core.println.call(null," ",arglists_35229);

if(cljs.core.truth_(doc_35228)){
cljs.core.println.call(null," ",doc_35228);
} else {
}

var G__35230 = cljs.core.next.call(null,seq__35163_35218__$1);
var G__35231 = null;
var G__35232 = (0);
var G__35233 = (0);
seq__35163_35203 = G__35230;
chunk__35164_35204 = G__35231;
count__35165_35205 = G__35232;
i__35166_35206 = G__35233;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__4657__auto__ = cljs.spec.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__4657__auto__)){
var fnspec = temp__4657__auto__;
cljs.core.print.call(null,"Spec");

var seq__35177 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__35178 = null;
var count__35179 = (0);
var i__35180 = (0);
while(true){
if((i__35180 < count__35179)){
var role = cljs.core._nth.call(null,chunk__35178,i__35180);
var temp__4657__auto___35234__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___35234__$1)){
var spec_35235 = temp__4657__auto___35234__$1;
cljs.core.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":")].join(''),cljs.spec.describe.call(null,spec_35235));
} else {
}

var G__35236 = seq__35177;
var G__35237 = chunk__35178;
var G__35238 = count__35179;
var G__35239 = (i__35180 + (1));
seq__35177 = G__35236;
chunk__35178 = G__35237;
count__35179 = G__35238;
i__35180 = G__35239;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__35177);
if(temp__4657__auto____$1){
var seq__35177__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35177__$1)){
var c__26038__auto__ = cljs.core.chunk_first.call(null,seq__35177__$1);
var G__35240 = cljs.core.chunk_rest.call(null,seq__35177__$1);
var G__35241 = c__26038__auto__;
var G__35242 = cljs.core.count.call(null,c__26038__auto__);
var G__35243 = (0);
seq__35177 = G__35240;
chunk__35178 = G__35241;
count__35179 = G__35242;
i__35180 = G__35243;
continue;
} else {
var role = cljs.core.first.call(null,seq__35177__$1);
var temp__4657__auto___35244__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___35244__$2)){
var spec_35245 = temp__4657__auto___35244__$2;
cljs.core.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":")].join(''),cljs.spec.describe.call(null,spec_35245));
} else {
}

var G__35246 = cljs.core.next.call(null,seq__35177__$1);
var G__35247 = null;
var G__35248 = (0);
var G__35249 = (0);
seq__35177 = G__35246;
chunk__35178 = G__35247;
count__35179 = G__35248;
i__35180 = G__35249;
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
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1491273378535