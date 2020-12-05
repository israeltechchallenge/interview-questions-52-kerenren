const path = require("path");
const filePath = `./${path.basename(__filename).split(".")[0].toString()}.js`;
const file = require(`${filePath}`);

describe(__filename, () => {
  test.each`
    a           | expected
    ${"karaca"} | ${"0c0r0kaca"}
    ${"burak"}  | ${"k0r3baca"}
    ${"banana"} | ${"0n0n0baca"}
    ${"alpaca"} | ${"0c0pl0aca"}
    ${"hello"}  | ${"2ll1haca"}
  `(
    "returns $expected when calling with the following param/s: a",
    ({ a, expected }) => {
      expect(file.solution(a)).toBe(expected);
    }
  );
});
