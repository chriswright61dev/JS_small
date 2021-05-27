// function netPresentValue(pv, ir, years) {
//   if (pv <= 0) {
//     return false;
//   } else if (ir <= 0) {
//     return false;
//   } else if (years <= 0) {
//     return false;
//   } else {
//     let value = Math.round((pv * (1 - Math.pow(1 + ir, years * -1))) / ir);
//     return "$" + value;
//   }
// }

function netPresentValue(pv, ir, years) {
  if (pv < 0 || ir < 0 || years < 0) {
    return false;
  } else {
    return "$" + Math.round((pv * (1 - (1 + ir) ** -years)) / ir);
  }
}

module.exports = netPresentValue;

// The cumulative present value interest rate can be calculated by:
// pv * (1 - (1 + investment rate) ^negative number of years) / investment rate

// The cumulative present value interest rate can be calculated by:

// pv * (1 - (1 + investment rate) ^negative number of years) / investment rate

// The result should always be rounded to the nearest whole dollar.
