const rogerShots = require("./rogerShots");

describe("Shooting bottles as fast as possible", () => {
  it("just bangs", () => {
    expect(
      rogerShots(["Bang!", "Bang!", "Bang!", "Bang!", "Bang!", "Bang!"])
    ).toBe(3);
  });

  it("bangs and bangbangs", () => {
    expect(rogerShots(["Bang!", "Bang!", "Bang!", "Bang!", "BangBang!"])).toBe(
      2.5
    );
  });

  it("mixture including invalid", () => {
    expect(
      rogerShots([
        "Bang!",
        "BangBangBang!",
        "Boom!",
        "Bang!",
        "BangBang!",
        "BangBang!"
      ])
    ).toBe(2);
  });
});
