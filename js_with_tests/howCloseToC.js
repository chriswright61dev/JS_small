function howCloseToC(rapidity) {
  // calc   1 - β ≈ sech(2φ)
  // hyperbolic secant defined as sech(x) = 1 / cosh(x).
  // rapidity  = φ
  return (1 / Math.cosh(2 * rapidity)).toExponential([2]);
}
module.exports = howCloseToC;

// const sech = n => 1 / Math.cosh(n);
// const howCloseToC = rapidity => sech(2 * rapidity).toExponential(2);

// const howCloseToC = φ => (1 / Math.cosh(2 * φ)).toExponential(2)

// An ultrarelativistic particle is one whose speed v is very close to
// the speed of light c (or equivalently, one whose
// β = v/c is very close to 1).
// But a number like 0.9999999999999999999 is inconvenient to work with:
// calculators round it to 1, and trying to write it in
// scientific notation does the same
// (because any 9 you stop at gets rounded up by the following 9).

// It's better to work with the quantity (1 - β) instead.

// Fortunately, we don't need to deal directly with β
// to calculate an ultrarelativistic particle's (1 - β).
// There are some other wieldier quantities that we can use
// to approximate (1 - β) with great precision.
// One of them is the particle's
// rapidity φ,
// which is related to β by the equation:

// tanh φ = β

// (where tanh is the hyperbolic tangent function).

// For an ultrarelativistic particle,
// the rapidity lets us approximate (1 - β)
// like this:

// 1 - β ≈ sech(2φ)

// (where sech is the hyperbolic secant).
// hyperbolic secant defined as sech(x) = 1 / cosh(x).
// Write a function that takes an ultrarelativistic particle's
// rapidity φ (a number)
// and uses the approximation formula given above
// to return the particle's
//(1 - β) to three significant figures.
// The output should be a string in scientific notation,
// formatted like "6.63e-34".
