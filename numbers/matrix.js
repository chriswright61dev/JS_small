// The determinant of the following matrix is: ad - bc:

// [[a, b], [c, d]]

// const calcDeterminant = ([[a, b], [c, d]]) => a * d - b * c;

function calcDeterminant(matrix) {
  let a = matrix[0][0];
  let b = matrix[0][1];
  let c = matrix[1][0];
  let d = matrix[1][1];
  return a * d - b * c;
}
console.log(
  calcDeterminant([
    [1, 2],
    [3, 4]
  ])
);
//➞ -2
