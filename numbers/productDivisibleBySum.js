// Product Divisible by Sum?

function divisible(arr) {
  const sumFn = (a, b) => a + b;
  const prodFn = (a, b) => a * b;
  return arr.reduce(prodFn) % arr.reduce(sumFn) == 0 ? true : false;
}

function divisible(arr) {
  return arr.reduce((a, b) => a * b) % arr.reduce((a, b) => a + b) == 0
    ? true
    : false;
}

divisible[(3, 2, 4, 2)]; //➞ false

divisible[(4, 2, 6)]; //➞ true

divisible[(3, 5, 1)]; //➞ false
