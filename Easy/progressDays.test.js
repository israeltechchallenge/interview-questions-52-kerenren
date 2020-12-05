const path = require("path");
const filePath = `./${path.basename(__filename).split('.')[0].toString()}.js`;
const file = require(`${filePath}`);

describe(__filename, () => {
  test.each `
    a|expected
                ${[3,4,1,2]} |${2}
${[10,11,12,9,10]} |${3}
${[6,5,4,3,2,9]} |${1}
${[9,9]} |${0}
${[12,11,10,12,11,13]} |${2}
`
    ("returns $expected when calling with the following param/s: a", ({
      a,
      expected
    }) => {
      expect(file.solution(a)).toStrictEqual(expected);
    })
});