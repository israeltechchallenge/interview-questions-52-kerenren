const path = require("path");
const filePath = `./${path.basename(__filename).split(".")[0].toString()}.js`;
const file = require(`${filePath}`);

describe(__filename, () => {
  test.each`
    a                                     | expected
    ${[9, 5, 9, 5, 1, 1, 1]}              | ${2}
    ${[5, 6, 6, 7, 6, 3, 9]}              | ${1}
    ${[4, 4, 4, 9, 9, 9, 9]}              | ${0}
    ${[5, 9, 5, 9, 5]}                    | ${3}
    ${[4, 4, 4, 8, 4, 8, 4]}              | ${3}
    ${[2, 2, 2, 2, 2, 2, 3]}              | ${0}
    ${[2, 2, 2, 2, 3, 2, 3]}              | ${2}
    ${[1, 2, 1, 1, 1, 2, 1]}              | ${2}
    ${[5, 1, 1, 1, 1, 4, 1]}              | ${1}
    ${[3, 7, 3, 2, 1, 5, 1, 2, 2, -2, 2]} | ${3}
    ${[1, 7, 1, 7, 1, 7, 1]}              | ${5}
    ${[5, 5, 5]}                          | ${0}
  `("returns $expected when $a is called", ({ a, expected }) => {
    expect(file.solution(a)).toBe(expected);
  });
});
