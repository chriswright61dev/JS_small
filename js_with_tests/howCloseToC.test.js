const howCloseToC = require("./howCloseToC");

describe("ultrarelativistic particle speed", () => {
  it("3.14", () => {
    expect(howCloseToC(3.14)).toBe("3.75e-3");
  });

  it("42", () => {
    expect(howCloseToC(42)).toBe("6.61e-37");
  });

  it("355", () => {
    expect(howCloseToC(355)).toBe("8.95e-309");
  });
});
