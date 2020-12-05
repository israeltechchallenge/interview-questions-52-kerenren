const path = require("path");
const filePath = `./${path.basename(__filename).split(".")[0].toString()}.js`;
const file = require(`${filePath}`);

describe(__filename, () => {
  test.each`
    a         | expected
    ${43}     | ${"Oddish"}
    ${373}    | ${"Oddish"}
    ${55551}  | ${"Oddish"}
    ${694}    | ${"Oddish"}
    ${4433}   | ${"Evenish"}
    ${11}     | ${"Evenish"}
    ${211112} | ${"Evenish"}
  `("returns $expected when $a is called", ({ a, expected }) => {
    expect(file.solution(a)).toBe(expected);
  });
});
