//SamWithFrodo;

function middleEarth(arr) {
  // find sam
  console.log(arr.indexOf("Sam"));

  return arr[arr.indexOf("Sam") - 1] == "Frodo" ||
    arr[arr.indexOf("Sam") + 1] == "Frodo"
    ? true
    : false;
}

middleEarth(["Frodo", "Sam", "Gandalf"]); //➞ true

middleEarth(["Frodo", "Saruman", "Sam"]); //➞ false

middleEarth(["Orc", "Sam", "Frodo", "Legolas"]); //➞ true
