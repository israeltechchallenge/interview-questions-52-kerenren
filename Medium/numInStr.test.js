const path = require("path");
const filePath = `./${path.basename(__filename).split(".")[0].toString()}.js`;
const file = require(`${filePath}`);

describe(__filename, () => {
  test.each`
    a                                                  | expected
    ${["abc", "abc10"]}                                | ${["abc10"]}
    ${["abc", "ab10c", "a10bc", "bcd"]}                | ${["ab10c", "a10bc"]}
    ${["1", "a", " ", "b"]}                            | ${["1"]}
    ${["rct", "ABC", "Test", "xYz"]}                   | ${[]}
    ${["this IS", "10xYZ", "xy2K77", "Z1K2W0", "xYz"]} | ${["10xYZ", "xy2K77", "Z1K2W0"]}
    ${["-/>", "10bc", "abc "]}                         | ${["10bc"]}
  `(
    "returns $expected when calling with the following param/s: a",
    ({ a, expected }) => {
      expect(file.solution(a)).toStrictEqual(expected);
    }
  );
});
