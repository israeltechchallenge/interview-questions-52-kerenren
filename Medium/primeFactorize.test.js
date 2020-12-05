const path = require("path");
const filePath = `./${path
  .basename(__filename)
  .split(".")[0]
  .toString()}.js`;
const file = require(`${filePath}`);

describe(__filename, () => {
  test.each`
    a       | expected
    ${32}   | ${[2, 2, 2, 2, 2]}
    ${17}   | ${[17]}
    ${35}   | ${[5, 7]}
    ${2}    | ${[2]}
    ${1}    | ${[]}
    ${100}    | ${[2,2,5,5]}
  `("returns $expected when $a is called", ({ a, expected }) => {
    expect(file.solution(a)).toStrictEqual(expected);
  });
});
