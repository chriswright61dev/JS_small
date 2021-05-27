// greatest common divisor
// gcd of two numbers = gcd of smaller and difference between them

function gcd(num1, num2) {
  while (num1 % num2 != 0) {
    div = num1 % num2;
    num1 = num2;
    num2 = div;
  }
  return num2;
}

console.log(gcd(585, 442));

function gcd2(a, b) {
  var R;
  while (a % b > 0) {
    R = a % b;
    a = b;
    b = R;
  }
  return b;
}

//   recursive

function gcdr(num1, num2) {
  if (num2 == 0) return num1;
  else return gcdr(num2, num1 % num2);
}

console.log(gcdr(585, 442));
