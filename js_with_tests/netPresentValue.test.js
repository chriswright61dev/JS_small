const netPresentValue = require("./netPresentValue");

describe("Net Present Value of investement", () => {
  it("rate test 1", () => {
    expect(netPresentValue(100, 0.2, 1)).toBe("$83");
  });

  it("rate test 2", () => {
    expect(netPresentValue(100, 0.1, 1)).toBe("$91");
  });

  it("rate test 3", () => {
    expect(netPresentValue(100, 0.1, 20)).toBe("$851");
  });

  it("should not accept a negative interest rate", () => {
    expect(netPresentValue(100, -0.1, 20)).toBe(false);
  });

  it("should not accept a negative number of years", () => {
    expect(netPresentValue(100, 0.1, -20)).toBe(false);
  });

  it("should not accept a negative investment", () => {
    expect(netPresentValue(-100, 0.1, 20)).toBe(false);
  });
});

// It is not possible to receive a negative amount of money,
// use a negative investment rate or invest for a negative number of years.
// These should return false.

// netPresentValue(100, 0.1, 1) ➞ "$91"

// netPresentValue(100, 0.2, 1) ➞ "$83"

// netPresentValue(100, 0.1, 20) ➞ "$851"
