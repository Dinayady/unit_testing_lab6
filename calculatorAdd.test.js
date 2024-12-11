const { add } = require("./calculator");

describe("Тестирование функции add", () => {
  const addTestCases = [
    { description: "Оба числа положительные: 1 + 2 = 3", args: [1, 2], expected: 3 },
    { description: "Оба числа отрицательные: -1 + -2 = -3", args: [-1, -2], expected: -3 },
    { description: "Один положительный, второй отрицательный: 5 + -3 = 2", args: [5, -3], expected: 2 },
    { description: "Оба числа нули: 0 + 0 = 0", args: [0, 0], expected: 0 },
    { description: "Второе число ноль: 7 + 0 = 7", args: [7, 0], expected: 7 },
    { description: 'Вместо чисел строка: "1" + "2"', args: ["1", "2"], expected: 'Ошибка: одно из значений не число' },
    { description: 'Второе число строка: 1 + "2"', args: [1, "2"], expected: 'Ошибка: одно из значений не число' },
    { description: "Сложение больших чисел: 1000000000 + 1000000000 = 2000000000", args: [1000000000, 1000000000], expected: 2000000000 },
    { description: "Сложение с маленькими числами: 0.0000001 + 0.0000001 = 0.0000002", args: [0.0000001, 0.0000001], expected: 0.0000002 },
    { description: "Сложение с отрицательными числами с плавающей запятой: -1.5 + -2.5 = -4", args: [-1.5, -2.5], expected: -4 },
    { description: "Сложение с NaN: 5 + NaN", args: [5, NaN], expected: "Ошибка: пустые значения" },
    { description: "Сложение с NaN: NaN + 5", args: [NaN, 5], expected: "Ошибка: пустые значения" },
    { description: "Сложение с Infinity: Infinity + 5", args: [Infinity, 5], expected: Infinity },
    { description: "Сложение с -Infinity: -Infinity + 5", args: [-Infinity, 5], expected: -Infinity },
    { description: "Сложение больших отрицательных чисел: -1000000000 + -1000000000 = -2000000000", args: [-1000000000, -1000000000], expected: -2000000000 },
    { description: "Сложение с объектами: { valueOf: () => 5 } + 3", args: [{ valueOf: () => 5 }, 3], expected: "Ошибка: одно из значений не число" },
    { description: "Сложение с массивами: [1] + [2]", args: [[1], [2]], expected: "Ошибка: одно из значений не число" },
    { description: "Сложение с объектами без числового значения: {} + 3", args: [{}, 3], expected: "Ошибка: одно из значений не число" },
    { description: "Сложение с null: null + 5", args: [null, 5], expected: "Ошибка: одно из значений не число" },
    { description: "Сложение с null: 5 + null", args: [5, null], expected: "Ошибка: одно из значений не число" },
  ];

  addTestCases.forEach(({ description, args, expected }) => {
    test(description, () => {
      expect(add(...args)).toBe(expected);
    });
  });
  
  module.exports = {addTestCases}
});
