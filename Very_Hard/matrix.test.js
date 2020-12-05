const path = require("path");
const filePath = `./${path.basename(__filename).split('.')[0].toString()}.js`;
const file = require(`${filePath}`);

describe(__filename, () => {
  test.each `
    a|expected
                ${3} |${[[1,2,3],[8,9,4],[7,6,5]]}
${2} |${[[1,2],[4,3]]}
${4} |${[[1,2,3,4],[12,13,14,5],[11,16,15,6],[10,9,8,7]]}
`
    ("returns $expected when calling with the following param/s: a", ({
      a,
      expected
    }) => {
      expect(file.solution(a)).toStrictEqual(expected);
    })
});