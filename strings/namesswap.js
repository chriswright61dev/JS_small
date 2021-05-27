function nameShuffle(str) {
  let names = str.split(" ");
  let name = names[1] + " " + names[0];
  console.log(name);
}

nameShuffle("Donald Trump");
