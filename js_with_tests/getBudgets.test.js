const getBudgets = require("./getBudgets");

describe("Sum of budgets from an array of objects", () => {
  it("should sum 65700 ", () => {
    expect(
      getBudgets([
        { name: "John", age: 21, budget: 23000 },
        { name: "Steve", age: 32, budget: 40000 },
        { name: "Martin", age: 16, budget: 2700 }
      ])
    ).toBe(65700);
  });

  it("it should sum 62600", () => {
    expect(
      getBudgets([
        { name: "John", age: 21, budget: 29000 },
        { name: "Steve", age: 32, budget: 32000 },
        { name: "Martin", age: 16, budget: 1600 }
      ])
    ).toBe(62600);
  });
});
