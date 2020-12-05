const path = require("path");
const filePath = `./${path.basename(__filename).split(".")[0].toString()}.js`;
const file = require(`${filePath}`);

describe(__filename, () => {
  test.each`
    a    | b    | c    | d    | e    | expected
    ${1} | ${1} | ${1} | ${1} | ${1} | ${true}
    ${1} | ${2} | ${1} | ${1} | ${1} | ${true}
    ${1} | ${2} | ${2} | ${1} | ${1} | ${false}
    ${1} | ${2} | ${2} | ${1} | ${2} | ${true}
    ${1} | ${2} | ${2} | ${2} | ${1} | ${true}
    ${2} | ${2} | ${2} | ${1} | ${2} | ${false}
  `(
    "returns $expected when calling with the following param/s: a, b, c, d, e",
    ({ a, b, c, d, e, expected }) => {
      expect(file.solution(a, b, c, d, e)).toBe(expected);
    }
  );
});
