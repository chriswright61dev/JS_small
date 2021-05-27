function arrayOfMultiples(num, length) {
  return [...Array(length)].map((_, i) => num * (i + 1));
  // _ indicates the first parameter is not to be used.
  // this does not look nice
}

// const arrayOfMultiples = (num, length) => {
// 	return Array.from({length: length}, (_, i) => num * (i + 1));
// }

module.exports = arrayOfMultiples;

// Create a function that takes two numbers as arguments (num, length) and
// returns an array of multiples of num up to length.

// this one works
// function arrayOfMultiples(num, length) {
//   let output = [];
//   for (let index = 1; index <= length; index++) {
//     output.push(num * index);
//   }
//   return output;
// }

// function arrayOfMultiples(num, length) {
//   const range = (start, stop, step) =>
//     Array.from(
//       { length: (stop - start) / step + 1 },
//       (_, i) => start + i * step
//     );
//   return Array.from(1, length, 1).map(x => x * num);
//   // _ indicates the first parameter is not to be used.
// }
