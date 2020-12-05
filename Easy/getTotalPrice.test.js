const path = require("path");
const filePath = `./${path.basename(__filename).split(".")[0].toString()}.js`;
const file = require(`${filePath}`);

describe(__filename, () => {
  test.each`
    a                                                                                                                                                                                               | expected
    ${[{ product: "Milk", quantity: 1, price: 1.5 }]}                                                                                                                                               | ${1.5}
    ${[{ product: "Milk", quantity: 1, price: 1.5 }, { product: "Cereals", quantity: 1, price: 2.5 }]}                                                                                              | ${4}
    ${[{ product: "Milk", quantity: 3, price: 1.5 }]}                                                                                                                                               | ${4.5}
    ${[{ product: "Milk", quantity: 1, price: 1.5 }, { product: "Eggs", quantity: 12, price: 0.1 }, { product: "Bread", quantity: 2, price: 1.6 }, { product: "Cheese", quantity: 1, price: 4.5 }]} | ${10.4}
    ${[{ product: "Chocolate", quantity: 1, price: 0.1 }, { product: "Lollipop", quantity: 1, price: 0.2 }]}                                                                                        | ${0.3}
  `(
    "returns $expected when calling with the following param/s: a",
    ({ a, expected }) => {
      expect(file.solution(a)).toBe(expected);
    }
  );
});
