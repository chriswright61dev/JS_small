function rogerShots(arr) {
  return arr.filter(x => x === "Bang!" || x === "BangBang!").length * 0.5;
}

// function rogerShots(arr) {
//   return (
//     0.5 * arr.filter(shot => shot == "Bang!" || shot == "BangBang!").length
//   );
// }

module.exports = rogerShots;
console.log(
  rogerShots(["Bang!", "sdf!", "BangBang!", "Bang!", "Bang!", "Bang!"])
);

// "Bang!" in 0.5 seconds.
// "BangBang!" to shoot two bottles in 0.5 seconds.

// Wild Roger is tasked with shooting down 6 bottles with 6 shots as fast as possible. Here are the different types of shots he could make:

// He could use one pistol to shoot a bottle with a "Bang!" in 0.5 seconds.
// He could use both pistols with a "BangBang!" to shoot two bottles in 0.5 seconds.

// Given an array of strings, return the time (in seconds)
//it took to shoot down all 6 bottles.
//Make sure to only count Bangs and BangBangs. Anything else doesn't count.

// function rogerShots(arr) {
//   let timeTaken = 0;
//   let bottlesRemaining = 6;

//   for (let index = 0; index < arr.length; index++) {
//     if (arr[index] == "Bang!") {
//       bottlesRemaining = bottlesRemaining - 1;
//     }
//     if (arr[index] == "BangBang!") {
//       bottlesRemaining = bottlesRemaining - 2;
//     }

//     timeTaken = timeTaken + 0.5;
//     //end of for loop
//   }
//   return timeTaken;
// } //end of function

// function rogerShots(arr) {
//   let timeTaken = 0;
//   let bottlesRemaining = 6;

//   for (let index = 0; index < arr.length; index++) {
//     if (arr[index] == "Bang!") {
//       bottlesRemaining = bottlesRemaining - 1;
//       timeTaken = timeTaken + 0.5;
//     } else if (arr[index] == "BangBang!") {
//       bottlesRemaining = bottlesRemaining - 2;
//       timeTaken = timeTaken + 0.5;
//     } else {
//       // other shots take no time apparently
//       //timeTaken = timeTaken + 0.5;
//     }

//     if (bottlesRemaining < 0) {
//       break;
//     }
//     //end of for loop
//   }
//   return timeTaken;
// } //end of function
