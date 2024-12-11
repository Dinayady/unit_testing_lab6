const { log } = require("./calculator");

describe("Тестирование функции log", () => {
  const logTestCases = [
    { description: "Логарифм с основанием больше 1: log(8, 2) = 3", args: [8, 2], expected: 3 },
    { description: "Логарифм с основанием меньше 1: log(0.125, 0.5) = 3", args: [0.125, 0.5], expected: 3 },
    { description: "Логарифм с основанием e: log(Math.E, Math.E) = 1", args: [Math.E, Math.E], expected: 1 },
    { description: "Логарифм с основанием 10: log(1000, 10) = 3", args: [1000, 10], expected: 2.9999999999999996 },
    { description: "Логарифм с основанием 2: log(16, 2) = 4", args: [16, 2], expected: 4 },
    { description: "Логарифм от 1 с любым основанием: log(1, 5) = 0", args: [1, 5], expected: 0 },
    { description: "Логарифм с отрицательным числом: log(-8, 2) = NaN", args: [-8, 2], expected: "Логарифм от отрицательного числа или нуля не существует" },
    { description: "Логарифм с нулем: log(0, 10) = -Infinity", args: [0, 10], expected: "Логарифм от отрицательного числа или нуля не существует" },
    { description: "Логарифм с нулем как основанием: log(10, 0) = NaN", args: [10, 0], expected: "Основание должно быть > 0 и не равно 1" },
    { description: "Логарифм с основанием 1: log(10, 1) = NaN", args: [10, 1], expected: "Основание должно быть > 0 и не равно 1" },
    { description: "Логарифм с большими числами: log(1000000, 10) = 6", args: [1000000, 10], expected: 5.999999999999999 },
    { description: "Логарифм с очень маленьким числом: log(0.000001, 10) = -6", args: [0.000001, 10], expected: -5.999999999999999 },
    { description: "Логарифм с комплексным числом: log(1 + 2i, 10) = NaN", args: [{ real: 1, imaginary: 2 }, 10], expected: 'Ошибка: одно из значений не число' },
    { description: "Логарифм с Infinity: log(Infinity, 10) = Infinity", args: [Infinity, 10], expected: Infinity },
    { description: "Логарифм с NaN: log(NaN, 10) = NaN", args: [NaN, 10], expected: 'Ошибка: пустые значения' },
    { description: "Логарифм с null: log(null, 10) = NaN", args: [null, 10], expected: 'Ошибка: одно из значений не число' },
    { description: "Логарифм с null как основанием: log(10, null) = NaN", args: [10, null], expected: 'Ошибка: одно из значений не число' },
  ];

  logTestCases.forEach(({ description, args, expected }) => {
    test(description, () => {
      expect(log(...args)).toBe(expected);
    });
  });
  
  module.exports = {logTestCases}
});
