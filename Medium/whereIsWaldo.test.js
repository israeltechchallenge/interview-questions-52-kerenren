const path = require("path");
const filePath = `./${path.basename(__filename).split('.')[0].toString()}.js`;
const file = require(`${filePath}`);

describe(__filename, () => {
  test.each `
    a|expected
                ${[["A","A","A"],["A","A","A"],["A","B","A"]]} |${[2,1]}
${[["c","c","c","c"],["c","c","c","d"]]} |${[1,3]}
${[["O","O","O","O"],["O","O","O","O"],["O","O","O","O"],["O","O","O","O"],["P","O","O","O"],["O","O","O","O"]]} |${[4,0]}
${[["X","X","Y","X"],["X","X","X","X"],["X","X","X","X"]]} |${[0,2]}
`
    ("returns $expected when calling with the following param/s: a", ({
      a,
      expected
    }) => {
      expect(file.solution(a)).toStrictEqual(expected);
    })
});