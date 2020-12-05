const path = require("path");
const filePath = `./${path.basename(__filename).split(".")[0].toString()}.js`;
const file = require(`${filePath}`);

describe(__filename, () => {
  test.each`
    a     | b     | expected
    ${9}  | ${18} | ${18}
    ${8}  | ${5}  | ${40}
    ${17} | ${11} | ${187}
    ${17} | ${5}  | ${85}
    ${3}  | ${12} | ${12}
    ${9}  | ${9}  | ${9}
  `("returns $expected when $a and $b are called", ({ a, b, expected }) => {
    expect(file.solution(a, b)).toBe(expected);
  });
});
