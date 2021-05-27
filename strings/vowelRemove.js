function removeVowels(str) {
  array1 = str.split("");
  array2 = array1.map(x => x.replace(/[aeiou]/, ""));
  return array2.join("");
  console.log(string2);
  //   return str.replace(/[aeiou]/, "");
}

// function removeVowels(str) {
//
// 	return str.map(replacer());

console.log(removeVowels("abcdefghij"));
