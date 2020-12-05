const path = require("path");
const filePath = `./${path.basename(__filename).split('.')[0].toString()}.js`;
const file = require(`${filePath}`);

describe(__filename, () => {
  test.each `
    a|expected
                ${["happy","python","honey","yelp","plank","lanky"]} |${["happythoneyelplanky",1]}
${["move","over","very"]} |${["movery",3]}
${["oven","envier","erase","serious"]} |${["ovenvieraserious",2]}
${["to","ops","psy","syllable"]} |${["topsyllable",1]}
${["aaa","bbb","ccc","ddd"]} |${["aaabbbcccddd",0]}
${["abcde","bcdefghi","efghi","fghij","ghijklmnop"]} |${["abcdefghijklmnop",4]}
${["aab","abcccd","cdeeef","effff"]} |${["aabcccdeeeffff",2]}
`
    ("returns $expected when calling with the following param/s: a", ({
      a,
      expected
    }) => {
      expect(file.solution(a)).toStrictEqual(expected);
    })
});