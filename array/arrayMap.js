// function multiplyByLength(arr) {
//   const length = arr.length;

//   const map1 = arr.map(x => x * length);
//   console.log(map1);
// }

// multiplyByLength([1, 2, 3, 4]);

function firstLast(arr) {
  const newArray = [];
  newArray.push(arr[0]);
  newArray.push(arr.slice(-1)[0]);
  return newArray;
}

firstLast([1, 2, 3, 4]);
