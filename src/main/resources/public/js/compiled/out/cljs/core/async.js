// Compiled by ClojureScript 1.9.495 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args28158 = [];
var len__26332__auto___28164 = arguments.length;
var i__26333__auto___28165 = (0);
while(true){
if((i__26333__auto___28165 < len__26332__auto___28164)){
args28158.push((arguments[i__26333__auto___28165]));

var G__28166 = (i__26333__auto___28165 + (1));
i__26333__auto___28165 = G__28166;
continue;
} else {
}
break;
}

var G__28160 = args28158.length;
switch (G__28160) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args28158.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async28161 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28161 = (function (f,blockable,meta28162){
this.f = f;
this.blockable = blockable;
this.meta28162 = meta28162;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28161.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28163,meta28162__$1){
var self__ = this;
var _28163__$1 = this;
return (new cljs.core.async.t_cljs$core$async28161(self__.f,self__.blockable,meta28162__$1));
});

cljs.core.async.t_cljs$core$async28161.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28163){
var self__ = this;
var _28163__$1 = this;
return self__.meta28162;
});

cljs.core.async.t_cljs$core$async28161.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28161.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async28161.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async28161.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async28161.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta28162","meta28162",1868680174,null)], null);
});

cljs.core.async.t_cljs$core$async28161.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28161.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28161";

cljs.core.async.t_cljs$core$async28161.cljs$lang$ctorPrWriter = (function (this__25830__auto__,writer__25831__auto__,opt__25832__auto__){
return cljs.core._write.call(null,writer__25831__auto__,"cljs.core.async/t_cljs$core$async28161");
});

cljs.core.async.__GT_t_cljs$core$async28161 = (function cljs$core$async$__GT_t_cljs$core$async28161(f__$1,blockable__$1,meta28162){
return (new cljs.core.async.t_cljs$core$async28161(f__$1,blockable__$1,meta28162));
});

}

return (new cljs.core.async.t_cljs$core$async28161(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
if((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$))){
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
var args28170 = [];
var len__26332__auto___28173 = arguments.length;
var i__26333__auto___28174 = (0);
while(true){
if((i__26333__auto___28174 < len__26332__auto___28173)){
args28170.push((arguments[i__26333__auto___28174]));

var G__28175 = (i__26333__auto___28174 + (1));
i__26333__auto___28174 = G__28175;
continue;
} else {
}
break;
}

var G__28172 = args28170.length;
switch (G__28172) {
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
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args28170.length)].join('')));

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
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("buffer must be supplied when transducer is"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("buf-or-n")].join('')));
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
var args28177 = [];
var len__26332__auto___28180 = arguments.length;
var i__26333__auto___28181 = (0);
while(true){
if((i__26333__auto___28181 < len__26332__auto___28180)){
args28177.push((arguments[i__26333__auto___28181]));

var G__28182 = (i__26333__auto___28181 + (1));
i__26333__auto___28181 = G__28182;
continue;
} else {
}
break;
}

var G__28179 = args28177.length;
switch (G__28179) {
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
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args28177.length)].join('')));

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
var args28184 = [];
var len__26332__auto___28187 = arguments.length;
var i__26333__auto___28188 = (0);
while(true){
if((i__26333__auto___28188 < len__26332__auto___28187)){
args28184.push((arguments[i__26333__auto___28188]));

var G__28189 = (i__26333__auto___28188 + (1));
i__26333__auto___28188 = G__28189;
continue;
} else {
}
break;
}

var G__28186 = args28184.length;
switch (G__28186) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args28184.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_28191 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_28191);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_28191,ret){
return (function (){
return fn1.call(null,val_28191);
});})(val_28191,ret))
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
var args28192 = [];
var len__26332__auto___28195 = arguments.length;
var i__26333__auto___28196 = (0);
while(true){
if((i__26333__auto___28196 < len__26332__auto___28195)){
args28192.push((arguments[i__26333__auto___28196]));

var G__28197 = (i__26333__auto___28196 + (1));
i__26333__auto___28196 = G__28197;
continue;
} else {
}
break;
}

var G__28194 = args28192.length;
switch (G__28194) {
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
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args28192.length)].join('')));

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
var n__26142__auto___28199 = n;
var x_28200 = (0);
while(true){
if((x_28200 < n__26142__auto___28199)){
(a[x_28200] = (0));

var G__28201 = (x_28200 + (1));
x_28200 = G__28201;
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

var G__28202 = (i + (1));
i = G__28202;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async28206 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28206 = (function (flag,meta28207){
this.flag = flag;
this.meta28207 = meta28207;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28206.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_28208,meta28207__$1){
var self__ = this;
var _28208__$1 = this;
return (new cljs.core.async.t_cljs$core$async28206(self__.flag,meta28207__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async28206.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_28208){
var self__ = this;
var _28208__$1 = this;
return self__.meta28207;
});})(flag))
;

cljs.core.async.t_cljs$core$async28206.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28206.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async28206.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async28206.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async28206.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta28207","meta28207",-1825458930,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async28206.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28206.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28206";

cljs.core.async.t_cljs$core$async28206.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__25830__auto__,writer__25831__auto__,opt__25832__auto__){
return cljs.core._write.call(null,writer__25831__auto__,"cljs.core.async/t_cljs$core$async28206");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async28206 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async28206(flag__$1,meta28207){
return (new cljs.core.async.t_cljs$core$async28206(flag__$1,meta28207));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async28206(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async28212 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28212 = (function (flag,cb,meta28213){
this.flag = flag;
this.cb = cb;
this.meta28213 = meta28213;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28212.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28214,meta28213__$1){
var self__ = this;
var _28214__$1 = this;
return (new cljs.core.async.t_cljs$core$async28212(self__.flag,self__.cb,meta28213__$1));
});

cljs.core.async.t_cljs$core$async28212.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28214){
var self__ = this;
var _28214__$1 = this;
return self__.meta28213;
});

cljs.core.async.t_cljs$core$async28212.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28212.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async28212.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async28212.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async28212.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta28213","meta28213",-1943047260,null)], null);
});

cljs.core.async.t_cljs$core$async28212.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28212.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28212";

cljs.core.async.t_cljs$core$async28212.cljs$lang$ctorPrWriter = (function (this__25830__auto__,writer__25831__auto__,opt__25832__auto__){
return cljs.core._write.call(null,writer__25831__auto__,"cljs.core.async/t_cljs$core$async28212");
});

cljs.core.async.__GT_t_cljs$core$async28212 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async28212(flag__$1,cb__$1,meta28213){
return (new cljs.core.async.t_cljs$core$async28212(flag__$1,cb__$1,meta28213));
});

}

