function dictionary(initial, words) {
  result = words.filter(word => word.startsWith(initial));
  console.log(result);
}
dictionary("bu", ["button", "breakfast", "border"]); // ➞ ["button"]
