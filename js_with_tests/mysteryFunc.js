function mysteryFunc(num) {
  const reducer = (accumulator, currentValue) => accumulator * currentValue;
  return (num + "")
    .split("")
    .map(x => parseInt(x))
    .reduce(reducer, 1);
}

// const mysteryFunc = num =>
//   String(num)
//     .split("")
//     .reduce((total, digit) => total * Number(digit));

module.exports = mysteryFunc;

// generate your own function to satisfy the relationship between
// the inputs and outputs.

// write tests first and chang until passing

// mysteryFunc(152) ➞ 10
// mysteryFunc(832) ➞ 48
// mysteryFunc(19) ➞ 9
// mysteryFunc(133) ➞ 9

// function mysteryFunc(num) {
//   // get number to String
//   let stringOfNumbers = num + "";

//   // split string to Array
//   let arrayOfStrings = stringOfNumbers.split("");

//   // convert strings in array to numbers
//   let arrayOfNumbers = (map1 = arrayOfStrings.map(x => parseInt(x)));

//   // multiply elements together
//   const reducer = (accumulator, currentValue) => accumulator * currentValue;
//   return arrayOfNumbers.reduce(reducer, 1);
// }
