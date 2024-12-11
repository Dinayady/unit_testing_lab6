const { power } = require("./calculator");

describe("Тестирование функции power", () => {
  const powerTestCases = [
    { description: "Возведение в степень: 2^3 = 8", args: [2, 3], expected: 8 },
    { description: "Возведение в степень: 3^'2' = Ошибка", args: [3, '2'], expected: "Ошибка: одно из значений не число" },
    { description: "Возведение в степень: 5^0 = 1", args: [5, 0], expected: 1 },
    { description: "Возведение в степень: 0^5 = 0", args: [0, 5], expected: 0 },
    { description: "Возведение в степень: 0^0 = 1", args: [0, 0], expected: 1 },
    { description: "Возведение в степень с отрицательным показателем: 2^(-3) = 0.125", args: [2, -3], expected: 0.125 },
    { description: "Возведение в степень: (-2)^2 = 4", args: [-2, 2], expected: 4 },
    { description: "Возведение в степень: (-2)^3 = -8", args: [-2, 3], expected: -8 },
    { description: "Возведение в степень: 10^2 = 100", args: [10, 2], expected: 100 },
    { description: "Возведение в степень: 2^(-1) = 0.5", args: [2, -1], expected: 0.5 },
    { description: "Возведение в степень: 3^3 = 27", args: [3, 3], expected: 27 },
    { description: "Возведение в степень: NaN^2 = Ошибка", args: [NaN, 2], expected: "Ошибка: пустые значения" },
    { description: "Возведение в степень: 2^NaN = Ошибка", args: [2, NaN], expected: "Ошибка: пустые значения" },
    { description: "Возведение в степень: Infinity^2 = Infinity", args: [Infinity, 2], expected: Infinity },
    { description: "Возведение в степень: 2^Infinity = Ошибка", args: [2, Infinity], expected: "Ошибка: степень бесконенчость" },
    { description: "Возведение в степень с отрицательным основанием: (-2)^Infinity = Ошибка", args: [-2, Infinity], expected: "Ошибка: степень бесконенчость" },
    { description: "Возведение в степень: Infinity^0 = 1", args: [Infinity, 0], expected: 1 },
    { description: "Возведение в степень: -Infinity^2 = Infinity", args: [-Infinity, 2], expected: Infinity },
    { description: "Возведение в степень: 0^(-2) = Infinity", args: [0, -2], expected: Infinity },
    { description: "Возведение в степень: объект {value: 2}^3 = Ошибка", args: [{ value: 2 }, 3], expected: "Ошибка: одно из значений не число" },
    { description: "Возведение в степень: массив [2]^3 = Ошибка", args: [[2], 3], expected: "Ошибка: одно из значений не число" },
    { description: "Возведение в степень: 2^null = Ошибка", args: [2, null], expected: "Ошибка: одно из значений не число" },
    { description: "Возведение в степень: null^3 = Ошибка", args: [null, 3], expected: "Ошибка: одно из значений не число" },
  ];

  powerTestCases.forEach(({ description, args, expected }) => {
    test(description, () => {
      expect(power(...args)).toBe(expected);
    });
  });
  
  module.exports = {powerTestCases}
});
