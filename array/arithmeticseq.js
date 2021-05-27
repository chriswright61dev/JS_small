function nextElement(arr) {
  return arr.slice(-1)[0] + (arr[1] - arr[0]);
}

nextElement([3, 5, 7, 9]); //➞ 11
