const path = require("path");
const filePath = `./${path.basename(__filename).split(".")[0].toString()}.js`;
const file = require(`${filePath}`);

describe(__filename, () => {
  test.each`
    a                                                                             | expected
    ${"I am Ne mo Nemo !"}                                                        | ${"I found Nemo at 5!"}
    ${"N e m o is NEMO NeMo Nemo !"}                                              | ${"I found Nemo at 8!"}
    ${"I am Nemo's dad Nemo senior ."}                                            | ${"I found Nemo at 5!"}
    ${"Oh, hello !"}                                                              | ${"I can't find Nemo :("}
    ${"Is it Nemos, Nemona, Nemoor or Garfield?"}                                 | ${"I can't find Nemo :("}
    ${"Nemo is a clown fish, he has white and orange stripes. Nemo , come back!"} | ${"I found Nemo at 1!"}
  `("returns $expected when $a is called", ({ a, expected }) => {
    expect(file.solution(a)).toBe(expected);
  });
});
