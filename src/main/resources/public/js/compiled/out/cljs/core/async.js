// Compiled by ClojureScript 1.8.51 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args21268 = [];
var len__19499__auto___21274 = arguments.length;
var i__19500__auto___21275 = (0);
while(true){
if((i__19500__auto___21275 < len__19499__auto___21274)){
args21268.push((arguments[i__19500__auto___21275]));

var G__21276 = (i__19500__auto___21275 + (1));
i__19500__auto___21275 = G__21276;
continue;
} else {
}
break;
}

var G__21270 = args21268.length;
switch (G__21270) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21268.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async21271 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21271 = (function (f,blockable,meta21272){
this.f = f;
this.blockable = blockable;
this.meta21272 = meta21272;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async21271.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21273,meta21272__$1){
var self__ = this;
var _21273__$1 = this;
return (new cljs.core.async.t_cljs$core$async21271(self__.f,self__.blockable,meta21272__$1));
});

cljs.core.async.t_cljs$core$async21271.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21273){
var self__ = this;
var _21273__$1 = this;
return self__.meta21272;
});

cljs.core.async.t_cljs$core$async21271.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async21271.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async21271.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async21271.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async21271.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta21272","meta21272",-537891839,null)], null);
});

cljs.core.async.t_cljs$core$async21271.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21271.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21271";

cljs.core.async.t_cljs$core$async21271.cljs$lang$ctorPrWriter = (function (this__19034__auto__,writer__19035__auto__,opt__19036__auto__){
return cljs.core._write.call(null,writer__19035__auto__,"cljs.core.async/t_cljs$core$async21271");
});

cljs.core.async.__GT_t_cljs$core$async21271 = (function cljs$core$async$__GT_t_cljs$core$async21271(f__$1,blockable__$1,meta21272){
return (new cljs.core.async.t_cljs$core$async21271(f__$1,blockable__$1,meta21272));
});

}

return (new cljs.core.async.t_cljs$core$async21271(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args21280 = [];
var len__19499__auto___21283 = arguments.length;
var i__19500__auto___21284 = (0);
while(true){
if((i__19500__auto___21284 < len__19499__auto___21283)){
args21280.push((arguments[i__19500__auto___21284]));

var G__21285 = (i__19500__auto___21284 + (1));
i__19500__auto___21284 = G__21285;
continue;
} else {
}
break;
}

var G__21282 = args21280.length;
switch (G__21282) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21280.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str("buf-or-n")].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args21287 = [];
var len__19499__auto___21290 = arguments.length;
var i__19500__auto___21291 = (0);
while(true){
if((i__19500__auto___21291 < len__19499__auto___21290)){
args21287.push((arguments[i__19500__auto___21291]));

var G__21292 = (i__19500__auto___21291 + (1));
i__19500__auto___21291 = G__21292;
continue;
} else {
}
break;
}

var G__21289 = args21287.length;
switch (G__21289) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21287.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args21294 = [];
var len__19499__auto___21297 = arguments.length;
var i__19500__auto___21298 = (0);
while(true){
if((i__19500__auto___21298 < len__19499__auto___21297)){
args21294.push((arguments[i__19500__auto___21298]));

var G__21299 = (i__19500__auto___21298 + (1));
i__19500__auto___21298 = G__21299;
continue;
} else {
}
break;
}

var G__21296 = args21294.length;
switch (G__21296) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21294.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_21301 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_21301);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_21301,ret){
return (function (){
return fn1.call(null,val_21301);
});})(val_21301,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args21302 = [];
var len__19499__auto___21305 = arguments.length;
var i__19500__auto___21306 = (0);
while(true){
if((i__19500__auto___21306 < len__19499__auto___21305)){
args21302.push((arguments[i__19500__auto___21306]));

var G__21307 = (i__19500__auto___21306 + (1));
i__19500__auto___21306 = G__21307;
continue;
} else {
}
break;
}

var G__21304 = args21302.length;
switch (G__21304) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21302.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4655__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__19343__auto___21309 = n;
var x_21310 = (0);
while(true){
if((x_21310 < n__19343__auto___21309)){
(a[x_21310] = (0));

var G__21311 = (x_21310 + (1));
x_21310 = G__21311;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__21312 = (i + (1));
i = G__21312;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async21316 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21316 = (function (alt_flag,flag,meta21317){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta21317 = meta21317;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async21316.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_21318,meta21317__$1){
var self__ = this;
var _21318__$1 = this;
return (new cljs.core.async.t_cljs$core$async21316(self__.alt_flag,self__.flag,meta21317__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async21316.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_21318){
var self__ = this;
var _21318__$1 = this;
return self__.meta21317;
});})(flag))
;

cljs.core.async.t_cljs$core$async21316.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async21316.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async21316.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async21316.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async21316.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta21317","meta21317",-671196238,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async21316.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21316.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21316";

cljs.core.async.t_cljs$core$async21316.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__19034__auto__,writer__19035__auto__,opt__19036__auto__){
return cljs.core._write.call(null,writer__19035__auto__,"cljs.core.async/t_cljs$core$async21316");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async21316 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async21316(alt_flag__$1,flag__$1,meta21317){
return (new cljs.core.async.t_cljs$core$async21316(alt_flag__$1,flag__$1,meta21317));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async21316(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async21322 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21322 = (function (alt_handler,flag,cb,meta21323){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta21323 = meta21323;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async21322.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21324,meta21323__$1){
var self__ = this;
var _21324__$1 = this;
return (new cljs.core.async.t_cljs$core$async21322(self__.alt_handler,self__.flag,self__.cb,meta21323__$1));
});

cljs.core.async.t_cljs$core$async21322.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21324){
var self__ = this;
var _21324__$1 = this;
return self__.meta21323;
});

cljs.core.async.t_cljs$core$async21322.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async21322.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async21322.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async21322.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async21322.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta21323","meta21323",-927906531,null)], null);
});

cljs.core.async.t_cljs$core$async21322.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21322.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21322";

cljs.core.async.t_cljs$core$async21322.cljs$lang$ctorPrWriter = (function (this__19034__auto__,writer__19035__auto__,opt__19036__auto__){
return cljs.core._write.call(null,writer__19035__auto__,"cljs.core.async/t_cljs$core$async21322");
});

cljs.core.async.__GT_t_cljs$core$async21322 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async21322(alt_handler__$1,flag__$1,cb__$1,meta21323){
return (new cljs.core.async.t_cljs$core$async21322(alt_handler__$1,flag__$1,cb__$1,meta21323));
});

}

