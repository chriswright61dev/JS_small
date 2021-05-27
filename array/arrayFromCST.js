function toArray(str) {
  return str == "" ? [] : str.split(", ");
}

console.log(toArray("watermelon, raspberry, orange"));

//➞ ["watermelon", "raspberry", "orange"]
