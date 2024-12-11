const { multiply } = require("./calculator");

describe("Тестирование функции multiply", () => {
  const multiplyTestCases = [
    { description: "Умножение положительных чисел: 3 * 4 = 12", args: [3, 4], expected: 12 },
    { description: "Умножение двух отрицательных чисел: -3 * -4 = 12", args: [-3, -4], expected: 12 },
    { description: "Умножение положительного числа на отрицательное: 3 * -4 = -12", args: [3, -4], expected: -12 },
    { description: "Умножение нулей: 0 * 0 = 0", args: [0, 0], expected: 0 },
    { description: "Умножение числа на 0: 5 * 0 = 0", args: [5, 0], expected: 0 },
    { description: 'Умножение строки на число: "3" * 4 = NaN', args: ["3", 4], expected: "Ошибка: одно из значений не число" },
    { description: "Умножение больших чисел: 1000000 * 999999 = 999999000000", args: [1000000, 999999], expected: 999999000000 },
    { description: "Умножение маленьких чисел: 0.001 * 0.0001 = 0.0000001", args: [0.001, 0.0001], expected: 1.0000000000000001e-7 },
    { description: "Умножение отрицательных чисел с плавающей запятой: -0.5 * -0.3 = 0.15", args: [-0.5, -0.3], expected: 0.15 },
    { description: "Умножение с NaN: 5 * NaN = NaN", args: [5, NaN], expected: "Ошибка: пустые значения" },
    { description: "Умножение с NaN: NaN * 3 = NaN", args: [NaN, 3], expected: "Ошибка: пустые значения" },
    { description: "Умножение с Infinity: Infinity * 5 = Infinity", args: [Infinity, 5], expected: Infinity },
    { description: "Умножение с -Infinity: -Infinity * 5 = -Infinity", args: [-Infinity, 5], expected: -Infinity },
    { description: "Умножение больших отрицательных чисел: -1000000 * -999999 = 999999000000", args: [-1000000, -999999], expected: 999999000000 },
    { description: "Умножение с объектом, содержащим числовое значение: {value: 3} * 4 = NaN", args: [{ value: 3 }, 4], expected: "Ошибка: одно из значений не число" },
    { description: "Умножение с массивом: [3] * 4 = NaN", args: [[3], 4], expected: "Ошибка: одно из значений не число" },
    { description: "Умножение с null: 5 * null = NaN", args: [5, null], expected: "Ошибка: одно из значений не число" },
    { description: "Умножение с null: null * 3 = NaN", args: [null, 3], expected: "Ошибка: одно из значений не число" },
  ];

  multiplyTestCases.forEach(({ description, args, expected }) => {
    test(description, () => {
      expect(multiply(...args)).toBe(expected);
    });
  });
  
  module.exports = {multiplyTestCases}
});

