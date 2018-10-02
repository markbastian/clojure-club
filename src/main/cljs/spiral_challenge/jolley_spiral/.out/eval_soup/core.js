// Compiled by ClojureScript 1.10.238 {}
goog.provide('eval_soup.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('cljs.core.async');
goog.require('cljs.js');
goog.require('cljs.tools.reader');
goog.require('clojure.walk');
goog.require('goog.net.XhrIo');
eval_soup.core.fix_goog_path = (function eval_soup$core$fix_goog_path(path){
var parts = clojure.string.split.call(null,path,/\//);
var last_part = cljs.core.last.call(null,parts);
var new_parts = cljs.core.concat.call(null,cljs.core.butlast.call(null,parts),((cljs.core._EQ_.call(null,last_part,clojure.string.lower_case.call(null,last_part)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [last_part,last_part], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.string.lower_case.call(null,last_part)], null)));
return clojure.string.join.call(null,"/",new_parts);
});
eval_soup.core.custom_load_BANG_ = (function eval_soup$core$custom_load_BANG_(var_args){
var G__8958 = arguments.length;
switch (G__8958) {
case 2:
return eval_soup.core.custom_load_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return eval_soup.core.custom_load_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

eval_soup.core.custom_load_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (opts,cb){
if(cljs.core.truth_(cljs.core.re_matches.call(null,/^goog\/.*/,new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(opts)))){
return eval_soup.core.custom_load_BANG_.call(null,cljs.core.update.call(null,opts,new cljs.core.Keyword(null,"path","path",-188191168),eval_soup.core.fix_goog_path),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [".js"], null),cb);
} else {
return eval_soup.core.custom_load_BANG_.call(null,opts,(cljs.core.truth_(new cljs.core.Keyword(null,"macros","macros",811339431).cljs$core$IFn$_invoke$arity$1(opts))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [".clj",".cljc"], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [".cljs",".cljc",".js"], null)),cb);
}
});

eval_soup.core.custom_load_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (opts,extensions,cb){
var temp__5455__auto__ = cljs.core.first.call(null,extensions);
if(cljs.core.truth_(temp__5455__auto__)){
var extension = temp__5455__auto__;
try{return goog.net.XhrIo.send([cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(opts)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(extension)].join(''),((function (extension,temp__5455__auto__){
return (function (e){
if(cljs.core.truth_(e.target.isSuccess())){
return cb.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"lang","lang",-1819677104),((cljs.core._EQ_.call(null,extension,".js"))?new cljs.core.Keyword(null,"js","js",1768080579):new cljs.core.Keyword(null,"clj","clj",-660495428)),new cljs.core.Keyword(null,"source","source",-433931539),e.target.getResponseText()], null));
} else {
return eval_soup.core.custom_load_BANG_.call(null,opts,cljs.core.rest.call(null,extensions),cb);
}
});})(extension,temp__5455__auto__))
);
}catch (e8959){if((e8959 instanceof Error)){
var _ = e8959;
return eval_soup.core.custom_load_BANG_.call(null,opts,cljs.core.rest.call(null,extensions),cb);
} else {
throw e8959;

}
}} else {
return cb.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"lang","lang",-1819677104),new cljs.core.Keyword(null,"clj","clj",-660495428),new cljs.core.Keyword(null,"source","source",-433931539),""], null));
}
});

eval_soup.core.custom_load_BANG_.cljs$lang$maxFixedArity = 3;

