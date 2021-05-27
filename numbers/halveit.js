function halveCount(a, b) {
  for (var index = 0; a > b; index++) {
    a = a / 2;
  }
  return index - 1;
}

function halveCount(a, b) {
  return a <= b ? -1 : 1 + halveCount(a / 2, b);
}

console.log(halveCount(1324, 98)); // ➞ 3
// (1324 -> 662 -> 331 -> 165.5)

// halveCount(624, 8) // ➞ 6
// (624 -> 312 -> 156 -> 78 -> 39 -> 19.5 -> 9.75)
