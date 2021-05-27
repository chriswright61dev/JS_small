// RetrieveLastNElements;

// Write a function that retrieves the last n elements from an array.

function last(a, n) {
  return n <= a.length ? a.slice(a.length - n) : "invalid";
}

console.log(last([4, 3, 9, 9, 7, 7], 0));

last([1, 2, 3, 4, 5], 1); //➞ [5]

last([4, 3, 9, 9, 7, 6], 3); //➞ [9, 7, 6]

last([1, 2, 3, 4, 5], 7); //➞ "invalid"

last([1, 2, 3, 4, 5], 0); //➞ []
