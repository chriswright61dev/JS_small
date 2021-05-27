// Check if a Number is a Palindrome

const isPalindrome = number => {
  if (number < 0) return false; // negative number cannot be palindromes

  let reversed = 0, //store the reversed number
    tempNumber = number;

  while (tempNumber > 0) {
    const lastDigit = tempNumber % 10;
    reversed = reversed * 10 + lastDigit; // remove the last digit
    // tempNumber = (tempNumber / 10) | 0; // bitwise OR operator
    tempNumber = parseInt(tempNumber / 10); //parseInt is clearer
  }
  return number === reversed;
};

// const isPalindrome = number => {
//    let reversed = 0,
//     tempNumber = number;s

//   while (tempNumber > 0) {
//     const lastDigit = tempNumber % 10;
//     reversed = reversed * 10 + lastDigit;
//     tempNumber = parseInt(tempNumber / 10);
//   }
//   return number === reversed;
// };

console.log(isPalindrome(121));
// First, we check and see if the number is negative.
// If it is, then we know it's not a palindrome
// because the numbers will read differently backwards and forwards.

// if (x < 0) return false;

// If the number is positive, we'll create two variables.
// The first variable reversed will store our reversed number,
// and the second variable y is copy of our input number.
// y will be used to reverse the input number
// without modifying our original input.

// The following steps take place inside our while loop:

// Get the last digit of the number using the modulo (%) operator.
// This is one trick that can help you isolate the last digit for future problems.
// Here, we're dividing y by 10 and returning the remainder.
// Let's refer to the example input 121.
// The hundreds column 100 is divided by 10 with a remainder of 0,
// and the tens column 20 is divided by 10 with a remainder of 0.
// When we divided the ones column 1 by 10, we'll get a remainder of 1
// since 1 can't be divided by 10 evenly.
// After, we save the remainder to lastDigit:

// const lastDigit = y % 10;

// We append the last digit to reversed.
// We have to multiply reversed by 10 on the right side of the assignment
// to ensure that we're always appending lastDigit to the ones column.

// reversed = reversed * 10 + lastDigit;

// Remove the last digit from y by dividing it by 10,
// and truncating the last decimal.
// We can do this using the bitwise OR operator |.

// This is another trick that can help you in future JS problems.
// In this case, we're converting the result into an integer,
// and then return the new integer:

// y = (y / 10) | 0;

// Finally, if reversed === x, then it's a palindrome!

// This solution saved us from having to traverse an array
// of string digits, which means we didn't have to use extra
// storage for this problem!

// if you need to read one digit at a time.
// If so, you can definitely traverse a
// number's digits with modulo arithmetic and division.

function NumberLength(n) {
  let digits = 0;
  do {
    n = n / 10;
    digits++;
  } while (n >= 1);
  return digits;
}

console.log(NumberLength(999));

// function isPalindrome(n) {
//   const lastDigit = n % 10;
//   // const nWithLastDigitRemoved = (n / 10) | 0;
//   const nWithLastDigitRemoved = parseInt(n / 10);

//   console.log(lastDigit);
//   console.log(nWithLastDigitRemoved);

//   //   return true;
// }
console.log(isPalindrome(140801));
// isPalindrome(838); //➞ true

// isPalindrome(4433) //➞ false

// isPalindrome(443344); //➞ true
