const path = require("path");
const filePath = `./${path.basename(__filename).split(".")[0].toString()}.js`;
const file = require(`${filePath}`);

describe(__filename, () => {
  test.each`
    a      | b     | expected
    ${7}   | ${5}  | ${[7, 14, 21, 28, 35]}
    ${12}  | ${10} | ${[12, 24, 36, 48, 60, 72, 84, 96, 108, 120]}
    ${17}  | ${7}  | ${[17, 34, 51, 68, 85, 102, 119]}
    ${630} | ${14} | ${[630, 1260, 1890, 2520, 3150, 3780, 4410, 5040, 5670, 6300, 6930, 7560, 8190, 8820]}
    ${140} | ${3}  | ${[140, 280, 420]}
    ${7}   | ${8}  | ${[7, 14, 21, 28, 35, 42, 49, 56]}
    ${11}  | ${21} | ${[11, 22, 33, 44, 55, 66, 77, 88, 99, 110, 121, 132, 143, 154, 165, 176, 187, 198, 209, 220, 231]}
  `("returns $expected when $a and $b are called", ({ a, b, expected }) => {
    expect(file.solution(a, b)).toStrictEqual(expected);
  });
});
