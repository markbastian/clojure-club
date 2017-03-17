
# Observations
* Recursion

----

#Recursion

```
(defn r[x] (if (pos? x) x (r (inc x))))
```

* Can be easy to reason about
* The stack will grow
* Java does not do tail-call elimination

---

#loop-recur

```
(defn lr [x]
  (loop [r x]
    (if (pos? r)
      r
      (recur (inc r)))))
```

* Tail-call recursion
* Straightforward to set up complicated values
* Does not grow the stack

---

#Iterate

* Creates an infinite, lazy sequence
* Separates concerns of iteration from termination
* Lots of ways to terminate
    * take, take-while, drop, drop-while, split-with, nth

---

#Clojure 

<pre class="clojure" style="font-size:16px;width: 100%;left: 0%;;margin:auto">
<code>(defn number-maze[s g]
        (letfn[(nbrs[x] (cond-> [(* 2 x) (+ x 2)] (even? x) (conj (/ x 2))))]
          (inc (count (take-while #(not (% g)) (iterate #(reduce into #{} (map nbrs %)) #{s}))))))</code></pre>

----

#Comparison

<pre class="clojure" style="font-size:16px;width: 100%;left: 0%;;margin:auto">
<caption>Clojure</caption>
<code>(defn number-maze[s g]
  (letfn[(nbrs[x] (cond-> [(* 2 x) (+ x 2)] (even? x) (conj (/ x 2))))]
    (inc (count (take-while #(not (% g)) (iterate #(reduce into #{} (map nbrs %)) #{s}))))))</code></pre>
          
<pre class="java" style="font-size:16px;width: 100%;left: 0%;;margin:auto">
<caption>Java</caption>
<code>public static int numberMaze(int start, int goal){
          Set<Integer> s = new HashSet<>();
          s.add(start);
          int steps = 1;
          while(!s.contains(goal)){
              Set<Integer> tmp = new HashSet<>();
              for(Integer i : s){
                  tmp.add(i + 2);
                  tmp.add(i * 2);
                  if(0 == i % 2) tmp.add(i / 2);
              }
              s.addAll(tmp);
              steps++;
          }
          return steps;
      }</code></pre>