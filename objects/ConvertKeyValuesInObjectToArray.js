// Convert Key, Values in an Object to Array

function objectToArray(obj) {
  return Object.entries(obj);
}

console.log(
  objectToArray({
    D: 1,
    B: 2,
    C: 3
  })
);

objectToArray({
  D: 1,
  B: 2,
  C: 3
}); //➞ [["D", 1], ["B", 2], ["C", 3]]

objectToArray({
  likes: 2,
  dislikes: 3,
  followers: 10
}); //➞ [["likes", 2], ["dislikes", 3], ["followers", 10]]
