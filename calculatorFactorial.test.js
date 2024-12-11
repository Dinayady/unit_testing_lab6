const { factorial } = require("./calculator");

  // Тестирование факториала
  describe("Тестирование функции factorial", () => {
    const factorialTestCases = [
      { description: "Факториал положительного числа: 5! = 120", args: [5], expected: 120 },
      { description: "Факториал нуля: 0! = 1", args: [0], expected: 1 },
      { description: "Факториал единицы: 1! = 1", args: [1], expected: 1 },
      { description: "Факториал большого числа: 10! = 3628800", args: [10], expected: 3628800 },
      { description: "Факториал числа 20: '20'! = NaN", args: ['20'], expected: 'Ошибка: факториал не из числа невозможен' },
      { description: "Факториал отрицательного числа: -5! = NaN", args: [-5], expected: "Ошибка: факториал не существует для отрицательных чисел" },
      { description: "Факториал с числом с плавающей запятой: 4.5! = 24", args: [4.5], expected: 24 },
      { description: "Факториал с очень большим числом: 100! = 9.33262154439441e+157 (ограничения JavaScript)", args: [100], expected: 9.33262154439441e+157 },
      { description: "Факториал с NaN: NaN! = NaN", args: [NaN], expected: 'Ошибка: пустые значения' },
      { description: "Факториал с null: null! = NaN", args: [null], expected: 'Ошибка: факториал не из числа невозможен' },
      { description: "Факториал с Infinity: Infinity! = NaN", args: [Infinity], expected: 'Факториал бесконечность' },
      { description: "Факториал с объектом: { valueOf: () => 5 }! = 120", args: [{ valueOf: () => 5 }], expected: 'Ошибка: факториал не из числа невозможен' },
      { description: "Факториал с объектом без числового значения: {}! = NaN", args: [{}], expected: 'Ошибка: факториал не из числа невозможен' },
    ];
  
    factorialTestCases.forEach(({ description, args, expected }) => {
      test(description, () => {
        expect(factorial(...args)).toBe(expected);
      });
    });
    
    module.exports = {factorialTestCases}
  });
