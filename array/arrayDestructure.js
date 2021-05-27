const arr = [1, 2, 3, 4, 5, 6];

let [a, b] = arr;

//concat  arrays
const array3 = array1.concat(array2);

// You can assign variables from arrays with destructuring like this:

// const arr = ["eyes", "nose", "lips", "ears"]
// let [eyes, nose, lips, ears] = arr

// But you can also skip over items in the array being destructured.

// DO NOT change arr
// DO NOT USE var [lips] = arr[2]
// "eyes", "nose", and "ears" should not be assigned to anything

const arr = ["eyes", "nose", "lips", "ears"];
var [
  /* Create variable lips here and assign it to arr[2] */
] = arr;

var [, , third] = ["foo", "bar", "baz"];

// Return the Last Element in an Array
