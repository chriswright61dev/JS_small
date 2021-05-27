const paragraph = "The quick brown fox jumps over the lazy dog. It barked.";
const regex = /[ie]/g;
// const found = paragraph.match(regex);
const replacer = "x";
// var newStr =
function regexer(text, regexp, replacement) {
  //   console.log(text.match(regexp)); // this is an array of matches
  console.log(text.replace(regexp, replacement));
}

regexer(paragraph, regex, replacer);
