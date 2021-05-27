function isInOrder(str) {
  return (
    str ===
    str
      .split("")
      .sort()
      .join("")
  );
}

function isInOrder(str) {
  let same = true;
  arr = str.split("");
  for (let index = 0; index < arr.length - 1; index++) {
    if (arr[index] > arr[index + 1]) {
      same = false;
      return same;
    }
  }
  return same;
}

console.log(isInOrder("abc"));
// isInOrder("abc"); // ➞ true

// isInOrder("edabit"); // ➞ false

// isInOrder("123"); // ➞ true

// isInOrder("xyzz"); // ➞ true
