// Compiled by ClojureScript 1.8.51 {}
goog.provide('figwheel.client.heads_up');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('figwheel.client.socket');
goog.require('cljs.core.async');
goog.require('goog.string');

figwheel.client.heads_up.node = (function figwheel$client$heads_up$node(var_args){
var args__19506__auto__ = [];
var len__19499__auto___25177 = arguments.length;
var i__19500__auto___25178 = (0);
while(true){
if((i__19500__auto___25178 < len__19499__auto___25177)){
args__19506__auto__.push((arguments[i__19500__auto___25178]));

var G__25179 = (i__19500__auto___25178 + (1));
i__19500__auto___25178 = G__25179;
continue;
} else {
}
break;
}

var argseq__19507__auto__ = ((((2) < args__19506__auto__.length))?(new cljs.core.IndexedSeq(args__19506__auto__.slice((2)),(0),null)):null);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19507__auto__);
});

figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic = (function (t,attrs,children){
var e = document.createElement(cljs.core.name.call(null,t));
var seq__25169_25180 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__25170_25181 = null;
var count__25171_25182 = (0);
var i__25172_25183 = (0);
while(true){
if((i__25172_25183 < count__25171_25182)){
var k_25184 = cljs.core._nth.call(null,chunk__25170_25181,i__25172_25183);
e.setAttribute(cljs.core.name.call(null,k_25184),cljs.core.get.call(null,attrs,k_25184));

var G__25185 = seq__25169_25180;
var G__25186 = chunk__25170_25181;
var G__25187 = count__25171_25182;
var G__25188 = (i__25172_25183 + (1));
seq__25169_25180 = G__25185;
chunk__25170_25181 = G__25186;
count__25171_25182 = G__25187;
i__25172_25183 = G__25188;
continue;
} else {
var temp__4657__auto___25189 = cljs.core.seq.call(null,seq__25169_25180);
if(temp__4657__auto___25189){
var seq__25169_25190__$1 = temp__4657__auto___25189;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25169_25190__$1)){
var c__19239__auto___25191 = cljs.core.chunk_first.call(null,seq__25169_25190__$1);
var G__25192 = cljs.core.chunk_rest.call(null,seq__25169_25190__$1);
var G__25193 = c__19239__auto___25191;
var G__25194 = cljs.core.count.call(null,c__19239__auto___25191);
var G__25195 = (0);
seq__25169_25180 = G__25192;
chunk__25170_25181 = G__25193;
count__25171_25182 = G__25194;
i__25172_25183 = G__25195;
continue;
} else {
var k_25196 = cljs.core.first.call(null,seq__25169_25190__$1);
e.setAttribute(cljs.core.name.call(null,k_25196),cljs.core.get.call(null,attrs,k_25196));

var G__25197 = cljs.core.next.call(null,seq__25169_25190__$1);
var G__25198 = null;
var G__25199 = (0);
var G__25200 = (0);
seq__25169_25180 = G__25197;
chunk__25170_25181 = G__25198;
count__25171_25182 = G__25199;
i__25172_25183 = G__25200;
continue;
}
} else {
}
}
break;
}

