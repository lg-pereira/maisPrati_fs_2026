const { sum, pair } = require("./function.js");

test("Deve somar dois números corretamente", () => {
  expect(sum(1, 2)).toBe(3);
});

test("Deve indicar se o número é par", () => {
  expect(pair(4)).toBe(true);
});
