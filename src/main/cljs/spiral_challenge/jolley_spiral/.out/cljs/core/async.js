// Compiled by ClojureScript 1.10.238 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__7094 = arguments.length;
switch (G__7094) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async7095 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async7095 = (function (f,blockable,meta7096){
this.f = f;
this.blockable = blockable;
this.meta7096 = meta7096;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async7095.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_7097,meta7096__$1){
var self__ = this;
var _7097__$1 = this;
return (new cljs.core.async.t_cljs$core$async7095(self__.f,self__.blockable,meta7096__$1));
});

cljs.core.async.t_cljs$core$async7095.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_7097){
var self__ = this;
var _7097__$1 = this;
return self__.meta7096;
});

cljs.core.async.t_cljs$core$async7095.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async7095.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async7095.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async7095.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async7095.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta7096","meta7096",1309849483,null)], null);
});

cljs.core.async.t_cljs$core$async7095.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async7095.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async7095";

cljs.core.async.t_cljs$core$async7095.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async7095");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async7095.
 */
cljs.core.async.__GT_t_cljs$core$async7095 = (function cljs$core$async$__GT_t_cljs$core$async7095(f__$1,blockable__$1,meta7096){
return (new cljs.core.async.t_cljs$core$async7095(f__$1,blockable__$1,meta7096));
});

}

return (new cljs.core.async.t_cljs$core$async7095(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
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
var G__7101 = arguments.length;
switch (G__7101) {
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
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
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
var G__7104 = arguments.length;
switch (G__7104) {
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
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
var G__7107 = arguments.length;
switch (G__7107) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_7109 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_7109);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_7109,ret){
return (function (){
return fn1.call(null,val_7109);
});})(val_7109,ret))
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
var G__7111 = arguments.length;
switch (G__7111) {
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
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5455__auto__)){
var ret = temp__5455__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5455__auto__)){
var retb = temp__5455__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__5455__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__5455__auto__))
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
var n__4376__auto___7113 = n;
var x_7114 = (0);
while(true){
if((x_7114 < n__4376__auto___7113)){
(a[x_7114] = (0));

var G__7115 = (x_7114 + (1));
x_7114 = G__7115;
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

var G__7116 = (i + (1));
i = G__7116;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async7117 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async7117 = (function (flag,meta7118){
this.flag = flag;
this.meta7118 = meta7118;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async7117.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_7119,meta7118__$1){
var self__ = this;
var _7119__$1 = this;
return (new cljs.core.async.t_cljs$core$async7117(self__.flag,meta7118__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async7117.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_7119){
var self__ = this;
var _7119__$1 = this;
return self__.meta7118;
});})(flag))
;

cljs.core.async.t_cljs$core$async7117.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async7117.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async7117.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async7117.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async7117.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta7118","meta7118",1154294890,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async7117.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async7117.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async7117";

cljs.core.async.t_cljs$core$async7117.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async7117");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async7117.
 */
cljs.core.async.__GT_t_cljs$core$async7117 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async7117(flag__$1,meta7118){
return (new cljs.core.async.t_cljs$core$async7117(flag__$1,meta7118));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async7117(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async7120 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async7120 = (function (flag,cb,meta7121){
this.flag = flag;
this.cb = cb;
this.meta7121 = meta7121;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async7120.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_7122,meta7121__$1){
var self__ = this;
var _7122__$1 = this;
return (new cljs.core.async.t_cljs$core$async7120(self__.flag,self__.cb,meta7121__$1));
});

cljs.core.async.t_cljs$core$async7120.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_7122){
var self__ = this;
var _7122__$1 = this;
return self__.meta7121;
});

cljs.core.async.t_cljs$core$async7120.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async7120.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async7120.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async7120.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async7120.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta7121","meta7121",456618011,null)], null);
});

cljs.core.async.t_cljs$core$async7120.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async7120.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async7120";

cljs.core.async.t_cljs$core$async7120.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async7120");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async7120.
 */
cljs.core.async.__GT_t_cljs$core$async7120 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async7120(flag__$1,cb__$1,meta7121){
return (new cljs.core.async.t_cljs$core$async7120(flag__$1,cb__$1,meta7121));
});

}

