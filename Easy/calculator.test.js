const path = require("path");
const filePath = `./${path.basename(__filename).split(".")[0].toString()}.js`;
const file = require(`${filePath}`);

describe(__filename, () => {
  test.each`
    a     | b      | c     | expected
    ${2}  | ${"/"} | ${2}  | ${1}
    ${10} | ${"-"} | ${7}  | ${3}
    ${2}  | ${"*"} | ${16} | ${32}
    ${2}  | ${"-"} | ${2}  | ${0}
    ${15} | ${"+"} | ${26} | ${41}
    ${2}  | ${"+"} | ${2}  | ${4}
    ${2}  | ${"/"} | ${0}  | ${"Can't divide by 0!"}
  `("returns $expected when $a and $b are called", ({ a, b, c, expected }) => {
    expect(file.solution(a, b, c)).toBe(expected);
  });
});
