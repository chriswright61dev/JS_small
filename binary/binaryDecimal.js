// Numbers will always be below 1024 (not including 1024).
// The && operator could be useful.
// The strings will always go to the length at which
// the most left bit's value gets bigger than the number in decimal.

let decimalNumber = 1023;

binary(decimalNumber);
binary2(decimalNumber);

function binary(decimal) {
  binaryArray = [];
  for (let index = 512; index >= 1; index = index / 2) {
    if (decimal - index < 0) {
      binaryArray.push(0);
    } else {
      binaryArray.push(1);
    }
  }
  console.log(binaryArray.join(""));
}

function binary2(decimal) {
  console.log(decimal.toString(2));
}
