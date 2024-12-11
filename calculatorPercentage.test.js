const { percentage } = require("./calculator");

describe("Тестирование функции percentage", () => {
  const percentageTestCases = [
    { description: "Процент от положительного числа: 50% от 200 = 100", args: [200, 50], expected: 100 },
    { description: "Процент от числа: 20% от 150 = 30", args: [150, 20], expected: 30 },
    { description: "Процент от числа, равного нулю: 0% от 100 = 0", args: [100, 0], expected: 0 },
    { description: "Процент от числа, равного 100%: 100% от 50 = 50", args: [50, 100], expected: 50 },
    { description: "Процент больше 100%: 150% от 200 = 300", args: [200, 150], expected: 300 },
    { description: "Низкий процент: 10% от 50 = 5", args: [50, 10], expected: 5 },
    { description: "Процент 1% от большого числа: 1% от 1000 = 10", args: [1000, 1], expected: 10 },
    { description: "Процент от нуля: 0% от 0 = 0", args: [0, 0], expected: 0 },
    { description: "Процент от нуля: 50% от 0 = 0", args: [0, 50], expected: 0 },
    { description: "Отрицательный процент от положительного числа: -50% от 200 = -100", args: [200, -50], expected: -100 },
    { description: "Процент от отрицательного числа: 50% от -200 = -100", args: [-200, 50], expected: -100 },
    { description: "Процент с NaN: NaN от 100 = NaN", args: [NaN, 100], expected: "Ошибка: пустые значения" },
    { description: "Процент от числа с NaN: 50% от NaN = NaN", args: [50, NaN], expected: "Ошибка: пустые значения" },
    { description: "Процент от Infinity: Infinity от 100 = Infinity", args: [100, Infinity], expected: Infinity },
    { description: "Процент от Infinity: 50% от Infinity = Infinity", args: [Infinity, 50], expected: Infinity },
    { description: "Процент от отрицательного числа с отрицательным процентом: -50% от -200 = 100", args: [-200, -50], expected: 100 },
    { description: "Процент с объектом: {value: 200} от 50 = NaN", args: [{ value: 200 }, 50], expected: "Ошибка: одно из значений не число" },
    { description: "Процент с массивом: [200] от 50 = NaN", args: [[200], 50], expected: "Ошибка: одно из значений не число" },
    { description: "Процент с null: 100 от null = NaN", args: [null, 100], expected: "Ошибка: одно из значений не число" },
    { description: "Процент с null: null от 50 = NaN", args: [50, null], expected: "Ошибка: одно из значений не число" },
  ];

  percentageTestCases.forEach(({ description, args, expected }) => {
    test(description, () => {
      expect(percentage(...args)).toBe(expected);
    });
  });
  
  module.exports = {percentageTestCases}
});
