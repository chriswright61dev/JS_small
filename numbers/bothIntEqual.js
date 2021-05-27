function isEqual(num1, num2) {
  return Number.isInteger(num1) && num1 === num2;
}

console.log(isEqual("3", 3));
