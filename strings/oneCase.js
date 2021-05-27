function sameCase(str) {
  str.toUpperCase() === str || str.toLowerCase() === str;
  //   const regexUpper = /[A-Z]/g;
  //   const regexLower = /[a-z]/g;
  //   console.log(str.match(regexUpper));
}
sameCase("abcdEFG");
