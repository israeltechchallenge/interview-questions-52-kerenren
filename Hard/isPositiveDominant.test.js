const path = require("path");
const filePath = `./${path.basename(__filename).split(".")[0].toString()}.js`;
const file = require(`${filePath}`);

describe(__filename, () => {
  test.each`
    a                                  | expected
    ${[1, 1, 1, 1, -3, -4]}            | ${false}
    ${[5, 99, 832, -3, -4]}            | ${true}
    ${[5, 0]}                          | ${true}
    ${[0, -4, -1]}                     | ${false}
    ${[1, 2, 3, -1]}                   | ${true}
    ${[1, 0, 0, -1]}                   | ${false}
    ${[5, 4, 3, 0, 0, -1, -1, -2, -2]} | ${true}
    ${[52, 52, 52, -3, 2, 2, 2, -4]}   | ${false}
    ${[3, 3, 3, 3, -1, -1, -1]}        | ${false}
  `("returns $expected when $a is called", ({ a, expected }) => {
    expect(file.solution(a)).toBe(expected);
  });
});
