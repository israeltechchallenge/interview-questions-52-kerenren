const path = require("path");
const filePath = `./${path.basename(__filename).split(".")[0].toString()}.js`;
const file = require(`${filePath}`);

describe(__filename, () => {
  test.each`
    a      | expected
    ${1}   | ${57.29577951308232}
    ${5}   | ${286.4788975654116}
    ${7}   | ${401.07045659157626}
    ${60}  | ${3437.7467707849396}
    ${100} | ${5729.5779513082325}
    ${180} | ${10313.240312354817}
  `("returns $expected when $a is called", ({ a, expected }) => {
    expect(file.solution(a)).toStrictEqual(expected);
  });
});
