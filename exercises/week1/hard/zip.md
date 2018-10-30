# Zip

Write a function `zip` that takes an unlimited amount of arguments. Each argument should be an array. The function should "zip" the array values into a new array.

When you're done, create another function `unzip` that does the opposite of `zip`;

Look at [arguments](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments) for how to handle an unlimited amount of arguments.

**Example**

```
zip(['moe', 'larry', 'curly'], [30, 40, 50], [true, false, false]);
// -> [["moe", 30, true], ["larry", 40, false], ["curly", 50, false]]

unzip([["moe", 30, true], ["larry", 40, false], ["curly", 50, false]]);
// -> [['moe', 'larry', 'curly'], [30, 40, 50], [true, false, false]]
```
