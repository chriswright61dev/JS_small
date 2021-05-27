// Repeating Letters N Times

// function repeat(str, n) {
//   const arr = str.split("");
//   newString = "";
//   arr.forEach(element => {
//     newString += element.repeat(n);
//   });
//   return newString;
// }

function repeat(str, n) {
  return str
    .split("")
    .map(c => c.repeat(n))
    .join("");
}

function repeat(str, n) {
  newString = "";
  str.split("").forEach(element => {
    newString += element.repeat(n);
  });
  return newString;
}

console.log(repeat("mice", 5));
repeat("mice", 5); //➞ "mmmmmiiiiiccccceeeee"

repeat("hello", 3); //➞ "hhheeellllllooo"

repeat("stop", 1); //➞ "stop"
