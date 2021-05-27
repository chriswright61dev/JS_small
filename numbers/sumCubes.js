const sumOfCubes = nums => {
  return nums.length == 0
    ? 0
    : nums.map(x => Math.pow(x, 3)).reduce((num1, num2) => num1 + num2);
};

// const sumOfCubes = nums => {
//   if (nums.length == 0) {
//     return 0;
//   } else {
//     return nums.map(x => Math.pow(x, 3)).reduce((num1, num2) => num1 + num2);
//   }
// };

console.log(sumOfCubes([]));
