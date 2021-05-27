function filterList(l) {
  return l.filter(item => Number.isInteger(item));
}
console.log(filterList([1, 2, 3, "x", "y", 10])); // ➞ [1, 2, 3, 10]

// filterList([1, "a", 2, "b", 3, "c"]) // ➞ [1, 2, 3]

// filterList([0, -32, "&@A", 64, "99", -128] //) ➞ [0, -32, 64, -128]
