# Flatten

Write a function `flatten` that takes an argument `value` that is a nested array of any depth. Your function is supposed to iterate the function and return a new array with depth 1, that includes all the values in the given array, regardless where the value lies.

*Example*
```
flatten([[1],[2]])
// -> [1, 2]

flatten([1, 2, [3, [4, 5, [6], [7]]]])
// -> [1, 2, 3, 4, 5, 6, 7]

flatten([1, 2, 3])
// -> [1, 2, 3]
```
