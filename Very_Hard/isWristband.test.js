const path = require("path");
const filePath = `./${path
  .basename(__filename)
  .split(".")[0]
  .toString()}.js`;
const file = require(`${filePath}`);

describe(__filename, () => {
  test.each`
    a                                                                       | expected
    ${[["A", "A"], ["B", "B"], ["C", "C"]]}                                 | ${true}
    ${[["A", "B"], ["A", "B"], ["A", "B"]]}                                 | ${true}
    ${[["A", "B", "C"], ["C", "A", "B"], ["B", "C", "A"], ["A", "B", "C"]]} | ${true}
    ${[["A", "B", "C"], ["B", "A", "B"], ["D", "C", "A"], ["E", "D", "C"]]} | ${false}
    ${[["A", "B", "C"], ["B", "C", "A"], ["C", "A", "B"], ["A", "B", "A"]]} | ${true}
    ${[["A", "B", "C"], ["B", "C", "D"], ["C", "D", "E"], ["D", "E", "F"]]} | ${true}
    ${[["A", "B", "C"], ["B", "C", "D"], ["C", "D", "E"], ["D", "E", "E"]]} | ${true}
    ${[["A", "B", "C"], ["B", "C", "D"], ["C", "D", "E"], ["D", "F", "E"]]} | ${false}
    ${[["A", "B", "C"], ["B", "D", "A"], ["C", "A", "B"], ["A", "B", "A"]]} | ${false}
    ${[["A", "B"], ["A", "B"], ["A", "C"], ["A", "B"]]}                     | ${false}
    ${[["A", "A"], ["B", "B"], ["C", "C"], ["D", "B"]]}                     | ${false}
    ${[["A", "A"], ["B", "B"], ["C", "C"], ["C", "C"]]}                     | ${true}
  `(
    `returns $expected when calling with the following param/s: `,
    ({ a, expected }) => {
      expect(file.solution(a)).toStrictEqual(expected);
    }
  );
});
