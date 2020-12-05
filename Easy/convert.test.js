const path = require("path");
const filePath = `./${path.basename(__filename).split(".")[0].toString()}.js`;
const file = require(`${filePath}`);

describe(__filename, () => {
  test.each`
    a    | b     | expected
    ${1} | ${0}  | ${3600}
    ${1} | ${3}  | ${3780}
    ${0} | ${30} | ${1800}
  `(
    "returns $expected when calling with the following param/s: a, b",
    ({ a, b, expected }) => {
      expect(file.solution(a, b)).toBe(expected);
    }
  );
});
