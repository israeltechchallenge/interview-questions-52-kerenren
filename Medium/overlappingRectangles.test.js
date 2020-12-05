const path = require("path");
const filePath = `./${path.basename(__filename).split('.')[0].toString()}.js`;
const file = require(`${filePath}`);

describe(__filename, () => {
  test.each `
    a| b|expected
                ${[{"x":2,"y":1},{"x":5,"y":5}]} |${[{"x":3,"y":2},{"x":5,"y":7}]} |${6}
${[{"x":2,"y":-9},{"x":13,"y":-4}]} |${[{"x":5,"y":-11},{"x":7,"y":-2}]} |${10}
${[{"x":-8,"y":-7},{"x":-4,"y":0}]} |${[{"x":-5,"y":-9},{"x":-1,"y":-2}]} |${5}
${[{"x":-11,"y":2},{"x":-1,"y":6}]} |${[{"x":-8,"y":2},{"x":-4,"y":9}]} |${16}
${[{"x":-4,"y":-6},{"x":1,"y":1}]} |${[{"x":-2,"y":-2},{"x":3,"y":4}]} |${9}
${[{"x":-3,"y":-3},{"x":3,"y":3}]} |${[{"x":-1,"y":-1},{"x":1,"y":1}]} |${4}
${[{"x":1,"y":1},{"x":4,"y":4}]} |${[{"x":4,"y":4},{"x":6,"y":6}]} |${0}
${[{"x":1,"y":1},{"x":4,"y":3}]} |${[{"x":4,"y":4},{"x":6,"y":6}]} |${0}
${[{"x":1,"y":1},{"x":3,"y":3}]} |${[{"x":4,"y":4},{"x":6,"y":6}]} |${0}
`
    ("returns $expected when calling with the following param/s: a, b", ({
      a,
      b,
      expected
    }) => {
      expect(file.solution(a, b)).toStrictEqual(expected);
    })
});