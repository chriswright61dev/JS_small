const noddyFunction = require("./noddyFunction");

describe("Noddy ", () => {
  it("FANTASTIC", () => {
    expect(noddyFunction("FANTASTIC")).toBe(true);
  });

  it("wonderful", () => {
    expect(noddyFunction("wonderful")).toBe(false);
  });

  it("NODDY", () => {
    expect(noddyFunction("NODDY")).toBe(false);
  });
});
