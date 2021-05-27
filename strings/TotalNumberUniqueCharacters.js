// Total Number of Unique Characters

// Given two strings, create a function that returns the total number of unique characters from the combined string.

// Set objects are collections of values.
// You can iterate through the elements of a set in insertion order.
// A value in the Set may only occur once; it is unique in the Set's collection.

function countUnique(s1, s2) {
  return new Set(s1 + s2).size;
}

// function countUnique(s1, s2) {
//     let mySet = new Set(s1 + s2);
// return mySet.size
// //   Set.prototype.add(value);
// //   Set.prototype.entries();
// }

countUnique("apple", "play"); //➞ 5
// "appleplay" has 5 unique characters:
// "a", "e", "l", "p", "y"

countUnique("sore", "zebra"); //➞ 7
// "sorezebra" has 7 unique characters:
// "a", "b", "e", "o", "r", "s", "z"

countUnique("a", "soup"); //➞ 5
