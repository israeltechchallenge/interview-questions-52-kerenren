const path = require("path");
const filePath = `./${path.basename(__filename).split('.')[0].toString()}.js`;
const file = require(`${filePath}`);

describe(__filename, () => {
  test.each `
    a| b|expected
                ${-13} |${64} |${51}
${50} |${25} |${0}
${-6} |${3} |${0}
`
    ("returns $expected when calling with the following param/s: a, b", ({
      a,
      b,
      expected
    }) => {
      expect(file.solution(a, b)).toBe(expected);
    })
});