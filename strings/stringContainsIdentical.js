//Check if a String Contains only Identical Characters

function isIdentical(s) {
  return new Set([...s]).size === 1;
}

// function isIdentical(s) {
//     let identical = true;
//     arr = s.split('');
//     for (let index = 0; index < arr.length - 1; index++) {
//       if (arr[index] != arr[index + 1]) {
//         identical = false;
//       }
//     }
//     return identical;
//   }

// 42+42 = 84 //x2
//84+84 = 168 //x4
//168+168 = 336 // x8
//336+336 = 672 //x16
// 672+672 = 1344 // x32

// console.log(isIdentical("kka"));
isIdentical("aaaaaa"); //➞ true

isIdentical("aabaaa"); //➞ false

isIdentical("ccccca"); //➞ false

isIdentical("kk"); //➞ true

function abcmath(a, b, c) {
  return (a * Math.pow(2, b)) % c == 0 ? true : false;
}

// const abcmath = (a, b, c) => (a * Math.pow(2, b)) % c === 0;

console.log(abcmath(42, 5, 10)); // ➞ false
