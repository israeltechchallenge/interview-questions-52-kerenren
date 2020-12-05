const path = require("path");
const filePath = `./${path.basename(__filename).split('.')[0].toString()}.js`;
const file = require(`${filePath}`);

describe(__filename, () => {
  test.each `
    a|expected
                ${"232425"} |${true}
${"444445"} |${true}
${"1234567"} |${true}
${"123412351236"} |${true}
${"57585960616263"} |${true}
${"500001500002500003"} |${true}
${"919920921"} |${true}
${"2324256"} |${false}
${"1235"} |${false}
${"121316"} |${false}
${"12131213"} |${false}
${"54321"} |${false}
${"56555453"} |${false}
${"90090190290"} |${false}
${"35236237238"} |${false}
`
    ("returns $expected when calling with the following param/s: a", ({
      a,
      expected
    }) => {
      expect(file.solution(a)).toStrictEqual(expected);
    })
});