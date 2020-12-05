const path = require("path");
const filePath = `./${path.basename(__filename).split(".")[0].toString()}.js`;
const file = require(`${filePath}`);

describe(__filename, () => {
  test.each`
    a      | b                  | expected
    ${"N"} | ${"June, 30"}      | ${"Summer"}
    ${"N"} | ${"March, 1"}      | ${"Spring"}
    ${"S"} | ${"September, 22"} | ${"Spring"}
    ${"S"} | ${"April, 20"}     | ${"Autumn"}
    ${"N"} | ${"November, 20"}  | ${"Autumn"}
    ${"S"} | ${"May, 8"}        | ${"Autumn"}
    ${"N"} | ${"February, 28"}  | ${"Winter"}
    ${"S"} | ${"August, 6"}     | ${"Winter"}
    ${"N"} | ${"July, 28"}      | ${"Summer"}
    ${"S"} | ${"October, 12"}   | ${"Spring"}
    ${"N"} | ${"December, 31"}  | ${"Winter"}
    ${"S"} | ${"January, 2"}    | ${"Summer"}
  `("returns $expected when $a and $b are called", ({ a, b, expected }) => {
    expect(file.solution(a, b)).toBe(expected);
  });
});
