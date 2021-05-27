// After N Months...

// Create a function that takes in year and months as input,
// then return what year it would be after n-months has elapsed.

// function afterNMonths(year, months) {
//   if (!year) {
//     return "year missing";
//   }
//   if (!months) {
//     return "month missing";
//   }
//   return year + Math.floor(months / 12);
// }

function afterNMonths(year, months) {
  return !year
    ? "year missing"
    : !months
    ? "month missing"
    : year + Math.floor(months / 12);
}

// const afterNMonths = (y, m) => {
// 	return !y ? "year missing" : !m ? "month missing"
// 				 : y + Math.floor(m / 12);
// }

afterNMonths(2020, 24); //➞ 2022

afterNMonths(1832, 2); //➞ 1832

afterNMonths(1444, 60); //➞ 1449

// Notes

//     Assume that adding 12 months will always increment the year by 1.
//     If no value is given for year or months,
//     return "year missing" or "month missing".
//     At least one value will be present.
