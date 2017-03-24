// Compiled by ClojureScript 1.8.51 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),args], null));

return args;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__25411 = cljs.core._EQ_;
var expr__25412 = (function (){var or__18428__auto__ = (function (){try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
return localStorage.getItem("figwheel_autoload");
} else {
return null;
}
}catch (e25415){if((e25415 instanceof Error)){
var e = e25415;
return false;
} else {
throw e25415;

}
}})();
if(cljs.core.truth_(or__18428__auto__)){
return or__18428__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__25411.call(null,"true",expr__25412))){
return true;
} else {
if(cljs.core.truth_(pred__25411.call(null,"false",expr__25412))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__25412)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
} else {
}

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
}catch (e25417){if((e25417 instanceof Error)){
var e = e25417;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Unable to access localStorage")].join(''));
} else {
throw e25417;

}
}} else {
return null;
}
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.console_print = (function figwheel$client$console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.repl_print_fn = (function figwheel$client$repl_print_fn(var_args){
var args__19506__auto__ = [];
var len__19499__auto___25419 = arguments.length;
var i__19500__auto___25420 = (0);
while(true){
if((i__19500__auto___25420 < len__19499__auto___25419)){
args__19506__auto__.push((arguments[i__19500__auto___25420]));

var G__25421 = (i__19500__auto___25420 + (1));
i__19500__auto___25420 = G__25421;
continue;
} else {
}
break;
}

var argseq__19507__auto__ = ((((0) < args__19506__auto__.length))?(new cljs.core.IndexedSeq(args__19506__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__19507__auto__);
});

figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));

return null;
});