eval_soup.core.str__GT_form = (function eval_soup$core$str__GT_form(ns_sym,s){
try{var _STAR_ns_STAR_8962 = cljs.core._STAR_ns_STAR_;
cljs.core._STAR_ns_STAR_ = cljs.core.create_ns.call(null,ns_sym);

try{return cljs.tools.reader.read_string.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"read-cond","read-cond",1056899244),new cljs.core.Keyword(null,"allow","allow",-1857325745)], null),s);
}finally {cljs.core._STAR_ns_STAR_ = _STAR_ns_STAR_8962;
}}catch (e8961){if((e8961 instanceof Error)){
var _ = e8961;
return null;
} else {
throw e8961;

}
}});
eval_soup.core.eval_forms = (function eval_soup$core$eval_forms(forms,cb,_STAR_state,_STAR_current_ns,custom_load){
var opts = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"eval","eval",-1103567905),cljs.js.js_eval,new cljs.core.Keyword(null,"load","load",-1318641184),custom_load,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320),true], null);
var channel = cljs.core.async.chan.call(null);
var _STAR_forms = cljs.core.atom.call(null,forms);
var _STAR_results = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
var c__7034__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7034__auto__,opts,channel,_STAR_forms,_STAR_results){
return (function (){
var f__7035__auto__ = (function (){var switch__6944__auto__ = ((function (c__7034__auto__,opts,channel,_STAR_forms,_STAR_results){
return (function (state_9056){
var state_val_9057 = (state_9056[(1)]);
if((state_val_9057 === (7))){
var inst_9007 = (state_9056[(2)]);
var inst_9008 = cljs.core.swap_BANG_.call(null,_STAR_forms,cljs.core.rest);
var state_9056__$1 = (function (){var statearr_9058 = state_9056;
(statearr_9058[(7)] = inst_9008);

(statearr_9058[(8)] = inst_9007);

return statearr_9058;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9056__$1,(19),channel);
} else {
if((state_val_9057 === (20))){
var inst_9011 = (state_9056[(9)]);
var inst_9016 = inst_9011.cljs$lang$protocol_mask$partition0$;
var inst_9017 = (inst_9016 & (64));
var inst_9018 = inst_9011.cljs$core$ISeq$;
var inst_9019 = (cljs.core.PROTOCOL_SENTINEL === inst_9018);
var inst_9020 = ((inst_9017) || (inst_9019));
var state_9056__$1 = state_9056;
if(cljs.core.truth_(inst_9020)){
var statearr_9059_9107 = state_9056__$1;
(statearr_9059_9107[(1)] = (23));

} else {
var statearr_9060_9108 = state_9056__$1;
(statearr_9060_9108[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9057 === (27))){
var inst_9011 = (state_9056[(9)]);
var state_9056__$1 = state_9056;
var statearr_9061_9109 = state_9056__$1;
(statearr_9061_9109[(2)] = inst_9011);

(statearr_9061_9109[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9057 === (1))){
var state_9056__$1 = state_9056;
var statearr_9062_9110 = state_9056__$1;
(statearr_9062_9110[(2)] = null);

(statearr_9062_9110[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9057 === (24))){
var state_9056__$1 = state_9056;
var statearr_9063_9111 = state_9056__$1;
(statearr_9063_9111[(2)] = false);

(statearr_9063_9111[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9057 === (4))){
var state_9056__$1 = state_9056;
var statearr_9064_9112 = state_9056__$1;
(statearr_9064_9112[(2)] = null);

(statearr_9064_9112[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9057 === (15))){
var inst_8991 = (state_9056[(2)]);
var state_9056__$1 = state_9056;
var statearr_9065_9113 = state_9056__$1;
(statearr_9065_9113[(2)] = inst_8991);

(statearr_9065_9113[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9057 === (21))){
var state_9056__$1 = state_9056;
var statearr_9066_9114 = state_9056__$1;
(statearr_9066_9114[(2)] = false);

(statearr_9066_9114[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9057 === (31))){
var inst_9043 = (state_9056[(2)]);
var inst_9044 = cljs.core.swap_BANG_.call(null,_STAR_results,cljs.core.conj,inst_9043);
var state_9056__$1 = (function (){var statearr_9067 = state_9056;
(statearr_9067[(10)] = inst_9044);

return statearr_9067;
})();
var statearr_9068_9115 = state_9056__$1;
(statearr_9068_9115[(2)] = null);

(statearr_9068_9115[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9057 === (32))){
var inst_9036 = (state_9056[(11)]);
var inst_9038 = (state_9056[(2)]);
var inst_9039 = [inst_9038];
var inst_9040 = cljs.core.PersistentHashMap.fromArrays(inst_9036,inst_9039);
var state_9056__$1 = state_9056;
var statearr_9069_9116 = state_9056__$1;
(statearr_9069_9116[(2)] = inst_9040);

(statearr_9069_9116[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9057 === (13))){
var inst_8979 = (state_9056[(12)]);
var inst_8987 = cljs.core.second.call(null,inst_8979);
var inst_8988 = cljs.core.reset_BANG_.call(null,_STAR_current_ns,inst_8987);
var state_9056__$1 = state_9056;
var statearr_9070_9117 = state_9056__$1;
(statearr_9070_9117[(2)] = inst_8988);

(statearr_9070_9117[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9057 === (22))){
var inst_9027 = (state_9056[(2)]);
var state_9056__$1 = state_9056;
if(cljs.core.truth_(inst_9027)){
var statearr_9071_9118 = state_9056__$1;
(statearr_9071_9118[(1)] = (26));

} else {
var statearr_9072_9119 = state_9056__$1;
(statearr_9072_9119[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9057 === (29))){
var inst_9033 = (state_9056[(13)]);
var inst_9036 = [new cljs.core.Keyword(null,"value","value",305978217)];
var state_9056__$1 = (function (){var statearr_9073 = state_9056;
(statearr_9073[(11)] = inst_9036);

return statearr_9073;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9056__$1,(32),inst_9033);
} else {
if((state_val_9057 === (6))){
var inst_9048 = (state_9056[(2)]);
var state_9056__$1 = state_9056;
var statearr_9074_9120 = state_9056__$1;
(statearr_9074_9120[(2)] = inst_9048);

(statearr_9074_9120[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9057 === (28))){
var inst_9032 = (state_9056[(14)]);
var inst_9033 = (state_9056[(13)]);
var inst_9032__$1 = (state_9056[(2)]);
var inst_9033__$1 = cljs.core.get.call(null,inst_9032__$1,new cljs.core.Keyword(null,"value","value",305978217));
var inst_9034 = (inst_9033__$1 instanceof cljs.core.async.impl.channels.ManyToManyChannel);
var state_9056__$1 = (function (){var statearr_9075 = state_9056;
(statearr_9075[(14)] = inst_9032__$1);

(statearr_9075[(13)] = inst_9033__$1);

return statearr_9075;
})();
if(cljs.core.truth_(inst_9034)){
var statearr_9076_9121 = state_9056__$1;
(statearr_9076_9121[(1)] = (29));

} else {
var statearr_9077_9122 = state_9056__$1;
(statearr_9077_9122[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9057 === (25))){
var inst_9024 = (state_9056[(2)]);
var state_9056__$1 = state_9056;
var statearr_9078_9123 = state_9056__$1;
(statearr_9078_9123[(2)] = inst_9024);

(statearr_9078_9123[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9057 === (17))){
var inst_8977 = (state_9056[(15)]);
var inst_8980 = (state_9056[(16)]);
var inst_8979 = (state_9056[(12)]);
var inst_9002 = (function (){var current_ns = inst_8977;
var form = inst_8979;
var opts__$1 = inst_8980;
return ((function (current_ns,form,opts__$1,inst_8977,inst_8980,inst_8979,state_val_9057,c__7034__auto__,opts,channel,_STAR_forms,_STAR_results){
return (function (p1__8963_SHARP_){
return cljs.core.async.put_BANG_.call(null,channel,p1__8963_SHARP_);
});
;})(current_ns,form,opts__$1,inst_8977,inst_8980,inst_8979,state_val_9057,c__7034__auto__,opts,channel,_STAR_forms,_STAR_results))
})();
var inst_9003 = cljs.js.eval.call(null,_STAR_state,inst_8979,inst_8980,inst_9002);
var state_9056__$1 = state_9056;
var statearr_9079_9124 = state_9056__$1;
(statearr_9079_9124[(2)] = inst_9003);

(statearr_9079_9124[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9057 === (3))){
var inst_9050 = (state_9056[(2)]);
var inst_9051 = (function (){return ((function (inst_9050,state_val_9057,c__7034__auto__,opts,channel,_STAR_forms,_STAR_results){
return (function (p1__8964_SHARP_){
var or__3922__auto__ = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(p1__8964_SHARP_);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__8964_SHARP_);
}
});
;})(inst_9050,state_val_9057,c__7034__auto__,opts,channel,_STAR_forms,_STAR_results))
})();
var inst_9052 = cljs.core.deref.call(null,_STAR_results);
var inst_9053 = cljs.core.mapv.call(null,inst_9051,inst_9052);
var inst_9054 = cb.call(null,inst_9053);
var state_9056__$1 = (function (){var statearr_9080 = state_9056;
(statearr_9080[(17)] = inst_9050);

return statearr_9080;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9056__$1,inst_9054);
} else {
if((state_val_9057 === (12))){
var inst_8979 = (state_9056[(12)]);
var inst_8994 = (state_9056[(2)]);
var inst_8995 = (inst_8979 instanceof Error);
var state_9056__$1 = (function (){var statearr_9081 = state_9056;
(statearr_9081[(18)] = inst_8994);

return statearr_9081;
})();
if(cljs.core.truth_(inst_8995)){
var statearr_9082_9125 = state_9056__$1;
(statearr_9082_9125[(1)] = (16));

} else {
var statearr_9083_9126 = state_9056__$1;
(statearr_9083_9126[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9057 === (2))){
var inst_8966 = cljs.core.deref.call(null,_STAR_forms);
var inst_8967 = cljs.core.seq.call(null,inst_8966);
var state_9056__$1 = state_9056;
if(inst_8967){
var statearr_9084_9127 = state_9056__$1;
(statearr_9084_9127[(1)] = (4));

} else {
var statearr_9085_9128 = state_9056__$1;
(statearr_9085_9128[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9057 === (23))){
var state_9056__$1 = state_9056;
var statearr_9086_9129 = state_9056__$1;
(statearr_9086_9129[(2)] = true);

(statearr_9086_9129[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9057 === (19))){
var inst_9011 = (state_9056[(9)]);
var inst_9011__$1 = (state_9056[(2)]);
var inst_9013 = (inst_9011__$1 == null);
var inst_9014 = cljs.core.not.call(null,inst_9013);
var state_9056__$1 = (function (){var statearr_9087 = state_9056;
(statearr_9087[(9)] = inst_9011__$1);

return statearr_9087;
})();
if(inst_9014){
var statearr_9088_9130 = state_9056__$1;
(statearr_9088_9130[(1)] = (20));

} else {
var statearr_9089_9131 = state_9056__$1;
(statearr_9089_9131[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9057 === (11))){
var state_9056__$1 = state_9056;
var statearr_9090_9132 = state_9056__$1;
(statearr_9090_9132[(2)] = null);

(statearr_9090_9132[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9057 === (9))){
var inst_8977 = (state_9056[(15)]);
var inst_8979 = (state_9056[(12)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_9056,(8),Error,null,(7));
var inst_8977__$1 = cljs.core.deref.call(null,_STAR_current_ns);
var inst_8978 = cljs.core.deref.call(null,_STAR_forms);
var inst_8979__$1 = cljs.core.first.call(null,inst_8978);
var inst_8980 = cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"ns","ns",441598760),inst_8977__$1);
var inst_8981 = cljs.core.list_QMARK_.call(null,inst_8979__$1);
var state_9056__$1 = (function (){var statearr_9091 = state_9056;
(statearr_9091[(15)] = inst_8977__$1);

(statearr_9091[(16)] = inst_8980);

(statearr_9091[(12)] = inst_8979__$1);

return statearr_9091;
})();
if(inst_8981){
var statearr_9092_9133 = state_9056__$1;
(statearr_9092_9133[(1)] = (10));

} else {
var statearr_9093_9134 = state_9056__$1;
(statearr_9093_9134[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9057 === (5))){
var state_9056__$1 = state_9056;
var statearr_9094_9135 = state_9056__$1;
(statearr_9094_9135[(2)] = null);

(statearr_9094_9135[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9057 === (14))){
var state_9056__$1 = state_9056;
var statearr_9095_9136 = state_9056__$1;
(statearr_9095_9136[(2)] = null);

(statearr_9095_9136[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9057 === (26))){
var inst_9011 = (state_9056[(9)]);
var inst_9029 = cljs.core.apply.call(null,cljs.core.hash_map,inst_9011);
var state_9056__$1 = state_9056;
var statearr_9096_9137 = state_9056__$1;
(statearr_9096_9137[(2)] = inst_9029);

(statearr_9096_9137[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9057 === (16))){
var inst_8979 = (state_9056[(12)]);
var inst_8997 = [new cljs.core.Keyword(null,"error","error",-978969032)];
var inst_8998 = [inst_8979];
var inst_8999 = cljs.core.PersistentHashMap.fromArrays(inst_8997,inst_8998);
var inst_9000 = cljs.core.async.put_BANG_.call(null,channel,inst_8999);
var state_9056__$1 = state_9056;
var statearr_9097_9138 = state_9056__$1;
(statearr_9097_9138[(2)] = inst_9000);

(statearr_9097_9138[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9057 === (30))){
var inst_9032 = (state_9056[(14)]);
var state_9056__$1 = state_9056;
var statearr_9098_9139 = state_9056__$1;
(statearr_9098_9139[(2)] = inst_9032);

(statearr_9098_9139[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9057 === (10))){
var inst_8979 = (state_9056[(12)]);
var inst_8983 = new cljs.core.Symbol(null,"ns","ns",2082130287,null);
var inst_8984 = cljs.core.first.call(null,inst_8979);
var inst_8985 = cljs.core._EQ_.call(null,inst_8983,inst_8984);
var state_9056__$1 = state_9056;
if(inst_8985){
var statearr_9099_9140 = state_9056__$1;
(statearr_9099_9140[(1)] = (13));

} else {
var statearr_9100_9141 = state_9056__$1;
(statearr_9100_9141[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9057 === (18))){
var inst_9005 = (state_9056[(2)]);
var state_9056__$1 = state_9056;
var statearr_9101_9142 = state_9056__$1;
(statearr_9101_9142[(2)] = inst_9005);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9056__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9057 === (8))){
var inst_8969 = (state_9056[(2)]);
var inst_8970 = [new cljs.core.Keyword(null,"error","error",-978969032)];
var inst_8971 = [inst_8969];
var inst_8972 = cljs.core.PersistentHashMap.fromArrays(inst_8970,inst_8971);
var inst_8973 = cljs.core.async.put_BANG_.call(null,channel,inst_8972);
var state_9056__$1 = state_9056;
var statearr_9102_9143 = state_9056__$1;
(statearr_9102_9143[(2)] = inst_8973);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9056__$1);

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
});})(c__7034__auto__,opts,channel,_STAR_forms,_STAR_results))
;
return ((function (switch__6944__auto__,c__7034__auto__,opts,channel,_STAR_forms,_STAR_results){
return (function() {
var eval_soup$core$eval_forms_$_state_machine__6945__auto__ = null;
var eval_soup$core$eval_forms_$_state_machine__6945__auto____0 = (function (){
var statearr_9103 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_9103[(0)] = eval_soup$core$eval_forms_$_state_machine__6945__auto__);

(statearr_9103[(1)] = (1));

return statearr_9103;
});
var eval_soup$core$eval_forms_$_state_machine__6945__auto____1 = (function (state_9056){
while(true){
var ret_value__6946__auto__ = (function (){try{while(true){
var result__6947__auto__ = switch__6944__auto__.call(null,state_9056);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6947__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6947__auto__;
}
break;
}
}catch (e9104){if((e9104 instanceof Object)){
var ex__6948__auto__ = e9104;
var statearr_9105_9144 = state_9056;
(statearr_9105_9144[(5)] = ex__6948__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9056);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9104;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9145 = state_9056;
state_9056 = G__9145;
continue;
} else {
return ret_value__6946__auto__;
}
break;
}
});
eval_soup$core$eval_forms_$_state_machine__6945__auto__ = function(state_9056){
switch(arguments.length){
case 0:
return eval_soup$core$eval_forms_$_state_machine__6945__auto____0.call(this);
case 1:
return eval_soup$core$eval_forms_$_state_machine__6945__auto____1.call(this,state_9056);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
eval_soup$core$eval_forms_$_state_machine__6945__auto__.cljs$core$IFn$_invoke$arity$0 = eval_soup$core$eval_forms_$_state_machine__6945__auto____0;
eval_soup$core$eval_forms_$_state_machine__6945__auto__.cljs$core$IFn$_invoke$arity$1 = eval_soup$core$eval_forms_$_state_machine__6945__auto____1;
return eval_soup$core$eval_forms_$_state_machine__6945__auto__;
})()
;})(switch__6944__auto__,c__7034__auto__,opts,channel,_STAR_forms,_STAR_results))
})();
var state__7036__auto__ = (function (){var statearr_9106 = f__7035__auto__.call(null);
(statearr_9106[(6)] = c__7034__auto__);

return statearr_9106;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7036__auto__);
});})(c__7034__auto__,opts,channel,_STAR_forms,_STAR_results))
);

return c__7034__auto__;
});
eval_soup.core.wrap_macroexpand = (function eval_soup$core$wrap_macroexpand(form){
if(cljs.core.coll_QMARK_.call(null,form)){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"macroexpand","macroexpand",1509933344,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),(new cljs.core.List(null,form,null,(1),null)),(2),null)),null,(1),null)),(2),null));
} else {
return form;
}
});
eval_soup.core.add_timeout_reset = (function eval_soup$core$add_timeout_reset(form){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),(new cljs.core.List(null,cljs.core.list(new cljs.core.Symbol("cljs.user","ps-reset-timeout!","cljs.user/ps-reset-timeout!",-1629160217,null)),(new cljs.core.List(null,form,null,(1),null)),(2),null)),(3),null));
});
eval_soup.core.add_timeout_checks = (function eval_soup$core$add_timeout_checks(timeout,form){
if(((cljs.core.seq_QMARK_.call(null,form)) && (cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,form))))){
return form;
} else {
var form__$1 = clojure.walk.walk.call(null,cljs.core.partial.call(null,eval_soup.core.add_timeout_checks,timeout),cljs.core.identity,form);
if(((cljs.core.seq_QMARK_.call(null,form__$1)) && (cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"recur","recur",1202958259,null),cljs.core.first.call(null,form__$1))))){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.user","ps-check-for-timeout!","cljs.user/ps-check-for-timeout!",-708791466,null),(new cljs.core.List(null,timeout,null,(1),null)),(2),null)),(new cljs.core.List(null,form__$1,null,(1),null)),(2),null)),(3),null));
} else {
return form__$1;
}
}
});
eval_soup.core.add_timeouts_if_necessary = (function eval_soup$core$add_timeouts_if_necessary(timeout,forms,expanded_forms){
var iter__4292__auto__ = (function eval_soup$core$add_timeouts_if_necessary_$_iter__9146(s__9147){
return (new cljs.core.LazySeq(null,(function (){
var s__9147__$1 = s__9147;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__9147__$1);
if(temp__5457__auto__){
var s__9147__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__9147__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__9147__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__9149 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__9148 = (0);
while(true){
if((i__9148 < size__4291__auto__)){
var i = cljs.core._nth.call(null,c__4290__auto__,i__9148);
var expanded_form = cljs.core.get.call(null,expanded_forms,i);
cljs.core.chunk_append.call(null,b__9149,((((cljs.core.coll_QMARK_.call(null,expanded_form)) && (cljs.core.contains_QMARK_.call(null,cljs.core.set.call(null,cljs.core.flatten.call(null,expanded_form)),new cljs.core.Symbol(null,"recur","recur",1202958259,null)))))?eval_soup.core.add_timeout_reset.call(null,eval_soup.core.add_timeout_checks.call(null,timeout,expanded_form)):cljs.core.get.call(null,forms,i)));

var G__9150 = (i__9148 + (1));
i__9148 = G__9150;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9149),eval_soup$core$add_timeouts_if_necessary_$_iter__9146.call(null,cljs.core.chunk_rest.call(null,s__9147__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9149),null);
}
} else {
var i = cljs.core.first.call(null,s__9147__$2);
var expanded_form = cljs.core.get.call(null,expanded_forms,i);
return cljs.core.cons.call(null,((((cljs.core.coll_QMARK_.call(null,expanded_form)) && (cljs.core.contains_QMARK_.call(null,cljs.core.set.call(null,cljs.core.flatten.call(null,expanded_form)),new cljs.core.Symbol(null,"recur","recur",1202958259,null)))))?eval_soup.core.add_timeout_reset.call(null,eval_soup.core.add_timeout_checks.call(null,timeout,expanded_form)):cljs.core.get.call(null,forms,i)),eval_soup$core$add_timeouts_if_necessary_$_iter__9146.call(null,cljs.core.rest.call(null,s__9147__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4292__auto__.call(null,cljs.core.range.call(null,cljs.core.count.call(null,forms)));
});
if(typeof eval_soup.core._STAR_cljs_state !== 'undefined'){
} else {
eval_soup.core._STAR_cljs_state = cljs.js.empty_state.call(null);
}
/**
 * Evaluates each form, providing the results in a callback.
 *   If any of the forms are strings, it will read them first.
 */
eval_soup.core.code__GT_results = (function eval_soup$core$code__GT_results(var_args){
var G__9153 = arguments.length;
switch (G__9153) {
case 2:
return eval_soup.core.code__GT_results.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return eval_soup.core.code__GT_results.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

eval_soup.core.code__GT_results.cljs$core$IFn$_invoke$arity$2 = (function (forms,cb){
return eval_soup.core.code__GT_results.call(null,forms,cb,cljs.core.PersistentArrayMap.EMPTY);
});

eval_soup.core.code__GT_results.cljs$core$IFn$_invoke$arity$3 = (function (forms,cb,p__9154){
var map__9155 = p__9154;
var map__9155__$1 = ((((!((map__9155 == null)))?(((((map__9155.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9155.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9155):map__9155);
var opts = map__9155__$1;
var _STAR_current_ns = cljs.core.get.call(null,map__9155__$1,new cljs.core.Keyword(null,"*current-ns","*current-ns",547476271),cljs.core.atom.call(null,new cljs.core.Symbol(null,"cljs.user","cljs.user",877795071,null)));
var _STAR_state = cljs.core.get.call(null,map__9155__$1,new cljs.core.Keyword(null,"*state","*state",471581315),eval_soup.core._STAR_cljs_state);
var custom_load = cljs.core.get.call(null,map__9155__$1,new cljs.core.Keyword(null,"custom-load","custom-load",-1830353108),eval_soup.core.custom_load_BANG_);
var timeout = cljs.core.get.call(null,map__9155__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(4000));
var disable_timeout_QMARK_ = cljs.core.get.call(null,map__9155__$1,new cljs.core.Keyword(null,"disable-timeout?","disable-timeout?",-760039639),false);
var forms__$1 = cljs.core.mapv.call(null,((function (map__9155,map__9155__$1,opts,_STAR_current_ns,_STAR_state,custom_load,timeout,disable_timeout_QMARK_){
return (function (p1__9151_SHARP_){
if(typeof p1__9151_SHARP_ === 'string'){
return eval_soup.core.str__GT_form.call(null,cljs.core.deref.call(null,_STAR_current_ns),p1__9151_SHARP_);
} else {
return p1__9151_SHARP_;
}
});})(map__9155,map__9155__$1,opts,_STAR_current_ns,_STAR_state,custom_load,timeout,disable_timeout_QMARK_))
,forms);
var init_forms = cljs.core.vec.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"ns","ns",2082130287,null),new cljs.core.Symbol(null,"cljs.user","cljs.user",877795071,null))], null),(cljs.core.truth_(disable_timeout_QMARK_)?null:new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"def","def",597100991,null),new cljs.core.Symbol(null,"ps-last-time","ps-last-time",101355075,null),cljs.core.list(new cljs.core.Symbol(null,"atom","atom",1243487874,null),(0))),cljs.core.list(new cljs.core.Symbol(null,"defn","defn",-126010802,null),new cljs.core.Symbol(null,"ps-reset-timeout!","ps-reset-timeout!",-155220708,null),cljs.core.PersistentVector.EMPTY,cljs.core.list(new cljs.core.Symbol(null,"reset!","reset!",527275632,null),new cljs.core.Symbol(null,"ps-last-time","ps-last-time",101355075,null),cljs.core.list(new cljs.core.Symbol(null,".getTime",".getTime",-1048557777,null),cljs.core.list(new cljs.core.Symbol("js","Date.","js/Date.",384205255,null))))),cljs.core.list(new cljs.core.Symbol(null,"defn","defn",-126010802,null),new cljs.core.Symbol(null,"ps-check-for-timeout!","ps-check-for-timeout!",-317076467,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"timeout","timeout",1321906209,null)], null),cljs.core.list(new cljs.core.Symbol(null,"when","when",1064114221,null),cljs.core.list(new cljs.core.Symbol(null,">",">",1085014381,null),cljs.core.list(new cljs.core.Symbol(null,"-","-",-471816912,null),cljs.core.list(new cljs.core.Symbol(null,".getTime",".getTime",-1048557777,null),cljs.core.list(new cljs.core.Symbol("js","Date.","js/Date.",384205255,null))),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"ps-last-time","ps-last-time",101355075,null))),new cljs.core.Symbol(null,"timeout","timeout",1321906209,null)),cljs.core.list(new cljs.core.Symbol(null,"throw","throw",595905694,null),cljs.core.list(new cljs.core.Symbol("js","Error.","js/Error.",750655924,null),"Execution timed out."))))], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"set!","set!",250714521,null),new cljs.core.Symbol(null,"*print-err-fn*","*print-err-fn*",1241679298,null),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null)], null))),(new cljs.core.List(null,new cljs.core.Symbol(null,"ns","ns",2082130287,null),(new cljs.core.List(null,cljs.core.deref.call(null,_STAR_current_ns),null,(1),null)),(2),null))], null)));
var timeout_cb = ((function (forms__$1,init_forms,map__9155,map__9155__$1,opts,_STAR_current_ns,_STAR_state,custom_load,timeout,disable_timeout_QMARK_){
return (function (results){
return eval_soup.core.eval_forms.call(null,eval_soup.core.add_timeouts_if_necessary.call(null,timeout,forms__$1,results),cb,_STAR_state,_STAR_current_ns,custom_load);
});})(forms__$1,init_forms,map__9155,map__9155__$1,opts,_STAR_current_ns,_STAR_state,custom_load,timeout,disable_timeout_QMARK_))
;
var init_cb = ((function (forms__$1,init_forms,timeout_cb,map__9155,map__9155__$1,opts,_STAR_current_ns,_STAR_state,custom_load,timeout,disable_timeout_QMARK_){
return (function (results){
return eval_soup.core.eval_forms.call(null,(cljs.core.truth_(disable_timeout_QMARK_)?forms__$1:cljs.core.map.call(null,eval_soup.core.wrap_macroexpand,forms__$1)),(cljs.core.truth_(disable_timeout_QMARK_)?cb:timeout_cb),_STAR_state,_STAR_current_ns,custom_load);
});})(forms__$1,init_forms,timeout_cb,map__9155,map__9155__$1,opts,_STAR_current_ns,_STAR_state,custom_load,timeout,disable_timeout_QMARK_))
;
return eval_soup.core.eval_forms.call(null,init_forms,init_cb,_STAR_state,_STAR_current_ns,custom_load);
});

eval_soup.core.code__GT_results.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=core.js.map
