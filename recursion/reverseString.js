//Reverse a String
// non recursively
//split()  reverse() join()
function reverse1(str) {
  return str.split("").reverse().join("");
}

// To Reverse a String With Recursion use two methods:
// the String.prototype.substr()
// String.prototype.charAt()

function reverse(str) {
  if (str === "")
    // This is the terminal case that will end the recursion
    return "";
  else return reverse(str.substr(1)) + str.charAt(0); //adds char 0 to end
}
console.log(reverse("hello")); //➞ "olleh")

reverse("world"); //➞ "dlrow"

reverse("a"); //➞ "a"

reverse(""); //➞ ""