figwheel.client.repl_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_print_fn.cljs$lang$applyTo = (function (seq25418){
return figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq25418));
});
figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = figwheel.client.repl_print_fn;
});
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__25422){
var map__25425 = p__25422;
var map__25425__$1 = ((((!((map__25425 == null)))?((((map__25425.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25425.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25425):map__25425);
var message = cljs.core.get.call(null,map__25425__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__25425__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__18428__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__18428__auto__)){
return or__18428__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__18416__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__18416__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__18416__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__21223__auto___25587 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21223__auto___25587,ch){
return (function (){
var f__21224__auto__ = (function (){var switch__21111__auto__ = ((function (c__21223__auto___25587,ch){
return (function (state_25556){
var state_val_25557 = (state_25556[(1)]);
if((state_val_25557 === (7))){
var inst_25552 = (state_25556[(2)]);
var state_25556__$1 = state_25556;
var statearr_25558_25588 = state_25556__$1;
(statearr_25558_25588[(2)] = inst_25552);

(statearr_25558_25588[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25557 === (1))){
var state_25556__$1 = state_25556;
var statearr_25559_25589 = state_25556__$1;
(statearr_25559_25589[(2)] = null);

(statearr_25559_25589[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25557 === (4))){
var inst_25509 = (state_25556[(7)]);
var inst_25509__$1 = (state_25556[(2)]);
var state_25556__$1 = (function (){var statearr_25560 = state_25556;
(statearr_25560[(7)] = inst_25509__$1);

return statearr_25560;
})();
if(cljs.core.truth_(inst_25509__$1)){
var statearr_25561_25590 = state_25556__$1;
(statearr_25561_25590[(1)] = (5));

} else {
var statearr_25562_25591 = state_25556__$1;
(statearr_25562_25591[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25557 === (15))){
var inst_25516 = (state_25556[(8)]);
var inst_25531 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_25516);
var inst_25532 = cljs.core.first.call(null,inst_25531);
var inst_25533 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_25532);
var inst_25534 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_25533)].join('');
var inst_25535 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_25534);
var state_25556__$1 = state_25556;
var statearr_25563_25592 = state_25556__$1;
(statearr_25563_25592[(2)] = inst_25535);

(statearr_25563_25592[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25557 === (13))){
var inst_25540 = (state_25556[(2)]);
var state_25556__$1 = state_25556;
var statearr_25564_25593 = state_25556__$1;
(statearr_25564_25593[(2)] = inst_25540);

(statearr_25564_25593[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25557 === (6))){
var state_25556__$1 = state_25556;
var statearr_25565_25594 = state_25556__$1;
(statearr_25565_25594[(2)] = null);

(statearr_25565_25594[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25557 === (17))){
var inst_25538 = (state_25556[(2)]);
var state_25556__$1 = state_25556;
var statearr_25566_25595 = state_25556__$1;
(statearr_25566_25595[(2)] = inst_25538);

(statearr_25566_25595[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25557 === (3))){
var inst_25554 = (state_25556[(2)]);
var state_25556__$1 = state_25556;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25556__$1,inst_25554);
} else {
if((state_val_25557 === (12))){
var inst_25515 = (state_25556[(9)]);
var inst_25529 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_25515,opts);
var state_25556__$1 = state_25556;
if(cljs.core.truth_(inst_25529)){
var statearr_25567_25596 = state_25556__$1;
(statearr_25567_25596[(1)] = (15));

} else {
var statearr_25568_25597 = state_25556__$1;
(statearr_25568_25597[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25557 === (2))){
var state_25556__$1 = state_25556;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25556__$1,(4),ch);
} else {
if((state_val_25557 === (11))){
var inst_25516 = (state_25556[(8)]);
var inst_25521 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_25522 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_25516);
var inst_25523 = cljs.core.async.timeout.call(null,(1000));
var inst_25524 = [inst_25522,inst_25523];
var inst_25525 = (new cljs.core.PersistentVector(null,2,(5),inst_25521,inst_25524,null));
var state_25556__$1 = state_25556;
return cljs.core.async.ioc_alts_BANG_.call(null,state_25556__$1,(14),inst_25525);
} else {
if((state_val_25557 === (9))){
var inst_25516 = (state_25556[(8)]);
var inst_25542 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_25543 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_25516);
var inst_25544 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_25543);
var inst_25545 = [cljs.core.str("Not loading: "),cljs.core.str(inst_25544)].join('');
var inst_25546 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_25545);
var state_25556__$1 = (function (){var statearr_25569 = state_25556;
(statearr_25569[(10)] = inst_25542);

return statearr_25569;
})();
var statearr_25570_25598 = state_25556__$1;
(statearr_25570_25598[(2)] = inst_25546);

(statearr_25570_25598[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25557 === (5))){
var inst_25509 = (state_25556[(7)]);
var inst_25511 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_25512 = (new cljs.core.PersistentArrayMap(null,2,inst_25511,null));
var inst_25513 = (new cljs.core.PersistentHashSet(null,inst_25512,null));
var inst_25514 = figwheel.client.focus_msgs.call(null,inst_25513,inst_25509);
var inst_25515 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_25514);
var inst_25516 = cljs.core.first.call(null,inst_25514);
var inst_25517 = figwheel.client.autoload_QMARK_.call(null);
var state_25556__$1 = (function (){var statearr_25571 = state_25556;
(statearr_25571[(8)] = inst_25516);

(statearr_25571[(9)] = inst_25515);

return statearr_25571;
})();
if(cljs.core.truth_(inst_25517)){
var statearr_25572_25599 = state_25556__$1;
(statearr_25572_25599[(1)] = (8));

} else {
var statearr_25573_25600 = state_25556__$1;
(statearr_25573_25600[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25557 === (14))){
var inst_25527 = (state_25556[(2)]);
var state_25556__$1 = state_25556;
var statearr_25574_25601 = state_25556__$1;
(statearr_25574_25601[(2)] = inst_25527);

(statearr_25574_25601[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25557 === (16))){
var state_25556__$1 = state_25556;
var statearr_25575_25602 = state_25556__$1;
(statearr_25575_25602[(2)] = null);

(statearr_25575_25602[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25557 === (10))){
var inst_25548 = (state_25556[(2)]);
var state_25556__$1 = (function (){var statearr_25576 = state_25556;
(statearr_25576[(11)] = inst_25548);

return statearr_25576;
})();
var statearr_25577_25603 = state_25556__$1;
(statearr_25577_25603[(2)] = null);

(statearr_25577_25603[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25557 === (8))){
var inst_25515 = (state_25556[(9)]);
var inst_25519 = figwheel.client.reload_file_state_QMARK_.call(null,inst_25515,opts);
var state_25556__$1 = state_25556;
if(cljs.core.truth_(inst_25519)){
var statearr_25578_25604 = state_25556__$1;
(statearr_25578_25604[(1)] = (11));

} else {
var statearr_25579_25605 = state_25556__$1;
(statearr_25579_25605[(1)] = (12));

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
});})(c__21223__auto___25587,ch))
;
return ((function (switch__21111__auto__,c__21223__auto___25587,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__21112__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__21112__auto____0 = (function (){
var statearr_25583 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25583[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__21112__auto__);

(statearr_25583[(1)] = (1));

return statearr_25583;
});
var figwheel$client$file_reloader_plugin_$_state_machine__21112__auto____1 = (function (state_25556){
while(true){
var ret_value__21113__auto__ = (function (){try{while(true){
var result__21114__auto__ = switch__21111__auto__.call(null,state_25556);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21114__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21114__auto__;
}
break;
}
}catch (e25584){if((e25584 instanceof Object)){
var ex__21115__auto__ = e25584;
var statearr_25585_25606 = state_25556;
(statearr_25585_25606[(5)] = ex__21115__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25556);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25584;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25607 = state_25556;
state_25556 = G__25607;
continue;
} else {
return ret_value__21113__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__21112__auto__ = function(state_25556){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__21112__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__21112__auto____1.call(this,state_25556);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__21112__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__21112__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__21112__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__21112__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__21112__auto__;
})()
;})(switch__21111__auto__,c__21223__auto___25587,ch))
})();
var state__21225__auto__ = (function (){var statearr_25586 = f__21224__auto__.call(null);
(statearr_25586[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21223__auto___25587);

return statearr_25586;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21225__auto__);
});})(c__21223__auto___25587,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__25608_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__25608_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_25615 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_25615){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_25613 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_25614 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = figwheel.client.repl_print_fn;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),figwheel.client.utils.eval_helper.call(null,code,opts)], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_25614;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_25613;
}}catch (e25612){if((e25612 instanceof Error)){
var e = e25612;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_25615], null));
} else {
var e = e25612;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_25615))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__25616){
var map__25623 = p__25616;
var map__25623__$1 = ((((!((map__25623 == null)))?((((map__25623.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25623.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25623):map__25623);
var opts = map__25623__$1;
var build_id = cljs.core.get.call(null,map__25623__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__25623,map__25623__$1,opts,build_id){
return (function (p__25625){
var vec__25626 = p__25625;
var map__25627 = cljs.core.nth.call(null,vec__25626,(0),null);
var map__25627__$1 = ((((!((map__25627 == null)))?((((map__25627.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25627.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25627):map__25627);
var msg = map__25627__$1;
var msg_name = cljs.core.get.call(null,map__25627__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__25626,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__25626,map__25627,map__25627__$1,msg,msg_name,_,map__25623,map__25623__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__25626,map__25627,map__25627__$1,msg,msg_name,_,map__25623,map__25623__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__25623,map__25623__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__25633){
var vec__25634 = p__25633;
var map__25635 = cljs.core.nth.call(null,vec__25634,(0),null);
var map__25635__$1 = ((((!((map__25635 == null)))?((((map__25635.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25635.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25635):map__25635);
var msg = map__25635__$1;
var msg_name = cljs.core.get.call(null,map__25635__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__25634,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__25637){
var map__25647 = p__25637;
var map__25647__$1 = ((((!((map__25647 == null)))?((((map__25647.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25647.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25647):map__25647);
var on_compile_warning = cljs.core.get.call(null,map__25647__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__25647__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__25647,map__25647__$1,on_compile_warning,on_compile_fail){
return (function (p__25649){
var vec__25650 = p__25649;
var map__25651 = cljs.core.nth.call(null,vec__25650,(0),null);
var map__25651__$1 = ((((!((map__25651 == null)))?((((map__25651.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25651.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25651):map__25651);
var msg = map__25651__$1;
var msg_name = cljs.core.get.call(null,map__25651__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__25650,(1));
var pred__25653 = cljs.core._EQ_;
var expr__25654 = msg_name;
if(cljs.core.truth_(pred__25653.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__25654))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__25653.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__25654))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__25647,map__25647__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__21223__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21223__auto__,msg_hist,msg_names,msg){
return (function (){
var f__21224__auto__ = (function (){var switch__21111__auto__ = ((function (c__21223__auto__,msg_hist,msg_names,msg){
return (function (state_25870){
var state_val_25871 = (state_25870[(1)]);
if((state_val_25871 === (7))){
var inst_25794 = (state_25870[(2)]);
var state_25870__$1 = state_25870;
if(cljs.core.truth_(inst_25794)){
var statearr_25872_25918 = state_25870__$1;
(statearr_25872_25918[(1)] = (8));

} else {
var statearr_25873_25919 = state_25870__$1;
(statearr_25873_25919[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25871 === (20))){
var inst_25864 = (state_25870[(2)]);
var state_25870__$1 = state_25870;
var statearr_25874_25920 = state_25870__$1;
(statearr_25874_25920[(2)] = inst_25864);

(statearr_25874_25920[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25871 === (27))){
var inst_25860 = (state_25870[(2)]);
var state_25870__$1 = state_25870;
var statearr_25875_25921 = state_25870__$1;
(statearr_25875_25921[(2)] = inst_25860);

(statearr_25875_25921[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25871 === (1))){
var inst_25787 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_25870__$1 = state_25870;
if(cljs.core.truth_(inst_25787)){
var statearr_25876_25922 = state_25870__$1;
(statearr_25876_25922[(1)] = (2));

} else {
var statearr_25877_25923 = state_25870__$1;
(statearr_25877_25923[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25871 === (24))){
var inst_25862 = (state_25870[(2)]);
var state_25870__$1 = state_25870;
var statearr_25878_25924 = state_25870__$1;
(statearr_25878_25924[(2)] = inst_25862);

(statearr_25878_25924[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25871 === (4))){
var inst_25868 = (state_25870[(2)]);
var state_25870__$1 = state_25870;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25870__$1,inst_25868);
} else {
if((state_val_25871 === (15))){
var inst_25866 = (state_25870[(2)]);
var state_25870__$1 = state_25870;
var statearr_25879_25925 = state_25870__$1;
(statearr_25879_25925[(2)] = inst_25866);

(statearr_25879_25925[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25871 === (21))){
var inst_25825 = (state_25870[(2)]);
var state_25870__$1 = state_25870;
var statearr_25880_25926 = state_25870__$1;
(statearr_25880_25926[(2)] = inst_25825);

(statearr_25880_25926[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25871 === (31))){
var inst_25849 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_25870__$1 = state_25870;
if(cljs.core.truth_(inst_25849)){
var statearr_25881_25927 = state_25870__$1;
(statearr_25881_25927[(1)] = (34));

} else {
var statearr_25882_25928 = state_25870__$1;
(statearr_25882_25928[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25871 === (32))){
var inst_25858 = (state_25870[(2)]);
var state_25870__$1 = state_25870;
var statearr_25883_25929 = state_25870__$1;
(statearr_25883_25929[(2)] = inst_25858);

(statearr_25883_25929[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25871 === (33))){
var inst_25847 = (state_25870[(2)]);
var state_25870__$1 = state_25870;
var statearr_25884_25930 = state_25870__$1;
(statearr_25884_25930[(2)] = inst_25847);

(statearr_25884_25930[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25871 === (13))){
var inst_25808 = figwheel.client.heads_up.clear.call(null);
var state_25870__$1 = state_25870;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25870__$1,(16),inst_25808);
} else {
if((state_val_25871 === (22))){
var inst_25829 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25830 = figwheel.client.heads_up.append_message.call(null,inst_25829);
var state_25870__$1 = state_25870;
var statearr_25885_25931 = state_25870__$1;
(statearr_25885_25931[(2)] = inst_25830);

(statearr_25885_25931[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25871 === (36))){
var inst_25856 = (state_25870[(2)]);
var state_25870__$1 = state_25870;
var statearr_25886_25932 = state_25870__$1;
(statearr_25886_25932[(2)] = inst_25856);

(statearr_25886_25932[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25871 === (29))){
var inst_25840 = (state_25870[(2)]);
var state_25870__$1 = state_25870;
var statearr_25887_25933 = state_25870__$1;
(statearr_25887_25933[(2)] = inst_25840);

(statearr_25887_25933[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25871 === (6))){
var inst_25789 = (state_25870[(7)]);
var state_25870__$1 = state_25870;
var statearr_25888_25934 = state_25870__$1;
(statearr_25888_25934[(2)] = inst_25789);

(statearr_25888_25934[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25871 === (28))){
var inst_25836 = (state_25870[(2)]);
var inst_25837 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25838 = figwheel.client.heads_up.display_warning.call(null,inst_25837);
var state_25870__$1 = (function (){var statearr_25889 = state_25870;
(statearr_25889[(8)] = inst_25836);

return statearr_25889;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25870__$1,(29),inst_25838);
} else {
if((state_val_25871 === (25))){
var inst_25834 = figwheel.client.heads_up.clear.call(null);
var state_25870__$1 = state_25870;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25870__$1,(28),inst_25834);
} else {
if((state_val_25871 === (34))){
var inst_25851 = figwheel.client.heads_up.flash_loaded.call(null);
var state_25870__$1 = state_25870;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25870__$1,(37),inst_25851);
} else {
if((state_val_25871 === (17))){
var inst_25816 = (state_25870[(2)]);
var state_25870__$1 = state_25870;
var statearr_25890_25935 = state_25870__$1;
(statearr_25890_25935[(2)] = inst_25816);

(statearr_25890_25935[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25871 === (3))){
var inst_25806 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_25870__$1 = state_25870;
if(cljs.core.truth_(inst_25806)){
var statearr_25891_25936 = state_25870__$1;
(statearr_25891_25936[(1)] = (13));

} else {
var statearr_25892_25937 = state_25870__$1;
(statearr_25892_25937[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25871 === (12))){
var inst_25802 = (state_25870[(2)]);
var state_25870__$1 = state_25870;
var statearr_25893_25938 = state_25870__$1;
(statearr_25893_25938[(2)] = inst_25802);

(statearr_25893_25938[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25871 === (2))){
var inst_25789 = (state_25870[(7)]);
var inst_25789__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_25870__$1 = (function (){var statearr_25894 = state_25870;
(statearr_25894[(7)] = inst_25789__$1);

return statearr_25894;
})();
if(cljs.core.truth_(inst_25789__$1)){
var statearr_25895_25939 = state_25870__$1;
(statearr_25895_25939[(1)] = (5));

} else {
var statearr_25896_25940 = state_25870__$1;
(statearr_25896_25940[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25871 === (23))){
var inst_25832 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_25870__$1 = state_25870;
if(cljs.core.truth_(inst_25832)){
var statearr_25897_25941 = state_25870__$1;
(statearr_25897_25941[(1)] = (25));

} else {
var statearr_25898_25942 = state_25870__$1;
(statearr_25898_25942[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25871 === (35))){
var state_25870__$1 = state_25870;
var statearr_25899_25943 = state_25870__$1;
(statearr_25899_25943[(2)] = null);

(statearr_25899_25943[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25871 === (19))){
var inst_25827 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_25870__$1 = state_25870;
if(cljs.core.truth_(inst_25827)){
var statearr_25900_25944 = state_25870__$1;
(statearr_25900_25944[(1)] = (22));

} else {
var statearr_25901_25945 = state_25870__$1;
(statearr_25901_25945[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25871 === (11))){
var inst_25798 = (state_25870[(2)]);
var state_25870__$1 = state_25870;
var statearr_25902_25946 = state_25870__$1;
(statearr_25902_25946[(2)] = inst_25798);

(statearr_25902_25946[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25871 === (9))){
var inst_25800 = figwheel.client.heads_up.clear.call(null);
var state_25870__$1 = state_25870;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25870__$1,(12),inst_25800);
} else {
if((state_val_25871 === (5))){
var inst_25791 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_25870__$1 = state_25870;
var statearr_25903_25947 = state_25870__$1;
(statearr_25903_25947[(2)] = inst_25791);

(statearr_25903_25947[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25871 === (14))){
var inst_25818 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_25870__$1 = state_25870;
if(cljs.core.truth_(inst_25818)){
var statearr_25904_25948 = state_25870__$1;
(statearr_25904_25948[(1)] = (18));

} else {
var statearr_25905_25949 = state_25870__$1;
(statearr_25905_25949[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25871 === (26))){
var inst_25842 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_25870__$1 = state_25870;
if(cljs.core.truth_(inst_25842)){
var statearr_25906_25950 = state_25870__$1;
(statearr_25906_25950[(1)] = (30));

} else {
var statearr_25907_25951 = state_25870__$1;
(statearr_25907_25951[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25871 === (16))){
var inst_25810 = (state_25870[(2)]);
var inst_25811 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25812 = figwheel.client.format_messages.call(null,inst_25811);
var inst_25813 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25814 = figwheel.client.heads_up.display_error.call(null,inst_25812,inst_25813);
var state_25870__$1 = (function (){var statearr_25908 = state_25870;
(statearr_25908[(9)] = inst_25810);

return statearr_25908;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25870__$1,(17),inst_25814);
} else {
if((state_val_25871 === (30))){
var inst_25844 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25845 = figwheel.client.heads_up.display_warning.call(null,inst_25844);
var state_25870__$1 = state_25870;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25870__$1,(33),inst_25845);
} else {
if((state_val_25871 === (10))){
var inst_25804 = (state_25870[(2)]);
var state_25870__$1 = state_25870;
var statearr_25909_25952 = state_25870__$1;
(statearr_25909_25952[(2)] = inst_25804);

(statearr_25909_25952[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25871 === (18))){
var inst_25820 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25821 = figwheel.client.format_messages.call(null,inst_25820);
var inst_25822 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25823 = figwheel.client.heads_up.display_error.call(null,inst_25821,inst_25822);
var state_25870__$1 = state_25870;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25870__$1,(21),inst_25823);
} else {
if((state_val_25871 === (37))){
var inst_25853 = (state_25870[(2)]);
var state_25870__$1 = state_25870;
var statearr_25910_25953 = state_25870__$1;
(statearr_25910_25953[(2)] = inst_25853);

(statearr_25910_25953[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25871 === (8))){
var inst_25796 = figwheel.client.heads_up.flash_loaded.call(null);
var state_25870__$1 = state_25870;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25870__$1,(11),inst_25796);
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
});})(c__21223__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__21111__auto__,c__21223__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21112__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21112__auto____0 = (function (){
var statearr_25914 = [null,null,null,null,null,null,null,null,null,null];
(statearr_25914[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21112__auto__);

(statearr_25914[(1)] = (1));

return statearr_25914;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21112__auto____1 = (function (state_25870){
while(true){
var ret_value__21113__auto__ = (function (){try{while(true){
var result__21114__auto__ = switch__21111__auto__.call(null,state_25870);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21114__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21114__auto__;
}
break;
}
}catch (e25915){if((e25915 instanceof Object)){
var ex__21115__auto__ = e25915;
var statearr_25916_25954 = state_25870;
(statearr_25916_25954[(5)] = ex__21115__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25870);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25915;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25955 = state_25870;
state_25870 = G__25955;
continue;
} else {
return ret_value__21113__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21112__auto__ = function(state_25870){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21112__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21112__auto____1.call(this,state_25870);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21112__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21112__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21112__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21112__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21112__auto__;
})()
;})(switch__21111__auto__,c__21223__auto__,msg_hist,msg_names,msg))
})();
var state__21225__auto__ = (function (){var statearr_25917 = f__21224__auto__.call(null);
(statearr_25917[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21223__auto__);

return statearr_25917;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21225__auto__);
});})(c__21223__auto__,msg_hist,msg_names,msg))
);

return c__21223__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__21223__auto___26018 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21223__auto___26018,ch){
return (function (){
var f__21224__auto__ = (function (){var switch__21111__auto__ = ((function (c__21223__auto___26018,ch){
return (function (state_26001){
var state_val_26002 = (state_26001[(1)]);
if((state_val_26002 === (1))){
var state_26001__$1 = state_26001;
var statearr_26003_26019 = state_26001__$1;
(statearr_26003_26019[(2)] = null);

(statearr_26003_26019[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26002 === (2))){
var state_26001__$1 = state_26001;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26001__$1,(4),ch);
} else {
if((state_val_26002 === (3))){
var inst_25999 = (state_26001[(2)]);
var state_26001__$1 = state_26001;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26001__$1,inst_25999);
} else {
if((state_val_26002 === (4))){
var inst_25989 = (state_26001[(7)]);
var inst_25989__$1 = (state_26001[(2)]);
var state_26001__$1 = (function (){var statearr_26004 = state_26001;
(statearr_26004[(7)] = inst_25989__$1);

return statearr_26004;
})();
if(cljs.core.truth_(inst_25989__$1)){
var statearr_26005_26020 = state_26001__$1;
(statearr_26005_26020[(1)] = (5));

} else {
var statearr_26006_26021 = state_26001__$1;
(statearr_26006_26021[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26002 === (5))){
var inst_25989 = (state_26001[(7)]);
var inst_25991 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_25989);
var state_26001__$1 = state_26001;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26001__$1,(8),inst_25991);
} else {
if((state_val_26002 === (6))){
var state_26001__$1 = state_26001;
var statearr_26007_26022 = state_26001__$1;
(statearr_26007_26022[(2)] = null);

(statearr_26007_26022[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26002 === (7))){
var inst_25997 = (state_26001[(2)]);
var state_26001__$1 = state_26001;
var statearr_26008_26023 = state_26001__$1;
(statearr_26008_26023[(2)] = inst_25997);

(statearr_26008_26023[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26002 === (8))){
var inst_25993 = (state_26001[(2)]);
var state_26001__$1 = (function (){var statearr_26009 = state_26001;
(statearr_26009[(8)] = inst_25993);

return statearr_26009;
})();
var statearr_26010_26024 = state_26001__$1;
(statearr_26010_26024[(2)] = null);

(statearr_26010_26024[(1)] = (2));


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
});})(c__21223__auto___26018,ch))
;
return ((function (switch__21111__auto__,c__21223__auto___26018,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__21112__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__21112__auto____0 = (function (){
var statearr_26014 = [null,null,null,null,null,null,null,null,null];
(statearr_26014[(0)] = figwheel$client$heads_up_plugin_$_state_machine__21112__auto__);

(statearr_26014[(1)] = (1));

return statearr_26014;
});
var figwheel$client$heads_up_plugin_$_state_machine__21112__auto____1 = (function (state_26001){
while(true){
var ret_value__21113__auto__ = (function (){try{while(true){
var result__21114__auto__ = switch__21111__auto__.call(null,state_26001);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21114__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21114__auto__;
}
break;
}
}catch (e26015){if((e26015 instanceof Object)){
var ex__21115__auto__ = e26015;
var statearr_26016_26025 = state_26001;
(statearr_26016_26025[(5)] = ex__21115__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26001);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26015;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26026 = state_26001;
state_26001 = G__26026;
continue;
} else {
return ret_value__21113__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__21112__auto__ = function(state_26001){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__21112__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__21112__auto____1.call(this,state_26001);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__21112__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__21112__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__21112__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__21112__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__21112__auto__;
})()
;})(switch__21111__auto__,c__21223__auto___26018,ch))
})();
var state__21225__auto__ = (function (){var statearr_26017 = f__21224__auto__.call(null);
(statearr_26017[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21223__auto___26018);

return statearr_26017;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21225__auto__);
});})(c__21223__auto___26018,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__21223__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21223__auto__){
return (function (){
var f__21224__auto__ = (function (){var switch__21111__auto__ = ((function (c__21223__auto__){
return (function (state_26047){
var state_val_26048 = (state_26047[(1)]);
if((state_val_26048 === (1))){
var inst_26042 = cljs.core.async.timeout.call(null,(3000));
var state_26047__$1 = state_26047;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26047__$1,(2),inst_26042);
} else {
if((state_val_26048 === (2))){
var inst_26044 = (state_26047[(2)]);
var inst_26045 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_26047__$1 = (function (){var statearr_26049 = state_26047;
(statearr_26049[(7)] = inst_26044);

return statearr_26049;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26047__$1,inst_26045);
} else {
return null;
}
}
});})(c__21223__auto__))
;
return ((function (switch__21111__auto__,c__21223__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__21112__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__21112__auto____0 = (function (){
var statearr_26053 = [null,null,null,null,null,null,null,null];
(statearr_26053[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__21112__auto__);

(statearr_26053[(1)] = (1));

return statearr_26053;
});
var figwheel$client$enforce_project_plugin_$_state_machine__21112__auto____1 = (function (state_26047){
while(true){
var ret_value__21113__auto__ = (function (){try{while(true){
var result__21114__auto__ = switch__21111__auto__.call(null,state_26047);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21114__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21114__auto__;
}
break;
}
}catch (e26054){if((e26054 instanceof Object)){
var ex__21115__auto__ = e26054;
var statearr_26055_26057 = state_26047;
(statearr_26055_26057[(5)] = ex__21115__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26047);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26054;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26058 = state_26047;
state_26047 = G__26058;
continue;
} else {
return ret_value__21113__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__21112__auto__ = function(state_26047){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__21112__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__21112__auto____1.call(this,state_26047);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__21112__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__21112__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__21112__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__21112__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__21112__auto__;
})()
;})(switch__21111__auto__,c__21223__auto__))
})();
var state__21225__auto__ = (function (){var statearr_26056 = f__21224__auto__.call(null);
(statearr_26056[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21223__auto__);

return statearr_26056;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21225__auto__);
});})(c__21223__auto__))
);

return c__21223__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__26059){
var map__26066 = p__26059;
var map__26066__$1 = ((((!((map__26066 == null)))?((((map__26066.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26066.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26066):map__26066);
var ed = map__26066__$1;
var formatted_exception = cljs.core.get.call(null,map__26066__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__26066__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__26066__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__26068_26072 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__26069_26073 = null;
var count__26070_26074 = (0);
var i__26071_26075 = (0);
while(true){
if((i__26071_26075 < count__26070_26074)){
var msg_26076 = cljs.core._nth.call(null,chunk__26069_26073,i__26071_26075);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_26076);

var G__26077 = seq__26068_26072;
var G__26078 = chunk__26069_26073;
var G__26079 = count__26070_26074;
var G__26080 = (i__26071_26075 + (1));
seq__26068_26072 = G__26077;
chunk__26069_26073 = G__26078;
count__26070_26074 = G__26079;
i__26071_26075 = G__26080;
continue;
} else {
var temp__4657__auto___26081 = cljs.core.seq.call(null,seq__26068_26072);
if(temp__4657__auto___26081){
var seq__26068_26082__$1 = temp__4657__auto___26081;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26068_26082__$1)){
var c__19239__auto___26083 = cljs.core.chunk_first.call(null,seq__26068_26082__$1);
var G__26084 = cljs.core.chunk_rest.call(null,seq__26068_26082__$1);
var G__26085 = c__19239__auto___26083;
var G__26086 = cljs.core.count.call(null,c__19239__auto___26083);
var G__26087 = (0);
seq__26068_26072 = G__26084;
chunk__26069_26073 = G__26085;
count__26070_26074 = G__26086;
i__26071_26075 = G__26087;
continue;
} else {
var msg_26088 = cljs.core.first.call(null,seq__26068_26082__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_26088);

var G__26089 = cljs.core.next.call(null,seq__26068_26082__$1);
var G__26090 = null;
var G__26091 = (0);
var G__26092 = (0);
seq__26068_26072 = G__26089;
chunk__26069_26073 = G__26090;
count__26070_26074 = G__26091;
i__26071_26075 = G__26092;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__26093){
var map__26096 = p__26093;
var map__26096__$1 = ((((!((map__26096 == null)))?((((map__26096.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26096.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26096):map__26096);
var w = map__26096__$1;
var message = cljs.core.get.call(null,map__26096__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,true,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__18416__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__18416__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__18416__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__26104 = cljs.core.seq.call(null,plugins);
var chunk__26105 = null;
var count__26106 = (0);
var i__26107 = (0);
while(true){
if((i__26107 < count__26106)){
var vec__26108 = cljs.core._nth.call(null,chunk__26105,i__26107);
var k = cljs.core.nth.call(null,vec__26108,(0),null);
var plugin = cljs.core.nth.call(null,vec__26108,(1),null);
if(cljs.core.truth_(plugin)){
var pl_26110 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__26104,chunk__26105,count__26106,i__26107,pl_26110,vec__26108,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_26110.call(null,msg_hist);
});})(seq__26104,chunk__26105,count__26106,i__26107,pl_26110,vec__26108,k,plugin))
);
} else {
}

var G__26111 = seq__26104;
var G__26112 = chunk__26105;
var G__26113 = count__26106;
var G__26114 = (i__26107 + (1));
seq__26104 = G__26111;
chunk__26105 = G__26112;
count__26106 = G__26113;
i__26107 = G__26114;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__26104);
if(temp__4657__auto__){
var seq__26104__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26104__$1)){
var c__19239__auto__ = cljs.core.chunk_first.call(null,seq__26104__$1);
var G__26115 = cljs.core.chunk_rest.call(null,seq__26104__$1);
var G__26116 = c__19239__auto__;
var G__26117 = cljs.core.count.call(null,c__19239__auto__);
var G__26118 = (0);
seq__26104 = G__26115;
chunk__26105 = G__26116;
count__26106 = G__26117;
i__26107 = G__26118;
continue;
} else {
var vec__26109 = cljs.core.first.call(null,seq__26104__$1);
var k = cljs.core.nth.call(null,vec__26109,(0),null);
var plugin = cljs.core.nth.call(null,vec__26109,(1),null);
if(cljs.core.truth_(plugin)){
var pl_26119 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__26104,chunk__26105,count__26106,i__26107,pl_26119,vec__26109,k,plugin,seq__26104__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_26119.call(null,msg_hist);
});})(seq__26104,chunk__26105,count__26106,i__26107,pl_26119,vec__26109,k,plugin,seq__26104__$1,temp__4657__auto__))
);
} else {
}

var G__26120 = cljs.core.next.call(null,seq__26104__$1);
var G__26121 = null;
var G__26122 = (0);
var G__26123 = (0);
seq__26104 = G__26120;
chunk__26105 = G__26121;
count__26106 = G__26122;
i__26107 = G__26123;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args26124 = [];
var len__19499__auto___26127 = arguments.length;
var i__19500__auto___26128 = (0);
while(true){
if((i__19500__auto___26128 < len__19499__auto___26127)){
args26124.push((arguments[i__19500__auto___26128]));

var G__26129 = (i__19500__auto___26128 + (1));
i__19500__auto___26128 = G__26129;
continue;
} else {
}
break;
}

var G__26126 = args26124.length;
switch (G__26126) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26124.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;
figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__19506__auto__ = [];
var len__19499__auto___26135 = arguments.length;
var i__19500__auto___26136 = (0);
while(true){
if((i__19500__auto___26136 < len__19499__auto___26135)){
args__19506__auto__.push((arguments[i__19500__auto___26136]));

var G__26137 = (i__19500__auto___26136 + (1));
i__19500__auto___26136 = G__26137;
continue;
} else {
}
break;
}

var argseq__19507__auto__ = ((((0) < args__19506__auto__.length))?(new cljs.core.IndexedSeq(args__19506__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__19507__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__26132){
var map__26133 = p__26132;
var map__26133__$1 = ((((!((map__26133 == null)))?((((map__26133.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26133.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26133):map__26133);
var opts = map__26133__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq26131){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26131));
});

//# sourceMappingURL=client.js.map?rel=1490072960071