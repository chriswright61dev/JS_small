const testJackpot = require("./testJackpot");

describe("Jackpot Suite", () => {
  it("has 4 characters the same", () => {
    expect(testJackpot(["@", "@", "@", "@"])).toBe(true);
  });

  it("has 4 lowercase strings the same", () => {
    expect(testJackpot(["abc", "abc", "abc", "abc"])).toBe(true);
  });

  it("has 4 uppercase strings the same", () => {
    expect(testJackpot(["SS", "SS", "SS", "SS"])).toBe(true);
  });

  it("has 4 strings not the same", () => {
    expect(testJackpot(["&&", "&", "&&&", "&&&&"])).toBe(false);
  });

  it("has 4 strings of different case", () => {
    expect(testJackpot(["SS", "SS", "SS", "Ss"])).toBe(false);
  });
});
