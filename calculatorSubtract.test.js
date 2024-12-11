const { subtract } = require("./calculator");

describe("Тестирование функции subtract", () => {
  const subtractTestCases = [
    { description: "Вычитание положительных чисел: 5 - 3 = 2", args: [5, 3], expected: 2 },
    { description: "Вычитание двух отрицательных чисел: -5 - (-3) = -2", args: [-5, -3], expected: -2 },
    { description: "Вычитание положительного и отрицательного числа: 5 - (-3) = 8", args: [5, -3], expected: 8 },
    { description: "Вычитание нулей: 0 - 0 = 0", args: [0, 0], expected: 0 },
    { description: "Вычитание нуля из числа: 5 - 0 = 5", args: [5, 0], expected: 5 },
    { description: 'Вычитание строки из числа: "5" - 3 = NaN', args: ["5", 3], expected: "Ошибка: одно из значений не число" },
    { description: "Вычитание больших чисел: 1000000 - 999999 = 1", args: [1000000, 999999], expected: 1 },
    { description: "Вычитание маленьких чисел: 0.001 - 0.0001 = 0.0009", args: [0.001, 0.0001], expected: 0.0009 },
    { description: "Вычитание отрицательных чисел с плавающей запятой: -0.5 - (-0.3) = -0.2", args: [-0.5, -0.3], expected: -0.2 },
    { description: "Вычитание с NaN: 5 - NaN = NaN", args: [5, NaN], expected: "Ошибка: пустые значения" },
    { description: "Вычитание с NaN: NaN - 3 = NaN", args: [NaN, 3], expected: "Ошибка: пустые значения" },
    { description: "Вычитание с Infinity: Infinity - 5 = Infinity", args: [Infinity, 5], expected: Infinity },
    { description: "Вычитание с -Infinity: -Infinity - 5 = -Infinity", args: [-Infinity, 5], expected: -Infinity },
    { description: "Вычитание больших отрицательных чисел: -1000000 - (-999999) = -1", args: [-1000000, -999999], expected: -1 },
    { description: "Вычитание объекта с числовым значением: {value: 5} - 3 = NaN", args: [{ value: 5 }, 3], expected: "Ошибка: одно из значений не число" },
    { description: "Вычитание массива: [5] - 3 = NaN", args: [[5], 3], expected: "Ошибка: одно из значений не число" },
    { description: "Вычитание с null: 5 - null = NaN", args: [5, null], expected: "Ошибка: одно из значений не число" },
    { description: "Вычитание с null: null - 3 = NaN", args: [null, 3], expected: "Ошибка: одно из значений не число" },
  ];

  subtractTestCases.forEach(({ description, args, expected }) => {
    test(description, () => {
      expect(subtract(...args)).toBe(expected);
    });
  });

  module.exports = {subtractTestCases}
});
