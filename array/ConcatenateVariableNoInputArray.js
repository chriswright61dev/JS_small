// Concatenate Variable Number of Input Arrays

// Create a function that concatenates
// n input arrays, where n is variable.
// Examples

function concat(...args) {
  return [].concat(...args);
}

console.log(concat([1, 2, 3], [4, 5], [6, 7]));
concat([1, 2, 3], [4, 5], [6, 7]); //➞ [1, 2, 3, 4, 5, 6, 7]

concat([1], [2], [3], [4], [5], [6], [7]); // ➞ [1, 2, 3, 4, 5, 6, 7]

concat([1, 2], [3, 4]); //➞ [1, 2, 3, 4]

concat([4, 4, 4, 4, 4]); // ➞ [4, 4, 4, 4, 4]
