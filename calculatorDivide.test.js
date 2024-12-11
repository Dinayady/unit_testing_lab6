const { divide } = require("./calculator");

 // Тестирование деления
 describe("Тестирование функции divide", () => {
  const DivideTestCases = [
    { description: "Деление положительных чисел: 10 / 2 = 5", args: [10, 2], expected: 5 },
    { description: "Деление двух отрицательных чисел: -10 / -2 = 5", args: [-10, -2], expected: 5 },
    { description: "Деление положительного числа на отрицательное: 10 / -2 = -5", args: [10, -2], expected: -5 },
    { description: "Деление нуля на ноль: 0 / 0 = NaN", args: [0, 0], expected: 'Деление на ноль невозможно' },
    { description: "Деление числа на ноль: 10 / 0 = Infinity", args: [10, 0], expected: 'Деление на ноль невозможно' },
    { description: 'Деление строки на число: "10" / 2 = NaN', args: ["10", 2], expected: 'Ошибка: одно из значений не число' },
    { description: "Деление больших чисел: 1000000 / 1000 = 1000", args: [1000000, 1000], expected: 1000 },
    { description: "Деление маленьких чисел: 0.001 / 0.0001 = 10", args: [0.001, 0.0001], expected: 10 },
    { description: "Деление отрицательных чисел: -0.5 / -0.25 = 2", args: [-0.5, -0.25], expected: 2 },
    { description: "Деление с NaN: 10 / NaN = NaN", args: [10, NaN], expected: 'Ошибка: пустые значения' },
    { description: "Деление с NaN: NaN / 2 = NaN", args: [NaN, 2], expected: 'Ошибка: пустые значения' },
    { description: "Деление с Infinity: Infinity / 2 = Infinity", args: [Infinity, 2], expected: Infinity },
    { description: "Деление с -Infinity: -Infinity / 2 = -Infinity", args: [-Infinity, 2], expected: -Infinity },
    { description: "Деление больших отрицательных чисел: -1000000 / -1000 = 1000", args: [-1000000, -1000], expected: 1000 },
    { description: "Деление с объектом, содержащим числовое значение: {value: 10} / 2 = NaN", args: [{ value: 10 }, 2], expected: 'Ошибка: одно из значений не число' },
    { description: "Деление с массивом: [10] / 2 = NaN", args: [[10], 2], expected: 'Ошибка: одно из значений не число' },
    { description: "Деление с null: 10 / null = NaN", args: [10, null], expected: 'Ошибка: одно из значений не число' },
    { description: "Деление с null: null / 2 = NaN", args: [null, 2], expected: 'Ошибка: одно из значений не число' },
  ];

  DivideTestCases.forEach(({ description, args, expected }) => {
    test(description, () => {
      expect(divide(...args)).toBe(expected);
    });
  });

  module.exports = {DivideTestCases}
});
