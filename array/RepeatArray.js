// Repeat the Same Item Multiple Times

function repeat(item, times) {
  let arr = [];
  arr.length = times;
  return arr.fill(item, 0, times);
}

// function repeat(item, times) {
// 	return Array(times).fill(item);
// }

console.log(repeat(13, 5));

repeat("edabit", 3); //➞ ["edabit", "edabit", "edabit"]

repeat(13, 5); //➞ [13, 13, 13, 13, 13]

repeat("7", 2); //➞ ["7", "7"]

repeat(0, 0); //➞ []
