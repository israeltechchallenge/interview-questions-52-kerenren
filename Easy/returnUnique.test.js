const path = require("path");
const filePath = `./${path.basename(__filename).split('.')[0].toString()}.js`;
const file = require(`${filePath}`);

describe(__filename, () => {
  test.each `
    a|expected
                ${[1,9,8,8,7,6,1,6]} |${[9,7]}
${[5,5,2,4,4,4,9,9,9,1]} |${[2,1]}
${[9,5,6,8,7,7,1,1,1,1,1,9,8]} |${[5,6]}
${[4,3,9,9,1,1,6,1,6,2,4]} |${[3,2]}
${[44,44,44,2,55,55,55,0,66,66,66]} |${[2,0]}
${[-9,-9,-9,7,-9,-9,1]} |${[7,1]}
${[2,2,-19,2,7,7,4,9,9,0,0,3,3,3]} |${[-19,4]}
`
    ("returns $expected when calling with the following param/s: a", ({
      a,
      expected
    }) => {
      expect(file.solution(a)).toStrictEqual(expected);
    })
});