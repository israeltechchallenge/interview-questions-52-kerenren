const path = require("path");
const filePath = `./${path.basename(__filename).split(".")[0].toString()}.js`;
const file = require(`${filePath}`);

describe(__filename, () => {
  test.each`
    a                   | expected
    ${84847473937}      | ${false}
    ${546732965015}     | ${false}
    ${6781235184590}    | ${true}
    ${9432821089765}    | ${true}
    ${629764}           | ${false}
    ${90864523148909}   | ${false}
    ${7296012}          | ${false}
    ${647380265483206}  | ${false}
    ${38165975424790}   | ${true}
    ${8146327815320}    | ${false}
    ${768431605430}     | ${false}
    ${4920124852367763} | ${true}
    ${60543981597247}   | ${true}
    ${10282343456789}   | ${true}
  `("returns $expected when $a is called", ({ a, expected }) => {
    expect(file.solution(a)).toBe(expected);
  });
});
