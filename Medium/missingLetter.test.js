const path = require("path");
const filePath = `./${path
  .basename(__filename)
  .split(".")[0]
  .toString()}.js`;
const file = require(`${filePath}`);

describe(__filename, () => {
  test.each`
    a              | expected
    ${"abdefg"}    | ${"c"}
    ${"mnopqs"}    | ${"r"}
    ${"tuvxyz"}    | ${"w"}
    ${"jlm"}       | ${"k"}
    ${"rsu"}       | ${"t"}
    ${"eghij"}     | ${"f"}
    ${"qrtuv"}     | ${"s"}
    ${"ghijklmno"} | ${"No Missing Letter"}
    ${"xyz"}       | ${"No Missing Letter"}
  `("returns $expected when $a is called", ({ a, expected }) => {
    expect(file.solution(a)).toBe(expected);
  });
});
