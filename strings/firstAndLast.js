function removeFirstLast(str) {
  if (str.length <= 2) {
    return str;
  } else {
    return str.substring(1, str.length - 1);
  }
}

// removeFirstLast = str => str.slice(1, -1) || str;

console.log(removeFirstLast("abcdef"));
