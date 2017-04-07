// Compiled by ClojureScript 1.9.495 {}
goog.provide('clojure_club.x106_number_maze.wmatson');
goog.require('cljs.core');
clojure_club.x106_number_maze.wmatson.even_operations = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"double","double",884886883),cljs.core.partial.call(null,cljs.core._STAR_,(2)),new cljs.core.Keyword(null,"halve","halve",-1810937727),(function (p1__36471_SHARP_){
return (p1__36471_SHARP_ / (2));
}),new cljs.core.Keyword(null,"plus2","plus2",-805703167),cljs.core.partial.call(null,cljs.core._PLUS_,(2))], null);
clojure_club.x106_number_maze.wmatson.odd_operations = cljs.core.dissoc.call(null,clojure_club.x106_number_maze.wmatson.even_operations,new cljs.core.Keyword(null,"halve","halve",-1810937727));
clojure_club.x106_number_maze.wmatson.node = (function clojure_club$x106_number_maze$wmatson$node(num){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"num","num",1985240673),num,new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"start","start",-355208981),num], null)], null)], null);
});
clojure_club.x106_number_maze.wmatson.take_path = (function clojure_club$x106_number_maze$wmatson$take_path(node,p__36472){
var vec__36476 = p__36472;
var op_kw = cljs.core.nth.call(null,vec__36476,(0),null);
var op = cljs.core.nth.call(null,vec__36476,(1),null);
return cljs.core.update.call(null,cljs.core.update.call(null,node,new cljs.core.Keyword(null,"num","num",1985240673),op),new cljs.core.Keyword(null,"path","path",-188191168),cljs.core.conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [op_kw,op.call(null,new cljs.core.Keyword(null,"num","num",1985240673).cljs$core$IFn$_invoke$arity$1(node))], null));
});
clojure_club.x106_number_maze.wmatson.get_ops = (function clojure_club$x106_number_maze$wmatson$get_ops(node){
if(cljs.core.even_QMARK_.call(null,new cljs.core.Keyword(null,"num","num",1985240673).cljs$core$IFn$_invoke$arity$1(node))){
return clojure_club.x106_number_maze.wmatson.even_operations;
} else {
return clojure_club.x106_number_maze.wmatson.odd_operations;
}
});
clojure_club.x106_number_maze.wmatson.branch = (function clojure_club$x106_number_maze$wmatson$branch(node){
return cljs.core.map.call(null,cljs.core.partial.call(null,clojure_club.x106_number_maze.wmatson.take_path,node),clojure_club.x106_number_maze.wmatson.get_ops.call(null,node));
});
clojure_club.x106_number_maze.wmatson.min_solutions = (function clojure_club$x106_number_maze$wmatson$min_solutions(start,finish){
var branch_seq = cljs.core.iterate.call(null,cljs.core.partial.call(null,cljs.core.mapcat,clojure_club.x106_number_maze.wmatson.branch),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure_club.x106_number_maze.wmatson.node.call(null,start)], null));
var is_solution_QMARK_ = ((function (branch_seq){
return (function (node){
return cljs.core._EQ_.call(null,finish,new cljs.core.Keyword(null,"num","num",1985240673).cljs$core$IFn$_invoke$arity$1(node));
});})(branch_seq))
;
var skip_wrong = cljs.core.drop_while.call(null,((function (branch_seq,is_solution_QMARK_){
return (function (p1__36479_SHARP_){
return cljs.core.not_any_QMARK_.call(null,is_solution_QMARK_,p1__36479_SHARP_);
});})(branch_seq,is_solution_QMARK_))
,branch_seq);
return cljs.core.filter.call(null,is_solution_QMARK_,cljs.core.first.call(null,skip_wrong));
});
clojure_club.x106_number_maze.wmatson.min_path_size = (function clojure_club$x106_number_maze$wmatson$min_path_size(start,finish){
return cljs.core.first.call(null,cljs.core.map.call(null,cljs.core.comp.call(null,cljs.core.count,new cljs.core.Keyword(null,"path","path",-188191168)),clojure_club.x106_number_maze.wmatson.min_solutions.call(null,start,finish)));
});
clojure_club.x106_number_maze.wmatson.number_maze = (function clojure_club$x106_number_maze$wmatson$number_maze(start,finish){
var ops = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (p1__36480_SHARP_){
return ((2) * p1__36480_SHARP_);
}),(function (p1__36481_SHARP_){
return ((2) + p1__36481_SHARP_);
}),(function (p1__36482_SHARP_){
return (p1__36482_SHARP_ / (2));
})], null);
var branch_single = ((function (ops){
return (function (num){
return cljs.core.map.call(null,((function (ops){
return (function (p1__36483_SHARP_){
return p1__36483_SHARP_.call(null,num);
});})(ops))
,ops);
});})(ops))
;
var branch = ((function (ops,branch_single){
return (function (current){
return cljs.core.set.call(null,cljs.core.filter.call(null,cljs.core.integer_QMARK_,cljs.core.mapcat.call(null,branch_single,current)));
});})(ops,branch_single))
;
var branch_seq = cljs.core.iterate.call(null,branch,cljs.core.PersistentHashSet.createAsIfByAssoc([start], true));
var unsolved_QMARK_ = cljs.core.complement.call(null,((function (ops,branch_single,branch,branch_seq){
return (function (p1__36484_SHARP_){
return p1__36484_SHARP_.call(null,finish);
});})(ops,branch_single,branch,branch_seq))
);
return (cljs.core.count.call(null,cljs.core.take_while.call(null,unsolved_QMARK_,branch_seq)) + (1));
});

//# sourceMappingURL=wmatson.js.map?rel=1491273379079