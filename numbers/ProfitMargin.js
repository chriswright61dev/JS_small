// Profit Margin

function profitMargin(costPrice, salesPrice) {
  return ((100 * (salesPrice - costPrice)) / salesPrice).toFixed(1) + "%";
}

// Create a function that calculates the profit margin
// given costPrice and salesPrice.
// Return the result as a percentage formated string,
// and rounded to one decimals.

// To calculate profit margin you subtract the cost from the sales price,
// then divide by salesprice.
console.log(profitMargin(10, 15));

profitMargin(50, 50); //➞ "0.0%"

profitMargin(28, 39); //➞ "28.2%"

profitMargin(33, 84); //➞ "60.7%"

// Notes

//     Remember to return the result as a percentage formated string.
//     Only one decimal should be included.
