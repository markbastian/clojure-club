// Compiled by ClojureScript 1.9.495 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
figwheel.client._figwheel_version_ = "0.5.9";
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var args35571 = [];
var len__26332__auto___35574 = arguments.length;
var i__26333__auto___35575 = (0);
while(true){
if((i__26333__auto___35575 < len__26332__auto___35574)){
args35571.push((arguments[i__26333__auto___35575]));

var G__35576 = (i__26333__auto___35575 + (1));
i__26333__auto___35575 = G__35576;
continue;
} else {
}
break;
}

var G__35573 = args35571.length;
switch (G__35573) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args35571.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),args], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__26339__auto__ = [];
var len__26332__auto___35579 = arguments.length;
var i__26333__auto___35580 = (0);
while(true){
if((i__26333__auto___35580 < len__26332__auto___35579)){
args__26339__auto__.push((arguments[i__26333__auto___35580]));

var G__35581 = (i__26333__auto___35580 + (1));
i__26333__auto___35580 = G__35581;
continue;
} else {
}
break;
}

var argseq__26340__auto__ = ((((0) < args__26339__auto__.length))?(new cljs.core.IndexedSeq(args__26339__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__26340__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq35578){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35578));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__26339__auto__ = [];
var len__26332__auto___35583 = arguments.length;
var i__26333__auto___35584 = (0);
while(true){
if((i__26333__auto___35584 < len__26332__auto___35583)){
args__26339__auto__.push((arguments[i__26333__auto___35584]));

var G__35585 = (i__26333__auto___35584 + (1));
i__26333__auto___35584 = G__35585;
continue;
} else {
}
break;
}

var argseq__26340__auto__ = ((((0) < args__26339__auto__.length))?(new cljs.core.IndexedSeq(args__26339__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__26340__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq35582){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35582));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)")].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel autoloading "),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method. 
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if((b === true) || (b === false)){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 *   
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if((b === true) || (b === false)){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__35586){
var map__35589 = p__35586;
var map__35589__$1 = ((((!((map__35589 == null)))?((((map__35589.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35589.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35589):map__35589);
var message = cljs.core.get.call(null,map__35589__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__35589__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" : "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__25219__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__25219__auto__)){
return or__25219__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__25207__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__25207__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__25207__auto__;
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
var c__28113__auto___35751 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28113__auto___35751,ch){
return (function (){
var f__28114__auto__ = (function (){var switch__28001__auto__ = ((function (c__28113__auto___35751,ch){
return (function (state_35720){
var state_val_35721 = (state_35720[(1)]);
if((state_val_35721 === (7))){
var inst_35716 = (state_35720[(2)]);
var state_35720__$1 = state_35720;
var statearr_35722_35752 = state_35720__$1;
(statearr_35722_35752[(2)] = inst_35716);

(statearr_35722_35752[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35721 === (1))){
var state_35720__$1 = state_35720;
var statearr_35723_35753 = state_35720__$1;
(statearr_35723_35753[(2)] = null);

(statearr_35723_35753[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35721 === (4))){
var inst_35673 = (state_35720[(7)]);
var inst_35673__$1 = (state_35720[(2)]);
var state_35720__$1 = (function (){var statearr_35724 = state_35720;
(statearr_35724[(7)] = inst_35673__$1);

return statearr_35724;
})();
if(cljs.core.truth_(inst_35673__$1)){
var statearr_35725_35754 = state_35720__$1;
(statearr_35725_35754[(1)] = (5));

} else {
var statearr_35726_35755 = state_35720__$1;
(statearr_35726_35755[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35721 === (15))){
var inst_35680 = (state_35720[(8)]);
var inst_35695 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_35680);
var inst_35696 = cljs.core.first.call(null,inst_35695);
var inst_35697 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_35696);
var inst_35698 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Not loading code with warnings - "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_35697)].join('');
var inst_35699 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_35698);
var state_35720__$1 = state_35720;
var statearr_35727_35756 = state_35720__$1;
(statearr_35727_35756[(2)] = inst_35699);

(statearr_35727_35756[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35721 === (13))){
var inst_35704 = (state_35720[(2)]);
var state_35720__$1 = state_35720;
var statearr_35728_35757 = state_35720__$1;
(statearr_35728_35757[(2)] = inst_35704);

(statearr_35728_35757[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35721 === (6))){
var state_35720__$1 = state_35720;
var statearr_35729_35758 = state_35720__$1;
(statearr_35729_35758[(2)] = null);

(statearr_35729_35758[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35721 === (17))){
var inst_35702 = (state_35720[(2)]);
var state_35720__$1 = state_35720;
var statearr_35730_35759 = state_35720__$1;
(statearr_35730_35759[(2)] = inst_35702);

(statearr_35730_35759[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35721 === (3))){
var inst_35718 = (state_35720[(2)]);
var state_35720__$1 = state_35720;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35720__$1,inst_35718);
} else {
if((state_val_35721 === (12))){
var inst_35679 = (state_35720[(9)]);
var inst_35693 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_35679,opts);
var state_35720__$1 = state_35720;
if(cljs.core.truth_(inst_35693)){
var statearr_35731_35760 = state_35720__$1;
(statearr_35731_35760[(1)] = (15));

} else {
var statearr_35732_35761 = state_35720__$1;
(statearr_35732_35761[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35721 === (2))){
var state_35720__$1 = state_35720;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35720__$1,(4),ch);
} else {
if((state_val_35721 === (11))){
var inst_35680 = (state_35720[(8)]);
var inst_35685 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_35686 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_35680);
var inst_35687 = cljs.core.async.timeout.call(null,(1000));
var inst_35688 = [inst_35686,inst_35687];
var inst_35689 = (new cljs.core.PersistentVector(null,2,(5),inst_35685,inst_35688,null));
var state_35720__$1 = state_35720;
return cljs.core.async.ioc_alts_BANG_.call(null,state_35720__$1,(14),inst_35689);
} else {
if((state_val_35721 === (9))){
var inst_35680 = (state_35720[(8)]);
var inst_35706 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_35707 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_35680);
var inst_35708 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_35707);
var inst_35709 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Not loading: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_35708)].join('');
var inst_35710 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_35709);
var state_35720__$1 = (function (){var statearr_35733 = state_35720;
(statearr_35733[(10)] = inst_35706);

return statearr_35733;
})();
var statearr_35734_35762 = state_35720__$1;
(statearr_35734_35762[(2)] = inst_35710);

(statearr_35734_35762[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35721 === (5))){
var inst_35673 = (state_35720[(7)]);
var inst_35675 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_35676 = (new cljs.core.PersistentArrayMap(null,2,inst_35675,null));
var inst_35677 = (new cljs.core.PersistentHashSet(null,inst_35676,null));
var inst_35678 = figwheel.client.focus_msgs.call(null,inst_35677,inst_35673);
var inst_35679 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_35678);
var inst_35680 = cljs.core.first.call(null,inst_35678);
var inst_35681 = figwheel.client.autoload_QMARK_.call(null);
var state_35720__$1 = (function (){var statearr_35735 = state_35720;
(statearr_35735[(9)] = inst_35679);

(statearr_35735[(8)] = inst_35680);

return statearr_35735;
})();
if(cljs.core.truth_(inst_35681)){
var statearr_35736_35763 = state_35720__$1;
(statearr_35736_35763[(1)] = (8));

} else {
var statearr_35737_35764 = state_35720__$1;
(statearr_35737_35764[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35721 === (14))){
var inst_35691 = (state_35720[(2)]);
var state_35720__$1 = state_35720;
var statearr_35738_35765 = state_35720__$1;
(statearr_35738_35765[(2)] = inst_35691);

(statearr_35738_35765[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35721 === (16))){
var state_35720__$1 = state_35720;
var statearr_35739_35766 = state_35720__$1;
(statearr_35739_35766[(2)] = null);

(statearr_35739_35766[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35721 === (10))){
var inst_35712 = (state_35720[(2)]);
var state_35720__$1 = (function (){var statearr_35740 = state_35720;
(statearr_35740[(11)] = inst_35712);

return statearr_35740;
})();
var statearr_35741_35767 = state_35720__$1;
(statearr_35741_35767[(2)] = null);

(statearr_35741_35767[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35721 === (8))){
var inst_35679 = (state_35720[(9)]);
var inst_35683 = figwheel.client.reload_file_state_QMARK_.call(null,inst_35679,opts);
var state_35720__$1 = state_35720;
if(cljs.core.truth_(inst_35683)){
var statearr_35742_35768 = state_35720__$1;
(statearr_35742_35768[(1)] = (11));

} else {
var statearr_35743_35769 = state_35720__$1;
(statearr_35743_35769[(1)] = (12));

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
});})(c__28113__auto___35751,ch))
;
return ((function (switch__28001__auto__,c__28113__auto___35751,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__28002__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__28002__auto____0 = (function (){
var statearr_35747 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35747[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__28002__auto__);

(statearr_35747[(1)] = (1));

return statearr_35747;
});
var figwheel$client$file_reloader_plugin_$_state_machine__28002__auto____1 = (function (state_35720){
while(true){
var ret_value__28003__auto__ = (function (){try{while(true){
var result__28004__auto__ = switch__28001__auto__.call(null,state_35720);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28004__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28004__auto__;
}
break;
}
}catch (e35748){if((e35748 instanceof Object)){
var ex__28005__auto__ = e35748;
var statearr_35749_35770 = state_35720;
(statearr_35749_35770[(5)] = ex__28005__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35720);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35748;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28003__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35771 = state_35720;
state_35720 = G__35771;
continue;
} else {
return ret_value__28003__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__28002__auto__ = function(state_35720){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__28002__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__28002__auto____1.call(this,state_35720);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__28002__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__28002__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__28002__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__28002__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__28002__auto__;
})()
;})(switch__28001__auto__,c__28113__auto___35751,ch))
})();
var state__28115__auto__ = (function (){var statearr_35750 = f__28114__auto__.call(null);
(statearr_35750[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28113__auto___35751);

return statearr_35750;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28115__auto__);
});})(c__28113__auto___35751,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__35772_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__35772_SHARP_));
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
var base_path_35775 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_35775){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e35774){if((e35774 instanceof Error)){
var e = e35774;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_35775], null));
} else {
var e = e35774;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_35775))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__35776){
var map__35785 = p__35776;
var map__35785__$1 = ((((!((map__35785 == null)))?((((map__35785.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35785.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35785):map__35785);
var opts = map__35785__$1;
var build_id = cljs.core.get.call(null,map__35785__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__35785,map__35785__$1,opts,build_id){
return (function (p__35787){
var vec__35788 = p__35787;
var seq__35789 = cljs.core.seq.call(null,vec__35788);
var first__35790 = cljs.core.first.call(null,seq__35789);
var seq__35789__$1 = cljs.core.next.call(null,seq__35789);
var map__35791 = first__35790;
var map__35791__$1 = ((((!((map__35791 == null)))?((((map__35791.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35791.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35791):map__35791);
var msg = map__35791__$1;
var msg_name = cljs.core.get.call(null,map__35791__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__35789__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__35788,seq__35789,first__35790,seq__35789__$1,map__35791,map__35791__$1,msg,msg_name,_,map__35785,map__35785__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__35788,seq__35789,first__35790,seq__35789__$1,map__35791,map__35791__$1,msg,msg_name,_,map__35785,map__35785__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__35785,map__35785__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__35799){
var vec__35800 = p__35799;
var seq__35801 = cljs.core.seq.call(null,vec__35800);
var first__35802 = cljs.core.first.call(null,seq__35801);
var seq__35801__$1 = cljs.core.next.call(null,seq__35801);
var map__35803 = first__35802;
var map__35803__$1 = ((((!((map__35803 == null)))?((((map__35803.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35803.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35803):map__35803);
var msg = map__35803__$1;
var msg_name = cljs.core.get.call(null,map__35803__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__35801__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__35805){
var map__35817 = p__35805;
var map__35817__$1 = ((((!((map__35817 == null)))?((((map__35817.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35817.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35817):map__35817);
var on_compile_warning = cljs.core.get.call(null,map__35817__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__35817__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__35817,map__35817__$1,on_compile_warning,on_compile_fail){
return (function (p__35819){
var vec__35820 = p__35819;
var seq__35821 = cljs.core.seq.call(null,vec__35820);
var first__35822 = cljs.core.first.call(null,seq__35821);
var seq__35821__$1 = cljs.core.next.call(null,seq__35821);
var map__35823 = first__35822;
var map__35823__$1 = ((((!((map__35823 == null)))?((((map__35823.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35823.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35823):map__35823);
var msg = map__35823__$1;
var msg_name = cljs.core.get.call(null,map__35823__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__35821__$1;
var pred__35825 = cljs.core._EQ_;
var expr__35826 = msg_name;
if(cljs.core.truth_(pred__35825.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__35826))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__35825.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__35826))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__35817,map__35817__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__28113__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28113__auto__,msg_hist,msg_names,msg){
return (function (){
var f__28114__auto__ = (function (){var switch__28001__auto__ = ((function (c__28113__auto__,msg_hist,msg_names,msg){
return (function (state_36054){
var state_val_36055 = (state_36054[(1)]);
if((state_val_36055 === (7))){
var inst_35974 = (state_36054[(2)]);
var state_36054__$1 = state_36054;
if(cljs.core.truth_(inst_35974)){
var statearr_36056_36106 = state_36054__$1;
(statearr_36056_36106[(1)] = (8));

} else {
var statearr_36057_36107 = state_36054__$1;
(statearr_36057_36107[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36055 === (20))){
var inst_36048 = (state_36054[(2)]);
var state_36054__$1 = state_36054;
var statearr_36058_36108 = state_36054__$1;
(statearr_36058_36108[(2)] = inst_36048);

(statearr_36058_36108[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36055 === (27))){
var inst_36044 = (state_36054[(2)]);
var state_36054__$1 = state_36054;
var statearr_36059_36109 = state_36054__$1;
(statearr_36059_36109[(2)] = inst_36044);

(statearr_36059_36109[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36055 === (1))){
var inst_35967 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_36054__$1 = state_36054;
if(cljs.core.truth_(inst_35967)){
var statearr_36060_36110 = state_36054__$1;
(statearr_36060_36110[(1)] = (2));

} else {
var statearr_36061_36111 = state_36054__$1;
(statearr_36061_36111[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36055 === (24))){
var inst_36046 = (state_36054[(2)]);
var state_36054__$1 = state_36054;
var statearr_36062_36112 = state_36054__$1;
(statearr_36062_36112[(2)] = inst_36046);

(statearr_36062_36112[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36055 === (4))){
var inst_36052 = (state_36054[(2)]);
var state_36054__$1 = state_36054;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36054__$1,inst_36052);
} else {
if((state_val_36055 === (15))){
var inst_36050 = (state_36054[(2)]);
var state_36054__$1 = state_36054;
var statearr_36063_36113 = state_36054__$1;
(statearr_36063_36113[(2)] = inst_36050);

(statearr_36063_36113[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36055 === (21))){
var inst_36003 = (state_36054[(2)]);
var inst_36004 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36005 = figwheel.client.auto_jump_to_error.call(null,opts,inst_36004);
var state_36054__$1 = (function (){var statearr_36064 = state_36054;
(statearr_36064[(7)] = inst_36003);

return statearr_36064;
})();
var statearr_36065_36114 = state_36054__$1;
(statearr_36065_36114[(2)] = inst_36005);

(statearr_36065_36114[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36055 === (31))){
var inst_36033 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_36054__$1 = state_36054;
if(cljs.core.truth_(inst_36033)){
var statearr_36066_36115 = state_36054__$1;
(statearr_36066_36115[(1)] = (34));

} else {
var statearr_36067_36116 = state_36054__$1;
(statearr_36067_36116[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36055 === (32))){
var inst_36042 = (state_36054[(2)]);
var state_36054__$1 = state_36054;
var statearr_36068_36117 = state_36054__$1;
(statearr_36068_36117[(2)] = inst_36042);

(statearr_36068_36117[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36055 === (33))){
var inst_36029 = (state_36054[(2)]);
var inst_36030 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36031 = figwheel.client.auto_jump_to_error.call(null,opts,inst_36030);
var state_36054__$1 = (function (){var statearr_36069 = state_36054;
(statearr_36069[(8)] = inst_36029);

return statearr_36069;
})();
var statearr_36070_36118 = state_36054__$1;
(statearr_36070_36118[(2)] = inst_36031);

(statearr_36070_36118[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36055 === (13))){
var inst_35988 = figwheel.client.heads_up.clear.call(null);
var state_36054__$1 = state_36054;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36054__$1,(16),inst_35988);
} else {
if((state_val_36055 === (22))){
var inst_36009 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36010 = figwheel.client.heads_up.append_warning_message.call(null,inst_36009);
var state_36054__$1 = state_36054;
var statearr_36071_36119 = state_36054__$1;
(statearr_36071_36119[(2)] = inst_36010);

(statearr_36071_36119[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36055 === (36))){
var inst_36040 = (state_36054[(2)]);
var state_36054__$1 = state_36054;
var statearr_36072_36120 = state_36054__$1;
(statearr_36072_36120[(2)] = inst_36040);

(statearr_36072_36120[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36055 === (29))){
var inst_36020 = (state_36054[(2)]);
var inst_36021 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36022 = figwheel.client.auto_jump_to_error.call(null,opts,inst_36021);
var state_36054__$1 = (function (){var statearr_36073 = state_36054;
(statearr_36073[(9)] = inst_36020);

return statearr_36073;
})();
var statearr_36074_36121 = state_36054__$1;
(statearr_36074_36121[(2)] = inst_36022);

(statearr_36074_36121[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36055 === (6))){
var inst_35969 = (state_36054[(10)]);
var state_36054__$1 = state_36054;
var statearr_36075_36122 = state_36054__$1;
(statearr_36075_36122[(2)] = inst_35969);

(statearr_36075_36122[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36055 === (28))){
var inst_36016 = (state_36054[(2)]);
var inst_36017 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36018 = figwheel.client.heads_up.display_warning.call(null,inst_36017);
var state_36054__$1 = (function (){var statearr_36076 = state_36054;
(statearr_36076[(11)] = inst_36016);

return statearr_36076;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36054__$1,(29),inst_36018);
} else {
if((state_val_36055 === (25))){
var inst_36014 = figwheel.client.heads_up.clear.call(null);
var state_36054__$1 = state_36054;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36054__$1,(28),inst_36014);
} else {
if((state_val_36055 === (34))){
var inst_36035 = figwheel.client.heads_up.flash_loaded.call(null);
var state_36054__$1 = state_36054;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36054__$1,(37),inst_36035);
} else {
if((state_val_36055 === (17))){
var inst_35994 = (state_36054[(2)]);
var inst_35995 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35996 = figwheel.client.auto_jump_to_error.call(null,opts,inst_35995);
var state_36054__$1 = (function (){var statearr_36077 = state_36054;
(statearr_36077[(12)] = inst_35994);

return statearr_36077;
})();
var statearr_36078_36123 = state_36054__$1;
(statearr_36078_36123[(2)] = inst_35996);

(statearr_36078_36123[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36055 === (3))){
var inst_35986 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_36054__$1 = state_36054;
if(cljs.core.truth_(inst_35986)){
var statearr_36079_36124 = state_36054__$1;
(statearr_36079_36124[(1)] = (13));

} else {
var statearr_36080_36125 = state_36054__$1;
(statearr_36080_36125[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36055 === (12))){
var inst_35982 = (state_36054[(2)]);
var state_36054__$1 = state_36054;
var statearr_36081_36126 = state_36054__$1;
(statearr_36081_36126[(2)] = inst_35982);

(statearr_36081_36126[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36055 === (2))){
var inst_35969 = (state_36054[(10)]);
var inst_35969__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_36054__$1 = (function (){var statearr_36082 = state_36054;
(statearr_36082[(10)] = inst_35969__$1);

return statearr_36082;
})();
if(cljs.core.truth_(inst_35969__$1)){
var statearr_36083_36127 = state_36054__$1;
(statearr_36083_36127[(1)] = (5));

} else {
var statearr_36084_36128 = state_36054__$1;
(statearr_36084_36128[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36055 === (23))){
var inst_36012 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_36054__$1 = state_36054;
if(cljs.core.truth_(inst_36012)){
var statearr_36085_36129 = state_36054__$1;
(statearr_36085_36129[(1)] = (25));

} else {
var statearr_36086_36130 = state_36054__$1;
(statearr_36086_36130[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36055 === (35))){
var state_36054__$1 = state_36054;
var statearr_36087_36131 = state_36054__$1;
(statearr_36087_36131[(2)] = null);

(statearr_36087_36131[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36055 === (19))){
var inst_36007 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_36054__$1 = state_36054;
if(cljs.core.truth_(inst_36007)){
var statearr_36088_36132 = state_36054__$1;
(statearr_36088_36132[(1)] = (22));

} else {
var statearr_36089_36133 = state_36054__$1;
(statearr_36089_36133[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36055 === (11))){
var inst_35978 = (state_36054[(2)]);
var state_36054__$1 = state_36054;
var statearr_36090_36134 = state_36054__$1;
(statearr_36090_36134[(2)] = inst_35978);

(statearr_36090_36134[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36055 === (9))){
var inst_35980 = figwheel.client.heads_up.clear.call(null);
var state_36054__$1 = state_36054;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36054__$1,(12),inst_35980);
} else {
if((state_val_36055 === (5))){
var inst_35971 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_36054__$1 = state_36054;
var statearr_36091_36135 = state_36054__$1;
(statearr_36091_36135[(2)] = inst_35971);

(statearr_36091_36135[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36055 === (14))){
var inst_35998 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_36054__$1 = state_36054;
if(cljs.core.truth_(inst_35998)){
var statearr_36092_36136 = state_36054__$1;
(statearr_36092_36136[(1)] = (18));

} else {
var statearr_36093_36137 = state_36054__$1;
(statearr_36093_36137[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36055 === (26))){
var inst_36024 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_36054__$1 = state_36054;
if(cljs.core.truth_(inst_36024)){
var statearr_36094_36138 = state_36054__$1;
(statearr_36094_36138[(1)] = (30));

} else {
var statearr_36095_36139 = state_36054__$1;
(statearr_36095_36139[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36055 === (16))){
var inst_35990 = (state_36054[(2)]);
var inst_35991 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35992 = figwheel.client.heads_up.display_exception.call(null,inst_35991);
var state_36054__$1 = (function (){var statearr_36096 = state_36054;
(statearr_36096[(13)] = inst_35990);

return statearr_36096;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36054__$1,(17),inst_35992);
} else {
if((state_val_36055 === (30))){
var inst_36026 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36027 = figwheel.client.heads_up.display_warning.call(null,inst_36026);
var state_36054__$1 = state_36054;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36054__$1,(33),inst_36027);
} else {
if((state_val_36055 === (10))){
var inst_35984 = (state_36054[(2)]);
var state_36054__$1 = state_36054;
var statearr_36097_36140 = state_36054__$1;
(statearr_36097_36140[(2)] = inst_35984);

(statearr_36097_36140[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36055 === (18))){
var inst_36000 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36001 = figwheel.client.heads_up.display_exception.call(null,inst_36000);
var state_36054__$1 = state_36054;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36054__$1,(21),inst_36001);
} else {
if((state_val_36055 === (37))){
var inst_36037 = (state_36054[(2)]);
var state_36054__$1 = state_36054;
var statearr_36098_36141 = state_36054__$1;
(statearr_36098_36141[(2)] = inst_36037);

(statearr_36098_36141[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36055 === (8))){
var inst_35976 = figwheel.client.heads_up.flash_loaded.call(null);
var state_36054__$1 = state_36054;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36054__$1,(11),inst_35976);
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
});})(c__28113__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__28001__auto__,c__28113__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28002__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28002__auto____0 = (function (){
var statearr_36102 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36102[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28002__auto__);

(statearr_36102[(1)] = (1));

return statearr_36102;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28002__auto____1 = (function (state_36054){
while(true){
var ret_value__28003__auto__ = (function (){try{while(true){
var result__28004__auto__ = switch__28001__auto__.call(null,state_36054);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28004__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28004__auto__;
}
break;
}
}catch (e36103){if((e36103 instanceof Object)){
var ex__28005__auto__ = e36103;
var statearr_36104_36142 = state_36054;
(statearr_36104_36142[(5)] = ex__28005__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36054);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36103;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28003__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36143 = state_36054;
state_36054 = G__36143;
continue;
} else {
return ret_value__28003__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28002__auto__ = function(state_36054){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28002__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28002__auto____1.call(this,state_36054);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28002__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28002__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28002__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28002__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28002__auto__;
})()
;})(switch__28001__auto__,c__28113__auto__,msg_hist,msg_names,msg))
})();
var state__28115__auto__ = (function (){var statearr_36105 = f__28114__auto__.call(null);
(statearr_36105[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28113__auto__);

return statearr_36105;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28115__auto__);
});})(c__28113__auto__,msg_hist,msg_names,msg))
);

return c__28113__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__28113__auto___36206 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28113__auto___36206,ch){
return (function (){
var f__28114__auto__ = (function (){var switch__28001__auto__ = ((function (c__28113__auto___36206,ch){
return (function (state_36189){
var state_val_36190 = (state_36189[(1)]);
if((state_val_36190 === (1))){
var state_36189__$1 = state_36189;
var statearr_36191_36207 = state_36189__$1;
(statearr_36191_36207[(2)] = null);

(statearr_36191_36207[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36190 === (2))){
var state_36189__$1 = state_36189;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36189__$1,(4),ch);
} else {
if((state_val_36190 === (3))){
var inst_36187 = (state_36189[(2)]);
var state_36189__$1 = state_36189;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36189__$1,inst_36187);
} else {
if((state_val_36190 === (4))){
var inst_36177 = (state_36189[(7)]);
var inst_36177__$1 = (state_36189[(2)]);
var state_36189__$1 = (function (){var statearr_36192 = state_36189;
(statearr_36192[(7)] = inst_36177__$1);

return statearr_36192;
})();
if(cljs.core.truth_(inst_36177__$1)){
var statearr_36193_36208 = state_36189__$1;
(statearr_36193_36208[(1)] = (5));

} else {
var statearr_36194_36209 = state_36189__$1;
(statearr_36194_36209[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36190 === (5))){
var inst_36177 = (state_36189[(7)]);
var inst_36179 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_36177);
var state_36189__$1 = state_36189;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36189__$1,(8),inst_36179);
} else {
if((state_val_36190 === (6))){
var state_36189__$1 = state_36189;
var statearr_36195_36210 = state_36189__$1;
(statearr_36195_36210[(2)] = null);

(statearr_36195_36210[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36190 === (7))){
var inst_36185 = (state_36189[(2)]);
var state_36189__$1 = state_36189;
var statearr_36196_36211 = state_36189__$1;
(statearr_36196_36211[(2)] = inst_36185);

(statearr_36196_36211[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36190 === (8))){
var inst_36181 = (state_36189[(2)]);
var state_36189__$1 = (function (){var statearr_36197 = state_36189;
(statearr_36197[(8)] = inst_36181);

return statearr_36197;
})();
var statearr_36198_36212 = state_36189__$1;
(statearr_36198_36212[(2)] = null);

(statearr_36198_36212[(1)] = (2));


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
});})(c__28113__auto___36206,ch))
;
return ((function (switch__28001__auto__,c__28113__auto___36206,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__28002__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__28002__auto____0 = (function (){
var statearr_36202 = [null,null,null,null,null,null,null,null,null];
(statearr_36202[(0)] = figwheel$client$heads_up_plugin_$_state_machine__28002__auto__);

(statearr_36202[(1)] = (1));

return statearr_36202;
});
var figwheel$client$heads_up_plugin_$_state_machine__28002__auto____1 = (function (state_36189){
while(true){
var ret_value__28003__auto__ = (function (){try{while(true){
var result__28004__auto__ = switch__28001__auto__.call(null,state_36189);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28004__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28004__auto__;
}
break;
}
}catch (e36203){if((e36203 instanceof Object)){
var ex__28005__auto__ = e36203;
var statearr_36204_36213 = state_36189;
(statearr_36204_36213[(5)] = ex__28005__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36189);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36203;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28003__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36214 = state_36189;
state_36189 = G__36214;
continue;
} else {
return ret_value__28003__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__28002__auto__ = function(state_36189){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__28002__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__28002__auto____1.call(this,state_36189);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__28002__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__28002__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__28002__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__28002__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__28002__auto__;
})()
;})(switch__28001__auto__,c__28113__auto___36206,ch))
})();
var state__28115__auto__ = (function (){var statearr_36205 = f__28114__auto__.call(null);
(statearr_36205[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28113__auto___36206);

return statearr_36205;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28115__auto__);
});})(c__28113__auto___36206,ch))
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
var c__28113__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28113__auto__){
return (function (){
var f__28114__auto__ = (function (){var switch__28001__auto__ = ((function (c__28113__auto__){
return (function (state_36235){
var state_val_36236 = (state_36235[(1)]);
if((state_val_36236 === (1))){
var inst_36230 = cljs.core.async.timeout.call(null,(3000));
var state_36235__$1 = state_36235;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36235__$1,(2),inst_36230);
} else {
if((state_val_36236 === (2))){
var inst_36232 = (state_36235[(2)]);
var inst_36233 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_36235__$1 = (function (){var statearr_36237 = state_36235;
(statearr_36237[(7)] = inst_36232);

return statearr_36237;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36235__$1,inst_36233);
} else {
return null;
}
}
});})(c__28113__auto__))
;
return ((function (switch__28001__auto__,c__28113__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__28002__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__28002__auto____0 = (function (){
var statearr_36241 = [null,null,null,null,null,null,null,null];
(statearr_36241[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__28002__auto__);

(statearr_36241[(1)] = (1));

return statearr_36241;
});
var figwheel$client$enforce_project_plugin_$_state_machine__28002__auto____1 = (function (state_36235){
while(true){
var ret_value__28003__auto__ = (function (){try{while(true){
var result__28004__auto__ = switch__28001__auto__.call(null,state_36235);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28004__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28004__auto__;
}
break;
}
}catch (e36242){if((e36242 instanceof Object)){
var ex__28005__auto__ = e36242;
var statearr_36243_36245 = state_36235;
(statearr_36243_36245[(5)] = ex__28005__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36235);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36242;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28003__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36246 = state_36235;
state_36235 = G__36246;
continue;
} else {
return ret_value__28003__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__28002__auto__ = function(state_36235){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__28002__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__28002__auto____1.call(this,state_36235);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__28002__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__28002__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__28002__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__28002__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__28002__auto__;
})()
;})(switch__28001__auto__,c__28113__auto__))
})();
var state__28115__auto__ = (function (){var statearr_36244 = f__28114__auto__.call(null);
(statearr_36244[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28113__auto__);

return statearr_36244;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28115__auto__);
});})(c__28113__auto__))
);

return c__28113__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__4657__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__4657__auto__)){
var figwheel_version = temp__4657__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__28113__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28113__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__28114__auto__ = (function (){var switch__28001__auto__ = ((function (c__28113__auto__,figwheel_version,temp__4657__auto__){
return (function (state_36269){
var state_val_36270 = (state_36269[(1)]);
if((state_val_36270 === (1))){
var inst_36263 = cljs.core.async.timeout.call(null,(2000));
var state_36269__$1 = state_36269;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36269__$1,(2),inst_36263);
} else {
if((state_val_36270 === (2))){
var inst_36265 = (state_36269[(2)]);
var inst_36266 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel Client Version <strong>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</strong> is not equal to "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel Sidecar Version <strong>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</strong>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(".  Shutting down Websocket Connection!"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<h4>To fix try:</h4>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>")].join('');
var inst_36267 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_36266);
var state_36269__$1 = (function (){var statearr_36271 = state_36269;
(statearr_36271[(7)] = inst_36265);

return statearr_36271;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36269__$1,inst_36267);
} else {
return null;
}
}
});})(c__28113__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__28001__auto__,c__28113__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28002__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28002__auto____0 = (function (){
var statearr_36275 = [null,null,null,null,null,null,null,null];
(statearr_36275[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28002__auto__);

(statearr_36275[(1)] = (1));

return statearr_36275;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28002__auto____1 = (function (state_36269){
while(true){
var ret_value__28003__auto__ = (function (){try{while(true){
var result__28004__auto__ = switch__28001__auto__.call(null,state_36269);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28004__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28004__auto__;
}
break;
}
}catch (e36276){if((e36276 instanceof Object)){
var ex__28005__auto__ = e36276;
var statearr_36277_36279 = state_36269;
(statearr_36277_36279[(5)] = ex__28005__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36269);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36276;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28003__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36280 = state_36269;
state_36269 = G__36280;
continue;
} else {
return ret_value__28003__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28002__auto__ = function(state_36269){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28002__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28002__auto____1.call(this,state_36269);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28002__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28002__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28002__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28002__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28002__auto__;
})()
;})(switch__28001__auto__,c__28113__auto__,figwheel_version,temp__4657__auto__))
})();
var state__28115__auto__ = (function (){var statearr_36278 = f__28114__auto__.call(null);
(statearr_36278[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28113__auto__);

return statearr_36278;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28115__auto__);
});})(c__28113__auto__,figwheel_version,temp__4657__auto__))
);

return c__28113__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__36281){
var map__36285 = p__36281;
var map__36285__$1 = ((((!((map__36285 == null)))?((((map__36285.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36285.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36285):map__36285);
var file = cljs.core.get.call(null,map__36285__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__36285__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__36285__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__36287 = "";
var G__36287__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__36287),cljs.core.str.cljs$core$IFn$_invoke$arity$1("file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__36287);
var G__36287__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__36287__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" at line "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__36287__$1);
if(cljs.core.truth_((function (){var and__25207__auto__ = line;
if(cljs.core.truth_(and__25207__auto__)){
return column;
} else {
return and__25207__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__36287__$2),cljs.core.str.cljs$core$IFn$_invoke$arity$1(", column "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__36287__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__36288){
var map__36295 = p__36288;
var map__36295__$1 = ((((!((map__36295 == null)))?((((map__36295.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36295.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36295):map__36295);
var ed = map__36295__$1;
var formatted_exception = cljs.core.get.call(null,map__36295__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__36295__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__36295__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__36297_36301 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__36298_36302 = null;
var count__36299_36303 = (0);
var i__36300_36304 = (0);
while(true){
if((i__36300_36304 < count__36299_36303)){
var msg_36305 = cljs.core._nth.call(null,chunk__36298_36302,i__36300_36304);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_36305);

var G__36306 = seq__36297_36301;
var G__36307 = chunk__36298_36302;
var G__36308 = count__36299_36303;
var G__36309 = (i__36300_36304 + (1));
seq__36297_36301 = G__36306;
chunk__36298_36302 = G__36307;
count__36299_36303 = G__36308;
i__36300_36304 = G__36309;
continue;
} else {
var temp__4657__auto___36310 = cljs.core.seq.call(null,seq__36297_36301);
if(temp__4657__auto___36310){
var seq__36297_36311__$1 = temp__4657__auto___36310;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36297_36311__$1)){
var c__26038__auto___36312 = cljs.core.chunk_first.call(null,seq__36297_36311__$1);
var G__36313 = cljs.core.chunk_rest.call(null,seq__36297_36311__$1);
var G__36314 = c__26038__auto___36312;
var G__36315 = cljs.core.count.call(null,c__26038__auto___36312);
var G__36316 = (0);
seq__36297_36301 = G__36313;
chunk__36298_36302 = G__36314;
count__36299_36303 = G__36315;
i__36300_36304 = G__36316;
continue;
} else {
var msg_36317 = cljs.core.first.call(null,seq__36297_36311__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_36317);

var G__36318 = cljs.core.next.call(null,seq__36297_36311__$1);
var G__36319 = null;
var G__36320 = (0);
var G__36321 = (0);
seq__36297_36301 = G__36318;
chunk__36298_36302 = G__36319;
count__36299_36303 = G__36320;
i__36300_36304 = G__36321;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Error on "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__36322){
var map__36325 = p__36322;
var map__36325__$1 = ((((!((map__36325 == null)))?((((map__36325.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36325.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36325):map__36325);
var w = map__36325__$1;
var message = cljs.core.get.call(null,map__36325__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Compile Warning - "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" in "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,message))].join(''));

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
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"src/main/resources/public/js/compiled/out/figwheel/client.cljs",33,1,357,357,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"src/main/resources/public/js/compiled/out/figwheel/client.cljs",30,1,349,349,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("ws://"),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/figwheel-ws")].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__25207__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__25207__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__25207__auto__;
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
var seq__36337 = cljs.core.seq.call(null,plugins);
var chunk__36338 = null;
var count__36339 = (0);
var i__36340 = (0);
while(true){
if((i__36340 < count__36339)){
var vec__36341 = cljs.core._nth.call(null,chunk__36338,i__36340);
var k = cljs.core.nth.call(null,vec__36341,(0),null);
var plugin = cljs.core.nth.call(null,vec__36341,(1),null);
if(cljs.core.truth_(plugin)){
var pl_36347 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__36337,chunk__36338,count__36339,i__36340,pl_36347,vec__36341,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_36347.call(null,msg_hist);
});})(seq__36337,chunk__36338,count__36339,i__36340,pl_36347,vec__36341,k,plugin))
);
} else {
}

var G__36348 = seq__36337;
var G__36349 = chunk__36338;
var G__36350 = count__36339;
var G__36351 = (i__36340 + (1));
seq__36337 = G__36348;
chunk__36338 = G__36349;
count__36339 = G__36350;
i__36340 = G__36351;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__36337);
if(temp__4657__auto__){
var seq__36337__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36337__$1)){
var c__26038__auto__ = cljs.core.chunk_first.call(null,seq__36337__$1);
var G__36352 = cljs.core.chunk_rest.call(null,seq__36337__$1);
var G__36353 = c__26038__auto__;
var G__36354 = cljs.core.count.call(null,c__26038__auto__);
var G__36355 = (0);
seq__36337 = G__36352;
chunk__36338 = G__36353;
count__36339 = G__36354;
i__36340 = G__36355;
continue;
} else {
var vec__36344 = cljs.core.first.call(null,seq__36337__$1);
var k = cljs.core.nth.call(null,vec__36344,(0),null);
var plugin = cljs.core.nth.call(null,vec__36344,(1),null);
if(cljs.core.truth_(plugin)){
var pl_36356 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__36337,chunk__36338,count__36339,i__36340,pl_36356,vec__36344,k,plugin,seq__36337__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_36356.call(null,msg_hist);
});})(seq__36337,chunk__36338,count__36339,i__36340,pl_36356,vec__36344,k,plugin,seq__36337__$1,temp__4657__auto__))
);
} else {
}

var G__36357 = cljs.core.next.call(null,seq__36337__$1);
var G__36358 = null;
var G__36359 = (0);
var G__36360 = (0);
seq__36337 = G__36357;
chunk__36338 = G__36358;
count__36339 = G__36359;
i__36340 = G__36360;
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
var args36361 = [];
var len__26332__auto___36368 = arguments.length;
var i__26333__auto___36369 = (0);
while(true){
if((i__26333__auto___36369 < len__26332__auto___36368)){
args36361.push((arguments[i__26333__auto___36369]));

var G__36370 = (i__26333__auto___36369 + (1));
i__26333__auto___36369 = G__36370;
continue;
} else {
}
break;
}

var G__36363 = args36361.length;
switch (G__36363) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args36361.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__36364_36372 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__36365_36373 = null;
var count__36366_36374 = (0);
var i__36367_36375 = (0);
while(true){
if((i__36367_36375 < count__36366_36374)){
var msg_36376 = cljs.core._nth.call(null,chunk__36365_36373,i__36367_36375);
figwheel.client.socket.handle_incoming_message.call(null,msg_36376);

var G__36377 = seq__36364_36372;
var G__36378 = chunk__36365_36373;
var G__36379 = count__36366_36374;
var G__36380 = (i__36367_36375 + (1));
seq__36364_36372 = G__36377;
chunk__36365_36373 = G__36378;
count__36366_36374 = G__36379;
i__36367_36375 = G__36380;
continue;
} else {
var temp__4657__auto___36381 = cljs.core.seq.call(null,seq__36364_36372);
if(temp__4657__auto___36381){
var seq__36364_36382__$1 = temp__4657__auto___36381;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36364_36382__$1)){
var c__26038__auto___36383 = cljs.core.chunk_first.call(null,seq__36364_36382__$1);
var G__36384 = cljs.core.chunk_rest.call(null,seq__36364_36382__$1);
var G__36385 = c__26038__auto___36383;
var G__36386 = cljs.core.count.call(null,c__26038__auto___36383);
var G__36387 = (0);
seq__36364_36372 = G__36384;
chunk__36365_36373 = G__36385;
count__36366_36374 = G__36386;
i__36367_36375 = G__36387;
continue;
} else {
var msg_36388 = cljs.core.first.call(null,seq__36364_36382__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_36388);

var G__36389 = cljs.core.next.call(null,seq__36364_36382__$1);
var G__36390 = null;
var G__36391 = (0);
var G__36392 = (0);
seq__36364_36372 = G__36389;
chunk__36365_36373 = G__36390;
count__36366_36374 = G__36391;
i__36367_36375 = G__36392;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__26339__auto__ = [];
var len__26332__auto___36397 = arguments.length;
var i__26333__auto___36398 = (0);
while(true){
if((i__26333__auto___36398 < len__26332__auto___36397)){
args__26339__auto__.push((arguments[i__26333__auto___36398]));

var G__36399 = (i__26333__auto___36398 + (1));
i__26333__auto___36398 = G__36399;
continue;
} else {
}
break;
}

var argseq__26340__auto__ = ((((0) < args__26339__auto__.length))?(new cljs.core.IndexedSeq(args__26339__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__26340__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__36394){
var map__36395 = p__36394;
var map__36395__$1 = ((((!((map__36395 == null)))?((((map__36395.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36395.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36395):map__36395);
var opts = map__36395__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq36393){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36393));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e36401){if((e36401 instanceof Error)){
var e = e36401;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e36401;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__36405){
var map__36406 = p__36405;
var map__36406__$1 = ((((!((map__36406 == null)))?((((map__36406.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36406.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36406):map__36406);
var msg_name = cljs.core.get.call(null,map__36406__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1491273379007