// Converting Objects to Arrays

function toArray(obj) {
  arr = Object.entries(obj);
  //   arr = Object.keys(obj);
  //   arr = Object.values(obj);
  return arr;
}

console.log(toArray({ a: 1, b: 2 }));

// Write a function that converts an object into an array,
// where each element represents a key-value pair.

toArray({ a: 1, b: 2 }); //➞ [["a", 1], ["b", 2]]

toArray({ shrimp: 15, tots: 12 }); //➞ [["shrimp", 15], ["tots", 12]]

toArray({}); //➞ []

// Return an empty array if the object is empty.
