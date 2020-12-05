const path = require("path");
const filePath = `./${path.basename(__filename).split(".")[0].toString()}.js`;
const file = require(`${filePath}`);

describe(__filename, () => {
  test.each`
    a                                                   | expected
    ${"One two three four"}                             | ${"enO owt eerht four"}
    ${"Make sure uoy only esrever sdrow of ddo length"} | ${"Make sure you only reverse words of odd length"}
    ${""}                                               | ${""}
    ${"Bananas"}                                        | ${"sananaB"}
    ${"Even even even even even even even even even"}   | ${"Even even even even even even even even even"}
    ${"Odd odd odd odd odd odd odd odd odd odd odd"}    | ${"ddO ddo ddo ddo ddo ddo ddo ddo ddo ddo ddo"}
  `("returns $expected when $a is called", ({ a, expected }) => {
    expect(file.solution(a)).toBe(expected);
  });
});
