function go(num) {
  let outputString = "";
  console.log(outputString);

  for (let index = 0; index < num; index++) {
    outputString = outputString += "-";
  }
  return outputString;
}
console.log(go(3));

function Go(num) {
  return "-".repeat(num);
}

go(3);
