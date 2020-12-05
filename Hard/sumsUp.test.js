const path = require("path");
const filePath = `./${path.basename(__filename).split(".")[0].toString()}.js`;
const file = require(`${filePath}`);

describe(__filename, () => {
  test.each`
    a                                       | expected
    ${[1, 2, 3, 4, 5]}                      | ${[[3, 5]]}
    ${[10, 9, 7, 2, 8]}                     | ${[]}
    ${[1, 6, 5, 4, 8, 2, 3, 7]}             | ${[[1, 7], [2, 6], [3, 5]]}
    ${[5, 7, 2, 3, 0, 1, 6, 4, 8]}          | ${[[3, 5], [1, 7], [2, 6], [0, 8]]}
    ${[10, 9, 7, 1, 8, -2, -1, 2, 6]}       | ${[[-2, 10], [-1, 9], [1, 7], [2, 6]]}
    ${[0, 1, -2, 7, 9, 5, 4, 10, 8, -1, 6]} | ${[[0, 8], [1, 7], [-2, 10], [-1, 9]]}
  `(
    "returns $expected when calling with the following param/s: a",
    ({ a, expected }) => {
      expect(file.solution(a)).toStrictEqual(expected);
    }
  );
});
