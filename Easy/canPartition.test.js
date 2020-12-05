const path = require("path");
const filePath = `./${path.basename(__filename).split('.')[0].toString()}.js`;
const file = require(`${filePath}`);

describe(__filename, () => {
  test.each `
    a|expected
                ${[-1,-10,1,-2,20]} |${false}
${[-1,-20,5,-1,-2,2]} |${true}
${[2,8,4,1]} |${true}
${[1,1,-1,1]} |${false}
${[-1,-1,1,1]} |${true}
${[0,5,1,-1]} |${false}
${[0,1,1,-1]} |${false}
${[0,1,1,1]} |${false}
${[0,0,1,1]} |${true}
${[0,0,1]} |${true}
${[0,0,0]} |${true}
${[5,5,25,100]} |${false}
${[-1,5,20,100]} |${false}
${[1,1,1,1]} |${true}
${[-1,1,-1]} |${true}
${[-1,1,1]} |${false}
`
    ("returns $expected when calling with the following param/s: a", ({
      a,
      expected
    }) => {
      expect(file.solution(a)).toStrictEqual(expected);
    })
});