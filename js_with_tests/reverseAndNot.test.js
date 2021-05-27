const reverseAndNot = require("./reverseAndNot");

describe("Array of Multiples", () => {
  it("returns a correct number", () => {
    expect(reverseAndNot(123)).toBe(321123);
  });
  it("returns a correct number", () => {
    expect(reverseAndNot(123456789)).toBe(987654321123456789);
  });
});
