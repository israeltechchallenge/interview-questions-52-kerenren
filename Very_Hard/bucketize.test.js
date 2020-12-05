const path = require("path");
const filePath = `./${path.basename(__filename).split('.')[0].toString()}.js`;
const file = require(`${filePath}`);

describe(__filename, () => {
  test.each `
    a| b|expected
                ${"she sells sea shells by the sea"} |${2} |${[]}
${"ab bc cd"} |${1} |${[]}
${"she sells sea shells by the sea"} |${10} |${["she sells","sea shells","by the sea"]}
${"the mouse jumped over the cheese"} |${7} |${["the","mouse","jumped","over","the","cheese"]}
${"fairy dust coated the air"} |${20} |${["fairy dust coated","the air"]}
${"do the hokey pokey"} |${6} |${["do the","hokey","pokey"]}
${"do the hokey pokey"} |${12} |${["do the hokey","pokey"]}
${"rich magnificent trees dotted the landscape"} |${12} |${["rich","magnificent","trees dotted","the","landscape"]}
${"rich magnificent trees dotted the landscape"} |${15} |${["rich","magnificent","trees dotted","the landscape"]}
${"rich magnificent trees dotted the landscape"} |${18} |${["rich magnificent","trees dotted the","landscape"]}
${"rich magnificent trees dotted the landscape"} |${22} |${["rich magnificent trees","dotted the landscape"]}
${"rich magnificent trees dotted the landscape"} |${40} |${["rich magnificent trees dotted the","landscape"]}
${"rich magnificent trees dotted the landscape"} |${43} |${["rich magnificent trees dotted the landscape"]}
${"beep bo bee bop bee bo bo bop"} |${6} |${["beep","bo bee","bop","bee bo","bo bop"]}
${"beep bo bee bop bee bo bo bop"} |${10} |${["beep bo","bee bop","bee bo bo","bop"]}
${"a b c d e"} |${3} |${["a b","c d","e"]}
${"a b c d e"} |${2} |${["a","b","c","d","e"]}
${"a b c d e"} |${1} |${["a","b","c","d","e"]}
${"a b c d e"} |${2} |${["a","b","c","d","e"]}
${"a b c d e"} |${1} |${["a","b","c","d","e"]}
`
    ("returns $expected when calling with the following param/s: a, b", ({
      a,
      b,
      expected
    }) => {
      expect(file.solution(a, b)).toStrictEqual(expected);
    })
});