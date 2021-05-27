function testJackpot(result) {
  return new Set(result).size == 1 ? true : false;
}

// function testJackpot(result) {
// 	return new Set(result).size === 1
// }

// function testJackpot(result) {
//     return result.every(x => x === result[0]);
//   }

// const testJackpot = arr => new Set(arr).size === 1;

//console.log(testJackpot(["SS", "SS", "SS", "Ss"]));

// Create a function that takes in an array
// (slot machine outcome) and
// returns true if all elements in the array are identical,
// and false otherwise.
// The array will contain 4 elements.

// function testJackpot(result) {
//     if (new Set(result).size == 1) {
//       return true;
//     } else {
//       return false;
//     }
//   }

module.exports = testJackpot;