var seq__25173_25201 = cljs.core.seq.call(null,children);
var chunk__25174_25202 = null;
var count__25175_25203 = (0);
var i__25176_25204 = (0);
while(true){
if((i__25176_25204 < count__25175_25203)){
var ch_25205 = cljs.core._nth.call(null,chunk__25174_25202,i__25176_25204);
e.appendChild(ch_25205);

var G__25206 = seq__25173_25201;
var G__25207 = chunk__25174_25202;
var G__25208 = count__25175_25203;
var G__25209 = (i__25176_25204 + (1));
seq__25173_25201 = G__25206;
chunk__25174_25202 = G__25207;
count__25175_25203 = G__25208;
i__25176_25204 = G__25209;
continue;
} else {
var temp__4657__auto___25210 = cljs.core.seq.call(null,seq__25173_25201);
if(temp__4657__auto___25210){
var seq__25173_25211__$1 = temp__4657__auto___25210;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25173_25211__$1)){
var c__19239__auto___25212 = cljs.core.chunk_first.call(null,seq__25173_25211__$1);
var G__25213 = cljs.core.chunk_rest.call(null,seq__25173_25211__$1);
var G__25214 = c__19239__auto___25212;
var G__25215 = cljs.core.count.call(null,c__19239__auto___25212);
var G__25216 = (0);
seq__25173_25201 = G__25213;
chunk__25174_25202 = G__25214;
count__25175_25203 = G__25215;
i__25176_25204 = G__25216;
continue;
} else {
var ch_25217 = cljs.core.first.call(null,seq__25173_25211__$1);
e.appendChild(ch_25217);

var G__25218 = cljs.core.next.call(null,seq__25173_25211__$1);
var G__25219 = null;
var G__25220 = (0);
var G__25221 = (0);
seq__25173_25201 = G__25218;
chunk__25174_25202 = G__25219;
count__25175_25203 = G__25220;
i__25176_25204 = G__25221;
continue;
}
} else {
}
}
break;
}

return e;
});

figwheel.client.heads_up.node.cljs$lang$maxFixedArity = (2);

