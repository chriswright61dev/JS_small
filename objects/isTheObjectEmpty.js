// Is the Object Empty?

// Write a function that returns true if an object is empty, and false otherwise.
// Examples

function isEmpty(obj) {
  return !Object.keys(obj).length;
}

isEmpty({});

isEmpty({}); //➞ true

isEmpty({ a: 1 }); // ➞ false
