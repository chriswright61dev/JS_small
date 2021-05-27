// Mirror Array

// Given an array, transform that array into a mirror.
// Examples

function mirror(arr) {
  let mirror = arr.slice(0, arr.length - 1).reverse();
  return arr.concat(arr.slice(0, arr.length - 1).reverse());
}

console.log(mirror([0, 2, 4, 6]));
mirror([0, 2, 4, 6]); //➞ [0, 2, 4, 6, 4, 2, 0]

mirror([1, 2, 3, 4, 5]); //➞ [1, 2, 3, 4, 5, 4, 3, 2, 1]

mirror([3, 5, 6, 7, 8]); //➞ [3, 5, 6, 7, 8, 7, 6, 5, 3]
