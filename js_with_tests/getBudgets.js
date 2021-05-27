function getBudgets(arr) {
  return arr.reduce((total, currentValue) => {
    return total + currentValue.budget;
  }, 0);
}

// const getBudgets = arr => arr.reduce((a,v) => a + v.budget, 0);

module.exports = getBudgets;

// function getBudgets(arr) {
//     const reducer = function(total, currentValue) {
//       return total + currentValue.budget;
//     };
//     const result = arr.reduce(reducer, 0);
//     return result;
//   }
