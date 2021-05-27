// Write a function that returns the lexicographically first and
//lexicographically last rearrangements of a string.
//Output the results in the following manner:

function firstAndLast(s) {
  arr = s.split("").sort();
  return [arr.join(""), arr.reverse().join("")];
}

function firstAndLast(s) {
  return [[...s].sort().join(""), [...s].sort((a, b) => a < b).join("")];
}

console.log(firstAndLast("marmite"));

// firstAndLast(string); //➞ [first, last]

firstAndLast("marmite"); //➞ ["aeimmrt", "trmmiea"]

firstAndLast("bench"); //➞ ["bcehn", "nhecb"]

firstAndLast("scoop"); //➞ ["coops", "spooc"]
