function reverseCapitalize(str) {
  let stringUpper = str.toUpperCase();
  let arrayOfString = stringUpper.split("");
  let reverseArray = arrayOfString.reverse();
  let reverseString = reverseArray.join("");
  return reverseString;
}

console.log(reverseCapitalize("abcde"));
