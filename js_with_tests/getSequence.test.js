const getSequence = require("./getSequence");
describe("An Array of Consecutive Numbers", () => {
  it("returns a correct array starting at 1", () => {
    expect(getSequence(1, 5)).toStrictEqual([1, 2, 3, 4, 5]);
  });

  it("returns a correct array starting at an arbitary number", () => {
    expect(getSequence(98, 100)).toStrictEqual([98, 99, 100]);
  });

  it("returns a single array element if start and finish are the same", () => {
    expect(getSequence(1000, 1000)).toStrictEqual([1000]);
  });
});

module.exports = getSequence;

// describe("An Array of Consecutive Numbers", () => {
//   it("returns a correct array starting at 1", () => {
//     expect(getSequence(1, 5)).toBe([1, 2, 3, 4, 5]);
//   });

//   it("returns a correct array starting at an arbitary number", () => {
//     expect(getSequence(98, 100)).toBe([98, 99, 100]);
//   });

//   it("returns a single array element if start and finish are the same", () => {
//     expect(getSequence(1000, 1000)).toBe([1000]);
//   });
// });
