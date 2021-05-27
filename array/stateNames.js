// Create a function that filters out an array of state names
// into two categories based on the second parameter.

//     Abbreviations abb
//     Full names full

function filterStateNames(arr, type) {
  return type == "abb"
    ? arr.filter(name => name.length == 2)
    : arr.filter(name => name.length > 2);
}

// function filterStateNames(arr, type) {
//   // if length = 2 abb else full
//   if (type == "abb") {
//     return arr.filter(name => name.length == 2);
//   } else return arr.filter(name => name.length > 2); //full
// }

console.log(filterStateNames(["Arizona", "CA", "NY", "Nevada"], "abb"));
filterStateNames(["Arizona", "CA", "NY", "Nevada"], "abb");
//➞ ["CA", "NY"]

filterStateNames(["Arizona", "CA", "NY", "Nevada"], "full");
//➞ ["Arizona", "Nevada"]

filterStateNames(["MT", "NJ", "TX", "ID", "IL"], "abb");
//➞ ["MT", "NJ", "TX", "ID", "IL"]

filterStateNames(["MT", "NJ", "TX", "ID", "IL"], "full");
//➞ []
