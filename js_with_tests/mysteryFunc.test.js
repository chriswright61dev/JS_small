const mysteryFunc = require("./mysteryFunc");

describe("Function to generate outputs ", () => {
  it("test 1", () => {
    expect(mysteryFunc(152)).toBe(10);
  });

  it("test 2", () => {
    expect(mysteryFunc(832)).toBe(48);
  });

  it("test 3", () => {
    expect(mysteryFunc(19)).toBe(9);
  });

  it("test 4", () => {
    expect(mysteryFunc(133)).toBe(9);
  });
});
