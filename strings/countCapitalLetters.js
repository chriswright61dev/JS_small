// Count the Capital Letters

// function capitalLetters(str) {
//   lettersArray = str.split("");
//   const result = lettersArray.filter(letter => letter == letter.toUpperCase());
//   return result.length;
// }

function capitalLetters(str) {
  //   const result = ;
  return str.split("").filter(letter => letter == letter.toUpperCase()).length;
}

console.log(capitalLetters("JMZWCneOTFLWYwBWxyFw"));
capitalLetters("fvLzpxmgXSDrobbgMVrc"); //➞ 6

capitalLetters("JMZWCneOTFLWYwBWxyFw"); //➞ 14

capitalLetters("mqeytbbjwqemcdrdsyvq"); //➞ 0
