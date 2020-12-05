const path = require("path");
const filePath = `./${path.basename(__filename).split('.')[0].toString()}.js`;
const file = require(`${filePath}`);

describe(__filename, () => {
  test.each `
    a| expected
                ${3} |${7}
${5} |${31}
${8} |${255}
${19} |${524287}
${9} |${511}
${13} |${8191}
${0} |${0}
`
    ("returns $expected when $a is called", ({
      a,
      expected
    }) => {
      expect(file.solution(a)).toBe(expected);
    })
});