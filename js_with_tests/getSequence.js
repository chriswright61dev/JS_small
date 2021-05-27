// Array of Consecutive Numbers

const getSequence = (low, high) =>
  Array.from({ length: high - low + 1 }, (_, i) => low + i);

// function getSequence(low, high) {
//   let arraySequence = [];
//   for (let index = low; index <= high; index++) {
//     arraySequence.push(index);
//   }
//   return arraySequence;
// }

module.exports = getSequence;

// getSequence(1, 5); //➞ [1, 2, 3, 4, 5]

// getSequence(98, 100); // ➞ [98, 99, 100]

// getSequence(1000, 1000); // ➞ [1000]
