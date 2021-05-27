// function flatten(arr) {
//   arr2 = [];
//   for (let i = 0; i < arr.length; i++) {
//     arr2.push(arr[i][0]);
//     arr2.push(arr[i][1]);
//   }
//   return arr2;
// }

// function flatten(arr) {
//   arr2 = [];
//   for (let i = 0; i < arr.length; i++) {
//     arr2.push(...arr[i]);
//   }
//   return arr2;

// }

function flatten(arr) {
  return [].concat(...arr);
}

console.log(
  flatten([
    [1, 2],
    [3, 4]
  ])
);

flatten([
  [1, 2],
  [3, 4]
]); //➞ []
// Expected: [1, 2, 3, 4]

flatten([
  ["a", "b"],
  ["c", "d"]
]); //➞ []
// Expected: ["a", "b", "c", "d"]

flatten([
  [true, false],
  [false, false]
]); // ➞ []
// Expected: [true, false, false, false]
