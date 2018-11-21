# JSON

Write a function `jsonModify` that takes three arguments, a string `json` that may be a JSON valid string, a string `key` and a parameter that can be anything called `value`.
Try to parse the JSON string, and then find the `key` in the object and replace its value with the given `value`. Then return the object formatted as a JSON string.

**Example**

```
jsonModify('{"foo": "bar"}', 'foo', 'baz')
// -> '{"foo": "baz"}'
```

Here are some examples of inputs you can use using 'a' as `key` and anything as the `value` key.
Make sure your function works for invalid inputs.   

* `'{"a": 5}'`   
* `'{"c": {"b": {"a": 7}}}'`   
* `undefined`