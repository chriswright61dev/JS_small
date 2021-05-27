const solveForExp = require("./solveForExp");

describe("Exponential Equations", () => {
  // it("4", () => {
  //   expect(solveForExp(4, 1024)).toBeCloseTo(5);
  // });

  // it("2", () => {
  //   expect(solveForExp(2, 1024)).toBeCloseTo(10);
  // });

  // it("9", () => {
  //   expect(solveForExp(9, 3486784401)).toBeCloseTo(10);
  // });

  it("4", () => {
    expect(solveForExp(4, 1024)).toBe(5);
  });

  it("2", () => {
    expect(solveForExp(2, 1024)).toBe(10);
  });

  it("9", () => {
    expect(solveForExp(9, 3486784401)).toBe(10);
  });
});
