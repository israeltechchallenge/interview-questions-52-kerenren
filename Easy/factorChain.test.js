const path = require("path");
const filePath = `./${path.basename(__filename).split('.')[0].toString()}.js`;
const file = require(`${filePath}`);

describe(__filename, () => {
  test.each `
    a|expected
                ${[1,2,4,8,16,32]} |${true}
${[1,1,1,1,1,1]} |${true}
${[2,4,6,7,12]} |${false}
${[10,1]} |${false}
${[10,20,30,40]} |${false}
${[10,20,40]} |${true}
${[1,1,1,1,7,49]} |${true}
`
    ("returns $expected when calling with the following param/s: a", ({
      a,
      expected
    }) => {
      expect(file.solution(a)).toStrictEqual(expected);
    })
});