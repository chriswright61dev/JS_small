function greetPeople(names) {
  return names.map(x => "Hello " + x).join(", ");
}

greetPeople(["Angela", "Joe"]); //➞ "Hello Angela, Hello Joe"

console.log(greetPeople(["Angela", "Joe"]));