figwheel.client.heads_up.node.cljs$lang$applyTo = (function (seq25166){
var G__25167 = cljs.core.first.call(null,seq25166);
var seq25166__$1 = cljs.core.next.call(null,seq25166);
var G__25168 = cljs.core.first.call(null,seq25166__$1);
var seq25166__$2 = cljs.core.next.call(null,seq25166__$1);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic(G__25167,G__25168,seq25166__$2);
});
if(typeof figwheel.client.heads_up.heads_up_event_dispatch !== 'undefined'){
} else {
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__19353__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__19354__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__19355__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__19356__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__19357__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__19353__auto__,prefer_table__19354__auto__,method_cache__19355__auto__,cached_hierarchy__19356__auto__,hierarchy__19357__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__19353__auto__,prefer_table__19354__auto__,method_cache__19355__auto__,cached_hierarchy__19356__auto__,hierarchy__19357__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__19357__auto__,method_table__19353__auto__,prefer_table__19354__auto__,method_cache__19355__auto__,cached_hierarchy__19356__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return cljs.core.PersistentArrayMap.EMPTY;
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"file-selected",(function (dataset){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),dataset.fileName,new cljs.core.Keyword(null,"file-line","file-line",-1228823138),dataset.fileLine], null));
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"close-heads-up",(function (dataset){
return figwheel.client.heads_up.clear.call(null);
}));
figwheel.client.heads_up.ancestor_nodes = (function figwheel$client$heads_up$ancestor_nodes(el){
return cljs.core.iterate.call(null,(function (e){
return e.parentNode;
}),el);
});
figwheel.client.heads_up.get_dataset = (function figwheel$client$heads_up$get_dataset(el){
return cljs.core.first.call(null,cljs.core.keep.call(null,(function (x){
if(cljs.core.truth_(x.dataset.figwheelEvent)){
return x.dataset;
} else {
return null;
}
}),cljs.core.take.call(null,(4),figwheel.client.heads_up.ancestor_nodes.call(null,el))));
});
figwheel.client.heads_up.heads_up_onclick_handler = (function figwheel$client$heads_up$heads_up_onclick_handler(event){
var dataset = figwheel.client.heads_up.get_dataset.call(null,event.target);
event.preventDefault();

if(cljs.core.truth_(dataset)){
return figwheel.client.heads_up.heads_up_event_dispatch.call(null,dataset);
} else {
return null;
}
});
figwheel.client.heads_up.ensure_container = (function figwheel$client$heads_up$ensure_container(){
var cont_id = "figwheel-heads-up-container";
var content_id = "figwheel-heads-up-content-area";
if(cljs.core.not.call(null,document.querySelector([cljs.core.str("#"),cljs.core.str(cont_id)].join('')))){
var el_25222 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str("-o-transition: all 0.2s ease-in-out;"),cljs.core.str("transition: all 0.2s ease-in-out;"),cljs.core.str("font-size: 13px;"),cljs.core.str("border-top: 1px solid #f5f5f5;"),cljs.core.str("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str("line-height: 18px;"),cljs.core.str("color: #333;"),cljs.core.str("font-family: monospace;"),cljs.core.str("padding: 0px 10px 0px 70px;"),cljs.core.str("position: fixed;"),cljs.core.str("bottom: 0px;"),cljs.core.str("left: 0px;"),cljs.core.str("height: 0px;"),cljs.core.str("opacity: 0.0;"),cljs.core.str("box-sizing: border-box;"),cljs.core.str("z-index: 10000;")].join('')], null));
el_25222.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_25222.innerHTML = figwheel.client.heads_up.cljs_logo_svg;

el_25222.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_25222);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__25223,st_map){
var map__25228 = p__25223;
var map__25228__$1 = ((((!((map__25228 == null)))?((((map__25228.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25228.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25228):map__25228);
var container_el = cljs.core.get.call(null,map__25228__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__25228,map__25228__$1,container_el){
return (function (p__25230){
var vec__25231 = p__25230;
var k = cljs.core.nth.call(null,vec__25231,(0),null);
var v = cljs.core.nth.call(null,vec__25231,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__25228,map__25228__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__25232,dom_str){
var map__25235 = p__25232;
var map__25235__$1 = ((((!((map__25235 == null)))?((((map__25235.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25235.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25235):map__25235);
var c = map__25235__$1;
var content_area_el = cljs.core.get.call(null,map__25235__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__25237){
var map__25240 = p__25237;
var map__25240__$1 = ((((!((map__25240 == null)))?((((map__25240.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25240.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25240):map__25240);
var content_area_el = cljs.core.get.call(null,map__25240__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function figwheel$client$heads_up$close_link(){
return [cljs.core.str("<a style=\""),cljs.core.str("float: right;"),cljs.core.str("font-size: 18px;"),cljs.core.str("text-decoration: none;"),cljs.core.str("text-align: right;"),cljs.core.str("width: 30px;"),cljs.core.str("height: 30px;"),cljs.core.str("color: rgba(84,84,84, 0.5);"),cljs.core.str("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str("x"),cljs.core.str("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function figwheel$client$heads_up$display_heads_up(style,msg){
var c__21223__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21223__auto__){
return (function (){
var f__21224__auto__ = (function (){var switch__21111__auto__ = ((function (c__21223__auto__){
return (function (state_25283){
var state_val_25284 = (state_25283[(1)]);
if((state_val_25284 === (1))){
var inst_25268 = (state_25283[(7)]);
var inst_25268__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_25269 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_25270 = ["10px","10px","100%","68px","1.0"];
var inst_25271 = cljs.core.PersistentHashMap.fromArrays(inst_25269,inst_25270);
var inst_25272 = cljs.core.merge.call(null,inst_25271,style);
var inst_25273 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_25268__$1,inst_25272);
var inst_25274 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_25268__$1,msg);
var inst_25275 = cljs.core.async.timeout.call(null,(300));
var state_25283__$1 = (function (){var statearr_25285 = state_25283;
(statearr_25285[(7)] = inst_25268__$1);

(statearr_25285[(8)] = inst_25273);

(statearr_25285[(9)] = inst_25274);

return statearr_25285;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25283__$1,(2),inst_25275);
} else {
if((state_val_25284 === (2))){
var inst_25268 = (state_25283[(7)]);
var inst_25277 = (state_25283[(2)]);
var inst_25278 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_25279 = ["auto"];
var inst_25280 = cljs.core.PersistentHashMap.fromArrays(inst_25278,inst_25279);
var inst_25281 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_25268,inst_25280);
var state_25283__$1 = (function (){var statearr_25286 = state_25283;
(statearr_25286[(10)] = inst_25277);

return statearr_25286;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25283__$1,inst_25281);
} else {
return null;
}
}
});})(c__21223__auto__))
;
return ((function (switch__21111__auto__,c__21223__auto__){
return (function() {
var figwheel$client$heads_up$display_heads_up_$_state_machine__21112__auto__ = null;
var figwheel$client$heads_up$display_heads_up_$_state_machine__21112__auto____0 = (function (){
var statearr_25290 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25290[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__21112__auto__);

(statearr_25290[(1)] = (1));

return statearr_25290;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__21112__auto____1 = (function (state_25283){
while(true){
var ret_value__21113__auto__ = (function (){try{while(true){
var result__21114__auto__ = switch__21111__auto__.call(null,state_25283);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21114__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21114__auto__;
}
break;
}
}catch (e25291){if((e25291 instanceof Object)){
var ex__21115__auto__ = e25291;
var statearr_25292_25294 = state_25283;
(statearr_25292_25294[(5)] = ex__21115__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25283);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25291;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25295 = state_25283;
state_25283 = G__25295;
continue;
} else {
return ret_value__21113__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__21112__auto__ = function(state_25283){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__21112__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__21112__auto____1.call(this,state_25283);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__21112__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__21112__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__21112__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__21112__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__21112__auto__;
})()
;})(switch__21111__auto__,c__21223__auto__))
})();
var state__21225__auto__ = (function (){var statearr_25293 = f__21224__auto__.call(null);
(statearr_25293[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21223__auto__);

return statearr_25293;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21225__auto__);
});})(c__21223__auto__))
);

return c__21223__auto__;
});
figwheel.client.heads_up.heading = (function figwheel$client$heads_up$heading(s){
return [cljs.core.str("<div style=\""),cljs.core.str("font-size: 26px;"),cljs.core.str("line-height: 26px;"),cljs.core.str("margin-bottom: 2px;"),cljs.core.str("padding-top: 1px;"),cljs.core.str("\">"),cljs.core.str(s),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.file_and_line_number = (function figwheel$client$heads_up$file_and_line_number(msg){
if(cljs.core.truth_(cljs.core.re_matches.call(null,/.*at\sline.*/,msg))){
return cljs.core.take.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,msg," ")));
} else {
return null;
}
});
figwheel.client.heads_up.file_selector_div = (function figwheel$client$heads_up$file_selector_div(file_name,line_number,msg){
return [cljs.core.str("<div data-figwheel-event=\"file-selected\" data-file-name=\""),cljs.core.str(file_name),cljs.core.str("\" data-file-line=\""),cljs.core.str(line_number),cljs.core.str("\">"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.format_line = (function figwheel$client$heads_up$format_line(msg){
var msg__$1 = goog.string.htmlEscape(msg);
var temp__4655__auto__ = figwheel.client.heads_up.file_and_line_number.call(null,msg__$1);
if(cljs.core.truth_(temp__4655__auto__)){
var vec__25297 = temp__4655__auto__;
var f = cljs.core.nth.call(null,vec__25297,(0),null);
var ln = cljs.core.nth.call(null,vec__25297,(1),null);
return figwheel.client.heads_up.file_selector_div.call(null,f,ln,msg__$1);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg__$1),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.display_error = (function figwheel$client$heads_up$display_error(formatted_messages,cause){
var vec__25300 = (cljs.core.truth_(cause)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause)], null):cljs.core.first.call(null,cljs.core.keep.call(null,figwheel.client.heads_up.file_and_line_number,formatted_messages)));
var file_name = cljs.core.nth.call(null,vec__25300,(0),null);
var file_line = cljs.core.nth.call(null,vec__25300,(1),null);
var file_column = cljs.core.nth.call(null,vec__25300,(2),null);
var msg = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__25300,file_name,file_line,file_column){
return (function (p1__25298_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(goog.string.htmlEscape(p1__25298_SHARP_)),cljs.core.str("</div>")].join('');
});})(vec__25300,file_name,file_line,file_column))
,formatted_messages));
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,"Compile Error")),cljs.core.str(figwheel.client.heads_up.file_selector_div.call(null,file_name,(function (){var or__18428__auto__ = file_line;
if(cljs.core.truth_(or__18428__auto__)){
return or__18428__auto__;
} else {
var and__18416__auto__ = cause;
if(cljs.core.truth_(and__18416__auto__)){
return new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause);
} else {
return and__18416__auto__;
}
}
})(),[cljs.core.str(msg),cljs.core.str((cljs.core.truth_(cause)?[cljs.core.str("Error on file "),cljs.core.str(goog.string.htmlEscape(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause))),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''):""))].join('')))].join(''));
});
figwheel.client.heads_up.display_system_warning = (function figwheel$client$heads_up$display_system_warning(header,msg){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,header)),cljs.core.str(figwheel.client.heads_up.format_line.call(null,msg))].join(''));
});
figwheel.client.heads_up.display_warning = (function figwheel$client$heads_up$display_warning(msg){
return figwheel.client.heads_up.display_system_warning.call(null,"Compile Warning",msg);
});
figwheel.client.heads_up.append_message = (function figwheel$client$heads_up$append_message(message){
var map__25303 = figwheel.client.heads_up.ensure_container.call(null);
var map__25303__$1 = ((((!((map__25303 == null)))?((((map__25303.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25303.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25303):map__25303);
var content_area_el = cljs.core.get.call(null,map__25303__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = document.createElement("div");
el.innerHTML = figwheel.client.heads_up.format_line.call(null,message);

return content_area_el.appendChild(el);
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__21223__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21223__auto__){
return (function (){
var f__21224__auto__ = (function (){var switch__21111__auto__ = ((function (c__21223__auto__){
return (function (state_25351){
var state_val_25352 = (state_25351[(1)]);
if((state_val_25352 === (1))){
var inst_25334 = (state_25351[(7)]);
var inst_25334__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_25335 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_25336 = ["0.0"];
var inst_25337 = cljs.core.PersistentHashMap.fromArrays(inst_25335,inst_25336);
var inst_25338 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_25334__$1,inst_25337);
var inst_25339 = cljs.core.async.timeout.call(null,(300));
var state_25351__$1 = (function (){var statearr_25353 = state_25351;
(statearr_25353[(8)] = inst_25338);

(statearr_25353[(7)] = inst_25334__$1);

return statearr_25353;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25351__$1,(2),inst_25339);
} else {
if((state_val_25352 === (2))){
var inst_25334 = (state_25351[(7)]);
var inst_25341 = (state_25351[(2)]);
var inst_25342 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_25343 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_25344 = cljs.core.PersistentHashMap.fromArrays(inst_25342,inst_25343);
var inst_25345 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_25334,inst_25344);
var inst_25346 = cljs.core.async.timeout.call(null,(200));
var state_25351__$1 = (function (){var statearr_25354 = state_25351;
(statearr_25354[(9)] = inst_25341);

(statearr_25354[(10)] = inst_25345);

return statearr_25354;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25351__$1,(3),inst_25346);
} else {
if((state_val_25352 === (3))){
var inst_25334 = (state_25351[(7)]);
var inst_25348 = (state_25351[(2)]);
var inst_25349 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_25334,"");
var state_25351__$1 = (function (){var statearr_25355 = state_25351;
(statearr_25355[(11)] = inst_25348);

return statearr_25355;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25351__$1,inst_25349);
} else {
return null;
}
}
}
});})(c__21223__auto__))
;
return ((function (switch__21111__auto__,c__21223__auto__){
return (function() {
var figwheel$client$heads_up$clear_$_state_machine__21112__auto__ = null;
var figwheel$client$heads_up$clear_$_state_machine__21112__auto____0 = (function (){
var statearr_25359 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25359[(0)] = figwheel$client$heads_up$clear_$_state_machine__21112__auto__);

(statearr_25359[(1)] = (1));

return statearr_25359;
});
var figwheel$client$heads_up$clear_$_state_machine__21112__auto____1 = (function (state_25351){
while(true){
var ret_value__21113__auto__ = (function (){try{while(true){
var result__21114__auto__ = switch__21111__auto__.call(null,state_25351);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21114__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21114__auto__;
}
break;
}
}catch (e25360){if((e25360 instanceof Object)){
var ex__21115__auto__ = e25360;
var statearr_25361_25363 = state_25351;
(statearr_25361_25363[(5)] = ex__21115__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25351);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25360;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25364 = state_25351;
state_25351 = G__25364;
continue;
} else {
return ret_value__21113__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__21112__auto__ = function(state_25351){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__21112__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__21112__auto____1.call(this,state_25351);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$clear_$_state_machine__21112__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__21112__auto____0;
figwheel$client$heads_up$clear_$_state_machine__21112__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__21112__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__21112__auto__;
})()
;})(switch__21111__auto__,c__21223__auto__))
})();
var state__21225__auto__ = (function (){var statearr_25362 = f__21224__auto__.call(null);
(statearr_25362[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21223__auto__);

return statearr_25362;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21225__auto__);
});})(c__21223__auto__))
);

return c__21223__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function figwheel$client$heads_up$display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function figwheel$client$heads_up$flash_loaded(){
var c__21223__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21223__auto__){
return (function (){
var f__21224__auto__ = (function (){var switch__21111__auto__ = ((function (c__21223__auto__){
return (function (state_25396){
var state_val_25397 = (state_25396[(1)]);
if((state_val_25397 === (1))){
var inst_25386 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_25396__$1 = state_25396;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25396__$1,(2),inst_25386);
} else {
if((state_val_25397 === (2))){
var inst_25388 = (state_25396[(2)]);
var inst_25389 = cljs.core.async.timeout.call(null,(400));
var state_25396__$1 = (function (){var statearr_25398 = state_25396;
(statearr_25398[(7)] = inst_25388);

return statearr_25398;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25396__$1,(3),inst_25389);
} else {
if((state_val_25397 === (3))){
var inst_25391 = (state_25396[(2)]);
var inst_25392 = figwheel.client.heads_up.clear.call(null);
var state_25396__$1 = (function (){var statearr_25399 = state_25396;
(statearr_25399[(8)] = inst_25391);

return statearr_25399;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25396__$1,(4),inst_25392);
} else {
if((state_val_25397 === (4))){
var inst_25394 = (state_25396[(2)]);
var state_25396__$1 = state_25396;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25396__$1,inst_25394);
} else {
return null;
}
}
}
}
});})(c__21223__auto__))
;
return ((function (switch__21111__auto__,c__21223__auto__){
return (function() {
var figwheel$client$heads_up$flash_loaded_$_state_machine__21112__auto__ = null;
var figwheel$client$heads_up$flash_loaded_$_state_machine__21112__auto____0 = (function (){
var statearr_25403 = [null,null,null,null,null,null,null,null,null];
(statearr_25403[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__21112__auto__);

(statearr_25403[(1)] = (1));

return statearr_25403;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__21112__auto____1 = (function (state_25396){
while(true){
var ret_value__21113__auto__ = (function (){try{while(true){
var result__21114__auto__ = switch__21111__auto__.call(null,state_25396);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21114__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21114__auto__;
}
break;
}
}catch (e25404){if((e25404 instanceof Object)){
var ex__21115__auto__ = e25404;
var statearr_25405_25407 = state_25396;
(statearr_25405_25407[(5)] = ex__21115__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25396);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25404;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25408 = state_25396;
state_25396 = G__25408;
continue;
} else {
return ret_value__21113__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__21112__auto__ = function(state_25396){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__21112__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__21112__auto____1.call(this,state_25396);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__21112__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__21112__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__21112__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__21112__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__21112__auto__;
})()
;})(switch__21111__auto__,c__21223__auto__))
})();
var state__21225__auto__ = (function (){var statearr_25406 = f__21224__auto__.call(null);
(statearr_25406[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21223__auto__);

return statearr_25406;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21225__auto__);
});})(c__21223__auto__))
);

return c__21223__auto__;
});
figwheel.client.heads_up.cljs_logo_svg = "<?xml version='1.0' encoding='utf-8'?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' style='position:absolute; top:9px; left: 10px;' version='1.1'\n  xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px'\n  viewBox='0 0 428 428' enable-background='new 0 0 428 428' xml:space='preserve'>\n<circle fill='#fff' cx='213' cy='214' r='213' />\n<g>\n<path fill='#96CA4B' d='M122,266.6c-12.7,0-22.3-3.7-28.9-11.1c-6.6-7.4-9.9-18-9.9-31.8c0-14.1,3.4-24.9,10.3-32.5\n  s16.8-11.4,29.9-11.4c8.8,0,16.8,1.6,23.8,4.9l-5.4,14.3c-7.5-2.9-13.7-4.4-18.6-4.4c-14.5,0-21.7,9.6-21.7,28.8\n  c0,9.4,1.8,16.4,5.4,21.2c3.6,4.7,8.9,7.1,15.9,7.1c7.9,0,15.4-2,22.5-5.9v15.5c-3.2,1.9-6.6,3.2-10.2,4\n  C131.5,266.2,127.1,266.6,122,266.6z'/>\n<path fill='#96CA4B' d='M194.4,265.1h-17.8V147.3h17.8V265.1z'/>\n<path fill='#5F7FBF' d='M222.9,302.3c-5.3,0-9.8-0.6-13.3-1.9v-14.1c3.4,0.9,6.9,1.4,10.5,1.4c7.6,0,11.4-4.3,11.4-12.9v-93.5h17.8\n  v94.7c0,8.6-2.3,15.2-6.8,19.6C237.9,300.1,231.4,302.3,222.9,302.3z M230.4,159.2c0-3.2,0.9-5.6,2.6-7.3c1.7-1.7,4.2-2.6,7.5-2.6\n  c3.1,0,5.6,0.9,7.3,2.6c1.7,1.7,2.6,4.2,2.6,7.3c0,3-0.9,5.4-2.6,7.2c-1.7,1.7-4.2,2.6-7.3,2.6c-3.2,0-5.7-0.9-7.5-2.6\n  C231.2,164.6,230.4,162.2,230.4,159.2z'/>\n<path fill='#5F7FBF' d='M342.5,241.3c0,8.2-3,14.4-8.9,18.8c-6,4.4-14.5,6.5-25.6,6.5c-11.2,0-20.1-1.7-26.9-5.1v-15.4\n  c9.8,4.5,19,6.8,27.5,6.8c10.9,0,16.4-3.3,16.4-9.9c0-2.1-0.6-3.9-1.8-5.3c-1.2-1.4-3.2-2.9-6-4.4c-2.8-1.5-6.6-3.2-11.6-5.1\n  c-9.6-3.7-16.2-7.5-19.6-11.2c-3.4-3.7-5.1-8.6-5.1-14.5c0-7.2,2.9-12.7,8.7-16.7c5.8-4,13.6-5.9,23.6-5.9c9.8,0,19.1,2,27.9,6\n  l-5.8,13.4c-9-3.7-16.6-5.6-22.8-5.6c-9.4,0-14.1,2.7-14.1,8c0,2.6,1.2,4.8,3.7,6.7c2.4,1.8,7.8,4.3,16,7.5\n  c6.9,2.7,11.9,5.1,15.1,7.3c3.1,2.2,5.4,4.8,7,7.7C341.7,233.7,342.5,237.2,342.5,241.3z'/>\n</g>\n<path fill='#96CA4B' stroke='#96CA4B' stroke-width='6' stroke-miterlimit='10' d='M197,392.7c-91.2-8.1-163-85-163-178.3\n  S105.8,44.3,197,36.2V16.1c-102.3,8.2-183,94-183,198.4s80.7,190.2,183,198.4V392.7z'/>\n<path fill='#5F7FBF' stroke='#5F7FBF' stroke-width='6' stroke-miterlimit='10' d='M229,16.1v20.1c91.2,8.1,163,85,163,178.3\n  s-71.8,170.2-163,178.3v20.1c102.3-8.2,183-94,183-198.4S331.3,24.3,229,16.1z'/>\n</svg>";

//# sourceMappingURL=heads_up.js.map?rel=1490072959853