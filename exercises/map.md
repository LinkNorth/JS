# Map

Write a function called `map` that takes two arguments. The first argument `f` should be a function, the second argument `arr` should be an array containing any values. Return a new array containing each value in the given array `arr` altered by the function `f`.

*Example*
```
map(function(x) {return x + 1;}, [1, 2, 3]);
// -> [2, 3, 4]
map(function(x) {return x * x;}, [1, 2, 3]);
// -> [1, 4, 9]
map(function(x) {return !x;}, [true, false]);
// -> [false, true]
map(function(x) {return x.length;}, ["hello", "map"]);
// -> [5, 3]
```
