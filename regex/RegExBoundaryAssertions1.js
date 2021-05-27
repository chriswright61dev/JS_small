// RegEx: Boundary Assertions

function isJS(path) {
  return /.js/.test(path);
}

console.log(isJS("/users/user.j"));
isJS("/users/user.jsx"); //➞ true

isJS("/users/user.js"); //➞ true

isJS("/users/user.ts"); //➞ false
