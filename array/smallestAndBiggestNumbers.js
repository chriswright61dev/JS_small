// Smallest and Biggest Numbers

function minMax(arr) {
  // const minMaxArray = [];
  // minMaxArray.push(Math.min(...arr));
  // minMaxArray.push(Math.max(...arr));
  // return minMaxArray;

  return [Math.min(...arr), Math.max(...arr)];
}
console.log(minMax([1, 2, 3, 4, 5]));
// minMax([1, 2, 3, 4, 5]); //➞ [1, 5]

// minMax([2334454, 5]); //➞ [5, 2334454]

// minMax([1]); //➞ [1, 1]
