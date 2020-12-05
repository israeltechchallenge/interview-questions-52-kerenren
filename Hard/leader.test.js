const path = require("path");
const filePath = `./${path.basename(__filename).split('.')[0].toString()}.js`;
const file = require(`${filePath}`);

describe(__filename, () => {
  test.each `
    a| expected
                ${[2,3,20,15,8,3]} |${[20,15,8,3]}
${[2,3,20,15,26,3]} |${[26,3]}
${[1,2,3,4,3,10]} |${[10]}
${[500,400,300,200,100,50,10,5]} |${[500,400,300,200,100,50,10,5]}
${[8,7,1,2,10,3,5]} |${[10,5]}
`
    ("returns $expected when $a is called", ({
      a,
      expected
    }) => {
      expect(file.solution(a)).toStrictEqual(expected);
    })
});