function hasKey(obj, key) {
  //   keylist = Object.keys(obj);
  //console.log("a" in keylist);

  return key in obj;
}
console.log(hasKey({ a: 44, b: 45, c: 46 }, "a"));
