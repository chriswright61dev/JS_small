const indexMultiplier = require("./indexMultiplier");

describe("index Multiplied by value", () => {
  it("range", () => {
    expect(indexMultiplier([1, 2, 3, 4, 5])).toBe(40);
  });

  it("range2", () => {
    expect(indexMultiplier([-3, 0, 8, -6])).toBe(-2);
  });
});

// indexMultiplier([1, 2, 3, 4, 5]) ➞ 40
// // (1*0 + 2*1 + 3*2 + 4*3 + 5*4)

// indexMultiplier([-3, 0, 8, -6]) ➞ -2
// (-3*0 + 0*1 + 8*2 + -6*3)
