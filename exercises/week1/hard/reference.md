# Reference

Write a nested object with a depth larger than 2, for example: `{a: {b: {c: {d: 5}}}}`. Then write a function `changeValue` that takes the following parameters:   
`obj` - An object   
`key` - A string   
`value` - Can be anything   

The function should recursively loop through the `obj` object and search for a key named like the `key` argument. When found, it should replace the value for that key with the `value` parameter given to the function. Then it should return the given `obj`.

**Example**

```
var obj = {a: {e: 7, b: {c: {d: 5}}}};
changeValue(obj, 'd', 6)
// -> {a: {e: 7, b: {c: {d: 6}}}}
```

