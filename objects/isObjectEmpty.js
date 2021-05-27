// Is the Object Empty?

// Write a function that returns true if an object is empty, and false otherwise.
// Examples

function isEmpty(obj) {
  if ((obj = {})) {
    true;
  }
}

isEmpty({}); //➞ true

isEmpty({ a: 1 }); // ➞ false
