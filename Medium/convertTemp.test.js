const path = require("path");
const filePath = `./${path
  .basename(__filename)
  .split(".")[0]
  .toString()}.js`;
const file = require(`${filePath}`);

describe(__filename, () => {
  test.each`
    a           | expected
    ${"35°C"}   | ${"95°F"}
    ${"18°C"}   | ${"64°F"}
    ${"0°F"}    | ${"-18°C"}
    ${"100°C"}  | ${"212°F"}
    ${"69°F"}   | ${"21°C"}
    ${"159°C"}  | ${"318°F"}
    ${"-40°C"}  | ${"-40°F"}
    ${"-40°F"}  | ${"-40°C"}
    ${"16°C"}   | ${"61°F"}
    ${"500°C"}  | ${"932°F"}
    ${"33"}     | ${"Error"}
    ${"19°F"}   | ${"-7°C"}
    ${"85°C"}   | ${"185°F"}
    ${"0°C"}    | ${"32°F"}
    ${"1777°F"} | ${"969°C"}
    ${"-90°C"}  | ${"-130°F"}
    ${"16°F"}   | ${"-9°C"}
    ${"180°C"}  | ${"356°F"}
    ${"7K"}     | ${"Error"}
    ${"100°F"}  | ${"38°C"}
  `("returns $expected when $a is called", ({ a, expected }) => {
    expect(file.solution(a)).toBe(expected);
  });
});
