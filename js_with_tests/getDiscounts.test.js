const getDiscounts = require("./getDiscounts");

describe("apply a discount to every number in array", () => {
  it("description", () => {
    expect(getDiscounts([2, 4, 6, 11], "50%")).toStrictEqual([1, 2, 3, 5.5]);
  });
  it("description", () => {
    expect(getDiscounts([10, 20, 40, 80], "75%")).toStrictEqual([
      7.5,
      15,
      30,
      60
    ]);
  });
  it("description", () => {
    expect(getDiscounts([100], "45%")).toStrictEqual([45]);
  });
});
