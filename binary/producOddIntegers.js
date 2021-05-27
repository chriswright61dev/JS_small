// Product of All Odd Integers

function oddProduct(arr) {
  product = (product, number) => product * number;
  const result = arr.filter(number => number % 2 != 0).reduce(product);
  console.log(result);
  //console.log(result);
}

oddProduct([3, 4, 1, 1, 5]); //➞ 15

oddProduct([5, 5, 8, 2, 4, 32]); //➞ 25

oddProduct([1, 2, 1, 2, 1, 2, 1, 2]); //➞ 1
