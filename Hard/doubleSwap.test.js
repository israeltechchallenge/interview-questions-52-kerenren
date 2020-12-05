const path = require("path");
const filePath = `./${path.basename(__filename).split(".")[0].toString()}.js`;
const file = require(`${filePath}`);

describe(__filename, () => {
  test.each`
    a                              | b      | c      | expected
    ${"(Q_Q) (T_T) (=.=) (>.<)"}   | ${")"} | ${"("} | ${")Q_Q( )T_T( )=.=( )>.<("}
    ${"aabbccc"}                   | ${"a"} | ${"b"} | ${"bbaaccc"}
    ${"random w#rds writt&n h&r&"} | ${"#"} | ${"&"} | ${"random w&rds writt#n h#r#"}
    ${"128 895 556 788 999"}       | ${"8"} | ${"9"} | ${"129 985 556 799 888"}
    ${"mamma mia"}                 | ${"m"} | ${"a"} | ${"amaam aim"}
    ${"**##**"}                    | ${"*"} | ${"#"} | ${"##**##"}
    ${"123456789"}                 | ${"4"} | ${"5"} | ${"123546789"}
    ${"445566&&"}                  | ${"4"} | ${"&"} | ${"&&556644"}
    ${"!?@,."}                     | ${","} | ${"."} | ${"!?@.,"}
    ${"Q_Q T_T =.= >.<"}           | ${"Q"} | ${"T"} | ${"T_T Q_Q =.= >.<"}
    ${"<>"}                        | ${">"} | ${"<"} | ${"><"}
    ${"001101"}                    | ${"1"} | ${"0"} | ${"110010"}
  `("returns $expected when $a and $b are called", ({ a, b, c, expected }) => {
    expect(file.solution(a, b, c)).toBe(expected);
  });
});
