// returnOnlyInteger;

function returnOnlyInteger(arr) {
  //   return arr.filter(element => typeof element == "number" );
  return arr.filter(element => Number.isInteger(element));
}

console.log(returnOnlyInteger([9, 2, "space", "car", "lion", 16]));
returnOnlyInteger([9, 2, "space", "car", "lion", 16]); //➞  [9, 2, 16]

returnOnlyInteger(["hello", 81, "basketball", 123, "fox"]); //➞ [81, 123]

returnOnlyInteger([10, "121", 56, 20, "car", 3, "lion"]); //➞ [10, 56, 20, 3]

returnOnlyInteger(["String", true, 3.3, 1]); //➞ [1]
