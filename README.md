# Clojure-Club

Wherein we solve interesting problems on our own then compare to see how we did.

## How it works
Once a week a new problem will be posted. A package will be created in this project
for participants to post their solutions. Please put your solution in a ns with
the name $USER.clj.

## Problems

Problem 1: [Number Maze](http://www.4clojure.com/problem/106)
 * Compute the minimum number of steps required to go from integer S<sub>i</sub> 
 to S<sub>f</sub>.
 * Allowed operations are:
   * S<sub>i+1</sub> = S<sub>i</sub> + 2
   * S<sub>i+1</sub> = S<sub>i</sub> * 2
   * S<sub>i+1</sub> = S<sub>i</sub>  / 2 
 * Modify your solution to return a numeric path from S<sub>i</sub> to S<sub>f</sub>
 (Note that there are cases with more than one solution).
 * Modify your solution to return all minimum paths.
   * Examples of multiple minimum solutions:
     * 2 -> 4
     * 9 -> 2
     * 2 -> 9
 * Modify your solution to return all paths with interleaved operations. This would
 distinguish ambiguous solutions like [[2 4][2 4]], which would become 
 [[2 + 2 = 4][2 * 2 = 4]]. How the operations are expressed aren't important.

## License

Copyright © 2017 Mark Bastian, Matt Grimm, Jacob Strength, Jerek Anderson, 
Brock Turner, and all other contributors.

Distributed under the Eclipse Public License either version 1.0 or (at
your option) any later version.
