// reverseAndNot;
// Write a function that takes an integer i and
// returns an integer with the integer backwards
// followed by the original integer.
// We reverse 123 to get 321 and then
// add 123 to the end, resulting in 321123.

// const reverseAndNot = n => +([...("" + n)].reverse().join("") + n);

function reverseAndNot(i) {
  return parseInt(
    i
      .toString()
      .split("")
      .reverse()
      .join("") + i
  );
}

// const reverseAndNot = i =>
//   +(
//     i
//       .toString()
//       .split("")
//       .reverse()
//       .join("") + i
//   );

// function reverseAndNot(i) {
//   let arr = (i + "").split("");
//   return parseInt(
//     (arrReverse = [...arr]
//       .reverse()
//       .concat(arr)
//       .join(""))
//   );

//   return parseInt(arrReverse); // this is a string
// }

//working but horrible
// function reverseAndNot(i) {
//   let arr = (i + "").split("");
//   let arrReverse = [...arr];
//   arrReverse = arrReverse.reverse();
//   arrReverse = arrReverse.concat(arr);
//   return parseInt(arrReverse.join("")); // this is a string
// }

module.exports = reverseAndNot;
