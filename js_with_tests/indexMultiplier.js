function indexMultiplier(arr) {
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  return arr.map((x, y) => x * y).reduce(reducer, 0);
}

// return arr.reduce((ac,v, i) => ac+ v * i, 0));
// short but unreadable

// function indexMultiplier(arr) {
//   const reducer = (accumulator, currentValue) => accumulator + currentValue;
//   return arr.map((x, y) => x * y).reduce(reducer, 0);
// }

module.exports = indexMultiplier;

// function indexMultiplier(arr) {
//   let total = 0;
//   for (let index = 0; index < arr.length; index++) {
//     total += arr[index] * index;
//   }
//   return total;
// }
