// function formatMath(expr) {
//     arr = expr.split(' ');
//
//     // result = arr[0] arr[1] arr[2];
//     console.log(Function('"use strict";return (' + obj + ')')(););

// }

function formatMath(expr) {
  let newExpr = expr.replace("x", "*");
  exprResult = eval(newExpr);
  return expr + " = " + exprResult;
}

// function formatMath(expr) {
//   arr = expr.split(" "); //array of strings
//   console.log(arr);
//   if (arr[1] == "+") {
//     exprResult = parseInt(arr[0]) + parseInt(arr[2]);
//   } else if (arr[1] == "-") {
//     exprResult = parseInt(arr[0]) - parseInt(arr[2]);
//   } else if (arr[1] == "x") {
//     exprResult = parseInt(arr[0]) * parseInt(arr[2]);
//   } else {
//     exprResult = parseInt(arr[0]) / parseInt(arr[2]);
//   }
//   return expr + " = " + exprResult;
// }

// function looseJsonParse(obj){
//     return Function('"use strict";return (' + obj + ')')();
// }
// console.log(looseJsonParse(
//    "{a:(4-1), b:function(){}, c:new Date()}"
// ))

console.log(formatMath("4 x 5"));

//➞ "3 + 4 = 7"

// formatMath("3 - 2") //➞ "3 - 2 = 1"

// formatMath("4 x 5") // ➞ "4 x 5 = 20"

// formatMath("6 / 3") //➞ "6 / 3 = 2"
