const path = require("path");
const filePath = `./${path
  .basename(__filename)
  .split(".")[0]
  .toString()}.js`;
const file = require(`${filePath}`);

describe(__filename, () => {
  test.each`
    a                     | expected
    ${"aaaaa"}            | ${[0, 0, 0, 0, 0]}
    ${"bba"}              | ${[2, 1, 0]}
    ${"abbb"}             | ${[0, 1, 2, 3]}
    ${"abab"}             | ${[0, 1, 0, 1]}
    ${"babbb"}            | ${[1, 0, 1, 2, 3]}
    ${"baaab"}            | ${[1, 0, 0, 0, 1]}
    ${"abcdabcd"}         | ${[0, 1, 2, 1, 0, 1, 2, 3]}
    ${"abbaaaaba"}        | ${[0, 1, 1, 0, 0, 0, 0, 1, 0]}
    ${"treesandflowers"}  | ${[2, 1, 0, 0, 1, 0, 1, 2, 2, 1, 0, 1, 0, 1, 2]}
    ${"pokerface"}        | ${[1, 0, 1, 0, 1, 1, 0, 1, 0]}
    ${"beautiful"}        | ${[1, 0, 0, 0, 1, 0, 1, 0, 1]}
    ${"rythmandblues"}    | ${[5, 4, 3, 2, 1, 0, 1, 2, 2, 1, 0, 0, 1]}
    ${"shopper"}          | ${[2, 1, 0, 1, 1, 0, 1]}
    ${"singingintherain"} | ${[1, 0, 1, 1, 0, 1, 1, 0, 1, 2, 1, 0, 1, 0, 0, 1]}
    ${"sugarandspice"}    | ${[1, 0, 1, 0, 1, 0, 1, 2, 2, 1, 0, 1, 0]}
    ${"totally"}          | ${[1, 0, 1, 0, 1, 2, 3]}
  `(
    "returns $expected when calling with the following param/s: a",
    ({ a, expected }) => {
      expect(file.solution(a)).toStrictEqual(expected);
    }
  );
});
