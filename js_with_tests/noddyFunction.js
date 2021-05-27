function noddyFunction(str) {
  return !RegExp(/[dD]/).test(str);
}
module.exports = noddyFunction;
