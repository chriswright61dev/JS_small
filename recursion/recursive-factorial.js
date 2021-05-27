// function factorial(number) {
//   if (number <= 0) {
//     // terminal case
//     return 1;
//   } else {
//     // the block to execute
//     return number * factorial(number - 1);
//   }
// }
// console.log(factorial(6));
// // 720

function sum(n) {
  if (n <= 0) {
    return 0;
  } else {
    return n + sum(n - 1);
  }
}
console.log(sum(12)); // ➞ 78
