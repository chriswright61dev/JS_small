function getStudentNames(students) {
  // const map1 = array1.map(x => x * 2);
  console.log(students);
  return students.map(student => student.name);
}

console.log(
  getStudentNames([{ name: "Steve" }, { name: "Mike" }, { name: "John" }])
);
// takes an array of objects
// getStudentNames([
//     { name: "Steve" },
//     { name: "Mike" },
//     { name: "John" }
//   ]) ➞ ["Becky", "John", "Steve"]
