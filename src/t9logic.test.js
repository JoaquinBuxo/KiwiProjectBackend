const { wordCombinations } = require("./t9logic");

describe("t9logic", () => {
  it("returns abc for number 2", () => {
    const result = wordCombinations("2");
    expect(result).toEqual(["a", "b", "c"]);
  });

  it("returns hola, but not kiwi for 4652", () => {
    const result = wordCombinations("4652");
    expect(result).toContain("hola");
    expect(result).not.toContain("kiwi");
  });

  it("returns kiwi, but not hola for 5494", () => {
    const result = wordCombinations("5494");
    expect(result).toContain("kiwi");
    expect(result).not.toContain("hola");
  });
});
