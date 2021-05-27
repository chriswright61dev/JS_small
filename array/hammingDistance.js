// hammingDistance;

function hammingDistance(str1, str2) {
  return str1.split("").filter((curr, idx) => curr !== str2[idx]).length;
}

function hammingDistance(str1, str2) {
  array1 = str1.split("");
  array2 = str2.split("");
  let count = 0;
  for (let index = 0; index < array1.length; index++) {
    if (array1[index] != array2[index]) {
      count++;
    }
  }
  return count;
}

console.log(hammingDistance("strong", "strung"));
hammingDistance("abcde", "bcdef"); //➞ 5

hammingDistance("abcde", "abcde"); //➞ 0

hammingDistance("strong", "strung"); //➞ 1
