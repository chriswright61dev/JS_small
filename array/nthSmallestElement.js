// nthSmallestElement;

function nthSmallest(arr, n) {
  if (n > arr.length) {
    return null;
  }
  return arr.sort()[n - 1];
}

function nthSmallest2(arr, n) {
  let sortedArray = arr.sort();
  return sortedArray[n - 1] || null;
}

// function nthSmallest(arr, n) {
//     if (n > arr.length) {
//       return null;
//     }
//     // sort array
//     //   return arr.sort()[n-1];
//     console.log(arr.sort()[n - 1]);
//   }

nthSmallest([1, 3, 5, 7], 1); //➞ 1

nthSmallest([1, 3, 5, 7], 3); //➞ 5

nthSmallest([1, 3, 5, 7], 5); //➞ null

nthSmallest([7, 3, 5, 1], 2); //➞ 3
