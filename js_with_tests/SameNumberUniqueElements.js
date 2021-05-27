function SameNumberUniqueElements(a1, a2) {
  return new Set(a1).size === new Set(a2).size;
}

module.exports = SameNumberUniqueElements;

// function SameNumberUniqueElements(a1, a2) {
//   return new Set(a1).size == new Set(a2).size ? true : false;
// }

// Write a function that returns true
// if two arrays have the same number of unique elements,
// and false otherwise.

// arr1 = [1, 3, 4, 4, 4]
// arr2 = [2, 5, 7]

// In arr1, the number 4 appears three times,
// which means it contains three unique elements: [1, 3, 4].
// Since arr1 and arr2 both contain the same number
// of unique elements, this example would return true.

// this passes
// function SameNumberUniqueElements(a1, a2) {
//     let Set1 = new Set(a1);
//     let Set2 = new Set(a2);
//     if (Set1.size == Set2.size) {
//       return true;
//     } else {
//       return false;
//     }
//   }