return (new cljs.core.async.t_cljs$core$async21322(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__21325_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__21325_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__21326_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__21326_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__18428__auto__ = wport;
if(cljs.core.truth_(or__18428__auto__)){
return or__18428__auto__;
} else {
return port;
}
})()], null));
} else {
var G__21327 = (i + (1));
i = G__21327;
continue;
}
} else {
return null;
}
break;
}
})();
var or__18428__auto__ = ret;
if(cljs.core.truth_(or__18428__auto__)){
return or__18428__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__18416__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__18416__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__18416__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__19506__auto__ = [];
var len__19499__auto___21333 = arguments.length;
var i__19500__auto___21334 = (0);
while(true){
if((i__19500__auto___21334 < len__19499__auto___21333)){
args__19506__auto__.push((arguments[i__19500__auto___21334]));

var G__21335 = (i__19500__auto___21334 + (1));
i__19500__auto___21334 = G__21335;
continue;
} else {
}
break;
}

var argseq__19507__auto__ = ((((1) < args__19506__auto__.length))?(new cljs.core.IndexedSeq(args__19506__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19507__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__21330){
var map__21331 = p__21330;
var map__21331__$1 = ((((!((map__21331 == null)))?((((map__21331.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21331.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21331):map__21331);
var opts = map__21331__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq21328){
var G__21329 = cljs.core.first.call(null,seq21328);
var seq21328__$1 = cljs.core.next.call(null,seq21328);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__21329,seq21328__$1);
});
/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args21336 = [];
var len__19499__auto___21386 = arguments.length;
var i__19500__auto___21387 = (0);
while(true){
if((i__19500__auto___21387 < len__19499__auto___21386)){
args21336.push((arguments[i__19500__auto___21387]));

var G__21388 = (i__19500__auto___21387 + (1));
i__19500__auto___21387 = G__21388;
continue;
} else {
}
break;
}

var G__21338 = args21336.length;
switch (G__21338) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21336.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__21223__auto___21390 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21223__auto___21390){
return (function (){
var f__21224__auto__ = (function (){var switch__21111__auto__ = ((function (c__21223__auto___21390){
return (function (state_21362){
var state_val_21363 = (state_21362[(1)]);
if((state_val_21363 === (7))){
var inst_21358 = (state_21362[(2)]);
var state_21362__$1 = state_21362;
var statearr_21364_21391 = state_21362__$1;
(statearr_21364_21391[(2)] = inst_21358);

(statearr_21364_21391[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21363 === (1))){
var state_21362__$1 = state_21362;
var statearr_21365_21392 = state_21362__$1;
(statearr_21365_21392[(2)] = null);

(statearr_21365_21392[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21363 === (4))){
var inst_21341 = (state_21362[(7)]);
var inst_21341__$1 = (state_21362[(2)]);
var inst_21342 = (inst_21341__$1 == null);
var state_21362__$1 = (function (){var statearr_21366 = state_21362;
(statearr_21366[(7)] = inst_21341__$1);

return statearr_21366;
})();
if(cljs.core.truth_(inst_21342)){
var statearr_21367_21393 = state_21362__$1;
(statearr_21367_21393[(1)] = (5));

} else {
var statearr_21368_21394 = state_21362__$1;
(statearr_21368_21394[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21363 === (13))){
var state_21362__$1 = state_21362;
var statearr_21369_21395 = state_21362__$1;
(statearr_21369_21395[(2)] = null);

(statearr_21369_21395[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21363 === (6))){
var inst_21341 = (state_21362[(7)]);
var state_21362__$1 = state_21362;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21362__$1,(11),to,inst_21341);
} else {
if((state_val_21363 === (3))){
var inst_21360 = (state_21362[(2)]);
var state_21362__$1 = state_21362;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21362__$1,inst_21360);
} else {
if((state_val_21363 === (12))){
var state_21362__$1 = state_21362;
var statearr_21370_21396 = state_21362__$1;
(statearr_21370_21396[(2)] = null);

(statearr_21370_21396[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21363 === (2))){
var state_21362__$1 = state_21362;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21362__$1,(4),from);
} else {
if((state_val_21363 === (11))){
var inst_21351 = (state_21362[(2)]);
var state_21362__$1 = state_21362;
if(cljs.core.truth_(inst_21351)){
var statearr_21371_21397 = state_21362__$1;
(statearr_21371_21397[(1)] = (12));

} else {
var statearr_21372_21398 = state_21362__$1;
(statearr_21372_21398[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21363 === (9))){
var state_21362__$1 = state_21362;
var statearr_21373_21399 = state_21362__$1;
(statearr_21373_21399[(2)] = null);

(statearr_21373_21399[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21363 === (5))){
var state_21362__$1 = state_21362;
if(cljs.core.truth_(close_QMARK_)){
var statearr_21374_21400 = state_21362__$1;
(statearr_21374_21400[(1)] = (8));

} else {
var statearr_21375_21401 = state_21362__$1;
(statearr_21375_21401[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21363 === (14))){
var inst_21356 = (state_21362[(2)]);
var state_21362__$1 = state_21362;
var statearr_21376_21402 = state_21362__$1;
(statearr_21376_21402[(2)] = inst_21356);

(statearr_21376_21402[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21363 === (10))){
var inst_21348 = (state_21362[(2)]);
var state_21362__$1 = state_21362;
var statearr_21377_21403 = state_21362__$1;
(statearr_21377_21403[(2)] = inst_21348);

(statearr_21377_21403[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21363 === (8))){
var inst_21345 = cljs.core.async.close_BANG_.call(null,to);
var state_21362__$1 = state_21362;
var statearr_21378_21404 = state_21362__$1;
(statearr_21378_21404[(2)] = inst_21345);

(statearr_21378_21404[(1)] = (10));


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
});})(c__21223__auto___21390))
;
return ((function (switch__21111__auto__,c__21223__auto___21390){
return (function() {
var cljs$core$async$state_machine__21112__auto__ = null;
var cljs$core$async$state_machine__21112__auto____0 = (function (){
var statearr_21382 = [null,null,null,null,null,null,null,null];
(statearr_21382[(0)] = cljs$core$async$state_machine__21112__auto__);

(statearr_21382[(1)] = (1));

return statearr_21382;
});
var cljs$core$async$state_machine__21112__auto____1 = (function (state_21362){
while(true){
var ret_value__21113__auto__ = (function (){try{while(true){
var result__21114__auto__ = switch__21111__auto__.call(null,state_21362);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21114__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21114__auto__;
}
break;
}
}catch (e21383){if((e21383 instanceof Object)){
var ex__21115__auto__ = e21383;
var statearr_21384_21405 = state_21362;
(statearr_21384_21405[(5)] = ex__21115__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21362);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21383;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21406 = state_21362;
state_21362 = G__21406;
continue;
} else {
return ret_value__21113__auto__;
}
break;
}
});
cljs$core$async$state_machine__21112__auto__ = function(state_21362){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21112__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21112__auto____1.call(this,state_21362);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21112__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21112__auto____0;
cljs$core$async$state_machine__21112__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21112__auto____1;
return cljs$core$async$state_machine__21112__auto__;
})()
;})(switch__21111__auto__,c__21223__auto___21390))
})();
var state__21225__auto__ = (function (){var statearr_21385 = f__21224__auto__.call(null);
(statearr_21385[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21223__auto___21390);

return statearr_21385;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21225__auto__);
});})(c__21223__auto___21390))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__21590){
var vec__21591 = p__21590;
var v = cljs.core.nth.call(null,vec__21591,(0),null);
var p = cljs.core.nth.call(null,vec__21591,(1),null);
var job = vec__21591;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__21223__auto___21773 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21223__auto___21773,res,vec__21591,v,p,job,jobs,results){
return (function (){
var f__21224__auto__ = (function (){var switch__21111__auto__ = ((function (c__21223__auto___21773,res,vec__21591,v,p,job,jobs,results){
return (function (state_21596){
var state_val_21597 = (state_21596[(1)]);
if((state_val_21597 === (1))){
var state_21596__$1 = state_21596;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21596__$1,(2),res,v);
} else {
if((state_val_21597 === (2))){
var inst_21593 = (state_21596[(2)]);
var inst_21594 = cljs.core.async.close_BANG_.call(null,res);
var state_21596__$1 = (function (){var statearr_21598 = state_21596;
(statearr_21598[(7)] = inst_21593);

return statearr_21598;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21596__$1,inst_21594);
} else {
return null;
}
}
});})(c__21223__auto___21773,res,vec__21591,v,p,job,jobs,results))
;
return ((function (switch__21111__auto__,c__21223__auto___21773,res,vec__21591,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21112__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21112__auto____0 = (function (){
var statearr_21602 = [null,null,null,null,null,null,null,null];
(statearr_21602[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21112__auto__);

(statearr_21602[(1)] = (1));

return statearr_21602;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21112__auto____1 = (function (state_21596){
while(true){
var ret_value__21113__auto__ = (function (){try{while(true){
var result__21114__auto__ = switch__21111__auto__.call(null,state_21596);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21114__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21114__auto__;
}
break;
}
}catch (e21603){if((e21603 instanceof Object)){
var ex__21115__auto__ = e21603;
var statearr_21604_21774 = state_21596;
(statearr_21604_21774[(5)] = ex__21115__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21596);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21603;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21775 = state_21596;
state_21596 = G__21775;
continue;
} else {
return ret_value__21113__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21112__auto__ = function(state_21596){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21112__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21112__auto____1.call(this,state_21596);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21112__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21112__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21112__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21112__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21112__auto__;
})()
;})(switch__21111__auto__,c__21223__auto___21773,res,vec__21591,v,p,job,jobs,results))
})();
var state__21225__auto__ = (function (){var statearr_21605 = f__21224__auto__.call(null);
(statearr_21605[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21223__auto___21773);

return statearr_21605;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21225__auto__);
});})(c__21223__auto___21773,res,vec__21591,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__21606){
var vec__21607 = p__21606;
var v = cljs.core.nth.call(null,vec__21607,(0),null);
var p = cljs.core.nth.call(null,vec__21607,(1),null);
var job = vec__21607;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__19343__auto___21776 = n;
var __21777 = (0);
while(true){
if((__21777 < n__19343__auto___21776)){
var G__21608_21778 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__21608_21778) {
case "compute":
var c__21223__auto___21780 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__21777,c__21223__auto___21780,G__21608_21778,n__19343__auto___21776,jobs,results,process,async){
return (function (){
var f__21224__auto__ = (function (){var switch__21111__auto__ = ((function (__21777,c__21223__auto___21780,G__21608_21778,n__19343__auto___21776,jobs,results,process,async){
return (function (state_21621){
var state_val_21622 = (state_21621[(1)]);
if((state_val_21622 === (1))){
var state_21621__$1 = state_21621;
var statearr_21623_21781 = state_21621__$1;
(statearr_21623_21781[(2)] = null);

(statearr_21623_21781[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21622 === (2))){
var state_21621__$1 = state_21621;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21621__$1,(4),jobs);
} else {
if((state_val_21622 === (3))){
var inst_21619 = (state_21621[(2)]);
var state_21621__$1 = state_21621;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21621__$1,inst_21619);
} else {
if((state_val_21622 === (4))){
var inst_21611 = (state_21621[(2)]);
var inst_21612 = process.call(null,inst_21611);
var state_21621__$1 = state_21621;
if(cljs.core.truth_(inst_21612)){
var statearr_21624_21782 = state_21621__$1;
(statearr_21624_21782[(1)] = (5));

} else {
var statearr_21625_21783 = state_21621__$1;
(statearr_21625_21783[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21622 === (5))){
var state_21621__$1 = state_21621;
var statearr_21626_21784 = state_21621__$1;
(statearr_21626_21784[(2)] = null);

(statearr_21626_21784[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21622 === (6))){
var state_21621__$1 = state_21621;
var statearr_21627_21785 = state_21621__$1;
(statearr_21627_21785[(2)] = null);

(statearr_21627_21785[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21622 === (7))){
var inst_21617 = (state_21621[(2)]);
var state_21621__$1 = state_21621;
var statearr_21628_21786 = state_21621__$1;
(statearr_21628_21786[(2)] = inst_21617);

(statearr_21628_21786[(1)] = (3));


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
});})(__21777,c__21223__auto___21780,G__21608_21778,n__19343__auto___21776,jobs,results,process,async))
;
return ((function (__21777,switch__21111__auto__,c__21223__auto___21780,G__21608_21778,n__19343__auto___21776,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21112__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21112__auto____0 = (function (){
var statearr_21632 = [null,null,null,null,null,null,null];
(statearr_21632[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21112__auto__);

(statearr_21632[(1)] = (1));

return statearr_21632;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21112__auto____1 = (function (state_21621){
while(true){
var ret_value__21113__auto__ = (function (){try{while(true){
var result__21114__auto__ = switch__21111__auto__.call(null,state_21621);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21114__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21114__auto__;
}
break;
}
}catch (e21633){if((e21633 instanceof Object)){
var ex__21115__auto__ = e21633;
var statearr_21634_21787 = state_21621;
(statearr_21634_21787[(5)] = ex__21115__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21621);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21633;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21788 = state_21621;
state_21621 = G__21788;
continue;
} else {
return ret_value__21113__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21112__auto__ = function(state_21621){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21112__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21112__auto____1.call(this,state_21621);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21112__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21112__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21112__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21112__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21112__auto__;
})()
;})(__21777,switch__21111__auto__,c__21223__auto___21780,G__21608_21778,n__19343__auto___21776,jobs,results,process,async))
})();
var state__21225__auto__ = (function (){var statearr_21635 = f__21224__auto__.call(null);
(statearr_21635[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21223__auto___21780);

return statearr_21635;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21225__auto__);
});})(__21777,c__21223__auto___21780,G__21608_21778,n__19343__auto___21776,jobs,results,process,async))
);


break;
case "async":
var c__21223__auto___21789 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__21777,c__21223__auto___21789,G__21608_21778,n__19343__auto___21776,jobs,results,process,async){
return (function (){
var f__21224__auto__ = (function (){var switch__21111__auto__ = ((function (__21777,c__21223__auto___21789,G__21608_21778,n__19343__auto___21776,jobs,results,process,async){
return (function (state_21648){
var state_val_21649 = (state_21648[(1)]);
if((state_val_21649 === (1))){
var state_21648__$1 = state_21648;
var statearr_21650_21790 = state_21648__$1;
(statearr_21650_21790[(2)] = null);

(statearr_21650_21790[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21649 === (2))){
var state_21648__$1 = state_21648;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21648__$1,(4),jobs);
} else {
if((state_val_21649 === (3))){
var inst_21646 = (state_21648[(2)]);
var state_21648__$1 = state_21648;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21648__$1,inst_21646);
} else {
if((state_val_21649 === (4))){
var inst_21638 = (state_21648[(2)]);
var inst_21639 = async.call(null,inst_21638);
var state_21648__$1 = state_21648;
if(cljs.core.truth_(inst_21639)){
var statearr_21651_21791 = state_21648__$1;
(statearr_21651_21791[(1)] = (5));

} else {
var statearr_21652_21792 = state_21648__$1;
(statearr_21652_21792[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21649 === (5))){
var state_21648__$1 = state_21648;
var statearr_21653_21793 = state_21648__$1;
(statearr_21653_21793[(2)] = null);

(statearr_21653_21793[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21649 === (6))){
var state_21648__$1 = state_21648;
var statearr_21654_21794 = state_21648__$1;
(statearr_21654_21794[(2)] = null);

(statearr_21654_21794[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21649 === (7))){
var inst_21644 = (state_21648[(2)]);
var state_21648__$1 = state_21648;
var statearr_21655_21795 = state_21648__$1;
(statearr_21655_21795[(2)] = inst_21644);

(statearr_21655_21795[(1)] = (3));


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
});})(__21777,c__21223__auto___21789,G__21608_21778,n__19343__auto___21776,jobs,results,process,async))
;
return ((function (__21777,switch__21111__auto__,c__21223__auto___21789,G__21608_21778,n__19343__auto___21776,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21112__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21112__auto____0 = (function (){
var statearr_21659 = [null,null,null,null,null,null,null];
(statearr_21659[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21112__auto__);

(statearr_21659[(1)] = (1));

return statearr_21659;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21112__auto____1 = (function (state_21648){
while(true){
var ret_value__21113__auto__ = (function (){try{while(true){
var result__21114__auto__ = switch__21111__auto__.call(null,state_21648);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21114__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21114__auto__;
}
break;
}
}catch (e21660){if((e21660 instanceof Object)){
var ex__21115__auto__ = e21660;
var statearr_21661_21796 = state_21648;
(statearr_21661_21796[(5)] = ex__21115__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21648);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21660;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21797 = state_21648;
state_21648 = G__21797;
continue;
} else {
return ret_value__21113__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21112__auto__ = function(state_21648){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21112__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21112__auto____1.call(this,state_21648);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21112__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21112__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21112__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21112__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21112__auto__;
})()
;})(__21777,switch__21111__auto__,c__21223__auto___21789,G__21608_21778,n__19343__auto___21776,jobs,results,process,async))
})();
var state__21225__auto__ = (function (){var statearr_21662 = f__21224__auto__.call(null);
(statearr_21662[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21223__auto___21789);

return statearr_21662;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21225__auto__);
});})(__21777,c__21223__auto___21789,G__21608_21778,n__19343__auto___21776,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__21798 = (__21777 + (1));
__21777 = G__21798;
continue;
} else {
}
break;
}

var c__21223__auto___21799 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21223__auto___21799,jobs,results,process,async){
return (function (){
var f__21224__auto__ = (function (){var switch__21111__auto__ = ((function (c__21223__auto___21799,jobs,results,process,async){
return (function (state_21684){
var state_val_21685 = (state_21684[(1)]);
if((state_val_21685 === (1))){
var state_21684__$1 = state_21684;
var statearr_21686_21800 = state_21684__$1;
(statearr_21686_21800[(2)] = null);

(statearr_21686_21800[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21685 === (2))){
var state_21684__$1 = state_21684;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21684__$1,(4),from);
} else {
if((state_val_21685 === (3))){
var inst_21682 = (state_21684[(2)]);
var state_21684__$1 = state_21684;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21684__$1,inst_21682);
} else {
if((state_val_21685 === (4))){
var inst_21665 = (state_21684[(7)]);
var inst_21665__$1 = (state_21684[(2)]);
var inst_21666 = (inst_21665__$1 == null);
var state_21684__$1 = (function (){var statearr_21687 = state_21684;
(statearr_21687[(7)] = inst_21665__$1);

return statearr_21687;
})();
if(cljs.core.truth_(inst_21666)){
var statearr_21688_21801 = state_21684__$1;
(statearr_21688_21801[(1)] = (5));

} else {
var statearr_21689_21802 = state_21684__$1;
(statearr_21689_21802[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21685 === (5))){
var inst_21668 = cljs.core.async.close_BANG_.call(null,jobs);
var state_21684__$1 = state_21684;
var statearr_21690_21803 = state_21684__$1;
(statearr_21690_21803[(2)] = inst_21668);

(statearr_21690_21803[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21685 === (6))){
var inst_21670 = (state_21684[(8)]);
var inst_21665 = (state_21684[(7)]);
var inst_21670__$1 = cljs.core.async.chan.call(null,(1));
var inst_21671 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_21672 = [inst_21665,inst_21670__$1];
var inst_21673 = (new cljs.core.PersistentVector(null,2,(5),inst_21671,inst_21672,null));
var state_21684__$1 = (function (){var statearr_21691 = state_21684;
(statearr_21691[(8)] = inst_21670__$1);

return statearr_21691;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21684__$1,(8),jobs,inst_21673);
} else {
if((state_val_21685 === (7))){
var inst_21680 = (state_21684[(2)]);
var state_21684__$1 = state_21684;
var statearr_21692_21804 = state_21684__$1;
(statearr_21692_21804[(2)] = inst_21680);

(statearr_21692_21804[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21685 === (8))){
var inst_21670 = (state_21684[(8)]);
var inst_21675 = (state_21684[(2)]);
var state_21684__$1 = (function (){var statearr_21693 = state_21684;
(statearr_21693[(9)] = inst_21675);

return statearr_21693;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21684__$1,(9),results,inst_21670);
} else {
if((state_val_21685 === (9))){
var inst_21677 = (state_21684[(2)]);
var state_21684__$1 = (function (){var statearr_21694 = state_21684;
(statearr_21694[(10)] = inst_21677);

return statearr_21694;
})();
var statearr_21695_21805 = state_21684__$1;
(statearr_21695_21805[(2)] = null);

(statearr_21695_21805[(1)] = (2));


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
});})(c__21223__auto___21799,jobs,results,process,async))
;
return ((function (switch__21111__auto__,c__21223__auto___21799,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21112__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21112__auto____0 = (function (){
var statearr_21699 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_21699[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21112__auto__);

(statearr_21699[(1)] = (1));

return statearr_21699;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21112__auto____1 = (function (state_21684){
while(true){
var ret_value__21113__auto__ = (function (){try{while(true){
var result__21114__auto__ = switch__21111__auto__.call(null,state_21684);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21114__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21114__auto__;
}
break;
}
}catch (e21700){if((e21700 instanceof Object)){
var ex__21115__auto__ = e21700;
var statearr_21701_21806 = state_21684;
(statearr_21701_21806[(5)] = ex__21115__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21684);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21700;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21807 = state_21684;
state_21684 = G__21807;
continue;
} else {
return ret_value__21113__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21112__auto__ = function(state_21684){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21112__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21112__auto____1.call(this,state_21684);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21112__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21112__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21112__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21112__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21112__auto__;
})()
;})(switch__21111__auto__,c__21223__auto___21799,jobs,results,process,async))
})();
var state__21225__auto__ = (function (){var statearr_21702 = f__21224__auto__.call(null);
(statearr_21702[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21223__auto___21799);

return statearr_21702;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21225__auto__);
});})(c__21223__auto___21799,jobs,results,process,async))
);


var c__21223__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21223__auto__,jobs,results,process,async){
return (function (){
var f__21224__auto__ = (function (){var switch__21111__auto__ = ((function (c__21223__auto__,jobs,results,process,async){
return (function (state_21740){
var state_val_21741 = (state_21740[(1)]);
if((state_val_21741 === (7))){
var inst_21736 = (state_21740[(2)]);
var state_21740__$1 = state_21740;
var statearr_21742_21808 = state_21740__$1;
(statearr_21742_21808[(2)] = inst_21736);

(statearr_21742_21808[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21741 === (20))){
var state_21740__$1 = state_21740;
var statearr_21743_21809 = state_21740__$1;
(statearr_21743_21809[(2)] = null);

(statearr_21743_21809[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21741 === (1))){
var state_21740__$1 = state_21740;
var statearr_21744_21810 = state_21740__$1;
(statearr_21744_21810[(2)] = null);

(statearr_21744_21810[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21741 === (4))){
var inst_21705 = (state_21740[(7)]);
var inst_21705__$1 = (state_21740[(2)]);
var inst_21706 = (inst_21705__$1 == null);
var state_21740__$1 = (function (){var statearr_21745 = state_21740;
(statearr_21745[(7)] = inst_21705__$1);

return statearr_21745;
})();
if(cljs.core.truth_(inst_21706)){
var statearr_21746_21811 = state_21740__$1;
(statearr_21746_21811[(1)] = (5));

} else {
var statearr_21747_21812 = state_21740__$1;
(statearr_21747_21812[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21741 === (15))){
var inst_21718 = (state_21740[(8)]);
var state_21740__$1 = state_21740;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21740__$1,(18),to,inst_21718);
} else {
if((state_val_21741 === (21))){
var inst_21731 = (state_21740[(2)]);
var state_21740__$1 = state_21740;
var statearr_21748_21813 = state_21740__$1;
(statearr_21748_21813[(2)] = inst_21731);

(statearr_21748_21813[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21741 === (13))){
var inst_21733 = (state_21740[(2)]);
var state_21740__$1 = (function (){var statearr_21749 = state_21740;
(statearr_21749[(9)] = inst_21733);

return statearr_21749;
})();
var statearr_21750_21814 = state_21740__$1;
(statearr_21750_21814[(2)] = null);

(statearr_21750_21814[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21741 === (6))){
var inst_21705 = (state_21740[(7)]);
var state_21740__$1 = state_21740;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21740__$1,(11),inst_21705);
} else {
if((state_val_21741 === (17))){
var inst_21726 = (state_21740[(2)]);
var state_21740__$1 = state_21740;
if(cljs.core.truth_(inst_21726)){
var statearr_21751_21815 = state_21740__$1;
(statearr_21751_21815[(1)] = (19));

} else {
var statearr_21752_21816 = state_21740__$1;
(statearr_21752_21816[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21741 === (3))){
var inst_21738 = (state_21740[(2)]);
var state_21740__$1 = state_21740;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21740__$1,inst_21738);
} else {
if((state_val_21741 === (12))){
var inst_21715 = (state_21740[(10)]);
var state_21740__$1 = state_21740;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21740__$1,(14),inst_21715);
} else {
if((state_val_21741 === (2))){
var state_21740__$1 = state_21740;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21740__$1,(4),results);
} else {
if((state_val_21741 === (19))){
var state_21740__$1 = state_21740;
var statearr_21753_21817 = state_21740__$1;
(statearr_21753_21817[(2)] = null);

(statearr_21753_21817[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21741 === (11))){
var inst_21715 = (state_21740[(2)]);
var state_21740__$1 = (function (){var statearr_21754 = state_21740;
(statearr_21754[(10)] = inst_21715);

return statearr_21754;
})();
var statearr_21755_21818 = state_21740__$1;
(statearr_21755_21818[(2)] = null);

(statearr_21755_21818[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21741 === (9))){
var state_21740__$1 = state_21740;
var statearr_21756_21819 = state_21740__$1;
(statearr_21756_21819[(2)] = null);

(statearr_21756_21819[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21741 === (5))){
var state_21740__$1 = state_21740;
if(cljs.core.truth_(close_QMARK_)){
var statearr_21757_21820 = state_21740__$1;
(statearr_21757_21820[(1)] = (8));

} else {
var statearr_21758_21821 = state_21740__$1;
(statearr_21758_21821[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21741 === (14))){
var inst_21718 = (state_21740[(8)]);
var inst_21720 = (state_21740[(11)]);
var inst_21718__$1 = (state_21740[(2)]);
var inst_21719 = (inst_21718__$1 == null);
var inst_21720__$1 = cljs.core.not.call(null,inst_21719);
var state_21740__$1 = (function (){var statearr_21759 = state_21740;
(statearr_21759[(8)] = inst_21718__$1);

(statearr_21759[(11)] = inst_21720__$1);

return statearr_21759;
})();
if(inst_21720__$1){
var statearr_21760_21822 = state_21740__$1;
(statearr_21760_21822[(1)] = (15));

} else {
var statearr_21761_21823 = state_21740__$1;
(statearr_21761_21823[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21741 === (16))){
var inst_21720 = (state_21740[(11)]);
var state_21740__$1 = state_21740;
var statearr_21762_21824 = state_21740__$1;
(statearr_21762_21824[(2)] = inst_21720);

(statearr_21762_21824[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21741 === (10))){
var inst_21712 = (state_21740[(2)]);
var state_21740__$1 = state_21740;
var statearr_21763_21825 = state_21740__$1;
(statearr_21763_21825[(2)] = inst_21712);

(statearr_21763_21825[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21741 === (18))){
var inst_21723 = (state_21740[(2)]);
var state_21740__$1 = state_21740;
var statearr_21764_21826 = state_21740__$1;
(statearr_21764_21826[(2)] = inst_21723);

(statearr_21764_21826[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21741 === (8))){
var inst_21709 = cljs.core.async.close_BANG_.call(null,to);
var state_21740__$1 = state_21740;
var statearr_21765_21827 = state_21740__$1;
(statearr_21765_21827[(2)] = inst_21709);

(statearr_21765_21827[(1)] = (10));


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
});})(c__21223__auto__,jobs,results,process,async))
;
return ((function (switch__21111__auto__,c__21223__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21112__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21112__auto____0 = (function (){
var statearr_21769 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21769[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21112__auto__);

(statearr_21769[(1)] = (1));

return statearr_21769;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21112__auto____1 = (function (state_21740){
while(true){
var ret_value__21113__auto__ = (function (){try{while(true){
var result__21114__auto__ = switch__21111__auto__.call(null,state_21740);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21114__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21114__auto__;
}
break;
}
}catch (e21770){if((e21770 instanceof Object)){
var ex__21115__auto__ = e21770;
var statearr_21771_21828 = state_21740;
(statearr_21771_21828[(5)] = ex__21115__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21740);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21770;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21829 = state_21740;
state_21740 = G__21829;
continue;
} else {
return ret_value__21113__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21112__auto__ = function(state_21740){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21112__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21112__auto____1.call(this,state_21740);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21112__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21112__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21112__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21112__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21112__auto__;
})()
;})(switch__21111__auto__,c__21223__auto__,jobs,results,process,async))
})();
var state__21225__auto__ = (function (){var statearr_21772 = f__21224__auto__.call(null);
(statearr_21772[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21223__auto__);

return statearr_21772;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21225__auto__);
});})(c__21223__auto__,jobs,results,process,async))
);

return c__21223__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args21830 = [];
var len__19499__auto___21833 = arguments.length;
var i__19500__auto___21834 = (0);
while(true){
if((i__19500__auto___21834 < len__19499__auto___21833)){
args21830.push((arguments[i__19500__auto___21834]));

var G__21835 = (i__19500__auto___21834 + (1));
i__19500__auto___21834 = G__21835;
continue;
} else {
}
break;
}

var G__21832 = args21830.length;
switch (G__21832) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21830.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args21837 = [];
var len__19499__auto___21840 = arguments.length;
var i__19500__auto___21841 = (0);
while(true){
if((i__19500__auto___21841 < len__19499__auto___21840)){
args21837.push((arguments[i__19500__auto___21841]));

var G__21842 = (i__19500__auto___21841 + (1));
i__19500__auto___21841 = G__21842;
continue;
} else {
}
break;
}

var G__21839 = args21837.length;
switch (G__21839) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21837.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args21844 = [];
var len__19499__auto___21897 = arguments.length;
var i__19500__auto___21898 = (0);
while(true){
if((i__19500__auto___21898 < len__19499__auto___21897)){
args21844.push((arguments[i__19500__auto___21898]));

var G__21899 = (i__19500__auto___21898 + (1));
i__19500__auto___21898 = G__21899;
continue;
} else {
}
break;
}

var G__21846 = args21844.length;
switch (G__21846) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21844.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__21223__auto___21901 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21223__auto___21901,tc,fc){
return (function (){
var f__21224__auto__ = (function (){var switch__21111__auto__ = ((function (c__21223__auto___21901,tc,fc){
return (function (state_21872){
var state_val_21873 = (state_21872[(1)]);
if((state_val_21873 === (7))){
var inst_21868 = (state_21872[(2)]);
var state_21872__$1 = state_21872;
var statearr_21874_21902 = state_21872__$1;
(statearr_21874_21902[(2)] = inst_21868);

(statearr_21874_21902[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21873 === (1))){
var state_21872__$1 = state_21872;
var statearr_21875_21903 = state_21872__$1;
(statearr_21875_21903[(2)] = null);

(statearr_21875_21903[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21873 === (4))){
var inst_21849 = (state_21872[(7)]);
var inst_21849__$1 = (state_21872[(2)]);
var inst_21850 = (inst_21849__$1 == null);
var state_21872__$1 = (function (){var statearr_21876 = state_21872;
(statearr_21876[(7)] = inst_21849__$1);

return statearr_21876;
})();
if(cljs.core.truth_(inst_21850)){
var statearr_21877_21904 = state_21872__$1;
(statearr_21877_21904[(1)] = (5));

} else {
var statearr_21878_21905 = state_21872__$1;
(statearr_21878_21905[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21873 === (13))){
var state_21872__$1 = state_21872;
var statearr_21879_21906 = state_21872__$1;
(statearr_21879_21906[(2)] = null);

(statearr_21879_21906[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21873 === (6))){
var inst_21849 = (state_21872[(7)]);
var inst_21855 = p.call(null,inst_21849);
var state_21872__$1 = state_21872;
if(cljs.core.truth_(inst_21855)){
var statearr_21880_21907 = state_21872__$1;
(statearr_21880_21907[(1)] = (9));

} else {
var statearr_21881_21908 = state_21872__$1;
(statearr_21881_21908[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21873 === (3))){
var inst_21870 = (state_21872[(2)]);
var state_21872__$1 = state_21872;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21872__$1,inst_21870);
} else {
if((state_val_21873 === (12))){
var state_21872__$1 = state_21872;
var statearr_21882_21909 = state_21872__$1;
(statearr_21882_21909[(2)] = null);

(statearr_21882_21909[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21873 === (2))){
var state_21872__$1 = state_21872;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21872__$1,(4),ch);
} else {
if((state_val_21873 === (11))){
var inst_21849 = (state_21872[(7)]);
var inst_21859 = (state_21872[(2)]);
var state_21872__$1 = state_21872;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21872__$1,(8),inst_21859,inst_21849);
} else {
if((state_val_21873 === (9))){
var state_21872__$1 = state_21872;
var statearr_21883_21910 = state_21872__$1;
(statearr_21883_21910[(2)] = tc);

(statearr_21883_21910[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21873 === (5))){
var inst_21852 = cljs.core.async.close_BANG_.call(null,tc);
var inst_21853 = cljs.core.async.close_BANG_.call(null,fc);
var state_21872__$1 = (function (){var statearr_21884 = state_21872;
(statearr_21884[(8)] = inst_21852);

return statearr_21884;
})();
var statearr_21885_21911 = state_21872__$1;
(statearr_21885_21911[(2)] = inst_21853);

(statearr_21885_21911[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21873 === (14))){
var inst_21866 = (state_21872[(2)]);
var state_21872__$1 = state_21872;
var statearr_21886_21912 = state_21872__$1;
(statearr_21886_21912[(2)] = inst_21866);

(statearr_21886_21912[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21873 === (10))){
var state_21872__$1 = state_21872;
var statearr_21887_21913 = state_21872__$1;
(statearr_21887_21913[(2)] = fc);

(statearr_21887_21913[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21873 === (8))){
var inst_21861 = (state_21872[(2)]);
var state_21872__$1 = state_21872;
if(cljs.core.truth_(inst_21861)){
var statearr_21888_21914 = state_21872__$1;
(statearr_21888_21914[(1)] = (12));

} else {
var statearr_21889_21915 = state_21872__$1;
(statearr_21889_21915[(1)] = (13));

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
});})(c__21223__auto___21901,tc,fc))
;
return ((function (switch__21111__auto__,c__21223__auto___21901,tc,fc){
return (function() {
var cljs$core$async$state_machine__21112__auto__ = null;
var cljs$core$async$state_machine__21112__auto____0 = (function (){
var statearr_21893 = [null,null,null,null,null,null,null,null,null];
(statearr_21893[(0)] = cljs$core$async$state_machine__21112__auto__);

(statearr_21893[(1)] = (1));

return statearr_21893;
});
var cljs$core$async$state_machine__21112__auto____1 = (function (state_21872){
while(true){
var ret_value__21113__auto__ = (function (){try{while(true){
var result__21114__auto__ = switch__21111__auto__.call(null,state_21872);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21114__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21114__auto__;
}
break;
}
}catch (e21894){if((e21894 instanceof Object)){
var ex__21115__auto__ = e21894;
var statearr_21895_21916 = state_21872;
(statearr_21895_21916[(5)] = ex__21115__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21872);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21894;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21917 = state_21872;
state_21872 = G__21917;
continue;
} else {
return ret_value__21113__auto__;
}
break;
}
});
cljs$core$async$state_machine__21112__auto__ = function(state_21872){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21112__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21112__auto____1.call(this,state_21872);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21112__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21112__auto____0;
cljs$core$async$state_machine__21112__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21112__auto____1;
return cljs$core$async$state_machine__21112__auto__;
})()
;})(switch__21111__auto__,c__21223__auto___21901,tc,fc))
})();
var state__21225__auto__ = (function (){var statearr_21896 = f__21224__auto__.call(null);
(statearr_21896[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21223__auto___21901);

return statearr_21896;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21225__auto__);
});})(c__21223__auto___21901,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__21223__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21223__auto__){
return (function (){
var f__21224__auto__ = (function (){var switch__21111__auto__ = ((function (c__21223__auto__){
return (function (state_21981){
var state_val_21982 = (state_21981[(1)]);
if((state_val_21982 === (7))){
var inst_21977 = (state_21981[(2)]);
var state_21981__$1 = state_21981;
var statearr_21983_22004 = state_21981__$1;
(statearr_21983_22004[(2)] = inst_21977);

(statearr_21983_22004[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21982 === (1))){
var inst_21961 = init;
var state_21981__$1 = (function (){var statearr_21984 = state_21981;
(statearr_21984[(7)] = inst_21961);

return statearr_21984;
})();
var statearr_21985_22005 = state_21981__$1;
(statearr_21985_22005[(2)] = null);

(statearr_21985_22005[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21982 === (4))){
var inst_21964 = (state_21981[(8)]);
var inst_21964__$1 = (state_21981[(2)]);
var inst_21965 = (inst_21964__$1 == null);
var state_21981__$1 = (function (){var statearr_21986 = state_21981;
(statearr_21986[(8)] = inst_21964__$1);

return statearr_21986;
})();
if(cljs.core.truth_(inst_21965)){
var statearr_21987_22006 = state_21981__$1;
(statearr_21987_22006[(1)] = (5));

} else {
var statearr_21988_22007 = state_21981__$1;
(statearr_21988_22007[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21982 === (6))){
var inst_21968 = (state_21981[(9)]);
var inst_21964 = (state_21981[(8)]);
var inst_21961 = (state_21981[(7)]);
var inst_21968__$1 = f.call(null,inst_21961,inst_21964);
var inst_21969 = cljs.core.reduced_QMARK_.call(null,inst_21968__$1);
var state_21981__$1 = (function (){var statearr_21989 = state_21981;
(statearr_21989[(9)] = inst_21968__$1);

return statearr_21989;
})();
if(inst_21969){
var statearr_21990_22008 = state_21981__$1;
(statearr_21990_22008[(1)] = (8));

} else {
var statearr_21991_22009 = state_21981__$1;
(statearr_21991_22009[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21982 === (3))){
var inst_21979 = (state_21981[(2)]);
var state_21981__$1 = state_21981;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21981__$1,inst_21979);
} else {
if((state_val_21982 === (2))){
var state_21981__$1 = state_21981;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21981__$1,(4),ch);
} else {
if((state_val_21982 === (9))){
var inst_21968 = (state_21981[(9)]);
var inst_21961 = inst_21968;
var state_21981__$1 = (function (){var statearr_21992 = state_21981;
(statearr_21992[(7)] = inst_21961);

return statearr_21992;
})();
var statearr_21993_22010 = state_21981__$1;
(statearr_21993_22010[(2)] = null);

(statearr_21993_22010[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21982 === (5))){
var inst_21961 = (state_21981[(7)]);
var state_21981__$1 = state_21981;
var statearr_21994_22011 = state_21981__$1;
(statearr_21994_22011[(2)] = inst_21961);

(statearr_21994_22011[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21982 === (10))){
var inst_21975 = (state_21981[(2)]);
var state_21981__$1 = state_21981;
var statearr_21995_22012 = state_21981__$1;
(statearr_21995_22012[(2)] = inst_21975);

(statearr_21995_22012[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21982 === (8))){
var inst_21968 = (state_21981[(9)]);
var inst_21971 = cljs.core.deref.call(null,inst_21968);
var state_21981__$1 = state_21981;
var statearr_21996_22013 = state_21981__$1;
(statearr_21996_22013[(2)] = inst_21971);

(statearr_21996_22013[(1)] = (10));


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
});})(c__21223__auto__))
;
return ((function (switch__21111__auto__,c__21223__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__21112__auto__ = null;
var cljs$core$async$reduce_$_state_machine__21112__auto____0 = (function (){
var statearr_22000 = [null,null,null,null,null,null,null,null,null,null];
(statearr_22000[(0)] = cljs$core$async$reduce_$_state_machine__21112__auto__);

(statearr_22000[(1)] = (1));

return statearr_22000;
});
var cljs$core$async$reduce_$_state_machine__21112__auto____1 = (function (state_21981){
while(true){
var ret_value__21113__auto__ = (function (){try{while(true){
var result__21114__auto__ = switch__21111__auto__.call(null,state_21981);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21114__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21114__auto__;
}
break;
}
}catch (e22001){if((e22001 instanceof Object)){
var ex__21115__auto__ = e22001;
var statearr_22002_22014 = state_21981;
(statearr_22002_22014[(5)] = ex__21115__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21981);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22001;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22015 = state_21981;
state_21981 = G__22015;
continue;
} else {
return ret_value__21113__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__21112__auto__ = function(state_21981){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__21112__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__21112__auto____1.call(this,state_21981);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__21112__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__21112__auto____0;
cljs$core$async$reduce_$_state_machine__21112__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__21112__auto____1;
return cljs$core$async$reduce_$_state_machine__21112__auto__;
})()
;})(switch__21111__auto__,c__21223__auto__))
})();
var state__21225__auto__ = (function (){var statearr_22003 = f__21224__auto__.call(null);
(statearr_22003[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21223__auto__);

return statearr_22003;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21225__auto__);
});})(c__21223__auto__))
);

return c__21223__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args22016 = [];
var len__19499__auto___22068 = arguments.length;
var i__19500__auto___22069 = (0);
while(true){
if((i__19500__auto___22069 < len__19499__auto___22068)){
args22016.push((arguments[i__19500__auto___22069]));

var G__22070 = (i__19500__auto___22069 + (1));
i__19500__auto___22069 = G__22070;
continue;
} else {
}
break;
}

var G__22018 = args22016.length;
switch (G__22018) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22016.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__21223__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21223__auto__){
return (function (){
var f__21224__auto__ = (function (){var switch__21111__auto__ = ((function (c__21223__auto__){
return (function (state_22043){
var state_val_22044 = (state_22043[(1)]);
if((state_val_22044 === (7))){
var inst_22025 = (state_22043[(2)]);
var state_22043__$1 = state_22043;
var statearr_22045_22072 = state_22043__$1;
(statearr_22045_22072[(2)] = inst_22025);

(statearr_22045_22072[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22044 === (1))){
var inst_22019 = cljs.core.seq.call(null,coll);
var inst_22020 = inst_22019;
var state_22043__$1 = (function (){var statearr_22046 = state_22043;
(statearr_22046[(7)] = inst_22020);

return statearr_22046;
})();
var statearr_22047_22073 = state_22043__$1;
(statearr_22047_22073[(2)] = null);

(statearr_22047_22073[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22044 === (4))){
var inst_22020 = (state_22043[(7)]);
var inst_22023 = cljs.core.first.call(null,inst_22020);
var state_22043__$1 = state_22043;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22043__$1,(7),ch,inst_22023);
} else {
if((state_val_22044 === (13))){
var inst_22037 = (state_22043[(2)]);
var state_22043__$1 = state_22043;
var statearr_22048_22074 = state_22043__$1;
(statearr_22048_22074[(2)] = inst_22037);

(statearr_22048_22074[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22044 === (6))){
var inst_22028 = (state_22043[(2)]);
var state_22043__$1 = state_22043;
if(cljs.core.truth_(inst_22028)){
var statearr_22049_22075 = state_22043__$1;
(statearr_22049_22075[(1)] = (8));

} else {
var statearr_22050_22076 = state_22043__$1;
(statearr_22050_22076[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22044 === (3))){
var inst_22041 = (state_22043[(2)]);
var state_22043__$1 = state_22043;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22043__$1,inst_22041);
} else {
if((state_val_22044 === (12))){
var state_22043__$1 = state_22043;
var statearr_22051_22077 = state_22043__$1;
(statearr_22051_22077[(2)] = null);

(statearr_22051_22077[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22044 === (2))){
var inst_22020 = (state_22043[(7)]);
var state_22043__$1 = state_22043;
if(cljs.core.truth_(inst_22020)){
var statearr_22052_22078 = state_22043__$1;
(statearr_22052_22078[(1)] = (4));

} else {
var statearr_22053_22079 = state_22043__$1;
(statearr_22053_22079[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22044 === (11))){
var inst_22034 = cljs.core.async.close_BANG_.call(null,ch);
var state_22043__$1 = state_22043;
var statearr_22054_22080 = state_22043__$1;
(statearr_22054_22080[(2)] = inst_22034);

(statearr_22054_22080[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22044 === (9))){
var state_22043__$1 = state_22043;
if(cljs.core.truth_(close_QMARK_)){
var statearr_22055_22081 = state_22043__$1;
(statearr_22055_22081[(1)] = (11));

} else {
var statearr_22056_22082 = state_22043__$1;
(statearr_22056_22082[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22044 === (5))){
var inst_22020 = (state_22043[(7)]);
var state_22043__$1 = state_22043;
var statearr_22057_22083 = state_22043__$1;
(statearr_22057_22083[(2)] = inst_22020);

(statearr_22057_22083[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22044 === (10))){
var inst_22039 = (state_22043[(2)]);
var state_22043__$1 = state_22043;
var statearr_22058_22084 = state_22043__$1;
(statearr_22058_22084[(2)] = inst_22039);

(statearr_22058_22084[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22044 === (8))){
var inst_22020 = (state_22043[(7)]);
var inst_22030 = cljs.core.next.call(null,inst_22020);
var inst_22020__$1 = inst_22030;
var state_22043__$1 = (function (){var statearr_22059 = state_22043;
(statearr_22059[(7)] = inst_22020__$1);

return statearr_22059;
})();
var statearr_22060_22085 = state_22043__$1;
(statearr_22060_22085[(2)] = null);

(statearr_22060_22085[(1)] = (2));


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
});})(c__21223__auto__))
;
return ((function (switch__21111__auto__,c__21223__auto__){
return (function() {
var cljs$core$async$state_machine__21112__auto__ = null;
var cljs$core$async$state_machine__21112__auto____0 = (function (){
var statearr_22064 = [null,null,null,null,null,null,null,null];
(statearr_22064[(0)] = cljs$core$async$state_machine__21112__auto__);

(statearr_22064[(1)] = (1));

return statearr_22064;
});
var cljs$core$async$state_machine__21112__auto____1 = (function (state_22043){
while(true){
var ret_value__21113__auto__ = (function (){try{while(true){
var result__21114__auto__ = switch__21111__auto__.call(null,state_22043);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21114__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21114__auto__;
}
break;
}
}catch (e22065){if((e22065 instanceof Object)){
var ex__21115__auto__ = e22065;
var statearr_22066_22086 = state_22043;
(statearr_22066_22086[(5)] = ex__21115__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22043);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22065;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22087 = state_22043;
state_22043 = G__22087;
continue;
} else {
return ret_value__21113__auto__;
}
break;
}
});
cljs$core$async$state_machine__21112__auto__ = function(state_22043){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21112__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21112__auto____1.call(this,state_22043);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21112__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21112__auto____0;
cljs$core$async$state_machine__21112__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21112__auto____1;
return cljs$core$async$state_machine__21112__auto__;
})()
;})(switch__21111__auto__,c__21223__auto__))
})();
var state__21225__auto__ = (function (){var statearr_22067 = f__21224__auto__.call(null);
(statearr_22067[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21223__auto__);

return statearr_22067;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21225__auto__);
});})(c__21223__auto__))
);

return c__21223__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__19091__auto__ = (((_ == null))?null:_);
var m__19092__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__19091__auto__)]);
if(!((m__19092__auto__ == null))){
return m__19092__auto__.call(null,_);
} else {
var m__19092__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__19092__auto____$1 == null))){
return m__19092__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__19091__auto__ = (((m == null))?null:m);
var m__19092__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__19091__auto__)]);
if(!((m__19092__auto__ == null))){
return m__19092__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__19092__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__19092__auto____$1 == null))){
return m__19092__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__19091__auto__ = (((m == null))?null:m);
var m__19092__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__19091__auto__)]);
if(!((m__19092__auto__ == null))){
return m__19092__auto__.call(null,m,ch);
} else {
var m__19092__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__19092__auto____$1 == null))){
return m__19092__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__19091__auto__ = (((m == null))?null:m);
var m__19092__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__19091__auto__)]);
if(!((m__19092__auto__ == null))){
return m__19092__auto__.call(null,m);
} else {
var m__19092__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__19092__auto____$1 == null))){
return m__19092__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async22309 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22309 = (function (mult,ch,cs,meta22310){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta22310 = meta22310;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22309.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_22311,meta22310__$1){
var self__ = this;
var _22311__$1 = this;
return (new cljs.core.async.t_cljs$core$async22309(self__.mult,self__.ch,self__.cs,meta22310__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async22309.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_22311){
var self__ = this;
var _22311__$1 = this;
return self__.meta22310;
});})(cs))
;

cljs.core.async.t_cljs$core$async22309.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async22309.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async22309.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async22309.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async22309.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async22309.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async22309.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta22310","meta22310",1248863601,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async22309.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22309.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22309";

cljs.core.async.t_cljs$core$async22309.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__19034__auto__,writer__19035__auto__,opt__19036__auto__){
return cljs.core._write.call(null,writer__19035__auto__,"cljs.core.async/t_cljs$core$async22309");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async22309 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async22309(mult__$1,ch__$1,cs__$1,meta22310){
return (new cljs.core.async.t_cljs$core$async22309(mult__$1,ch__$1,cs__$1,meta22310));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async22309(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__21223__auto___22530 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21223__auto___22530,cs,m,dchan,dctr,done){
return (function (){
var f__21224__auto__ = (function (){var switch__21111__auto__ = ((function (c__21223__auto___22530,cs,m,dchan,dctr,done){
return (function (state_22442){
var state_val_22443 = (state_22442[(1)]);
if((state_val_22443 === (7))){
var inst_22438 = (state_22442[(2)]);
var state_22442__$1 = state_22442;
var statearr_22444_22531 = state_22442__$1;
(statearr_22444_22531[(2)] = inst_22438);

(statearr_22444_22531[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22443 === (20))){
var inst_22343 = (state_22442[(7)]);
var inst_22353 = cljs.core.first.call(null,inst_22343);
var inst_22354 = cljs.core.nth.call(null,inst_22353,(0),null);
var inst_22355 = cljs.core.nth.call(null,inst_22353,(1),null);
var state_22442__$1 = (function (){var statearr_22445 = state_22442;
(statearr_22445[(8)] = inst_22354);

return statearr_22445;
})();
if(cljs.core.truth_(inst_22355)){
var statearr_22446_22532 = state_22442__$1;
(statearr_22446_22532[(1)] = (22));

} else {
var statearr_22447_22533 = state_22442__$1;
(statearr_22447_22533[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22443 === (27))){
var inst_22314 = (state_22442[(9)]);
var inst_22385 = (state_22442[(10)]);
var inst_22383 = (state_22442[(11)]);
var inst_22390 = (state_22442[(12)]);
var inst_22390__$1 = cljs.core._nth.call(null,inst_22383,inst_22385);
var inst_22391 = cljs.core.async.put_BANG_.call(null,inst_22390__$1,inst_22314,done);
var state_22442__$1 = (function (){var statearr_22448 = state_22442;
(statearr_22448[(12)] = inst_22390__$1);

return statearr_22448;
})();
if(cljs.core.truth_(inst_22391)){
var statearr_22449_22534 = state_22442__$1;
(statearr_22449_22534[(1)] = (30));

} else {
var statearr_22450_22535 = state_22442__$1;
(statearr_22450_22535[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22443 === (1))){
var state_22442__$1 = state_22442;
var statearr_22451_22536 = state_22442__$1;
(statearr_22451_22536[(2)] = null);

(statearr_22451_22536[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22443 === (24))){
var inst_22343 = (state_22442[(7)]);
var inst_22360 = (state_22442[(2)]);
var inst_22361 = cljs.core.next.call(null,inst_22343);
var inst_22323 = inst_22361;
var inst_22324 = null;
var inst_22325 = (0);
var inst_22326 = (0);
var state_22442__$1 = (function (){var statearr_22452 = state_22442;
(statearr_22452[(13)] = inst_22326);

(statearr_22452[(14)] = inst_22324);

(statearr_22452[(15)] = inst_22325);

(statearr_22452[(16)] = inst_22360);

(statearr_22452[(17)] = inst_22323);

return statearr_22452;
})();
var statearr_22453_22537 = state_22442__$1;
(statearr_22453_22537[(2)] = null);

(statearr_22453_22537[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22443 === (39))){
var state_22442__$1 = state_22442;
var statearr_22457_22538 = state_22442__$1;
(statearr_22457_22538[(2)] = null);

(statearr_22457_22538[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22443 === (4))){
var inst_22314 = (state_22442[(9)]);
var inst_22314__$1 = (state_22442[(2)]);
var inst_22315 = (inst_22314__$1 == null);
var state_22442__$1 = (function (){var statearr_22458 = state_22442;
(statearr_22458[(9)] = inst_22314__$1);

return statearr_22458;
})();
if(cljs.core.truth_(inst_22315)){
var statearr_22459_22539 = state_22442__$1;
(statearr_22459_22539[(1)] = (5));

} else {
var statearr_22460_22540 = state_22442__$1;
(statearr_22460_22540[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22443 === (15))){
var inst_22326 = (state_22442[(13)]);
var inst_22324 = (state_22442[(14)]);
var inst_22325 = (state_22442[(15)]);
var inst_22323 = (state_22442[(17)]);
var inst_22339 = (state_22442[(2)]);
var inst_22340 = (inst_22326 + (1));
var tmp22454 = inst_22324;
var tmp22455 = inst_22325;
var tmp22456 = inst_22323;
var inst_22323__$1 = tmp22456;
var inst_22324__$1 = tmp22454;
var inst_22325__$1 = tmp22455;
var inst_22326__$1 = inst_22340;
var state_22442__$1 = (function (){var statearr_22461 = state_22442;
(statearr_22461[(18)] = inst_22339);

(statearr_22461[(13)] = inst_22326__$1);

(statearr_22461[(14)] = inst_22324__$1);

(statearr_22461[(15)] = inst_22325__$1);

(statearr_22461[(17)] = inst_22323__$1);

return statearr_22461;
})();
var statearr_22462_22541 = state_22442__$1;
(statearr_22462_22541[(2)] = null);

(statearr_22462_22541[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22443 === (21))){
var inst_22364 = (state_22442[(2)]);
var state_22442__$1 = state_22442;
var statearr_22466_22542 = state_22442__$1;
(statearr_22466_22542[(2)] = inst_22364);

(statearr_22466_22542[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22443 === (31))){
var inst_22390 = (state_22442[(12)]);
var inst_22394 = done.call(null,null);
var inst_22395 = cljs.core.async.untap_STAR_.call(null,m,inst_22390);
var state_22442__$1 = (function (){var statearr_22467 = state_22442;
(statearr_22467[(19)] = inst_22394);

return statearr_22467;
})();
var statearr_22468_22543 = state_22442__$1;
(statearr_22468_22543[(2)] = inst_22395);

(statearr_22468_22543[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22443 === (32))){
var inst_22382 = (state_22442[(20)]);
var inst_22384 = (state_22442[(21)]);
var inst_22385 = (state_22442[(10)]);
var inst_22383 = (state_22442[(11)]);
var inst_22397 = (state_22442[(2)]);
var inst_22398 = (inst_22385 + (1));
var tmp22463 = inst_22382;
var tmp22464 = inst_22384;
var tmp22465 = inst_22383;
var inst_22382__$1 = tmp22463;
var inst_22383__$1 = tmp22465;
var inst_22384__$1 = tmp22464;
var inst_22385__$1 = inst_22398;
var state_22442__$1 = (function (){var statearr_22469 = state_22442;
(statearr_22469[(20)] = inst_22382__$1);

(statearr_22469[(21)] = inst_22384__$1);

(statearr_22469[(10)] = inst_22385__$1);

(statearr_22469[(22)] = inst_22397);

(statearr_22469[(11)] = inst_22383__$1);

return statearr_22469;
})();
var statearr_22470_22544 = state_22442__$1;
(statearr_22470_22544[(2)] = null);

(statearr_22470_22544[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22443 === (40))){
var inst_22410 = (state_22442[(23)]);
var inst_22414 = done.call(null,null);
var inst_22415 = cljs.core.async.untap_STAR_.call(null,m,inst_22410);
var state_22442__$1 = (function (){var statearr_22471 = state_22442;
(statearr_22471[(24)] = inst_22414);

return statearr_22471;
})();
var statearr_22472_22545 = state_22442__$1;
(statearr_22472_22545[(2)] = inst_22415);

(statearr_22472_22545[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22443 === (33))){
var inst_22401 = (state_22442[(25)]);
var inst_22403 = cljs.core.chunked_seq_QMARK_.call(null,inst_22401);
var state_22442__$1 = state_22442;
if(inst_22403){
var statearr_22473_22546 = state_22442__$1;
(statearr_22473_22546[(1)] = (36));

} else {
var statearr_22474_22547 = state_22442__$1;
(statearr_22474_22547[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22443 === (13))){
var inst_22333 = (state_22442[(26)]);
var inst_22336 = cljs.core.async.close_BANG_.call(null,inst_22333);
var state_22442__$1 = state_22442;
var statearr_22475_22548 = state_22442__$1;
(statearr_22475_22548[(2)] = inst_22336);

(statearr_22475_22548[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22443 === (22))){
var inst_22354 = (state_22442[(8)]);
var inst_22357 = cljs.core.async.close_BANG_.call(null,inst_22354);
var state_22442__$1 = state_22442;
var statearr_22476_22549 = state_22442__$1;
(statearr_22476_22549[(2)] = inst_22357);

(statearr_22476_22549[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22443 === (36))){
var inst_22401 = (state_22442[(25)]);
var inst_22405 = cljs.core.chunk_first.call(null,inst_22401);
var inst_22406 = cljs.core.chunk_rest.call(null,inst_22401);
var inst_22407 = cljs.core.count.call(null,inst_22405);
var inst_22382 = inst_22406;
var inst_22383 = inst_22405;
var inst_22384 = inst_22407;
var inst_22385 = (0);
var state_22442__$1 = (function (){var statearr_22477 = state_22442;
(statearr_22477[(20)] = inst_22382);

(statearr_22477[(21)] = inst_22384);

(statearr_22477[(10)] = inst_22385);

(statearr_22477[(11)] = inst_22383);

return statearr_22477;
})();
var statearr_22478_22550 = state_22442__$1;
(statearr_22478_22550[(2)] = null);

(statearr_22478_22550[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22443 === (41))){
var inst_22401 = (state_22442[(25)]);
var inst_22417 = (state_22442[(2)]);
var inst_22418 = cljs.core.next.call(null,inst_22401);
var inst_22382 = inst_22418;
var inst_22383 = null;
var inst_22384 = (0);
var inst_22385 = (0);
var state_22442__$1 = (function (){var statearr_22479 = state_22442;
(statearr_22479[(20)] = inst_22382);

(statearr_22479[(27)] = inst_22417);

(statearr_22479[(21)] = inst_22384);

(statearr_22479[(10)] = inst_22385);

(statearr_22479[(11)] = inst_22383);

return statearr_22479;
})();
var statearr_22480_22551 = state_22442__$1;
(statearr_22480_22551[(2)] = null);

(statearr_22480_22551[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22443 === (43))){
var state_22442__$1 = state_22442;
var statearr_22481_22552 = state_22442__$1;
(statearr_22481_22552[(2)] = null);

(statearr_22481_22552[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22443 === (29))){
var inst_22426 = (state_22442[(2)]);
var state_22442__$1 = state_22442;
var statearr_22482_22553 = state_22442__$1;
(statearr_22482_22553[(2)] = inst_22426);

(statearr_22482_22553[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22443 === (44))){
var inst_22435 = (state_22442[(2)]);
var state_22442__$1 = (function (){var statearr_22483 = state_22442;
(statearr_22483[(28)] = inst_22435);

return statearr_22483;
})();
var statearr_22484_22554 = state_22442__$1;
(statearr_22484_22554[(2)] = null);

(statearr_22484_22554[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22443 === (6))){
var inst_22374 = (state_22442[(29)]);
var inst_22373 = cljs.core.deref.call(null,cs);
var inst_22374__$1 = cljs.core.keys.call(null,inst_22373);
var inst_22375 = cljs.core.count.call(null,inst_22374__$1);
var inst_22376 = cljs.core.reset_BANG_.call(null,dctr,inst_22375);
var inst_22381 = cljs.core.seq.call(null,inst_22374__$1);
var inst_22382 = inst_22381;
var inst_22383 = null;
var inst_22384 = (0);
var inst_22385 = (0);
var state_22442__$1 = (function (){var statearr_22485 = state_22442;
(statearr_22485[(20)] = inst_22382);

(statearr_22485[(21)] = inst_22384);

(statearr_22485[(29)] = inst_22374__$1);

(statearr_22485[(10)] = inst_22385);

(statearr_22485[(30)] = inst_22376);

(statearr_22485[(11)] = inst_22383);

return statearr_22485;
})();
var statearr_22486_22555 = state_22442__$1;
(statearr_22486_22555[(2)] = null);

(statearr_22486_22555[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22443 === (28))){
var inst_22382 = (state_22442[(20)]);
var inst_22401 = (state_22442[(25)]);
var inst_22401__$1 = cljs.core.seq.call(null,inst_22382);
var state_22442__$1 = (function (){var statearr_22487 = state_22442;
(statearr_22487[(25)] = inst_22401__$1);

return statearr_22487;
})();
if(inst_22401__$1){
var statearr_22488_22556 = state_22442__$1;
(statearr_22488_22556[(1)] = (33));

} else {
var statearr_22489_22557 = state_22442__$1;
(statearr_22489_22557[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22443 === (25))){
var inst_22384 = (state_22442[(21)]);
var inst_22385 = (state_22442[(10)]);
var inst_22387 = (inst_22385 < inst_22384);
var inst_22388 = inst_22387;
var state_22442__$1 = state_22442;
if(cljs.core.truth_(inst_22388)){
var statearr_22490_22558 = state_22442__$1;
(statearr_22490_22558[(1)] = (27));

} else {
var statearr_22491_22559 = state_22442__$1;
(statearr_22491_22559[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22443 === (34))){
var state_22442__$1 = state_22442;
var statearr_22492_22560 = state_22442__$1;
(statearr_22492_22560[(2)] = null);

(statearr_22492_22560[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22443 === (17))){
var state_22442__$1 = state_22442;
var statearr_22493_22561 = state_22442__$1;
(statearr_22493_22561[(2)] = null);

(statearr_22493_22561[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22443 === (3))){
var inst_22440 = (state_22442[(2)]);
var state_22442__$1 = state_22442;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22442__$1,inst_22440);
} else {
if((state_val_22443 === (12))){
var inst_22369 = (state_22442[(2)]);
var state_22442__$1 = state_22442;
var statearr_22494_22562 = state_22442__$1;
(statearr_22494_22562[(2)] = inst_22369);

(statearr_22494_22562[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22443 === (2))){
var state_22442__$1 = state_22442;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22442__$1,(4),ch);
} else {
if((state_val_22443 === (23))){
var state_22442__$1 = state_22442;
var statearr_22495_22563 = state_22442__$1;
(statearr_22495_22563[(2)] = null);

(statearr_22495_22563[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22443 === (35))){
var inst_22424 = (state_22442[(2)]);
var state_22442__$1 = state_22442;
var statearr_22496_22564 = state_22442__$1;
(statearr_22496_22564[(2)] = inst_22424);

(statearr_22496_22564[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22443 === (19))){
var inst_22343 = (state_22442[(7)]);
var inst_22347 = cljs.core.chunk_first.call(null,inst_22343);
var inst_22348 = cljs.core.chunk_rest.call(null,inst_22343);
var inst_22349 = cljs.core.count.call(null,inst_22347);
var inst_22323 = inst_22348;
var inst_22324 = inst_22347;
var inst_22325 = inst_22349;
var inst_22326 = (0);
var state_22442__$1 = (function (){var statearr_22497 = state_22442;
(statearr_22497[(13)] = inst_22326);

(statearr_22497[(14)] = inst_22324);

(statearr_22497[(15)] = inst_22325);

(statearr_22497[(17)] = inst_22323);

return statearr_22497;
})();
var statearr_22498_22565 = state_22442__$1;
(statearr_22498_22565[(2)] = null);

(statearr_22498_22565[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22443 === (11))){
var inst_22343 = (state_22442[(7)]);
var inst_22323 = (state_22442[(17)]);
var inst_22343__$1 = cljs.core.seq.call(null,inst_22323);
var state_22442__$1 = (function (){var statearr_22499 = state_22442;
(statearr_22499[(7)] = inst_22343__$1);

return statearr_22499;
})();
if(inst_22343__$1){
var statearr_22500_22566 = state_22442__$1;
(statearr_22500_22566[(1)] = (16));

} else {
var statearr_22501_22567 = state_22442__$1;
(statearr_22501_22567[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22443 === (9))){
var inst_22371 = (state_22442[(2)]);
var state_22442__$1 = state_22442;
var statearr_22502_22568 = state_22442__$1;
(statearr_22502_22568[(2)] = inst_22371);

(statearr_22502_22568[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22443 === (5))){
var inst_22321 = cljs.core.deref.call(null,cs);
var inst_22322 = cljs.core.seq.call(null,inst_22321);
var inst_22323 = inst_22322;
var inst_22324 = null;
var inst_22325 = (0);
var inst_22326 = (0);
var state_22442__$1 = (function (){var statearr_22503 = state_22442;
(statearr_22503[(13)] = inst_22326);

(statearr_22503[(14)] = inst_22324);

(statearr_22503[(15)] = inst_22325);

(statearr_22503[(17)] = inst_22323);

return statearr_22503;
})();
var statearr_22504_22569 = state_22442__$1;
(statearr_22504_22569[(2)] = null);

(statearr_22504_22569[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22443 === (14))){
var state_22442__$1 = state_22442;
var statearr_22505_22570 = state_22442__$1;
(statearr_22505_22570[(2)] = null);

(statearr_22505_22570[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22443 === (45))){
var inst_22432 = (state_22442[(2)]);
var state_22442__$1 = state_22442;
var statearr_22506_22571 = state_22442__$1;
(statearr_22506_22571[(2)] = inst_22432);

(statearr_22506_22571[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22443 === (26))){
var inst_22374 = (state_22442[(29)]);
var inst_22428 = (state_22442[(2)]);
var inst_22429 = cljs.core.seq.call(null,inst_22374);
var state_22442__$1 = (function (){var statearr_22507 = state_22442;
(statearr_22507[(31)] = inst_22428);

return statearr_22507;
})();
if(inst_22429){
var statearr_22508_22572 = state_22442__$1;
(statearr_22508_22572[(1)] = (42));

} else {
var statearr_22509_22573 = state_22442__$1;
(statearr_22509_22573[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22443 === (16))){
var inst_22343 = (state_22442[(7)]);
var inst_22345 = cljs.core.chunked_seq_QMARK_.call(null,inst_22343);
var state_22442__$1 = state_22442;
if(inst_22345){
var statearr_22510_22574 = state_22442__$1;
(statearr_22510_22574[(1)] = (19));

} else {
var statearr_22511_22575 = state_22442__$1;
(statearr_22511_22575[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22443 === (38))){
var inst_22421 = (state_22442[(2)]);
var state_22442__$1 = state_22442;
var statearr_22512_22576 = state_22442__$1;
(statearr_22512_22576[(2)] = inst_22421);

(statearr_22512_22576[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22443 === (30))){
var state_22442__$1 = state_22442;
var statearr_22513_22577 = state_22442__$1;
(statearr_22513_22577[(2)] = null);

(statearr_22513_22577[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22443 === (10))){
var inst_22326 = (state_22442[(13)]);
var inst_22324 = (state_22442[(14)]);
var inst_22332 = cljs.core._nth.call(null,inst_22324,inst_22326);
var inst_22333 = cljs.core.nth.call(null,inst_22332,(0),null);
var inst_22334 = cljs.core.nth.call(null,inst_22332,(1),null);
var state_22442__$1 = (function (){var statearr_22514 = state_22442;
(statearr_22514[(26)] = inst_22333);

return statearr_22514;
})();
if(cljs.core.truth_(inst_22334)){
var statearr_22515_22578 = state_22442__$1;
(statearr_22515_22578[(1)] = (13));

} else {
var statearr_22516_22579 = state_22442__$1;
(statearr_22516_22579[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22443 === (18))){
var inst_22367 = (state_22442[(2)]);
var state_22442__$1 = state_22442;
var statearr_22517_22580 = state_22442__$1;
(statearr_22517_22580[(2)] = inst_22367);

(statearr_22517_22580[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22443 === (42))){
var state_22442__$1 = state_22442;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22442__$1,(45),dchan);
} else {
if((state_val_22443 === (37))){
var inst_22314 = (state_22442[(9)]);
var inst_22401 = (state_22442[(25)]);
var inst_22410 = (state_22442[(23)]);
var inst_22410__$1 = cljs.core.first.call(null,inst_22401);
var inst_22411 = cljs.core.async.put_BANG_.call(null,inst_22410__$1,inst_22314,done);
var state_22442__$1 = (function (){var statearr_22518 = state_22442;
(statearr_22518[(23)] = inst_22410__$1);

return statearr_22518;
})();
if(cljs.core.truth_(inst_22411)){
var statearr_22519_22581 = state_22442__$1;
(statearr_22519_22581[(1)] = (39));

} else {
var statearr_22520_22582 = state_22442__$1;
(statearr_22520_22582[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22443 === (8))){
var inst_22326 = (state_22442[(13)]);
var inst_22325 = (state_22442[(15)]);
var inst_22328 = (inst_22326 < inst_22325);
var inst_22329 = inst_22328;
var state_22442__$1 = state_22442;
if(cljs.core.truth_(inst_22329)){
var statearr_22521_22583 = state_22442__$1;
(statearr_22521_22583[(1)] = (10));

} else {
var statearr_22522_22584 = state_22442__$1;
(statearr_22522_22584[(1)] = (11));

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
});})(c__21223__auto___22530,cs,m,dchan,dctr,done))
;
return ((function (switch__21111__auto__,c__21223__auto___22530,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__21112__auto__ = null;
var cljs$core$async$mult_$_state_machine__21112__auto____0 = (function (){
var statearr_22526 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22526[(0)] = cljs$core$async$mult_$_state_machine__21112__auto__);

(statearr_22526[(1)] = (1));

return statearr_22526;
});
var cljs$core$async$mult_$_state_machine__21112__auto____1 = (function (state_22442){
while(true){
var ret_value__21113__auto__ = (function (){try{while(true){
var result__21114__auto__ = switch__21111__auto__.call(null,state_22442);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21114__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21114__auto__;
}
break;
}
}catch (e22527){if((e22527 instanceof Object)){
var ex__21115__auto__ = e22527;
var statearr_22528_22585 = state_22442;
(statearr_22528_22585[(5)] = ex__21115__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22442);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22527;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22586 = state_22442;
state_22442 = G__22586;
continue;
} else {
return ret_value__21113__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__21112__auto__ = function(state_22442){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__21112__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__21112__auto____1.call(this,state_22442);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__21112__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__21112__auto____0;
cljs$core$async$mult_$_state_machine__21112__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__21112__auto____1;
return cljs$core$async$mult_$_state_machine__21112__auto__;
})()
;})(switch__21111__auto__,c__21223__auto___22530,cs,m,dchan,dctr,done))
})();
var state__21225__auto__ = (function (){var statearr_22529 = f__21224__auto__.call(null);
(statearr_22529[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21223__auto___22530);

return statearr_22529;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21225__auto__);
});})(c__21223__auto___22530,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args22587 = [];
var len__19499__auto___22590 = arguments.length;
var i__19500__auto___22591 = (0);
while(true){
if((i__19500__auto___22591 < len__19499__auto___22590)){
args22587.push((arguments[i__19500__auto___22591]));

var G__22592 = (i__19500__auto___22591 + (1));
i__19500__auto___22591 = G__22592;
continue;
} else {
}
break;
}

var G__22589 = args22587.length;
switch (G__22589) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22587.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__19091__auto__ = (((m == null))?null:m);
var m__19092__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__19091__auto__)]);
if(!((m__19092__auto__ == null))){
return m__19092__auto__.call(null,m,ch);
} else {
var m__19092__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__19092__auto____$1 == null))){
return m__19092__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__19091__auto__ = (((m == null))?null:m);
var m__19092__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__19091__auto__)]);
if(!((m__19092__auto__ == null))){
return m__19092__auto__.call(null,m,ch);
} else {
var m__19092__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__19092__auto____$1 == null))){
return m__19092__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__19091__auto__ = (((m == null))?null:m);
var m__19092__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__19091__auto__)]);
if(!((m__19092__auto__ == null))){
return m__19092__auto__.call(null,m);
} else {
var m__19092__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__19092__auto____$1 == null))){
return m__19092__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__19091__auto__ = (((m == null))?null:m);
var m__19092__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__19091__auto__)]);
if(!((m__19092__auto__ == null))){
return m__19092__auto__.call(null,m,state_map);
} else {
var m__19092__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__19092__auto____$1 == null))){
return m__19092__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__19091__auto__ = (((m == null))?null:m);
var m__19092__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__19091__auto__)]);
if(!((m__19092__auto__ == null))){
return m__19092__auto__.call(null,m,mode);
} else {
var m__19092__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__19092__auto____$1 == null))){
return m__19092__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__19506__auto__ = [];
var len__19499__auto___22604 = arguments.length;
var i__19500__auto___22605 = (0);
while(true){
if((i__19500__auto___22605 < len__19499__auto___22604)){
args__19506__auto__.push((arguments[i__19500__auto___22605]));

var G__22606 = (i__19500__auto___22605 + (1));
i__19500__auto___22605 = G__22606;
continue;
} else {
}
break;
}

var argseq__19507__auto__ = ((((3) < args__19506__auto__.length))?(new cljs.core.IndexedSeq(args__19506__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__19507__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__22598){
var map__22599 = p__22598;
var map__22599__$1 = ((((!((map__22599 == null)))?((((map__22599.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22599.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22599):map__22599);
var opts = map__22599__$1;
var statearr_22601_22607 = state;
(statearr_22601_22607[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__22599,map__22599__$1,opts){
return (function (val){
var statearr_22602_22608 = state;
(statearr_22602_22608[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__22599,map__22599__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_22603_22609 = state;
(statearr_22603_22609[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq22594){
var G__22595 = cljs.core.first.call(null,seq22594);
var seq22594__$1 = cljs.core.next.call(null,seq22594);
var G__22596 = cljs.core.first.call(null,seq22594__$1);
var seq22594__$2 = cljs.core.next.call(null,seq22594__$1);
var G__22597 = cljs.core.first.call(null,seq22594__$2);
var seq22594__$3 = cljs.core.next.call(null,seq22594__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__22595,G__22596,G__22597,seq22594__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async22773 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22773 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta22774){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta22774 = meta22774;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22773.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_22775,meta22774__$1){
var self__ = this;
var _22775__$1 = this;
return (new cljs.core.async.t_cljs$core$async22773(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta22774__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22773.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_22775){
var self__ = this;
var _22775__$1 = this;
return self__.meta22774;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22773.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async22773.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22773.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async22773.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22773.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22773.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22773.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22773.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str("(solo-modes mode)")].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22773.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta22774","meta22774",-1302293672,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22773.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22773.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22773";

cljs.core.async.t_cljs$core$async22773.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__19034__auto__,writer__19035__auto__,opt__19036__auto__){
return cljs.core._write.call(null,writer__19035__auto__,"cljs.core.async/t_cljs$core$async22773");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async22773 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async22773(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta22774){
return (new cljs.core.async.t_cljs$core$async22773(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta22774));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async22773(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__21223__auto___22936 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21223__auto___22936,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__21224__auto__ = (function (){var switch__21111__auto__ = ((function (c__21223__auto___22936,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_22873){
var state_val_22874 = (state_22873[(1)]);
if((state_val_22874 === (7))){
var inst_22791 = (state_22873[(2)]);
var state_22873__$1 = state_22873;
var statearr_22875_22937 = state_22873__$1;
(statearr_22875_22937[(2)] = inst_22791);

(statearr_22875_22937[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22874 === (20))){
var inst_22803 = (state_22873[(7)]);
var state_22873__$1 = state_22873;
var statearr_22876_22938 = state_22873__$1;
(statearr_22876_22938[(2)] = inst_22803);

(statearr_22876_22938[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22874 === (27))){
var state_22873__$1 = state_22873;
var statearr_22877_22939 = state_22873__$1;
(statearr_22877_22939[(2)] = null);

(statearr_22877_22939[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22874 === (1))){
var inst_22779 = (state_22873[(8)]);
var inst_22779__$1 = calc_state.call(null);
var inst_22781 = (inst_22779__$1 == null);
var inst_22782 = cljs.core.not.call(null,inst_22781);
var state_22873__$1 = (function (){var statearr_22878 = state_22873;
(statearr_22878[(8)] = inst_22779__$1);

return statearr_22878;
})();
if(inst_22782){
var statearr_22879_22940 = state_22873__$1;
(statearr_22879_22940[(1)] = (2));

} else {
var statearr_22880_22941 = state_22873__$1;
(statearr_22880_22941[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22874 === (24))){
var inst_22847 = (state_22873[(9)]);
var inst_22826 = (state_22873[(10)]);
var inst_22833 = (state_22873[(11)]);
var inst_22847__$1 = inst_22826.call(null,inst_22833);
var state_22873__$1 = (function (){var statearr_22881 = state_22873;
(statearr_22881[(9)] = inst_22847__$1);

return statearr_22881;
})();
if(cljs.core.truth_(inst_22847__$1)){
var statearr_22882_22942 = state_22873__$1;
(statearr_22882_22942[(1)] = (29));

} else {
var statearr_22883_22943 = state_22873__$1;
(statearr_22883_22943[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22874 === (4))){
var inst_22794 = (state_22873[(2)]);
var state_22873__$1 = state_22873;
if(cljs.core.truth_(inst_22794)){
var statearr_22884_22944 = state_22873__$1;
(statearr_22884_22944[(1)] = (8));

} else {
var statearr_22885_22945 = state_22873__$1;
(statearr_22885_22945[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22874 === (15))){
var inst_22820 = (state_22873[(2)]);
var state_22873__$1 = state_22873;
if(cljs.core.truth_(inst_22820)){
var statearr_22886_22946 = state_22873__$1;
(statearr_22886_22946[(1)] = (19));

} else {
var statearr_22887_22947 = state_22873__$1;
(statearr_22887_22947[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22874 === (21))){
var inst_22825 = (state_22873[(12)]);
var inst_22825__$1 = (state_22873[(2)]);
var inst_22826 = cljs.core.get.call(null,inst_22825__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_22827 = cljs.core.get.call(null,inst_22825__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_22828 = cljs.core.get.call(null,inst_22825__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_22873__$1 = (function (){var statearr_22888 = state_22873;
(statearr_22888[(10)] = inst_22826);

(statearr_22888[(12)] = inst_22825__$1);

(statearr_22888[(13)] = inst_22827);

return statearr_22888;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_22873__$1,(22),inst_22828);
} else {
if((state_val_22874 === (31))){
var inst_22855 = (state_22873[(2)]);
var state_22873__$1 = state_22873;
if(cljs.core.truth_(inst_22855)){
var statearr_22889_22948 = state_22873__$1;
(statearr_22889_22948[(1)] = (32));

} else {
var statearr_22890_22949 = state_22873__$1;
(statearr_22890_22949[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22874 === (32))){
var inst_22832 = (state_22873[(14)]);
var state_22873__$1 = state_22873;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22873__$1,(35),out,inst_22832);
} else {
if((state_val_22874 === (33))){
var inst_22825 = (state_22873[(12)]);
var inst_22803 = inst_22825;
var state_22873__$1 = (function (){var statearr_22891 = state_22873;
(statearr_22891[(7)] = inst_22803);

return statearr_22891;
})();
var statearr_22892_22950 = state_22873__$1;
(statearr_22892_22950[(2)] = null);

(statearr_22892_22950[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22874 === (13))){
var inst_22803 = (state_22873[(7)]);
var inst_22810 = inst_22803.cljs$lang$protocol_mask$partition0$;
var inst_22811 = (inst_22810 & (64));
var inst_22812 = inst_22803.cljs$core$ISeq$;
var inst_22813 = (inst_22811) || (inst_22812);
var state_22873__$1 = state_22873;
if(cljs.core.truth_(inst_22813)){
var statearr_22893_22951 = state_22873__$1;
(statearr_22893_22951[(1)] = (16));

} else {
var statearr_22894_22952 = state_22873__$1;
(statearr_22894_22952[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22874 === (22))){
var inst_22832 = (state_22873[(14)]);
var inst_22833 = (state_22873[(11)]);
var inst_22831 = (state_22873[(2)]);
var inst_22832__$1 = cljs.core.nth.call(null,inst_22831,(0),null);
var inst_22833__$1 = cljs.core.nth.call(null,inst_22831,(1),null);
var inst_22834 = (inst_22832__$1 == null);
var inst_22835 = cljs.core._EQ_.call(null,inst_22833__$1,change);
var inst_22836 = (inst_22834) || (inst_22835);
var state_22873__$1 = (function (){var statearr_22895 = state_22873;
(statearr_22895[(14)] = inst_22832__$1);

(statearr_22895[(11)] = inst_22833__$1);

return statearr_22895;
})();
if(cljs.core.truth_(inst_22836)){
var statearr_22896_22953 = state_22873__$1;
(statearr_22896_22953[(1)] = (23));

} else {
var statearr_22897_22954 = state_22873__$1;
(statearr_22897_22954[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22874 === (36))){
var inst_22825 = (state_22873[(12)]);
var inst_22803 = inst_22825;
var state_22873__$1 = (function (){var statearr_22898 = state_22873;
(statearr_22898[(7)] = inst_22803);

return statearr_22898;
})();
var statearr_22899_22955 = state_22873__$1;
(statearr_22899_22955[(2)] = null);

(statearr_22899_22955[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22874 === (29))){
var inst_22847 = (state_22873[(9)]);
var state_22873__$1 = state_22873;
var statearr_22900_22956 = state_22873__$1;
(statearr_22900_22956[(2)] = inst_22847);

(statearr_22900_22956[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22874 === (6))){
var state_22873__$1 = state_22873;
var statearr_22901_22957 = state_22873__$1;
(statearr_22901_22957[(2)] = false);

(statearr_22901_22957[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22874 === (28))){
var inst_22843 = (state_22873[(2)]);
var inst_22844 = calc_state.call(null);
var inst_22803 = inst_22844;
var state_22873__$1 = (function (){var statearr_22902 = state_22873;
(statearr_22902[(15)] = inst_22843);

(statearr_22902[(7)] = inst_22803);

return statearr_22902;
})();
var statearr_22903_22958 = state_22873__$1;
(statearr_22903_22958[(2)] = null);

(statearr_22903_22958[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22874 === (25))){
var inst_22869 = (state_22873[(2)]);
var state_22873__$1 = state_22873;
var statearr_22904_22959 = state_22873__$1;
(statearr_22904_22959[(2)] = inst_22869);

(statearr_22904_22959[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22874 === (34))){
var inst_22867 = (state_22873[(2)]);
var state_22873__$1 = state_22873;
var statearr_22905_22960 = state_22873__$1;
(statearr_22905_22960[(2)] = inst_22867);

(statearr_22905_22960[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22874 === (17))){
var state_22873__$1 = state_22873;
var statearr_22906_22961 = state_22873__$1;
(statearr_22906_22961[(2)] = false);

(statearr_22906_22961[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22874 === (3))){
var state_22873__$1 = state_22873;
var statearr_22907_22962 = state_22873__$1;
(statearr_22907_22962[(2)] = false);

(statearr_22907_22962[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22874 === (12))){
var inst_22871 = (state_22873[(2)]);
var state_22873__$1 = state_22873;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22873__$1,inst_22871);
} else {
if((state_val_22874 === (2))){
var inst_22779 = (state_22873[(8)]);
var inst_22784 = inst_22779.cljs$lang$protocol_mask$partition0$;
var inst_22785 = (inst_22784 & (64));
var inst_22786 = inst_22779.cljs$core$ISeq$;
var inst_22787 = (inst_22785) || (inst_22786);
var state_22873__$1 = state_22873;
if(cljs.core.truth_(inst_22787)){
var statearr_22908_22963 = state_22873__$1;
(statearr_22908_22963[(1)] = (5));

} else {
var statearr_22909_22964 = state_22873__$1;
(statearr_22909_22964[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22874 === (23))){
var inst_22832 = (state_22873[(14)]);
var inst_22838 = (inst_22832 == null);
var state_22873__$1 = state_22873;
if(cljs.core.truth_(inst_22838)){
var statearr_22910_22965 = state_22873__$1;
(statearr_22910_22965[(1)] = (26));

} else {
var statearr_22911_22966 = state_22873__$1;
(statearr_22911_22966[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22874 === (35))){
var inst_22858 = (state_22873[(2)]);
var state_22873__$1 = state_22873;
if(cljs.core.truth_(inst_22858)){
var statearr_22912_22967 = state_22873__$1;
(statearr_22912_22967[(1)] = (36));

} else {
var statearr_22913_22968 = state_22873__$1;
(statearr_22913_22968[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22874 === (19))){
var inst_22803 = (state_22873[(7)]);
var inst_22822 = cljs.core.apply.call(null,cljs.core.hash_map,inst_22803);
var state_22873__$1 = state_22873;
var statearr_22914_22969 = state_22873__$1;
(statearr_22914_22969[(2)] = inst_22822);

(statearr_22914_22969[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22874 === (11))){
var inst_22803 = (state_22873[(7)]);
var inst_22807 = (inst_22803 == null);
var inst_22808 = cljs.core.not.call(null,inst_22807);
var state_22873__$1 = state_22873;
if(inst_22808){
var statearr_22915_22970 = state_22873__$1;
(statearr_22915_22970[(1)] = (13));

} else {
var statearr_22916_22971 = state_22873__$1;
(statearr_22916_22971[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22874 === (9))){
var inst_22779 = (state_22873[(8)]);
var state_22873__$1 = state_22873;
var statearr_22917_22972 = state_22873__$1;
(statearr_22917_22972[(2)] = inst_22779);

(statearr_22917_22972[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22874 === (5))){
var state_22873__$1 = state_22873;
var statearr_22918_22973 = state_22873__$1;
(statearr_22918_22973[(2)] = true);

(statearr_22918_22973[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22874 === (14))){
var state_22873__$1 = state_22873;
var statearr_22919_22974 = state_22873__$1;
(statearr_22919_22974[(2)] = false);

(statearr_22919_22974[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22874 === (26))){
var inst_22833 = (state_22873[(11)]);
var inst_22840 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_22833);
var state_22873__$1 = state_22873;
var statearr_22920_22975 = state_22873__$1;
(statearr_22920_22975[(2)] = inst_22840);

(statearr_22920_22975[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22874 === (16))){
var state_22873__$1 = state_22873;
var statearr_22921_22976 = state_22873__$1;
(statearr_22921_22976[(2)] = true);

(statearr_22921_22976[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22874 === (38))){
var inst_22863 = (state_22873[(2)]);
var state_22873__$1 = state_22873;
var statearr_22922_22977 = state_22873__$1;
(statearr_22922_22977[(2)] = inst_22863);

(statearr_22922_22977[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22874 === (30))){
var inst_22826 = (state_22873[(10)]);
var inst_22827 = (state_22873[(13)]);
var inst_22833 = (state_22873[(11)]);
var inst_22850 = cljs.core.empty_QMARK_.call(null,inst_22826);
var inst_22851 = inst_22827.call(null,inst_22833);
var inst_22852 = cljs.core.not.call(null,inst_22851);
var inst_22853 = (inst_22850) && (inst_22852);
var state_22873__$1 = state_22873;
var statearr_22923_22978 = state_22873__$1;
(statearr_22923_22978[(2)] = inst_22853);

(statearr_22923_22978[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22874 === (10))){
var inst_22779 = (state_22873[(8)]);
var inst_22799 = (state_22873[(2)]);
var inst_22800 = cljs.core.get.call(null,inst_22799,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_22801 = cljs.core.get.call(null,inst_22799,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_22802 = cljs.core.get.call(null,inst_22799,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_22803 = inst_22779;
var state_22873__$1 = (function (){var statearr_22924 = state_22873;
(statearr_22924[(16)] = inst_22802);

(statearr_22924[(17)] = inst_22801);

(statearr_22924[(7)] = inst_22803);

(statearr_22924[(18)] = inst_22800);

return statearr_22924;
})();
var statearr_22925_22979 = state_22873__$1;
(statearr_22925_22979[(2)] = null);

(statearr_22925_22979[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22874 === (18))){
var inst_22817 = (state_22873[(2)]);
var state_22873__$1 = state_22873;
var statearr_22926_22980 = state_22873__$1;
(statearr_22926_22980[(2)] = inst_22817);

(statearr_22926_22980[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22874 === (37))){
var state_22873__$1 = state_22873;
var statearr_22927_22981 = state_22873__$1;
(statearr_22927_22981[(2)] = null);

(statearr_22927_22981[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22874 === (8))){
var inst_22779 = (state_22873[(8)]);
var inst_22796 = cljs.core.apply.call(null,cljs.core.hash_map,inst_22779);
var state_22873__$1 = state_22873;
var statearr_22928_22982 = state_22873__$1;
(statearr_22928_22982[(2)] = inst_22796);

(statearr_22928_22982[(1)] = (10));


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
});})(c__21223__auto___22936,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__21111__auto__,c__21223__auto___22936,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__21112__auto__ = null;
var cljs$core$async$mix_$_state_machine__21112__auto____0 = (function (){
var statearr_22932 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22932[(0)] = cljs$core$async$mix_$_state_machine__21112__auto__);

(statearr_22932[(1)] = (1));

return statearr_22932;
});
var cljs$core$async$mix_$_state_machine__21112__auto____1 = (function (state_22873){
while(true){
var ret_value__21113__auto__ = (function (){try{while(true){
var result__21114__auto__ = switch__21111__auto__.call(null,state_22873);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21114__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21114__auto__;
}
break;
}
}catch (e22933){if((e22933 instanceof Object)){
var ex__21115__auto__ = e22933;
var statearr_22934_22983 = state_22873;
(statearr_22934_22983[(5)] = ex__21115__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22873);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22933;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22984 = state_22873;
state_22873 = G__22984;
continue;
} else {
return ret_value__21113__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__21112__auto__ = function(state_22873){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__21112__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__21112__auto____1.call(this,state_22873);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__21112__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__21112__auto____0;
cljs$core$async$mix_$_state_machine__21112__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__21112__auto____1;
return cljs$core$async$mix_$_state_machine__21112__auto__;
})()
;})(switch__21111__auto__,c__21223__auto___22936,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__21225__auto__ = (function (){var statearr_22935 = f__21224__auto__.call(null);
(statearr_22935[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21223__auto___22936);

return statearr_22935;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21225__auto__);
});})(c__21223__auto___22936,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__19091__auto__ = (((p == null))?null:p);
var m__19092__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__19091__auto__)]);
if(!((m__19092__auto__ == null))){
return m__19092__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__19092__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__19092__auto____$1 == null))){
return m__19092__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__19091__auto__ = (((p == null))?null:p);
var m__19092__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__19091__auto__)]);
if(!((m__19092__auto__ == null))){
return m__19092__auto__.call(null,p,v,ch);
} else {
var m__19092__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__19092__auto____$1 == null))){
return m__19092__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args22985 = [];
var len__19499__auto___22988 = arguments.length;
var i__19500__auto___22989 = (0);
while(true){
if((i__19500__auto___22989 < len__19499__auto___22988)){
args22985.push((arguments[i__19500__auto___22989]));

var G__22990 = (i__19500__auto___22989 + (1));
i__19500__auto___22989 = G__22990;
continue;
} else {
}
break;
}

var G__22987 = args22985.length;
switch (G__22987) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22985.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__19091__auto__ = (((p == null))?null:p);
var m__19092__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__19091__auto__)]);
if(!((m__19092__auto__ == null))){
return m__19092__auto__.call(null,p);
} else {
var m__19092__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__19092__auto____$1 == null))){
return m__19092__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__19091__auto__ = (((p == null))?null:p);
var m__19092__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__19091__auto__)]);
if(!((m__19092__auto__ == null))){
return m__19092__auto__.call(null,p,v);
} else {
var m__19092__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__19092__auto____$1 == null))){
return m__19092__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args22993 = [];
var len__19499__auto___23118 = arguments.length;
var i__19500__auto___23119 = (0);
while(true){
if((i__19500__auto___23119 < len__19499__auto___23118)){
args22993.push((arguments[i__19500__auto___23119]));

var G__23120 = (i__19500__auto___23119 + (1));
i__19500__auto___23119 = G__23120;
continue;
} else {
}
break;
}

var G__22995 = args22993.length;
switch (G__22995) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22993.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__18428__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__18428__auto__)){
return or__18428__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__18428__auto__,mults){
return (function (p1__22992_SHARP_){
if(cljs.core.truth_(p1__22992_SHARP_.call(null,topic))){
return p1__22992_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__22992_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__18428__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async22996 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22996 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta22997){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta22997 = meta22997;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22996.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_22998,meta22997__$1){
var self__ = this;
var _22998__$1 = this;
return (new cljs.core.async.t_cljs$core$async22996(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta22997__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22996.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_22998){
var self__ = this;
var _22998__$1 = this;
return self__.meta22997;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22996.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async22996.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22996.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async22996.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22996.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22996.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22996.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22996.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta22997","meta22997",2012827401,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22996.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22996.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22996";

cljs.core.async.t_cljs$core$async22996.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__19034__auto__,writer__19035__auto__,opt__19036__auto__){
return cljs.core._write.call(null,writer__19035__auto__,"cljs.core.async/t_cljs$core$async22996");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async22996 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async22996(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta22997){
return (new cljs.core.async.t_cljs$core$async22996(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta22997));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async22996(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__21223__auto___23122 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21223__auto___23122,mults,ensure_mult,p){
return (function (){
var f__21224__auto__ = (function (){var switch__21111__auto__ = ((function (c__21223__auto___23122,mults,ensure_mult,p){
return (function (state_23070){
var state_val_23071 = (state_23070[(1)]);
if((state_val_23071 === (7))){
var inst_23066 = (state_23070[(2)]);
var state_23070__$1 = state_23070;
var statearr_23072_23123 = state_23070__$1;
(statearr_23072_23123[(2)] = inst_23066);

(statearr_23072_23123[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23071 === (20))){
var state_23070__$1 = state_23070;
var statearr_23073_23124 = state_23070__$1;
(statearr_23073_23124[(2)] = null);

(statearr_23073_23124[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23071 === (1))){
var state_23070__$1 = state_23070;
var statearr_23074_23125 = state_23070__$1;
(statearr_23074_23125[(2)] = null);

(statearr_23074_23125[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23071 === (24))){
var inst_23049 = (state_23070[(7)]);
var inst_23058 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_23049);
var state_23070__$1 = state_23070;
var statearr_23075_23126 = state_23070__$1;
(statearr_23075_23126[(2)] = inst_23058);

(statearr_23075_23126[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23071 === (4))){
var inst_23001 = (state_23070[(8)]);
var inst_23001__$1 = (state_23070[(2)]);
var inst_23002 = (inst_23001__$1 == null);
var state_23070__$1 = (function (){var statearr_23076 = state_23070;
(statearr_23076[(8)] = inst_23001__$1);

return statearr_23076;
})();
if(cljs.core.truth_(inst_23002)){
var statearr_23077_23127 = state_23070__$1;
(statearr_23077_23127[(1)] = (5));

} else {
var statearr_23078_23128 = state_23070__$1;
(statearr_23078_23128[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23071 === (15))){
var inst_23043 = (state_23070[(2)]);
var state_23070__$1 = state_23070;
var statearr_23079_23129 = state_23070__$1;
(statearr_23079_23129[(2)] = inst_23043);

(statearr_23079_23129[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23071 === (21))){
var inst_23063 = (state_23070[(2)]);
var state_23070__$1 = (function (){var statearr_23080 = state_23070;
(statearr_23080[(9)] = inst_23063);

return statearr_23080;
})();
var statearr_23081_23130 = state_23070__$1;
(statearr_23081_23130[(2)] = null);

(statearr_23081_23130[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23071 === (13))){
var inst_23025 = (state_23070[(10)]);
var inst_23027 = cljs.core.chunked_seq_QMARK_.call(null,inst_23025);
var state_23070__$1 = state_23070;
if(inst_23027){
var statearr_23082_23131 = state_23070__$1;
(statearr_23082_23131[(1)] = (16));

} else {
var statearr_23083_23132 = state_23070__$1;
(statearr_23083_23132[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23071 === (22))){
var inst_23055 = (state_23070[(2)]);
var state_23070__$1 = state_23070;
if(cljs.core.truth_(inst_23055)){
var statearr_23084_23133 = state_23070__$1;
(statearr_23084_23133[(1)] = (23));

} else {
var statearr_23085_23134 = state_23070__$1;
(statearr_23085_23134[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23071 === (6))){
var inst_23049 = (state_23070[(7)]);
var inst_23001 = (state_23070[(8)]);
var inst_23051 = (state_23070[(11)]);
var inst_23049__$1 = topic_fn.call(null,inst_23001);
var inst_23050 = cljs.core.deref.call(null,mults);
var inst_23051__$1 = cljs.core.get.call(null,inst_23050,inst_23049__$1);
var state_23070__$1 = (function (){var statearr_23086 = state_23070;
(statearr_23086[(7)] = inst_23049__$1);

(statearr_23086[(11)] = inst_23051__$1);

return statearr_23086;
})();
if(cljs.core.truth_(inst_23051__$1)){
var statearr_23087_23135 = state_23070__$1;
(statearr_23087_23135[(1)] = (19));

} else {
var statearr_23088_23136 = state_23070__$1;
(statearr_23088_23136[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23071 === (25))){
var inst_23060 = (state_23070[(2)]);
var state_23070__$1 = state_23070;
var statearr_23089_23137 = state_23070__$1;
(statearr_23089_23137[(2)] = inst_23060);

(statearr_23089_23137[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23071 === (17))){
var inst_23025 = (state_23070[(10)]);
var inst_23034 = cljs.core.first.call(null,inst_23025);
var inst_23035 = cljs.core.async.muxch_STAR_.call(null,inst_23034);
var inst_23036 = cljs.core.async.close_BANG_.call(null,inst_23035);
var inst_23037 = cljs.core.next.call(null,inst_23025);
var inst_23011 = inst_23037;
var inst_23012 = null;
var inst_23013 = (0);
var inst_23014 = (0);
var state_23070__$1 = (function (){var statearr_23090 = state_23070;
(statearr_23090[(12)] = inst_23011);

(statearr_23090[(13)] = inst_23012);

(statearr_23090[(14)] = inst_23014);

(statearr_23090[(15)] = inst_23036);

(statearr_23090[(16)] = inst_23013);

return statearr_23090;
})();
var statearr_23091_23138 = state_23070__$1;
(statearr_23091_23138[(2)] = null);

(statearr_23091_23138[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23071 === (3))){
var inst_23068 = (state_23070[(2)]);
var state_23070__$1 = state_23070;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23070__$1,inst_23068);
} else {
if((state_val_23071 === (12))){
var inst_23045 = (state_23070[(2)]);
var state_23070__$1 = state_23070;
var statearr_23092_23139 = state_23070__$1;
(statearr_23092_23139[(2)] = inst_23045);

(statearr_23092_23139[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23071 === (2))){
var state_23070__$1 = state_23070;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23070__$1,(4),ch);
} else {
if((state_val_23071 === (23))){
var state_23070__$1 = state_23070;
var statearr_23093_23140 = state_23070__$1;
(statearr_23093_23140[(2)] = null);

(statearr_23093_23140[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23071 === (19))){
var inst_23001 = (state_23070[(8)]);
var inst_23051 = (state_23070[(11)]);
var inst_23053 = cljs.core.async.muxch_STAR_.call(null,inst_23051);
var state_23070__$1 = state_23070;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23070__$1,(22),inst_23053,inst_23001);
} else {
if((state_val_23071 === (11))){
var inst_23011 = (state_23070[(12)]);
var inst_23025 = (state_23070[(10)]);
var inst_23025__$1 = cljs.core.seq.call(null,inst_23011);
var state_23070__$1 = (function (){var statearr_23094 = state_23070;
(statearr_23094[(10)] = inst_23025__$1);

return statearr_23094;
})();
if(inst_23025__$1){
var statearr_23095_23141 = state_23070__$1;
(statearr_23095_23141[(1)] = (13));

} else {
var statearr_23096_23142 = state_23070__$1;
(statearr_23096_23142[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23071 === (9))){
var inst_23047 = (state_23070[(2)]);
var state_23070__$1 = state_23070;
var statearr_23097_23143 = state_23070__$1;
(statearr_23097_23143[(2)] = inst_23047);

(statearr_23097_23143[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23071 === (5))){
var inst_23008 = cljs.core.deref.call(null,mults);
var inst_23009 = cljs.core.vals.call(null,inst_23008);
var inst_23010 = cljs.core.seq.call(null,inst_23009);
var inst_23011 = inst_23010;
var inst_23012 = null;
var inst_23013 = (0);
var inst_23014 = (0);
var state_23070__$1 = (function (){var statearr_23098 = state_23070;
(statearr_23098[(12)] = inst_23011);

(statearr_23098[(13)] = inst_23012);

(statearr_23098[(14)] = inst_23014);

(statearr_23098[(16)] = inst_23013);

return statearr_23098;
})();
var statearr_23099_23144 = state_23070__$1;
(statearr_23099_23144[(2)] = null);

(statearr_23099_23144[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23071 === (14))){
var state_23070__$1 = state_23070;
var statearr_23103_23145 = state_23070__$1;
(statearr_23103_23145[(2)] = null);

(statearr_23103_23145[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23071 === (16))){
var inst_23025 = (state_23070[(10)]);
var inst_23029 = cljs.core.chunk_first.call(null,inst_23025);
var inst_23030 = cljs.core.chunk_rest.call(null,inst_23025);
var inst_23031 = cljs.core.count.call(null,inst_23029);
var inst_23011 = inst_23030;
var inst_23012 = inst_23029;
var inst_23013 = inst_23031;
var inst_23014 = (0);
var state_23070__$1 = (function (){var statearr_23104 = state_23070;
(statearr_23104[(12)] = inst_23011);

(statearr_23104[(13)] = inst_23012);

(statearr_23104[(14)] = inst_23014);

(statearr_23104[(16)] = inst_23013);

return statearr_23104;
})();
var statearr_23105_23146 = state_23070__$1;
(statearr_23105_23146[(2)] = null);

(statearr_23105_23146[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23071 === (10))){
var inst_23011 = (state_23070[(12)]);
var inst_23012 = (state_23070[(13)]);
var inst_23014 = (state_23070[(14)]);
var inst_23013 = (state_23070[(16)]);
var inst_23019 = cljs.core._nth.call(null,inst_23012,inst_23014);
var inst_23020 = cljs.core.async.muxch_STAR_.call(null,inst_23019);
var inst_23021 = cljs.core.async.close_BANG_.call(null,inst_23020);
var inst_23022 = (inst_23014 + (1));
var tmp23100 = inst_23011;
var tmp23101 = inst_23012;
var tmp23102 = inst_23013;
var inst_23011__$1 = tmp23100;
var inst_23012__$1 = tmp23101;
var inst_23013__$1 = tmp23102;
var inst_23014__$1 = inst_23022;
var state_23070__$1 = (function (){var statearr_23106 = state_23070;
(statearr_23106[(12)] = inst_23011__$1);

(statearr_23106[(13)] = inst_23012__$1);

(statearr_23106[(14)] = inst_23014__$1);

(statearr_23106[(17)] = inst_23021);

(statearr_23106[(16)] = inst_23013__$1);

return statearr_23106;
})();
var statearr_23107_23147 = state_23070__$1;
(statearr_23107_23147[(2)] = null);

(statearr_23107_23147[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23071 === (18))){
var inst_23040 = (state_23070[(2)]);
var state_23070__$1 = state_23070;
var statearr_23108_23148 = state_23070__$1;
(statearr_23108_23148[(2)] = inst_23040);

(statearr_23108_23148[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23071 === (8))){
var inst_23014 = (state_23070[(14)]);
var inst_23013 = (state_23070[(16)]);
var inst_23016 = (inst_23014 < inst_23013);
var inst_23017 = inst_23016;
var state_23070__$1 = state_23070;
if(cljs.core.truth_(inst_23017)){
var statearr_23109_23149 = state_23070__$1;
(statearr_23109_23149[(1)] = (10));

} else {
var statearr_23110_23150 = state_23070__$1;
(statearr_23110_23150[(1)] = (11));

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
});})(c__21223__auto___23122,mults,ensure_mult,p))
;
return ((function (switch__21111__auto__,c__21223__auto___23122,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__21112__auto__ = null;
var cljs$core$async$state_machine__21112__auto____0 = (function (){
var statearr_23114 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23114[(0)] = cljs$core$async$state_machine__21112__auto__);

(statearr_23114[(1)] = (1));

return statearr_23114;
});
var cljs$core$async$state_machine__21112__auto____1 = (function (state_23070){
while(true){
var ret_value__21113__auto__ = (function (){try{while(true){
var result__21114__auto__ = switch__21111__auto__.call(null,state_23070);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21114__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21114__auto__;
}
break;
}
}catch (e23115){if((e23115 instanceof Object)){
var ex__21115__auto__ = e23115;
var statearr_23116_23151 = state_23070;
(statearr_23116_23151[(5)] = ex__21115__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23070);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23115;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23152 = state_23070;
state_23070 = G__23152;
continue;
} else {
return ret_value__21113__auto__;
}
break;
}
});
cljs$core$async$state_machine__21112__auto__ = function(state_23070){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21112__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21112__auto____1.call(this,state_23070);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21112__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21112__auto____0;
cljs$core$async$state_machine__21112__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21112__auto____1;
return cljs$core$async$state_machine__21112__auto__;
})()
;})(switch__21111__auto__,c__21223__auto___23122,mults,ensure_mult,p))
})();
var state__21225__auto__ = (function (){var statearr_23117 = f__21224__auto__.call(null);
(statearr_23117[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21223__auto___23122);

return statearr_23117;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21225__auto__);
});})(c__21223__auto___23122,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args23153 = [];
var len__19499__auto___23156 = arguments.length;
var i__19500__auto___23157 = (0);
while(true){
if((i__19500__auto___23157 < len__19499__auto___23156)){
args23153.push((arguments[i__19500__auto___23157]));

var G__23158 = (i__19500__auto___23157 + (1));
i__19500__auto___23157 = G__23158;
continue;
} else {
}
break;
}

var G__23155 = args23153.length;
switch (G__23155) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23153.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args23160 = [];
var len__19499__auto___23163 = arguments.length;
var i__19500__auto___23164 = (0);
while(true){
if((i__19500__auto___23164 < len__19499__auto___23163)){
args23160.push((arguments[i__19500__auto___23164]));

var G__23165 = (i__19500__auto___23164 + (1));
i__19500__auto___23164 = G__23165;
continue;
} else {
}
break;
}

var G__23162 = args23160.length;
switch (G__23162) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23160.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args23167 = [];
var len__19499__auto___23238 = arguments.length;
var i__19500__auto___23239 = (0);
while(true){
if((i__19500__auto___23239 < len__19499__auto___23238)){
args23167.push((arguments[i__19500__auto___23239]));

var G__23240 = (i__19500__auto___23239 + (1));
i__19500__auto___23239 = G__23240;
continue;
} else {
}
break;
}

var G__23169 = args23167.length;
switch (G__23169) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23167.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__21223__auto___23242 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21223__auto___23242,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__21224__auto__ = (function (){var switch__21111__auto__ = ((function (c__21223__auto___23242,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_23208){
var state_val_23209 = (state_23208[(1)]);
if((state_val_23209 === (7))){
var state_23208__$1 = state_23208;
var statearr_23210_23243 = state_23208__$1;
(statearr_23210_23243[(2)] = null);

(statearr_23210_23243[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23209 === (1))){
var state_23208__$1 = state_23208;
var statearr_23211_23244 = state_23208__$1;
(statearr_23211_23244[(2)] = null);

(statearr_23211_23244[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23209 === (4))){
var inst_23172 = (state_23208[(7)]);
var inst_23174 = (inst_23172 < cnt);
var state_23208__$1 = state_23208;
if(cljs.core.truth_(inst_23174)){
var statearr_23212_23245 = state_23208__$1;
(statearr_23212_23245[(1)] = (6));

} else {
var statearr_23213_23246 = state_23208__$1;
(statearr_23213_23246[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23209 === (15))){
var inst_23204 = (state_23208[(2)]);
var state_23208__$1 = state_23208;
var statearr_23214_23247 = state_23208__$1;
(statearr_23214_23247[(2)] = inst_23204);

(statearr_23214_23247[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23209 === (13))){
var inst_23197 = cljs.core.async.close_BANG_.call(null,out);
var state_23208__$1 = state_23208;
var statearr_23215_23248 = state_23208__$1;
(statearr_23215_23248[(2)] = inst_23197);

(statearr_23215_23248[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23209 === (6))){
var state_23208__$1 = state_23208;
var statearr_23216_23249 = state_23208__$1;
(statearr_23216_23249[(2)] = null);

(statearr_23216_23249[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23209 === (3))){
var inst_23206 = (state_23208[(2)]);
var state_23208__$1 = state_23208;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23208__$1,inst_23206);
} else {
if((state_val_23209 === (12))){
var inst_23194 = (state_23208[(8)]);
var inst_23194__$1 = (state_23208[(2)]);
var inst_23195 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_23194__$1);
var state_23208__$1 = (function (){var statearr_23217 = state_23208;
(statearr_23217[(8)] = inst_23194__$1);

return statearr_23217;
})();
if(cljs.core.truth_(inst_23195)){
var statearr_23218_23250 = state_23208__$1;
(statearr_23218_23250[(1)] = (13));

} else {
var statearr_23219_23251 = state_23208__$1;
(statearr_23219_23251[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23209 === (2))){
var inst_23171 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_23172 = (0);
var state_23208__$1 = (function (){var statearr_23220 = state_23208;
(statearr_23220[(9)] = inst_23171);

(statearr_23220[(7)] = inst_23172);

return statearr_23220;
})();
var statearr_23221_23252 = state_23208__$1;
(statearr_23221_23252[(2)] = null);

(statearr_23221_23252[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23209 === (11))){
var inst_23172 = (state_23208[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_23208,(10),Object,null,(9));
var inst_23181 = chs__$1.call(null,inst_23172);
var inst_23182 = done.call(null,inst_23172);
var inst_23183 = cljs.core.async.take_BANG_.call(null,inst_23181,inst_23182);
var state_23208__$1 = state_23208;
var statearr_23222_23253 = state_23208__$1;
(statearr_23222_23253[(2)] = inst_23183);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23208__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23209 === (9))){
var inst_23172 = (state_23208[(7)]);
var inst_23185 = (state_23208[(2)]);
var inst_23186 = (inst_23172 + (1));
var inst_23172__$1 = inst_23186;
var state_23208__$1 = (function (){var statearr_23223 = state_23208;
(statearr_23223[(7)] = inst_23172__$1);

(statearr_23223[(10)] = inst_23185);

return statearr_23223;
})();
var statearr_23224_23254 = state_23208__$1;
(statearr_23224_23254[(2)] = null);

(statearr_23224_23254[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23209 === (5))){
var inst_23192 = (state_23208[(2)]);
var state_23208__$1 = (function (){var statearr_23225 = state_23208;
(statearr_23225[(11)] = inst_23192);

return statearr_23225;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23208__$1,(12),dchan);
} else {
if((state_val_23209 === (14))){
var inst_23194 = (state_23208[(8)]);
var inst_23199 = cljs.core.apply.call(null,f,inst_23194);
var state_23208__$1 = state_23208;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23208__$1,(16),out,inst_23199);
} else {
if((state_val_23209 === (16))){
var inst_23201 = (state_23208[(2)]);
var state_23208__$1 = (function (){var statearr_23226 = state_23208;
(statearr_23226[(12)] = inst_23201);

return statearr_23226;
})();
var statearr_23227_23255 = state_23208__$1;
(statearr_23227_23255[(2)] = null);

(statearr_23227_23255[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23209 === (10))){
var inst_23176 = (state_23208[(2)]);
var inst_23177 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_23208__$1 = (function (){var statearr_23228 = state_23208;
(statearr_23228[(13)] = inst_23176);

return statearr_23228;
})();
var statearr_23229_23256 = state_23208__$1;
(statearr_23229_23256[(2)] = inst_23177);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23208__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23209 === (8))){
var inst_23190 = (state_23208[(2)]);
var state_23208__$1 = state_23208;
var statearr_23230_23257 = state_23208__$1;
(statearr_23230_23257[(2)] = inst_23190);

(statearr_23230_23257[(1)] = (5));


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
});})(c__21223__auto___23242,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__21111__auto__,c__21223__auto___23242,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__21112__auto__ = null;
var cljs$core$async$state_machine__21112__auto____0 = (function (){
var statearr_23234 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23234[(0)] = cljs$core$async$state_machine__21112__auto__);

(statearr_23234[(1)] = (1));

return statearr_23234;
});
var cljs$core$async$state_machine__21112__auto____1 = (function (state_23208){
while(true){
var ret_value__21113__auto__ = (function (){try{while(true){
var result__21114__auto__ = switch__21111__auto__.call(null,state_23208);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21114__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21114__auto__;
}
break;
}
}catch (e23235){if((e23235 instanceof Object)){
var ex__21115__auto__ = e23235;
var statearr_23236_23258 = state_23208;
(statearr_23236_23258[(5)] = ex__21115__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23208);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23235;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23259 = state_23208;
state_23208 = G__23259;
continue;
} else {
return ret_value__21113__auto__;
}
break;
}
});
cljs$core$async$state_machine__21112__auto__ = function(state_23208){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21112__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21112__auto____1.call(this,state_23208);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21112__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21112__auto____0;
cljs$core$async$state_machine__21112__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21112__auto____1;
return cljs$core$async$state_machine__21112__auto__;
})()
;})(switch__21111__auto__,c__21223__auto___23242,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__21225__auto__ = (function (){var statearr_23237 = f__21224__auto__.call(null);
(statearr_23237[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21223__auto___23242);

return statearr_23237;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21225__auto__);
});})(c__21223__auto___23242,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args23261 = [];
var len__19499__auto___23317 = arguments.length;
var i__19500__auto___23318 = (0);
while(true){
if((i__19500__auto___23318 < len__19499__auto___23317)){
args23261.push((arguments[i__19500__auto___23318]));

var G__23319 = (i__19500__auto___23318 + (1));
i__19500__auto___23318 = G__23319;
continue;
} else {
}
break;
}

var G__23263 = args23261.length;
switch (G__23263) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23261.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21223__auto___23321 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21223__auto___23321,out){
return (function (){
var f__21224__auto__ = (function (){var switch__21111__auto__ = ((function (c__21223__auto___23321,out){
return (function (state_23293){
var state_val_23294 = (state_23293[(1)]);
if((state_val_23294 === (7))){
var inst_23273 = (state_23293[(7)]);
var inst_23272 = (state_23293[(8)]);
var inst_23272__$1 = (state_23293[(2)]);
var inst_23273__$1 = cljs.core.nth.call(null,inst_23272__$1,(0),null);
var inst_23274 = cljs.core.nth.call(null,inst_23272__$1,(1),null);
var inst_23275 = (inst_23273__$1 == null);
var state_23293__$1 = (function (){var statearr_23295 = state_23293;
(statearr_23295[(9)] = inst_23274);

(statearr_23295[(7)] = inst_23273__$1);

(statearr_23295[(8)] = inst_23272__$1);

return statearr_23295;
})();
if(cljs.core.truth_(inst_23275)){
var statearr_23296_23322 = state_23293__$1;
(statearr_23296_23322[(1)] = (8));

} else {
var statearr_23297_23323 = state_23293__$1;
(statearr_23297_23323[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23294 === (1))){
var inst_23264 = cljs.core.vec.call(null,chs);
var inst_23265 = inst_23264;
var state_23293__$1 = (function (){var statearr_23298 = state_23293;
(statearr_23298[(10)] = inst_23265);

return statearr_23298;
})();
var statearr_23299_23324 = state_23293__$1;
(statearr_23299_23324[(2)] = null);

(statearr_23299_23324[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23294 === (4))){
var inst_23265 = (state_23293[(10)]);
var state_23293__$1 = state_23293;
return cljs.core.async.ioc_alts_BANG_.call(null,state_23293__$1,(7),inst_23265);
} else {
if((state_val_23294 === (6))){
var inst_23289 = (state_23293[(2)]);
var state_23293__$1 = state_23293;
var statearr_23300_23325 = state_23293__$1;
(statearr_23300_23325[(2)] = inst_23289);

(statearr_23300_23325[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23294 === (3))){
var inst_23291 = (state_23293[(2)]);
var state_23293__$1 = state_23293;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23293__$1,inst_23291);
} else {
if((state_val_23294 === (2))){
var inst_23265 = (state_23293[(10)]);
var inst_23267 = cljs.core.count.call(null,inst_23265);
var inst_23268 = (inst_23267 > (0));
var state_23293__$1 = state_23293;
if(cljs.core.truth_(inst_23268)){
var statearr_23302_23326 = state_23293__$1;
(statearr_23302_23326[(1)] = (4));

} else {
var statearr_23303_23327 = state_23293__$1;
(statearr_23303_23327[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23294 === (11))){
var inst_23265 = (state_23293[(10)]);
var inst_23282 = (state_23293[(2)]);
var tmp23301 = inst_23265;
var inst_23265__$1 = tmp23301;
var state_23293__$1 = (function (){var statearr_23304 = state_23293;
(statearr_23304[(11)] = inst_23282);

(statearr_23304[(10)] = inst_23265__$1);

return statearr_23304;
})();
var statearr_23305_23328 = state_23293__$1;
(statearr_23305_23328[(2)] = null);

(statearr_23305_23328[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23294 === (9))){
var inst_23273 = (state_23293[(7)]);
var state_23293__$1 = state_23293;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23293__$1,(11),out,inst_23273);
} else {
if((state_val_23294 === (5))){
var inst_23287 = cljs.core.async.close_BANG_.call(null,out);
var state_23293__$1 = state_23293;
var statearr_23306_23329 = state_23293__$1;
(statearr_23306_23329[(2)] = inst_23287);

(statearr_23306_23329[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23294 === (10))){
var inst_23285 = (state_23293[(2)]);
var state_23293__$1 = state_23293;
var statearr_23307_23330 = state_23293__$1;
(statearr_23307_23330[(2)] = inst_23285);

(statearr_23307_23330[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23294 === (8))){
var inst_23274 = (state_23293[(9)]);
var inst_23273 = (state_23293[(7)]);
var inst_23272 = (state_23293[(8)]);
var inst_23265 = (state_23293[(10)]);
var inst_23277 = (function (){var cs = inst_23265;
var vec__23270 = inst_23272;
var v = inst_23273;
var c = inst_23274;
return ((function (cs,vec__23270,v,c,inst_23274,inst_23273,inst_23272,inst_23265,state_val_23294,c__21223__auto___23321,out){
return (function (p1__23260_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__23260_SHARP_);
});
;})(cs,vec__23270,v,c,inst_23274,inst_23273,inst_23272,inst_23265,state_val_23294,c__21223__auto___23321,out))
})();
var inst_23278 = cljs.core.filterv.call(null,inst_23277,inst_23265);
var inst_23265__$1 = inst_23278;
var state_23293__$1 = (function (){var statearr_23308 = state_23293;
(statearr_23308[(10)] = inst_23265__$1);

return statearr_23308;
})();
var statearr_23309_23331 = state_23293__$1;
(statearr_23309_23331[(2)] = null);

(statearr_23309_23331[(1)] = (2));


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
});})(c__21223__auto___23321,out))
;
return ((function (switch__21111__auto__,c__21223__auto___23321,out){
return (function() {
var cljs$core$async$state_machine__21112__auto__ = null;
var cljs$core$async$state_machine__21112__auto____0 = (function (){
var statearr_23313 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23313[(0)] = cljs$core$async$state_machine__21112__auto__);

(statearr_23313[(1)] = (1));

return statearr_23313;
});
var cljs$core$async$state_machine__21112__auto____1 = (function (state_23293){
while(true){
var ret_value__21113__auto__ = (function (){try{while(true){
var result__21114__auto__ = switch__21111__auto__.call(null,state_23293);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21114__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21114__auto__;
}
break;
}
}catch (e23314){if((e23314 instanceof Object)){
var ex__21115__auto__ = e23314;
var statearr_23315_23332 = state_23293;
(statearr_23315_23332[(5)] = ex__21115__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23293);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23314;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23333 = state_23293;
state_23293 = G__23333;
continue;
} else {
return ret_value__21113__auto__;
}
break;
}
});
cljs$core$async$state_machine__21112__auto__ = function(state_23293){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21112__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21112__auto____1.call(this,state_23293);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21112__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21112__auto____0;
cljs$core$async$state_machine__21112__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21112__auto____1;
return cljs$core$async$state_machine__21112__auto__;
})()
;})(switch__21111__auto__,c__21223__auto___23321,out))
})();
var state__21225__auto__ = (function (){var statearr_23316 = f__21224__auto__.call(null);
(statearr_23316[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21223__auto___23321);

return statearr_23316;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21225__auto__);
});})(c__21223__auto___23321,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args23334 = [];
var len__19499__auto___23383 = arguments.length;
var i__19500__auto___23384 = (0);
while(true){
if((i__19500__auto___23384 < len__19499__auto___23383)){
args23334.push((arguments[i__19500__auto___23384]));

var G__23385 = (i__19500__auto___23384 + (1));
i__19500__auto___23384 = G__23385;
continue;
} else {
}
break;
}

var G__23336 = args23334.length;
switch (G__23336) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23334.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21223__auto___23387 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21223__auto___23387,out){
return (function (){
var f__21224__auto__ = (function (){var switch__21111__auto__ = ((function (c__21223__auto___23387,out){
return (function (state_23360){
var state_val_23361 = (state_23360[(1)]);
if((state_val_23361 === (7))){
var inst_23342 = (state_23360[(7)]);
var inst_23342__$1 = (state_23360[(2)]);
var inst_23343 = (inst_23342__$1 == null);
var inst_23344 = cljs.core.not.call(null,inst_23343);
var state_23360__$1 = (function (){var statearr_23362 = state_23360;
(statearr_23362[(7)] = inst_23342__$1);

return statearr_23362;
})();
if(inst_23344){
var statearr_23363_23388 = state_23360__$1;
(statearr_23363_23388[(1)] = (8));

} else {
var statearr_23364_23389 = state_23360__$1;
(statearr_23364_23389[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23361 === (1))){
var inst_23337 = (0);
var state_23360__$1 = (function (){var statearr_23365 = state_23360;
(statearr_23365[(8)] = inst_23337);

return statearr_23365;
})();
var statearr_23366_23390 = state_23360__$1;
(statearr_23366_23390[(2)] = null);

(statearr_23366_23390[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23361 === (4))){
var state_23360__$1 = state_23360;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23360__$1,(7),ch);
} else {
if((state_val_23361 === (6))){
var inst_23355 = (state_23360[(2)]);
var state_23360__$1 = state_23360;
var statearr_23367_23391 = state_23360__$1;
(statearr_23367_23391[(2)] = inst_23355);

(statearr_23367_23391[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23361 === (3))){
var inst_23357 = (state_23360[(2)]);
var inst_23358 = cljs.core.async.close_BANG_.call(null,out);
var state_23360__$1 = (function (){var statearr_23368 = state_23360;
(statearr_23368[(9)] = inst_23357);

return statearr_23368;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23360__$1,inst_23358);
} else {
if((state_val_23361 === (2))){
var inst_23337 = (state_23360[(8)]);
var inst_23339 = (inst_23337 < n);
var state_23360__$1 = state_23360;
if(cljs.core.truth_(inst_23339)){
var statearr_23369_23392 = state_23360__$1;
(statearr_23369_23392[(1)] = (4));

} else {
var statearr_23370_23393 = state_23360__$1;
(statearr_23370_23393[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23361 === (11))){
var inst_23337 = (state_23360[(8)]);
var inst_23347 = (state_23360[(2)]);
var inst_23348 = (inst_23337 + (1));
var inst_23337__$1 = inst_23348;
var state_23360__$1 = (function (){var statearr_23371 = state_23360;
(statearr_23371[(8)] = inst_23337__$1);

(statearr_23371[(10)] = inst_23347);

return statearr_23371;
})();
var statearr_23372_23394 = state_23360__$1;
(statearr_23372_23394[(2)] = null);

(statearr_23372_23394[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23361 === (9))){
var state_23360__$1 = state_23360;
var statearr_23373_23395 = state_23360__$1;
(statearr_23373_23395[(2)] = null);

(statearr_23373_23395[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23361 === (5))){
var state_23360__$1 = state_23360;
var statearr_23374_23396 = state_23360__$1;
(statearr_23374_23396[(2)] = null);

(statearr_23374_23396[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23361 === (10))){
var inst_23352 = (state_23360[(2)]);
var state_23360__$1 = state_23360;
var statearr_23375_23397 = state_23360__$1;
(statearr_23375_23397[(2)] = inst_23352);

(statearr_23375_23397[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23361 === (8))){
var inst_23342 = (state_23360[(7)]);
var state_23360__$1 = state_23360;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23360__$1,(11),out,inst_23342);
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
});})(c__21223__auto___23387,out))
;
return ((function (switch__21111__auto__,c__21223__auto___23387,out){
return (function() {
var cljs$core$async$state_machine__21112__auto__ = null;
var cljs$core$async$state_machine__21112__auto____0 = (function (){
var statearr_23379 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_23379[(0)] = cljs$core$async$state_machine__21112__auto__);

(statearr_23379[(1)] = (1));

return statearr_23379;
});
var cljs$core$async$state_machine__21112__auto____1 = (function (state_23360){
while(true){
var ret_value__21113__auto__ = (function (){try{while(true){
var result__21114__auto__ = switch__21111__auto__.call(null,state_23360);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21114__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21114__auto__;
}
break;
}
}catch (e23380){if((e23380 instanceof Object)){
var ex__21115__auto__ = e23380;
var statearr_23381_23398 = state_23360;
(statearr_23381_23398[(5)] = ex__21115__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23360);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23380;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23399 = state_23360;
state_23360 = G__23399;
continue;
} else {
return ret_value__21113__auto__;
}
break;
}
});
cljs$core$async$state_machine__21112__auto__ = function(state_23360){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21112__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21112__auto____1.call(this,state_23360);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21112__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21112__auto____0;
cljs$core$async$state_machine__21112__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21112__auto____1;
return cljs$core$async$state_machine__21112__auto__;
})()
;})(switch__21111__auto__,c__21223__auto___23387,out))
})();
var state__21225__auto__ = (function (){var statearr_23382 = f__21224__auto__.call(null);
(statearr_23382[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21223__auto___23387);

return statearr_23382;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21225__auto__);
});})(c__21223__auto___23387,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async23407 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23407 = (function (map_LT_,f,ch,meta23408){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta23408 = meta23408;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23407.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23409,meta23408__$1){
var self__ = this;
var _23409__$1 = this;
return (new cljs.core.async.t_cljs$core$async23407(self__.map_LT_,self__.f,self__.ch,meta23408__$1));
});

cljs.core.async.t_cljs$core$async23407.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23409){
var self__ = this;
var _23409__$1 = this;
return self__.meta23408;
});

cljs.core.async.t_cljs$core$async23407.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async23407.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async23407.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async23407.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async23407.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async23410 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23410 = (function (map_LT_,f,ch,meta23408,_,fn1,meta23411){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta23408 = meta23408;
this._ = _;
this.fn1 = fn1;
this.meta23411 = meta23411;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23410.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_23412,meta23411__$1){
var self__ = this;
var _23412__$1 = this;
return (new cljs.core.async.t_cljs$core$async23410(self__.map_LT_,self__.f,self__.ch,self__.meta23408,self__._,self__.fn1,meta23411__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async23410.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_23412){
var self__ = this;
var _23412__$1 = this;
return self__.meta23411;
});})(___$1))
;

cljs.core.async.t_cljs$core$async23410.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async23410.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async23410.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async23410.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__23400_SHARP_){
return f1.call(null,(((p1__23400_SHARP_ == null))?null:self__.f.call(null,p1__23400_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async23410.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta23408","meta23408",1617418577,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async23407","cljs.core.async/t_cljs$core$async23407",-1272322888,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta23411","meta23411",622814049,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async23410.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23410.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23410";

cljs.core.async.t_cljs$core$async23410.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__19034__auto__,writer__19035__auto__,opt__19036__auto__){
return cljs.core._write.call(null,writer__19035__auto__,"cljs.core.async/t_cljs$core$async23410");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async23410 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async23410(map_LT___$1,f__$1,ch__$1,meta23408__$1,___$2,fn1__$1,meta23411){
return (new cljs.core.async.t_cljs$core$async23410(map_LT___$1,f__$1,ch__$1,meta23408__$1,___$2,fn1__$1,meta23411));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async23410(self__.map_LT_,self__.f,self__.ch,self__.meta23408,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__18416__auto__ = ret;
if(cljs.core.truth_(and__18416__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__18416__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async23407.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async23407.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async23407.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta23408","meta23408",1617418577,null)], null);
});

cljs.core.async.t_cljs$core$async23407.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23407.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23407";

cljs.core.async.t_cljs$core$async23407.cljs$lang$ctorPrWriter = (function (this__19034__auto__,writer__19035__auto__,opt__19036__auto__){
return cljs.core._write.call(null,writer__19035__auto__,"cljs.core.async/t_cljs$core$async23407");
});

cljs.core.async.__GT_t_cljs$core$async23407 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async23407(map_LT___$1,f__$1,ch__$1,meta23408){
return (new cljs.core.async.t_cljs$core$async23407(map_LT___$1,f__$1,ch__$1,meta23408));
});

}

return (new cljs.core.async.t_cljs$core$async23407(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async23416 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23416 = (function (map_GT_,f,ch,meta23417){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta23417 = meta23417;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23416.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23418,meta23417__$1){
var self__ = this;
var _23418__$1 = this;
return (new cljs.core.async.t_cljs$core$async23416(self__.map_GT_,self__.f,self__.ch,meta23417__$1));
});

cljs.core.async.t_cljs$core$async23416.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23418){
var self__ = this;
var _23418__$1 = this;
return self__.meta23417;
});

cljs.core.async.t_cljs$core$async23416.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async23416.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async23416.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async23416.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async23416.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async23416.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async23416.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta23417","meta23417",-1442418471,null)], null);
});

cljs.core.async.t_cljs$core$async23416.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23416.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23416";

cljs.core.async.t_cljs$core$async23416.cljs$lang$ctorPrWriter = (function (this__19034__auto__,writer__19035__auto__,opt__19036__auto__){
return cljs.core._write.call(null,writer__19035__auto__,"cljs.core.async/t_cljs$core$async23416");
});

cljs.core.async.__GT_t_cljs$core$async23416 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async23416(map_GT___$1,f__$1,ch__$1,meta23417){
return (new cljs.core.async.t_cljs$core$async23416(map_GT___$1,f__$1,ch__$1,meta23417));
});

}

return (new cljs.core.async.t_cljs$core$async23416(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async23422 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23422 = (function (filter_GT_,p,ch,meta23423){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta23423 = meta23423;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23422.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23424,meta23423__$1){
var self__ = this;
var _23424__$1 = this;
return (new cljs.core.async.t_cljs$core$async23422(self__.filter_GT_,self__.p,self__.ch,meta23423__$1));
});

cljs.core.async.t_cljs$core$async23422.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23424){
var self__ = this;
var _23424__$1 = this;
return self__.meta23423;
});

cljs.core.async.t_cljs$core$async23422.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async23422.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async23422.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async23422.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async23422.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async23422.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async23422.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async23422.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta23423","meta23423",-2036022245,null)], null);
});

cljs.core.async.t_cljs$core$async23422.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23422.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23422";

cljs.core.async.t_cljs$core$async23422.cljs$lang$ctorPrWriter = (function (this__19034__auto__,writer__19035__auto__,opt__19036__auto__){
return cljs.core._write.call(null,writer__19035__auto__,"cljs.core.async/t_cljs$core$async23422");
});

cljs.core.async.__GT_t_cljs$core$async23422 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async23422(filter_GT___$1,p__$1,ch__$1,meta23423){
return (new cljs.core.async.t_cljs$core$async23422(filter_GT___$1,p__$1,ch__$1,meta23423));
});

}

return (new cljs.core.async.t_cljs$core$async23422(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args23425 = [];
var len__19499__auto___23469 = arguments.length;
var i__19500__auto___23470 = (0);
while(true){
if((i__19500__auto___23470 < len__19499__auto___23469)){
args23425.push((arguments[i__19500__auto___23470]));

var G__23471 = (i__19500__auto___23470 + (1));
i__19500__auto___23470 = G__23471;
continue;
} else {
}
break;
}

var G__23427 = args23425.length;
switch (G__23427) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23425.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21223__auto___23473 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21223__auto___23473,out){
return (function (){
var f__21224__auto__ = (function (){var switch__21111__auto__ = ((function (c__21223__auto___23473,out){
return (function (state_23448){
var state_val_23449 = (state_23448[(1)]);
if((state_val_23449 === (7))){
var inst_23444 = (state_23448[(2)]);
var state_23448__$1 = state_23448;
var statearr_23450_23474 = state_23448__$1;
(statearr_23450_23474[(2)] = inst_23444);

(statearr_23450_23474[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23449 === (1))){
var state_23448__$1 = state_23448;
var statearr_23451_23475 = state_23448__$1;
(statearr_23451_23475[(2)] = null);

(statearr_23451_23475[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23449 === (4))){
var inst_23430 = (state_23448[(7)]);
var inst_23430__$1 = (state_23448[(2)]);
var inst_23431 = (inst_23430__$1 == null);
var state_23448__$1 = (function (){var statearr_23452 = state_23448;
(statearr_23452[(7)] = inst_23430__$1);

return statearr_23452;
})();
if(cljs.core.truth_(inst_23431)){
var statearr_23453_23476 = state_23448__$1;
(statearr_23453_23476[(1)] = (5));

} else {
var statearr_23454_23477 = state_23448__$1;
(statearr_23454_23477[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23449 === (6))){
var inst_23430 = (state_23448[(7)]);
var inst_23435 = p.call(null,inst_23430);
var state_23448__$1 = state_23448;
if(cljs.core.truth_(inst_23435)){
var statearr_23455_23478 = state_23448__$1;
(statearr_23455_23478[(1)] = (8));

} else {
var statearr_23456_23479 = state_23448__$1;
(statearr_23456_23479[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23449 === (3))){
var inst_23446 = (state_23448[(2)]);
var state_23448__$1 = state_23448;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23448__$1,inst_23446);
} else {
if((state_val_23449 === (2))){
var state_23448__$1 = state_23448;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23448__$1,(4),ch);
} else {
if((state_val_23449 === (11))){
var inst_23438 = (state_23448[(2)]);
var state_23448__$1 = state_23448;
var statearr_23457_23480 = state_23448__$1;
(statearr_23457_23480[(2)] = inst_23438);

(statearr_23457_23480[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23449 === (9))){
var state_23448__$1 = state_23448;
var statearr_23458_23481 = state_23448__$1;
(statearr_23458_23481[(2)] = null);

(statearr_23458_23481[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23449 === (5))){
var inst_23433 = cljs.core.async.close_BANG_.call(null,out);
var state_23448__$1 = state_23448;
var statearr_23459_23482 = state_23448__$1;
(statearr_23459_23482[(2)] = inst_23433);

(statearr_23459_23482[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23449 === (10))){
var inst_23441 = (state_23448[(2)]);
var state_23448__$1 = (function (){var statearr_23460 = state_23448;
(statearr_23460[(8)] = inst_23441);

return statearr_23460;
})();
var statearr_23461_23483 = state_23448__$1;
(statearr_23461_23483[(2)] = null);

(statearr_23461_23483[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23449 === (8))){
var inst_23430 = (state_23448[(7)]);
var state_23448__$1 = state_23448;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23448__$1,(11),out,inst_23430);
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
});})(c__21223__auto___23473,out))
;
return ((function (switch__21111__auto__,c__21223__auto___23473,out){
return (function() {
var cljs$core$async$state_machine__21112__auto__ = null;
var cljs$core$async$state_machine__21112__auto____0 = (function (){
var statearr_23465 = [null,null,null,null,null,null,null,null,null];
(statearr_23465[(0)] = cljs$core$async$state_machine__21112__auto__);

(statearr_23465[(1)] = (1));

return statearr_23465;
});
var cljs$core$async$state_machine__21112__auto____1 = (function (state_23448){
while(true){
var ret_value__21113__auto__ = (function (){try{while(true){
var result__21114__auto__ = switch__21111__auto__.call(null,state_23448);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21114__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21114__auto__;
}
break;
}
}catch (e23466){if((e23466 instanceof Object)){
var ex__21115__auto__ = e23466;
var statearr_23467_23484 = state_23448;
(statearr_23467_23484[(5)] = ex__21115__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23448);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23466;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23485 = state_23448;
state_23448 = G__23485;
continue;
} else {
return ret_value__21113__auto__;
}
break;
}
});
cljs$core$async$state_machine__21112__auto__ = function(state_23448){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21112__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21112__auto____1.call(this,state_23448);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21112__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21112__auto____0;
cljs$core$async$state_machine__21112__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21112__auto____1;
return cljs$core$async$state_machine__21112__auto__;
})()
;})(switch__21111__auto__,c__21223__auto___23473,out))
})();
var state__21225__auto__ = (function (){var statearr_23468 = f__21224__auto__.call(null);
(statearr_23468[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21223__auto___23473);

return statearr_23468;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21225__auto__);
});})(c__21223__auto___23473,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args23486 = [];
var len__19499__auto___23489 = arguments.length;
var i__19500__auto___23490 = (0);
while(true){
if((i__19500__auto___23490 < len__19499__auto___23489)){
args23486.push((arguments[i__19500__auto___23490]));

var G__23491 = (i__19500__auto___23490 + (1));
i__19500__auto___23490 = G__23491;
continue;
} else {
}
break;
}

var G__23488 = args23486.length;
switch (G__23488) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23486.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__21223__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21223__auto__){
return (function (){
var f__21224__auto__ = (function (){var switch__21111__auto__ = ((function (c__21223__auto__){
return (function (state_23658){
var state_val_23659 = (state_23658[(1)]);
if((state_val_23659 === (7))){
var inst_23654 = (state_23658[(2)]);
var state_23658__$1 = state_23658;
var statearr_23660_23701 = state_23658__$1;
(statearr_23660_23701[(2)] = inst_23654);

(statearr_23660_23701[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23659 === (20))){
var inst_23624 = (state_23658[(7)]);
var inst_23635 = (state_23658[(2)]);
var inst_23636 = cljs.core.next.call(null,inst_23624);
var inst_23610 = inst_23636;
var inst_23611 = null;
var inst_23612 = (0);
var inst_23613 = (0);
var state_23658__$1 = (function (){var statearr_23661 = state_23658;
(statearr_23661[(8)] = inst_23613);

(statearr_23661[(9)] = inst_23610);

(statearr_23661[(10)] = inst_23612);

(statearr_23661[(11)] = inst_23611);

(statearr_23661[(12)] = inst_23635);

return statearr_23661;
})();
var statearr_23662_23702 = state_23658__$1;
(statearr_23662_23702[(2)] = null);

(statearr_23662_23702[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23659 === (1))){
var state_23658__$1 = state_23658;
var statearr_23663_23703 = state_23658__$1;
(statearr_23663_23703[(2)] = null);

(statearr_23663_23703[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23659 === (4))){
var inst_23599 = (state_23658[(13)]);
var inst_23599__$1 = (state_23658[(2)]);
var inst_23600 = (inst_23599__$1 == null);
var state_23658__$1 = (function (){var statearr_23664 = state_23658;
(statearr_23664[(13)] = inst_23599__$1);

return statearr_23664;
})();
if(cljs.core.truth_(inst_23600)){
var statearr_23665_23704 = state_23658__$1;
(statearr_23665_23704[(1)] = (5));

} else {
var statearr_23666_23705 = state_23658__$1;
(statearr_23666_23705[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23659 === (15))){
var state_23658__$1 = state_23658;
var statearr_23670_23706 = state_23658__$1;
(statearr_23670_23706[(2)] = null);

(statearr_23670_23706[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23659 === (21))){
var state_23658__$1 = state_23658;
var statearr_23671_23707 = state_23658__$1;
(statearr_23671_23707[(2)] = null);

(statearr_23671_23707[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23659 === (13))){
var inst_23613 = (state_23658[(8)]);
var inst_23610 = (state_23658[(9)]);
var inst_23612 = (state_23658[(10)]);
var inst_23611 = (state_23658[(11)]);
var inst_23620 = (state_23658[(2)]);
var inst_23621 = (inst_23613 + (1));
var tmp23667 = inst_23610;
var tmp23668 = inst_23612;
var tmp23669 = inst_23611;
var inst_23610__$1 = tmp23667;
var inst_23611__$1 = tmp23669;
var inst_23612__$1 = tmp23668;
var inst_23613__$1 = inst_23621;
var state_23658__$1 = (function (){var statearr_23672 = state_23658;
(statearr_23672[(8)] = inst_23613__$1);

(statearr_23672[(9)] = inst_23610__$1);

(statearr_23672[(10)] = inst_23612__$1);

(statearr_23672[(11)] = inst_23611__$1);

(statearr_23672[(14)] = inst_23620);

return statearr_23672;
})();
var statearr_23673_23708 = state_23658__$1;
(statearr_23673_23708[(2)] = null);

(statearr_23673_23708[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23659 === (22))){
var state_23658__$1 = state_23658;
var statearr_23674_23709 = state_23658__$1;
(statearr_23674_23709[(2)] = null);

(statearr_23674_23709[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23659 === (6))){
var inst_23599 = (state_23658[(13)]);
var inst_23608 = f.call(null,inst_23599);
var inst_23609 = cljs.core.seq.call(null,inst_23608);
var inst_23610 = inst_23609;
var inst_23611 = null;
var inst_23612 = (0);
var inst_23613 = (0);
var state_23658__$1 = (function (){var statearr_23675 = state_23658;
(statearr_23675[(8)] = inst_23613);

(statearr_23675[(9)] = inst_23610);

(statearr_23675[(10)] = inst_23612);

(statearr_23675[(11)] = inst_23611);

return statearr_23675;
})();
var statearr_23676_23710 = state_23658__$1;
(statearr_23676_23710[(2)] = null);

(statearr_23676_23710[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23659 === (17))){
var inst_23624 = (state_23658[(7)]);
var inst_23628 = cljs.core.chunk_first.call(null,inst_23624);
var inst_23629 = cljs.core.chunk_rest.call(null,inst_23624);
var inst_23630 = cljs.core.count.call(null,inst_23628);
var inst_23610 = inst_23629;
var inst_23611 = inst_23628;
var inst_23612 = inst_23630;
var inst_23613 = (0);
var state_23658__$1 = (function (){var statearr_23677 = state_23658;
(statearr_23677[(8)] = inst_23613);

(statearr_23677[(9)] = inst_23610);

(statearr_23677[(10)] = inst_23612);

(statearr_23677[(11)] = inst_23611);

return statearr_23677;
})();
var statearr_23678_23711 = state_23658__$1;
(statearr_23678_23711[(2)] = null);

(statearr_23678_23711[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23659 === (3))){
var inst_23656 = (state_23658[(2)]);
var state_23658__$1 = state_23658;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23658__$1,inst_23656);
} else {
if((state_val_23659 === (12))){
var inst_23644 = (state_23658[(2)]);
var state_23658__$1 = state_23658;
var statearr_23679_23712 = state_23658__$1;
(statearr_23679_23712[(2)] = inst_23644);

(statearr_23679_23712[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23659 === (2))){
var state_23658__$1 = state_23658;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23658__$1,(4),in$);
} else {
if((state_val_23659 === (23))){
var inst_23652 = (state_23658[(2)]);
var state_23658__$1 = state_23658;
var statearr_23680_23713 = state_23658__$1;
(statearr_23680_23713[(2)] = inst_23652);

(statearr_23680_23713[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23659 === (19))){
var inst_23639 = (state_23658[(2)]);
var state_23658__$1 = state_23658;
var statearr_23681_23714 = state_23658__$1;
(statearr_23681_23714[(2)] = inst_23639);

(statearr_23681_23714[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23659 === (11))){
var inst_23610 = (state_23658[(9)]);
var inst_23624 = (state_23658[(7)]);
var inst_23624__$1 = cljs.core.seq.call(null,inst_23610);
var state_23658__$1 = (function (){var statearr_23682 = state_23658;
(statearr_23682[(7)] = inst_23624__$1);

return statearr_23682;
})();
if(inst_23624__$1){
var statearr_23683_23715 = state_23658__$1;
(statearr_23683_23715[(1)] = (14));

} else {
var statearr_23684_23716 = state_23658__$1;
(statearr_23684_23716[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23659 === (9))){
var inst_23646 = (state_23658[(2)]);
var inst_23647 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_23658__$1 = (function (){var statearr_23685 = state_23658;
(statearr_23685[(15)] = inst_23646);

return statearr_23685;
})();
if(cljs.core.truth_(inst_23647)){
var statearr_23686_23717 = state_23658__$1;
(statearr_23686_23717[(1)] = (21));

} else {
var statearr_23687_23718 = state_23658__$1;
(statearr_23687_23718[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23659 === (5))){
var inst_23602 = cljs.core.async.close_BANG_.call(null,out);
var state_23658__$1 = state_23658;
var statearr_23688_23719 = state_23658__$1;
(statearr_23688_23719[(2)] = inst_23602);

(statearr_23688_23719[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23659 === (14))){
var inst_23624 = (state_23658[(7)]);
var inst_23626 = cljs.core.chunked_seq_QMARK_.call(null,inst_23624);
var state_23658__$1 = state_23658;
if(inst_23626){
var statearr_23689_23720 = state_23658__$1;
(statearr_23689_23720[(1)] = (17));

} else {
var statearr_23690_23721 = state_23658__$1;
(statearr_23690_23721[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23659 === (16))){
var inst_23642 = (state_23658[(2)]);
var state_23658__$1 = state_23658;
var statearr_23691_23722 = state_23658__$1;
(statearr_23691_23722[(2)] = inst_23642);

(statearr_23691_23722[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23659 === (10))){
var inst_23613 = (state_23658[(8)]);
var inst_23611 = (state_23658[(11)]);
var inst_23618 = cljs.core._nth.call(null,inst_23611,inst_23613);
var state_23658__$1 = state_23658;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23658__$1,(13),out,inst_23618);
} else {
if((state_val_23659 === (18))){
var inst_23624 = (state_23658[(7)]);
var inst_23633 = cljs.core.first.call(null,inst_23624);
var state_23658__$1 = state_23658;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23658__$1,(20),out,inst_23633);
} else {
if((state_val_23659 === (8))){
var inst_23613 = (state_23658[(8)]);
var inst_23612 = (state_23658[(10)]);
var inst_23615 = (inst_23613 < inst_23612);
var inst_23616 = inst_23615;
var state_23658__$1 = state_23658;
if(cljs.core.truth_(inst_23616)){
var statearr_23692_23723 = state_23658__$1;
(statearr_23692_23723[(1)] = (10));

} else {
var statearr_23693_23724 = state_23658__$1;
(statearr_23693_23724[(1)] = (11));

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
});})(c__21223__auto__))
;
return ((function (switch__21111__auto__,c__21223__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__21112__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__21112__auto____0 = (function (){
var statearr_23697 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23697[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__21112__auto__);

(statearr_23697[(1)] = (1));

return statearr_23697;
});
var cljs$core$async$mapcat_STAR__$_state_machine__21112__auto____1 = (function (state_23658){
while(true){
var ret_value__21113__auto__ = (function (){try{while(true){
var result__21114__auto__ = switch__21111__auto__.call(null,state_23658);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21114__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21114__auto__;
}
break;
}
}catch (e23698){if((e23698 instanceof Object)){
var ex__21115__auto__ = e23698;
var statearr_23699_23725 = state_23658;
(statearr_23699_23725[(5)] = ex__21115__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23658);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23698;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23726 = state_23658;
state_23658 = G__23726;
continue;
} else {
return ret_value__21113__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__21112__auto__ = function(state_23658){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__21112__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__21112__auto____1.call(this,state_23658);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__21112__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__21112__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__21112__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__21112__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__21112__auto__;
})()
;})(switch__21111__auto__,c__21223__auto__))
})();
var state__21225__auto__ = (function (){var statearr_23700 = f__21224__auto__.call(null);
(statearr_23700[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21223__auto__);

return statearr_23700;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21225__auto__);
});})(c__21223__auto__))
);

return c__21223__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args23727 = [];
var len__19499__auto___23730 = arguments.length;
var i__19500__auto___23731 = (0);
while(true){
if((i__19500__auto___23731 < len__19499__auto___23730)){
args23727.push((arguments[i__19500__auto___23731]));

var G__23732 = (i__19500__auto___23731 + (1));
i__19500__auto___23731 = G__23732;
continue;
} else {
}
break;
}

var G__23729 = args23727.length;
switch (G__23729) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23727.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args23734 = [];
var len__19499__auto___23737 = arguments.length;
var i__19500__auto___23738 = (0);
while(true){
if((i__19500__auto___23738 < len__19499__auto___23737)){
args23734.push((arguments[i__19500__auto___23738]));

var G__23739 = (i__19500__auto___23738 + (1));
i__19500__auto___23738 = G__23739;
continue;
} else {
}
break;
}

var G__23736 = args23734.length;
switch (G__23736) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23734.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args23741 = [];
var len__19499__auto___23792 = arguments.length;
var i__19500__auto___23793 = (0);
while(true){
if((i__19500__auto___23793 < len__19499__auto___23792)){
args23741.push((arguments[i__19500__auto___23793]));

var G__23794 = (i__19500__auto___23793 + (1));
i__19500__auto___23793 = G__23794;
continue;
} else {
}
break;
}

var G__23743 = args23741.length;
switch (G__23743) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23741.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21223__auto___23796 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21223__auto___23796,out){
return (function (){
var f__21224__auto__ = (function (){var switch__21111__auto__ = ((function (c__21223__auto___23796,out){
return (function (state_23767){
var state_val_23768 = (state_23767[(1)]);
if((state_val_23768 === (7))){
var inst_23762 = (state_23767[(2)]);
var state_23767__$1 = state_23767;
var statearr_23769_23797 = state_23767__$1;
(statearr_23769_23797[(2)] = inst_23762);

(statearr_23769_23797[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23768 === (1))){
var inst_23744 = null;
var state_23767__$1 = (function (){var statearr_23770 = state_23767;
(statearr_23770[(7)] = inst_23744);

return statearr_23770;
})();
var statearr_23771_23798 = state_23767__$1;
(statearr_23771_23798[(2)] = null);

(statearr_23771_23798[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23768 === (4))){
var inst_23747 = (state_23767[(8)]);
var inst_23747__$1 = (state_23767[(2)]);
var inst_23748 = (inst_23747__$1 == null);
var inst_23749 = cljs.core.not.call(null,inst_23748);
var state_23767__$1 = (function (){var statearr_23772 = state_23767;
(statearr_23772[(8)] = inst_23747__$1);

return statearr_23772;
})();
if(inst_23749){
var statearr_23773_23799 = state_23767__$1;
(statearr_23773_23799[(1)] = (5));

} else {
var statearr_23774_23800 = state_23767__$1;
(statearr_23774_23800[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23768 === (6))){
var state_23767__$1 = state_23767;
var statearr_23775_23801 = state_23767__$1;
(statearr_23775_23801[(2)] = null);

(statearr_23775_23801[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23768 === (3))){
var inst_23764 = (state_23767[(2)]);
var inst_23765 = cljs.core.async.close_BANG_.call(null,out);
var state_23767__$1 = (function (){var statearr_23776 = state_23767;
(statearr_23776[(9)] = inst_23764);

return statearr_23776;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23767__$1,inst_23765);
} else {
if((state_val_23768 === (2))){
var state_23767__$1 = state_23767;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23767__$1,(4),ch);
} else {
if((state_val_23768 === (11))){
var inst_23747 = (state_23767[(8)]);
var inst_23756 = (state_23767[(2)]);
var inst_23744 = inst_23747;
var state_23767__$1 = (function (){var statearr_23777 = state_23767;
(statearr_23777[(10)] = inst_23756);

(statearr_23777[(7)] = inst_23744);

return statearr_23777;
})();
var statearr_23778_23802 = state_23767__$1;
(statearr_23778_23802[(2)] = null);

(statearr_23778_23802[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23768 === (9))){
var inst_23747 = (state_23767[(8)]);
var state_23767__$1 = state_23767;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23767__$1,(11),out,inst_23747);
} else {
if((state_val_23768 === (5))){
var inst_23747 = (state_23767[(8)]);
var inst_23744 = (state_23767[(7)]);
var inst_23751 = cljs.core._EQ_.call(null,inst_23747,inst_23744);
var state_23767__$1 = state_23767;
if(inst_23751){
var statearr_23780_23803 = state_23767__$1;
(statearr_23780_23803[(1)] = (8));

} else {
var statearr_23781_23804 = state_23767__$1;
(statearr_23781_23804[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23768 === (10))){
var inst_23759 = (state_23767[(2)]);
var state_23767__$1 = state_23767;
var statearr_23782_23805 = state_23767__$1;
(statearr_23782_23805[(2)] = inst_23759);

(statearr_23782_23805[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23768 === (8))){
var inst_23744 = (state_23767[(7)]);
var tmp23779 = inst_23744;
var inst_23744__$1 = tmp23779;
var state_23767__$1 = (function (){var statearr_23783 = state_23767;
(statearr_23783[(7)] = inst_23744__$1);

return statearr_23783;
})();
var statearr_23784_23806 = state_23767__$1;
(statearr_23784_23806[(2)] = null);

(statearr_23784_23806[(1)] = (2));


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
});})(c__21223__auto___23796,out))
;
return ((function (switch__21111__auto__,c__21223__auto___23796,out){
return (function() {
var cljs$core$async$state_machine__21112__auto__ = null;
var cljs$core$async$state_machine__21112__auto____0 = (function (){
var statearr_23788 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_23788[(0)] = cljs$core$async$state_machine__21112__auto__);

(statearr_23788[(1)] = (1));

return statearr_23788;
});
var cljs$core$async$state_machine__21112__auto____1 = (function (state_23767){
while(true){
var ret_value__21113__auto__ = (function (){try{while(true){
var result__21114__auto__ = switch__21111__auto__.call(null,state_23767);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21114__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21114__auto__;
}
break;
}
}catch (e23789){if((e23789 instanceof Object)){
var ex__21115__auto__ = e23789;
var statearr_23790_23807 = state_23767;
(statearr_23790_23807[(5)] = ex__21115__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23767);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23789;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23808 = state_23767;
state_23767 = G__23808;
continue;
} else {
return ret_value__21113__auto__;
}
break;
}
});
cljs$core$async$state_machine__21112__auto__ = function(state_23767){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21112__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21112__auto____1.call(this,state_23767);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21112__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21112__auto____0;
cljs$core$async$state_machine__21112__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21112__auto____1;
return cljs$core$async$state_machine__21112__auto__;
})()
;})(switch__21111__auto__,c__21223__auto___23796,out))
})();
var state__21225__auto__ = (function (){var statearr_23791 = f__21224__auto__.call(null);
(statearr_23791[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21223__auto___23796);

return statearr_23791;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21225__auto__);
});})(c__21223__auto___23796,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args23809 = [];
var len__19499__auto___23879 = arguments.length;
var i__19500__auto___23880 = (0);
while(true){
if((i__19500__auto___23880 < len__19499__auto___23879)){
args23809.push((arguments[i__19500__auto___23880]));

var G__23881 = (i__19500__auto___23880 + (1));
i__19500__auto___23880 = G__23881;
continue;
} else {
}
break;
}

var G__23811 = args23809.length;
switch (G__23811) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23809.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21223__auto___23883 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21223__auto___23883,out){
return (function (){
var f__21224__auto__ = (function (){var switch__21111__auto__ = ((function (c__21223__auto___23883,out){
return (function (state_23849){
var state_val_23850 = (state_23849[(1)]);
if((state_val_23850 === (7))){
var inst_23845 = (state_23849[(2)]);
var state_23849__$1 = state_23849;
var statearr_23851_23884 = state_23849__$1;
(statearr_23851_23884[(2)] = inst_23845);

(statearr_23851_23884[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23850 === (1))){
var inst_23812 = (new Array(n));
var inst_23813 = inst_23812;
var inst_23814 = (0);
var state_23849__$1 = (function (){var statearr_23852 = state_23849;
(statearr_23852[(7)] = inst_23813);

(statearr_23852[(8)] = inst_23814);

return statearr_23852;
})();
var statearr_23853_23885 = state_23849__$1;
(statearr_23853_23885[(2)] = null);

(statearr_23853_23885[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23850 === (4))){
var inst_23817 = (state_23849[(9)]);
var inst_23817__$1 = (state_23849[(2)]);
var inst_23818 = (inst_23817__$1 == null);
var inst_23819 = cljs.core.not.call(null,inst_23818);
var state_23849__$1 = (function (){var statearr_23854 = state_23849;
(statearr_23854[(9)] = inst_23817__$1);

return statearr_23854;
})();
if(inst_23819){
var statearr_23855_23886 = state_23849__$1;
(statearr_23855_23886[(1)] = (5));

} else {
var statearr_23856_23887 = state_23849__$1;
(statearr_23856_23887[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23850 === (15))){
var inst_23839 = (state_23849[(2)]);
var state_23849__$1 = state_23849;
var statearr_23857_23888 = state_23849__$1;
(statearr_23857_23888[(2)] = inst_23839);

(statearr_23857_23888[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23850 === (13))){
var state_23849__$1 = state_23849;
var statearr_23858_23889 = state_23849__$1;
(statearr_23858_23889[(2)] = null);

(statearr_23858_23889[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23850 === (6))){
var inst_23814 = (state_23849[(8)]);
var inst_23835 = (inst_23814 > (0));
var state_23849__$1 = state_23849;
if(cljs.core.truth_(inst_23835)){
var statearr_23859_23890 = state_23849__$1;
(statearr_23859_23890[(1)] = (12));

} else {
var statearr_23860_23891 = state_23849__$1;
(statearr_23860_23891[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23850 === (3))){
var inst_23847 = (state_23849[(2)]);
var state_23849__$1 = state_23849;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23849__$1,inst_23847);
} else {
if((state_val_23850 === (12))){
var inst_23813 = (state_23849[(7)]);
var inst_23837 = cljs.core.vec.call(null,inst_23813);
var state_23849__$1 = state_23849;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23849__$1,(15),out,inst_23837);
} else {
if((state_val_23850 === (2))){
var state_23849__$1 = state_23849;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23849__$1,(4),ch);
} else {
if((state_val_23850 === (11))){
var inst_23829 = (state_23849[(2)]);
var inst_23830 = (new Array(n));
var inst_23813 = inst_23830;
var inst_23814 = (0);
var state_23849__$1 = (function (){var statearr_23861 = state_23849;
(statearr_23861[(7)] = inst_23813);

(statearr_23861[(8)] = inst_23814);

(statearr_23861[(10)] = inst_23829);

return statearr_23861;
})();
var statearr_23862_23892 = state_23849__$1;
(statearr_23862_23892[(2)] = null);

(statearr_23862_23892[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23850 === (9))){
var inst_23813 = (state_23849[(7)]);
var inst_23827 = cljs.core.vec.call(null,inst_23813);
var state_23849__$1 = state_23849;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23849__$1,(11),out,inst_23827);
} else {
if((state_val_23850 === (5))){
var inst_23813 = (state_23849[(7)]);
var inst_23822 = (state_23849[(11)]);
var inst_23814 = (state_23849[(8)]);
var inst_23817 = (state_23849[(9)]);
var inst_23821 = (inst_23813[inst_23814] = inst_23817);
var inst_23822__$1 = (inst_23814 + (1));
var inst_23823 = (inst_23822__$1 < n);
var state_23849__$1 = (function (){var statearr_23863 = state_23849;
(statearr_23863[(11)] = inst_23822__$1);

(statearr_23863[(12)] = inst_23821);

return statearr_23863;
})();
if(cljs.core.truth_(inst_23823)){
var statearr_23864_23893 = state_23849__$1;
(statearr_23864_23893[(1)] = (8));

} else {
var statearr_23865_23894 = state_23849__$1;
(statearr_23865_23894[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23850 === (14))){
var inst_23842 = (state_23849[(2)]);
var inst_23843 = cljs.core.async.close_BANG_.call(null,out);
var state_23849__$1 = (function (){var statearr_23867 = state_23849;
(statearr_23867[(13)] = inst_23842);

return statearr_23867;
})();
var statearr_23868_23895 = state_23849__$1;
(statearr_23868_23895[(2)] = inst_23843);

(statearr_23868_23895[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23850 === (10))){
var inst_23833 = (state_23849[(2)]);
var state_23849__$1 = state_23849;
var statearr_23869_23896 = state_23849__$1;
(statearr_23869_23896[(2)] = inst_23833);

(statearr_23869_23896[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23850 === (8))){
var inst_23813 = (state_23849[(7)]);
var inst_23822 = (state_23849[(11)]);
var tmp23866 = inst_23813;
var inst_23813__$1 = tmp23866;
var inst_23814 = inst_23822;
var state_23849__$1 = (function (){var statearr_23870 = state_23849;
(statearr_23870[(7)] = inst_23813__$1);

(statearr_23870[(8)] = inst_23814);

return statearr_23870;
})();
var statearr_23871_23897 = state_23849__$1;
(statearr_23871_23897[(2)] = null);

(statearr_23871_23897[(1)] = (2));


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
});})(c__21223__auto___23883,out))
;
return ((function (switch__21111__auto__,c__21223__auto___23883,out){
return (function() {
var cljs$core$async$state_machine__21112__auto__ = null;
var cljs$core$async$state_machine__21112__auto____0 = (function (){
var statearr_23875 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23875[(0)] = cljs$core$async$state_machine__21112__auto__);

(statearr_23875[(1)] = (1));

return statearr_23875;
});
var cljs$core$async$state_machine__21112__auto____1 = (function (state_23849){
while(true){
var ret_value__21113__auto__ = (function (){try{while(true){
var result__21114__auto__ = switch__21111__auto__.call(null,state_23849);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21114__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21114__auto__;
}
break;
}
}catch (e23876){if((e23876 instanceof Object)){
var ex__21115__auto__ = e23876;
var statearr_23877_23898 = state_23849;
(statearr_23877_23898[(5)] = ex__21115__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23849);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23876;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23899 = state_23849;
state_23849 = G__23899;
continue;
} else {
return ret_value__21113__auto__;
}
break;
}
});
cljs$core$async$state_machine__21112__auto__ = function(state_23849){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21112__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21112__auto____1.call(this,state_23849);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21112__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21112__auto____0;
cljs$core$async$state_machine__21112__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21112__auto____1;
return cljs$core$async$state_machine__21112__auto__;
})()
;})(switch__21111__auto__,c__21223__auto___23883,out))
})();
var state__21225__auto__ = (function (){var statearr_23878 = f__21224__auto__.call(null);
(statearr_23878[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21223__auto___23883);

return statearr_23878;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21225__auto__);
});})(c__21223__auto___23883,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args23900 = [];
var len__19499__auto___23974 = arguments.length;
var i__19500__auto___23975 = (0);
while(true){
if((i__19500__auto___23975 < len__19499__auto___23974)){
args23900.push((arguments[i__19500__auto___23975]));

var G__23976 = (i__19500__auto___23975 + (1));
i__19500__auto___23975 = G__23976;
continue;
} else {
}
break;
}

var G__23902 = args23900.length;
switch (G__23902) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23900.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21223__auto___23978 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21223__auto___23978,out){
return (function (){
var f__21224__auto__ = (function (){var switch__21111__auto__ = ((function (c__21223__auto___23978,out){
return (function (state_23944){
var state_val_23945 = (state_23944[(1)]);
if((state_val_23945 === (7))){
var inst_23940 = (state_23944[(2)]);
var state_23944__$1 = state_23944;
var statearr_23946_23979 = state_23944__$1;
(statearr_23946_23979[(2)] = inst_23940);

(statearr_23946_23979[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23945 === (1))){
var inst_23903 = [];
var inst_23904 = inst_23903;
var inst_23905 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_23944__$1 = (function (){var statearr_23947 = state_23944;
(statearr_23947[(7)] = inst_23904);

(statearr_23947[(8)] = inst_23905);

return statearr_23947;
})();
var statearr_23948_23980 = state_23944__$1;
(statearr_23948_23980[(2)] = null);

(statearr_23948_23980[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23945 === (4))){
var inst_23908 = (state_23944[(9)]);
var inst_23908__$1 = (state_23944[(2)]);
var inst_23909 = (inst_23908__$1 == null);
var inst_23910 = cljs.core.not.call(null,inst_23909);
var state_23944__$1 = (function (){var statearr_23949 = state_23944;
(statearr_23949[(9)] = inst_23908__$1);

return statearr_23949;
})();
if(inst_23910){
var statearr_23950_23981 = state_23944__$1;
(statearr_23950_23981[(1)] = (5));

} else {
var statearr_23951_23982 = state_23944__$1;
(statearr_23951_23982[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23945 === (15))){
var inst_23934 = (state_23944[(2)]);
var state_23944__$1 = state_23944;
var statearr_23952_23983 = state_23944__$1;
(statearr_23952_23983[(2)] = inst_23934);

(statearr_23952_23983[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23945 === (13))){
var state_23944__$1 = state_23944;
var statearr_23953_23984 = state_23944__$1;
(statearr_23953_23984[(2)] = null);

(statearr_23953_23984[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23945 === (6))){
var inst_23904 = (state_23944[(7)]);
var inst_23929 = inst_23904.length;
var inst_23930 = (inst_23929 > (0));
var state_23944__$1 = state_23944;
if(cljs.core.truth_(inst_23930)){
var statearr_23954_23985 = state_23944__$1;
(statearr_23954_23985[(1)] = (12));

} else {
var statearr_23955_23986 = state_23944__$1;
(statearr_23955_23986[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23945 === (3))){
var inst_23942 = (state_23944[(2)]);
var state_23944__$1 = state_23944;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23944__$1,inst_23942);
} else {
if((state_val_23945 === (12))){
var inst_23904 = (state_23944[(7)]);
var inst_23932 = cljs.core.vec.call(null,inst_23904);
var state_23944__$1 = state_23944;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23944__$1,(15),out,inst_23932);
} else {
if((state_val_23945 === (2))){
var state_23944__$1 = state_23944;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23944__$1,(4),ch);
} else {
if((state_val_23945 === (11))){
var inst_23912 = (state_23944[(10)]);
var inst_23908 = (state_23944[(9)]);
var inst_23922 = (state_23944[(2)]);
var inst_23923 = [];
var inst_23924 = inst_23923.push(inst_23908);
var inst_23904 = inst_23923;
var inst_23905 = inst_23912;
var state_23944__$1 = (function (){var statearr_23956 = state_23944;
(statearr_23956[(7)] = inst_23904);

(statearr_23956[(8)] = inst_23905);

(statearr_23956[(11)] = inst_23924);

(statearr_23956[(12)] = inst_23922);

return statearr_23956;
})();
var statearr_23957_23987 = state_23944__$1;
(statearr_23957_23987[(2)] = null);

(statearr_23957_23987[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23945 === (9))){
var inst_23904 = (state_23944[(7)]);
var inst_23920 = cljs.core.vec.call(null,inst_23904);
var state_23944__$1 = state_23944;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23944__$1,(11),out,inst_23920);
} else {
if((state_val_23945 === (5))){
var inst_23905 = (state_23944[(8)]);
var inst_23912 = (state_23944[(10)]);
var inst_23908 = (state_23944[(9)]);
var inst_23912__$1 = f.call(null,inst_23908);
var inst_23913 = cljs.core._EQ_.call(null,inst_23912__$1,inst_23905);
var inst_23914 = cljs.core.keyword_identical_QMARK_.call(null,inst_23905,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_23915 = (inst_23913) || (inst_23914);
var state_23944__$1 = (function (){var statearr_23958 = state_23944;
(statearr_23958[(10)] = inst_23912__$1);

return statearr_23958;
})();
if(cljs.core.truth_(inst_23915)){
var statearr_23959_23988 = state_23944__$1;
(statearr_23959_23988[(1)] = (8));

} else {
var statearr_23960_23989 = state_23944__$1;
(statearr_23960_23989[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23945 === (14))){
var inst_23937 = (state_23944[(2)]);
var inst_23938 = cljs.core.async.close_BANG_.call(null,out);
var state_23944__$1 = (function (){var statearr_23962 = state_23944;
(statearr_23962[(13)] = inst_23937);

return statearr_23962;
})();
var statearr_23963_23990 = state_23944__$1;
(statearr_23963_23990[(2)] = inst_23938);

(statearr_23963_23990[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23945 === (10))){
var inst_23927 = (state_23944[(2)]);
var state_23944__$1 = state_23944;
var statearr_23964_23991 = state_23944__$1;
(statearr_23964_23991[(2)] = inst_23927);

(statearr_23964_23991[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23945 === (8))){
var inst_23904 = (state_23944[(7)]);
var inst_23912 = (state_23944[(10)]);
var inst_23908 = (state_23944[(9)]);
var inst_23917 = inst_23904.push(inst_23908);
var tmp23961 = inst_23904;
var inst_23904__$1 = tmp23961;
var inst_23905 = inst_23912;
var state_23944__$1 = (function (){var statearr_23965 = state_23944;
(statearr_23965[(14)] = inst_23917);

(statearr_23965[(7)] = inst_23904__$1);

(statearr_23965[(8)] = inst_23905);

return statearr_23965;
})();
var statearr_23966_23992 = state_23944__$1;
(statearr_23966_23992[(2)] = null);

(statearr_23966_23992[(1)] = (2));


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
});})(c__21223__auto___23978,out))
;
return ((function (switch__21111__auto__,c__21223__auto___23978,out){
return (function() {
var cljs$core$async$state_machine__21112__auto__ = null;
var cljs$core$async$state_machine__21112__auto____0 = (function (){
var statearr_23970 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23970[(0)] = cljs$core$async$state_machine__21112__auto__);

(statearr_23970[(1)] = (1));

return statearr_23970;
});
var cljs$core$async$state_machine__21112__auto____1 = (function (state_23944){
while(true){
var ret_value__21113__auto__ = (function (){try{while(true){
var result__21114__auto__ = switch__21111__auto__.call(null,state_23944);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21114__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21114__auto__;
}
break;
}
}catch (e23971){if((e23971 instanceof Object)){
var ex__21115__auto__ = e23971;
var statearr_23972_23993 = state_23944;
(statearr_23972_23993[(5)] = ex__21115__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23944);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23971;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23994 = state_23944;
state_23944 = G__23994;
continue;
} else {
return ret_value__21113__auto__;
}
break;
}
});
cljs$core$async$state_machine__21112__auto__ = function(state_23944){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21112__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21112__auto____1.call(this,state_23944);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21112__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21112__auto____0;
cljs$core$async$state_machine__21112__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21112__auto____1;
return cljs$core$async$state_machine__21112__auto__;
})()
;})(switch__21111__auto__,c__21223__auto___23978,out))
})();
var state__21225__auto__ = (function (){var statearr_23973 = f__21224__auto__.call(null);
(statearr_23973[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21223__auto___23978);

return statearr_23973;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21225__auto__);
});})(c__21223__auto___23978,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map?rel=1490072959194