return (new cljs.core.async.t_cljs$core$async7120(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__7123_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__7123_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__7124_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__7124_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3922__auto__ = wport;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return port;
}
})()], null));
} else {
var G__7125 = (i + (1));
i = G__7125;
continue;
}
} else {
return null;
}
break;
}
})();
var or__3922__auto__ = ret;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5457__auto__ = (function (){var and__3911__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__3911__auto__;
}
})();
if(cljs.core.truth_(temp__5457__auto__)){
var got = temp__5457__auto__;
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
var args__4502__auto__ = [];
var len__4499__auto___7131 = arguments.length;
var i__4500__auto___7132 = (0);
while(true){
if((i__4500__auto___7132 < len__4499__auto___7131)){
args__4502__auto__.push((arguments[i__4500__auto___7132]));

var G__7133 = (i__4500__auto___7132 + (1));
i__4500__auto___7132 = G__7133;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__7128){
var map__7129 = p__7128;
var map__7129__$1 = ((((!((map__7129 == null)))?(((((map__7129.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7129.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7129):map__7129);
var opts = map__7129__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq7126){
var G__7127 = cljs.core.first.call(null,seq7126);
var seq7126__$1 = cljs.core.next.call(null,seq7126);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__7127,seq7126__$1);
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
var G__7135 = arguments.length;
switch (G__7135) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__7034__auto___7181 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7034__auto___7181){
return (function (){
var f__7035__auto__ = (function (){var switch__6944__auto__ = ((function (c__7034__auto___7181){
return (function (state_7159){
var state_val_7160 = (state_7159[(1)]);
if((state_val_7160 === (7))){
var inst_7155 = (state_7159[(2)]);
var state_7159__$1 = state_7159;
var statearr_7161_7182 = state_7159__$1;
(statearr_7161_7182[(2)] = inst_7155);

(statearr_7161_7182[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7160 === (1))){
var state_7159__$1 = state_7159;
var statearr_7162_7183 = state_7159__$1;
(statearr_7162_7183[(2)] = null);

(statearr_7162_7183[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7160 === (4))){
var inst_7138 = (state_7159[(7)]);
var inst_7138__$1 = (state_7159[(2)]);
var inst_7139 = (inst_7138__$1 == null);
var state_7159__$1 = (function (){var statearr_7163 = state_7159;
(statearr_7163[(7)] = inst_7138__$1);

return statearr_7163;
})();
if(cljs.core.truth_(inst_7139)){
var statearr_7164_7184 = state_7159__$1;
(statearr_7164_7184[(1)] = (5));

} else {
var statearr_7165_7185 = state_7159__$1;
(statearr_7165_7185[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7160 === (13))){
var state_7159__$1 = state_7159;
var statearr_7166_7186 = state_7159__$1;
(statearr_7166_7186[(2)] = null);

(statearr_7166_7186[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7160 === (6))){
var inst_7138 = (state_7159[(7)]);
var state_7159__$1 = state_7159;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_7159__$1,(11),to,inst_7138);
} else {
if((state_val_7160 === (3))){
var inst_7157 = (state_7159[(2)]);
var state_7159__$1 = state_7159;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_7159__$1,inst_7157);
} else {
if((state_val_7160 === (12))){
var state_7159__$1 = state_7159;
var statearr_7167_7187 = state_7159__$1;
(statearr_7167_7187[(2)] = null);

(statearr_7167_7187[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7160 === (2))){
var state_7159__$1 = state_7159;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_7159__$1,(4),from);
} else {
if((state_val_7160 === (11))){
var inst_7148 = (state_7159[(2)]);
var state_7159__$1 = state_7159;
if(cljs.core.truth_(inst_7148)){
var statearr_7168_7188 = state_7159__$1;
(statearr_7168_7188[(1)] = (12));

} else {
var statearr_7169_7189 = state_7159__$1;
(statearr_7169_7189[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7160 === (9))){
var state_7159__$1 = state_7159;
var statearr_7170_7190 = state_7159__$1;
(statearr_7170_7190[(2)] = null);

(statearr_7170_7190[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7160 === (5))){
var state_7159__$1 = state_7159;
if(cljs.core.truth_(close_QMARK_)){
var statearr_7171_7191 = state_7159__$1;
(statearr_7171_7191[(1)] = (8));

} else {
var statearr_7172_7192 = state_7159__$1;
(statearr_7172_7192[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7160 === (14))){
var inst_7153 = (state_7159[(2)]);
var state_7159__$1 = state_7159;
var statearr_7173_7193 = state_7159__$1;
(statearr_7173_7193[(2)] = inst_7153);

(statearr_7173_7193[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7160 === (10))){
var inst_7145 = (state_7159[(2)]);
var state_7159__$1 = state_7159;
var statearr_7174_7194 = state_7159__$1;
(statearr_7174_7194[(2)] = inst_7145);

(statearr_7174_7194[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7160 === (8))){
var inst_7142 = cljs.core.async.close_BANG_.call(null,to);
var state_7159__$1 = state_7159;
var statearr_7175_7195 = state_7159__$1;
(statearr_7175_7195[(2)] = inst_7142);

(statearr_7175_7195[(1)] = (10));


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
});})(c__7034__auto___7181))
;
return ((function (switch__6944__auto__,c__7034__auto___7181){
return (function() {
var cljs$core$async$state_machine__6945__auto__ = null;
var cljs$core$async$state_machine__6945__auto____0 = (function (){
var statearr_7176 = [null,null,null,null,null,null,null,null];
(statearr_7176[(0)] = cljs$core$async$state_machine__6945__auto__);

(statearr_7176[(1)] = (1));

return statearr_7176;
});
var cljs$core$async$state_machine__6945__auto____1 = (function (state_7159){
while(true){
var ret_value__6946__auto__ = (function (){try{while(true){
var result__6947__auto__ = switch__6944__auto__.call(null,state_7159);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6947__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6947__auto__;
}
break;
}
}catch (e7177){if((e7177 instanceof Object)){
var ex__6948__auto__ = e7177;
var statearr_7178_7196 = state_7159;
(statearr_7178_7196[(5)] = ex__6948__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_7159);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e7177;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__7197 = state_7159;
state_7159 = G__7197;
continue;
} else {
return ret_value__6946__auto__;
}
break;
}
});
cljs$core$async$state_machine__6945__auto__ = function(state_7159){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6945__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6945__auto____1.call(this,state_7159);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__6945__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6945__auto____0;
cljs$core$async$state_machine__6945__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6945__auto____1;
return cljs$core$async$state_machine__6945__auto__;
})()
;})(switch__6944__auto__,c__7034__auto___7181))
})();
var state__7036__auto__ = (function (){var statearr_7179 = f__7035__auto__.call(null);
(statearr_7179[(6)] = c__7034__auto___7181);

return statearr_7179;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7036__auto__);
});})(c__7034__auto___7181))
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
return (function (p__7198){
var vec__7199 = p__7198;
var v = cljs.core.nth.call(null,vec__7199,(0),null);
var p = cljs.core.nth.call(null,vec__7199,(1),null);
var job = vec__7199;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__7034__auto___7370 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7034__auto___7370,res,vec__7199,v,p,job,jobs,results){
return (function (){
var f__7035__auto__ = (function (){var switch__6944__auto__ = ((function (c__7034__auto___7370,res,vec__7199,v,p,job,jobs,results){
return (function (state_7206){
var state_val_7207 = (state_7206[(1)]);
if((state_val_7207 === (1))){
var state_7206__$1 = state_7206;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_7206__$1,(2),res,v);
} else {
if((state_val_7207 === (2))){
var inst_7203 = (state_7206[(2)]);
var inst_7204 = cljs.core.async.close_BANG_.call(null,res);
var state_7206__$1 = (function (){var statearr_7208 = state_7206;
(statearr_7208[(7)] = inst_7203);

return statearr_7208;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_7206__$1,inst_7204);
} else {
return null;
}
}
});})(c__7034__auto___7370,res,vec__7199,v,p,job,jobs,results))
;
return ((function (switch__6944__auto__,c__7034__auto___7370,res,vec__7199,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__6945__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__6945__auto____0 = (function (){
var statearr_7209 = [null,null,null,null,null,null,null,null];
(statearr_7209[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__6945__auto__);

(statearr_7209[(1)] = (1));

return statearr_7209;
});
var cljs$core$async$pipeline_STAR__$_state_machine__6945__auto____1 = (function (state_7206){
while(true){
var ret_value__6946__auto__ = (function (){try{while(true){
var result__6947__auto__ = switch__6944__auto__.call(null,state_7206);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6947__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6947__auto__;
}
break;
}
}catch (e7210){if((e7210 instanceof Object)){
var ex__6948__auto__ = e7210;
var statearr_7211_7371 = state_7206;
(statearr_7211_7371[(5)] = ex__6948__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_7206);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e7210;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__7372 = state_7206;
state_7206 = G__7372;
continue;
} else {
return ret_value__6946__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__6945__auto__ = function(state_7206){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__6945__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__6945__auto____1.call(this,state_7206);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__6945__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__6945__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__6945__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__6945__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__6945__auto__;
})()
;})(switch__6944__auto__,c__7034__auto___7370,res,vec__7199,v,p,job,jobs,results))
})();
var state__7036__auto__ = (function (){var statearr_7212 = f__7035__auto__.call(null);
(statearr_7212[(6)] = c__7034__auto___7370);

return statearr_7212;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7036__auto__);
});})(c__7034__auto___7370,res,vec__7199,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__7213){
var vec__7214 = p__7213;
var v = cljs.core.nth.call(null,vec__7214,(0),null);
var p = cljs.core.nth.call(null,vec__7214,(1),null);
var job = vec__7214;
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
var n__4376__auto___7373 = n;
var __7374 = (0);
while(true){
if((__7374 < n__4376__auto___7373)){
var G__7217_7375 = type;
var G__7217_7376__$1 = (((G__7217_7375 instanceof cljs.core.Keyword))?G__7217_7375.fqn:null);
switch (G__7217_7376__$1) {
case "compute":
var c__7034__auto___7378 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__7374,c__7034__auto___7378,G__7217_7375,G__7217_7376__$1,n__4376__auto___7373,jobs,results,process,async){
return (function (){
var f__7035__auto__ = (function (){var switch__6944__auto__ = ((function (__7374,c__7034__auto___7378,G__7217_7375,G__7217_7376__$1,n__4376__auto___7373,jobs,results,process,async){
return (function (state_7230){
var state_val_7231 = (state_7230[(1)]);
if((state_val_7231 === (1))){
var state_7230__$1 = state_7230;
var statearr_7232_7379 = state_7230__$1;
(statearr_7232_7379[(2)] = null);

(statearr_7232_7379[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7231 === (2))){
var state_7230__$1 = state_7230;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_7230__$1,(4),jobs);
} else {
if((state_val_7231 === (3))){
var inst_7228 = (state_7230[(2)]);
var state_7230__$1 = state_7230;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_7230__$1,inst_7228);
} else {
if((state_val_7231 === (4))){
var inst_7220 = (state_7230[(2)]);
var inst_7221 = process.call(null,inst_7220);
var state_7230__$1 = state_7230;
if(cljs.core.truth_(inst_7221)){
var statearr_7233_7380 = state_7230__$1;
(statearr_7233_7380[(1)] = (5));

} else {
var statearr_7234_7381 = state_7230__$1;
(statearr_7234_7381[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7231 === (5))){
var state_7230__$1 = state_7230;
var statearr_7235_7382 = state_7230__$1;
(statearr_7235_7382[(2)] = null);

(statearr_7235_7382[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7231 === (6))){
var state_7230__$1 = state_7230;
var statearr_7236_7383 = state_7230__$1;
(statearr_7236_7383[(2)] = null);

(statearr_7236_7383[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7231 === (7))){
var inst_7226 = (state_7230[(2)]);
var state_7230__$1 = state_7230;
var statearr_7237_7384 = state_7230__$1;
(statearr_7237_7384[(2)] = inst_7226);

(statearr_7237_7384[(1)] = (3));


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
});})(__7374,c__7034__auto___7378,G__7217_7375,G__7217_7376__$1,n__4376__auto___7373,jobs,results,process,async))
;
return ((function (__7374,switch__6944__auto__,c__7034__auto___7378,G__7217_7375,G__7217_7376__$1,n__4376__auto___7373,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__6945__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__6945__auto____0 = (function (){
var statearr_7238 = [null,null,null,null,null,null,null];
(statearr_7238[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__6945__auto__);

(statearr_7238[(1)] = (1));

return statearr_7238;
});
var cljs$core$async$pipeline_STAR__$_state_machine__6945__auto____1 = (function (state_7230){
while(true){
var ret_value__6946__auto__ = (function (){try{while(true){
var result__6947__auto__ = switch__6944__auto__.call(null,state_7230);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6947__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6947__auto__;
}
break;
}
}catch (e7239){if((e7239 instanceof Object)){
var ex__6948__auto__ = e7239;
var statearr_7240_7385 = state_7230;
(statearr_7240_7385[(5)] = ex__6948__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_7230);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e7239;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__7386 = state_7230;
state_7230 = G__7386;
continue;
} else {
return ret_value__6946__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__6945__auto__ = function(state_7230){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__6945__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__6945__auto____1.call(this,state_7230);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__6945__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__6945__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__6945__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__6945__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__6945__auto__;
})()
;})(__7374,switch__6944__auto__,c__7034__auto___7378,G__7217_7375,G__7217_7376__$1,n__4376__auto___7373,jobs,results,process,async))
})();
var state__7036__auto__ = (function (){var statearr_7241 = f__7035__auto__.call(null);
(statearr_7241[(6)] = c__7034__auto___7378);

return statearr_7241;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7036__auto__);
});})(__7374,c__7034__auto___7378,G__7217_7375,G__7217_7376__$1,n__4376__auto___7373,jobs,results,process,async))
);


break;
case "async":
var c__7034__auto___7387 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__7374,c__7034__auto___7387,G__7217_7375,G__7217_7376__$1,n__4376__auto___7373,jobs,results,process,async){
return (function (){
var f__7035__auto__ = (function (){var switch__6944__auto__ = ((function (__7374,c__7034__auto___7387,G__7217_7375,G__7217_7376__$1,n__4376__auto___7373,jobs,results,process,async){
return (function (state_7254){
var state_val_7255 = (state_7254[(1)]);
if((state_val_7255 === (1))){
var state_7254__$1 = state_7254;
var statearr_7256_7388 = state_7254__$1;
(statearr_7256_7388[(2)] = null);

(statearr_7256_7388[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7255 === (2))){
var state_7254__$1 = state_7254;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_7254__$1,(4),jobs);
} else {
if((state_val_7255 === (3))){
var inst_7252 = (state_7254[(2)]);
var state_7254__$1 = state_7254;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_7254__$1,inst_7252);
} else {
if((state_val_7255 === (4))){
var inst_7244 = (state_7254[(2)]);
var inst_7245 = async.call(null,inst_7244);
var state_7254__$1 = state_7254;
if(cljs.core.truth_(inst_7245)){
var statearr_7257_7389 = state_7254__$1;
(statearr_7257_7389[(1)] = (5));

} else {
var statearr_7258_7390 = state_7254__$1;
(statearr_7258_7390[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7255 === (5))){
var state_7254__$1 = state_7254;
var statearr_7259_7391 = state_7254__$1;
(statearr_7259_7391[(2)] = null);

(statearr_7259_7391[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7255 === (6))){
var state_7254__$1 = state_7254;
var statearr_7260_7392 = state_7254__$1;
(statearr_7260_7392[(2)] = null);

(statearr_7260_7392[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7255 === (7))){
var inst_7250 = (state_7254[(2)]);
var state_7254__$1 = state_7254;
var statearr_7261_7393 = state_7254__$1;
(statearr_7261_7393[(2)] = inst_7250);

(statearr_7261_7393[(1)] = (3));


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
});})(__7374,c__7034__auto___7387,G__7217_7375,G__7217_7376__$1,n__4376__auto___7373,jobs,results,process,async))
;
return ((function (__7374,switch__6944__auto__,c__7034__auto___7387,G__7217_7375,G__7217_7376__$1,n__4376__auto___7373,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__6945__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__6945__auto____0 = (function (){
var statearr_7262 = [null,null,null,null,null,null,null];
(statearr_7262[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__6945__auto__);

(statearr_7262[(1)] = (1));

return statearr_7262;
});
var cljs$core$async$pipeline_STAR__$_state_machine__6945__auto____1 = (function (state_7254){
while(true){
var ret_value__6946__auto__ = (function (){try{while(true){
var result__6947__auto__ = switch__6944__auto__.call(null,state_7254);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6947__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6947__auto__;
}
break;
}
}catch (e7263){if((e7263 instanceof Object)){
var ex__6948__auto__ = e7263;
var statearr_7264_7394 = state_7254;
(statearr_7264_7394[(5)] = ex__6948__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_7254);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e7263;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__7395 = state_7254;
state_7254 = G__7395;
continue;
} else {
return ret_value__6946__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__6945__auto__ = function(state_7254){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__6945__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__6945__auto____1.call(this,state_7254);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__6945__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__6945__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__6945__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__6945__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__6945__auto__;
})()
;})(__7374,switch__6944__auto__,c__7034__auto___7387,G__7217_7375,G__7217_7376__$1,n__4376__auto___7373,jobs,results,process,async))
})();
var state__7036__auto__ = (function (){var statearr_7265 = f__7035__auto__.call(null);
(statearr_7265[(6)] = c__7034__auto___7387);

return statearr_7265;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7036__auto__);
});})(__7374,c__7034__auto___7387,G__7217_7375,G__7217_7376__$1,n__4376__auto___7373,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__7217_7376__$1)].join('')));

}

var G__7396 = (__7374 + (1));
__7374 = G__7396;
continue;
} else {
}
break;
}

var c__7034__auto___7397 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7034__auto___7397,jobs,results,process,async){
return (function (){
var f__7035__auto__ = (function (){var switch__6944__auto__ = ((function (c__7034__auto___7397,jobs,results,process,async){
return (function (state_7287){
var state_val_7288 = (state_7287[(1)]);
if((state_val_7288 === (1))){
var state_7287__$1 = state_7287;
var statearr_7289_7398 = state_7287__$1;
(statearr_7289_7398[(2)] = null);

(statearr_7289_7398[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7288 === (2))){
var state_7287__$1 = state_7287;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_7287__$1,(4),from);
} else {
if((state_val_7288 === (3))){
var inst_7285 = (state_7287[(2)]);
var state_7287__$1 = state_7287;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_7287__$1,inst_7285);
} else {
if((state_val_7288 === (4))){
var inst_7268 = (state_7287[(7)]);
var inst_7268__$1 = (state_7287[(2)]);
var inst_7269 = (inst_7268__$1 == null);
var state_7287__$1 = (function (){var statearr_7290 = state_7287;
(statearr_7290[(7)] = inst_7268__$1);

return statearr_7290;
})();
if(cljs.core.truth_(inst_7269)){
var statearr_7291_7399 = state_7287__$1;
(statearr_7291_7399[(1)] = (5));

} else {
var statearr_7292_7400 = state_7287__$1;
(statearr_7292_7400[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7288 === (5))){
var inst_7271 = cljs.core.async.close_BANG_.call(null,jobs);
var state_7287__$1 = state_7287;
var statearr_7293_7401 = state_7287__$1;
(statearr_7293_7401[(2)] = inst_7271);

(statearr_7293_7401[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7288 === (6))){
var inst_7273 = (state_7287[(8)]);
var inst_7268 = (state_7287[(7)]);
var inst_7273__$1 = cljs.core.async.chan.call(null,(1));
var inst_7274 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_7275 = [inst_7268,inst_7273__$1];
var inst_7276 = (new cljs.core.PersistentVector(null,2,(5),inst_7274,inst_7275,null));
var state_7287__$1 = (function (){var statearr_7294 = state_7287;
(statearr_7294[(8)] = inst_7273__$1);

return statearr_7294;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_7287__$1,(8),jobs,inst_7276);
} else {
if((state_val_7288 === (7))){
var inst_7283 = (state_7287[(2)]);
var state_7287__$1 = state_7287;
var statearr_7295_7402 = state_7287__$1;
(statearr_7295_7402[(2)] = inst_7283);

(statearr_7295_7402[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7288 === (8))){
var inst_7273 = (state_7287[(8)]);
var inst_7278 = (state_7287[(2)]);
var state_7287__$1 = (function (){var statearr_7296 = state_7287;
(statearr_7296[(9)] = inst_7278);

return statearr_7296;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_7287__$1,(9),results,inst_7273);
} else {
if((state_val_7288 === (9))){
var inst_7280 = (state_7287[(2)]);
var state_7287__$1 = (function (){var statearr_7297 = state_7287;
(statearr_7297[(10)] = inst_7280);

return statearr_7297;
})();
var statearr_7298_7403 = state_7287__$1;
(statearr_7298_7403[(2)] = null);

(statearr_7298_7403[(1)] = (2));


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
});})(c__7034__auto___7397,jobs,results,process,async))
;
return ((function (switch__6944__auto__,c__7034__auto___7397,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__6945__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__6945__auto____0 = (function (){
var statearr_7299 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_7299[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__6945__auto__);

(statearr_7299[(1)] = (1));

return statearr_7299;
});
var cljs$core$async$pipeline_STAR__$_state_machine__6945__auto____1 = (function (state_7287){
while(true){
var ret_value__6946__auto__ = (function (){try{while(true){
var result__6947__auto__ = switch__6944__auto__.call(null,state_7287);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6947__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6947__auto__;
}
break;
}
}catch (e7300){if((e7300 instanceof Object)){
var ex__6948__auto__ = e7300;
var statearr_7301_7404 = state_7287;
(statearr_7301_7404[(5)] = ex__6948__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_7287);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e7300;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__7405 = state_7287;
state_7287 = G__7405;
continue;
} else {
return ret_value__6946__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__6945__auto__ = function(state_7287){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__6945__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__6945__auto____1.call(this,state_7287);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__6945__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__6945__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__6945__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__6945__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__6945__auto__;
})()
;})(switch__6944__auto__,c__7034__auto___7397,jobs,results,process,async))
})();
var state__7036__auto__ = (function (){var statearr_7302 = f__7035__auto__.call(null);
(statearr_7302[(6)] = c__7034__auto___7397);

return statearr_7302;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7036__auto__);
});})(c__7034__auto___7397,jobs,results,process,async))
);


var c__7034__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7034__auto__,jobs,results,process,async){
return (function (){
var f__7035__auto__ = (function (){var switch__6944__auto__ = ((function (c__7034__auto__,jobs,results,process,async){
return (function (state_7340){
var state_val_7341 = (state_7340[(1)]);
if((state_val_7341 === (7))){
var inst_7336 = (state_7340[(2)]);
var state_7340__$1 = state_7340;
var statearr_7342_7406 = state_7340__$1;
(statearr_7342_7406[(2)] = inst_7336);

(statearr_7342_7406[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7341 === (20))){
var state_7340__$1 = state_7340;
var statearr_7343_7407 = state_7340__$1;
(statearr_7343_7407[(2)] = null);

(statearr_7343_7407[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7341 === (1))){
var state_7340__$1 = state_7340;
var statearr_7344_7408 = state_7340__$1;
(statearr_7344_7408[(2)] = null);

(statearr_7344_7408[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7341 === (4))){
var inst_7305 = (state_7340[(7)]);
var inst_7305__$1 = (state_7340[(2)]);
var inst_7306 = (inst_7305__$1 == null);
var state_7340__$1 = (function (){var statearr_7345 = state_7340;
(statearr_7345[(7)] = inst_7305__$1);

return statearr_7345;
})();
if(cljs.core.truth_(inst_7306)){
var statearr_7346_7409 = state_7340__$1;
(statearr_7346_7409[(1)] = (5));

} else {
var statearr_7347_7410 = state_7340__$1;
(statearr_7347_7410[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7341 === (15))){
var inst_7318 = (state_7340[(8)]);
var state_7340__$1 = state_7340;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_7340__$1,(18),to,inst_7318);
} else {
if((state_val_7341 === (21))){
var inst_7331 = (state_7340[(2)]);
var state_7340__$1 = state_7340;
var statearr_7348_7411 = state_7340__$1;
(statearr_7348_7411[(2)] = inst_7331);

(statearr_7348_7411[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7341 === (13))){
var inst_7333 = (state_7340[(2)]);
var state_7340__$1 = (function (){var statearr_7349 = state_7340;
(statearr_7349[(9)] = inst_7333);

return statearr_7349;
})();
var statearr_7350_7412 = state_7340__$1;
(statearr_7350_7412[(2)] = null);

(statearr_7350_7412[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7341 === (6))){
var inst_7305 = (state_7340[(7)]);
var state_7340__$1 = state_7340;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_7340__$1,(11),inst_7305);
} else {
if((state_val_7341 === (17))){
var inst_7326 = (state_7340[(2)]);
var state_7340__$1 = state_7340;
if(cljs.core.truth_(inst_7326)){
var statearr_7351_7413 = state_7340__$1;
(statearr_7351_7413[(1)] = (19));

} else {
var statearr_7352_7414 = state_7340__$1;
(statearr_7352_7414[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7341 === (3))){
var inst_7338 = (state_7340[(2)]);
var state_7340__$1 = state_7340;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_7340__$1,inst_7338);
} else {
if((state_val_7341 === (12))){
var inst_7315 = (state_7340[(10)]);
var state_7340__$1 = state_7340;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_7340__$1,(14),inst_7315);
} else {
if((state_val_7341 === (2))){
var state_7340__$1 = state_7340;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_7340__$1,(4),results);
} else {
if((state_val_7341 === (19))){
var state_7340__$1 = state_7340;
var statearr_7353_7415 = state_7340__$1;
(statearr_7353_7415[(2)] = null);

(statearr_7353_7415[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7341 === (11))){
var inst_7315 = (state_7340[(2)]);
var state_7340__$1 = (function (){var statearr_7354 = state_7340;
(statearr_7354[(10)] = inst_7315);

return statearr_7354;
})();
var statearr_7355_7416 = state_7340__$1;
(statearr_7355_7416[(2)] = null);

(statearr_7355_7416[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7341 === (9))){
var state_7340__$1 = state_7340;
var statearr_7356_7417 = state_7340__$1;
(statearr_7356_7417[(2)] = null);

(statearr_7356_7417[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7341 === (5))){
var state_7340__$1 = state_7340;
if(cljs.core.truth_(close_QMARK_)){
var statearr_7357_7418 = state_7340__$1;
(statearr_7357_7418[(1)] = (8));

} else {
var statearr_7358_7419 = state_7340__$1;
(statearr_7358_7419[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7341 === (14))){
var inst_7320 = (state_7340[(11)]);
var inst_7318 = (state_7340[(8)]);
var inst_7318__$1 = (state_7340[(2)]);
var inst_7319 = (inst_7318__$1 == null);
var inst_7320__$1 = cljs.core.not.call(null,inst_7319);
var state_7340__$1 = (function (){var statearr_7359 = state_7340;
(statearr_7359[(11)] = inst_7320__$1);

(statearr_7359[(8)] = inst_7318__$1);

return statearr_7359;
})();
if(inst_7320__$1){
var statearr_7360_7420 = state_7340__$1;
(statearr_7360_7420[(1)] = (15));

} else {
var statearr_7361_7421 = state_7340__$1;
(statearr_7361_7421[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7341 === (16))){
var inst_7320 = (state_7340[(11)]);
var state_7340__$1 = state_7340;
var statearr_7362_7422 = state_7340__$1;
(statearr_7362_7422[(2)] = inst_7320);

(statearr_7362_7422[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7341 === (10))){
var inst_7312 = (state_7340[(2)]);
var state_7340__$1 = state_7340;
var statearr_7363_7423 = state_7340__$1;
(statearr_7363_7423[(2)] = inst_7312);

(statearr_7363_7423[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7341 === (18))){
var inst_7323 = (state_7340[(2)]);
var state_7340__$1 = state_7340;
var statearr_7364_7424 = state_7340__$1;
(statearr_7364_7424[(2)] = inst_7323);

(statearr_7364_7424[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7341 === (8))){
var inst_7309 = cljs.core.async.close_BANG_.call(null,to);
var state_7340__$1 = state_7340;
var statearr_7365_7425 = state_7340__$1;
(statearr_7365_7425[(2)] = inst_7309);

(statearr_7365_7425[(1)] = (10));


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
});})(c__7034__auto__,jobs,results,process,async))
;
return ((function (switch__6944__auto__,c__7034__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__6945__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__6945__auto____0 = (function (){
var statearr_7366 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_7366[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__6945__auto__);

(statearr_7366[(1)] = (1));

return statearr_7366;
});
var cljs$core$async$pipeline_STAR__$_state_machine__6945__auto____1 = (function (state_7340){
while(true){
var ret_value__6946__auto__ = (function (){try{while(true){
var result__6947__auto__ = switch__6944__auto__.call(null,state_7340);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6947__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6947__auto__;
}
break;
}
}catch (e7367){if((e7367 instanceof Object)){
var ex__6948__auto__ = e7367;
var statearr_7368_7426 = state_7340;
(statearr_7368_7426[(5)] = ex__6948__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_7340);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e7367;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__7427 = state_7340;
state_7340 = G__7427;
continue;
} else {
return ret_value__6946__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__6945__auto__ = function(state_7340){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__6945__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__6945__auto____1.call(this,state_7340);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__6945__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__6945__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__6945__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__6945__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__6945__auto__;
})()
;})(switch__6944__auto__,c__7034__auto__,jobs,results,process,async))
})();
var state__7036__auto__ = (function (){var statearr_7369 = f__7035__auto__.call(null);
(statearr_7369[(6)] = c__7034__auto__);

return statearr_7369;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7036__auto__);
});})(c__7034__auto__,jobs,results,process,async))
);

return c__7034__auto__;
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
var G__7429 = arguments.length;
switch (G__7429) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
var G__7432 = arguments.length;
switch (G__7432) {
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
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
var G__7435 = arguments.length;
switch (G__7435) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__7034__auto___7484 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7034__auto___7484,tc,fc){
return (function (){
var f__7035__auto__ = (function (){var switch__6944__auto__ = ((function (c__7034__auto___7484,tc,fc){
return (function (state_7461){
var state_val_7462 = (state_7461[(1)]);
if((state_val_7462 === (7))){
var inst_7457 = (state_7461[(2)]);
var state_7461__$1 = state_7461;
var statearr_7463_7485 = state_7461__$1;
(statearr_7463_7485[(2)] = inst_7457);

(statearr_7463_7485[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7462 === (1))){
var state_7461__$1 = state_7461;
var statearr_7464_7486 = state_7461__$1;
(statearr_7464_7486[(2)] = null);

(statearr_7464_7486[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7462 === (4))){
var inst_7438 = (state_7461[(7)]);
var inst_7438__$1 = (state_7461[(2)]);
var inst_7439 = (inst_7438__$1 == null);
var state_7461__$1 = (function (){var statearr_7465 = state_7461;
(statearr_7465[(7)] = inst_7438__$1);

return statearr_7465;
})();
if(cljs.core.truth_(inst_7439)){
var statearr_7466_7487 = state_7461__$1;
(statearr_7466_7487[(1)] = (5));

} else {
var statearr_7467_7488 = state_7461__$1;
(statearr_7467_7488[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7462 === (13))){
var state_7461__$1 = state_7461;
var statearr_7468_7489 = state_7461__$1;
(statearr_7468_7489[(2)] = null);

(statearr_7468_7489[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7462 === (6))){
var inst_7438 = (state_7461[(7)]);
var inst_7444 = p.call(null,inst_7438);
var state_7461__$1 = state_7461;
if(cljs.core.truth_(inst_7444)){
var statearr_7469_7490 = state_7461__$1;
(statearr_7469_7490[(1)] = (9));

} else {
var statearr_7470_7491 = state_7461__$1;
(statearr_7470_7491[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7462 === (3))){
var inst_7459 = (state_7461[(2)]);
var state_7461__$1 = state_7461;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_7461__$1,inst_7459);
} else {
if((state_val_7462 === (12))){
var state_7461__$1 = state_7461;
var statearr_7471_7492 = state_7461__$1;
(statearr_7471_7492[(2)] = null);

(statearr_7471_7492[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7462 === (2))){
var state_7461__$1 = state_7461;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_7461__$1,(4),ch);
} else {
if((state_val_7462 === (11))){
var inst_7438 = (state_7461[(7)]);
var inst_7448 = (state_7461[(2)]);
var state_7461__$1 = state_7461;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_7461__$1,(8),inst_7448,inst_7438);
} else {
if((state_val_7462 === (9))){
var state_7461__$1 = state_7461;
var statearr_7472_7493 = state_7461__$1;
(statearr_7472_7493[(2)] = tc);

(statearr_7472_7493[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7462 === (5))){
var inst_7441 = cljs.core.async.close_BANG_.call(null,tc);
var inst_7442 = cljs.core.async.close_BANG_.call(null,fc);
var state_7461__$1 = (function (){var statearr_7473 = state_7461;
(statearr_7473[(8)] = inst_7441);

return statearr_7473;
})();
var statearr_7474_7494 = state_7461__$1;
(statearr_7474_7494[(2)] = inst_7442);

(statearr_7474_7494[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7462 === (14))){
var inst_7455 = (state_7461[(2)]);
var state_7461__$1 = state_7461;
var statearr_7475_7495 = state_7461__$1;
(statearr_7475_7495[(2)] = inst_7455);

(statearr_7475_7495[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7462 === (10))){
var state_7461__$1 = state_7461;
var statearr_7476_7496 = state_7461__$1;
(statearr_7476_7496[(2)] = fc);

(statearr_7476_7496[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7462 === (8))){
var inst_7450 = (state_7461[(2)]);
var state_7461__$1 = state_7461;
if(cljs.core.truth_(inst_7450)){
var statearr_7477_7497 = state_7461__$1;
(statearr_7477_7497[(1)] = (12));

} else {
var statearr_7478_7498 = state_7461__$1;
(statearr_7478_7498[(1)] = (13));

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
});})(c__7034__auto___7484,tc,fc))
;
return ((function (switch__6944__auto__,c__7034__auto___7484,tc,fc){
return (function() {
var cljs$core$async$state_machine__6945__auto__ = null;
var cljs$core$async$state_machine__6945__auto____0 = (function (){
var statearr_7479 = [null,null,null,null,null,null,null,null,null];
(statearr_7479[(0)] = cljs$core$async$state_machine__6945__auto__);

(statearr_7479[(1)] = (1));

return statearr_7479;
});
var cljs$core$async$state_machine__6945__auto____1 = (function (state_7461){
while(true){
var ret_value__6946__auto__ = (function (){try{while(true){
var result__6947__auto__ = switch__6944__auto__.call(null,state_7461);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6947__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6947__auto__;
}
break;
}
}catch (e7480){if((e7480 instanceof Object)){
var ex__6948__auto__ = e7480;
var statearr_7481_7499 = state_7461;
(statearr_7481_7499[(5)] = ex__6948__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_7461);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e7480;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__7500 = state_7461;
state_7461 = G__7500;
continue;
} else {
return ret_value__6946__auto__;
}
break;
}
});
cljs$core$async$state_machine__6945__auto__ = function(state_7461){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6945__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6945__auto____1.call(this,state_7461);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__6945__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6945__auto____0;
cljs$core$async$state_machine__6945__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6945__auto____1;
return cljs$core$async$state_machine__6945__auto__;
})()
;})(switch__6944__auto__,c__7034__auto___7484,tc,fc))
})();
var state__7036__auto__ = (function (){var statearr_7482 = f__7035__auto__.call(null);
(statearr_7482[(6)] = c__7034__auto___7484);

return statearr_7482;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7036__auto__);
});})(c__7034__auto___7484,tc,fc))
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
var c__7034__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7034__auto__){
return (function (){
var f__7035__auto__ = (function (){var switch__6944__auto__ = ((function (c__7034__auto__){
return (function (state_7521){
var state_val_7522 = (state_7521[(1)]);
if((state_val_7522 === (7))){
var inst_7517 = (state_7521[(2)]);
var state_7521__$1 = state_7521;
var statearr_7523_7541 = state_7521__$1;
(statearr_7523_7541[(2)] = inst_7517);

(statearr_7523_7541[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7522 === (1))){
var inst_7501 = init;
var state_7521__$1 = (function (){var statearr_7524 = state_7521;
(statearr_7524[(7)] = inst_7501);

return statearr_7524;
})();
var statearr_7525_7542 = state_7521__$1;
(statearr_7525_7542[(2)] = null);

(statearr_7525_7542[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7522 === (4))){
var inst_7504 = (state_7521[(8)]);
var inst_7504__$1 = (state_7521[(2)]);
var inst_7505 = (inst_7504__$1 == null);
var state_7521__$1 = (function (){var statearr_7526 = state_7521;
(statearr_7526[(8)] = inst_7504__$1);

return statearr_7526;
})();
if(cljs.core.truth_(inst_7505)){
var statearr_7527_7543 = state_7521__$1;
(statearr_7527_7543[(1)] = (5));

} else {
var statearr_7528_7544 = state_7521__$1;
(statearr_7528_7544[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7522 === (6))){
var inst_7504 = (state_7521[(8)]);
var inst_7501 = (state_7521[(7)]);
var inst_7508 = (state_7521[(9)]);
var inst_7508__$1 = f.call(null,inst_7501,inst_7504);
var inst_7509 = cljs.core.reduced_QMARK_.call(null,inst_7508__$1);
var state_7521__$1 = (function (){var statearr_7529 = state_7521;
(statearr_7529[(9)] = inst_7508__$1);

return statearr_7529;
})();
if(inst_7509){
var statearr_7530_7545 = state_7521__$1;
(statearr_7530_7545[(1)] = (8));

} else {
var statearr_7531_7546 = state_7521__$1;
(statearr_7531_7546[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7522 === (3))){
var inst_7519 = (state_7521[(2)]);
var state_7521__$1 = state_7521;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_7521__$1,inst_7519);
} else {
if((state_val_7522 === (2))){
var state_7521__$1 = state_7521;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_7521__$1,(4),ch);
} else {
if((state_val_7522 === (9))){
var inst_7508 = (state_7521[(9)]);
var inst_7501 = inst_7508;
var state_7521__$1 = (function (){var statearr_7532 = state_7521;
(statearr_7532[(7)] = inst_7501);

return statearr_7532;
})();
var statearr_7533_7547 = state_7521__$1;
(statearr_7533_7547[(2)] = null);

(statearr_7533_7547[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7522 === (5))){
var inst_7501 = (state_7521[(7)]);
var state_7521__$1 = state_7521;
var statearr_7534_7548 = state_7521__$1;
(statearr_7534_7548[(2)] = inst_7501);

(statearr_7534_7548[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7522 === (10))){
var inst_7515 = (state_7521[(2)]);
var state_7521__$1 = state_7521;
var statearr_7535_7549 = state_7521__$1;
(statearr_7535_7549[(2)] = inst_7515);

(statearr_7535_7549[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7522 === (8))){
var inst_7508 = (state_7521[(9)]);
var inst_7511 = cljs.core.deref.call(null,inst_7508);
var state_7521__$1 = state_7521;
var statearr_7536_7550 = state_7521__$1;
(statearr_7536_7550[(2)] = inst_7511);

(statearr_7536_7550[(1)] = (10));


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
});})(c__7034__auto__))
;
return ((function (switch__6944__auto__,c__7034__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__6945__auto__ = null;
var cljs$core$async$reduce_$_state_machine__6945__auto____0 = (function (){
var statearr_7537 = [null,null,null,null,null,null,null,null,null,null];
(statearr_7537[(0)] = cljs$core$async$reduce_$_state_machine__6945__auto__);

(statearr_7537[(1)] = (1));

return statearr_7537;
});
var cljs$core$async$reduce_$_state_machine__6945__auto____1 = (function (state_7521){
while(true){
var ret_value__6946__auto__ = (function (){try{while(true){
var result__6947__auto__ = switch__6944__auto__.call(null,state_7521);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6947__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6947__auto__;
}
break;
}
}catch (e7538){if((e7538 instanceof Object)){
var ex__6948__auto__ = e7538;
var statearr_7539_7551 = state_7521;
(statearr_7539_7551[(5)] = ex__6948__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_7521);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e7538;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__7552 = state_7521;
state_7521 = G__7552;
continue;
} else {
return ret_value__6946__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__6945__auto__ = function(state_7521){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__6945__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__6945__auto____1.call(this,state_7521);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__6945__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__6945__auto____0;
cljs$core$async$reduce_$_state_machine__6945__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__6945__auto____1;
return cljs$core$async$reduce_$_state_machine__6945__auto__;
})()
;})(switch__6944__auto__,c__7034__auto__))
})();
var state__7036__auto__ = (function (){var statearr_7540 = f__7035__auto__.call(null);
(statearr_7540[(6)] = c__7034__auto__);

return statearr_7540;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7036__auto__);
});})(c__7034__auto__))
);

return c__7034__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__7034__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7034__auto__,f__$1){
return (function (){
var f__7035__auto__ = (function (){var switch__6944__auto__ = ((function (c__7034__auto__,f__$1){
return (function (state_7558){
var state_val_7559 = (state_7558[(1)]);
if((state_val_7559 === (1))){
var inst_7553 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_7558__$1 = state_7558;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_7558__$1,(2),inst_7553);
} else {
if((state_val_7559 === (2))){
var inst_7555 = (state_7558[(2)]);
var inst_7556 = f__$1.call(null,inst_7555);
var state_7558__$1 = state_7558;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_7558__$1,inst_7556);
} else {
return null;
}
}
});})(c__7034__auto__,f__$1))
;
return ((function (switch__6944__auto__,c__7034__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__6945__auto__ = null;
var cljs$core$async$transduce_$_state_machine__6945__auto____0 = (function (){
var statearr_7560 = [null,null,null,null,null,null,null];
(statearr_7560[(0)] = cljs$core$async$transduce_$_state_machine__6945__auto__);

(statearr_7560[(1)] = (1));

return statearr_7560;
});
var cljs$core$async$transduce_$_state_machine__6945__auto____1 = (function (state_7558){
while(true){
var ret_value__6946__auto__ = (function (){try{while(true){
var result__6947__auto__ = switch__6944__auto__.call(null,state_7558);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6947__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6947__auto__;
}
break;
}
}catch (e7561){if((e7561 instanceof Object)){
var ex__6948__auto__ = e7561;
var statearr_7562_7564 = state_7558;
(statearr_7562_7564[(5)] = ex__6948__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_7558);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e7561;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__7565 = state_7558;
state_7558 = G__7565;
continue;
} else {
return ret_value__6946__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__6945__auto__ = function(state_7558){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__6945__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__6945__auto____1.call(this,state_7558);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__6945__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__6945__auto____0;
cljs$core$async$transduce_$_state_machine__6945__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__6945__auto____1;
return cljs$core$async$transduce_$_state_machine__6945__auto__;
})()
;})(switch__6944__auto__,c__7034__auto__,f__$1))
})();
var state__7036__auto__ = (function (){var statearr_7563 = f__7035__auto__.call(null);
(statearr_7563[(6)] = c__7034__auto__);

return statearr_7563;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7036__auto__);
});})(c__7034__auto__,f__$1))
);

return c__7034__auto__;
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
var G__7567 = arguments.length;
switch (G__7567) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__7034__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7034__auto__){
return (function (){
var f__7035__auto__ = (function (){var switch__6944__auto__ = ((function (c__7034__auto__){
return (function (state_7592){
var state_val_7593 = (state_7592[(1)]);
if((state_val_7593 === (7))){
var inst_7574 = (state_7592[(2)]);
var state_7592__$1 = state_7592;
var statearr_7594_7615 = state_7592__$1;
(statearr_7594_7615[(2)] = inst_7574);

(statearr_7594_7615[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7593 === (1))){
var inst_7568 = cljs.core.seq.call(null,coll);
var inst_7569 = inst_7568;
var state_7592__$1 = (function (){var statearr_7595 = state_7592;
(statearr_7595[(7)] = inst_7569);

return statearr_7595;
})();
var statearr_7596_7616 = state_7592__$1;
(statearr_7596_7616[(2)] = null);

(statearr_7596_7616[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7593 === (4))){
var inst_7569 = (state_7592[(7)]);
var inst_7572 = cljs.core.first.call(null,inst_7569);
var state_7592__$1 = state_7592;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_7592__$1,(7),ch,inst_7572);
} else {
if((state_val_7593 === (13))){
var inst_7586 = (state_7592[(2)]);
var state_7592__$1 = state_7592;
var statearr_7597_7617 = state_7592__$1;
(statearr_7597_7617[(2)] = inst_7586);

(statearr_7597_7617[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7593 === (6))){
var inst_7577 = (state_7592[(2)]);
var state_7592__$1 = state_7592;
if(cljs.core.truth_(inst_7577)){
var statearr_7598_7618 = state_7592__$1;
(statearr_7598_7618[(1)] = (8));

} else {
var statearr_7599_7619 = state_7592__$1;
(statearr_7599_7619[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7593 === (3))){
var inst_7590 = (state_7592[(2)]);
var state_7592__$1 = state_7592;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_7592__$1,inst_7590);
} else {
if((state_val_7593 === (12))){
var state_7592__$1 = state_7592;
var statearr_7600_7620 = state_7592__$1;
(statearr_7600_7620[(2)] = null);

(statearr_7600_7620[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7593 === (2))){
var inst_7569 = (state_7592[(7)]);
var state_7592__$1 = state_7592;
if(cljs.core.truth_(inst_7569)){
var statearr_7601_7621 = state_7592__$1;
(statearr_7601_7621[(1)] = (4));

} else {
var statearr_7602_7622 = state_7592__$1;
(statearr_7602_7622[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7593 === (11))){
var inst_7583 = cljs.core.async.close_BANG_.call(null,ch);
var state_7592__$1 = state_7592;
var statearr_7603_7623 = state_7592__$1;
(statearr_7603_7623[(2)] = inst_7583);

(statearr_7603_7623[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7593 === (9))){
var state_7592__$1 = state_7592;
if(cljs.core.truth_(close_QMARK_)){
var statearr_7604_7624 = state_7592__$1;
(statearr_7604_7624[(1)] = (11));

} else {
var statearr_7605_7625 = state_7592__$1;
(statearr_7605_7625[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7593 === (5))){
var inst_7569 = (state_7592[(7)]);
var state_7592__$1 = state_7592;
var statearr_7606_7626 = state_7592__$1;
(statearr_7606_7626[(2)] = inst_7569);

(statearr_7606_7626[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7593 === (10))){
var inst_7588 = (state_7592[(2)]);
var state_7592__$1 = state_7592;
var statearr_7607_7627 = state_7592__$1;
(statearr_7607_7627[(2)] = inst_7588);

(statearr_7607_7627[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7593 === (8))){
var inst_7569 = (state_7592[(7)]);
var inst_7579 = cljs.core.next.call(null,inst_7569);
var inst_7569__$1 = inst_7579;
var state_7592__$1 = (function (){var statearr_7608 = state_7592;
(statearr_7608[(7)] = inst_7569__$1);

return statearr_7608;
})();
var statearr_7609_7628 = state_7592__$1;
(statearr_7609_7628[(2)] = null);

(statearr_7609_7628[(1)] = (2));


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
});})(c__7034__auto__))
;
return ((function (switch__6944__auto__,c__7034__auto__){
return (function() {
var cljs$core$async$state_machine__6945__auto__ = null;
var cljs$core$async$state_machine__6945__auto____0 = (function (){
var statearr_7610 = [null,null,null,null,null,null,null,null];
(statearr_7610[(0)] = cljs$core$async$state_machine__6945__auto__);

(statearr_7610[(1)] = (1));

return statearr_7610;
});
var cljs$core$async$state_machine__6945__auto____1 = (function (state_7592){
while(true){
var ret_value__6946__auto__ = (function (){try{while(true){
var result__6947__auto__ = switch__6944__auto__.call(null,state_7592);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6947__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6947__auto__;
}
break;
}
}catch (e7611){if((e7611 instanceof Object)){
var ex__6948__auto__ = e7611;
var statearr_7612_7629 = state_7592;
(statearr_7612_7629[(5)] = ex__6948__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_7592);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e7611;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__7630 = state_7592;
state_7592 = G__7630;
continue;
} else {
return ret_value__6946__auto__;
}
break;
}
});
cljs$core$async$state_machine__6945__auto__ = function(state_7592){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6945__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6945__auto____1.call(this,state_7592);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__6945__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6945__auto____0;
cljs$core$async$state_machine__6945__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6945__auto____1;
return cljs$core$async$state_machine__6945__auto__;
})()
;})(switch__6944__auto__,c__7034__auto__))
})();
var state__7036__auto__ = (function (){var statearr_7613 = f__7035__auto__.call(null);
(statearr_7613[(6)] = c__7034__auto__);

return statearr_7613;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7036__auto__);
});})(c__7034__auto__))
);

return c__7034__auto__;
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
if(((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4211__auto__ = (((_ == null))?null:_);
var m__4212__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,_);
} else {
var m__4212__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,_);
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
if(((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__4212__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,ch);
} else {
var m__4212__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m);
} else {
var m__4212__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m);
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
if(typeof cljs.core.async.t_cljs$core$async7631 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async7631 = (function (ch,cs,meta7632){
this.ch = ch;
this.cs = cs;
this.meta7632 = meta7632;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async7631.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_7633,meta7632__$1){
var self__ = this;
var _7633__$1 = this;
return (new cljs.core.async.t_cljs$core$async7631(self__.ch,self__.cs,meta7632__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async7631.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_7633){
var self__ = this;
var _7633__$1 = this;
return self__.meta7632;
});})(cs))
;

cljs.core.async.t_cljs$core$async7631.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async7631.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async7631.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async7631.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async7631.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async7631.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async7631.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta7632","meta7632",633357016,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async7631.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async7631.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async7631";

cljs.core.async.t_cljs$core$async7631.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async7631");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async7631.
 */
cljs.core.async.__GT_t_cljs$core$async7631 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async7631(ch__$1,cs__$1,meta7632){
return (new cljs.core.async.t_cljs$core$async7631(ch__$1,cs__$1,meta7632));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async7631(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__7034__auto___7853 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7034__auto___7853,cs,m,dchan,dctr,done){
return (function (){
var f__7035__auto__ = (function (){var switch__6944__auto__ = ((function (c__7034__auto___7853,cs,m,dchan,dctr,done){
return (function (state_7768){
var state_val_7769 = (state_7768[(1)]);
if((state_val_7769 === (7))){
var inst_7764 = (state_7768[(2)]);
var state_7768__$1 = state_7768;
var statearr_7770_7854 = state_7768__$1;
(statearr_7770_7854[(2)] = inst_7764);

(statearr_7770_7854[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7769 === (20))){
var inst_7667 = (state_7768[(7)]);
var inst_7679 = cljs.core.first.call(null,inst_7667);
var inst_7680 = cljs.core.nth.call(null,inst_7679,(0),null);
var inst_7681 = cljs.core.nth.call(null,inst_7679,(1),null);
var state_7768__$1 = (function (){var statearr_7771 = state_7768;
(statearr_7771[(8)] = inst_7680);

return statearr_7771;
})();
if(cljs.core.truth_(inst_7681)){
var statearr_7772_7855 = state_7768__$1;
(statearr_7772_7855[(1)] = (22));

} else {
var statearr_7773_7856 = state_7768__$1;
(statearr_7773_7856[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7769 === (27))){
var inst_7716 = (state_7768[(9)]);
var inst_7636 = (state_7768[(10)]);
var inst_7709 = (state_7768[(11)]);
var inst_7711 = (state_7768[(12)]);
var inst_7716__$1 = cljs.core._nth.call(null,inst_7709,inst_7711);
var inst_7717 = cljs.core.async.put_BANG_.call(null,inst_7716__$1,inst_7636,done);
var state_7768__$1 = (function (){var statearr_7774 = state_7768;
(statearr_7774[(9)] = inst_7716__$1);

return statearr_7774;
})();
if(cljs.core.truth_(inst_7717)){
var statearr_7775_7857 = state_7768__$1;
(statearr_7775_7857[(1)] = (30));

} else {
var statearr_7776_7858 = state_7768__$1;
(statearr_7776_7858[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7769 === (1))){
var state_7768__$1 = state_7768;
var statearr_7777_7859 = state_7768__$1;
(statearr_7777_7859[(2)] = null);

(statearr_7777_7859[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7769 === (24))){
var inst_7667 = (state_7768[(7)]);
var inst_7686 = (state_7768[(2)]);
var inst_7687 = cljs.core.next.call(null,inst_7667);
var inst_7645 = inst_7687;
var inst_7646 = null;
var inst_7647 = (0);
var inst_7648 = (0);
var state_7768__$1 = (function (){var statearr_7778 = state_7768;
(statearr_7778[(13)] = inst_7686);

(statearr_7778[(14)] = inst_7646);

(statearr_7778[(15)] = inst_7647);

(statearr_7778[(16)] = inst_7648);

(statearr_7778[(17)] = inst_7645);

return statearr_7778;
})();
var statearr_7779_7860 = state_7768__$1;
(statearr_7779_7860[(2)] = null);

(statearr_7779_7860[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7769 === (39))){
var state_7768__$1 = state_7768;
var statearr_7783_7861 = state_7768__$1;
(statearr_7783_7861[(2)] = null);

(statearr_7783_7861[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7769 === (4))){
var inst_7636 = (state_7768[(10)]);
var inst_7636__$1 = (state_7768[(2)]);
var inst_7637 = (inst_7636__$1 == null);
var state_7768__$1 = (function (){var statearr_7784 = state_7768;
(statearr_7784[(10)] = inst_7636__$1);

return statearr_7784;
})();
if(cljs.core.truth_(inst_7637)){
var statearr_7785_7862 = state_7768__$1;
(statearr_7785_7862[(1)] = (5));

} else {
var statearr_7786_7863 = state_7768__$1;
(statearr_7786_7863[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7769 === (15))){
var inst_7646 = (state_7768[(14)]);
var inst_7647 = (state_7768[(15)]);
var inst_7648 = (state_7768[(16)]);
var inst_7645 = (state_7768[(17)]);
var inst_7663 = (state_7768[(2)]);
var inst_7664 = (inst_7648 + (1));
var tmp7780 = inst_7646;
var tmp7781 = inst_7647;
var tmp7782 = inst_7645;
var inst_7645__$1 = tmp7782;
var inst_7646__$1 = tmp7780;
var inst_7647__$1 = tmp7781;
var inst_7648__$1 = inst_7664;
var state_7768__$1 = (function (){var statearr_7787 = state_7768;
(statearr_7787[(14)] = inst_7646__$1);

(statearr_7787[(15)] = inst_7647__$1);

(statearr_7787[(18)] = inst_7663);

(statearr_7787[(16)] = inst_7648__$1);

(statearr_7787[(17)] = inst_7645__$1);

return statearr_7787;
})();
var statearr_7788_7864 = state_7768__$1;
(statearr_7788_7864[(2)] = null);

(statearr_7788_7864[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7769 === (21))){
var inst_7690 = (state_7768[(2)]);
var state_7768__$1 = state_7768;
var statearr_7792_7865 = state_7768__$1;
(statearr_7792_7865[(2)] = inst_7690);

(statearr_7792_7865[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7769 === (31))){
var inst_7716 = (state_7768[(9)]);
var inst_7720 = done.call(null,null);
var inst_7721 = cljs.core.async.untap_STAR_.call(null,m,inst_7716);
var state_7768__$1 = (function (){var statearr_7793 = state_7768;
(statearr_7793[(19)] = inst_7720);

return statearr_7793;
})();
var statearr_7794_7866 = state_7768__$1;
(statearr_7794_7866[(2)] = inst_7721);

(statearr_7794_7866[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7769 === (32))){
var inst_7710 = (state_7768[(20)]);
var inst_7709 = (state_7768[(11)]);
var inst_7708 = (state_7768[(21)]);
var inst_7711 = (state_7768[(12)]);
var inst_7723 = (state_7768[(2)]);
var inst_7724 = (inst_7711 + (1));
var tmp7789 = inst_7710;
var tmp7790 = inst_7709;
var tmp7791 = inst_7708;
var inst_7708__$1 = tmp7791;
var inst_7709__$1 = tmp7790;
var inst_7710__$1 = tmp7789;
var inst_7711__$1 = inst_7724;
var state_7768__$1 = (function (){var statearr_7795 = state_7768;
(statearr_7795[(20)] = inst_7710__$1);

(statearr_7795[(11)] = inst_7709__$1);

(statearr_7795[(21)] = inst_7708__$1);

(statearr_7795[(22)] = inst_7723);

(statearr_7795[(12)] = inst_7711__$1);

return statearr_7795;
})();
var statearr_7796_7867 = state_7768__$1;
(statearr_7796_7867[(2)] = null);

(statearr_7796_7867[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7769 === (40))){
var inst_7736 = (state_7768[(23)]);
var inst_7740 = done.call(null,null);
var inst_7741 = cljs.core.async.untap_STAR_.call(null,m,inst_7736);
var state_7768__$1 = (function (){var statearr_7797 = state_7768;
(statearr_7797[(24)] = inst_7740);

return statearr_7797;
})();
var statearr_7798_7868 = state_7768__$1;
(statearr_7798_7868[(2)] = inst_7741);

(statearr_7798_7868[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7769 === (33))){
var inst_7727 = (state_7768[(25)]);
var inst_7729 = cljs.core.chunked_seq_QMARK_.call(null,inst_7727);
var state_7768__$1 = state_7768;
if(inst_7729){
var statearr_7799_7869 = state_7768__$1;
(statearr_7799_7869[(1)] = (36));

} else {
var statearr_7800_7870 = state_7768__$1;
(statearr_7800_7870[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7769 === (13))){
var inst_7657 = (state_7768[(26)]);
var inst_7660 = cljs.core.async.close_BANG_.call(null,inst_7657);
var state_7768__$1 = state_7768;
var statearr_7801_7871 = state_7768__$1;
(statearr_7801_7871[(2)] = inst_7660);

(statearr_7801_7871[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7769 === (22))){
var inst_7680 = (state_7768[(8)]);
var inst_7683 = cljs.core.async.close_BANG_.call(null,inst_7680);
var state_7768__$1 = state_7768;
var statearr_7802_7872 = state_7768__$1;
(statearr_7802_7872[(2)] = inst_7683);

(statearr_7802_7872[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7769 === (36))){
var inst_7727 = (state_7768[(25)]);
var inst_7731 = cljs.core.chunk_first.call(null,inst_7727);
var inst_7732 = cljs.core.chunk_rest.call(null,inst_7727);
var inst_7733 = cljs.core.count.call(null,inst_7731);
var inst_7708 = inst_7732;
var inst_7709 = inst_7731;
var inst_7710 = inst_7733;
var inst_7711 = (0);
var state_7768__$1 = (function (){var statearr_7803 = state_7768;
(statearr_7803[(20)] = inst_7710);

(statearr_7803[(11)] = inst_7709);

(statearr_7803[(21)] = inst_7708);

(statearr_7803[(12)] = inst_7711);

return statearr_7803;
})();
var statearr_7804_7873 = state_7768__$1;
(statearr_7804_7873[(2)] = null);

(statearr_7804_7873[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7769 === (41))){
var inst_7727 = (state_7768[(25)]);
var inst_7743 = (state_7768[(2)]);
var inst_7744 = cljs.core.next.call(null,inst_7727);
var inst_7708 = inst_7744;
var inst_7709 = null;
var inst_7710 = (0);
var inst_7711 = (0);
var state_7768__$1 = (function (){var statearr_7805 = state_7768;
(statearr_7805[(27)] = inst_7743);

(statearr_7805[(20)] = inst_7710);

(statearr_7805[(11)] = inst_7709);

(statearr_7805[(21)] = inst_7708);

(statearr_7805[(12)] = inst_7711);

return statearr_7805;
})();
var statearr_7806_7874 = state_7768__$1;
(statearr_7806_7874[(2)] = null);

(statearr_7806_7874[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7769 === (43))){
var state_7768__$1 = state_7768;
var statearr_7807_7875 = state_7768__$1;
(statearr_7807_7875[(2)] = null);

(statearr_7807_7875[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7769 === (29))){
var inst_7752 = (state_7768[(2)]);
var state_7768__$1 = state_7768;
var statearr_7808_7876 = state_7768__$1;
(statearr_7808_7876[(2)] = inst_7752);

(statearr_7808_7876[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7769 === (44))){
var inst_7761 = (state_7768[(2)]);
var state_7768__$1 = (function (){var statearr_7809 = state_7768;
(statearr_7809[(28)] = inst_7761);

return statearr_7809;
})();
var statearr_7810_7877 = state_7768__$1;
(statearr_7810_7877[(2)] = null);

(statearr_7810_7877[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7769 === (6))){
var inst_7700 = (state_7768[(29)]);
var inst_7699 = cljs.core.deref.call(null,cs);
var inst_7700__$1 = cljs.core.keys.call(null,inst_7699);
var inst_7701 = cljs.core.count.call(null,inst_7700__$1);
var inst_7702 = cljs.core.reset_BANG_.call(null,dctr,inst_7701);
var inst_7707 = cljs.core.seq.call(null,inst_7700__$1);
var inst_7708 = inst_7707;
var inst_7709 = null;
var inst_7710 = (0);
var inst_7711 = (0);
var state_7768__$1 = (function (){var statearr_7811 = state_7768;
(statearr_7811[(30)] = inst_7702);

(statearr_7811[(20)] = inst_7710);

(statearr_7811[(29)] = inst_7700__$1);

(statearr_7811[(11)] = inst_7709);

(statearr_7811[(21)] = inst_7708);

(statearr_7811[(12)] = inst_7711);

return statearr_7811;
})();
var statearr_7812_7878 = state_7768__$1;
(statearr_7812_7878[(2)] = null);

(statearr_7812_7878[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7769 === (28))){
var inst_7727 = (state_7768[(25)]);
var inst_7708 = (state_7768[(21)]);
var inst_7727__$1 = cljs.core.seq.call(null,inst_7708);
var state_7768__$1 = (function (){var statearr_7813 = state_7768;
(statearr_7813[(25)] = inst_7727__$1);

return statearr_7813;
})();
if(inst_7727__$1){
var statearr_7814_7879 = state_7768__$1;
(statearr_7814_7879[(1)] = (33));

} else {
var statearr_7815_7880 = state_7768__$1;
(statearr_7815_7880[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7769 === (25))){
var inst_7710 = (state_7768[(20)]);
var inst_7711 = (state_7768[(12)]);
var inst_7713 = (inst_7711 < inst_7710);
var inst_7714 = inst_7713;
var state_7768__$1 = state_7768;
if(cljs.core.truth_(inst_7714)){
var statearr_7816_7881 = state_7768__$1;
(statearr_7816_7881[(1)] = (27));

} else {
var statearr_7817_7882 = state_7768__$1;
(statearr_7817_7882[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7769 === (34))){
var state_7768__$1 = state_7768;
var statearr_7818_7883 = state_7768__$1;
(statearr_7818_7883[(2)] = null);

(statearr_7818_7883[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7769 === (17))){
var state_7768__$1 = state_7768;
var statearr_7819_7884 = state_7768__$1;
(statearr_7819_7884[(2)] = null);

(statearr_7819_7884[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7769 === (3))){
var inst_7766 = (state_7768[(2)]);
var state_7768__$1 = state_7768;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_7768__$1,inst_7766);
} else {
if((state_val_7769 === (12))){
var inst_7695 = (state_7768[(2)]);
var state_7768__$1 = state_7768;
var statearr_7820_7885 = state_7768__$1;
(statearr_7820_7885[(2)] = inst_7695);

(statearr_7820_7885[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7769 === (2))){
var state_7768__$1 = state_7768;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_7768__$1,(4),ch);
} else {
if((state_val_7769 === (23))){
var state_7768__$1 = state_7768;
var statearr_7821_7886 = state_7768__$1;
(statearr_7821_7886[(2)] = null);

(statearr_7821_7886[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7769 === (35))){
var inst_7750 = (state_7768[(2)]);
var state_7768__$1 = state_7768;
var statearr_7822_7887 = state_7768__$1;
(statearr_7822_7887[(2)] = inst_7750);

(statearr_7822_7887[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7769 === (19))){
var inst_7667 = (state_7768[(7)]);
var inst_7671 = cljs.core.chunk_first.call(null,inst_7667);
var inst_7672 = cljs.core.chunk_rest.call(null,inst_7667);
var inst_7673 = cljs.core.count.call(null,inst_7671);
var inst_7645 = inst_7672;
var inst_7646 = inst_7671;
var inst_7647 = inst_7673;
var inst_7648 = (0);
var state_7768__$1 = (function (){var statearr_7823 = state_7768;
(statearr_7823[(14)] = inst_7646);

(statearr_7823[(15)] = inst_7647);

(statearr_7823[(16)] = inst_7648);

(statearr_7823[(17)] = inst_7645);

return statearr_7823;
})();
var statearr_7824_7888 = state_7768__$1;
(statearr_7824_7888[(2)] = null);

(statearr_7824_7888[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7769 === (11))){
var inst_7667 = (state_7768[(7)]);
var inst_7645 = (state_7768[(17)]);
var inst_7667__$1 = cljs.core.seq.call(null,inst_7645);
var state_7768__$1 = (function (){var statearr_7825 = state_7768;
(statearr_7825[(7)] = inst_7667__$1);

return statearr_7825;
})();
if(inst_7667__$1){
var statearr_7826_7889 = state_7768__$1;
(statearr_7826_7889[(1)] = (16));

} else {
var statearr_7827_7890 = state_7768__$1;
(statearr_7827_7890[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7769 === (9))){
var inst_7697 = (state_7768[(2)]);
var state_7768__$1 = state_7768;
var statearr_7828_7891 = state_7768__$1;
(statearr_7828_7891[(2)] = inst_7697);

(statearr_7828_7891[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7769 === (5))){
var inst_7643 = cljs.core.deref.call(null,cs);
var inst_7644 = cljs.core.seq.call(null,inst_7643);
var inst_7645 = inst_7644;
var inst_7646 = null;
var inst_7647 = (0);
var inst_7648 = (0);
var state_7768__$1 = (function (){var statearr_7829 = state_7768;
(statearr_7829[(14)] = inst_7646);

(statearr_7829[(15)] = inst_7647);

(statearr_7829[(16)] = inst_7648);

(statearr_7829[(17)] = inst_7645);

return statearr_7829;
})();
var statearr_7830_7892 = state_7768__$1;
(statearr_7830_7892[(2)] = null);

(statearr_7830_7892[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7769 === (14))){
var state_7768__$1 = state_7768;
var statearr_7831_7893 = state_7768__$1;
(statearr_7831_7893[(2)] = null);

(statearr_7831_7893[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7769 === (45))){
var inst_7758 = (state_7768[(2)]);
var state_7768__$1 = state_7768;
var statearr_7832_7894 = state_7768__$1;
(statearr_7832_7894[(2)] = inst_7758);

(statearr_7832_7894[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7769 === (26))){
var inst_7700 = (state_7768[(29)]);
var inst_7754 = (state_7768[(2)]);
var inst_7755 = cljs.core.seq.call(null,inst_7700);
var state_7768__$1 = (function (){var statearr_7833 = state_7768;
(statearr_7833[(31)] = inst_7754);

return statearr_7833;
})();
if(inst_7755){
var statearr_7834_7895 = state_7768__$1;
(statearr_7834_7895[(1)] = (42));

} else {
var statearr_7835_7896 = state_7768__$1;
(statearr_7835_7896[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7769 === (16))){
var inst_7667 = (state_7768[(7)]);
var inst_7669 = cljs.core.chunked_seq_QMARK_.call(null,inst_7667);
var state_7768__$1 = state_7768;
if(inst_7669){
var statearr_7836_7897 = state_7768__$1;
(statearr_7836_7897[(1)] = (19));

} else {
var statearr_7837_7898 = state_7768__$1;
(statearr_7837_7898[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7769 === (38))){
var inst_7747 = (state_7768[(2)]);
var state_7768__$1 = state_7768;
var statearr_7838_7899 = state_7768__$1;
(statearr_7838_7899[(2)] = inst_7747);

(statearr_7838_7899[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7769 === (30))){
var state_7768__$1 = state_7768;
var statearr_7839_7900 = state_7768__$1;
(statearr_7839_7900[(2)] = null);

(statearr_7839_7900[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7769 === (10))){
var inst_7646 = (state_7768[(14)]);
var inst_7648 = (state_7768[(16)]);
var inst_7656 = cljs.core._nth.call(null,inst_7646,inst_7648);
var inst_7657 = cljs.core.nth.call(null,inst_7656,(0),null);
var inst_7658 = cljs.core.nth.call(null,inst_7656,(1),null);
var state_7768__$1 = (function (){var statearr_7840 = state_7768;
(statearr_7840[(26)] = inst_7657);

return statearr_7840;
})();
if(cljs.core.truth_(inst_7658)){
var statearr_7841_7901 = state_7768__$1;
(statearr_7841_7901[(1)] = (13));

} else {
var statearr_7842_7902 = state_7768__$1;
(statearr_7842_7902[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7769 === (18))){
var inst_7693 = (state_7768[(2)]);
var state_7768__$1 = state_7768;
var statearr_7843_7903 = state_7768__$1;
(statearr_7843_7903[(2)] = inst_7693);

(statearr_7843_7903[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7769 === (42))){
var state_7768__$1 = state_7768;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_7768__$1,(45),dchan);
} else {
if((state_val_7769 === (37))){
var inst_7736 = (state_7768[(23)]);
var inst_7636 = (state_7768[(10)]);
var inst_7727 = (state_7768[(25)]);
var inst_7736__$1 = cljs.core.first.call(null,inst_7727);
var inst_7737 = cljs.core.async.put_BANG_.call(null,inst_7736__$1,inst_7636,done);
var state_7768__$1 = (function (){var statearr_7844 = state_7768;
(statearr_7844[(23)] = inst_7736__$1);

return statearr_7844;
})();
if(cljs.core.truth_(inst_7737)){
var statearr_7845_7904 = state_7768__$1;
(statearr_7845_7904[(1)] = (39));

} else {
var statearr_7846_7905 = state_7768__$1;
(statearr_7846_7905[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7769 === (8))){
var inst_7647 = (state_7768[(15)]);
var inst_7648 = (state_7768[(16)]);
var inst_7650 = (inst_7648 < inst_7647);
var inst_7651 = inst_7650;
var state_7768__$1 = state_7768;
if(cljs.core.truth_(inst_7651)){
var statearr_7847_7906 = state_7768__$1;
(statearr_7847_7906[(1)] = (10));

} else {
var statearr_7848_7907 = state_7768__$1;
(statearr_7848_7907[(1)] = (11));

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
});})(c__7034__auto___7853,cs,m,dchan,dctr,done))
;
return ((function (switch__6944__auto__,c__7034__auto___7853,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__6945__auto__ = null;
var cljs$core$async$mult_$_state_machine__6945__auto____0 = (function (){
var statearr_7849 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_7849[(0)] = cljs$core$async$mult_$_state_machine__6945__auto__);

(statearr_7849[(1)] = (1));

return statearr_7849;
});
var cljs$core$async$mult_$_state_machine__6945__auto____1 = (function (state_7768){
while(true){
var ret_value__6946__auto__ = (function (){try{while(true){
var result__6947__auto__ = switch__6944__auto__.call(null,state_7768);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6947__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6947__auto__;
}
break;
}
}catch (e7850){if((e7850 instanceof Object)){
var ex__6948__auto__ = e7850;
var statearr_7851_7908 = state_7768;
(statearr_7851_7908[(5)] = ex__6948__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_7768);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e7850;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__7909 = state_7768;
state_7768 = G__7909;
continue;
} else {
return ret_value__6946__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__6945__auto__ = function(state_7768){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__6945__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__6945__auto____1.call(this,state_7768);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__6945__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__6945__auto____0;
cljs$core$async$mult_$_state_machine__6945__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__6945__auto____1;
return cljs$core$async$mult_$_state_machine__6945__auto__;
})()
;})(switch__6944__auto__,c__7034__auto___7853,cs,m,dchan,dctr,done))
})();
var state__7036__auto__ = (function (){var statearr_7852 = f__7035__auto__.call(null);
(statearr_7852[(6)] = c__7034__auto___7853);

return statearr_7852;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7036__auto__);
});})(c__7034__auto___7853,cs,m,dchan,dctr,done))
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
var G__7911 = arguments.length;
switch (G__7911) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
if(((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,ch);
} else {
var m__4212__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,ch);
} else {
var m__4212__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m);
} else {
var m__4212__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,state_map);
} else {
var m__4212__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,mode);
} else {
var m__4212__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4502__auto__ = [];
var len__4499__auto___7923 = arguments.length;
var i__4500__auto___7924 = (0);
while(true){
if((i__4500__auto___7924 < len__4499__auto___7923)){
args__4502__auto__.push((arguments[i__4500__auto___7924]));

var G__7925 = (i__4500__auto___7924 + (1));
i__4500__auto___7924 = G__7925;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((3) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4503__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__7917){
var map__7918 = p__7917;
var map__7918__$1 = ((((!((map__7918 == null)))?(((((map__7918.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7918.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7918):map__7918);
var opts = map__7918__$1;
var statearr_7920_7926 = state;
(statearr_7920_7926[(1)] = cont_block);


var temp__5457__auto__ = cljs.core.async.do_alts.call(null,((function (map__7918,map__7918__$1,opts){
return (function (val){
var statearr_7921_7927 = state;
(statearr_7921_7927[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__7918,map__7918__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5457__auto__)){
var cb = temp__5457__auto__;
var statearr_7922_7928 = state;
(statearr_7922_7928[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq7913){
var G__7914 = cljs.core.first.call(null,seq7913);
var seq7913__$1 = cljs.core.next.call(null,seq7913);
var G__7915 = cljs.core.first.call(null,seq7913__$1);
var seq7913__$2 = cljs.core.next.call(null,seq7913__$1);
var G__7916 = cljs.core.first.call(null,seq7913__$2);
var seq7913__$3 = cljs.core.next.call(null,seq7913__$2);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__7914,G__7915,G__7916,seq7913__$3);
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
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,((((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos)))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async7929 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async7929 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta7930){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta7930 = meta7930;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async7929.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_7931,meta7930__$1){
var self__ = this;
var _7931__$1 = this;
return (new cljs.core.async.t_cljs$core$async7929(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta7930__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async7929.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_7931){
var self__ = this;
var _7931__$1 = this;
return self__.meta7930;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async7929.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async7929.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async7929.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async7929.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async7929.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async7929.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async7929.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async7929.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async7929.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta7930","meta7930",513229608,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async7929.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async7929.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async7929";

cljs.core.async.t_cljs$core$async7929.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async7929");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async7929.
 */
cljs.core.async.__GT_t_cljs$core$async7929 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async7929(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta7930){
return (new cljs.core.async.t_cljs$core$async7929(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta7930));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async7929(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__7034__auto___8093 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7034__auto___8093,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__7035__auto__ = (function (){var switch__6944__auto__ = ((function (c__7034__auto___8093,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_8033){
var state_val_8034 = (state_8033[(1)]);
if((state_val_8034 === (7))){
var inst_7948 = (state_8033[(2)]);
var state_8033__$1 = state_8033;
var statearr_8035_8094 = state_8033__$1;
(statearr_8035_8094[(2)] = inst_7948);

(statearr_8035_8094[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8034 === (20))){
var inst_7960 = (state_8033[(7)]);
var state_8033__$1 = state_8033;
var statearr_8036_8095 = state_8033__$1;
(statearr_8036_8095[(2)] = inst_7960);

(statearr_8036_8095[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8034 === (27))){
var state_8033__$1 = state_8033;
var statearr_8037_8096 = state_8033__$1;
(statearr_8037_8096[(2)] = null);

(statearr_8037_8096[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8034 === (1))){
var inst_7935 = (state_8033[(8)]);
var inst_7935__$1 = calc_state.call(null);
var inst_7937 = (inst_7935__$1 == null);
var inst_7938 = cljs.core.not.call(null,inst_7937);
var state_8033__$1 = (function (){var statearr_8038 = state_8033;
(statearr_8038[(8)] = inst_7935__$1);

return statearr_8038;
})();
if(inst_7938){
var statearr_8039_8097 = state_8033__$1;
(statearr_8039_8097[(1)] = (2));

} else {
var statearr_8040_8098 = state_8033__$1;
(statearr_8040_8098[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8034 === (24))){
var inst_7993 = (state_8033[(9)]);
var inst_7984 = (state_8033[(10)]);
var inst_8007 = (state_8033[(11)]);
var inst_8007__$1 = inst_7984.call(null,inst_7993);
var state_8033__$1 = (function (){var statearr_8041 = state_8033;
(statearr_8041[(11)] = inst_8007__$1);

return statearr_8041;
})();
if(cljs.core.truth_(inst_8007__$1)){
var statearr_8042_8099 = state_8033__$1;
(statearr_8042_8099[(1)] = (29));

} else {
var statearr_8043_8100 = state_8033__$1;
(statearr_8043_8100[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8034 === (4))){
var inst_7951 = (state_8033[(2)]);
var state_8033__$1 = state_8033;
if(cljs.core.truth_(inst_7951)){
var statearr_8044_8101 = state_8033__$1;
(statearr_8044_8101[(1)] = (8));

} else {
var statearr_8045_8102 = state_8033__$1;
(statearr_8045_8102[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8034 === (15))){
var inst_7978 = (state_8033[(2)]);
var state_8033__$1 = state_8033;
if(cljs.core.truth_(inst_7978)){
var statearr_8046_8103 = state_8033__$1;
(statearr_8046_8103[(1)] = (19));

} else {
var statearr_8047_8104 = state_8033__$1;
(statearr_8047_8104[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8034 === (21))){
var inst_7983 = (state_8033[(12)]);
var inst_7983__$1 = (state_8033[(2)]);
var inst_7984 = cljs.core.get.call(null,inst_7983__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_7985 = cljs.core.get.call(null,inst_7983__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_7986 = cljs.core.get.call(null,inst_7983__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_8033__$1 = (function (){var statearr_8048 = state_8033;
(statearr_8048[(10)] = inst_7984);

(statearr_8048[(12)] = inst_7983__$1);

(statearr_8048[(13)] = inst_7985);

return statearr_8048;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_8033__$1,(22),inst_7986);
} else {
if((state_val_8034 === (31))){
var inst_8015 = (state_8033[(2)]);
var state_8033__$1 = state_8033;
if(cljs.core.truth_(inst_8015)){
var statearr_8049_8105 = state_8033__$1;
(statearr_8049_8105[(1)] = (32));

} else {
var statearr_8050_8106 = state_8033__$1;
(statearr_8050_8106[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8034 === (32))){
var inst_7992 = (state_8033[(14)]);
var state_8033__$1 = state_8033;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_8033__$1,(35),out,inst_7992);
} else {
if((state_val_8034 === (33))){
var inst_7983 = (state_8033[(12)]);
var inst_7960 = inst_7983;
var state_8033__$1 = (function (){var statearr_8051 = state_8033;
(statearr_8051[(7)] = inst_7960);

return statearr_8051;
})();
var statearr_8052_8107 = state_8033__$1;
(statearr_8052_8107[(2)] = null);

(statearr_8052_8107[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8034 === (13))){
var inst_7960 = (state_8033[(7)]);
var inst_7967 = inst_7960.cljs$lang$protocol_mask$partition0$;
var inst_7968 = (inst_7967 & (64));
var inst_7969 = inst_7960.cljs$core$ISeq$;
var inst_7970 = (cljs.core.PROTOCOL_SENTINEL === inst_7969);
var inst_7971 = ((inst_7968) || (inst_7970));
var state_8033__$1 = state_8033;
if(cljs.core.truth_(inst_7971)){
var statearr_8053_8108 = state_8033__$1;
(statearr_8053_8108[(1)] = (16));

} else {
var statearr_8054_8109 = state_8033__$1;
(statearr_8054_8109[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8034 === (22))){
var inst_7993 = (state_8033[(9)]);
var inst_7992 = (state_8033[(14)]);
var inst_7991 = (state_8033[(2)]);
var inst_7992__$1 = cljs.core.nth.call(null,inst_7991,(0),null);
var inst_7993__$1 = cljs.core.nth.call(null,inst_7991,(1),null);
var inst_7994 = (inst_7992__$1 == null);
var inst_7995 = cljs.core._EQ_.call(null,inst_7993__$1,change);
var inst_7996 = ((inst_7994) || (inst_7995));
var state_8033__$1 = (function (){var statearr_8055 = state_8033;
(statearr_8055[(9)] = inst_7993__$1);

(statearr_8055[(14)] = inst_7992__$1);

return statearr_8055;
})();
if(cljs.core.truth_(inst_7996)){
var statearr_8056_8110 = state_8033__$1;
(statearr_8056_8110[(1)] = (23));

} else {
var statearr_8057_8111 = state_8033__$1;
(statearr_8057_8111[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8034 === (36))){
var inst_7983 = (state_8033[(12)]);
var inst_7960 = inst_7983;
var state_8033__$1 = (function (){var statearr_8058 = state_8033;
(statearr_8058[(7)] = inst_7960);

return statearr_8058;
})();
var statearr_8059_8112 = state_8033__$1;
(statearr_8059_8112[(2)] = null);

(statearr_8059_8112[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8034 === (29))){
var inst_8007 = (state_8033[(11)]);
var state_8033__$1 = state_8033;
var statearr_8060_8113 = state_8033__$1;
(statearr_8060_8113[(2)] = inst_8007);

(statearr_8060_8113[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8034 === (6))){
var state_8033__$1 = state_8033;
var statearr_8061_8114 = state_8033__$1;
(statearr_8061_8114[(2)] = false);

(statearr_8061_8114[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8034 === (28))){
var inst_8003 = (state_8033[(2)]);
var inst_8004 = calc_state.call(null);
var inst_7960 = inst_8004;
var state_8033__$1 = (function (){var statearr_8062 = state_8033;
(statearr_8062[(7)] = inst_7960);

(statearr_8062[(15)] = inst_8003);

return statearr_8062;
})();
var statearr_8063_8115 = state_8033__$1;
(statearr_8063_8115[(2)] = null);

(statearr_8063_8115[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8034 === (25))){
var inst_8029 = (state_8033[(2)]);
var state_8033__$1 = state_8033;
var statearr_8064_8116 = state_8033__$1;
(statearr_8064_8116[(2)] = inst_8029);

(statearr_8064_8116[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8034 === (34))){
var inst_8027 = (state_8033[(2)]);
var state_8033__$1 = state_8033;
var statearr_8065_8117 = state_8033__$1;
(statearr_8065_8117[(2)] = inst_8027);

(statearr_8065_8117[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8034 === (17))){
var state_8033__$1 = state_8033;
var statearr_8066_8118 = state_8033__$1;
(statearr_8066_8118[(2)] = false);

(statearr_8066_8118[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8034 === (3))){
var state_8033__$1 = state_8033;
var statearr_8067_8119 = state_8033__$1;
(statearr_8067_8119[(2)] = false);

(statearr_8067_8119[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8034 === (12))){
var inst_8031 = (state_8033[(2)]);
var state_8033__$1 = state_8033;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8033__$1,inst_8031);
} else {
if((state_val_8034 === (2))){
var inst_7935 = (state_8033[(8)]);
var inst_7940 = inst_7935.cljs$lang$protocol_mask$partition0$;
var inst_7941 = (inst_7940 & (64));
var inst_7942 = inst_7935.cljs$core$ISeq$;
var inst_7943 = (cljs.core.PROTOCOL_SENTINEL === inst_7942);
var inst_7944 = ((inst_7941) || (inst_7943));
var state_8033__$1 = state_8033;
if(cljs.core.truth_(inst_7944)){
var statearr_8068_8120 = state_8033__$1;
(statearr_8068_8120[(1)] = (5));

} else {
var statearr_8069_8121 = state_8033__$1;
(statearr_8069_8121[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8034 === (23))){
var inst_7992 = (state_8033[(14)]);
var inst_7998 = (inst_7992 == null);
var state_8033__$1 = state_8033;
if(cljs.core.truth_(inst_7998)){
var statearr_8070_8122 = state_8033__$1;
(statearr_8070_8122[(1)] = (26));

} else {
var statearr_8071_8123 = state_8033__$1;
(statearr_8071_8123[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8034 === (35))){
var inst_8018 = (state_8033[(2)]);
var state_8033__$1 = state_8033;
if(cljs.core.truth_(inst_8018)){
var statearr_8072_8124 = state_8033__$1;
(statearr_8072_8124[(1)] = (36));

} else {
var statearr_8073_8125 = state_8033__$1;
(statearr_8073_8125[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8034 === (19))){
var inst_7960 = (state_8033[(7)]);
var inst_7980 = cljs.core.apply.call(null,cljs.core.hash_map,inst_7960);
var state_8033__$1 = state_8033;
var statearr_8074_8126 = state_8033__$1;
(statearr_8074_8126[(2)] = inst_7980);

(statearr_8074_8126[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8034 === (11))){
var inst_7960 = (state_8033[(7)]);
var inst_7964 = (inst_7960 == null);
var inst_7965 = cljs.core.not.call(null,inst_7964);
var state_8033__$1 = state_8033;
if(inst_7965){
var statearr_8075_8127 = state_8033__$1;
(statearr_8075_8127[(1)] = (13));

} else {
var statearr_8076_8128 = state_8033__$1;
(statearr_8076_8128[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8034 === (9))){
var inst_7935 = (state_8033[(8)]);
var state_8033__$1 = state_8033;
var statearr_8077_8129 = state_8033__$1;
(statearr_8077_8129[(2)] = inst_7935);

(statearr_8077_8129[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8034 === (5))){
var state_8033__$1 = state_8033;
var statearr_8078_8130 = state_8033__$1;
(statearr_8078_8130[(2)] = true);

(statearr_8078_8130[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8034 === (14))){
var state_8033__$1 = state_8033;
var statearr_8079_8131 = state_8033__$1;
(statearr_8079_8131[(2)] = false);

(statearr_8079_8131[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8034 === (26))){
var inst_7993 = (state_8033[(9)]);
var inst_8000 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_7993);
var state_8033__$1 = state_8033;
var statearr_8080_8132 = state_8033__$1;
(statearr_8080_8132[(2)] = inst_8000);

(statearr_8080_8132[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8034 === (16))){
var state_8033__$1 = state_8033;
var statearr_8081_8133 = state_8033__$1;
(statearr_8081_8133[(2)] = true);

(statearr_8081_8133[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8034 === (38))){
var inst_8023 = (state_8033[(2)]);
var state_8033__$1 = state_8033;
var statearr_8082_8134 = state_8033__$1;
(statearr_8082_8134[(2)] = inst_8023);

(statearr_8082_8134[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8034 === (30))){
var inst_7993 = (state_8033[(9)]);
var inst_7984 = (state_8033[(10)]);
var inst_7985 = (state_8033[(13)]);
var inst_8010 = cljs.core.empty_QMARK_.call(null,inst_7984);
var inst_8011 = inst_7985.call(null,inst_7993);
var inst_8012 = cljs.core.not.call(null,inst_8011);
var inst_8013 = ((inst_8010) && (inst_8012));
var state_8033__$1 = state_8033;
var statearr_8083_8135 = state_8033__$1;
(statearr_8083_8135[(2)] = inst_8013);

(statearr_8083_8135[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8034 === (10))){
var inst_7935 = (state_8033[(8)]);
var inst_7956 = (state_8033[(2)]);
var inst_7957 = cljs.core.get.call(null,inst_7956,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_7958 = cljs.core.get.call(null,inst_7956,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_7959 = cljs.core.get.call(null,inst_7956,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_7960 = inst_7935;
var state_8033__$1 = (function (){var statearr_8084 = state_8033;
(statearr_8084[(7)] = inst_7960);

(statearr_8084[(16)] = inst_7957);

(statearr_8084[(17)] = inst_7959);

(statearr_8084[(18)] = inst_7958);

return statearr_8084;
})();
var statearr_8085_8136 = state_8033__$1;
(statearr_8085_8136[(2)] = null);

(statearr_8085_8136[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8034 === (18))){
var inst_7975 = (state_8033[(2)]);
var state_8033__$1 = state_8033;
var statearr_8086_8137 = state_8033__$1;
(statearr_8086_8137[(2)] = inst_7975);

(statearr_8086_8137[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8034 === (37))){
var state_8033__$1 = state_8033;
var statearr_8087_8138 = state_8033__$1;
(statearr_8087_8138[(2)] = null);

(statearr_8087_8138[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8034 === (8))){
var inst_7935 = (state_8033[(8)]);
var inst_7953 = cljs.core.apply.call(null,cljs.core.hash_map,inst_7935);
var state_8033__$1 = state_8033;
var statearr_8088_8139 = state_8033__$1;
(statearr_8088_8139[(2)] = inst_7953);

(statearr_8088_8139[(1)] = (10));


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
});})(c__7034__auto___8093,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__6944__auto__,c__7034__auto___8093,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__6945__auto__ = null;
var cljs$core$async$mix_$_state_machine__6945__auto____0 = (function (){
var statearr_8089 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_8089[(0)] = cljs$core$async$mix_$_state_machine__6945__auto__);

(statearr_8089[(1)] = (1));

return statearr_8089;
});
var cljs$core$async$mix_$_state_machine__6945__auto____1 = (function (state_8033){
while(true){
var ret_value__6946__auto__ = (function (){try{while(true){
var result__6947__auto__ = switch__6944__auto__.call(null,state_8033);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6947__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6947__auto__;
}
break;
}
}catch (e8090){if((e8090 instanceof Object)){
var ex__6948__auto__ = e8090;
var statearr_8091_8140 = state_8033;
(statearr_8091_8140[(5)] = ex__6948__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8033);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8090;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8141 = state_8033;
state_8033 = G__8141;
continue;
} else {
return ret_value__6946__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__6945__auto__ = function(state_8033){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__6945__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__6945__auto____1.call(this,state_8033);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__6945__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__6945__auto____0;
cljs$core$async$mix_$_state_machine__6945__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__6945__auto____1;
return cljs$core$async$mix_$_state_machine__6945__auto__;
})()
;})(switch__6944__auto__,c__7034__auto___8093,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__7036__auto__ = (function (){var statearr_8092 = f__7035__auto__.call(null);
(statearr_8092[(6)] = c__7034__auto___8093);

return statearr_8092;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7036__auto__);
});})(c__7034__auto___8093,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
if(((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4211__auto__ = (((p == null))?null:p);
var m__4212__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__4212__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4211__auto__ = (((p == null))?null:p);
var m__4212__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,p,v,ch);
} else {
var m__4212__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__8143 = arguments.length;
switch (G__8143) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4211__auto__ = (((p == null))?null:p);
var m__4212__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,p);
} else {
var m__4212__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4211__auto__ = (((p == null))?null:p);
var m__4212__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,p,v);
} else {
var m__4212__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,p,v);
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
var G__8147 = arguments.length;
switch (G__8147) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__3922__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3922__auto__,mults){
return (function (p1__8145_SHARP_){
if(cljs.core.truth_(p1__8145_SHARP_.call(null,topic))){
return p1__8145_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__8145_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3922__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async8148 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async8148 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta8149){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta8149 = meta8149;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async8148.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_8150,meta8149__$1){
var self__ = this;
var _8150__$1 = this;
return (new cljs.core.async.t_cljs$core$async8148(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta8149__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async8148.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_8150){
var self__ = this;
var _8150__$1 = this;
return self__.meta8149;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async8148.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async8148.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async8148.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async8148.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async8148.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5457__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5457__auto__)){
var m = temp__5457__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async8148.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async8148.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async8148.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta8149","meta8149",-2017489745,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async8148.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async8148.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async8148";

cljs.core.async.t_cljs$core$async8148.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async8148");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async8148.
 */
cljs.core.async.__GT_t_cljs$core$async8148 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async8148(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta8149){
return (new cljs.core.async.t_cljs$core$async8148(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta8149));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async8148(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__7034__auto___8268 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7034__auto___8268,mults,ensure_mult,p){
return (function (){
var f__7035__auto__ = (function (){var switch__6944__auto__ = ((function (c__7034__auto___8268,mults,ensure_mult,p){
return (function (state_8222){
var state_val_8223 = (state_8222[(1)]);
if((state_val_8223 === (7))){
var inst_8218 = (state_8222[(2)]);
var state_8222__$1 = state_8222;
var statearr_8224_8269 = state_8222__$1;
(statearr_8224_8269[(2)] = inst_8218);

(statearr_8224_8269[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8223 === (20))){
var state_8222__$1 = state_8222;
var statearr_8225_8270 = state_8222__$1;
(statearr_8225_8270[(2)] = null);

(statearr_8225_8270[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8223 === (1))){
var state_8222__$1 = state_8222;
var statearr_8226_8271 = state_8222__$1;
(statearr_8226_8271[(2)] = null);

(statearr_8226_8271[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8223 === (24))){
var inst_8201 = (state_8222[(7)]);
var inst_8210 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_8201);
var state_8222__$1 = state_8222;
var statearr_8227_8272 = state_8222__$1;
(statearr_8227_8272[(2)] = inst_8210);

(statearr_8227_8272[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8223 === (4))){
var inst_8153 = (state_8222[(8)]);
var inst_8153__$1 = (state_8222[(2)]);
var inst_8154 = (inst_8153__$1 == null);
var state_8222__$1 = (function (){var statearr_8228 = state_8222;
(statearr_8228[(8)] = inst_8153__$1);

return statearr_8228;
})();
if(cljs.core.truth_(inst_8154)){
var statearr_8229_8273 = state_8222__$1;
(statearr_8229_8273[(1)] = (5));

} else {
var statearr_8230_8274 = state_8222__$1;
(statearr_8230_8274[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8223 === (15))){
var inst_8195 = (state_8222[(2)]);
var state_8222__$1 = state_8222;
var statearr_8231_8275 = state_8222__$1;
(statearr_8231_8275[(2)] = inst_8195);

(statearr_8231_8275[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8223 === (21))){
var inst_8215 = (state_8222[(2)]);
var state_8222__$1 = (function (){var statearr_8232 = state_8222;
(statearr_8232[(9)] = inst_8215);

return statearr_8232;
})();
var statearr_8233_8276 = state_8222__$1;
(statearr_8233_8276[(2)] = null);

(statearr_8233_8276[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8223 === (13))){
var inst_8177 = (state_8222[(10)]);
var inst_8179 = cljs.core.chunked_seq_QMARK_.call(null,inst_8177);
var state_8222__$1 = state_8222;
if(inst_8179){
var statearr_8234_8277 = state_8222__$1;
(statearr_8234_8277[(1)] = (16));

} else {
var statearr_8235_8278 = state_8222__$1;
(statearr_8235_8278[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8223 === (22))){
var inst_8207 = (state_8222[(2)]);
var state_8222__$1 = state_8222;
if(cljs.core.truth_(inst_8207)){
var statearr_8236_8279 = state_8222__$1;
(statearr_8236_8279[(1)] = (23));

} else {
var statearr_8237_8280 = state_8222__$1;
(statearr_8237_8280[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8223 === (6))){
var inst_8153 = (state_8222[(8)]);
var inst_8203 = (state_8222[(11)]);
var inst_8201 = (state_8222[(7)]);
var inst_8201__$1 = topic_fn.call(null,inst_8153);
var inst_8202 = cljs.core.deref.call(null,mults);
var inst_8203__$1 = cljs.core.get.call(null,inst_8202,inst_8201__$1);
var state_8222__$1 = (function (){var statearr_8238 = state_8222;
(statearr_8238[(11)] = inst_8203__$1);

(statearr_8238[(7)] = inst_8201__$1);

return statearr_8238;
})();
if(cljs.core.truth_(inst_8203__$1)){
var statearr_8239_8281 = state_8222__$1;
(statearr_8239_8281[(1)] = (19));

} else {
var statearr_8240_8282 = state_8222__$1;
(statearr_8240_8282[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8223 === (25))){
var inst_8212 = (state_8222[(2)]);
var state_8222__$1 = state_8222;
var statearr_8241_8283 = state_8222__$1;
(statearr_8241_8283[(2)] = inst_8212);

(statearr_8241_8283[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8223 === (17))){
var inst_8177 = (state_8222[(10)]);
var inst_8186 = cljs.core.first.call(null,inst_8177);
var inst_8187 = cljs.core.async.muxch_STAR_.call(null,inst_8186);
var inst_8188 = cljs.core.async.close_BANG_.call(null,inst_8187);
var inst_8189 = cljs.core.next.call(null,inst_8177);
var inst_8163 = inst_8189;
var inst_8164 = null;
var inst_8165 = (0);
var inst_8166 = (0);
var state_8222__$1 = (function (){var statearr_8242 = state_8222;
(statearr_8242[(12)] = inst_8188);

(statearr_8242[(13)] = inst_8164);

(statearr_8242[(14)] = inst_8166);

(statearr_8242[(15)] = inst_8163);

(statearr_8242[(16)] = inst_8165);

return statearr_8242;
})();
var statearr_8243_8284 = state_8222__$1;
(statearr_8243_8284[(2)] = null);

(statearr_8243_8284[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8223 === (3))){
var inst_8220 = (state_8222[(2)]);
var state_8222__$1 = state_8222;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8222__$1,inst_8220);
} else {
if((state_val_8223 === (12))){
var inst_8197 = (state_8222[(2)]);
var state_8222__$1 = state_8222;
var statearr_8244_8285 = state_8222__$1;
(statearr_8244_8285[(2)] = inst_8197);

(statearr_8244_8285[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8223 === (2))){
var state_8222__$1 = state_8222;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8222__$1,(4),ch);
} else {
if((state_val_8223 === (23))){
var state_8222__$1 = state_8222;
var statearr_8245_8286 = state_8222__$1;
(statearr_8245_8286[(2)] = null);

(statearr_8245_8286[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8223 === (19))){
var inst_8153 = (state_8222[(8)]);
var inst_8203 = (state_8222[(11)]);
var inst_8205 = cljs.core.async.muxch_STAR_.call(null,inst_8203);
var state_8222__$1 = state_8222;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_8222__$1,(22),inst_8205,inst_8153);
} else {
if((state_val_8223 === (11))){
var inst_8163 = (state_8222[(15)]);
var inst_8177 = (state_8222[(10)]);
var inst_8177__$1 = cljs.core.seq.call(null,inst_8163);
var state_8222__$1 = (function (){var statearr_8246 = state_8222;
(statearr_8246[(10)] = inst_8177__$1);

return statearr_8246;
})();
if(inst_8177__$1){
var statearr_8247_8287 = state_8222__$1;
(statearr_8247_8287[(1)] = (13));

} else {
var statearr_8248_8288 = state_8222__$1;
(statearr_8248_8288[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8223 === (9))){
var inst_8199 = (state_8222[(2)]);
var state_8222__$1 = state_8222;
var statearr_8249_8289 = state_8222__$1;
(statearr_8249_8289[(2)] = inst_8199);

(statearr_8249_8289[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8223 === (5))){
var inst_8160 = cljs.core.deref.call(null,mults);
var inst_8161 = cljs.core.vals.call(null,inst_8160);
var inst_8162 = cljs.core.seq.call(null,inst_8161);
var inst_8163 = inst_8162;
var inst_8164 = null;
var inst_8165 = (0);
var inst_8166 = (0);
var state_8222__$1 = (function (){var statearr_8250 = state_8222;
(statearr_8250[(13)] = inst_8164);

(statearr_8250[(14)] = inst_8166);

(statearr_8250[(15)] = inst_8163);

(statearr_8250[(16)] = inst_8165);

return statearr_8250;
})();
var statearr_8251_8290 = state_8222__$1;
(statearr_8251_8290[(2)] = null);

(statearr_8251_8290[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8223 === (14))){
var state_8222__$1 = state_8222;
var statearr_8255_8291 = state_8222__$1;
(statearr_8255_8291[(2)] = null);

(statearr_8255_8291[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8223 === (16))){
var inst_8177 = (state_8222[(10)]);
var inst_8181 = cljs.core.chunk_first.call(null,inst_8177);
var inst_8182 = cljs.core.chunk_rest.call(null,inst_8177);
var inst_8183 = cljs.core.count.call(null,inst_8181);
var inst_8163 = inst_8182;
var inst_8164 = inst_8181;
var inst_8165 = inst_8183;
var inst_8166 = (0);
var state_8222__$1 = (function (){var statearr_8256 = state_8222;
(statearr_8256[(13)] = inst_8164);

(statearr_8256[(14)] = inst_8166);

(statearr_8256[(15)] = inst_8163);

(statearr_8256[(16)] = inst_8165);

return statearr_8256;
})();
var statearr_8257_8292 = state_8222__$1;
(statearr_8257_8292[(2)] = null);

(statearr_8257_8292[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8223 === (10))){
var inst_8164 = (state_8222[(13)]);
var inst_8166 = (state_8222[(14)]);
var inst_8163 = (state_8222[(15)]);
var inst_8165 = (state_8222[(16)]);
var inst_8171 = cljs.core._nth.call(null,inst_8164,inst_8166);
var inst_8172 = cljs.core.async.muxch_STAR_.call(null,inst_8171);
var inst_8173 = cljs.core.async.close_BANG_.call(null,inst_8172);
var inst_8174 = (inst_8166 + (1));
var tmp8252 = inst_8164;
var tmp8253 = inst_8163;
var tmp8254 = inst_8165;
var inst_8163__$1 = tmp8253;
var inst_8164__$1 = tmp8252;
var inst_8165__$1 = tmp8254;
var inst_8166__$1 = inst_8174;
var state_8222__$1 = (function (){var statearr_8258 = state_8222;
(statearr_8258[(13)] = inst_8164__$1);

(statearr_8258[(14)] = inst_8166__$1);

(statearr_8258[(15)] = inst_8163__$1);

(statearr_8258[(16)] = inst_8165__$1);

(statearr_8258[(17)] = inst_8173);

return statearr_8258;
})();
var statearr_8259_8293 = state_8222__$1;
(statearr_8259_8293[(2)] = null);

(statearr_8259_8293[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8223 === (18))){
var inst_8192 = (state_8222[(2)]);
var state_8222__$1 = state_8222;
var statearr_8260_8294 = state_8222__$1;
(statearr_8260_8294[(2)] = inst_8192);

(statearr_8260_8294[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8223 === (8))){
var inst_8166 = (state_8222[(14)]);
var inst_8165 = (state_8222[(16)]);
var inst_8168 = (inst_8166 < inst_8165);
var inst_8169 = inst_8168;
var state_8222__$1 = state_8222;
if(cljs.core.truth_(inst_8169)){
var statearr_8261_8295 = state_8222__$1;
(statearr_8261_8295[(1)] = (10));

} else {
var statearr_8262_8296 = state_8222__$1;
(statearr_8262_8296[(1)] = (11));

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
});})(c__7034__auto___8268,mults,ensure_mult,p))
;
return ((function (switch__6944__auto__,c__7034__auto___8268,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__6945__auto__ = null;
var cljs$core$async$state_machine__6945__auto____0 = (function (){
var statearr_8263 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_8263[(0)] = cljs$core$async$state_machine__6945__auto__);

(statearr_8263[(1)] = (1));

return statearr_8263;
});
var cljs$core$async$state_machine__6945__auto____1 = (function (state_8222){
while(true){
var ret_value__6946__auto__ = (function (){try{while(true){
var result__6947__auto__ = switch__6944__auto__.call(null,state_8222);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6947__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6947__auto__;
}
break;
}
}catch (e8264){if((e8264 instanceof Object)){
var ex__6948__auto__ = e8264;
var statearr_8265_8297 = state_8222;
(statearr_8265_8297[(5)] = ex__6948__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8222);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8264;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8298 = state_8222;
state_8222 = G__8298;
continue;
} else {
return ret_value__6946__auto__;
}
break;
}
});
cljs$core$async$state_machine__6945__auto__ = function(state_8222){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6945__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6945__auto____1.call(this,state_8222);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__6945__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6945__auto____0;
cljs$core$async$state_machine__6945__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6945__auto____1;
return cljs$core$async$state_machine__6945__auto__;
})()
;})(switch__6944__auto__,c__7034__auto___8268,mults,ensure_mult,p))
})();
var state__7036__auto__ = (function (){var statearr_8266 = f__7035__auto__.call(null);
(statearr_8266[(6)] = c__7034__auto___8268);

return statearr_8266;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7036__auto__);
});})(c__7034__auto___8268,mults,ensure_mult,p))
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
var G__8300 = arguments.length;
switch (G__8300) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
var G__8303 = arguments.length;
switch (G__8303) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
var G__8306 = arguments.length;
switch (G__8306) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
var c__7034__auto___8373 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7034__auto___8373,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__7035__auto__ = (function (){var switch__6944__auto__ = ((function (c__7034__auto___8373,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_8345){
var state_val_8346 = (state_8345[(1)]);
if((state_val_8346 === (7))){
var state_8345__$1 = state_8345;
var statearr_8347_8374 = state_8345__$1;
(statearr_8347_8374[(2)] = null);

(statearr_8347_8374[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8346 === (1))){
var state_8345__$1 = state_8345;
var statearr_8348_8375 = state_8345__$1;
(statearr_8348_8375[(2)] = null);

(statearr_8348_8375[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8346 === (4))){
var inst_8309 = (state_8345[(7)]);
var inst_8311 = (inst_8309 < cnt);
var state_8345__$1 = state_8345;
if(cljs.core.truth_(inst_8311)){
var statearr_8349_8376 = state_8345__$1;
(statearr_8349_8376[(1)] = (6));

} else {
var statearr_8350_8377 = state_8345__$1;
(statearr_8350_8377[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8346 === (15))){
var inst_8341 = (state_8345[(2)]);
var state_8345__$1 = state_8345;
var statearr_8351_8378 = state_8345__$1;
(statearr_8351_8378[(2)] = inst_8341);

(statearr_8351_8378[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8346 === (13))){
var inst_8334 = cljs.core.async.close_BANG_.call(null,out);
var state_8345__$1 = state_8345;
var statearr_8352_8379 = state_8345__$1;
(statearr_8352_8379[(2)] = inst_8334);

(statearr_8352_8379[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8346 === (6))){
var state_8345__$1 = state_8345;
var statearr_8353_8380 = state_8345__$1;
(statearr_8353_8380[(2)] = null);

(statearr_8353_8380[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8346 === (3))){
var inst_8343 = (state_8345[(2)]);
var state_8345__$1 = state_8345;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8345__$1,inst_8343);
} else {
if((state_val_8346 === (12))){
var inst_8331 = (state_8345[(8)]);
var inst_8331__$1 = (state_8345[(2)]);
var inst_8332 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_8331__$1);
var state_8345__$1 = (function (){var statearr_8354 = state_8345;
(statearr_8354[(8)] = inst_8331__$1);

return statearr_8354;
})();
if(cljs.core.truth_(inst_8332)){
var statearr_8355_8381 = state_8345__$1;
(statearr_8355_8381[(1)] = (13));

} else {
var statearr_8356_8382 = state_8345__$1;
(statearr_8356_8382[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8346 === (2))){
var inst_8308 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_8309 = (0);
var state_8345__$1 = (function (){var statearr_8357 = state_8345;
(statearr_8357[(7)] = inst_8309);

(statearr_8357[(9)] = inst_8308);

return statearr_8357;
})();
var statearr_8358_8383 = state_8345__$1;
(statearr_8358_8383[(2)] = null);

(statearr_8358_8383[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8346 === (11))){
var inst_8309 = (state_8345[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_8345,(10),Object,null,(9));
var inst_8318 = chs__$1.call(null,inst_8309);
var inst_8319 = done.call(null,inst_8309);
var inst_8320 = cljs.core.async.take_BANG_.call(null,inst_8318,inst_8319);
var state_8345__$1 = state_8345;
var statearr_8359_8384 = state_8345__$1;
(statearr_8359_8384[(2)] = inst_8320);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8345__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8346 === (9))){
var inst_8309 = (state_8345[(7)]);
var inst_8322 = (state_8345[(2)]);
var inst_8323 = (inst_8309 + (1));
var inst_8309__$1 = inst_8323;
var state_8345__$1 = (function (){var statearr_8360 = state_8345;
(statearr_8360[(7)] = inst_8309__$1);

(statearr_8360[(10)] = inst_8322);

return statearr_8360;
})();
var statearr_8361_8385 = state_8345__$1;
(statearr_8361_8385[(2)] = null);

(statearr_8361_8385[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8346 === (5))){
var inst_8329 = (state_8345[(2)]);
var state_8345__$1 = (function (){var statearr_8362 = state_8345;
(statearr_8362[(11)] = inst_8329);

return statearr_8362;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8345__$1,(12),dchan);
} else {
if((state_val_8346 === (14))){
var inst_8331 = (state_8345[(8)]);
var inst_8336 = cljs.core.apply.call(null,f,inst_8331);
var state_8345__$1 = state_8345;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_8345__$1,(16),out,inst_8336);
} else {
if((state_val_8346 === (16))){
var inst_8338 = (state_8345[(2)]);
var state_8345__$1 = (function (){var statearr_8363 = state_8345;
(statearr_8363[(12)] = inst_8338);

return statearr_8363;
})();
var statearr_8364_8386 = state_8345__$1;
(statearr_8364_8386[(2)] = null);

(statearr_8364_8386[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8346 === (10))){
var inst_8313 = (state_8345[(2)]);
var inst_8314 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_8345__$1 = (function (){var statearr_8365 = state_8345;
(statearr_8365[(13)] = inst_8313);

return statearr_8365;
})();
var statearr_8366_8387 = state_8345__$1;
(statearr_8366_8387[(2)] = inst_8314);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8345__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8346 === (8))){
var inst_8327 = (state_8345[(2)]);
var state_8345__$1 = state_8345;
var statearr_8367_8388 = state_8345__$1;
(statearr_8367_8388[(2)] = inst_8327);

(statearr_8367_8388[(1)] = (5));


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
});})(c__7034__auto___8373,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__6944__auto__,c__7034__auto___8373,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__6945__auto__ = null;
var cljs$core$async$state_machine__6945__auto____0 = (function (){
var statearr_8368 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_8368[(0)] = cljs$core$async$state_machine__6945__auto__);

(statearr_8368[(1)] = (1));

return statearr_8368;
});
var cljs$core$async$state_machine__6945__auto____1 = (function (state_8345){
while(true){
var ret_value__6946__auto__ = (function (){try{while(true){
var result__6947__auto__ = switch__6944__auto__.call(null,state_8345);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6947__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6947__auto__;
}
break;
}
}catch (e8369){if((e8369 instanceof Object)){
var ex__6948__auto__ = e8369;
var statearr_8370_8389 = state_8345;
(statearr_8370_8389[(5)] = ex__6948__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8345);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8369;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8390 = state_8345;
state_8345 = G__8390;
continue;
} else {
return ret_value__6946__auto__;
}
break;
}
});
cljs$core$async$state_machine__6945__auto__ = function(state_8345){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6945__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6945__auto____1.call(this,state_8345);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__6945__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6945__auto____0;
cljs$core$async$state_machine__6945__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6945__auto____1;
return cljs$core$async$state_machine__6945__auto__;
})()
;})(switch__6944__auto__,c__7034__auto___8373,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__7036__auto__ = (function (){var statearr_8371 = f__7035__auto__.call(null);
(statearr_8371[(6)] = c__7034__auto___8373);

return statearr_8371;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7036__auto__);
});})(c__7034__auto___8373,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__8393 = arguments.length;
switch (G__8393) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__7034__auto___8447 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7034__auto___8447,out){
return (function (){
var f__7035__auto__ = (function (){var switch__6944__auto__ = ((function (c__7034__auto___8447,out){
return (function (state_8425){
var state_val_8426 = (state_8425[(1)]);
if((state_val_8426 === (7))){
var inst_8404 = (state_8425[(7)]);
var inst_8405 = (state_8425[(8)]);
var inst_8404__$1 = (state_8425[(2)]);
var inst_8405__$1 = cljs.core.nth.call(null,inst_8404__$1,(0),null);
var inst_8406 = cljs.core.nth.call(null,inst_8404__$1,(1),null);
var inst_8407 = (inst_8405__$1 == null);
var state_8425__$1 = (function (){var statearr_8427 = state_8425;
(statearr_8427[(9)] = inst_8406);

(statearr_8427[(7)] = inst_8404__$1);

(statearr_8427[(8)] = inst_8405__$1);

return statearr_8427;
})();
if(cljs.core.truth_(inst_8407)){
var statearr_8428_8448 = state_8425__$1;
(statearr_8428_8448[(1)] = (8));

} else {
var statearr_8429_8449 = state_8425__$1;
(statearr_8429_8449[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8426 === (1))){
var inst_8394 = cljs.core.vec.call(null,chs);
var inst_8395 = inst_8394;
var state_8425__$1 = (function (){var statearr_8430 = state_8425;
(statearr_8430[(10)] = inst_8395);

return statearr_8430;
})();
var statearr_8431_8450 = state_8425__$1;
(statearr_8431_8450[(2)] = null);

(statearr_8431_8450[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8426 === (4))){
var inst_8395 = (state_8425[(10)]);
var state_8425__$1 = state_8425;
return cljs.core.async.ioc_alts_BANG_.call(null,state_8425__$1,(7),inst_8395);
} else {
if((state_val_8426 === (6))){
var inst_8421 = (state_8425[(2)]);
var state_8425__$1 = state_8425;
var statearr_8432_8451 = state_8425__$1;
(statearr_8432_8451[(2)] = inst_8421);

(statearr_8432_8451[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8426 === (3))){
var inst_8423 = (state_8425[(2)]);
var state_8425__$1 = state_8425;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8425__$1,inst_8423);
} else {
if((state_val_8426 === (2))){
var inst_8395 = (state_8425[(10)]);
var inst_8397 = cljs.core.count.call(null,inst_8395);
var inst_8398 = (inst_8397 > (0));
var state_8425__$1 = state_8425;
if(cljs.core.truth_(inst_8398)){
var statearr_8434_8452 = state_8425__$1;
(statearr_8434_8452[(1)] = (4));

} else {
var statearr_8435_8453 = state_8425__$1;
(statearr_8435_8453[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8426 === (11))){
var inst_8395 = (state_8425[(10)]);
var inst_8414 = (state_8425[(2)]);
var tmp8433 = inst_8395;
var inst_8395__$1 = tmp8433;
var state_8425__$1 = (function (){var statearr_8436 = state_8425;
(statearr_8436[(10)] = inst_8395__$1);

(statearr_8436[(11)] = inst_8414);

return statearr_8436;
})();
var statearr_8437_8454 = state_8425__$1;
(statearr_8437_8454[(2)] = null);

(statearr_8437_8454[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8426 === (9))){
var inst_8405 = (state_8425[(8)]);
var state_8425__$1 = state_8425;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_8425__$1,(11),out,inst_8405);
} else {
if((state_val_8426 === (5))){
var inst_8419 = cljs.core.async.close_BANG_.call(null,out);
var state_8425__$1 = state_8425;
var statearr_8438_8455 = state_8425__$1;
(statearr_8438_8455[(2)] = inst_8419);

(statearr_8438_8455[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8426 === (10))){
var inst_8417 = (state_8425[(2)]);
var state_8425__$1 = state_8425;
var statearr_8439_8456 = state_8425__$1;
(statearr_8439_8456[(2)] = inst_8417);

(statearr_8439_8456[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8426 === (8))){
var inst_8406 = (state_8425[(9)]);
var inst_8395 = (state_8425[(10)]);
var inst_8404 = (state_8425[(7)]);
var inst_8405 = (state_8425[(8)]);
var inst_8409 = (function (){var cs = inst_8395;
var vec__8400 = inst_8404;
var v = inst_8405;
var c = inst_8406;
return ((function (cs,vec__8400,v,c,inst_8406,inst_8395,inst_8404,inst_8405,state_val_8426,c__7034__auto___8447,out){
return (function (p1__8391_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__8391_SHARP_);
});
;})(cs,vec__8400,v,c,inst_8406,inst_8395,inst_8404,inst_8405,state_val_8426,c__7034__auto___8447,out))
})();
var inst_8410 = cljs.core.filterv.call(null,inst_8409,inst_8395);
var inst_8395__$1 = inst_8410;
var state_8425__$1 = (function (){var statearr_8440 = state_8425;
(statearr_8440[(10)] = inst_8395__$1);

return statearr_8440;
})();
var statearr_8441_8457 = state_8425__$1;
(statearr_8441_8457[(2)] = null);

(statearr_8441_8457[(1)] = (2));


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
});})(c__7034__auto___8447,out))
;
return ((function (switch__6944__auto__,c__7034__auto___8447,out){
return (function() {
var cljs$core$async$state_machine__6945__auto__ = null;
var cljs$core$async$state_machine__6945__auto____0 = (function (){
var statearr_8442 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_8442[(0)] = cljs$core$async$state_machine__6945__auto__);

(statearr_8442[(1)] = (1));

return statearr_8442;
});
var cljs$core$async$state_machine__6945__auto____1 = (function (state_8425){
while(true){
var ret_value__6946__auto__ = (function (){try{while(true){
var result__6947__auto__ = switch__6944__auto__.call(null,state_8425);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6947__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6947__auto__;
}
break;
}
}catch (e8443){if((e8443 instanceof Object)){
var ex__6948__auto__ = e8443;
var statearr_8444_8458 = state_8425;
(statearr_8444_8458[(5)] = ex__6948__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8425);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8443;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8459 = state_8425;
state_8425 = G__8459;
continue;
} else {
return ret_value__6946__auto__;
}
break;
}
});
cljs$core$async$state_machine__6945__auto__ = function(state_8425){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6945__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6945__auto____1.call(this,state_8425);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__6945__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6945__auto____0;
cljs$core$async$state_machine__6945__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6945__auto____1;
return cljs$core$async$state_machine__6945__auto__;
})()
;})(switch__6944__auto__,c__7034__auto___8447,out))
})();
var state__7036__auto__ = (function (){var statearr_8445 = f__7035__auto__.call(null);
(statearr_8445[(6)] = c__7034__auto___8447);

return statearr_8445;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7036__auto__);
});})(c__7034__auto___8447,out))
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
var G__8461 = arguments.length;
switch (G__8461) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__7034__auto___8506 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7034__auto___8506,out){
return (function (){
var f__7035__auto__ = (function (){var switch__6944__auto__ = ((function (c__7034__auto___8506,out){
return (function (state_8485){
var state_val_8486 = (state_8485[(1)]);
if((state_val_8486 === (7))){
var inst_8467 = (state_8485[(7)]);
var inst_8467__$1 = (state_8485[(2)]);
var inst_8468 = (inst_8467__$1 == null);
var inst_8469 = cljs.core.not.call(null,inst_8468);
var state_8485__$1 = (function (){var statearr_8487 = state_8485;
(statearr_8487[(7)] = inst_8467__$1);

return statearr_8487;
})();
if(inst_8469){
var statearr_8488_8507 = state_8485__$1;
(statearr_8488_8507[(1)] = (8));

} else {
var statearr_8489_8508 = state_8485__$1;
(statearr_8489_8508[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8486 === (1))){
var inst_8462 = (0);
var state_8485__$1 = (function (){var statearr_8490 = state_8485;
(statearr_8490[(8)] = inst_8462);

return statearr_8490;
})();
var statearr_8491_8509 = state_8485__$1;
(statearr_8491_8509[(2)] = null);

(statearr_8491_8509[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8486 === (4))){
var state_8485__$1 = state_8485;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8485__$1,(7),ch);
} else {
if((state_val_8486 === (6))){
var inst_8480 = (state_8485[(2)]);
var state_8485__$1 = state_8485;
var statearr_8492_8510 = state_8485__$1;
(statearr_8492_8510[(2)] = inst_8480);

(statearr_8492_8510[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8486 === (3))){
var inst_8482 = (state_8485[(2)]);
var inst_8483 = cljs.core.async.close_BANG_.call(null,out);
var state_8485__$1 = (function (){var statearr_8493 = state_8485;
(statearr_8493[(9)] = inst_8482);

return statearr_8493;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8485__$1,inst_8483);
} else {
if((state_val_8486 === (2))){
var inst_8462 = (state_8485[(8)]);
var inst_8464 = (inst_8462 < n);
var state_8485__$1 = state_8485;
if(cljs.core.truth_(inst_8464)){
var statearr_8494_8511 = state_8485__$1;
(statearr_8494_8511[(1)] = (4));

} else {
var statearr_8495_8512 = state_8485__$1;
(statearr_8495_8512[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8486 === (11))){
var inst_8462 = (state_8485[(8)]);
var inst_8472 = (state_8485[(2)]);
var inst_8473 = (inst_8462 + (1));
var inst_8462__$1 = inst_8473;
var state_8485__$1 = (function (){var statearr_8496 = state_8485;
(statearr_8496[(10)] = inst_8472);

(statearr_8496[(8)] = inst_8462__$1);

return statearr_8496;
})();
var statearr_8497_8513 = state_8485__$1;
(statearr_8497_8513[(2)] = null);

(statearr_8497_8513[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8486 === (9))){
var state_8485__$1 = state_8485;
var statearr_8498_8514 = state_8485__$1;
(statearr_8498_8514[(2)] = null);

(statearr_8498_8514[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8486 === (5))){
var state_8485__$1 = state_8485;
var statearr_8499_8515 = state_8485__$1;
(statearr_8499_8515[(2)] = null);

(statearr_8499_8515[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8486 === (10))){
var inst_8477 = (state_8485[(2)]);
var state_8485__$1 = state_8485;
var statearr_8500_8516 = state_8485__$1;
(statearr_8500_8516[(2)] = inst_8477);

(statearr_8500_8516[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8486 === (8))){
var inst_8467 = (state_8485[(7)]);
var state_8485__$1 = state_8485;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_8485__$1,(11),out,inst_8467);
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
});})(c__7034__auto___8506,out))
;
return ((function (switch__6944__auto__,c__7034__auto___8506,out){
return (function() {
var cljs$core$async$state_machine__6945__auto__ = null;
var cljs$core$async$state_machine__6945__auto____0 = (function (){
var statearr_8501 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_8501[(0)] = cljs$core$async$state_machine__6945__auto__);

(statearr_8501[(1)] = (1));

return statearr_8501;
});
var cljs$core$async$state_machine__6945__auto____1 = (function (state_8485){
while(true){
var ret_value__6946__auto__ = (function (){try{while(true){
var result__6947__auto__ = switch__6944__auto__.call(null,state_8485);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6947__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6947__auto__;
}
break;
}
}catch (e8502){if((e8502 instanceof Object)){
var ex__6948__auto__ = e8502;
var statearr_8503_8517 = state_8485;
(statearr_8503_8517[(5)] = ex__6948__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8485);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8502;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8518 = state_8485;
state_8485 = G__8518;
continue;
} else {
return ret_value__6946__auto__;
}
break;
}
});
cljs$core$async$state_machine__6945__auto__ = function(state_8485){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6945__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6945__auto____1.call(this,state_8485);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__6945__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6945__auto____0;
cljs$core$async$state_machine__6945__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6945__auto____1;
return cljs$core$async$state_machine__6945__auto__;
})()
;})(switch__6944__auto__,c__7034__auto___8506,out))
})();
var state__7036__auto__ = (function (){var statearr_8504 = f__7035__auto__.call(null);
(statearr_8504[(6)] = c__7034__auto___8506);

return statearr_8504;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7036__auto__);
});})(c__7034__auto___8506,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async8520 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async8520 = (function (f,ch,meta8521){
this.f = f;
this.ch = ch;
this.meta8521 = meta8521;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async8520.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_8522,meta8521__$1){
var self__ = this;
var _8522__$1 = this;
return (new cljs.core.async.t_cljs$core$async8520(self__.f,self__.ch,meta8521__$1));
});

cljs.core.async.t_cljs$core$async8520.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_8522){
var self__ = this;
var _8522__$1 = this;
return self__.meta8521;
});

cljs.core.async.t_cljs$core$async8520.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async8520.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async8520.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async8520.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async8520.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async8523 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async8523 = (function (f,ch,meta8521,_,fn1,meta8524){
this.f = f;
this.ch = ch;
this.meta8521 = meta8521;
this._ = _;
this.fn1 = fn1;
this.meta8524 = meta8524;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async8523.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_8525,meta8524__$1){
var self__ = this;
var _8525__$1 = this;
return (new cljs.core.async.t_cljs$core$async8523(self__.f,self__.ch,self__.meta8521,self__._,self__.fn1,meta8524__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async8523.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_8525){
var self__ = this;
var _8525__$1 = this;
return self__.meta8524;
});})(___$1))
;

cljs.core.async.t_cljs$core$async8523.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async8523.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async8523.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async8523.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__8519_SHARP_){
return f1.call(null,(((p1__8519_SHARP_ == null))?null:self__.f.call(null,p1__8519_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async8523.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta8521","meta8521",-502374949,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async8520","cljs.core.async/t_cljs$core$async8520",847198465,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta8524","meta8524",-441585446,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async8523.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async8523.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async8523";

cljs.core.async.t_cljs$core$async8523.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async8523");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async8523.
 */
cljs.core.async.__GT_t_cljs$core$async8523 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async8523(f__$1,ch__$1,meta8521__$1,___$2,fn1__$1,meta8524){
return (new cljs.core.async.t_cljs$core$async8523(f__$1,ch__$1,meta8521__$1,___$2,fn1__$1,meta8524));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async8523(self__.f,self__.ch,self__.meta8521,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__3911__auto__ = ret;
if(cljs.core.truth_(and__3911__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__3911__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async8520.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async8520.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async8520.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta8521","meta8521",-502374949,null)], null);
});

cljs.core.async.t_cljs$core$async8520.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async8520.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async8520";

cljs.core.async.t_cljs$core$async8520.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async8520");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async8520.
 */
cljs.core.async.__GT_t_cljs$core$async8520 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async8520(f__$1,ch__$1,meta8521){
return (new cljs.core.async.t_cljs$core$async8520(f__$1,ch__$1,meta8521));
});

}

return (new cljs.core.async.t_cljs$core$async8520(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async8526 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async8526 = (function (f,ch,meta8527){
this.f = f;
this.ch = ch;
this.meta8527 = meta8527;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async8526.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_8528,meta8527__$1){
var self__ = this;
var _8528__$1 = this;
return (new cljs.core.async.t_cljs$core$async8526(self__.f,self__.ch,meta8527__$1));
});

cljs.core.async.t_cljs$core$async8526.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_8528){
var self__ = this;
var _8528__$1 = this;
return self__.meta8527;
});

cljs.core.async.t_cljs$core$async8526.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async8526.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async8526.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async8526.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async8526.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async8526.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async8526.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta8527","meta8527",-1311406556,null)], null);
});

cljs.core.async.t_cljs$core$async8526.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async8526.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async8526";

cljs.core.async.t_cljs$core$async8526.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async8526");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async8526.
 */
cljs.core.async.__GT_t_cljs$core$async8526 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async8526(f__$1,ch__$1,meta8527){
return (new cljs.core.async.t_cljs$core$async8526(f__$1,ch__$1,meta8527));
});

}

return (new cljs.core.async.t_cljs$core$async8526(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async8529 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async8529 = (function (p,ch,meta8530){
this.p = p;
this.ch = ch;
this.meta8530 = meta8530;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async8529.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_8531,meta8530__$1){
var self__ = this;
var _8531__$1 = this;
return (new cljs.core.async.t_cljs$core$async8529(self__.p,self__.ch,meta8530__$1));
});

cljs.core.async.t_cljs$core$async8529.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_8531){
var self__ = this;
var _8531__$1 = this;
return self__.meta8530;
});

cljs.core.async.t_cljs$core$async8529.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async8529.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async8529.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async8529.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async8529.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async8529.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async8529.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async8529.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta8530","meta8530",1945258062,null)], null);
});

cljs.core.async.t_cljs$core$async8529.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async8529.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async8529";

cljs.core.async.t_cljs$core$async8529.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async8529");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async8529.
 */
cljs.core.async.__GT_t_cljs$core$async8529 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async8529(p__$1,ch__$1,meta8530){
return (new cljs.core.async.t_cljs$core$async8529(p__$1,ch__$1,meta8530));
});

}

return (new cljs.core.async.t_cljs$core$async8529(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__8533 = arguments.length;
switch (G__8533) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__7034__auto___8573 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7034__auto___8573,out){
return (function (){
var f__7035__auto__ = (function (){var switch__6944__auto__ = ((function (c__7034__auto___8573,out){
return (function (state_8554){
var state_val_8555 = (state_8554[(1)]);
if((state_val_8555 === (7))){
var inst_8550 = (state_8554[(2)]);
var state_8554__$1 = state_8554;
var statearr_8556_8574 = state_8554__$1;
(statearr_8556_8574[(2)] = inst_8550);

(statearr_8556_8574[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8555 === (1))){
var state_8554__$1 = state_8554;
var statearr_8557_8575 = state_8554__$1;
(statearr_8557_8575[(2)] = null);

(statearr_8557_8575[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8555 === (4))){
var inst_8536 = (state_8554[(7)]);
var inst_8536__$1 = (state_8554[(2)]);
var inst_8537 = (inst_8536__$1 == null);
var state_8554__$1 = (function (){var statearr_8558 = state_8554;
(statearr_8558[(7)] = inst_8536__$1);

return statearr_8558;
})();
if(cljs.core.truth_(inst_8537)){
var statearr_8559_8576 = state_8554__$1;
(statearr_8559_8576[(1)] = (5));

} else {
var statearr_8560_8577 = state_8554__$1;
(statearr_8560_8577[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8555 === (6))){
var inst_8536 = (state_8554[(7)]);
var inst_8541 = p.call(null,inst_8536);
var state_8554__$1 = state_8554;
if(cljs.core.truth_(inst_8541)){
var statearr_8561_8578 = state_8554__$1;
(statearr_8561_8578[(1)] = (8));

} else {
var statearr_8562_8579 = state_8554__$1;
(statearr_8562_8579[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8555 === (3))){
var inst_8552 = (state_8554[(2)]);
var state_8554__$1 = state_8554;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8554__$1,inst_8552);
} else {
if((state_val_8555 === (2))){
var state_8554__$1 = state_8554;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8554__$1,(4),ch);
} else {
if((state_val_8555 === (11))){
var inst_8544 = (state_8554[(2)]);
var state_8554__$1 = state_8554;
var statearr_8563_8580 = state_8554__$1;
(statearr_8563_8580[(2)] = inst_8544);

(statearr_8563_8580[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8555 === (9))){
var state_8554__$1 = state_8554;
var statearr_8564_8581 = state_8554__$1;
(statearr_8564_8581[(2)] = null);

(statearr_8564_8581[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8555 === (5))){
var inst_8539 = cljs.core.async.close_BANG_.call(null,out);
var state_8554__$1 = state_8554;
var statearr_8565_8582 = state_8554__$1;
(statearr_8565_8582[(2)] = inst_8539);

(statearr_8565_8582[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8555 === (10))){
var inst_8547 = (state_8554[(2)]);
var state_8554__$1 = (function (){var statearr_8566 = state_8554;
(statearr_8566[(8)] = inst_8547);

return statearr_8566;
})();
var statearr_8567_8583 = state_8554__$1;
(statearr_8567_8583[(2)] = null);

(statearr_8567_8583[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8555 === (8))){
var inst_8536 = (state_8554[(7)]);
var state_8554__$1 = state_8554;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_8554__$1,(11),out,inst_8536);
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
});})(c__7034__auto___8573,out))
;
return ((function (switch__6944__auto__,c__7034__auto___8573,out){
return (function() {
var cljs$core$async$state_machine__6945__auto__ = null;
var cljs$core$async$state_machine__6945__auto____0 = (function (){
var statearr_8568 = [null,null,null,null,null,null,null,null,null];
(statearr_8568[(0)] = cljs$core$async$state_machine__6945__auto__);

(statearr_8568[(1)] = (1));

return statearr_8568;
});
var cljs$core$async$state_machine__6945__auto____1 = (function (state_8554){
while(true){
var ret_value__6946__auto__ = (function (){try{while(true){
var result__6947__auto__ = switch__6944__auto__.call(null,state_8554);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6947__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6947__auto__;
}
break;
}
}catch (e8569){if((e8569 instanceof Object)){
var ex__6948__auto__ = e8569;
var statearr_8570_8584 = state_8554;
(statearr_8570_8584[(5)] = ex__6948__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8554);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8569;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8585 = state_8554;
state_8554 = G__8585;
continue;
} else {
return ret_value__6946__auto__;
}
break;
}
});
cljs$core$async$state_machine__6945__auto__ = function(state_8554){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6945__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6945__auto____1.call(this,state_8554);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__6945__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6945__auto____0;
cljs$core$async$state_machine__6945__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6945__auto____1;
return cljs$core$async$state_machine__6945__auto__;
})()
;})(switch__6944__auto__,c__7034__auto___8573,out))
})();
var state__7036__auto__ = (function (){var statearr_8571 = f__7035__auto__.call(null);
(statearr_8571[(6)] = c__7034__auto___8573);

return statearr_8571;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7036__auto__);
});})(c__7034__auto___8573,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__8587 = arguments.length;
switch (G__8587) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
var c__7034__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7034__auto__){
return (function (){
var f__7035__auto__ = (function (){var switch__6944__auto__ = ((function (c__7034__auto__){
return (function (state_8650){
var state_val_8651 = (state_8650[(1)]);
if((state_val_8651 === (7))){
var inst_8646 = (state_8650[(2)]);
var state_8650__$1 = state_8650;
var statearr_8652_8690 = state_8650__$1;
(statearr_8652_8690[(2)] = inst_8646);

(statearr_8652_8690[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8651 === (20))){
var inst_8616 = (state_8650[(7)]);
var inst_8627 = (state_8650[(2)]);
var inst_8628 = cljs.core.next.call(null,inst_8616);
var inst_8602 = inst_8628;
var inst_8603 = null;
var inst_8604 = (0);
var inst_8605 = (0);
var state_8650__$1 = (function (){var statearr_8653 = state_8650;
(statearr_8653[(8)] = inst_8602);

(statearr_8653[(9)] = inst_8604);

(statearr_8653[(10)] = inst_8603);

(statearr_8653[(11)] = inst_8605);

(statearr_8653[(12)] = inst_8627);

return statearr_8653;
})();
var statearr_8654_8691 = state_8650__$1;
(statearr_8654_8691[(2)] = null);

(statearr_8654_8691[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8651 === (1))){
var state_8650__$1 = state_8650;
var statearr_8655_8692 = state_8650__$1;
(statearr_8655_8692[(2)] = null);

(statearr_8655_8692[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8651 === (4))){
var inst_8591 = (state_8650[(13)]);
var inst_8591__$1 = (state_8650[(2)]);
var inst_8592 = (inst_8591__$1 == null);
var state_8650__$1 = (function (){var statearr_8656 = state_8650;
(statearr_8656[(13)] = inst_8591__$1);

return statearr_8656;
})();
if(cljs.core.truth_(inst_8592)){
var statearr_8657_8693 = state_8650__$1;
(statearr_8657_8693[(1)] = (5));

} else {
var statearr_8658_8694 = state_8650__$1;
(statearr_8658_8694[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8651 === (15))){
var state_8650__$1 = state_8650;
var statearr_8662_8695 = state_8650__$1;
(statearr_8662_8695[(2)] = null);

(statearr_8662_8695[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8651 === (21))){
var state_8650__$1 = state_8650;
var statearr_8663_8696 = state_8650__$1;
(statearr_8663_8696[(2)] = null);

(statearr_8663_8696[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8651 === (13))){
var inst_8602 = (state_8650[(8)]);
var inst_8604 = (state_8650[(9)]);
var inst_8603 = (state_8650[(10)]);
var inst_8605 = (state_8650[(11)]);
var inst_8612 = (state_8650[(2)]);
var inst_8613 = (inst_8605 + (1));
var tmp8659 = inst_8602;
var tmp8660 = inst_8604;
var tmp8661 = inst_8603;
var inst_8602__$1 = tmp8659;
var inst_8603__$1 = tmp8661;
var inst_8604__$1 = tmp8660;
var inst_8605__$1 = inst_8613;
var state_8650__$1 = (function (){var statearr_8664 = state_8650;
(statearr_8664[(8)] = inst_8602__$1);

(statearr_8664[(14)] = inst_8612);

(statearr_8664[(9)] = inst_8604__$1);

(statearr_8664[(10)] = inst_8603__$1);

(statearr_8664[(11)] = inst_8605__$1);

return statearr_8664;
})();
var statearr_8665_8697 = state_8650__$1;
(statearr_8665_8697[(2)] = null);

(statearr_8665_8697[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8651 === (22))){
var state_8650__$1 = state_8650;
var statearr_8666_8698 = state_8650__$1;
(statearr_8666_8698[(2)] = null);

(statearr_8666_8698[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8651 === (6))){
var inst_8591 = (state_8650[(13)]);
var inst_8600 = f.call(null,inst_8591);
var inst_8601 = cljs.core.seq.call(null,inst_8600);
var inst_8602 = inst_8601;
var inst_8603 = null;
var inst_8604 = (0);
var inst_8605 = (0);
var state_8650__$1 = (function (){var statearr_8667 = state_8650;
(statearr_8667[(8)] = inst_8602);

(statearr_8667[(9)] = inst_8604);

(statearr_8667[(10)] = inst_8603);

(statearr_8667[(11)] = inst_8605);

return statearr_8667;
})();
var statearr_8668_8699 = state_8650__$1;
(statearr_8668_8699[(2)] = null);

(statearr_8668_8699[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8651 === (17))){
var inst_8616 = (state_8650[(7)]);
var inst_8620 = cljs.core.chunk_first.call(null,inst_8616);
var inst_8621 = cljs.core.chunk_rest.call(null,inst_8616);
var inst_8622 = cljs.core.count.call(null,inst_8620);
var inst_8602 = inst_8621;
var inst_8603 = inst_8620;
var inst_8604 = inst_8622;
var inst_8605 = (0);
var state_8650__$1 = (function (){var statearr_8669 = state_8650;
(statearr_8669[(8)] = inst_8602);

(statearr_8669[(9)] = inst_8604);

(statearr_8669[(10)] = inst_8603);

(statearr_8669[(11)] = inst_8605);

return statearr_8669;
})();
var statearr_8670_8700 = state_8650__$1;
(statearr_8670_8700[(2)] = null);

(statearr_8670_8700[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8651 === (3))){
var inst_8648 = (state_8650[(2)]);
var state_8650__$1 = state_8650;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8650__$1,inst_8648);
} else {
if((state_val_8651 === (12))){
var inst_8636 = (state_8650[(2)]);
var state_8650__$1 = state_8650;
var statearr_8671_8701 = state_8650__$1;
(statearr_8671_8701[(2)] = inst_8636);

(statearr_8671_8701[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8651 === (2))){
var state_8650__$1 = state_8650;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8650__$1,(4),in$);
} else {
if((state_val_8651 === (23))){
var inst_8644 = (state_8650[(2)]);
var state_8650__$1 = state_8650;
var statearr_8672_8702 = state_8650__$1;
(statearr_8672_8702[(2)] = inst_8644);

(statearr_8672_8702[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8651 === (19))){
var inst_8631 = (state_8650[(2)]);
var state_8650__$1 = state_8650;
var statearr_8673_8703 = state_8650__$1;
(statearr_8673_8703[(2)] = inst_8631);

(statearr_8673_8703[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8651 === (11))){
var inst_8616 = (state_8650[(7)]);
var inst_8602 = (state_8650[(8)]);
var inst_8616__$1 = cljs.core.seq.call(null,inst_8602);
var state_8650__$1 = (function (){var statearr_8674 = state_8650;
(statearr_8674[(7)] = inst_8616__$1);

return statearr_8674;
})();
if(inst_8616__$1){
var statearr_8675_8704 = state_8650__$1;
(statearr_8675_8704[(1)] = (14));

} else {
var statearr_8676_8705 = state_8650__$1;
(statearr_8676_8705[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8651 === (9))){
var inst_8638 = (state_8650[(2)]);
var inst_8639 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_8650__$1 = (function (){var statearr_8677 = state_8650;
(statearr_8677[(15)] = inst_8638);

return statearr_8677;
})();
if(cljs.core.truth_(inst_8639)){
var statearr_8678_8706 = state_8650__$1;
(statearr_8678_8706[(1)] = (21));

} else {
var statearr_8679_8707 = state_8650__$1;
(statearr_8679_8707[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8651 === (5))){
var inst_8594 = cljs.core.async.close_BANG_.call(null,out);
var state_8650__$1 = state_8650;
var statearr_8680_8708 = state_8650__$1;
(statearr_8680_8708[(2)] = inst_8594);

(statearr_8680_8708[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8651 === (14))){
var inst_8616 = (state_8650[(7)]);
var inst_8618 = cljs.core.chunked_seq_QMARK_.call(null,inst_8616);
var state_8650__$1 = state_8650;
if(inst_8618){
var statearr_8681_8709 = state_8650__$1;
(statearr_8681_8709[(1)] = (17));

} else {
var statearr_8682_8710 = state_8650__$1;
(statearr_8682_8710[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8651 === (16))){
var inst_8634 = (state_8650[(2)]);
var state_8650__$1 = state_8650;
var statearr_8683_8711 = state_8650__$1;
(statearr_8683_8711[(2)] = inst_8634);

(statearr_8683_8711[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8651 === (10))){
var inst_8603 = (state_8650[(10)]);
var inst_8605 = (state_8650[(11)]);
var inst_8610 = cljs.core._nth.call(null,inst_8603,inst_8605);
var state_8650__$1 = state_8650;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_8650__$1,(13),out,inst_8610);
} else {
if((state_val_8651 === (18))){
var inst_8616 = (state_8650[(7)]);
var inst_8625 = cljs.core.first.call(null,inst_8616);
var state_8650__$1 = state_8650;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_8650__$1,(20),out,inst_8625);
} else {
if((state_val_8651 === (8))){
var inst_8604 = (state_8650[(9)]);
var inst_8605 = (state_8650[(11)]);
var inst_8607 = (inst_8605 < inst_8604);
var inst_8608 = inst_8607;
var state_8650__$1 = state_8650;
if(cljs.core.truth_(inst_8608)){
var statearr_8684_8712 = state_8650__$1;
(statearr_8684_8712[(1)] = (10));

} else {
var statearr_8685_8713 = state_8650__$1;
(statearr_8685_8713[(1)] = (11));

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
});})(c__7034__auto__))
;
return ((function (switch__6944__auto__,c__7034__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__6945__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__6945__auto____0 = (function (){
var statearr_8686 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_8686[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__6945__auto__);

(statearr_8686[(1)] = (1));

return statearr_8686;
});
var cljs$core$async$mapcat_STAR__$_state_machine__6945__auto____1 = (function (state_8650){
while(true){
var ret_value__6946__auto__ = (function (){try{while(true){
var result__6947__auto__ = switch__6944__auto__.call(null,state_8650);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6947__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6947__auto__;
}
break;
}
}catch (e8687){if((e8687 instanceof Object)){
var ex__6948__auto__ = e8687;
var statearr_8688_8714 = state_8650;
(statearr_8688_8714[(5)] = ex__6948__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8650);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8687;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8715 = state_8650;
state_8650 = G__8715;
continue;
} else {
return ret_value__6946__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__6945__auto__ = function(state_8650){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__6945__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__6945__auto____1.call(this,state_8650);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__6945__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__6945__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__6945__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__6945__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__6945__auto__;
})()
;})(switch__6944__auto__,c__7034__auto__))
})();
var state__7036__auto__ = (function (){var statearr_8689 = f__7035__auto__.call(null);
(statearr_8689[(6)] = c__7034__auto__);

return statearr_8689;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7036__auto__);
});})(c__7034__auto__))
);

return c__7034__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__8717 = arguments.length;
switch (G__8717) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
var G__8720 = arguments.length;
switch (G__8720) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
var G__8723 = arguments.length;
switch (G__8723) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__7034__auto___8770 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7034__auto___8770,out){
return (function (){
var f__7035__auto__ = (function (){var switch__6944__auto__ = ((function (c__7034__auto___8770,out){
return (function (state_8747){
var state_val_8748 = (state_8747[(1)]);
if((state_val_8748 === (7))){
var inst_8742 = (state_8747[(2)]);
var state_8747__$1 = state_8747;
var statearr_8749_8771 = state_8747__$1;
(statearr_8749_8771[(2)] = inst_8742);

(statearr_8749_8771[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8748 === (1))){
var inst_8724 = null;
var state_8747__$1 = (function (){var statearr_8750 = state_8747;
(statearr_8750[(7)] = inst_8724);

return statearr_8750;
})();
var statearr_8751_8772 = state_8747__$1;
(statearr_8751_8772[(2)] = null);

(statearr_8751_8772[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8748 === (4))){
var inst_8727 = (state_8747[(8)]);
var inst_8727__$1 = (state_8747[(2)]);
var inst_8728 = (inst_8727__$1 == null);
var inst_8729 = cljs.core.not.call(null,inst_8728);
var state_8747__$1 = (function (){var statearr_8752 = state_8747;
(statearr_8752[(8)] = inst_8727__$1);

return statearr_8752;
})();
if(inst_8729){
var statearr_8753_8773 = state_8747__$1;
(statearr_8753_8773[(1)] = (5));

} else {
var statearr_8754_8774 = state_8747__$1;
(statearr_8754_8774[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8748 === (6))){
var state_8747__$1 = state_8747;
var statearr_8755_8775 = state_8747__$1;
(statearr_8755_8775[(2)] = null);

(statearr_8755_8775[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8748 === (3))){
var inst_8744 = (state_8747[(2)]);
var inst_8745 = cljs.core.async.close_BANG_.call(null,out);
var state_8747__$1 = (function (){var statearr_8756 = state_8747;
(statearr_8756[(9)] = inst_8744);

return statearr_8756;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8747__$1,inst_8745);
} else {
if((state_val_8748 === (2))){
var state_8747__$1 = state_8747;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8747__$1,(4),ch);
} else {
if((state_val_8748 === (11))){
var inst_8727 = (state_8747[(8)]);
var inst_8736 = (state_8747[(2)]);
var inst_8724 = inst_8727;
var state_8747__$1 = (function (){var statearr_8757 = state_8747;
(statearr_8757[(10)] = inst_8736);

(statearr_8757[(7)] = inst_8724);

return statearr_8757;
})();
var statearr_8758_8776 = state_8747__$1;
(statearr_8758_8776[(2)] = null);

(statearr_8758_8776[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8748 === (9))){
var inst_8727 = (state_8747[(8)]);
var state_8747__$1 = state_8747;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_8747__$1,(11),out,inst_8727);
} else {
if((state_val_8748 === (5))){
var inst_8724 = (state_8747[(7)]);
var inst_8727 = (state_8747[(8)]);
var inst_8731 = cljs.core._EQ_.call(null,inst_8727,inst_8724);
var state_8747__$1 = state_8747;
if(inst_8731){
var statearr_8760_8777 = state_8747__$1;
(statearr_8760_8777[(1)] = (8));

} else {
var statearr_8761_8778 = state_8747__$1;
(statearr_8761_8778[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8748 === (10))){
var inst_8739 = (state_8747[(2)]);
var state_8747__$1 = state_8747;
var statearr_8762_8779 = state_8747__$1;
(statearr_8762_8779[(2)] = inst_8739);

(statearr_8762_8779[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8748 === (8))){
var inst_8724 = (state_8747[(7)]);
var tmp8759 = inst_8724;
var inst_8724__$1 = tmp8759;
var state_8747__$1 = (function (){var statearr_8763 = state_8747;
(statearr_8763[(7)] = inst_8724__$1);

return statearr_8763;
})();
var statearr_8764_8780 = state_8747__$1;
(statearr_8764_8780[(2)] = null);

(statearr_8764_8780[(1)] = (2));


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
});})(c__7034__auto___8770,out))
;
return ((function (switch__6944__auto__,c__7034__auto___8770,out){
return (function() {
var cljs$core$async$state_machine__6945__auto__ = null;
var cljs$core$async$state_machine__6945__auto____0 = (function (){
var statearr_8765 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_8765[(0)] = cljs$core$async$state_machine__6945__auto__);

(statearr_8765[(1)] = (1));

return statearr_8765;
});
var cljs$core$async$state_machine__6945__auto____1 = (function (state_8747){
while(true){
var ret_value__6946__auto__ = (function (){try{while(true){
var result__6947__auto__ = switch__6944__auto__.call(null,state_8747);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6947__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6947__auto__;
}
break;
}
}catch (e8766){if((e8766 instanceof Object)){
var ex__6948__auto__ = e8766;
var statearr_8767_8781 = state_8747;
(statearr_8767_8781[(5)] = ex__6948__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8747);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8766;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8782 = state_8747;
state_8747 = G__8782;
continue;
} else {
return ret_value__6946__auto__;
}
break;
}
});
cljs$core$async$state_machine__6945__auto__ = function(state_8747){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6945__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6945__auto____1.call(this,state_8747);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__6945__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6945__auto____0;
cljs$core$async$state_machine__6945__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6945__auto____1;
return cljs$core$async$state_machine__6945__auto__;
})()
;})(switch__6944__auto__,c__7034__auto___8770,out))
})();
var state__7036__auto__ = (function (){var statearr_8768 = f__7035__auto__.call(null);
(statearr_8768[(6)] = c__7034__auto___8770);

return statearr_8768;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7036__auto__);
});})(c__7034__auto___8770,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__8784 = arguments.length;
switch (G__8784) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__7034__auto___8850 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7034__auto___8850,out){
return (function (){
var f__7035__auto__ = (function (){var switch__6944__auto__ = ((function (c__7034__auto___8850,out){
return (function (state_8822){
var state_val_8823 = (state_8822[(1)]);
if((state_val_8823 === (7))){
var inst_8818 = (state_8822[(2)]);
var state_8822__$1 = state_8822;
var statearr_8824_8851 = state_8822__$1;
(statearr_8824_8851[(2)] = inst_8818);

(statearr_8824_8851[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8823 === (1))){
var inst_8785 = (new Array(n));
var inst_8786 = inst_8785;
var inst_8787 = (0);
var state_8822__$1 = (function (){var statearr_8825 = state_8822;
(statearr_8825[(7)] = inst_8786);

(statearr_8825[(8)] = inst_8787);

return statearr_8825;
})();
var statearr_8826_8852 = state_8822__$1;
(statearr_8826_8852[(2)] = null);

(statearr_8826_8852[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8823 === (4))){
var inst_8790 = (state_8822[(9)]);
var inst_8790__$1 = (state_8822[(2)]);
var inst_8791 = (inst_8790__$1 == null);
var inst_8792 = cljs.core.not.call(null,inst_8791);
var state_8822__$1 = (function (){var statearr_8827 = state_8822;
(statearr_8827[(9)] = inst_8790__$1);

return statearr_8827;
})();
if(inst_8792){
var statearr_8828_8853 = state_8822__$1;
(statearr_8828_8853[(1)] = (5));

} else {
var statearr_8829_8854 = state_8822__$1;
(statearr_8829_8854[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8823 === (15))){
var inst_8812 = (state_8822[(2)]);
var state_8822__$1 = state_8822;
var statearr_8830_8855 = state_8822__$1;
(statearr_8830_8855[(2)] = inst_8812);

(statearr_8830_8855[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8823 === (13))){
var state_8822__$1 = state_8822;
var statearr_8831_8856 = state_8822__$1;
(statearr_8831_8856[(2)] = null);

(statearr_8831_8856[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8823 === (6))){
var inst_8787 = (state_8822[(8)]);
var inst_8808 = (inst_8787 > (0));
var state_8822__$1 = state_8822;
if(cljs.core.truth_(inst_8808)){
var statearr_8832_8857 = state_8822__$1;
(statearr_8832_8857[(1)] = (12));

} else {
var statearr_8833_8858 = state_8822__$1;
(statearr_8833_8858[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8823 === (3))){
var inst_8820 = (state_8822[(2)]);
var state_8822__$1 = state_8822;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8822__$1,inst_8820);
} else {
if((state_val_8823 === (12))){
var inst_8786 = (state_8822[(7)]);
var inst_8810 = cljs.core.vec.call(null,inst_8786);
var state_8822__$1 = state_8822;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_8822__$1,(15),out,inst_8810);
} else {
if((state_val_8823 === (2))){
var state_8822__$1 = state_8822;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8822__$1,(4),ch);
} else {
if((state_val_8823 === (11))){
var inst_8802 = (state_8822[(2)]);
var inst_8803 = (new Array(n));
var inst_8786 = inst_8803;
var inst_8787 = (0);
var state_8822__$1 = (function (){var statearr_8834 = state_8822;
(statearr_8834[(7)] = inst_8786);

(statearr_8834[(8)] = inst_8787);

(statearr_8834[(10)] = inst_8802);

return statearr_8834;
})();
var statearr_8835_8859 = state_8822__$1;
(statearr_8835_8859[(2)] = null);

(statearr_8835_8859[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8823 === (9))){
var inst_8786 = (state_8822[(7)]);
var inst_8800 = cljs.core.vec.call(null,inst_8786);
var state_8822__$1 = state_8822;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_8822__$1,(11),out,inst_8800);
} else {
if((state_val_8823 === (5))){
var inst_8786 = (state_8822[(7)]);
var inst_8790 = (state_8822[(9)]);
var inst_8787 = (state_8822[(8)]);
var inst_8795 = (state_8822[(11)]);
var inst_8794 = (inst_8786[inst_8787] = inst_8790);
var inst_8795__$1 = (inst_8787 + (1));
var inst_8796 = (inst_8795__$1 < n);
var state_8822__$1 = (function (){var statearr_8836 = state_8822;
(statearr_8836[(12)] = inst_8794);

(statearr_8836[(11)] = inst_8795__$1);

return statearr_8836;
})();
if(cljs.core.truth_(inst_8796)){
var statearr_8837_8860 = state_8822__$1;
(statearr_8837_8860[(1)] = (8));

} else {
var statearr_8838_8861 = state_8822__$1;
(statearr_8838_8861[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8823 === (14))){
var inst_8815 = (state_8822[(2)]);
var inst_8816 = cljs.core.async.close_BANG_.call(null,out);
var state_8822__$1 = (function (){var statearr_8840 = state_8822;
(statearr_8840[(13)] = inst_8815);

return statearr_8840;
})();
var statearr_8841_8862 = state_8822__$1;
(statearr_8841_8862[(2)] = inst_8816);

(statearr_8841_8862[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8823 === (10))){
var inst_8806 = (state_8822[(2)]);
var state_8822__$1 = state_8822;
var statearr_8842_8863 = state_8822__$1;
(statearr_8842_8863[(2)] = inst_8806);

(statearr_8842_8863[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8823 === (8))){
var inst_8786 = (state_8822[(7)]);
var inst_8795 = (state_8822[(11)]);
var tmp8839 = inst_8786;
var inst_8786__$1 = tmp8839;
var inst_8787 = inst_8795;
var state_8822__$1 = (function (){var statearr_8843 = state_8822;
(statearr_8843[(7)] = inst_8786__$1);

(statearr_8843[(8)] = inst_8787);

return statearr_8843;
})();
var statearr_8844_8864 = state_8822__$1;
(statearr_8844_8864[(2)] = null);

(statearr_8844_8864[(1)] = (2));


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
});})(c__7034__auto___8850,out))
;
return ((function (switch__6944__auto__,c__7034__auto___8850,out){
return (function() {
var cljs$core$async$state_machine__6945__auto__ = null;
var cljs$core$async$state_machine__6945__auto____0 = (function (){
var statearr_8845 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_8845[(0)] = cljs$core$async$state_machine__6945__auto__);

(statearr_8845[(1)] = (1));

return statearr_8845;
});
var cljs$core$async$state_machine__6945__auto____1 = (function (state_8822){
while(true){
var ret_value__6946__auto__ = (function (){try{while(true){
var result__6947__auto__ = switch__6944__auto__.call(null,state_8822);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6947__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6947__auto__;
}
break;
}
}catch (e8846){if((e8846 instanceof Object)){
var ex__6948__auto__ = e8846;
var statearr_8847_8865 = state_8822;
(statearr_8847_8865[(5)] = ex__6948__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8822);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8846;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8866 = state_8822;
state_8822 = G__8866;
continue;
} else {
return ret_value__6946__auto__;
}
break;
}
});
cljs$core$async$state_machine__6945__auto__ = function(state_8822){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6945__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6945__auto____1.call(this,state_8822);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__6945__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6945__auto____0;
cljs$core$async$state_machine__6945__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6945__auto____1;
return cljs$core$async$state_machine__6945__auto__;
})()
;})(switch__6944__auto__,c__7034__auto___8850,out))
})();
var state__7036__auto__ = (function (){var statearr_8848 = f__7035__auto__.call(null);
(statearr_8848[(6)] = c__7034__auto___8850);

return statearr_8848;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7036__auto__);
});})(c__7034__auto___8850,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__8868 = arguments.length;
switch (G__8868) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__7034__auto___8938 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7034__auto___8938,out){
return (function (){
var f__7035__auto__ = (function (){var switch__6944__auto__ = ((function (c__7034__auto___8938,out){
return (function (state_8910){
var state_val_8911 = (state_8910[(1)]);
if((state_val_8911 === (7))){
var inst_8906 = (state_8910[(2)]);
var state_8910__$1 = state_8910;
var statearr_8912_8939 = state_8910__$1;
(statearr_8912_8939[(2)] = inst_8906);

(statearr_8912_8939[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8911 === (1))){
var inst_8869 = [];
var inst_8870 = inst_8869;
var inst_8871 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_8910__$1 = (function (){var statearr_8913 = state_8910;
(statearr_8913[(7)] = inst_8870);

(statearr_8913[(8)] = inst_8871);

return statearr_8913;
})();
var statearr_8914_8940 = state_8910__$1;
(statearr_8914_8940[(2)] = null);

(statearr_8914_8940[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8911 === (4))){
var inst_8874 = (state_8910[(9)]);
var inst_8874__$1 = (state_8910[(2)]);
var inst_8875 = (inst_8874__$1 == null);
var inst_8876 = cljs.core.not.call(null,inst_8875);
var state_8910__$1 = (function (){var statearr_8915 = state_8910;
(statearr_8915[(9)] = inst_8874__$1);

return statearr_8915;
})();
if(inst_8876){
var statearr_8916_8941 = state_8910__$1;
(statearr_8916_8941[(1)] = (5));

} else {
var statearr_8917_8942 = state_8910__$1;
(statearr_8917_8942[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8911 === (15))){
var inst_8900 = (state_8910[(2)]);
var state_8910__$1 = state_8910;
var statearr_8918_8943 = state_8910__$1;
(statearr_8918_8943[(2)] = inst_8900);

(statearr_8918_8943[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8911 === (13))){
var state_8910__$1 = state_8910;
var statearr_8919_8944 = state_8910__$1;
(statearr_8919_8944[(2)] = null);

(statearr_8919_8944[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8911 === (6))){
var inst_8870 = (state_8910[(7)]);
var inst_8895 = inst_8870.length;
var inst_8896 = (inst_8895 > (0));
var state_8910__$1 = state_8910;
if(cljs.core.truth_(inst_8896)){
var statearr_8920_8945 = state_8910__$1;
(statearr_8920_8945[(1)] = (12));

} else {
var statearr_8921_8946 = state_8910__$1;
(statearr_8921_8946[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8911 === (3))){
var inst_8908 = (state_8910[(2)]);
var state_8910__$1 = state_8910;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8910__$1,inst_8908);
} else {
if((state_val_8911 === (12))){
var inst_8870 = (state_8910[(7)]);
var inst_8898 = cljs.core.vec.call(null,inst_8870);
var state_8910__$1 = state_8910;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_8910__$1,(15),out,inst_8898);
} else {
if((state_val_8911 === (2))){
var state_8910__$1 = state_8910;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8910__$1,(4),ch);
} else {
if((state_val_8911 === (11))){
var inst_8878 = (state_8910[(10)]);
var inst_8874 = (state_8910[(9)]);
var inst_8888 = (state_8910[(2)]);
var inst_8889 = [];
var inst_8890 = inst_8889.push(inst_8874);
var inst_8870 = inst_8889;
var inst_8871 = inst_8878;
var state_8910__$1 = (function (){var statearr_8922 = state_8910;
(statearr_8922[(11)] = inst_8890);

(statearr_8922[(7)] = inst_8870);

(statearr_8922[(12)] = inst_8888);

(statearr_8922[(8)] = inst_8871);

return statearr_8922;
})();
var statearr_8923_8947 = state_8910__$1;
(statearr_8923_8947[(2)] = null);

(statearr_8923_8947[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8911 === (9))){
var inst_8870 = (state_8910[(7)]);
var inst_8886 = cljs.core.vec.call(null,inst_8870);
var state_8910__$1 = state_8910;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_8910__$1,(11),out,inst_8886);
} else {
if((state_val_8911 === (5))){
var inst_8878 = (state_8910[(10)]);
var inst_8874 = (state_8910[(9)]);
var inst_8871 = (state_8910[(8)]);
var inst_8878__$1 = f.call(null,inst_8874);
var inst_8879 = cljs.core._EQ_.call(null,inst_8878__$1,inst_8871);
var inst_8880 = cljs.core.keyword_identical_QMARK_.call(null,inst_8871,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_8881 = ((inst_8879) || (inst_8880));
var state_8910__$1 = (function (){var statearr_8924 = state_8910;
(statearr_8924[(10)] = inst_8878__$1);

return statearr_8924;
})();
if(cljs.core.truth_(inst_8881)){
var statearr_8925_8948 = state_8910__$1;
(statearr_8925_8948[(1)] = (8));

} else {
var statearr_8926_8949 = state_8910__$1;
(statearr_8926_8949[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8911 === (14))){
var inst_8903 = (state_8910[(2)]);
var inst_8904 = cljs.core.async.close_BANG_.call(null,out);
var state_8910__$1 = (function (){var statearr_8928 = state_8910;
(statearr_8928[(13)] = inst_8903);

return statearr_8928;
})();
var statearr_8929_8950 = state_8910__$1;
(statearr_8929_8950[(2)] = inst_8904);

(statearr_8929_8950[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8911 === (10))){
var inst_8893 = (state_8910[(2)]);
var state_8910__$1 = state_8910;
var statearr_8930_8951 = state_8910__$1;
(statearr_8930_8951[(2)] = inst_8893);

(statearr_8930_8951[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8911 === (8))){
var inst_8878 = (state_8910[(10)]);
var inst_8874 = (state_8910[(9)]);
var inst_8870 = (state_8910[(7)]);
var inst_8883 = inst_8870.push(inst_8874);
var tmp8927 = inst_8870;
var inst_8870__$1 = tmp8927;
var inst_8871 = inst_8878;
var state_8910__$1 = (function (){var statearr_8931 = state_8910;
(statearr_8931[(14)] = inst_8883);

(statearr_8931[(7)] = inst_8870__$1);

(statearr_8931[(8)] = inst_8871);

return statearr_8931;
})();
var statearr_8932_8952 = state_8910__$1;
(statearr_8932_8952[(2)] = null);

(statearr_8932_8952[(1)] = (2));


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
});})(c__7034__auto___8938,out))
;
return ((function (switch__6944__auto__,c__7034__auto___8938,out){
return (function() {
var cljs$core$async$state_machine__6945__auto__ = null;
var cljs$core$async$state_machine__6945__auto____0 = (function (){
var statearr_8933 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_8933[(0)] = cljs$core$async$state_machine__6945__auto__);

(statearr_8933[(1)] = (1));

return statearr_8933;
});
var cljs$core$async$state_machine__6945__auto____1 = (function (state_8910){
while(true){
var ret_value__6946__auto__ = (function (){try{while(true){
var result__6947__auto__ = switch__6944__auto__.call(null,state_8910);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6947__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6947__auto__;
}
break;
}
}catch (e8934){if((e8934 instanceof Object)){
var ex__6948__auto__ = e8934;
var statearr_8935_8953 = state_8910;
(statearr_8935_8953[(5)] = ex__6948__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8910);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8934;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8954 = state_8910;
state_8910 = G__8954;
continue;
} else {
return ret_value__6946__auto__;
}
break;
}
});
cljs$core$async$state_machine__6945__auto__ = function(state_8910){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6945__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6945__auto____1.call(this,state_8910);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__6945__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6945__auto____0;
cljs$core$async$state_machine__6945__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6945__auto____1;
return cljs$core$async$state_machine__6945__auto__;
})()
;})(switch__6944__auto__,c__7034__auto___8938,out))
})();
var state__7036__auto__ = (function (){var statearr_8936 = f__7035__auto__.call(null);
(statearr_8936[(6)] = c__7034__auto___8938);

return statearr_8936;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7036__auto__);
});})(c__7034__auto___8938,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map
