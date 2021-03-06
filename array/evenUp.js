// Create a function that goes through the array,
//incrementing (+1) for each odd number and
//decrementing (-1) for each even number.
// Examples

function transform(arr) {
  return arr.map(x => (x % 2 == 0 ? x - 1 : x + 1));
}

transform([1, 2, 3, 4, 5]); // ➞ [2, 1, 4, 3, 6]

transform([3, 3, 4, 3]); // ➞ [4, 4, 3, 4]

transform([2, 2, 0, 8, 10]); // ➞ [1, 1, -1, 7, 9]
