const path = require("path");
const filePath = `./${path.basename(__filename).split(".")[0].toString()}.js`;
const file = require(`${filePath}`);

describe(__filename, () => {
  test.each`
    a                                              | expected
    ${{ a: 1, b: 2, c: 3 }}                        | ${[["a", "b", "c"], [1, 2, 3]]}
    ${{ a: "Apple", b: "Microsoft", c: "Google" }} | ${[["a", "b", "c"], ["Apple", "Microsoft", "Google"]]}
    ${{ key1: true, key2: false }}                 | ${[["key1", "key2"], [true, false]]}
    ${{ 1: null, 2: null, 3: null }}               | ${[["1", "2", "3"], [null, null, null]]}
    ${{ key1: "cat", key2: "dog", key3: null }}    | ${[["key1", "key2", "key3"], ["cat", "dog", null]]}
  `("returns $expected when $a is called", ({ a, expected }) => {
    expect(file.solution(a)).toStrictEqual(expected);
  });
});
