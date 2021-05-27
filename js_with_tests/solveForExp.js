function solveForExp(a, b) {
  return Math.round(Math.log(b) / Math.log(a));
}

// const solveForExp = (a, b) => {
//   let count = 0;
//   while (a ** count !== b) count++;
//   return count;
// };

module.exports = solveForExp;

// Create a function that takes a number a and finds the missing exponent x
// so that a when raised to the power of x is equal to b.
