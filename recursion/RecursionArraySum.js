// Recursion: Array Sum
// function sum(arr) {
//   arr
//   let sum = sum;
// }

function sum(arr) {
  if (arr.length < 1) {
    return 0;
  }
  return arr[0] + sum(arr.slice(1));
  // slice makes a copy STARTING at 1st parameter
}

// function sum(arr) {
//   return arr.length === 0 ? 0 : arr.pop() + sum(arr);
// }

// var sum = function(array) {
//   return arr.length === 0 ? 0 : arr[0] + sum(arr.slice(1));
// };
console.log(sum([1, 2, 3, 4]));
sum([1, 2, 3, 4]); //➞ 10

sum([1, 2]); //➞ 3

sum([1]); //➞ 1

sum([]); //➞ 0

// Notes

//     Return 0 for an empty array.
