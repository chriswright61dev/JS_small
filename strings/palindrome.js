function checkPalindrome(str) {
  if (
    str ==
    str
      .split("")
      .reverse()
      .join("")
  ) {
    return true;
  } else {
    return false;
  }
}
console.log(checkPalindrome("scary")); //➞ true

// return str === str.split("").reverse().join("");