return (new cljs.core.async.t_cljs$core$async28212(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__28215_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__28215_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__28216_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__28216_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__25219__auto__ = wport;
if(cljs.core.truth_(or__25219__auto__)){
return or__25219__auto__;
} else {
return port;
}
})()], null));
} else {
var G__28217 = (i + (1));
i = G__28217;
continue;
}
} else {
return null;
}
break;
}
})();
var or__25219__auto__ = ret;
if(cljs.core.truth_(or__25219__auto__)){
return or__25219__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__25207__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__25207__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__25207__auto__;
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
var args__26339__auto__ = [];
var len__26332__auto___28223 = arguments.length;
var i__26333__auto___28224 = (0);
while(true){
if((i__26333__auto___28224 < len__26332__auto___28223)){
args__26339__auto__.push((arguments[i__26333__auto___28224]));

var G__28225 = (i__26333__auto___28224 + (1));
i__26333__auto___28224 = G__28225;
continue;
} else {
}
break;
}

var argseq__26340__auto__ = ((((1) < args__26339__auto__.length))?(new cljs.core.IndexedSeq(args__26339__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26340__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__28220){
var map__28221 = p__28220;
var map__28221__$1 = ((((!((map__28221 == null)))?((((map__28221.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28221.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28221):map__28221);
var opts = map__28221__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq28218){
var G__28219 = cljs.core.first.call(null,seq28218);
var seq28218__$1 = cljs.core.next.call(null,seq28218);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__28219,seq28218__$1);
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
var args28226 = [];
var len__26332__auto___28276 = arguments.length;
var i__26333__auto___28277 = (0);
while(true){
if((i__26333__auto___28277 < len__26332__auto___28276)){
args28226.push((arguments[i__26333__auto___28277]));

var G__28278 = (i__26333__auto___28277 + (1));
i__26333__auto___28277 = G__28278;
continue;
} else {
}
break;
}

var G__28228 = args28226.length;
switch (G__28228) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args28226.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__28113__auto___28280 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28113__auto___28280){
return (function (){
var f__28114__auto__ = (function (){var switch__28001__auto__ = ((function (c__28113__auto___28280){
return (function (state_28252){
var state_val_28253 = (state_28252[(1)]);
if((state_val_28253 === (7))){
var inst_28248 = (state_28252[(2)]);
var state_28252__$1 = state_28252;
var statearr_28254_28281 = state_28252__$1;
(statearr_28254_28281[(2)] = inst_28248);

(statearr_28254_28281[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28253 === (1))){
var state_28252__$1 = state_28252;
var statearr_28255_28282 = state_28252__$1;
(statearr_28255_28282[(2)] = null);

(statearr_28255_28282[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28253 === (4))){
var inst_28231 = (state_28252[(7)]);
var inst_28231__$1 = (state_28252[(2)]);
var inst_28232 = (inst_28231__$1 == null);
var state_28252__$1 = (function (){var statearr_28256 = state_28252;
(statearr_28256[(7)] = inst_28231__$1);

return statearr_28256;
})();
if(cljs.core.truth_(inst_28232)){
var statearr_28257_28283 = state_28252__$1;
(statearr_28257_28283[(1)] = (5));

} else {
var statearr_28258_28284 = state_28252__$1;
(statearr_28258_28284[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28253 === (13))){
var state_28252__$1 = state_28252;
var statearr_28259_28285 = state_28252__$1;
(statearr_28259_28285[(2)] = null);

(statearr_28259_28285[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28253 === (6))){
var inst_28231 = (state_28252[(7)]);
var state_28252__$1 = state_28252;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28252__$1,(11),to,inst_28231);
} else {
if((state_val_28253 === (3))){
var inst_28250 = (state_28252[(2)]);
var state_28252__$1 = state_28252;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28252__$1,inst_28250);
} else {
if((state_val_28253 === (12))){
var state_28252__$1 = state_28252;
var statearr_28260_28286 = state_28252__$1;
(statearr_28260_28286[(2)] = null);

(statearr_28260_28286[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28253 === (2))){
var state_28252__$1 = state_28252;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28252__$1,(4),from);
} else {
if((state_val_28253 === (11))){
var inst_28241 = (state_28252[(2)]);
var state_28252__$1 = state_28252;
if(cljs.core.truth_(inst_28241)){
var statearr_28261_28287 = state_28252__$1;
(statearr_28261_28287[(1)] = (12));

} else {
var statearr_28262_28288 = state_28252__$1;
(statearr_28262_28288[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28253 === (9))){
var state_28252__$1 = state_28252;
var statearr_28263_28289 = state_28252__$1;
(statearr_28263_28289[(2)] = null);

(statearr_28263_28289[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28253 === (5))){
var state_28252__$1 = state_28252;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28264_28290 = state_28252__$1;
(statearr_28264_28290[(1)] = (8));

} else {
var statearr_28265_28291 = state_28252__$1;
(statearr_28265_28291[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28253 === (14))){
var inst_28246 = (state_28252[(2)]);
var state_28252__$1 = state_28252;
var statearr_28266_28292 = state_28252__$1;
(statearr_28266_28292[(2)] = inst_28246);

(statearr_28266_28292[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28253 === (10))){
var inst_28238 = (state_28252[(2)]);
var state_28252__$1 = state_28252;
var statearr_28267_28293 = state_28252__$1;
(statearr_28267_28293[(2)] = inst_28238);

(statearr_28267_28293[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28253 === (8))){
var inst_28235 = cljs.core.async.close_BANG_.call(null,to);
var state_28252__$1 = state_28252;
var statearr_28268_28294 = state_28252__$1;
(statearr_28268_28294[(2)] = inst_28235);

(statearr_28268_28294[(1)] = (10));


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
});})(c__28113__auto___28280))
;
return ((function (switch__28001__auto__,c__28113__auto___28280){
return (function() {
var cljs$core$async$state_machine__28002__auto__ = null;
var cljs$core$async$state_machine__28002__auto____0 = (function (){
var statearr_28272 = [null,null,null,null,null,null,null,null];
(statearr_28272[(0)] = cljs$core$async$state_machine__28002__auto__);

(statearr_28272[(1)] = (1));

return statearr_28272;
});
var cljs$core$async$state_machine__28002__auto____1 = (function (state_28252){
while(true){
var ret_value__28003__auto__ = (function (){try{while(true){
var result__28004__auto__ = switch__28001__auto__.call(null,state_28252);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28004__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28004__auto__;
}
break;
}
}catch (e28273){if((e28273 instanceof Object)){
var ex__28005__auto__ = e28273;
var statearr_28274_28295 = state_28252;
(statearr_28274_28295[(5)] = ex__28005__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28252);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28273;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28003__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28296 = state_28252;
state_28252 = G__28296;
continue;
} else {
return ret_value__28003__auto__;
}
break;
}
});
cljs$core$async$state_machine__28002__auto__ = function(state_28252){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28002__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28002__auto____1.call(this,state_28252);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28002__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28002__auto____0;
cljs$core$async$state_machine__28002__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28002__auto____1;
return cljs$core$async$state_machine__28002__auto__;
})()
;})(switch__28001__auto__,c__28113__auto___28280))
})();
var state__28115__auto__ = (function (){var statearr_28275 = f__28114__auto__.call(null);
(statearr_28275[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28113__auto___28280);

return statearr_28275;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28115__auto__);
});})(c__28113__auto___28280))
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
return (function (p__28484){
var vec__28485 = p__28484;
var v = cljs.core.nth.call(null,vec__28485,(0),null);
var p = cljs.core.nth.call(null,vec__28485,(1),null);
var job = vec__28485;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__28113__auto___28671 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28113__auto___28671,res,vec__28485,v,p,job,jobs,results){
return (function (){
var f__28114__auto__ = (function (){var switch__28001__auto__ = ((function (c__28113__auto___28671,res,vec__28485,v,p,job,jobs,results){
return (function (state_28492){
var state_val_28493 = (state_28492[(1)]);
if((state_val_28493 === (1))){
var state_28492__$1 = state_28492;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28492__$1,(2),res,v);
} else {
if((state_val_28493 === (2))){
var inst_28489 = (state_28492[(2)]);
var inst_28490 = cljs.core.async.close_BANG_.call(null,res);
var state_28492__$1 = (function (){var statearr_28494 = state_28492;
(statearr_28494[(7)] = inst_28489);

return statearr_28494;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28492__$1,inst_28490);
} else {
return null;
}
}
});})(c__28113__auto___28671,res,vec__28485,v,p,job,jobs,results))
;
return ((function (switch__28001__auto__,c__28113__auto___28671,res,vec__28485,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28002__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28002__auto____0 = (function (){
var statearr_28498 = [null,null,null,null,null,null,null,null];
(statearr_28498[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28002__auto__);

(statearr_28498[(1)] = (1));

return statearr_28498;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28002__auto____1 = (function (state_28492){
while(true){
var ret_value__28003__auto__ = (function (){try{while(true){
var result__28004__auto__ = switch__28001__auto__.call(null,state_28492);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28004__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28004__auto__;
}
break;
}
}catch (e28499){if((e28499 instanceof Object)){
var ex__28005__auto__ = e28499;
var statearr_28500_28672 = state_28492;
(statearr_28500_28672[(5)] = ex__28005__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28492);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28499;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28003__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28673 = state_28492;
state_28492 = G__28673;
continue;
} else {
return ret_value__28003__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28002__auto__ = function(state_28492){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28002__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28002__auto____1.call(this,state_28492);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28002__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28002__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28002__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28002__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28002__auto__;
})()
;})(switch__28001__auto__,c__28113__auto___28671,res,vec__28485,v,p,job,jobs,results))
})();
var state__28115__auto__ = (function (){var statearr_28501 = f__28114__auto__.call(null);
(statearr_28501[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28113__auto___28671);

return statearr_28501;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28115__auto__);
});})(c__28113__auto___28671,res,vec__28485,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__28502){
var vec__28503 = p__28502;
var v = cljs.core.nth.call(null,vec__28503,(0),null);
var p = cljs.core.nth.call(null,vec__28503,(1),null);
var job = vec__28503;
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
var n__26142__auto___28674 = n;
var __28675 = (0);
while(true){
if((__28675 < n__26142__auto___28674)){
var G__28506_28676 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__28506_28676) {
case "compute":
var c__28113__auto___28678 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__28675,c__28113__auto___28678,G__28506_28676,n__26142__auto___28674,jobs,results,process,async){
return (function (){
var f__28114__auto__ = (function (){var switch__28001__auto__ = ((function (__28675,c__28113__auto___28678,G__28506_28676,n__26142__auto___28674,jobs,results,process,async){
return (function (state_28519){
var state_val_28520 = (state_28519[(1)]);
if((state_val_28520 === (1))){
var state_28519__$1 = state_28519;
var statearr_28521_28679 = state_28519__$1;
(statearr_28521_28679[(2)] = null);

(statearr_28521_28679[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28520 === (2))){
var state_28519__$1 = state_28519;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28519__$1,(4),jobs);
} else {
if((state_val_28520 === (3))){
var inst_28517 = (state_28519[(2)]);
var state_28519__$1 = state_28519;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28519__$1,inst_28517);
} else {
if((state_val_28520 === (4))){
var inst_28509 = (state_28519[(2)]);
var inst_28510 = process.call(null,inst_28509);
var state_28519__$1 = state_28519;
if(cljs.core.truth_(inst_28510)){
var statearr_28522_28680 = state_28519__$1;
(statearr_28522_28680[(1)] = (5));

} else {
var statearr_28523_28681 = state_28519__$1;
(statearr_28523_28681[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28520 === (5))){
var state_28519__$1 = state_28519;
var statearr_28524_28682 = state_28519__$1;
(statearr_28524_28682[(2)] = null);

(statearr_28524_28682[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28520 === (6))){
var state_28519__$1 = state_28519;
var statearr_28525_28683 = state_28519__$1;
(statearr_28525_28683[(2)] = null);

(statearr_28525_28683[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28520 === (7))){
var inst_28515 = (state_28519[(2)]);
var state_28519__$1 = state_28519;
var statearr_28526_28684 = state_28519__$1;
(statearr_28526_28684[(2)] = inst_28515);

(statearr_28526_28684[(1)] = (3));


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
});})(__28675,c__28113__auto___28678,G__28506_28676,n__26142__auto___28674,jobs,results,process,async))
;
return ((function (__28675,switch__28001__auto__,c__28113__auto___28678,G__28506_28676,n__26142__auto___28674,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28002__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28002__auto____0 = (function (){
var statearr_28530 = [null,null,null,null,null,null,null];
(statearr_28530[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28002__auto__);

(statearr_28530[(1)] = (1));

return statearr_28530;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28002__auto____1 = (function (state_28519){
while(true){
var ret_value__28003__auto__ = (function (){try{while(true){
var result__28004__auto__ = switch__28001__auto__.call(null,state_28519);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28004__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28004__auto__;
}
break;
}
}catch (e28531){if((e28531 instanceof Object)){
var ex__28005__auto__ = e28531;
var statearr_28532_28685 = state_28519;
(statearr_28532_28685[(5)] = ex__28005__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28519);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28531;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28003__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28686 = state_28519;
state_28519 = G__28686;
continue;
} else {
return ret_value__28003__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28002__auto__ = function(state_28519){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28002__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28002__auto____1.call(this,state_28519);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28002__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28002__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28002__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28002__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28002__auto__;
})()
;})(__28675,switch__28001__auto__,c__28113__auto___28678,G__28506_28676,n__26142__auto___28674,jobs,results,process,async))
})();
var state__28115__auto__ = (function (){var statearr_28533 = f__28114__auto__.call(null);
(statearr_28533[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28113__auto___28678);

return statearr_28533;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28115__auto__);
});})(__28675,c__28113__auto___28678,G__28506_28676,n__26142__auto___28674,jobs,results,process,async))
);


break;
case "async":
var c__28113__auto___28687 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__28675,c__28113__auto___28687,G__28506_28676,n__26142__auto___28674,jobs,results,process,async){
return (function (){
var f__28114__auto__ = (function (){var switch__28001__auto__ = ((function (__28675,c__28113__auto___28687,G__28506_28676,n__26142__auto___28674,jobs,results,process,async){
return (function (state_28546){
var state_val_28547 = (state_28546[(1)]);
if((state_val_28547 === (1))){
var state_28546__$1 = state_28546;
var statearr_28548_28688 = state_28546__$1;
(statearr_28548_28688[(2)] = null);

(statearr_28548_28688[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28547 === (2))){
var state_28546__$1 = state_28546;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28546__$1,(4),jobs);
} else {
if((state_val_28547 === (3))){
var inst_28544 = (state_28546[(2)]);
var state_28546__$1 = state_28546;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28546__$1,inst_28544);
} else {
if((state_val_28547 === (4))){
var inst_28536 = (state_28546[(2)]);
var inst_28537 = async.call(null,inst_28536);
var state_28546__$1 = state_28546;
if(cljs.core.truth_(inst_28537)){
var statearr_28549_28689 = state_28546__$1;
(statearr_28549_28689[(1)] = (5));

} else {
var statearr_28550_28690 = state_28546__$1;
(statearr_28550_28690[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28547 === (5))){
var state_28546__$1 = state_28546;
var statearr_28551_28691 = state_28546__$1;
(statearr_28551_28691[(2)] = null);

(statearr_28551_28691[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28547 === (6))){
var state_28546__$1 = state_28546;
var statearr_28552_28692 = state_28546__$1;
(statearr_28552_28692[(2)] = null);

(statearr_28552_28692[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28547 === (7))){
var inst_28542 = (state_28546[(2)]);
var state_28546__$1 = state_28546;
var statearr_28553_28693 = state_28546__$1;
(statearr_28553_28693[(2)] = inst_28542);

(statearr_28553_28693[(1)] = (3));


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
});})(__28675,c__28113__auto___28687,G__28506_28676,n__26142__auto___28674,jobs,results,process,async))
;
return ((function (__28675,switch__28001__auto__,c__28113__auto___28687,G__28506_28676,n__26142__auto___28674,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28002__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28002__auto____0 = (function (){
var statearr_28557 = [null,null,null,null,null,null,null];
(statearr_28557[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28002__auto__);

(statearr_28557[(1)] = (1));

return statearr_28557;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28002__auto____1 = (function (state_28546){
while(true){
var ret_value__28003__auto__ = (function (){try{while(true){
var result__28004__auto__ = switch__28001__auto__.call(null,state_28546);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28004__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28004__auto__;
}
break;
}
}catch (e28558){if((e28558 instanceof Object)){
var ex__28005__auto__ = e28558;
var statearr_28559_28694 = state_28546;
(statearr_28559_28694[(5)] = ex__28005__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28546);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28558;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28003__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28695 = state_28546;
state_28546 = G__28695;
continue;
} else {
return ret_value__28003__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28002__auto__ = function(state_28546){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28002__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28002__auto____1.call(this,state_28546);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28002__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28002__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28002__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28002__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28002__auto__;
})()
;})(__28675,switch__28001__auto__,c__28113__auto___28687,G__28506_28676,n__26142__auto___28674,jobs,results,process,async))
})();
var state__28115__auto__ = (function (){var statearr_28560 = f__28114__auto__.call(null);
(statearr_28560[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28113__auto___28687);

return statearr_28560;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28115__auto__);
});})(__28675,c__28113__auto___28687,G__28506_28676,n__26142__auto___28674,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)].join('')));

}

var G__28696 = (__28675 + (1));
__28675 = G__28696;
continue;
} else {
}
break;
}

var c__28113__auto___28697 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28113__auto___28697,jobs,results,process,async){
return (function (){
var f__28114__auto__ = (function (){var switch__28001__auto__ = ((function (c__28113__auto___28697,jobs,results,process,async){
return (function (state_28582){
var state_val_28583 = (state_28582[(1)]);
if((state_val_28583 === (1))){
var state_28582__$1 = state_28582;
var statearr_28584_28698 = state_28582__$1;
(statearr_28584_28698[(2)] = null);

(statearr_28584_28698[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28583 === (2))){
var state_28582__$1 = state_28582;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28582__$1,(4),from);
} else {
if((state_val_28583 === (3))){
var inst_28580 = (state_28582[(2)]);
var state_28582__$1 = state_28582;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28582__$1,inst_28580);
} else {
if((state_val_28583 === (4))){
var inst_28563 = (state_28582[(7)]);
var inst_28563__$1 = (state_28582[(2)]);
var inst_28564 = (inst_28563__$1 == null);
var state_28582__$1 = (function (){var statearr_28585 = state_28582;
(statearr_28585[(7)] = inst_28563__$1);

return statearr_28585;
})();
if(cljs.core.truth_(inst_28564)){
var statearr_28586_28699 = state_28582__$1;
(statearr_28586_28699[(1)] = (5));

} else {
var statearr_28587_28700 = state_28582__$1;
(statearr_28587_28700[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28583 === (5))){
var inst_28566 = cljs.core.async.close_BANG_.call(null,jobs);
var state_28582__$1 = state_28582;
var statearr_28588_28701 = state_28582__$1;
(statearr_28588_28701[(2)] = inst_28566);

(statearr_28588_28701[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28583 === (6))){
var inst_28563 = (state_28582[(7)]);
var inst_28568 = (state_28582[(8)]);
var inst_28568__$1 = cljs.core.async.chan.call(null,(1));
var inst_28569 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_28570 = [inst_28563,inst_28568__$1];
var inst_28571 = (new cljs.core.PersistentVector(null,2,(5),inst_28569,inst_28570,null));
var state_28582__$1 = (function (){var statearr_28589 = state_28582;
(statearr_28589[(8)] = inst_28568__$1);

return statearr_28589;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28582__$1,(8),jobs,inst_28571);
} else {
if((state_val_28583 === (7))){
var inst_28578 = (state_28582[(2)]);
var state_28582__$1 = state_28582;
var statearr_28590_28702 = state_28582__$1;
(statearr_28590_28702[(2)] = inst_28578);

(statearr_28590_28702[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28583 === (8))){
var inst_28568 = (state_28582[(8)]);
var inst_28573 = (state_28582[(2)]);
var state_28582__$1 = (function (){var statearr_28591 = state_28582;
(statearr_28591[(9)] = inst_28573);

return statearr_28591;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28582__$1,(9),results,inst_28568);
} else {
if((state_val_28583 === (9))){
var inst_28575 = (state_28582[(2)]);
var state_28582__$1 = (function (){var statearr_28592 = state_28582;
(statearr_28592[(10)] = inst_28575);

return statearr_28592;
})();
var statearr_28593_28703 = state_28582__$1;
(statearr_28593_28703[(2)] = null);

(statearr_28593_28703[(1)] = (2));


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
});})(c__28113__auto___28697,jobs,results,process,async))
;
return ((function (switch__28001__auto__,c__28113__auto___28697,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28002__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28002__auto____0 = (function (){
var statearr_28597 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28597[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28002__auto__);

(statearr_28597[(1)] = (1));

return statearr_28597;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28002__auto____1 = (function (state_28582){
while(true){
var ret_value__28003__auto__ = (function (){try{while(true){
var result__28004__auto__ = switch__28001__auto__.call(null,state_28582);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28004__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28004__auto__;
}
break;
}
}catch (e28598){if((e28598 instanceof Object)){
var ex__28005__auto__ = e28598;
var statearr_28599_28704 = state_28582;
(statearr_28599_28704[(5)] = ex__28005__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28582);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28598;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28003__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28705 = state_28582;
state_28582 = G__28705;
continue;
} else {
return ret_value__28003__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28002__auto__ = function(state_28582){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28002__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28002__auto____1.call(this,state_28582);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28002__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28002__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28002__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28002__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28002__auto__;
})()
;})(switch__28001__auto__,c__28113__auto___28697,jobs,results,process,async))
})();
var state__28115__auto__ = (function (){var statearr_28600 = f__28114__auto__.call(null);
(statearr_28600[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28113__auto___28697);

return statearr_28600;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28115__auto__);
});})(c__28113__auto___28697,jobs,results,process,async))
);


var c__28113__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28113__auto__,jobs,results,process,async){
return (function (){
var f__28114__auto__ = (function (){var switch__28001__auto__ = ((function (c__28113__auto__,jobs,results,process,async){
return (function (state_28638){
var state_val_28639 = (state_28638[(1)]);
if((state_val_28639 === (7))){
var inst_28634 = (state_28638[(2)]);
var state_28638__$1 = state_28638;
var statearr_28640_28706 = state_28638__$1;
(statearr_28640_28706[(2)] = inst_28634);

(statearr_28640_28706[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28639 === (20))){
var state_28638__$1 = state_28638;
var statearr_28641_28707 = state_28638__$1;
(statearr_28641_28707[(2)] = null);

(statearr_28641_28707[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28639 === (1))){
var state_28638__$1 = state_28638;
var statearr_28642_28708 = state_28638__$1;
(statearr_28642_28708[(2)] = null);

(statearr_28642_28708[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28639 === (4))){
var inst_28603 = (state_28638[(7)]);
var inst_28603__$1 = (state_28638[(2)]);
var inst_28604 = (inst_28603__$1 == null);
var state_28638__$1 = (function (){var statearr_28643 = state_28638;
(statearr_28643[(7)] = inst_28603__$1);

return statearr_28643;
})();
if(cljs.core.truth_(inst_28604)){
var statearr_28644_28709 = state_28638__$1;
(statearr_28644_28709[(1)] = (5));

} else {
var statearr_28645_28710 = state_28638__$1;
(statearr_28645_28710[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28639 === (15))){
var inst_28616 = (state_28638[(8)]);
var state_28638__$1 = state_28638;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28638__$1,(18),to,inst_28616);
} else {
if((state_val_28639 === (21))){
var inst_28629 = (state_28638[(2)]);
var state_28638__$1 = state_28638;
var statearr_28646_28711 = state_28638__$1;
(statearr_28646_28711[(2)] = inst_28629);

(statearr_28646_28711[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28639 === (13))){
var inst_28631 = (state_28638[(2)]);
var state_28638__$1 = (function (){var statearr_28647 = state_28638;
(statearr_28647[(9)] = inst_28631);

return statearr_28647;
})();
var statearr_28648_28712 = state_28638__$1;
(statearr_28648_28712[(2)] = null);

(statearr_28648_28712[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28639 === (6))){
var inst_28603 = (state_28638[(7)]);
var state_28638__$1 = state_28638;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28638__$1,(11),inst_28603);
} else {
if((state_val_28639 === (17))){
var inst_28624 = (state_28638[(2)]);
var state_28638__$1 = state_28638;
if(cljs.core.truth_(inst_28624)){
var statearr_28649_28713 = state_28638__$1;
(statearr_28649_28713[(1)] = (19));

} else {
var statearr_28650_28714 = state_28638__$1;
(statearr_28650_28714[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28639 === (3))){
var inst_28636 = (state_28638[(2)]);
var state_28638__$1 = state_28638;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28638__$1,inst_28636);
} else {
if((state_val_28639 === (12))){
var inst_28613 = (state_28638[(10)]);
var state_28638__$1 = state_28638;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28638__$1,(14),inst_28613);
} else {
if((state_val_28639 === (2))){
var state_28638__$1 = state_28638;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28638__$1,(4),results);
} else {
if((state_val_28639 === (19))){
var state_28638__$1 = state_28638;
var statearr_28651_28715 = state_28638__$1;
(statearr_28651_28715[(2)] = null);

(statearr_28651_28715[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28639 === (11))){
var inst_28613 = (state_28638[(2)]);
var state_28638__$1 = (function (){var statearr_28652 = state_28638;
(statearr_28652[(10)] = inst_28613);

return statearr_28652;
})();
var statearr_28653_28716 = state_28638__$1;
(statearr_28653_28716[(2)] = null);

(statearr_28653_28716[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28639 === (9))){
var state_28638__$1 = state_28638;
var statearr_28654_28717 = state_28638__$1;
(statearr_28654_28717[(2)] = null);

(statearr_28654_28717[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28639 === (5))){
var state_28638__$1 = state_28638;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28655_28718 = state_28638__$1;
(statearr_28655_28718[(1)] = (8));

} else {
var statearr_28656_28719 = state_28638__$1;
(statearr_28656_28719[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28639 === (14))){
var inst_28616 = (state_28638[(8)]);
var inst_28618 = (state_28638[(11)]);
var inst_28616__$1 = (state_28638[(2)]);
var inst_28617 = (inst_28616__$1 == null);
var inst_28618__$1 = cljs.core.not.call(null,inst_28617);
var state_28638__$1 = (function (){var statearr_28657 = state_28638;
(statearr_28657[(8)] = inst_28616__$1);

(statearr_28657[(11)] = inst_28618__$1);

return statearr_28657;
})();
if(inst_28618__$1){
var statearr_28658_28720 = state_28638__$1;
(statearr_28658_28720[(1)] = (15));

} else {
var statearr_28659_28721 = state_28638__$1;
(statearr_28659_28721[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28639 === (16))){
var inst_28618 = (state_28638[(11)]);
var state_28638__$1 = state_28638;
var statearr_28660_28722 = state_28638__$1;
(statearr_28660_28722[(2)] = inst_28618);

(statearr_28660_28722[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28639 === (10))){
var inst_28610 = (state_28638[(2)]);
var state_28638__$1 = state_28638;
var statearr_28661_28723 = state_28638__$1;
(statearr_28661_28723[(2)] = inst_28610);

(statearr_28661_28723[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28639 === (18))){
var inst_28621 = (state_28638[(2)]);
var state_28638__$1 = state_28638;
var statearr_28662_28724 = state_28638__$1;
(statearr_28662_28724[(2)] = inst_28621);

(statearr_28662_28724[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28639 === (8))){
var inst_28607 = cljs.core.async.close_BANG_.call(null,to);
var state_28638__$1 = state_28638;
var statearr_28663_28725 = state_28638__$1;
(statearr_28663_28725[(2)] = inst_28607);

(statearr_28663_28725[(1)] = (10));


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
});})(c__28113__auto__,jobs,results,process,async))
;
return ((function (switch__28001__auto__,c__28113__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28002__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28002__auto____0 = (function (){
var statearr_28667 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28667[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28002__auto__);

(statearr_28667[(1)] = (1));

return statearr_28667;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28002__auto____1 = (function (state_28638){
while(true){
var ret_value__28003__auto__ = (function (){try{while(true){
var result__28004__auto__ = switch__28001__auto__.call(null,state_28638);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28004__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28004__auto__;
}
break;
}
}catch (e28668){if((e28668 instanceof Object)){
var ex__28005__auto__ = e28668;
var statearr_28669_28726 = state_28638;
(statearr_28669_28726[(5)] = ex__28005__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28638);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28668;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28003__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28727 = state_28638;
state_28638 = G__28727;
continue;
} else {
return ret_value__28003__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28002__auto__ = function(state_28638){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28002__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28002__auto____1.call(this,state_28638);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28002__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28002__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28002__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28002__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28002__auto__;
})()
;})(switch__28001__auto__,c__28113__auto__,jobs,results,process,async))
})();
var state__28115__auto__ = (function (){var statearr_28670 = f__28114__auto__.call(null);
(statearr_28670[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28113__auto__);

return statearr_28670;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28115__auto__);
});})(c__28113__auto__,jobs,results,process,async))
);

return c__28113__auto__;
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
var args28728 = [];
var len__26332__auto___28731 = arguments.length;
var i__26333__auto___28732 = (0);
while(true){
if((i__26333__auto___28732 < len__26332__auto___28731)){
args28728.push((arguments[i__26333__auto___28732]));

var G__28733 = (i__26333__auto___28732 + (1));
i__26333__auto___28732 = G__28733;
continue;
} else {
}
break;
}

var G__28730 = args28728.length;
switch (G__28730) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args28728.length)].join('')));

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
var args28735 = [];
var len__26332__auto___28738 = arguments.length;
var i__26333__auto___28739 = (0);
while(true){
if((i__26333__auto___28739 < len__26332__auto___28738)){
args28735.push((arguments[i__26333__auto___28739]));

var G__28740 = (i__26333__auto___28739 + (1));
i__26333__auto___28739 = G__28740;
continue;
} else {
}
break;
}

var G__28737 = args28735.length;
switch (G__28737) {
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
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args28735.length)].join('')));

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
var args28742 = [];
var len__26332__auto___28795 = arguments.length;
var i__26333__auto___28796 = (0);
while(true){
if((i__26333__auto___28796 < len__26332__auto___28795)){
args28742.push((arguments[i__26333__auto___28796]));

var G__28797 = (i__26333__auto___28796 + (1));
i__26333__auto___28796 = G__28797;
continue;
} else {
}
break;
}

var G__28744 = args28742.length;
switch (G__28744) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args28742.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__28113__auto___28799 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28113__auto___28799,tc,fc){
return (function (){
var f__28114__auto__ = (function (){var switch__28001__auto__ = ((function (c__28113__auto___28799,tc,fc){
return (function (state_28770){
var state_val_28771 = (state_28770[(1)]);
if((state_val_28771 === (7))){
var inst_28766 = (state_28770[(2)]);
var state_28770__$1 = state_28770;
var statearr_28772_28800 = state_28770__$1;
(statearr_28772_28800[(2)] = inst_28766);

(statearr_28772_28800[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28771 === (1))){
var state_28770__$1 = state_28770;
var statearr_28773_28801 = state_28770__$1;
(statearr_28773_28801[(2)] = null);

(statearr_28773_28801[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28771 === (4))){
var inst_28747 = (state_28770[(7)]);
var inst_28747__$1 = (state_28770[(2)]);
var inst_28748 = (inst_28747__$1 == null);
var state_28770__$1 = (function (){var statearr_28774 = state_28770;
(statearr_28774[(7)] = inst_28747__$1);

return statearr_28774;
})();
if(cljs.core.truth_(inst_28748)){
var statearr_28775_28802 = state_28770__$1;
(statearr_28775_28802[(1)] = (5));

} else {
var statearr_28776_28803 = state_28770__$1;
(statearr_28776_28803[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28771 === (13))){
var state_28770__$1 = state_28770;
var statearr_28777_28804 = state_28770__$1;
(statearr_28777_28804[(2)] = null);

(statearr_28777_28804[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28771 === (6))){
var inst_28747 = (state_28770[(7)]);
var inst_28753 = p.call(null,inst_28747);
var state_28770__$1 = state_28770;
if(cljs.core.truth_(inst_28753)){
var statearr_28778_28805 = state_28770__$1;
(statearr_28778_28805[(1)] = (9));

} else {
var statearr_28779_28806 = state_28770__$1;
(statearr_28779_28806[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28771 === (3))){
var inst_28768 = (state_28770[(2)]);
var state_28770__$1 = state_28770;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28770__$1,inst_28768);
} else {
if((state_val_28771 === (12))){
var state_28770__$1 = state_28770;
var statearr_28780_28807 = state_28770__$1;
(statearr_28780_28807[(2)] = null);

(statearr_28780_28807[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28771 === (2))){
var state_28770__$1 = state_28770;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28770__$1,(4),ch);
} else {
if((state_val_28771 === (11))){
var inst_28747 = (state_28770[(7)]);
var inst_28757 = (state_28770[(2)]);
var state_28770__$1 = state_28770;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28770__$1,(8),inst_28757,inst_28747);
} else {
if((state_val_28771 === (9))){
var state_28770__$1 = state_28770;
var statearr_28781_28808 = state_28770__$1;
(statearr_28781_28808[(2)] = tc);

(statearr_28781_28808[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28771 === (5))){
var inst_28750 = cljs.core.async.close_BANG_.call(null,tc);
var inst_28751 = cljs.core.async.close_BANG_.call(null,fc);
var state_28770__$1 = (function (){var statearr_28782 = state_28770;
(statearr_28782[(8)] = inst_28750);

return statearr_28782;
})();
var statearr_28783_28809 = state_28770__$1;
(statearr_28783_28809[(2)] = inst_28751);

(statearr_28783_28809[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28771 === (14))){
var inst_28764 = (state_28770[(2)]);
var state_28770__$1 = state_28770;
var statearr_28784_28810 = state_28770__$1;
(statearr_28784_28810[(2)] = inst_28764);

(statearr_28784_28810[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28771 === (10))){
var state_28770__$1 = state_28770;
var statearr_28785_28811 = state_28770__$1;
(statearr_28785_28811[(2)] = fc);

(statearr_28785_28811[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28771 === (8))){
var inst_28759 = (state_28770[(2)]);
var state_28770__$1 = state_28770;
if(cljs.core.truth_(inst_28759)){
var statearr_28786_28812 = state_28770__$1;
(statearr_28786_28812[(1)] = (12));

} else {
var statearr_28787_28813 = state_28770__$1;
(statearr_28787_28813[(1)] = (13));

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
});})(c__28113__auto___28799,tc,fc))
;
return ((function (switch__28001__auto__,c__28113__auto___28799,tc,fc){
return (function() {
var cljs$core$async$state_machine__28002__auto__ = null;
var cljs$core$async$state_machine__28002__auto____0 = (function (){
var statearr_28791 = [null,null,null,null,null,null,null,null,null];
(statearr_28791[(0)] = cljs$core$async$state_machine__28002__auto__);

(statearr_28791[(1)] = (1));

return statearr_28791;
});
var cljs$core$async$state_machine__28002__auto____1 = (function (state_28770){
while(true){
var ret_value__28003__auto__ = (function (){try{while(true){
var result__28004__auto__ = switch__28001__auto__.call(null,state_28770);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28004__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28004__auto__;
}
break;
}
}catch (e28792){if((e28792 instanceof Object)){
var ex__28005__auto__ = e28792;
var statearr_28793_28814 = state_28770;
(statearr_28793_28814[(5)] = ex__28005__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28770);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28792;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28003__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28815 = state_28770;
state_28770 = G__28815;
continue;
} else {
return ret_value__28003__auto__;
}
break;
}
});
cljs$core$async$state_machine__28002__auto__ = function(state_28770){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28002__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28002__auto____1.call(this,state_28770);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28002__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28002__auto____0;
cljs$core$async$state_machine__28002__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28002__auto____1;
return cljs$core$async$state_machine__28002__auto__;
})()
;})(switch__28001__auto__,c__28113__auto___28799,tc,fc))
})();
var state__28115__auto__ = (function (){var statearr_28794 = f__28114__auto__.call(null);
(statearr_28794[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28113__auto___28799);

return statearr_28794;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28115__auto__);
});})(c__28113__auto___28799,tc,fc))
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
var c__28113__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28113__auto__){
return (function (){
var f__28114__auto__ = (function (){var switch__28001__auto__ = ((function (c__28113__auto__){
return (function (state_28879){
var state_val_28880 = (state_28879[(1)]);
if((state_val_28880 === (7))){
var inst_28875 = (state_28879[(2)]);
var state_28879__$1 = state_28879;
var statearr_28881_28902 = state_28879__$1;
(statearr_28881_28902[(2)] = inst_28875);

(statearr_28881_28902[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28880 === (1))){
var inst_28859 = init;
var state_28879__$1 = (function (){var statearr_28882 = state_28879;
(statearr_28882[(7)] = inst_28859);

return statearr_28882;
})();
var statearr_28883_28903 = state_28879__$1;
(statearr_28883_28903[(2)] = null);

(statearr_28883_28903[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28880 === (4))){
var inst_28862 = (state_28879[(8)]);
var inst_28862__$1 = (state_28879[(2)]);
var inst_28863 = (inst_28862__$1 == null);
var state_28879__$1 = (function (){var statearr_28884 = state_28879;
(statearr_28884[(8)] = inst_28862__$1);

return statearr_28884;
})();
if(cljs.core.truth_(inst_28863)){
var statearr_28885_28904 = state_28879__$1;
(statearr_28885_28904[(1)] = (5));

} else {
var statearr_28886_28905 = state_28879__$1;
(statearr_28886_28905[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28880 === (6))){
var inst_28862 = (state_28879[(8)]);
var inst_28866 = (state_28879[(9)]);
var inst_28859 = (state_28879[(7)]);
var inst_28866__$1 = f.call(null,inst_28859,inst_28862);
var inst_28867 = cljs.core.reduced_QMARK_.call(null,inst_28866__$1);
var state_28879__$1 = (function (){var statearr_28887 = state_28879;
(statearr_28887[(9)] = inst_28866__$1);

return statearr_28887;
})();
if(inst_28867){
var statearr_28888_28906 = state_28879__$1;
(statearr_28888_28906[(1)] = (8));

} else {
var statearr_28889_28907 = state_28879__$1;
(statearr_28889_28907[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28880 === (3))){
var inst_28877 = (state_28879[(2)]);
var state_28879__$1 = state_28879;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28879__$1,inst_28877);
} else {
if((state_val_28880 === (2))){
var state_28879__$1 = state_28879;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28879__$1,(4),ch);
} else {
if((state_val_28880 === (9))){
var inst_28866 = (state_28879[(9)]);
var inst_28859 = inst_28866;
var state_28879__$1 = (function (){var statearr_28890 = state_28879;
(statearr_28890[(7)] = inst_28859);

return statearr_28890;
})();
var statearr_28891_28908 = state_28879__$1;
(statearr_28891_28908[(2)] = null);

(statearr_28891_28908[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28880 === (5))){
var inst_28859 = (state_28879[(7)]);
var state_28879__$1 = state_28879;
var statearr_28892_28909 = state_28879__$1;
(statearr_28892_28909[(2)] = inst_28859);

(statearr_28892_28909[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28880 === (10))){
var inst_28873 = (state_28879[(2)]);
var state_28879__$1 = state_28879;
var statearr_28893_28910 = state_28879__$1;
(statearr_28893_28910[(2)] = inst_28873);

(statearr_28893_28910[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28880 === (8))){
var inst_28866 = (state_28879[(9)]);
var inst_28869 = cljs.core.deref.call(null,inst_28866);
var state_28879__$1 = state_28879;
var statearr_28894_28911 = state_28879__$1;
(statearr_28894_28911[(2)] = inst_28869);

(statearr_28894_28911[(1)] = (10));


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
});})(c__28113__auto__))
;
return ((function (switch__28001__auto__,c__28113__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__28002__auto__ = null;
var cljs$core$async$reduce_$_state_machine__28002__auto____0 = (function (){
var statearr_28898 = [null,null,null,null,null,null,null,null,null,null];
(statearr_28898[(0)] = cljs$core$async$reduce_$_state_machine__28002__auto__);

(statearr_28898[(1)] = (1));

return statearr_28898;
});
var cljs$core$async$reduce_$_state_machine__28002__auto____1 = (function (state_28879){
while(true){
var ret_value__28003__auto__ = (function (){try{while(true){
var result__28004__auto__ = switch__28001__auto__.call(null,state_28879);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28004__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28004__auto__;
}
break;
}
}catch (e28899){if((e28899 instanceof Object)){
var ex__28005__auto__ = e28899;
var statearr_28900_28912 = state_28879;
(statearr_28900_28912[(5)] = ex__28005__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28879);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28899;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28003__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28913 = state_28879;
state_28879 = G__28913;
continue;
} else {
return ret_value__28003__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__28002__auto__ = function(state_28879){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__28002__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__28002__auto____1.call(this,state_28879);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__28002__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__28002__auto____0;
cljs$core$async$reduce_$_state_machine__28002__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__28002__auto____1;
return cljs$core$async$reduce_$_state_machine__28002__auto__;
})()
;})(switch__28001__auto__,c__28113__auto__))
})();
var state__28115__auto__ = (function (){var statearr_28901 = f__28114__auto__.call(null);
(statearr_28901[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28113__auto__);

return statearr_28901;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28115__auto__);
});})(c__28113__auto__))
);

return c__28113__auto__;
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
var args28914 = [];
var len__26332__auto___28966 = arguments.length;
var i__26333__auto___28967 = (0);
while(true){
if((i__26333__auto___28967 < len__26332__auto___28966)){
args28914.push((arguments[i__26333__auto___28967]));

var G__28968 = (i__26333__auto___28967 + (1));
i__26333__auto___28967 = G__28968;
continue;
} else {
}
break;
}

var G__28916 = args28914.length;
switch (G__28916) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args28914.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__28113__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28113__auto__){
return (function (){
var f__28114__auto__ = (function (){var switch__28001__auto__ = ((function (c__28113__auto__){
return (function (state_28941){
var state_val_28942 = (state_28941[(1)]);
if((state_val_28942 === (7))){
var inst_28923 = (state_28941[(2)]);
var state_28941__$1 = state_28941;
var statearr_28943_28970 = state_28941__$1;
(statearr_28943_28970[(2)] = inst_28923);

(statearr_28943_28970[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28942 === (1))){
var inst_28917 = cljs.core.seq.call(null,coll);
var inst_28918 = inst_28917;
var state_28941__$1 = (function (){var statearr_28944 = state_28941;
(statearr_28944[(7)] = inst_28918);

return statearr_28944;
})();
var statearr_28945_28971 = state_28941__$1;
(statearr_28945_28971[(2)] = null);

(statearr_28945_28971[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28942 === (4))){
var inst_28918 = (state_28941[(7)]);
var inst_28921 = cljs.core.first.call(null,inst_28918);
var state_28941__$1 = state_28941;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28941__$1,(7),ch,inst_28921);
} else {
if((state_val_28942 === (13))){
var inst_28935 = (state_28941[(2)]);
var state_28941__$1 = state_28941;
var statearr_28946_28972 = state_28941__$1;
(statearr_28946_28972[(2)] = inst_28935);

(statearr_28946_28972[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28942 === (6))){
var inst_28926 = (state_28941[(2)]);
var state_28941__$1 = state_28941;
if(cljs.core.truth_(inst_28926)){
var statearr_28947_28973 = state_28941__$1;
(statearr_28947_28973[(1)] = (8));

} else {
var statearr_28948_28974 = state_28941__$1;
(statearr_28948_28974[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28942 === (3))){
var inst_28939 = (state_28941[(2)]);
var state_28941__$1 = state_28941;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28941__$1,inst_28939);
} else {
if((state_val_28942 === (12))){
var state_28941__$1 = state_28941;
var statearr_28949_28975 = state_28941__$1;
(statearr_28949_28975[(2)] = null);

(statearr_28949_28975[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28942 === (2))){
var inst_28918 = (state_28941[(7)]);
var state_28941__$1 = state_28941;
if(cljs.core.truth_(inst_28918)){
var statearr_28950_28976 = state_28941__$1;
(statearr_28950_28976[(1)] = (4));

} else {
var statearr_28951_28977 = state_28941__$1;
(statearr_28951_28977[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28942 === (11))){
var inst_28932 = cljs.core.async.close_BANG_.call(null,ch);
var state_28941__$1 = state_28941;
var statearr_28952_28978 = state_28941__$1;
(statearr_28952_28978[(2)] = inst_28932);

(statearr_28952_28978[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28942 === (9))){
var state_28941__$1 = state_28941;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28953_28979 = state_28941__$1;
(statearr_28953_28979[(1)] = (11));

} else {
var statearr_28954_28980 = state_28941__$1;
(statearr_28954_28980[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28942 === (5))){
var inst_28918 = (state_28941[(7)]);
var state_28941__$1 = state_28941;
var statearr_28955_28981 = state_28941__$1;
(statearr_28955_28981[(2)] = inst_28918);

(statearr_28955_28981[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28942 === (10))){
var inst_28937 = (state_28941[(2)]);
var state_28941__$1 = state_28941;
var statearr_28956_28982 = state_28941__$1;
(statearr_28956_28982[(2)] = inst_28937);

(statearr_28956_28982[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28942 === (8))){
var inst_28918 = (state_28941[(7)]);
var inst_28928 = cljs.core.next.call(null,inst_28918);
var inst_28918__$1 = inst_28928;
var state_28941__$1 = (function (){var statearr_28957 = state_28941;
(statearr_28957[(7)] = inst_28918__$1);

return statearr_28957;
})();
var statearr_28958_28983 = state_28941__$1;
(statearr_28958_28983[(2)] = null);

(statearr_28958_28983[(1)] = (2));


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
});})(c__28113__auto__))
;
return ((function (switch__28001__auto__,c__28113__auto__){
return (function() {
var cljs$core$async$state_machine__28002__auto__ = null;
var cljs$core$async$state_machine__28002__auto____0 = (function (){
var statearr_28962 = [null,null,null,null,null,null,null,null];
(statearr_28962[(0)] = cljs$core$async$state_machine__28002__auto__);

(statearr_28962[(1)] = (1));

return statearr_28962;
});
var cljs$core$async$state_machine__28002__auto____1 = (function (state_28941){
while(true){
var ret_value__28003__auto__ = (function (){try{while(true){
var result__28004__auto__ = switch__28001__auto__.call(null,state_28941);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28004__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28004__auto__;
}
break;
}
}catch (e28963){if((e28963 instanceof Object)){
var ex__28005__auto__ = e28963;
var statearr_28964_28984 = state_28941;
(statearr_28964_28984[(5)] = ex__28005__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28941);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28963;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28003__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28985 = state_28941;
state_28941 = G__28985;
continue;
} else {
return ret_value__28003__auto__;
}
break;
}
});
cljs$core$async$state_machine__28002__auto__ = function(state_28941){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28002__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28002__auto____1.call(this,state_28941);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28002__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28002__auto____0;
cljs$core$async$state_machine__28002__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28002__auto____1;
return cljs$core$async$state_machine__28002__auto__;
})()
;})(switch__28001__auto__,c__28113__auto__))
})();
var state__28115__auto__ = (function (){var statearr_28965 = f__28114__auto__.call(null);
(statearr_28965[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28113__auto__);

return statearr_28965;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28115__auto__);
});})(c__28113__auto__))
);

return c__28113__auto__;
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
var x__25887__auto__ = (((_ == null))?null:_);
var m__25888__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__25887__auto__)]);
if(!((m__25888__auto__ == null))){
return m__25888__auto__.call(null,_);
} else {
var m__25888__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__25888__auto____$1 == null))){
return m__25888__auto____$1.call(null,_);
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
var x__25887__auto__ = (((m == null))?null:m);
var m__25888__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__25887__auto__)]);
if(!((m__25888__auto__ == null))){
return m__25888__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__25888__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__25888__auto____$1 == null))){
return m__25888__auto____$1.call(null,m,ch,close_QMARK_);
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
var x__25887__auto__ = (((m == null))?null:m);
var m__25888__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__25887__auto__)]);
if(!((m__25888__auto__ == null))){
return m__25888__auto__.call(null,m,ch);
} else {
var m__25888__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__25888__auto____$1 == null))){
return m__25888__auto____$1.call(null,m,ch);
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
var x__25887__auto__ = (((m == null))?null:m);
var m__25888__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__25887__auto__)]);
if(!((m__25888__auto__ == null))){
return m__25888__auto__.call(null,m);
} else {
var m__25888__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__25888__auto____$1 == null))){
return m__25888__auto____$1.call(null,m);
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
if(typeof cljs.core.async.t_cljs$core$async29211 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29211 = (function (ch,cs,meta29212){
this.ch = ch;
this.cs = cs;
this.meta29212 = meta29212;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29211.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_29213,meta29212__$1){
var self__ = this;
var _29213__$1 = this;
return (new cljs.core.async.t_cljs$core$async29211(self__.ch,self__.cs,meta29212__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async29211.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_29213){
var self__ = this;
var _29213__$1 = this;
return self__.meta29212;
});})(cs))
;

cljs.core.async.t_cljs$core$async29211.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29211.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async29211.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29211.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async29211.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async29211.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async29211.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta29212","meta29212",1626422768,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async29211.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29211.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29211";

cljs.core.async.t_cljs$core$async29211.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__25830__auto__,writer__25831__auto__,opt__25832__auto__){
return cljs.core._write.call(null,writer__25831__auto__,"cljs.core.async/t_cljs$core$async29211");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async29211 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async29211(ch__$1,cs__$1,meta29212){
return (new cljs.core.async.t_cljs$core$async29211(ch__$1,cs__$1,meta29212));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async29211(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__28113__auto___29436 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28113__auto___29436,cs,m,dchan,dctr,done){
return (function (){
var f__28114__auto__ = (function (){var switch__28001__auto__ = ((function (c__28113__auto___29436,cs,m,dchan,dctr,done){
return (function (state_29348){
var state_val_29349 = (state_29348[(1)]);
if((state_val_29349 === (7))){
var inst_29344 = (state_29348[(2)]);
var state_29348__$1 = state_29348;
var statearr_29350_29437 = state_29348__$1;
(statearr_29350_29437[(2)] = inst_29344);

(statearr_29350_29437[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29349 === (20))){
var inst_29247 = (state_29348[(7)]);
var inst_29259 = cljs.core.first.call(null,inst_29247);
var inst_29260 = cljs.core.nth.call(null,inst_29259,(0),null);
var inst_29261 = cljs.core.nth.call(null,inst_29259,(1),null);
var state_29348__$1 = (function (){var statearr_29351 = state_29348;
(statearr_29351[(8)] = inst_29260);

return statearr_29351;
})();
if(cljs.core.truth_(inst_29261)){
var statearr_29352_29438 = state_29348__$1;
(statearr_29352_29438[(1)] = (22));

} else {
var statearr_29353_29439 = state_29348__$1;
(statearr_29353_29439[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29349 === (27))){
var inst_29296 = (state_29348[(9)]);
var inst_29216 = (state_29348[(10)]);
var inst_29289 = (state_29348[(11)]);
var inst_29291 = (state_29348[(12)]);
var inst_29296__$1 = cljs.core._nth.call(null,inst_29289,inst_29291);
var inst_29297 = cljs.core.async.put_BANG_.call(null,inst_29296__$1,inst_29216,done);
var state_29348__$1 = (function (){var statearr_29354 = state_29348;
(statearr_29354[(9)] = inst_29296__$1);

return statearr_29354;
})();
if(cljs.core.truth_(inst_29297)){
var statearr_29355_29440 = state_29348__$1;
(statearr_29355_29440[(1)] = (30));

} else {
var statearr_29356_29441 = state_29348__$1;
(statearr_29356_29441[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29349 === (1))){
var state_29348__$1 = state_29348;
var statearr_29357_29442 = state_29348__$1;
(statearr_29357_29442[(2)] = null);

(statearr_29357_29442[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29349 === (24))){
var inst_29247 = (state_29348[(7)]);
var inst_29266 = (state_29348[(2)]);
var inst_29267 = cljs.core.next.call(null,inst_29247);
var inst_29225 = inst_29267;
var inst_29226 = null;
var inst_29227 = (0);
var inst_29228 = (0);
var state_29348__$1 = (function (){var statearr_29358 = state_29348;
(statearr_29358[(13)] = inst_29227);

(statearr_29358[(14)] = inst_29226);

(statearr_29358[(15)] = inst_29266);

(statearr_29358[(16)] = inst_29228);

(statearr_29358[(17)] = inst_29225);

return statearr_29358;
})();
var statearr_29359_29443 = state_29348__$1;
(statearr_29359_29443[(2)] = null);

(statearr_29359_29443[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29349 === (39))){
var state_29348__$1 = state_29348;
var statearr_29363_29444 = state_29348__$1;
(statearr_29363_29444[(2)] = null);

(statearr_29363_29444[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29349 === (4))){
var inst_29216 = (state_29348[(10)]);
var inst_29216__$1 = (state_29348[(2)]);
var inst_29217 = (inst_29216__$1 == null);
var state_29348__$1 = (function (){var statearr_29364 = state_29348;
(statearr_29364[(10)] = inst_29216__$1);

return statearr_29364;
})();
if(cljs.core.truth_(inst_29217)){
var statearr_29365_29445 = state_29348__$1;
(statearr_29365_29445[(1)] = (5));

} else {
var statearr_29366_29446 = state_29348__$1;
(statearr_29366_29446[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29349 === (15))){
var inst_29227 = (state_29348[(13)]);
var inst_29226 = (state_29348[(14)]);
var inst_29228 = (state_29348[(16)]);
var inst_29225 = (state_29348[(17)]);
var inst_29243 = (state_29348[(2)]);
var inst_29244 = (inst_29228 + (1));
var tmp29360 = inst_29227;
var tmp29361 = inst_29226;
var tmp29362 = inst_29225;
var inst_29225__$1 = tmp29362;
var inst_29226__$1 = tmp29361;
var inst_29227__$1 = tmp29360;
var inst_29228__$1 = inst_29244;
var state_29348__$1 = (function (){var statearr_29367 = state_29348;
(statearr_29367[(13)] = inst_29227__$1);

(statearr_29367[(18)] = inst_29243);

(statearr_29367[(14)] = inst_29226__$1);

(statearr_29367[(16)] = inst_29228__$1);

(statearr_29367[(17)] = inst_29225__$1);

return statearr_29367;
})();
var statearr_29368_29447 = state_29348__$1;
(statearr_29368_29447[(2)] = null);

(statearr_29368_29447[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29349 === (21))){
var inst_29270 = (state_29348[(2)]);
var state_29348__$1 = state_29348;
var statearr_29372_29448 = state_29348__$1;
(statearr_29372_29448[(2)] = inst_29270);

(statearr_29372_29448[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29349 === (31))){
var inst_29296 = (state_29348[(9)]);
var inst_29300 = done.call(null,null);
var inst_29301 = cljs.core.async.untap_STAR_.call(null,m,inst_29296);
var state_29348__$1 = (function (){var statearr_29373 = state_29348;
(statearr_29373[(19)] = inst_29300);

return statearr_29373;
})();
var statearr_29374_29449 = state_29348__$1;
(statearr_29374_29449[(2)] = inst_29301);

(statearr_29374_29449[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29349 === (32))){
var inst_29290 = (state_29348[(20)]);
var inst_29289 = (state_29348[(11)]);
var inst_29291 = (state_29348[(12)]);
var inst_29288 = (state_29348[(21)]);
var inst_29303 = (state_29348[(2)]);
var inst_29304 = (inst_29291 + (1));
var tmp29369 = inst_29290;
var tmp29370 = inst_29289;
var tmp29371 = inst_29288;
var inst_29288__$1 = tmp29371;
var inst_29289__$1 = tmp29370;
var inst_29290__$1 = tmp29369;
var inst_29291__$1 = inst_29304;
var state_29348__$1 = (function (){var statearr_29375 = state_29348;
(statearr_29375[(22)] = inst_29303);

(statearr_29375[(20)] = inst_29290__$1);

(statearr_29375[(11)] = inst_29289__$1);

(statearr_29375[(12)] = inst_29291__$1);

(statearr_29375[(21)] = inst_29288__$1);

return statearr_29375;
})();
var statearr_29376_29450 = state_29348__$1;
(statearr_29376_29450[(2)] = null);

(statearr_29376_29450[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29349 === (40))){
var inst_29316 = (state_29348[(23)]);
var inst_29320 = done.call(null,null);
var inst_29321 = cljs.core.async.untap_STAR_.call(null,m,inst_29316);
var state_29348__$1 = (function (){var statearr_29377 = state_29348;
(statearr_29377[(24)] = inst_29320);

return statearr_29377;
})();
var statearr_29378_29451 = state_29348__$1;
(statearr_29378_29451[(2)] = inst_29321);

(statearr_29378_29451[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29349 === (33))){
var inst_29307 = (state_29348[(25)]);
var inst_29309 = cljs.core.chunked_seq_QMARK_.call(null,inst_29307);
var state_29348__$1 = state_29348;
if(inst_29309){
var statearr_29379_29452 = state_29348__$1;
(statearr_29379_29452[(1)] = (36));

} else {
var statearr_29380_29453 = state_29348__$1;
(statearr_29380_29453[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29349 === (13))){
var inst_29237 = (state_29348[(26)]);
var inst_29240 = cljs.core.async.close_BANG_.call(null,inst_29237);
var state_29348__$1 = state_29348;
var statearr_29381_29454 = state_29348__$1;
(statearr_29381_29454[(2)] = inst_29240);

(statearr_29381_29454[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29349 === (22))){
var inst_29260 = (state_29348[(8)]);
var inst_29263 = cljs.core.async.close_BANG_.call(null,inst_29260);
var state_29348__$1 = state_29348;
var statearr_29382_29455 = state_29348__$1;
(statearr_29382_29455[(2)] = inst_29263);

(statearr_29382_29455[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29349 === (36))){
var inst_29307 = (state_29348[(25)]);
var inst_29311 = cljs.core.chunk_first.call(null,inst_29307);
var inst_29312 = cljs.core.chunk_rest.call(null,inst_29307);
var inst_29313 = cljs.core.count.call(null,inst_29311);
var inst_29288 = inst_29312;
var inst_29289 = inst_29311;
var inst_29290 = inst_29313;
var inst_29291 = (0);
var state_29348__$1 = (function (){var statearr_29383 = state_29348;
(statearr_29383[(20)] = inst_29290);

(statearr_29383[(11)] = inst_29289);

(statearr_29383[(12)] = inst_29291);

(statearr_29383[(21)] = inst_29288);

return statearr_29383;
})();
var statearr_29384_29456 = state_29348__$1;
(statearr_29384_29456[(2)] = null);

(statearr_29384_29456[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29349 === (41))){
var inst_29307 = (state_29348[(25)]);
var inst_29323 = (state_29348[(2)]);
var inst_29324 = cljs.core.next.call(null,inst_29307);
var inst_29288 = inst_29324;
var inst_29289 = null;
var inst_29290 = (0);
var inst_29291 = (0);
var state_29348__$1 = (function (){var statearr_29385 = state_29348;
(statearr_29385[(27)] = inst_29323);

(statearr_29385[(20)] = inst_29290);

(statearr_29385[(11)] = inst_29289);

(statearr_29385[(12)] = inst_29291);

(statearr_29385[(21)] = inst_29288);

return statearr_29385;
})();
var statearr_29386_29457 = state_29348__$1;
(statearr_29386_29457[(2)] = null);

(statearr_29386_29457[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29349 === (43))){
var state_29348__$1 = state_29348;
var statearr_29387_29458 = state_29348__$1;
(statearr_29387_29458[(2)] = null);

(statearr_29387_29458[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29349 === (29))){
var inst_29332 = (state_29348[(2)]);
var state_29348__$1 = state_29348;
var statearr_29388_29459 = state_29348__$1;
(statearr_29388_29459[(2)] = inst_29332);

(statearr_29388_29459[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29349 === (44))){
var inst_29341 = (state_29348[(2)]);
var state_29348__$1 = (function (){var statearr_29389 = state_29348;
(statearr_29389[(28)] = inst_29341);

return statearr_29389;
})();
var statearr_29390_29460 = state_29348__$1;
(statearr_29390_29460[(2)] = null);

(statearr_29390_29460[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29349 === (6))){
var inst_29280 = (state_29348[(29)]);
var inst_29279 = cljs.core.deref.call(null,cs);
var inst_29280__$1 = cljs.core.keys.call(null,inst_29279);
var inst_29281 = cljs.core.count.call(null,inst_29280__$1);
var inst_29282 = cljs.core.reset_BANG_.call(null,dctr,inst_29281);
var inst_29287 = cljs.core.seq.call(null,inst_29280__$1);
var inst_29288 = inst_29287;
var inst_29289 = null;
var inst_29290 = (0);
var inst_29291 = (0);
var state_29348__$1 = (function (){var statearr_29391 = state_29348;
(statearr_29391[(30)] = inst_29282);

(statearr_29391[(20)] = inst_29290);

(statearr_29391[(29)] = inst_29280__$1);

(statearr_29391[(11)] = inst_29289);

(statearr_29391[(12)] = inst_29291);

(statearr_29391[(21)] = inst_29288);

return statearr_29391;
})();
var statearr_29392_29461 = state_29348__$1;
(statearr_29392_29461[(2)] = null);

(statearr_29392_29461[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29349 === (28))){
var inst_29307 = (state_29348[(25)]);
var inst_29288 = (state_29348[(21)]);
var inst_29307__$1 = cljs.core.seq.call(null,inst_29288);
var state_29348__$1 = (function (){var statearr_29393 = state_29348;
(statearr_29393[(25)] = inst_29307__$1);

return statearr_29393;
})();
if(inst_29307__$1){
var statearr_29394_29462 = state_29348__$1;
(statearr_29394_29462[(1)] = (33));

} else {
var statearr_29395_29463 = state_29348__$1;
(statearr_29395_29463[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29349 === (25))){
var inst_29290 = (state_29348[(20)]);
var inst_29291 = (state_29348[(12)]);
var inst_29293 = (inst_29291 < inst_29290);
var inst_29294 = inst_29293;
var state_29348__$1 = state_29348;
if(cljs.core.truth_(inst_29294)){
var statearr_29396_29464 = state_29348__$1;
(statearr_29396_29464[(1)] = (27));

} else {
var statearr_29397_29465 = state_29348__$1;
(statearr_29397_29465[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29349 === (34))){
var state_29348__$1 = state_29348;
var statearr_29398_29466 = state_29348__$1;
(statearr_29398_29466[(2)] = null);

(statearr_29398_29466[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29349 === (17))){
var state_29348__$1 = state_29348;
var statearr_29399_29467 = state_29348__$1;
(statearr_29399_29467[(2)] = null);

(statearr_29399_29467[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29349 === (3))){
var inst_29346 = (state_29348[(2)]);
var state_29348__$1 = state_29348;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29348__$1,inst_29346);
} else {
if((state_val_29349 === (12))){
var inst_29275 = (state_29348[(2)]);
var state_29348__$1 = state_29348;
var statearr_29400_29468 = state_29348__$1;
(statearr_29400_29468[(2)] = inst_29275);

(statearr_29400_29468[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29349 === (2))){
var state_29348__$1 = state_29348;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29348__$1,(4),ch);
} else {
if((state_val_29349 === (23))){
var state_29348__$1 = state_29348;
var statearr_29401_29469 = state_29348__$1;
(statearr_29401_29469[(2)] = null);

(statearr_29401_29469[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29349 === (35))){
var inst_29330 = (state_29348[(2)]);
var state_29348__$1 = state_29348;
var statearr_29402_29470 = state_29348__$1;
(statearr_29402_29470[(2)] = inst_29330);

(statearr_29402_29470[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29349 === (19))){
var inst_29247 = (state_29348[(7)]);
var inst_29251 = cljs.core.chunk_first.call(null,inst_29247);
var inst_29252 = cljs.core.chunk_rest.call(null,inst_29247);
var inst_29253 = cljs.core.count.call(null,inst_29251);
var inst_29225 = inst_29252;
var inst_29226 = inst_29251;
var inst_29227 = inst_29253;
var inst_29228 = (0);
var state_29348__$1 = (function (){var statearr_29403 = state_29348;
(statearr_29403[(13)] = inst_29227);

(statearr_29403[(14)] = inst_29226);

(statearr_29403[(16)] = inst_29228);

(statearr_29403[(17)] = inst_29225);

return statearr_29403;
})();
var statearr_29404_29471 = state_29348__$1;
(statearr_29404_29471[(2)] = null);

(statearr_29404_29471[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29349 === (11))){
var inst_29247 = (state_29348[(7)]);
var inst_29225 = (state_29348[(17)]);
var inst_29247__$1 = cljs.core.seq.call(null,inst_29225);
var state_29348__$1 = (function (){var statearr_29405 = state_29348;
(statearr_29405[(7)] = inst_29247__$1);

return statearr_29405;
})();
if(inst_29247__$1){
var statearr_29406_29472 = state_29348__$1;
(statearr_29406_29472[(1)] = (16));

} else {
var statearr_29407_29473 = state_29348__$1;
(statearr_29407_29473[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29349 === (9))){
var inst_29277 = (state_29348[(2)]);
var state_29348__$1 = state_29348;
var statearr_29408_29474 = state_29348__$1;
(statearr_29408_29474[(2)] = inst_29277);

(statearr_29408_29474[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29349 === (5))){
var inst_29223 = cljs.core.deref.call(null,cs);
var inst_29224 = cljs.core.seq.call(null,inst_29223);
var inst_29225 = inst_29224;
var inst_29226 = null;
var inst_29227 = (0);
var inst_29228 = (0);
var state_29348__$1 = (function (){var statearr_29409 = state_29348;
(statearr_29409[(13)] = inst_29227);

(statearr_29409[(14)] = inst_29226);

(statearr_29409[(16)] = inst_29228);

(statearr_29409[(17)] = inst_29225);

return statearr_29409;
})();
var statearr_29410_29475 = state_29348__$1;
(statearr_29410_29475[(2)] = null);

(statearr_29410_29475[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29349 === (14))){
var state_29348__$1 = state_29348;
var statearr_29411_29476 = state_29348__$1;
(statearr_29411_29476[(2)] = null);

(statearr_29411_29476[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29349 === (45))){
var inst_29338 = (state_29348[(2)]);
var state_29348__$1 = state_29348;
var statearr_29412_29477 = state_29348__$1;
(statearr_29412_29477[(2)] = inst_29338);

(statearr_29412_29477[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29349 === (26))){
var inst_29280 = (state_29348[(29)]);
var inst_29334 = (state_29348[(2)]);
var inst_29335 = cljs.core.seq.call(null,inst_29280);
var state_29348__$1 = (function (){var statearr_29413 = state_29348;
(statearr_29413[(31)] = inst_29334);

return statearr_29413;
})();
if(inst_29335){
var statearr_29414_29478 = state_29348__$1;
(statearr_29414_29478[(1)] = (42));

} else {
var statearr_29415_29479 = state_29348__$1;
(statearr_29415_29479[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29349 === (16))){
var inst_29247 = (state_29348[(7)]);
var inst_29249 = cljs.core.chunked_seq_QMARK_.call(null,inst_29247);
var state_29348__$1 = state_29348;
if(inst_29249){
var statearr_29416_29480 = state_29348__$1;
(statearr_29416_29480[(1)] = (19));

} else {
var statearr_29417_29481 = state_29348__$1;
(statearr_29417_29481[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29349 === (38))){
var inst_29327 = (state_29348[(2)]);
var state_29348__$1 = state_29348;
var statearr_29418_29482 = state_29348__$1;
(statearr_29418_29482[(2)] = inst_29327);

(statearr_29418_29482[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29349 === (30))){
var state_29348__$1 = state_29348;
var statearr_29419_29483 = state_29348__$1;
(statearr_29419_29483[(2)] = null);

(statearr_29419_29483[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29349 === (10))){
var inst_29226 = (state_29348[(14)]);
var inst_29228 = (state_29348[(16)]);
var inst_29236 = cljs.core._nth.call(null,inst_29226,inst_29228);
var inst_29237 = cljs.core.nth.call(null,inst_29236,(0),null);
var inst_29238 = cljs.core.nth.call(null,inst_29236,(1),null);
var state_29348__$1 = (function (){var statearr_29420 = state_29348;
(statearr_29420[(26)] = inst_29237);

return statearr_29420;
})();
if(cljs.core.truth_(inst_29238)){
var statearr_29421_29484 = state_29348__$1;
(statearr_29421_29484[(1)] = (13));

} else {
var statearr_29422_29485 = state_29348__$1;
(statearr_29422_29485[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29349 === (18))){
var inst_29273 = (state_29348[(2)]);
var state_29348__$1 = state_29348;
var statearr_29423_29486 = state_29348__$1;
(statearr_29423_29486[(2)] = inst_29273);

(statearr_29423_29486[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29349 === (42))){
var state_29348__$1 = state_29348;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29348__$1,(45),dchan);
} else {
if((state_val_29349 === (37))){
var inst_29307 = (state_29348[(25)]);
var inst_29216 = (state_29348[(10)]);
var inst_29316 = (state_29348[(23)]);
var inst_29316__$1 = cljs.core.first.call(null,inst_29307);
var inst_29317 = cljs.core.async.put_BANG_.call(null,inst_29316__$1,inst_29216,done);
var state_29348__$1 = (function (){var statearr_29424 = state_29348;
(statearr_29424[(23)] = inst_29316__$1);

return statearr_29424;
})();
if(cljs.core.truth_(inst_29317)){
var statearr_29425_29487 = state_29348__$1;
(statearr_29425_29487[(1)] = (39));

} else {
var statearr_29426_29488 = state_29348__$1;
(statearr_29426_29488[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29349 === (8))){
var inst_29227 = (state_29348[(13)]);
var inst_29228 = (state_29348[(16)]);
var inst_29230 = (inst_29228 < inst_29227);
var inst_29231 = inst_29230;
var state_29348__$1 = state_29348;
if(cljs.core.truth_(inst_29231)){
var statearr_29427_29489 = state_29348__$1;
(statearr_29427_29489[(1)] = (10));

} else {
var statearr_29428_29490 = state_29348__$1;
(statearr_29428_29490[(1)] = (11));

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
});})(c__28113__auto___29436,cs,m,dchan,dctr,done))
;
return ((function (switch__28001__auto__,c__28113__auto___29436,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__28002__auto__ = null;
var cljs$core$async$mult_$_state_machine__28002__auto____0 = (function (){
var statearr_29432 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29432[(0)] = cljs$core$async$mult_$_state_machine__28002__auto__);

(statearr_29432[(1)] = (1));

return statearr_29432;
});
var cljs$core$async$mult_$_state_machine__28002__auto____1 = (function (state_29348){
while(true){
var ret_value__28003__auto__ = (function (){try{while(true){
var result__28004__auto__ = switch__28001__auto__.call(null,state_29348);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28004__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28004__auto__;
}
break;
}
}catch (e29433){if((e29433 instanceof Object)){
var ex__28005__auto__ = e29433;
var statearr_29434_29491 = state_29348;
(statearr_29434_29491[(5)] = ex__28005__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29348);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29433;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28003__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29492 = state_29348;
state_29348 = G__29492;
continue;
} else {
return ret_value__28003__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__28002__auto__ = function(state_29348){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__28002__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__28002__auto____1.call(this,state_29348);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__28002__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__28002__auto____0;
cljs$core$async$mult_$_state_machine__28002__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__28002__auto____1;
return cljs$core$async$mult_$_state_machine__28002__auto__;
})()
;})(switch__28001__auto__,c__28113__auto___29436,cs,m,dchan,dctr,done))
})();
var state__28115__auto__ = (function (){var statearr_29435 = f__28114__auto__.call(null);
(statearr_29435[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28113__auto___29436);

return statearr_29435;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28115__auto__);
});})(c__28113__auto___29436,cs,m,dchan,dctr,done))
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
var args29493 = [];
var len__26332__auto___29496 = arguments.length;
var i__26333__auto___29497 = (0);
while(true){
if((i__26333__auto___29497 < len__26332__auto___29496)){
args29493.push((arguments[i__26333__auto___29497]));

var G__29498 = (i__26333__auto___29497 + (1));
i__26333__auto___29497 = G__29498;
continue;
} else {
}
break;
}

var G__29495 = args29493.length;
switch (G__29495) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args29493.length)].join('')));

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
var x__25887__auto__ = (((m == null))?null:m);
var m__25888__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__25887__auto__)]);
if(!((m__25888__auto__ == null))){
return m__25888__auto__.call(null,m,ch);
} else {
var m__25888__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__25888__auto____$1 == null))){
return m__25888__auto____$1.call(null,m,ch);
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
var x__25887__auto__ = (((m == null))?null:m);
var m__25888__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__25887__auto__)]);
if(!((m__25888__auto__ == null))){
return m__25888__auto__.call(null,m,ch);
} else {
var m__25888__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__25888__auto____$1 == null))){
return m__25888__auto____$1.call(null,m,ch);
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
var x__25887__auto__ = (((m == null))?null:m);
var m__25888__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__25887__auto__)]);
if(!((m__25888__auto__ == null))){
return m__25888__auto__.call(null,m);
} else {
var m__25888__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__25888__auto____$1 == null))){
return m__25888__auto____$1.call(null,m);
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
var x__25887__auto__ = (((m == null))?null:m);
var m__25888__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__25887__auto__)]);
if(!((m__25888__auto__ == null))){
return m__25888__auto__.call(null,m,state_map);
} else {
var m__25888__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__25888__auto____$1 == null))){
return m__25888__auto____$1.call(null,m,state_map);
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
var x__25887__auto__ = (((m == null))?null:m);
var m__25888__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__25887__auto__)]);
if(!((m__25888__auto__ == null))){
return m__25888__auto__.call(null,m,mode);
} else {
var m__25888__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__25888__auto____$1 == null))){
return m__25888__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__26339__auto__ = [];
var len__26332__auto___29510 = arguments.length;
var i__26333__auto___29511 = (0);
while(true){
if((i__26333__auto___29511 < len__26332__auto___29510)){
args__26339__auto__.push((arguments[i__26333__auto___29511]));

var G__29512 = (i__26333__auto___29511 + (1));
i__26333__auto___29511 = G__29512;
continue;
} else {
}
break;
}

var argseq__26340__auto__ = ((((3) < args__26339__auto__.length))?(new cljs.core.IndexedSeq(args__26339__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__26340__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__29504){
var map__29505 = p__29504;
var map__29505__$1 = ((((!((map__29505 == null)))?((((map__29505.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29505.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29505):map__29505);
var opts = map__29505__$1;
var statearr_29507_29513 = state;
(statearr_29507_29513[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__29505,map__29505__$1,opts){
return (function (val){
var statearr_29508_29514 = state;
(statearr_29508_29514[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__29505,map__29505__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_29509_29515 = state;
(statearr_29509_29515[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq29500){
var G__29501 = cljs.core.first.call(null,seq29500);
var seq29500__$1 = cljs.core.next.call(null,seq29500);
var G__29502 = cljs.core.first.call(null,seq29500__$1);
var seq29500__$2 = cljs.core.next.call(null,seq29500__$1);
var G__29503 = cljs.core.first.call(null,seq29500__$2);
var seq29500__$3 = cljs.core.next.call(null,seq29500__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__29501,G__29502,G__29503,seq29500__$3);
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
if(typeof cljs.core.async.t_cljs$core$async29683 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29683 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta29684){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta29684 = meta29684;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29683.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_29685,meta29684__$1){
var self__ = this;
var _29685__$1 = this;
return (new cljs.core.async.t_cljs$core$async29683(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta29684__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29683.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_29685){
var self__ = this;
var _29685__$1 = this;
return self__.meta29684;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29683.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29683.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29683.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29683.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29683.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29683.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29683.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29683.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("mode must be one of: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(solo-modes mode)")].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29683.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta29684","meta29684",1028294089,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29683.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29683.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29683";

cljs.core.async.t_cljs$core$async29683.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__25830__auto__,writer__25831__auto__,opt__25832__auto__){
return cljs.core._write.call(null,writer__25831__auto__,"cljs.core.async/t_cljs$core$async29683");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async29683 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async29683(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta29684){
return (new cljs.core.async.t_cljs$core$async29683(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta29684));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async29683(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__28113__auto___29850 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28113__auto___29850,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__28114__auto__ = (function (){var switch__28001__auto__ = ((function (c__28113__auto___29850,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_29787){
var state_val_29788 = (state_29787[(1)]);
if((state_val_29788 === (7))){
var inst_29702 = (state_29787[(2)]);
var state_29787__$1 = state_29787;
var statearr_29789_29851 = state_29787__$1;
(statearr_29789_29851[(2)] = inst_29702);

(statearr_29789_29851[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29788 === (20))){
var inst_29714 = (state_29787[(7)]);
var state_29787__$1 = state_29787;
var statearr_29790_29852 = state_29787__$1;
(statearr_29790_29852[(2)] = inst_29714);

(statearr_29790_29852[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29788 === (27))){
var state_29787__$1 = state_29787;
var statearr_29791_29853 = state_29787__$1;
(statearr_29791_29853[(2)] = null);

(statearr_29791_29853[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29788 === (1))){
var inst_29689 = (state_29787[(8)]);
var inst_29689__$1 = calc_state.call(null);
var inst_29691 = (inst_29689__$1 == null);
var inst_29692 = cljs.core.not.call(null,inst_29691);
var state_29787__$1 = (function (){var statearr_29792 = state_29787;
(statearr_29792[(8)] = inst_29689__$1);

return statearr_29792;
})();
if(inst_29692){
var statearr_29793_29854 = state_29787__$1;
(statearr_29793_29854[(1)] = (2));

} else {
var statearr_29794_29855 = state_29787__$1;
(statearr_29794_29855[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29788 === (24))){
var inst_29738 = (state_29787[(9)]);
var inst_29747 = (state_29787[(10)]);
var inst_29761 = (state_29787[(11)]);
var inst_29761__$1 = inst_29738.call(null,inst_29747);
var state_29787__$1 = (function (){var statearr_29795 = state_29787;
(statearr_29795[(11)] = inst_29761__$1);

return statearr_29795;
})();
if(cljs.core.truth_(inst_29761__$1)){
var statearr_29796_29856 = state_29787__$1;
(statearr_29796_29856[(1)] = (29));

} else {
var statearr_29797_29857 = state_29787__$1;
(statearr_29797_29857[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29788 === (4))){
var inst_29705 = (state_29787[(2)]);
var state_29787__$1 = state_29787;
if(cljs.core.truth_(inst_29705)){
var statearr_29798_29858 = state_29787__$1;
(statearr_29798_29858[(1)] = (8));

} else {
var statearr_29799_29859 = state_29787__$1;
(statearr_29799_29859[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29788 === (15))){
var inst_29732 = (state_29787[(2)]);
var state_29787__$1 = state_29787;
if(cljs.core.truth_(inst_29732)){
var statearr_29800_29860 = state_29787__$1;
(statearr_29800_29860[(1)] = (19));

} else {
var statearr_29801_29861 = state_29787__$1;
(statearr_29801_29861[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29788 === (21))){
var inst_29737 = (state_29787[(12)]);
var inst_29737__$1 = (state_29787[(2)]);
var inst_29738 = cljs.core.get.call(null,inst_29737__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_29739 = cljs.core.get.call(null,inst_29737__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_29740 = cljs.core.get.call(null,inst_29737__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_29787__$1 = (function (){var statearr_29802 = state_29787;
(statearr_29802[(13)] = inst_29739);

(statearr_29802[(12)] = inst_29737__$1);

(statearr_29802[(9)] = inst_29738);

return statearr_29802;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_29787__$1,(22),inst_29740);
} else {
if((state_val_29788 === (31))){
var inst_29769 = (state_29787[(2)]);
var state_29787__$1 = state_29787;
if(cljs.core.truth_(inst_29769)){
var statearr_29803_29862 = state_29787__$1;
(statearr_29803_29862[(1)] = (32));

} else {
var statearr_29804_29863 = state_29787__$1;
(statearr_29804_29863[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29788 === (32))){
var inst_29746 = (state_29787[(14)]);
var state_29787__$1 = state_29787;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29787__$1,(35),out,inst_29746);
} else {
if((state_val_29788 === (33))){
var inst_29737 = (state_29787[(12)]);
var inst_29714 = inst_29737;
var state_29787__$1 = (function (){var statearr_29805 = state_29787;
(statearr_29805[(7)] = inst_29714);

return statearr_29805;
})();
var statearr_29806_29864 = state_29787__$1;
(statearr_29806_29864[(2)] = null);

(statearr_29806_29864[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29788 === (13))){
var inst_29714 = (state_29787[(7)]);
var inst_29721 = inst_29714.cljs$lang$protocol_mask$partition0$;
var inst_29722 = (inst_29721 & (64));
var inst_29723 = inst_29714.cljs$core$ISeq$;
var inst_29724 = (cljs.core.PROTOCOL_SENTINEL === inst_29723);
var inst_29725 = (inst_29722) || (inst_29724);
var state_29787__$1 = state_29787;
if(cljs.core.truth_(inst_29725)){
var statearr_29807_29865 = state_29787__$1;
(statearr_29807_29865[(1)] = (16));

} else {
var statearr_29808_29866 = state_29787__$1;
(statearr_29808_29866[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29788 === (22))){
var inst_29746 = (state_29787[(14)]);
var inst_29747 = (state_29787[(10)]);
var inst_29745 = (state_29787[(2)]);
var inst_29746__$1 = cljs.core.nth.call(null,inst_29745,(0),null);
var inst_29747__$1 = cljs.core.nth.call(null,inst_29745,(1),null);
var inst_29748 = (inst_29746__$1 == null);
var inst_29749 = cljs.core._EQ_.call(null,inst_29747__$1,change);
var inst_29750 = (inst_29748) || (inst_29749);
var state_29787__$1 = (function (){var statearr_29809 = state_29787;
(statearr_29809[(14)] = inst_29746__$1);

(statearr_29809[(10)] = inst_29747__$1);

return statearr_29809;
})();
if(cljs.core.truth_(inst_29750)){
var statearr_29810_29867 = state_29787__$1;
(statearr_29810_29867[(1)] = (23));

} else {
var statearr_29811_29868 = state_29787__$1;
(statearr_29811_29868[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29788 === (36))){
var inst_29737 = (state_29787[(12)]);
var inst_29714 = inst_29737;
var state_29787__$1 = (function (){var statearr_29812 = state_29787;
(statearr_29812[(7)] = inst_29714);

return statearr_29812;
})();
var statearr_29813_29869 = state_29787__$1;
(statearr_29813_29869[(2)] = null);

(statearr_29813_29869[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29788 === (29))){
var inst_29761 = (state_29787[(11)]);
var state_29787__$1 = state_29787;
var statearr_29814_29870 = state_29787__$1;
(statearr_29814_29870[(2)] = inst_29761);

(statearr_29814_29870[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29788 === (6))){
var state_29787__$1 = state_29787;
var statearr_29815_29871 = state_29787__$1;
(statearr_29815_29871[(2)] = false);

(statearr_29815_29871[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29788 === (28))){
var inst_29757 = (state_29787[(2)]);
var inst_29758 = calc_state.call(null);
var inst_29714 = inst_29758;
var state_29787__$1 = (function (){var statearr_29816 = state_29787;
(statearr_29816[(7)] = inst_29714);

(statearr_29816[(15)] = inst_29757);

return statearr_29816;
})();
var statearr_29817_29872 = state_29787__$1;
(statearr_29817_29872[(2)] = null);

(statearr_29817_29872[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29788 === (25))){
var inst_29783 = (state_29787[(2)]);
var state_29787__$1 = state_29787;
var statearr_29818_29873 = state_29787__$1;
(statearr_29818_29873[(2)] = inst_29783);

(statearr_29818_29873[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29788 === (34))){
var inst_29781 = (state_29787[(2)]);
var state_29787__$1 = state_29787;
var statearr_29819_29874 = state_29787__$1;
(statearr_29819_29874[(2)] = inst_29781);

(statearr_29819_29874[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29788 === (17))){
var state_29787__$1 = state_29787;
var statearr_29820_29875 = state_29787__$1;
(statearr_29820_29875[(2)] = false);

(statearr_29820_29875[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29788 === (3))){
var state_29787__$1 = state_29787;
var statearr_29821_29876 = state_29787__$1;
(statearr_29821_29876[(2)] = false);

(statearr_29821_29876[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29788 === (12))){
var inst_29785 = (state_29787[(2)]);
var state_29787__$1 = state_29787;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29787__$1,inst_29785);
} else {
if((state_val_29788 === (2))){
var inst_29689 = (state_29787[(8)]);
var inst_29694 = inst_29689.cljs$lang$protocol_mask$partition0$;
var inst_29695 = (inst_29694 & (64));
var inst_29696 = inst_29689.cljs$core$ISeq$;
var inst_29697 = (cljs.core.PROTOCOL_SENTINEL === inst_29696);
var inst_29698 = (inst_29695) || (inst_29697);
var state_29787__$1 = state_29787;
if(cljs.core.truth_(inst_29698)){
var statearr_29822_29877 = state_29787__$1;
(statearr_29822_29877[(1)] = (5));

} else {
var statearr_29823_29878 = state_29787__$1;
(statearr_29823_29878[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29788 === (23))){
var inst_29746 = (state_29787[(14)]);
var inst_29752 = (inst_29746 == null);
var state_29787__$1 = state_29787;
if(cljs.core.truth_(inst_29752)){
var statearr_29824_29879 = state_29787__$1;
(statearr_29824_29879[(1)] = (26));

} else {
var statearr_29825_29880 = state_29787__$1;
(statearr_29825_29880[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29788 === (35))){
var inst_29772 = (state_29787[(2)]);
var state_29787__$1 = state_29787;
if(cljs.core.truth_(inst_29772)){
var statearr_29826_29881 = state_29787__$1;
(statearr_29826_29881[(1)] = (36));

} else {
var statearr_29827_29882 = state_29787__$1;
(statearr_29827_29882[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29788 === (19))){
var inst_29714 = (state_29787[(7)]);
var inst_29734 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29714);
var state_29787__$1 = state_29787;
var statearr_29828_29883 = state_29787__$1;
(statearr_29828_29883[(2)] = inst_29734);

(statearr_29828_29883[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29788 === (11))){
var inst_29714 = (state_29787[(7)]);
var inst_29718 = (inst_29714 == null);
var inst_29719 = cljs.core.not.call(null,inst_29718);
var state_29787__$1 = state_29787;
if(inst_29719){
var statearr_29829_29884 = state_29787__$1;
(statearr_29829_29884[(1)] = (13));

} else {
var statearr_29830_29885 = state_29787__$1;
(statearr_29830_29885[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29788 === (9))){
var inst_29689 = (state_29787[(8)]);
var state_29787__$1 = state_29787;
var statearr_29831_29886 = state_29787__$1;
(statearr_29831_29886[(2)] = inst_29689);

(statearr_29831_29886[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29788 === (5))){
var state_29787__$1 = state_29787;
var statearr_29832_29887 = state_29787__$1;
(statearr_29832_29887[(2)] = true);

(statearr_29832_29887[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29788 === (14))){
var state_29787__$1 = state_29787;
var statearr_29833_29888 = state_29787__$1;
(statearr_29833_29888[(2)] = false);

(statearr_29833_29888[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29788 === (26))){
var inst_29747 = (state_29787[(10)]);
var inst_29754 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_29747);
var state_29787__$1 = state_29787;
var statearr_29834_29889 = state_29787__$1;
(statearr_29834_29889[(2)] = inst_29754);

(statearr_29834_29889[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29788 === (16))){
var state_29787__$1 = state_29787;
var statearr_29835_29890 = state_29787__$1;
(statearr_29835_29890[(2)] = true);

(statearr_29835_29890[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29788 === (38))){
var inst_29777 = (state_29787[(2)]);
var state_29787__$1 = state_29787;
var statearr_29836_29891 = state_29787__$1;
(statearr_29836_29891[(2)] = inst_29777);

(statearr_29836_29891[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29788 === (30))){
var inst_29739 = (state_29787[(13)]);
var inst_29738 = (state_29787[(9)]);
var inst_29747 = (state_29787[(10)]);
var inst_29764 = cljs.core.empty_QMARK_.call(null,inst_29738);
var inst_29765 = inst_29739.call(null,inst_29747);
var inst_29766 = cljs.core.not.call(null,inst_29765);
var inst_29767 = (inst_29764) && (inst_29766);
var state_29787__$1 = state_29787;
var statearr_29837_29892 = state_29787__$1;
(statearr_29837_29892[(2)] = inst_29767);

(statearr_29837_29892[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29788 === (10))){
var inst_29689 = (state_29787[(8)]);
var inst_29710 = (state_29787[(2)]);
var inst_29711 = cljs.core.get.call(null,inst_29710,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_29712 = cljs.core.get.call(null,inst_29710,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_29713 = cljs.core.get.call(null,inst_29710,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_29714 = inst_29689;
var state_29787__$1 = (function (){var statearr_29838 = state_29787;
(statearr_29838[(7)] = inst_29714);

(statearr_29838[(16)] = inst_29713);

(statearr_29838[(17)] = inst_29712);

(statearr_29838[(18)] = inst_29711);

return statearr_29838;
})();
var statearr_29839_29893 = state_29787__$1;
(statearr_29839_29893[(2)] = null);

(statearr_29839_29893[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29788 === (18))){
var inst_29729 = (state_29787[(2)]);
var state_29787__$1 = state_29787;
var statearr_29840_29894 = state_29787__$1;
(statearr_29840_29894[(2)] = inst_29729);

(statearr_29840_29894[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29788 === (37))){
var state_29787__$1 = state_29787;
var statearr_29841_29895 = state_29787__$1;
(statearr_29841_29895[(2)] = null);

(statearr_29841_29895[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29788 === (8))){
var inst_29689 = (state_29787[(8)]);
var inst_29707 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29689);
var state_29787__$1 = state_29787;
var statearr_29842_29896 = state_29787__$1;
(statearr_29842_29896[(2)] = inst_29707);

(statearr_29842_29896[(1)] = (10));


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
});})(c__28113__auto___29850,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__28001__auto__,c__28113__auto___29850,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__28002__auto__ = null;
var cljs$core$async$mix_$_state_machine__28002__auto____0 = (function (){
var statearr_29846 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29846[(0)] = cljs$core$async$mix_$_state_machine__28002__auto__);

(statearr_29846[(1)] = (1));

return statearr_29846;
});
var cljs$core$async$mix_$_state_machine__28002__auto____1 = (function (state_29787){
while(true){
var ret_value__28003__auto__ = (function (){try{while(true){
var result__28004__auto__ = switch__28001__auto__.call(null,state_29787);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28004__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28004__auto__;
}
break;
}
}catch (e29847){if((e29847 instanceof Object)){
var ex__28005__auto__ = e29847;
var statearr_29848_29897 = state_29787;
(statearr_29848_29897[(5)] = ex__28005__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29787);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29847;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28003__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29898 = state_29787;
state_29787 = G__29898;
continue;
} else {
return ret_value__28003__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__28002__auto__ = function(state_29787){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__28002__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__28002__auto____1.call(this,state_29787);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__28002__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__28002__auto____0;
cljs$core$async$mix_$_state_machine__28002__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__28002__auto____1;
return cljs$core$async$mix_$_state_machine__28002__auto__;
})()
;})(switch__28001__auto__,c__28113__auto___29850,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__28115__auto__ = (function (){var statearr_29849 = f__28114__auto__.call(null);
(statearr_29849[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28113__auto___29850);

return statearr_29849;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28115__auto__);
});})(c__28113__auto___29850,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var x__25887__auto__ = (((p == null))?null:p);
var m__25888__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__25887__auto__)]);
if(!((m__25888__auto__ == null))){
return m__25888__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__25888__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__25888__auto____$1 == null))){
return m__25888__auto____$1.call(null,p,v,ch,close_QMARK_);
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
var x__25887__auto__ = (((p == null))?null:p);
var m__25888__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__25887__auto__)]);
if(!((m__25888__auto__ == null))){
return m__25888__auto__.call(null,p,v,ch);
} else {
var m__25888__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__25888__auto____$1 == null))){
return m__25888__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args29899 = [];
var len__26332__auto___29902 = arguments.length;
var i__26333__auto___29903 = (0);
while(true){
if((i__26333__auto___29903 < len__26332__auto___29902)){
args29899.push((arguments[i__26333__auto___29903]));

var G__29904 = (i__26333__auto___29903 + (1));
i__26333__auto___29903 = G__29904;
continue;
} else {
}
break;
}

var G__29901 = args29899.length;
switch (G__29901) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args29899.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__25887__auto__ = (((p == null))?null:p);
var m__25888__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__25887__auto__)]);
if(!((m__25888__auto__ == null))){
return m__25888__auto__.call(null,p);
} else {
var m__25888__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__25888__auto____$1 == null))){
return m__25888__auto____$1.call(null,p);
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
var x__25887__auto__ = (((p == null))?null:p);
var m__25888__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__25887__auto__)]);
if(!((m__25888__auto__ == null))){
return m__25888__auto__.call(null,p,v);
} else {
var m__25888__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__25888__auto____$1 == null))){
return m__25888__auto____$1.call(null,p,v);
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
var args29907 = [];
var len__26332__auto___30032 = arguments.length;
var i__26333__auto___30033 = (0);
while(true){
if((i__26333__auto___30033 < len__26332__auto___30032)){
args29907.push((arguments[i__26333__auto___30033]));

var G__30034 = (i__26333__auto___30033 + (1));
i__26333__auto___30033 = G__30034;
continue;
} else {
}
break;
}

var G__29909 = args29907.length;
switch (G__29909) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args29907.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__25219__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__25219__auto__)){
return or__25219__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__25219__auto__,mults){
return (function (p1__29906_SHARP_){
if(cljs.core.truth_(p1__29906_SHARP_.call(null,topic))){
return p1__29906_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__29906_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__25219__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async29910 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29910 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta29911){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta29911 = meta29911;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29910.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_29912,meta29911__$1){
var self__ = this;
var _29912__$1 = this;
return (new cljs.core.async.t_cljs$core$async29910(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta29911__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29910.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_29912){
var self__ = this;
var _29912__$1 = this;
return self__.meta29911;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29910.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29910.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29910.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29910.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29910.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async29910.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29910.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29910.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta29911","meta29911",-446937786,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29910.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29910.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29910";

cljs.core.async.t_cljs$core$async29910.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__25830__auto__,writer__25831__auto__,opt__25832__auto__){
return cljs.core._write.call(null,writer__25831__auto__,"cljs.core.async/t_cljs$core$async29910");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async29910 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async29910(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta29911){
return (new cljs.core.async.t_cljs$core$async29910(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta29911));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async29910(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__28113__auto___30036 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28113__auto___30036,mults,ensure_mult,p){
return (function (){
var f__28114__auto__ = (function (){var switch__28001__auto__ = ((function (c__28113__auto___30036,mults,ensure_mult,p){
return (function (state_29984){
var state_val_29985 = (state_29984[(1)]);
if((state_val_29985 === (7))){
var inst_29980 = (state_29984[(2)]);
var state_29984__$1 = state_29984;
var statearr_29986_30037 = state_29984__$1;
(statearr_29986_30037[(2)] = inst_29980);

(statearr_29986_30037[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29985 === (20))){
var state_29984__$1 = state_29984;
var statearr_29987_30038 = state_29984__$1;
(statearr_29987_30038[(2)] = null);

(statearr_29987_30038[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29985 === (1))){
var state_29984__$1 = state_29984;
var statearr_29988_30039 = state_29984__$1;
(statearr_29988_30039[(2)] = null);

(statearr_29988_30039[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29985 === (24))){
var inst_29963 = (state_29984[(7)]);
var inst_29972 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_29963);
var state_29984__$1 = state_29984;
var statearr_29989_30040 = state_29984__$1;
(statearr_29989_30040[(2)] = inst_29972);

(statearr_29989_30040[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29985 === (4))){
var inst_29915 = (state_29984[(8)]);
var inst_29915__$1 = (state_29984[(2)]);
var inst_29916 = (inst_29915__$1 == null);
var state_29984__$1 = (function (){var statearr_29990 = state_29984;
(statearr_29990[(8)] = inst_29915__$1);

return statearr_29990;
})();
if(cljs.core.truth_(inst_29916)){
var statearr_29991_30041 = state_29984__$1;
(statearr_29991_30041[(1)] = (5));

} else {
var statearr_29992_30042 = state_29984__$1;
(statearr_29992_30042[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29985 === (15))){
var inst_29957 = (state_29984[(2)]);
var state_29984__$1 = state_29984;
var statearr_29993_30043 = state_29984__$1;
(statearr_29993_30043[(2)] = inst_29957);

(statearr_29993_30043[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29985 === (21))){
var inst_29977 = (state_29984[(2)]);
var state_29984__$1 = (function (){var statearr_29994 = state_29984;
(statearr_29994[(9)] = inst_29977);

return statearr_29994;
})();
var statearr_29995_30044 = state_29984__$1;
(statearr_29995_30044[(2)] = null);

(statearr_29995_30044[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29985 === (13))){
var inst_29939 = (state_29984[(10)]);
var inst_29941 = cljs.core.chunked_seq_QMARK_.call(null,inst_29939);
var state_29984__$1 = state_29984;
if(inst_29941){
var statearr_29996_30045 = state_29984__$1;
(statearr_29996_30045[(1)] = (16));

} else {
var statearr_29997_30046 = state_29984__$1;
(statearr_29997_30046[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29985 === (22))){
var inst_29969 = (state_29984[(2)]);
var state_29984__$1 = state_29984;
if(cljs.core.truth_(inst_29969)){
var statearr_29998_30047 = state_29984__$1;
(statearr_29998_30047[(1)] = (23));

} else {
var statearr_29999_30048 = state_29984__$1;
(statearr_29999_30048[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29985 === (6))){
var inst_29965 = (state_29984[(11)]);
var inst_29915 = (state_29984[(8)]);
var inst_29963 = (state_29984[(7)]);
var inst_29963__$1 = topic_fn.call(null,inst_29915);
var inst_29964 = cljs.core.deref.call(null,mults);
var inst_29965__$1 = cljs.core.get.call(null,inst_29964,inst_29963__$1);
var state_29984__$1 = (function (){var statearr_30000 = state_29984;
(statearr_30000[(11)] = inst_29965__$1);

(statearr_30000[(7)] = inst_29963__$1);

return statearr_30000;
})();
if(cljs.core.truth_(inst_29965__$1)){
var statearr_30001_30049 = state_29984__$1;
(statearr_30001_30049[(1)] = (19));

} else {
var statearr_30002_30050 = state_29984__$1;
(statearr_30002_30050[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29985 === (25))){
var inst_29974 = (state_29984[(2)]);
var state_29984__$1 = state_29984;
var statearr_30003_30051 = state_29984__$1;
(statearr_30003_30051[(2)] = inst_29974);

(statearr_30003_30051[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29985 === (17))){
var inst_29939 = (state_29984[(10)]);
var inst_29948 = cljs.core.first.call(null,inst_29939);
var inst_29949 = cljs.core.async.muxch_STAR_.call(null,inst_29948);
var inst_29950 = cljs.core.async.close_BANG_.call(null,inst_29949);
var inst_29951 = cljs.core.next.call(null,inst_29939);
var inst_29925 = inst_29951;
var inst_29926 = null;
var inst_29927 = (0);
var inst_29928 = (0);
var state_29984__$1 = (function (){var statearr_30004 = state_29984;
(statearr_30004[(12)] = inst_29927);

(statearr_30004[(13)] = inst_29928);

(statearr_30004[(14)] = inst_29925);

(statearr_30004[(15)] = inst_29950);

(statearr_30004[(16)] = inst_29926);

return statearr_30004;
})();
var statearr_30005_30052 = state_29984__$1;
(statearr_30005_30052[(2)] = null);

(statearr_30005_30052[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29985 === (3))){
var inst_29982 = (state_29984[(2)]);
var state_29984__$1 = state_29984;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29984__$1,inst_29982);
} else {
if((state_val_29985 === (12))){
var inst_29959 = (state_29984[(2)]);
var state_29984__$1 = state_29984;
var statearr_30006_30053 = state_29984__$1;
(statearr_30006_30053[(2)] = inst_29959);

(statearr_30006_30053[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29985 === (2))){
var state_29984__$1 = state_29984;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29984__$1,(4),ch);
} else {
if((state_val_29985 === (23))){
var state_29984__$1 = state_29984;
var statearr_30007_30054 = state_29984__$1;
(statearr_30007_30054[(2)] = null);

(statearr_30007_30054[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29985 === (19))){
var inst_29965 = (state_29984[(11)]);
var inst_29915 = (state_29984[(8)]);
var inst_29967 = cljs.core.async.muxch_STAR_.call(null,inst_29965);
var state_29984__$1 = state_29984;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29984__$1,(22),inst_29967,inst_29915);
} else {
if((state_val_29985 === (11))){
var inst_29939 = (state_29984[(10)]);
var inst_29925 = (state_29984[(14)]);
var inst_29939__$1 = cljs.core.seq.call(null,inst_29925);
var state_29984__$1 = (function (){var statearr_30008 = state_29984;
(statearr_30008[(10)] = inst_29939__$1);

return statearr_30008;
})();
if(inst_29939__$1){
var statearr_30009_30055 = state_29984__$1;
(statearr_30009_30055[(1)] = (13));

} else {
var statearr_30010_30056 = state_29984__$1;
(statearr_30010_30056[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29985 === (9))){
var inst_29961 = (state_29984[(2)]);
var state_29984__$1 = state_29984;
var statearr_30011_30057 = state_29984__$1;
(statearr_30011_30057[(2)] = inst_29961);

(statearr_30011_30057[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29985 === (5))){
var inst_29922 = cljs.core.deref.call(null,mults);
var inst_29923 = cljs.core.vals.call(null,inst_29922);
var inst_29924 = cljs.core.seq.call(null,inst_29923);
var inst_29925 = inst_29924;
var inst_29926 = null;
var inst_29927 = (0);
var inst_29928 = (0);
var state_29984__$1 = (function (){var statearr_30012 = state_29984;
(statearr_30012[(12)] = inst_29927);

(statearr_30012[(13)] = inst_29928);

(statearr_30012[(14)] = inst_29925);

(statearr_30012[(16)] = inst_29926);

return statearr_30012;
})();
var statearr_30013_30058 = state_29984__$1;
(statearr_30013_30058[(2)] = null);

(statearr_30013_30058[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29985 === (14))){
var state_29984__$1 = state_29984;
var statearr_30017_30059 = state_29984__$1;
(statearr_30017_30059[(2)] = null);

(statearr_30017_30059[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29985 === (16))){
var inst_29939 = (state_29984[(10)]);
var inst_29943 = cljs.core.chunk_first.call(null,inst_29939);
var inst_29944 = cljs.core.chunk_rest.call(null,inst_29939);
var inst_29945 = cljs.core.count.call(null,inst_29943);
var inst_29925 = inst_29944;
var inst_29926 = inst_29943;
var inst_29927 = inst_29945;
var inst_29928 = (0);
var state_29984__$1 = (function (){var statearr_30018 = state_29984;
(statearr_30018[(12)] = inst_29927);

(statearr_30018[(13)] = inst_29928);

(statearr_30018[(14)] = inst_29925);

(statearr_30018[(16)] = inst_29926);

return statearr_30018;
})();
var statearr_30019_30060 = state_29984__$1;
(statearr_30019_30060[(2)] = null);

(statearr_30019_30060[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29985 === (10))){
var inst_29927 = (state_29984[(12)]);
var inst_29928 = (state_29984[(13)]);
var inst_29925 = (state_29984[(14)]);
var inst_29926 = (state_29984[(16)]);
var inst_29933 = cljs.core._nth.call(null,inst_29926,inst_29928);
var inst_29934 = cljs.core.async.muxch_STAR_.call(null,inst_29933);
var inst_29935 = cljs.core.async.close_BANG_.call(null,inst_29934);
var inst_29936 = (inst_29928 + (1));
var tmp30014 = inst_29927;
var tmp30015 = inst_29925;
var tmp30016 = inst_29926;
var inst_29925__$1 = tmp30015;
var inst_29926__$1 = tmp30016;
var inst_29927__$1 = tmp30014;
var inst_29928__$1 = inst_29936;
var state_29984__$1 = (function (){var statearr_30020 = state_29984;
(statearr_30020[(12)] = inst_29927__$1);

(statearr_30020[(17)] = inst_29935);

(statearr_30020[(13)] = inst_29928__$1);

(statearr_30020[(14)] = inst_29925__$1);

(statearr_30020[(16)] = inst_29926__$1);

return statearr_30020;
})();
var statearr_30021_30061 = state_29984__$1;
(statearr_30021_30061[(2)] = null);

(statearr_30021_30061[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29985 === (18))){
var inst_29954 = (state_29984[(2)]);
var state_29984__$1 = state_29984;
var statearr_30022_30062 = state_29984__$1;
(statearr_30022_30062[(2)] = inst_29954);

(statearr_30022_30062[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29985 === (8))){
var inst_29927 = (state_29984[(12)]);
var inst_29928 = (state_29984[(13)]);
var inst_29930 = (inst_29928 < inst_29927);
var inst_29931 = inst_29930;
var state_29984__$1 = state_29984;
if(cljs.core.truth_(inst_29931)){
var statearr_30023_30063 = state_29984__$1;
(statearr_30023_30063[(1)] = (10));

} else {
var statearr_30024_30064 = state_29984__$1;
(statearr_30024_30064[(1)] = (11));

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
});})(c__28113__auto___30036,mults,ensure_mult,p))
;
return ((function (switch__28001__auto__,c__28113__auto___30036,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__28002__auto__ = null;
var cljs$core$async$state_machine__28002__auto____0 = (function (){
var statearr_30028 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30028[(0)] = cljs$core$async$state_machine__28002__auto__);

(statearr_30028[(1)] = (1));

return statearr_30028;
});
var cljs$core$async$state_machine__28002__auto____1 = (function (state_29984){
while(true){
var ret_value__28003__auto__ = (function (){try{while(true){
var result__28004__auto__ = switch__28001__auto__.call(null,state_29984);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28004__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28004__auto__;
}
break;
}
}catch (e30029){if((e30029 instanceof Object)){
var ex__28005__auto__ = e30029;
var statearr_30030_30065 = state_29984;
(statearr_30030_30065[(5)] = ex__28005__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29984);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30029;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28003__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30066 = state_29984;
state_29984 = G__30066;
continue;
} else {
return ret_value__28003__auto__;
}
break;
}
});
cljs$core$async$state_machine__28002__auto__ = function(state_29984){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28002__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28002__auto____1.call(this,state_29984);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28002__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28002__auto____0;
cljs$core$async$state_machine__28002__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28002__auto____1;
return cljs$core$async$state_machine__28002__auto__;
})()
;})(switch__28001__auto__,c__28113__auto___30036,mults,ensure_mult,p))
})();
var state__28115__auto__ = (function (){var statearr_30031 = f__28114__auto__.call(null);
(statearr_30031[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28113__auto___30036);

return statearr_30031;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28115__auto__);
});})(c__28113__auto___30036,mults,ensure_mult,p))
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
var args30067 = [];
var len__26332__auto___30070 = arguments.length;
var i__26333__auto___30071 = (0);
while(true){
if((i__26333__auto___30071 < len__26332__auto___30070)){
args30067.push((arguments[i__26333__auto___30071]));

var G__30072 = (i__26333__auto___30071 + (1));
i__26333__auto___30071 = G__30072;
continue;
} else {
}
break;
}

var G__30069 = args30067.length;
switch (G__30069) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args30067.length)].join('')));

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
var args30074 = [];
var len__26332__auto___30077 = arguments.length;
var i__26333__auto___30078 = (0);
while(true){
if((i__26333__auto___30078 < len__26332__auto___30077)){
args30074.push((arguments[i__26333__auto___30078]));

var G__30079 = (i__26333__auto___30078 + (1));
i__26333__auto___30078 = G__30079;
continue;
} else {
}
break;
}

var G__30076 = args30074.length;
switch (G__30076) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args30074.length)].join('')));

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
var args30081 = [];
var len__26332__auto___30152 = arguments.length;
var i__26333__auto___30153 = (0);
while(true){
if((i__26333__auto___30153 < len__26332__auto___30152)){
args30081.push((arguments[i__26333__auto___30153]));

var G__30154 = (i__26333__auto___30153 + (1));
i__26333__auto___30153 = G__30154;
continue;
} else {
}
break;
}

var G__30083 = args30081.length;
switch (G__30083) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args30081.length)].join('')));

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
var c__28113__auto___30156 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28113__auto___30156,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__28114__auto__ = (function (){var switch__28001__auto__ = ((function (c__28113__auto___30156,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_30122){
var state_val_30123 = (state_30122[(1)]);
if((state_val_30123 === (7))){
var state_30122__$1 = state_30122;
var statearr_30124_30157 = state_30122__$1;
(statearr_30124_30157[(2)] = null);

(statearr_30124_30157[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30123 === (1))){
var state_30122__$1 = state_30122;
var statearr_30125_30158 = state_30122__$1;
(statearr_30125_30158[(2)] = null);

(statearr_30125_30158[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30123 === (4))){
var inst_30086 = (state_30122[(7)]);
var inst_30088 = (inst_30086 < cnt);
var state_30122__$1 = state_30122;
if(cljs.core.truth_(inst_30088)){
var statearr_30126_30159 = state_30122__$1;
(statearr_30126_30159[(1)] = (6));

} else {
var statearr_30127_30160 = state_30122__$1;
(statearr_30127_30160[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30123 === (15))){
var inst_30118 = (state_30122[(2)]);
var state_30122__$1 = state_30122;
var statearr_30128_30161 = state_30122__$1;
(statearr_30128_30161[(2)] = inst_30118);

(statearr_30128_30161[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30123 === (13))){
var inst_30111 = cljs.core.async.close_BANG_.call(null,out);
var state_30122__$1 = state_30122;
var statearr_30129_30162 = state_30122__$1;
(statearr_30129_30162[(2)] = inst_30111);

(statearr_30129_30162[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30123 === (6))){
var state_30122__$1 = state_30122;
var statearr_30130_30163 = state_30122__$1;
(statearr_30130_30163[(2)] = null);

(statearr_30130_30163[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30123 === (3))){
var inst_30120 = (state_30122[(2)]);
var state_30122__$1 = state_30122;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30122__$1,inst_30120);
} else {
if((state_val_30123 === (12))){
var inst_30108 = (state_30122[(8)]);
var inst_30108__$1 = (state_30122[(2)]);
var inst_30109 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_30108__$1);
var state_30122__$1 = (function (){var statearr_30131 = state_30122;
(statearr_30131[(8)] = inst_30108__$1);

return statearr_30131;
})();
if(cljs.core.truth_(inst_30109)){
var statearr_30132_30164 = state_30122__$1;
(statearr_30132_30164[(1)] = (13));

} else {
var statearr_30133_30165 = state_30122__$1;
(statearr_30133_30165[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30123 === (2))){
var inst_30085 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_30086 = (0);
var state_30122__$1 = (function (){var statearr_30134 = state_30122;
(statearr_30134[(7)] = inst_30086);

(statearr_30134[(9)] = inst_30085);

return statearr_30134;
})();
var statearr_30135_30166 = state_30122__$1;
(statearr_30135_30166[(2)] = null);

(statearr_30135_30166[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30123 === (11))){
var inst_30086 = (state_30122[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_30122,(10),Object,null,(9));
var inst_30095 = chs__$1.call(null,inst_30086);
var inst_30096 = done.call(null,inst_30086);
var inst_30097 = cljs.core.async.take_BANG_.call(null,inst_30095,inst_30096);
var state_30122__$1 = state_30122;
var statearr_30136_30167 = state_30122__$1;
(statearr_30136_30167[(2)] = inst_30097);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30122__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30123 === (9))){
var inst_30086 = (state_30122[(7)]);
var inst_30099 = (state_30122[(2)]);
var inst_30100 = (inst_30086 + (1));
var inst_30086__$1 = inst_30100;
var state_30122__$1 = (function (){var statearr_30137 = state_30122;
(statearr_30137[(7)] = inst_30086__$1);

(statearr_30137[(10)] = inst_30099);

return statearr_30137;
})();
var statearr_30138_30168 = state_30122__$1;
(statearr_30138_30168[(2)] = null);

(statearr_30138_30168[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30123 === (5))){
var inst_30106 = (state_30122[(2)]);
var state_30122__$1 = (function (){var statearr_30139 = state_30122;
(statearr_30139[(11)] = inst_30106);

return statearr_30139;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30122__$1,(12),dchan);
} else {
if((state_val_30123 === (14))){
var inst_30108 = (state_30122[(8)]);
var inst_30113 = cljs.core.apply.call(null,f,inst_30108);
var state_30122__$1 = state_30122;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30122__$1,(16),out,inst_30113);
} else {
if((state_val_30123 === (16))){
var inst_30115 = (state_30122[(2)]);
var state_30122__$1 = (function (){var statearr_30140 = state_30122;
(statearr_30140[(12)] = inst_30115);

return statearr_30140;
})();
var statearr_30141_30169 = state_30122__$1;
(statearr_30141_30169[(2)] = null);

(statearr_30141_30169[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30123 === (10))){
var inst_30090 = (state_30122[(2)]);
var inst_30091 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_30122__$1 = (function (){var statearr_30142 = state_30122;
(statearr_30142[(13)] = inst_30090);

return statearr_30142;
})();
var statearr_30143_30170 = state_30122__$1;
(statearr_30143_30170[(2)] = inst_30091);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30122__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30123 === (8))){
var inst_30104 = (state_30122[(2)]);
var state_30122__$1 = state_30122;
var statearr_30144_30171 = state_30122__$1;
(statearr_30144_30171[(2)] = inst_30104);

(statearr_30144_30171[(1)] = (5));


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
});})(c__28113__auto___30156,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__28001__auto__,c__28113__auto___30156,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__28002__auto__ = null;
var cljs$core$async$state_machine__28002__auto____0 = (function (){
var statearr_30148 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30148[(0)] = cljs$core$async$state_machine__28002__auto__);

(statearr_30148[(1)] = (1));

return statearr_30148;
});
var cljs$core$async$state_machine__28002__auto____1 = (function (state_30122){
while(true){
var ret_value__28003__auto__ = (function (){try{while(true){
var result__28004__auto__ = switch__28001__auto__.call(null,state_30122);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28004__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28004__auto__;
}
break;
}
}catch (e30149){if((e30149 instanceof Object)){
var ex__28005__auto__ = e30149;
var statearr_30150_30172 = state_30122;
(statearr_30150_30172[(5)] = ex__28005__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30122);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30149;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28003__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30173 = state_30122;
state_30122 = G__30173;
continue;
} else {
return ret_value__28003__auto__;
}
break;
}
});
cljs$core$async$state_machine__28002__auto__ = function(state_30122){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28002__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28002__auto____1.call(this,state_30122);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28002__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28002__auto____0;
cljs$core$async$state_machine__28002__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28002__auto____1;
return cljs$core$async$state_machine__28002__auto__;
})()
;})(switch__28001__auto__,c__28113__auto___30156,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__28115__auto__ = (function (){var statearr_30151 = f__28114__auto__.call(null);
(statearr_30151[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28113__auto___30156);

return statearr_30151;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28115__auto__);
});})(c__28113__auto___30156,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args30175 = [];
var len__26332__auto___30233 = arguments.length;
var i__26333__auto___30234 = (0);
while(true){
if((i__26333__auto___30234 < len__26332__auto___30233)){
args30175.push((arguments[i__26333__auto___30234]));

var G__30235 = (i__26333__auto___30234 + (1));
i__26333__auto___30234 = G__30235;
continue;
} else {
}
break;
}

var G__30177 = args30175.length;
switch (G__30177) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args30175.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28113__auto___30237 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28113__auto___30237,out){
return (function (){
var f__28114__auto__ = (function (){var switch__28001__auto__ = ((function (c__28113__auto___30237,out){
return (function (state_30209){
var state_val_30210 = (state_30209[(1)]);
if((state_val_30210 === (7))){
var inst_30188 = (state_30209[(7)]);
var inst_30189 = (state_30209[(8)]);
var inst_30188__$1 = (state_30209[(2)]);
var inst_30189__$1 = cljs.core.nth.call(null,inst_30188__$1,(0),null);
var inst_30190 = cljs.core.nth.call(null,inst_30188__$1,(1),null);
var inst_30191 = (inst_30189__$1 == null);
var state_30209__$1 = (function (){var statearr_30211 = state_30209;
(statearr_30211[(9)] = inst_30190);

(statearr_30211[(7)] = inst_30188__$1);

(statearr_30211[(8)] = inst_30189__$1);

return statearr_30211;
})();
if(cljs.core.truth_(inst_30191)){
var statearr_30212_30238 = state_30209__$1;
(statearr_30212_30238[(1)] = (8));

} else {
var statearr_30213_30239 = state_30209__$1;
(statearr_30213_30239[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30210 === (1))){
var inst_30178 = cljs.core.vec.call(null,chs);
var inst_30179 = inst_30178;
var state_30209__$1 = (function (){var statearr_30214 = state_30209;
(statearr_30214[(10)] = inst_30179);

return statearr_30214;
})();
var statearr_30215_30240 = state_30209__$1;
(statearr_30215_30240[(2)] = null);

(statearr_30215_30240[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30210 === (4))){
var inst_30179 = (state_30209[(10)]);
var state_30209__$1 = state_30209;
return cljs.core.async.ioc_alts_BANG_.call(null,state_30209__$1,(7),inst_30179);
} else {
if((state_val_30210 === (6))){
var inst_30205 = (state_30209[(2)]);
var state_30209__$1 = state_30209;
var statearr_30216_30241 = state_30209__$1;
(statearr_30216_30241[(2)] = inst_30205);

(statearr_30216_30241[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30210 === (3))){
var inst_30207 = (state_30209[(2)]);
var state_30209__$1 = state_30209;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30209__$1,inst_30207);
} else {
if((state_val_30210 === (2))){
var inst_30179 = (state_30209[(10)]);
var inst_30181 = cljs.core.count.call(null,inst_30179);
var inst_30182 = (inst_30181 > (0));
var state_30209__$1 = state_30209;
if(cljs.core.truth_(inst_30182)){
var statearr_30218_30242 = state_30209__$1;
(statearr_30218_30242[(1)] = (4));

} else {
var statearr_30219_30243 = state_30209__$1;
(statearr_30219_30243[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30210 === (11))){
var inst_30179 = (state_30209[(10)]);
var inst_30198 = (state_30209[(2)]);
var tmp30217 = inst_30179;
var inst_30179__$1 = tmp30217;
var state_30209__$1 = (function (){var statearr_30220 = state_30209;
(statearr_30220[(11)] = inst_30198);

(statearr_30220[(10)] = inst_30179__$1);

return statearr_30220;
})();
var statearr_30221_30244 = state_30209__$1;
(statearr_30221_30244[(2)] = null);

(statearr_30221_30244[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30210 === (9))){
var inst_30189 = (state_30209[(8)]);
var state_30209__$1 = state_30209;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30209__$1,(11),out,inst_30189);
} else {
if((state_val_30210 === (5))){
var inst_30203 = cljs.core.async.close_BANG_.call(null,out);
var state_30209__$1 = state_30209;
var statearr_30222_30245 = state_30209__$1;
(statearr_30222_30245[(2)] = inst_30203);

(statearr_30222_30245[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30210 === (10))){
var inst_30201 = (state_30209[(2)]);
var state_30209__$1 = state_30209;
var statearr_30223_30246 = state_30209__$1;
(statearr_30223_30246[(2)] = inst_30201);

(statearr_30223_30246[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30210 === (8))){
var inst_30190 = (state_30209[(9)]);
var inst_30188 = (state_30209[(7)]);
var inst_30189 = (state_30209[(8)]);
var inst_30179 = (state_30209[(10)]);
var inst_30193 = (function (){var cs = inst_30179;
var vec__30184 = inst_30188;
var v = inst_30189;
var c = inst_30190;
return ((function (cs,vec__30184,v,c,inst_30190,inst_30188,inst_30189,inst_30179,state_val_30210,c__28113__auto___30237,out){
return (function (p1__30174_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__30174_SHARP_);
});
;})(cs,vec__30184,v,c,inst_30190,inst_30188,inst_30189,inst_30179,state_val_30210,c__28113__auto___30237,out))
})();
var inst_30194 = cljs.core.filterv.call(null,inst_30193,inst_30179);
var inst_30179__$1 = inst_30194;
var state_30209__$1 = (function (){var statearr_30224 = state_30209;
(statearr_30224[(10)] = inst_30179__$1);

return statearr_30224;
})();
var statearr_30225_30247 = state_30209__$1;
(statearr_30225_30247[(2)] = null);

(statearr_30225_30247[(1)] = (2));


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
});})(c__28113__auto___30237,out))
;
return ((function (switch__28001__auto__,c__28113__auto___30237,out){
return (function() {
var cljs$core$async$state_machine__28002__auto__ = null;
var cljs$core$async$state_machine__28002__auto____0 = (function (){
var statearr_30229 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30229[(0)] = cljs$core$async$state_machine__28002__auto__);

(statearr_30229[(1)] = (1));

return statearr_30229;
});
var cljs$core$async$state_machine__28002__auto____1 = (function (state_30209){
while(true){
var ret_value__28003__auto__ = (function (){try{while(true){
var result__28004__auto__ = switch__28001__auto__.call(null,state_30209);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28004__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28004__auto__;
}
break;
}
}catch (e30230){if((e30230 instanceof Object)){
var ex__28005__auto__ = e30230;
var statearr_30231_30248 = state_30209;
(statearr_30231_30248[(5)] = ex__28005__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30209);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30230;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28003__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30249 = state_30209;
state_30209 = G__30249;
continue;
} else {
return ret_value__28003__auto__;
}
break;
}
});
cljs$core$async$state_machine__28002__auto__ = function(state_30209){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28002__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28002__auto____1.call(this,state_30209);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28002__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28002__auto____0;
cljs$core$async$state_machine__28002__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28002__auto____1;
return cljs$core$async$state_machine__28002__auto__;
})()
;})(switch__28001__auto__,c__28113__auto___30237,out))
})();
var state__28115__auto__ = (function (){var statearr_30232 = f__28114__auto__.call(null);
(statearr_30232[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28113__auto___30237);

return statearr_30232;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28115__auto__);
});})(c__28113__auto___30237,out))
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
var args30250 = [];
var len__26332__auto___30299 = arguments.length;
var i__26333__auto___30300 = (0);
while(true){
if((i__26333__auto___30300 < len__26332__auto___30299)){
args30250.push((arguments[i__26333__auto___30300]));

var G__30301 = (i__26333__auto___30300 + (1));
i__26333__auto___30300 = G__30301;
continue;
} else {
}
break;
}

var G__30252 = args30250.length;
switch (G__30252) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args30250.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28113__auto___30303 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28113__auto___30303,out){
return (function (){
var f__28114__auto__ = (function (){var switch__28001__auto__ = ((function (c__28113__auto___30303,out){
return (function (state_30276){
var state_val_30277 = (state_30276[(1)]);
if((state_val_30277 === (7))){
var inst_30258 = (state_30276[(7)]);
var inst_30258__$1 = (state_30276[(2)]);
var inst_30259 = (inst_30258__$1 == null);
var inst_30260 = cljs.core.not.call(null,inst_30259);
var state_30276__$1 = (function (){var statearr_30278 = state_30276;
(statearr_30278[(7)] = inst_30258__$1);

return statearr_30278;
})();
if(inst_30260){
var statearr_30279_30304 = state_30276__$1;
(statearr_30279_30304[(1)] = (8));

} else {
var statearr_30280_30305 = state_30276__$1;
(statearr_30280_30305[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30277 === (1))){
var inst_30253 = (0);
var state_30276__$1 = (function (){var statearr_30281 = state_30276;
(statearr_30281[(8)] = inst_30253);

return statearr_30281;
})();
var statearr_30282_30306 = state_30276__$1;
(statearr_30282_30306[(2)] = null);

(statearr_30282_30306[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30277 === (4))){
var state_30276__$1 = state_30276;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30276__$1,(7),ch);
} else {
if((state_val_30277 === (6))){
var inst_30271 = (state_30276[(2)]);
var state_30276__$1 = state_30276;
var statearr_30283_30307 = state_30276__$1;
(statearr_30283_30307[(2)] = inst_30271);

(statearr_30283_30307[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30277 === (3))){
var inst_30273 = (state_30276[(2)]);
var inst_30274 = cljs.core.async.close_BANG_.call(null,out);
var state_30276__$1 = (function (){var statearr_30284 = state_30276;
(statearr_30284[(9)] = inst_30273);

return statearr_30284;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30276__$1,inst_30274);
} else {
if((state_val_30277 === (2))){
var inst_30253 = (state_30276[(8)]);
var inst_30255 = (inst_30253 < n);
var state_30276__$1 = state_30276;
if(cljs.core.truth_(inst_30255)){
var statearr_30285_30308 = state_30276__$1;
(statearr_30285_30308[(1)] = (4));

} else {
var statearr_30286_30309 = state_30276__$1;
(statearr_30286_30309[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30277 === (11))){
var inst_30253 = (state_30276[(8)]);
var inst_30263 = (state_30276[(2)]);
var inst_30264 = (inst_30253 + (1));
var inst_30253__$1 = inst_30264;
var state_30276__$1 = (function (){var statearr_30287 = state_30276;
(statearr_30287[(8)] = inst_30253__$1);

(statearr_30287[(10)] = inst_30263);

return statearr_30287;
})();
var statearr_30288_30310 = state_30276__$1;
(statearr_30288_30310[(2)] = null);

(statearr_30288_30310[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30277 === (9))){
var state_30276__$1 = state_30276;
var statearr_30289_30311 = state_30276__$1;
(statearr_30289_30311[(2)] = null);

(statearr_30289_30311[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30277 === (5))){
var state_30276__$1 = state_30276;
var statearr_30290_30312 = state_30276__$1;
(statearr_30290_30312[(2)] = null);

(statearr_30290_30312[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30277 === (10))){
var inst_30268 = (state_30276[(2)]);
var state_30276__$1 = state_30276;
var statearr_30291_30313 = state_30276__$1;
(statearr_30291_30313[(2)] = inst_30268);

(statearr_30291_30313[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30277 === (8))){
var inst_30258 = (state_30276[(7)]);
var state_30276__$1 = state_30276;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30276__$1,(11),out,inst_30258);
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
});})(c__28113__auto___30303,out))
;
return ((function (switch__28001__auto__,c__28113__auto___30303,out){
return (function() {
var cljs$core$async$state_machine__28002__auto__ = null;
var cljs$core$async$state_machine__28002__auto____0 = (function (){
var statearr_30295 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30295[(0)] = cljs$core$async$state_machine__28002__auto__);

(statearr_30295[(1)] = (1));

return statearr_30295;
});
var cljs$core$async$state_machine__28002__auto____1 = (function (state_30276){
while(true){
var ret_value__28003__auto__ = (function (){try{while(true){
var result__28004__auto__ = switch__28001__auto__.call(null,state_30276);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28004__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28004__auto__;
}
break;
}
}catch (e30296){if((e30296 instanceof Object)){
var ex__28005__auto__ = e30296;
var statearr_30297_30314 = state_30276;
(statearr_30297_30314[(5)] = ex__28005__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30276);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30296;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28003__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30315 = state_30276;
state_30276 = G__30315;
continue;
} else {
return ret_value__28003__auto__;
}
break;
}
});
cljs$core$async$state_machine__28002__auto__ = function(state_30276){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28002__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28002__auto____1.call(this,state_30276);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28002__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28002__auto____0;
cljs$core$async$state_machine__28002__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28002__auto____1;
return cljs$core$async$state_machine__28002__auto__;
})()
;})(switch__28001__auto__,c__28113__auto___30303,out))
})();
var state__28115__auto__ = (function (){var statearr_30298 = f__28114__auto__.call(null);
(statearr_30298[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28113__auto___30303);

return statearr_30298;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28115__auto__);
});})(c__28113__auto___30303,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async30323 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30323 = (function (f,ch,meta30324){
this.f = f;
this.ch = ch;
this.meta30324 = meta30324;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30323.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30325,meta30324__$1){
var self__ = this;
var _30325__$1 = this;
return (new cljs.core.async.t_cljs$core$async30323(self__.f,self__.ch,meta30324__$1));
});

cljs.core.async.t_cljs$core$async30323.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30325){
var self__ = this;
var _30325__$1 = this;
return self__.meta30324;
});

cljs.core.async.t_cljs$core$async30323.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30323.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async30323.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async30323.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30323.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async30326 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30326 = (function (f,ch,meta30324,_,fn1,meta30327){
this.f = f;
this.ch = ch;
this.meta30324 = meta30324;
this._ = _;
this.fn1 = fn1;
this.meta30327 = meta30327;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30326.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_30328,meta30327__$1){
var self__ = this;
var _30328__$1 = this;
return (new cljs.core.async.t_cljs$core$async30326(self__.f,self__.ch,self__.meta30324,self__._,self__.fn1,meta30327__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async30326.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_30328){
var self__ = this;
var _30328__$1 = this;
return self__.meta30327;
});})(___$1))
;

cljs.core.async.t_cljs$core$async30326.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30326.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async30326.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async30326.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__30316_SHARP_){
return f1.call(null,(((p1__30316_SHARP_ == null))?null:self__.f.call(null,p1__30316_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async30326.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta30324","meta30324",-1888008800,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async30323","cljs.core.async/t_cljs$core$async30323",-850429384,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta30327","meta30327",-386192469,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async30326.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30326.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30326";

cljs.core.async.t_cljs$core$async30326.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__25830__auto__,writer__25831__auto__,opt__25832__auto__){
return cljs.core._write.call(null,writer__25831__auto__,"cljs.core.async/t_cljs$core$async30326");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async30326 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async30326(f__$1,ch__$1,meta30324__$1,___$2,fn1__$1,meta30327){
return (new cljs.core.async.t_cljs$core$async30326(f__$1,ch__$1,meta30324__$1,___$2,fn1__$1,meta30327));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async30326(self__.f,self__.ch,self__.meta30324,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__25207__auto__ = ret;
if(cljs.core.truth_(and__25207__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__25207__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async30323.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30323.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async30323.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta30324","meta30324",-1888008800,null)], null);
});

cljs.core.async.t_cljs$core$async30323.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30323.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30323";

cljs.core.async.t_cljs$core$async30323.cljs$lang$ctorPrWriter = (function (this__25830__auto__,writer__25831__auto__,opt__25832__auto__){
return cljs.core._write.call(null,writer__25831__auto__,"cljs.core.async/t_cljs$core$async30323");
});

cljs.core.async.__GT_t_cljs$core$async30323 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async30323(f__$1,ch__$1,meta30324){
return (new cljs.core.async.t_cljs$core$async30323(f__$1,ch__$1,meta30324));
});

}

return (new cljs.core.async.t_cljs$core$async30323(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async30332 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30332 = (function (f,ch,meta30333){
this.f = f;
this.ch = ch;
this.meta30333 = meta30333;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30332.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30334,meta30333__$1){
var self__ = this;
var _30334__$1 = this;
return (new cljs.core.async.t_cljs$core$async30332(self__.f,self__.ch,meta30333__$1));
});

cljs.core.async.t_cljs$core$async30332.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30334){
var self__ = this;
var _30334__$1 = this;
return self__.meta30333;
});

cljs.core.async.t_cljs$core$async30332.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30332.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async30332.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30332.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async30332.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30332.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async30332.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta30333","meta30333",-731211900,null)], null);
});

cljs.core.async.t_cljs$core$async30332.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30332.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30332";

cljs.core.async.t_cljs$core$async30332.cljs$lang$ctorPrWriter = (function (this__25830__auto__,writer__25831__auto__,opt__25832__auto__){
return cljs.core._write.call(null,writer__25831__auto__,"cljs.core.async/t_cljs$core$async30332");
});

cljs.core.async.__GT_t_cljs$core$async30332 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async30332(f__$1,ch__$1,meta30333){
return (new cljs.core.async.t_cljs$core$async30332(f__$1,ch__$1,meta30333));
});

}

return (new cljs.core.async.t_cljs$core$async30332(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async30338 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30338 = (function (p,ch,meta30339){
this.p = p;
this.ch = ch;
this.meta30339 = meta30339;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30338.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30340,meta30339__$1){
var self__ = this;
var _30340__$1 = this;
return (new cljs.core.async.t_cljs$core$async30338(self__.p,self__.ch,meta30339__$1));
});

cljs.core.async.t_cljs$core$async30338.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30340){
var self__ = this;
var _30340__$1 = this;
return self__.meta30339;
});

cljs.core.async.t_cljs$core$async30338.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30338.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async30338.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async30338.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30338.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async30338.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30338.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async30338.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta30339","meta30339",2076489501,null)], null);
});

cljs.core.async.t_cljs$core$async30338.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30338.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30338";

cljs.core.async.t_cljs$core$async30338.cljs$lang$ctorPrWriter = (function (this__25830__auto__,writer__25831__auto__,opt__25832__auto__){
return cljs.core._write.call(null,writer__25831__auto__,"cljs.core.async/t_cljs$core$async30338");
});

cljs.core.async.__GT_t_cljs$core$async30338 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async30338(p__$1,ch__$1,meta30339){
return (new cljs.core.async.t_cljs$core$async30338(p__$1,ch__$1,meta30339));
});

}

return (new cljs.core.async.t_cljs$core$async30338(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args30341 = [];
var len__26332__auto___30385 = arguments.length;
var i__26333__auto___30386 = (0);
while(true){
if((i__26333__auto___30386 < len__26332__auto___30385)){
args30341.push((arguments[i__26333__auto___30386]));

var G__30387 = (i__26333__auto___30386 + (1));
i__26333__auto___30386 = G__30387;
continue;
} else {
}
break;
}

var G__30343 = args30341.length;
switch (G__30343) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args30341.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28113__auto___30389 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28113__auto___30389,out){
return (function (){
var f__28114__auto__ = (function (){var switch__28001__auto__ = ((function (c__28113__auto___30389,out){
return (function (state_30364){
var state_val_30365 = (state_30364[(1)]);
if((state_val_30365 === (7))){
var inst_30360 = (state_30364[(2)]);
var state_30364__$1 = state_30364;
var statearr_30366_30390 = state_30364__$1;
(statearr_30366_30390[(2)] = inst_30360);

(statearr_30366_30390[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30365 === (1))){
var state_30364__$1 = state_30364;
var statearr_30367_30391 = state_30364__$1;
(statearr_30367_30391[(2)] = null);

(statearr_30367_30391[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30365 === (4))){
var inst_30346 = (state_30364[(7)]);
var inst_30346__$1 = (state_30364[(2)]);
var inst_30347 = (inst_30346__$1 == null);
var state_30364__$1 = (function (){var statearr_30368 = state_30364;
(statearr_30368[(7)] = inst_30346__$1);

return statearr_30368;
})();
if(cljs.core.truth_(inst_30347)){
var statearr_30369_30392 = state_30364__$1;
(statearr_30369_30392[(1)] = (5));

} else {
var statearr_30370_30393 = state_30364__$1;
(statearr_30370_30393[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30365 === (6))){
var inst_30346 = (state_30364[(7)]);
var inst_30351 = p.call(null,inst_30346);
var state_30364__$1 = state_30364;
if(cljs.core.truth_(inst_30351)){
var statearr_30371_30394 = state_30364__$1;
(statearr_30371_30394[(1)] = (8));

} else {
var statearr_30372_30395 = state_30364__$1;
(statearr_30372_30395[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30365 === (3))){
var inst_30362 = (state_30364[(2)]);
var state_30364__$1 = state_30364;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30364__$1,inst_30362);
} else {
if((state_val_30365 === (2))){
var state_30364__$1 = state_30364;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30364__$1,(4),ch);
} else {
if((state_val_30365 === (11))){
var inst_30354 = (state_30364[(2)]);
var state_30364__$1 = state_30364;
var statearr_30373_30396 = state_30364__$1;
(statearr_30373_30396[(2)] = inst_30354);

(statearr_30373_30396[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30365 === (9))){
var state_30364__$1 = state_30364;
var statearr_30374_30397 = state_30364__$1;
(statearr_30374_30397[(2)] = null);

(statearr_30374_30397[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30365 === (5))){
var inst_30349 = cljs.core.async.close_BANG_.call(null,out);
var state_30364__$1 = state_30364;
var statearr_30375_30398 = state_30364__$1;
(statearr_30375_30398[(2)] = inst_30349);

(statearr_30375_30398[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30365 === (10))){
var inst_30357 = (state_30364[(2)]);
var state_30364__$1 = (function (){var statearr_30376 = state_30364;
(statearr_30376[(8)] = inst_30357);

return statearr_30376;
})();
var statearr_30377_30399 = state_30364__$1;
(statearr_30377_30399[(2)] = null);

(statearr_30377_30399[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30365 === (8))){
var inst_30346 = (state_30364[(7)]);
var state_30364__$1 = state_30364;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30364__$1,(11),out,inst_30346);
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
});})(c__28113__auto___30389,out))
;
return ((function (switch__28001__auto__,c__28113__auto___30389,out){
return (function() {
var cljs$core$async$state_machine__28002__auto__ = null;
var cljs$core$async$state_machine__28002__auto____0 = (function (){
var statearr_30381 = [null,null,null,null,null,null,null,null,null];
(statearr_30381[(0)] = cljs$core$async$state_machine__28002__auto__);

(statearr_30381[(1)] = (1));

return statearr_30381;
});
var cljs$core$async$state_machine__28002__auto____1 = (function (state_30364){
while(true){
var ret_value__28003__auto__ = (function (){try{while(true){
var result__28004__auto__ = switch__28001__auto__.call(null,state_30364);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28004__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28004__auto__;
}
break;
}
}catch (e30382){if((e30382 instanceof Object)){
var ex__28005__auto__ = e30382;
var statearr_30383_30400 = state_30364;
(statearr_30383_30400[(5)] = ex__28005__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30364);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30382;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28003__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30401 = state_30364;
state_30364 = G__30401;
continue;
} else {
return ret_value__28003__auto__;
}
break;
}
});
cljs$core$async$state_machine__28002__auto__ = function(state_30364){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28002__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28002__auto____1.call(this,state_30364);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28002__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28002__auto____0;
cljs$core$async$state_machine__28002__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28002__auto____1;
return cljs$core$async$state_machine__28002__auto__;
})()
;})(switch__28001__auto__,c__28113__auto___30389,out))
})();
var state__28115__auto__ = (function (){var statearr_30384 = f__28114__auto__.call(null);
(statearr_30384[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28113__auto___30389);

return statearr_30384;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28115__auto__);
});})(c__28113__auto___30389,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args30402 = [];
var len__26332__auto___30405 = arguments.length;
var i__26333__auto___30406 = (0);
while(true){
if((i__26333__auto___30406 < len__26332__auto___30405)){
args30402.push((arguments[i__26333__auto___30406]));

var G__30407 = (i__26333__auto___30406 + (1));
i__26333__auto___30406 = G__30407;
continue;
} else {
}
break;
}

var G__30404 = args30402.length;
switch (G__30404) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args30402.length)].join('')));

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
var c__28113__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28113__auto__){
return (function (){
var f__28114__auto__ = (function (){var switch__28001__auto__ = ((function (c__28113__auto__){
return (function (state_30574){
var state_val_30575 = (state_30574[(1)]);
if((state_val_30575 === (7))){
var inst_30570 = (state_30574[(2)]);
var state_30574__$1 = state_30574;
var statearr_30576_30617 = state_30574__$1;
(statearr_30576_30617[(2)] = inst_30570);

(statearr_30576_30617[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30575 === (20))){
var inst_30540 = (state_30574[(7)]);
var inst_30551 = (state_30574[(2)]);
var inst_30552 = cljs.core.next.call(null,inst_30540);
var inst_30526 = inst_30552;
var inst_30527 = null;
var inst_30528 = (0);
var inst_30529 = (0);
var state_30574__$1 = (function (){var statearr_30577 = state_30574;
(statearr_30577[(8)] = inst_30551);

(statearr_30577[(9)] = inst_30527);

(statearr_30577[(10)] = inst_30528);

(statearr_30577[(11)] = inst_30529);

(statearr_30577[(12)] = inst_30526);

return statearr_30577;
})();
var statearr_30578_30618 = state_30574__$1;
(statearr_30578_30618[(2)] = null);

(statearr_30578_30618[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30575 === (1))){
var state_30574__$1 = state_30574;
var statearr_30579_30619 = state_30574__$1;
(statearr_30579_30619[(2)] = null);

(statearr_30579_30619[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30575 === (4))){
var inst_30515 = (state_30574[(13)]);
var inst_30515__$1 = (state_30574[(2)]);
var inst_30516 = (inst_30515__$1 == null);
var state_30574__$1 = (function (){var statearr_30580 = state_30574;
(statearr_30580[(13)] = inst_30515__$1);

return statearr_30580;
})();
if(cljs.core.truth_(inst_30516)){
var statearr_30581_30620 = state_30574__$1;
(statearr_30581_30620[(1)] = (5));

} else {
var statearr_30582_30621 = state_30574__$1;
(statearr_30582_30621[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30575 === (15))){
var state_30574__$1 = state_30574;
var statearr_30586_30622 = state_30574__$1;
(statearr_30586_30622[(2)] = null);

(statearr_30586_30622[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30575 === (21))){
var state_30574__$1 = state_30574;
var statearr_30587_30623 = state_30574__$1;
(statearr_30587_30623[(2)] = null);

(statearr_30587_30623[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30575 === (13))){
var inst_30527 = (state_30574[(9)]);
var inst_30528 = (state_30574[(10)]);
var inst_30529 = (state_30574[(11)]);
var inst_30526 = (state_30574[(12)]);
var inst_30536 = (state_30574[(2)]);
var inst_30537 = (inst_30529 + (1));
var tmp30583 = inst_30527;
var tmp30584 = inst_30528;
var tmp30585 = inst_30526;
var inst_30526__$1 = tmp30585;
var inst_30527__$1 = tmp30583;
var inst_30528__$1 = tmp30584;
var inst_30529__$1 = inst_30537;
var state_30574__$1 = (function (){var statearr_30588 = state_30574;
(statearr_30588[(9)] = inst_30527__$1);

(statearr_30588[(10)] = inst_30528__$1);

(statearr_30588[(11)] = inst_30529__$1);

(statearr_30588[(12)] = inst_30526__$1);

(statearr_30588[(14)] = inst_30536);

return statearr_30588;
})();
var statearr_30589_30624 = state_30574__$1;
(statearr_30589_30624[(2)] = null);

(statearr_30589_30624[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30575 === (22))){
var state_30574__$1 = state_30574;
var statearr_30590_30625 = state_30574__$1;
(statearr_30590_30625[(2)] = null);

(statearr_30590_30625[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30575 === (6))){
var inst_30515 = (state_30574[(13)]);
var inst_30524 = f.call(null,inst_30515);
var inst_30525 = cljs.core.seq.call(null,inst_30524);
var inst_30526 = inst_30525;
var inst_30527 = null;
var inst_30528 = (0);
var inst_30529 = (0);
var state_30574__$1 = (function (){var statearr_30591 = state_30574;
(statearr_30591[(9)] = inst_30527);

(statearr_30591[(10)] = inst_30528);

(statearr_30591[(11)] = inst_30529);

(statearr_30591[(12)] = inst_30526);

return statearr_30591;
})();
var statearr_30592_30626 = state_30574__$1;
(statearr_30592_30626[(2)] = null);

(statearr_30592_30626[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30575 === (17))){
var inst_30540 = (state_30574[(7)]);
var inst_30544 = cljs.core.chunk_first.call(null,inst_30540);
var inst_30545 = cljs.core.chunk_rest.call(null,inst_30540);
var inst_30546 = cljs.core.count.call(null,inst_30544);
var inst_30526 = inst_30545;
var inst_30527 = inst_30544;
var inst_30528 = inst_30546;
var inst_30529 = (0);
var state_30574__$1 = (function (){var statearr_30593 = state_30574;
(statearr_30593[(9)] = inst_30527);

(statearr_30593[(10)] = inst_30528);

(statearr_30593[(11)] = inst_30529);

(statearr_30593[(12)] = inst_30526);

return statearr_30593;
})();
var statearr_30594_30627 = state_30574__$1;
(statearr_30594_30627[(2)] = null);

(statearr_30594_30627[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30575 === (3))){
var inst_30572 = (state_30574[(2)]);
var state_30574__$1 = state_30574;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30574__$1,inst_30572);
} else {
if((state_val_30575 === (12))){
var inst_30560 = (state_30574[(2)]);
var state_30574__$1 = state_30574;
var statearr_30595_30628 = state_30574__$1;
(statearr_30595_30628[(2)] = inst_30560);

(statearr_30595_30628[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30575 === (2))){
var state_30574__$1 = state_30574;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30574__$1,(4),in$);
} else {
if((state_val_30575 === (23))){
var inst_30568 = (state_30574[(2)]);
var state_30574__$1 = state_30574;
var statearr_30596_30629 = state_30574__$1;
(statearr_30596_30629[(2)] = inst_30568);

(statearr_30596_30629[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30575 === (19))){
var inst_30555 = (state_30574[(2)]);
var state_30574__$1 = state_30574;
var statearr_30597_30630 = state_30574__$1;
(statearr_30597_30630[(2)] = inst_30555);

(statearr_30597_30630[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30575 === (11))){
var inst_30540 = (state_30574[(7)]);
var inst_30526 = (state_30574[(12)]);
var inst_30540__$1 = cljs.core.seq.call(null,inst_30526);
var state_30574__$1 = (function (){var statearr_30598 = state_30574;
(statearr_30598[(7)] = inst_30540__$1);

return statearr_30598;
})();
if(inst_30540__$1){
var statearr_30599_30631 = state_30574__$1;
(statearr_30599_30631[(1)] = (14));

} else {
var statearr_30600_30632 = state_30574__$1;
(statearr_30600_30632[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30575 === (9))){
var inst_30562 = (state_30574[(2)]);
var inst_30563 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_30574__$1 = (function (){var statearr_30601 = state_30574;
(statearr_30601[(15)] = inst_30562);

return statearr_30601;
})();
if(cljs.core.truth_(inst_30563)){
var statearr_30602_30633 = state_30574__$1;
(statearr_30602_30633[(1)] = (21));

} else {
var statearr_30603_30634 = state_30574__$1;
(statearr_30603_30634[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30575 === (5))){
var inst_30518 = cljs.core.async.close_BANG_.call(null,out);
var state_30574__$1 = state_30574;
var statearr_30604_30635 = state_30574__$1;
(statearr_30604_30635[(2)] = inst_30518);

(statearr_30604_30635[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30575 === (14))){
var inst_30540 = (state_30574[(7)]);
var inst_30542 = cljs.core.chunked_seq_QMARK_.call(null,inst_30540);
var state_30574__$1 = state_30574;
if(inst_30542){
var statearr_30605_30636 = state_30574__$1;
(statearr_30605_30636[(1)] = (17));

} else {
var statearr_30606_30637 = state_30574__$1;
(statearr_30606_30637[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30575 === (16))){
var inst_30558 = (state_30574[(2)]);
var state_30574__$1 = state_30574;
var statearr_30607_30638 = state_30574__$1;
(statearr_30607_30638[(2)] = inst_30558);

(statearr_30607_30638[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30575 === (10))){
var inst_30527 = (state_30574[(9)]);
var inst_30529 = (state_30574[(11)]);
var inst_30534 = cljs.core._nth.call(null,inst_30527,inst_30529);
var state_30574__$1 = state_30574;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30574__$1,(13),out,inst_30534);
} else {
if((state_val_30575 === (18))){
var inst_30540 = (state_30574[(7)]);
var inst_30549 = cljs.core.first.call(null,inst_30540);
var state_30574__$1 = state_30574;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30574__$1,(20),out,inst_30549);
} else {
if((state_val_30575 === (8))){
var inst_30528 = (state_30574[(10)]);
var inst_30529 = (state_30574[(11)]);
var inst_30531 = (inst_30529 < inst_30528);
var inst_30532 = inst_30531;
var state_30574__$1 = state_30574;
if(cljs.core.truth_(inst_30532)){
var statearr_30608_30639 = state_30574__$1;
(statearr_30608_30639[(1)] = (10));

} else {
var statearr_30609_30640 = state_30574__$1;
(statearr_30609_30640[(1)] = (11));

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
});})(c__28113__auto__))
;
return ((function (switch__28001__auto__,c__28113__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__28002__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__28002__auto____0 = (function (){
var statearr_30613 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30613[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__28002__auto__);

(statearr_30613[(1)] = (1));

return statearr_30613;
});
var cljs$core$async$mapcat_STAR__$_state_machine__28002__auto____1 = (function (state_30574){
while(true){
var ret_value__28003__auto__ = (function (){try{while(true){
var result__28004__auto__ = switch__28001__auto__.call(null,state_30574);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28004__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28004__auto__;
}
break;
}
}catch (e30614){if((e30614 instanceof Object)){
var ex__28005__auto__ = e30614;
var statearr_30615_30641 = state_30574;
(statearr_30615_30641[(5)] = ex__28005__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30574);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30614;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28003__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30642 = state_30574;
state_30574 = G__30642;
continue;
} else {
return ret_value__28003__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__28002__auto__ = function(state_30574){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__28002__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__28002__auto____1.call(this,state_30574);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__28002__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__28002__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__28002__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__28002__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__28002__auto__;
})()
;})(switch__28001__auto__,c__28113__auto__))
})();
var state__28115__auto__ = (function (){var statearr_30616 = f__28114__auto__.call(null);
(statearr_30616[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28113__auto__);

return statearr_30616;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28115__auto__);
});})(c__28113__auto__))
);

return c__28113__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args30643 = [];
var len__26332__auto___30646 = arguments.length;
var i__26333__auto___30647 = (0);
while(true){
if((i__26333__auto___30647 < len__26332__auto___30646)){
args30643.push((arguments[i__26333__auto___30647]));

var G__30648 = (i__26333__auto___30647 + (1));
i__26333__auto___30647 = G__30648;
continue;
} else {
}
break;
}

var G__30645 = args30643.length;
switch (G__30645) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args30643.length)].join('')));

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
var args30650 = [];
var len__26332__auto___30653 = arguments.length;
var i__26333__auto___30654 = (0);
while(true){
if((i__26333__auto___30654 < len__26332__auto___30653)){
args30650.push((arguments[i__26333__auto___30654]));

var G__30655 = (i__26333__auto___30654 + (1));
i__26333__auto___30654 = G__30655;
continue;
} else {
}
break;
}

var G__30652 = args30650.length;
switch (G__30652) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args30650.length)].join('')));

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
var args30657 = [];
var len__26332__auto___30708 = arguments.length;
var i__26333__auto___30709 = (0);
while(true){
if((i__26333__auto___30709 < len__26332__auto___30708)){
args30657.push((arguments[i__26333__auto___30709]));

var G__30710 = (i__26333__auto___30709 + (1));
i__26333__auto___30709 = G__30710;
continue;
} else {
}
break;
}

var G__30659 = args30657.length;
switch (G__30659) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args30657.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28113__auto___30712 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28113__auto___30712,out){
return (function (){
var f__28114__auto__ = (function (){var switch__28001__auto__ = ((function (c__28113__auto___30712,out){
return (function (state_30683){
var state_val_30684 = (state_30683[(1)]);
if((state_val_30684 === (7))){
var inst_30678 = (state_30683[(2)]);
var state_30683__$1 = state_30683;
var statearr_30685_30713 = state_30683__$1;
(statearr_30685_30713[(2)] = inst_30678);

(statearr_30685_30713[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30684 === (1))){
var inst_30660 = null;
var state_30683__$1 = (function (){var statearr_30686 = state_30683;
(statearr_30686[(7)] = inst_30660);

return statearr_30686;
})();
var statearr_30687_30714 = state_30683__$1;
(statearr_30687_30714[(2)] = null);

(statearr_30687_30714[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30684 === (4))){
var inst_30663 = (state_30683[(8)]);
var inst_30663__$1 = (state_30683[(2)]);
var inst_30664 = (inst_30663__$1 == null);
var inst_30665 = cljs.core.not.call(null,inst_30664);
var state_30683__$1 = (function (){var statearr_30688 = state_30683;
(statearr_30688[(8)] = inst_30663__$1);

return statearr_30688;
})();
if(inst_30665){
var statearr_30689_30715 = state_30683__$1;
(statearr_30689_30715[(1)] = (5));

} else {
var statearr_30690_30716 = state_30683__$1;
(statearr_30690_30716[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30684 === (6))){
var state_30683__$1 = state_30683;
var statearr_30691_30717 = state_30683__$1;
(statearr_30691_30717[(2)] = null);

(statearr_30691_30717[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30684 === (3))){
var inst_30680 = (state_30683[(2)]);
var inst_30681 = cljs.core.async.close_BANG_.call(null,out);
var state_30683__$1 = (function (){var statearr_30692 = state_30683;
(statearr_30692[(9)] = inst_30680);

return statearr_30692;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30683__$1,inst_30681);
} else {
if((state_val_30684 === (2))){
var state_30683__$1 = state_30683;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30683__$1,(4),ch);
} else {
if((state_val_30684 === (11))){
var inst_30663 = (state_30683[(8)]);
var inst_30672 = (state_30683[(2)]);
var inst_30660 = inst_30663;
var state_30683__$1 = (function (){var statearr_30693 = state_30683;
(statearr_30693[(7)] = inst_30660);

(statearr_30693[(10)] = inst_30672);

return statearr_30693;
})();
var statearr_30694_30718 = state_30683__$1;
(statearr_30694_30718[(2)] = null);

(statearr_30694_30718[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30684 === (9))){
var inst_30663 = (state_30683[(8)]);
var state_30683__$1 = state_30683;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30683__$1,(11),out,inst_30663);
} else {
if((state_val_30684 === (5))){
var inst_30663 = (state_30683[(8)]);
var inst_30660 = (state_30683[(7)]);
var inst_30667 = cljs.core._EQ_.call(null,inst_30663,inst_30660);
var state_30683__$1 = state_30683;
if(inst_30667){
var statearr_30696_30719 = state_30683__$1;
(statearr_30696_30719[(1)] = (8));

} else {
var statearr_30697_30720 = state_30683__$1;
(statearr_30697_30720[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30684 === (10))){
var inst_30675 = (state_30683[(2)]);
var state_30683__$1 = state_30683;
var statearr_30698_30721 = state_30683__$1;
(statearr_30698_30721[(2)] = inst_30675);

(statearr_30698_30721[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30684 === (8))){
var inst_30660 = (state_30683[(7)]);
var tmp30695 = inst_30660;
var inst_30660__$1 = tmp30695;
var state_30683__$1 = (function (){var statearr_30699 = state_30683;
(statearr_30699[(7)] = inst_30660__$1);

return statearr_30699;
})();
var statearr_30700_30722 = state_30683__$1;
(statearr_30700_30722[(2)] = null);

(statearr_30700_30722[(1)] = (2));


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
});})(c__28113__auto___30712,out))
;
return ((function (switch__28001__auto__,c__28113__auto___30712,out){
return (function() {
var cljs$core$async$state_machine__28002__auto__ = null;
var cljs$core$async$state_machine__28002__auto____0 = (function (){
var statearr_30704 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30704[(0)] = cljs$core$async$state_machine__28002__auto__);

(statearr_30704[(1)] = (1));

return statearr_30704;
});
var cljs$core$async$state_machine__28002__auto____1 = (function (state_30683){
while(true){
var ret_value__28003__auto__ = (function (){try{while(true){
var result__28004__auto__ = switch__28001__auto__.call(null,state_30683);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28004__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28004__auto__;
}
break;
}
}catch (e30705){if((e30705 instanceof Object)){
var ex__28005__auto__ = e30705;
var statearr_30706_30723 = state_30683;
(statearr_30706_30723[(5)] = ex__28005__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30683);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30705;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28003__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30724 = state_30683;
state_30683 = G__30724;
continue;
} else {
return ret_value__28003__auto__;
}
break;
}
});
cljs$core$async$state_machine__28002__auto__ = function(state_30683){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28002__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28002__auto____1.call(this,state_30683);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28002__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28002__auto____0;
cljs$core$async$state_machine__28002__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28002__auto____1;
return cljs$core$async$state_machine__28002__auto__;
})()
;})(switch__28001__auto__,c__28113__auto___30712,out))
})();
var state__28115__auto__ = (function (){var statearr_30707 = f__28114__auto__.call(null);
(statearr_30707[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28113__auto___30712);

return statearr_30707;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28115__auto__);
});})(c__28113__auto___30712,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args30725 = [];
var len__26332__auto___30795 = arguments.length;
var i__26333__auto___30796 = (0);
while(true){
if((i__26333__auto___30796 < len__26332__auto___30795)){
args30725.push((arguments[i__26333__auto___30796]));

var G__30797 = (i__26333__auto___30796 + (1));
i__26333__auto___30796 = G__30797;
continue;
} else {
}
break;
}

var G__30727 = args30725.length;
switch (G__30727) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args30725.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28113__auto___30799 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28113__auto___30799,out){
return (function (){
var f__28114__auto__ = (function (){var switch__28001__auto__ = ((function (c__28113__auto___30799,out){
return (function (state_30765){
var state_val_30766 = (state_30765[(1)]);
if((state_val_30766 === (7))){
var inst_30761 = (state_30765[(2)]);
var state_30765__$1 = state_30765;
var statearr_30767_30800 = state_30765__$1;
(statearr_30767_30800[(2)] = inst_30761);

(statearr_30767_30800[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30766 === (1))){
var inst_30728 = (new Array(n));
var inst_30729 = inst_30728;
var inst_30730 = (0);
var state_30765__$1 = (function (){var statearr_30768 = state_30765;
(statearr_30768[(7)] = inst_30730);

(statearr_30768[(8)] = inst_30729);

return statearr_30768;
})();
var statearr_30769_30801 = state_30765__$1;
(statearr_30769_30801[(2)] = null);

(statearr_30769_30801[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30766 === (4))){
var inst_30733 = (state_30765[(9)]);
var inst_30733__$1 = (state_30765[(2)]);
var inst_30734 = (inst_30733__$1 == null);
var inst_30735 = cljs.core.not.call(null,inst_30734);
var state_30765__$1 = (function (){var statearr_30770 = state_30765;
(statearr_30770[(9)] = inst_30733__$1);

return statearr_30770;
})();
if(inst_30735){
var statearr_30771_30802 = state_30765__$1;
(statearr_30771_30802[(1)] = (5));

} else {
var statearr_30772_30803 = state_30765__$1;
(statearr_30772_30803[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30766 === (15))){
var inst_30755 = (state_30765[(2)]);
var state_30765__$1 = state_30765;
var statearr_30773_30804 = state_30765__$1;
(statearr_30773_30804[(2)] = inst_30755);

(statearr_30773_30804[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30766 === (13))){
var state_30765__$1 = state_30765;
var statearr_30774_30805 = state_30765__$1;
(statearr_30774_30805[(2)] = null);

(statearr_30774_30805[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30766 === (6))){
var inst_30730 = (state_30765[(7)]);
var inst_30751 = (inst_30730 > (0));
var state_30765__$1 = state_30765;
if(cljs.core.truth_(inst_30751)){
var statearr_30775_30806 = state_30765__$1;
(statearr_30775_30806[(1)] = (12));

} else {
var statearr_30776_30807 = state_30765__$1;
(statearr_30776_30807[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30766 === (3))){
var inst_30763 = (state_30765[(2)]);
var state_30765__$1 = state_30765;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30765__$1,inst_30763);
} else {
if((state_val_30766 === (12))){
var inst_30729 = (state_30765[(8)]);
var inst_30753 = cljs.core.vec.call(null,inst_30729);
var state_30765__$1 = state_30765;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30765__$1,(15),out,inst_30753);
} else {
if((state_val_30766 === (2))){
var state_30765__$1 = state_30765;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30765__$1,(4),ch);
} else {
if((state_val_30766 === (11))){
var inst_30745 = (state_30765[(2)]);
var inst_30746 = (new Array(n));
var inst_30729 = inst_30746;
var inst_30730 = (0);
var state_30765__$1 = (function (){var statearr_30777 = state_30765;
(statearr_30777[(10)] = inst_30745);

(statearr_30777[(7)] = inst_30730);

(statearr_30777[(8)] = inst_30729);

return statearr_30777;
})();
var statearr_30778_30808 = state_30765__$1;
(statearr_30778_30808[(2)] = null);

(statearr_30778_30808[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30766 === (9))){
var inst_30729 = (state_30765[(8)]);
var inst_30743 = cljs.core.vec.call(null,inst_30729);
var state_30765__$1 = state_30765;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30765__$1,(11),out,inst_30743);
} else {
if((state_val_30766 === (5))){
var inst_30730 = (state_30765[(7)]);
var inst_30733 = (state_30765[(9)]);
var inst_30729 = (state_30765[(8)]);
var inst_30738 = (state_30765[(11)]);
var inst_30737 = (inst_30729[inst_30730] = inst_30733);
var inst_30738__$1 = (inst_30730 + (1));
var inst_30739 = (inst_30738__$1 < n);
var state_30765__$1 = (function (){var statearr_30779 = state_30765;
(statearr_30779[(12)] = inst_30737);

(statearr_30779[(11)] = inst_30738__$1);

return statearr_30779;
})();
if(cljs.core.truth_(inst_30739)){
var statearr_30780_30809 = state_30765__$1;
(statearr_30780_30809[(1)] = (8));

} else {
var statearr_30781_30810 = state_30765__$1;
(statearr_30781_30810[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30766 === (14))){
var inst_30758 = (state_30765[(2)]);
var inst_30759 = cljs.core.async.close_BANG_.call(null,out);
var state_30765__$1 = (function (){var statearr_30783 = state_30765;
(statearr_30783[(13)] = inst_30758);

return statearr_30783;
})();
var statearr_30784_30811 = state_30765__$1;
(statearr_30784_30811[(2)] = inst_30759);

(statearr_30784_30811[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30766 === (10))){
var inst_30749 = (state_30765[(2)]);
var state_30765__$1 = state_30765;
var statearr_30785_30812 = state_30765__$1;
(statearr_30785_30812[(2)] = inst_30749);

(statearr_30785_30812[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30766 === (8))){
var inst_30729 = (state_30765[(8)]);
var inst_30738 = (state_30765[(11)]);
var tmp30782 = inst_30729;
var inst_30729__$1 = tmp30782;
var inst_30730 = inst_30738;
var state_30765__$1 = (function (){var statearr_30786 = state_30765;
(statearr_30786[(7)] = inst_30730);

(statearr_30786[(8)] = inst_30729__$1);

return statearr_30786;
})();
var statearr_30787_30813 = state_30765__$1;
(statearr_30787_30813[(2)] = null);

(statearr_30787_30813[(1)] = (2));


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
});})(c__28113__auto___30799,out))
;
return ((function (switch__28001__auto__,c__28113__auto___30799,out){
return (function() {
var cljs$core$async$state_machine__28002__auto__ = null;
var cljs$core$async$state_machine__28002__auto____0 = (function (){
var statearr_30791 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30791[(0)] = cljs$core$async$state_machine__28002__auto__);

(statearr_30791[(1)] = (1));

return statearr_30791;
});
var cljs$core$async$state_machine__28002__auto____1 = (function (state_30765){
while(true){
var ret_value__28003__auto__ = (function (){try{while(true){
var result__28004__auto__ = switch__28001__auto__.call(null,state_30765);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28004__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28004__auto__;
}
break;
}
}catch (e30792){if((e30792 instanceof Object)){
var ex__28005__auto__ = e30792;
var statearr_30793_30814 = state_30765;
(statearr_30793_30814[(5)] = ex__28005__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30765);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30792;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28003__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30815 = state_30765;
state_30765 = G__30815;
continue;
} else {
return ret_value__28003__auto__;
}
break;
}
});
cljs$core$async$state_machine__28002__auto__ = function(state_30765){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28002__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28002__auto____1.call(this,state_30765);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28002__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28002__auto____0;
cljs$core$async$state_machine__28002__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28002__auto____1;
return cljs$core$async$state_machine__28002__auto__;
})()
;})(switch__28001__auto__,c__28113__auto___30799,out))
})();
var state__28115__auto__ = (function (){var statearr_30794 = f__28114__auto__.call(null);
(statearr_30794[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28113__auto___30799);

return statearr_30794;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28115__auto__);
});})(c__28113__auto___30799,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args30816 = [];
var len__26332__auto___30890 = arguments.length;
var i__26333__auto___30891 = (0);
while(true){
if((i__26333__auto___30891 < len__26332__auto___30890)){
args30816.push((arguments[i__26333__auto___30891]));

var G__30892 = (i__26333__auto___30891 + (1));
i__26333__auto___30891 = G__30892;
continue;
} else {
}
break;
}

var G__30818 = args30816.length;
switch (G__30818) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args30816.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28113__auto___30894 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28113__auto___30894,out){
return (function (){
var f__28114__auto__ = (function (){var switch__28001__auto__ = ((function (c__28113__auto___30894,out){
return (function (state_30860){
var state_val_30861 = (state_30860[(1)]);
if((state_val_30861 === (7))){
var inst_30856 = (state_30860[(2)]);
var state_30860__$1 = state_30860;
var statearr_30862_30895 = state_30860__$1;
(statearr_30862_30895[(2)] = inst_30856);

(statearr_30862_30895[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30861 === (1))){
var inst_30819 = [];
var inst_30820 = inst_30819;
var inst_30821 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_30860__$1 = (function (){var statearr_30863 = state_30860;
(statearr_30863[(7)] = inst_30821);

(statearr_30863[(8)] = inst_30820);

return statearr_30863;
})();
var statearr_30864_30896 = state_30860__$1;
(statearr_30864_30896[(2)] = null);

(statearr_30864_30896[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30861 === (4))){
var inst_30824 = (state_30860[(9)]);
var inst_30824__$1 = (state_30860[(2)]);
var inst_30825 = (inst_30824__$1 == null);
var inst_30826 = cljs.core.not.call(null,inst_30825);
var state_30860__$1 = (function (){var statearr_30865 = state_30860;
(statearr_30865[(9)] = inst_30824__$1);

return statearr_30865;
})();
if(inst_30826){
var statearr_30866_30897 = state_30860__$1;
(statearr_30866_30897[(1)] = (5));

} else {
var statearr_30867_30898 = state_30860__$1;
(statearr_30867_30898[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30861 === (15))){
var inst_30850 = (state_30860[(2)]);
var state_30860__$1 = state_30860;
var statearr_30868_30899 = state_30860__$1;
(statearr_30868_30899[(2)] = inst_30850);

(statearr_30868_30899[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30861 === (13))){
var state_30860__$1 = state_30860;
var statearr_30869_30900 = state_30860__$1;
(statearr_30869_30900[(2)] = null);

(statearr_30869_30900[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30861 === (6))){
var inst_30820 = (state_30860[(8)]);
var inst_30845 = inst_30820.length;
var inst_30846 = (inst_30845 > (0));
var state_30860__$1 = state_30860;
if(cljs.core.truth_(inst_30846)){
var statearr_30870_30901 = state_30860__$1;
(statearr_30870_30901[(1)] = (12));

} else {
var statearr_30871_30902 = state_30860__$1;
(statearr_30871_30902[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30861 === (3))){
var inst_30858 = (state_30860[(2)]);
var state_30860__$1 = state_30860;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30860__$1,inst_30858);
} else {
if((state_val_30861 === (12))){
var inst_30820 = (state_30860[(8)]);
var inst_30848 = cljs.core.vec.call(null,inst_30820);
var state_30860__$1 = state_30860;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30860__$1,(15),out,inst_30848);
} else {
if((state_val_30861 === (2))){
var state_30860__$1 = state_30860;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30860__$1,(4),ch);
} else {
if((state_val_30861 === (11))){
var inst_30824 = (state_30860[(9)]);
var inst_30828 = (state_30860[(10)]);
var inst_30838 = (state_30860[(2)]);
var inst_30839 = [];
var inst_30840 = inst_30839.push(inst_30824);
var inst_30820 = inst_30839;
var inst_30821 = inst_30828;
var state_30860__$1 = (function (){var statearr_30872 = state_30860;
(statearr_30872[(11)] = inst_30838);

(statearr_30872[(12)] = inst_30840);

(statearr_30872[(7)] = inst_30821);

(statearr_30872[(8)] = inst_30820);

return statearr_30872;
})();
var statearr_30873_30903 = state_30860__$1;
(statearr_30873_30903[(2)] = null);

(statearr_30873_30903[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30861 === (9))){
var inst_30820 = (state_30860[(8)]);
var inst_30836 = cljs.core.vec.call(null,inst_30820);
var state_30860__$1 = state_30860;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30860__$1,(11),out,inst_30836);
} else {
if((state_val_30861 === (5))){
var inst_30824 = (state_30860[(9)]);
var inst_30821 = (state_30860[(7)]);
var inst_30828 = (state_30860[(10)]);
var inst_30828__$1 = f.call(null,inst_30824);
var inst_30829 = cljs.core._EQ_.call(null,inst_30828__$1,inst_30821);
var inst_30830 = cljs.core.keyword_identical_QMARK_.call(null,inst_30821,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_30831 = (inst_30829) || (inst_30830);
var state_30860__$1 = (function (){var statearr_30874 = state_30860;
(statearr_30874[(10)] = inst_30828__$1);

return statearr_30874;
})();
if(cljs.core.truth_(inst_30831)){
var statearr_30875_30904 = state_30860__$1;
(statearr_30875_30904[(1)] = (8));

} else {
var statearr_30876_30905 = state_30860__$1;
(statearr_30876_30905[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30861 === (14))){
var inst_30853 = (state_30860[(2)]);
var inst_30854 = cljs.core.async.close_BANG_.call(null,out);
var state_30860__$1 = (function (){var statearr_30878 = state_30860;
(statearr_30878[(13)] = inst_30853);

return statearr_30878;
})();
var statearr_30879_30906 = state_30860__$1;
(statearr_30879_30906[(2)] = inst_30854);

(statearr_30879_30906[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30861 === (10))){
var inst_30843 = (state_30860[(2)]);
var state_30860__$1 = state_30860;
var statearr_30880_30907 = state_30860__$1;
(statearr_30880_30907[(2)] = inst_30843);

(statearr_30880_30907[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30861 === (8))){
var inst_30824 = (state_30860[(9)]);
var inst_30828 = (state_30860[(10)]);
var inst_30820 = (state_30860[(8)]);
var inst_30833 = inst_30820.push(inst_30824);
var tmp30877 = inst_30820;
var inst_30820__$1 = tmp30877;
var inst_30821 = inst_30828;
var state_30860__$1 = (function (){var statearr_30881 = state_30860;
(statearr_30881[(14)] = inst_30833);

(statearr_30881[(7)] = inst_30821);

(statearr_30881[(8)] = inst_30820__$1);

return statearr_30881;
})();
var statearr_30882_30908 = state_30860__$1;
(statearr_30882_30908[(2)] = null);

(statearr_30882_30908[(1)] = (2));


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
});})(c__28113__auto___30894,out))
;
return ((function (switch__28001__auto__,c__28113__auto___30894,out){
return (function() {
var cljs$core$async$state_machine__28002__auto__ = null;
var cljs$core$async$state_machine__28002__auto____0 = (function (){
var statearr_30886 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30886[(0)] = cljs$core$async$state_machine__28002__auto__);

(statearr_30886[(1)] = (1));

return statearr_30886;
});
var cljs$core$async$state_machine__28002__auto____1 = (function (state_30860){
while(true){
var ret_value__28003__auto__ = (function (){try{while(true){
var result__28004__auto__ = switch__28001__auto__.call(null,state_30860);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28004__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28004__auto__;
}
break;
}
}catch (e30887){if((e30887 instanceof Object)){
var ex__28005__auto__ = e30887;
var statearr_30888_30909 = state_30860;
(statearr_30888_30909[(5)] = ex__28005__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30860);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30887;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28003__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30910 = state_30860;
state_30860 = G__30910;
continue;
} else {
return ret_value__28003__auto__;
}
break;
}
});
cljs$core$async$state_machine__28002__auto__ = function(state_30860){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28002__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28002__auto____1.call(this,state_30860);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28002__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28002__auto____0;
cljs$core$async$state_machine__28002__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28002__auto____1;
return cljs$core$async$state_machine__28002__auto__;
})()
;})(switch__28001__auto__,c__28113__auto___30894,out))
})();
var state__28115__auto__ = (function (){var statearr_30889 = f__28114__auto__.call(null);
(statearr_30889[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28113__auto___30894);

return statearr_30889;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28115__auto__);
});})(c__28113__auto___30894,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1491273375169