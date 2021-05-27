//X and Y Coordinates

// function convertCartesian(x, y) {
//   const newArray = [];
//   for (let index = 0; index < x.length; index++) {
//     newArray.push([x[index], y[index]]);
//   }
//   return newArray;
// }

function convertCartesian(x, y) {
  const newArray = [];
  for (let index = 0; index < x.length; index++) {
    newArray.push([x[index], y[index]]);
  }
  return newArray;
}

console.log(convertCartesian([1, 5, 3, 3, 4], [5, 8, 9, 1, 0]));
convertCartesian([1, 5, 3, 3, 4], [5, 8, 9, 1, 0]);
//➞ [[1, 5], [5, 8], [3, 9], [3, 1], [4, 0]]

convertCartesian([9, 8, 3], [1, 1, 1]);
//➞ [[9, 1], [8, 1], [3, 1]]
