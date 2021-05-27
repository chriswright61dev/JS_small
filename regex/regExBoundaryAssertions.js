//RegEx: Boundary Assertions II

// Array with random words
// don't accept words that begin with the capital letter "C".
// Remove the unaccepted words and return the new array.

// function acceptedWords(list) {
// 	return list.filter(x => /^[^C]/.test(x))
// }

function accepted(arr) {
  const regexWord = /^[C]\w+/;
  return arr.filter(word => !regexWord.test(word));
}

accepted(["Ducks", "Bears", "Cats"]); //➞ ["Ducks", "Bears"]

accepted(["cars", "trucks", "planes"]); //➞ ["cars", trucks", "planes"]

accepted(["Cans", "Worms", "Bugs", "Cold", "Beans"]); // ➞ ["Worms", "Bugs"]
