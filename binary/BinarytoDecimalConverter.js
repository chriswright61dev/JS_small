// Binary to Decimal Converter

function binaryToDecimal(binary) {
  let output = 0;
  for (let index = 0; index < binary.length; index++) {
    output += binary[index] * Math.pow(2, binary.length - index - 1);
  }
  return output;
}

// function binaryToDecimal(binary) {
// 	return parseInt(binary.join(""), 2);
// }

// function binaryToDecimal(binary) {
// 	return binary.reverse().reduce((t, v, i) => t + v * Math.pow(2, i), 0);
// }

// you are given one input:
// An array containing eight 1's and/or 0's.
// Write a function that takes an 8 bit binary number and convert it to decimal.
// Examples

binaryToDecimal([1, 1, 1, 1, 1, 1, 1, 1]); //➞ 255

// binaryToDecimal([0, 0, 0, 0, 0, 0, 0, 0]); //➞ 0

// binaryToDecimal([1, 0, 1, 1, 1, 1, 0, 0]); //➞ 188
