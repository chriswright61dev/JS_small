// Return the Objects Keys and Values

// Create a function that takes an object and returns the keys and values
// as separate arrays.
// Examples

function keysAndValues(obj) {
  return [Object.keys(obj), Object.values(obj)];
}

console.log(keysAndValues({ a: 1, b: 2, c: 3 }));

keysAndValues({ a: 1, b: 2, c: 3 });
//➞ [["a", "b", "c"], [1, 2, 3]]

keysAndValues({ a: "Apple", b: "Microsoft", c: "Google" });
//➞ [["a", "b", "c"], ["Apple", "Microsoft", "Google"]]

keysAndValues({ key1: true, key2: false, key3: undefined });
//➞ [["key1", "key2", "key3"], [true, false, undefined]]
