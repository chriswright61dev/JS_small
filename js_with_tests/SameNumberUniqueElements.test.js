const SameNumberUniqueElements = require("./SameNumberUniqueElements");

describe("Number of unique elements in two arrays", () => {
  it("two arrays with same unique number of elements 1", () => {
    expect(SameNumberUniqueElements([1, 3, 4, 4, 4], [2, 5, 7])).toBe(true);
  });

  it("two arrays with same unique number of elements 2", () => {
    expect(SameNumberUniqueElements([2], [3, 3, 3, 3, 3])).toBe(true);
  });

  it("two arrays with same unique number of elements 3", () => {
    expect(SameNumberUniqueElements([5, 9, 9], [9, 5])).toBe(true);
  });

  it("two arrays with same unique number of elements 4", () => {
    expect(SameNumberUniqueElements([1, 1, 1, 4], [1, 4, 4, 4, 4, 4])).toBe(
      true
    );
  });

  it("two empty arrays both have zero unique elements ", () => {
    expect(SameNumberUniqueElements([], [])).toBe(true);
  });

  it("two arrays without same number of unique elements 1", () => {
    expect(SameNumberUniqueElements([5, 6, 7, 9], [4, 1])).toBe(false);
  });

  it("two arrays without same number of unique elements 2", () => {
    expect(SameNumberUniqueElements([9, 8, 7, 6], [4, 4, 3, 1])).toBe(false);
  });
});
