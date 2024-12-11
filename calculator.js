// Сложение
function add(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
      return 'Ошибка: одно из значений не число';
    }
  
    if (a == null || b == null || isNaN(a) || isNaN(b)) {
      return 'Ошибка: пустые значения'
    }
  
    return a + b;
  }
  
  // Вычитание
  function subtract(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
      return 'Ошибка: одно из значений не число';
    } 
  
    if (a == null || b == null || isNaN(a) || isNaN(b)) {
      return 'Ошибка: пустые значения'
    }
  
    return a - b;
  }
  
  // Умножение
  function multiply(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
      return 'Ошибка: одно из значений не число';
    } 
  
    if (a == null || b == null || isNaN(a) || isNaN(b)) {
      return 'Ошибка: пустые значения'
    }
  
    return a * b;
  }
  
  // Деление
  function divide(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
      return 'Ошибка: одно из значений не число';
    } 
  
    if (a == null || b == null || isNaN(a) || isNaN(b)) {
      return 'Ошибка: пустые значения'
    }
  
    if (b === 0) return "Деление на ноль невозможно";
  
    return a / b;
  }
  
  // Процент от числа
  function percentage(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
      return 'Ошибка: одно из значений не число';
    } 
  
    if (a == null || b == null || isNaN(a) || isNaN(b)) {
      return 'Ошибка: пустые значения'
    }
  
    return (a * b) / 100;
  }
  
  // Возведение числа в степень
  function power(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
      return 'Ошибка: одно из значений не число';
    } 
  
    if (a == null || b == null || isNaN(a) || isNaN(b)) {
      return 'Ошибка: пустые значения'
    }
  
    if (b === Infinity) {
      return 'Ошибка: степень бесконенчость';
    }
  
    return Math.pow(a, b);
  }
  
  // Логарифм числа
  function log(a, b = Math.E) {
    if (typeof a !== 'number' || typeof b !== 'number') {
      return 'Ошибка: одно из значений не число';
    } 
  
    if (a == null || b == null || isNaN(a) || isNaN(b)) {
      return 'Ошибка: пустые значения'
    }
  
    if (a <= 0) return "Логарифм от отрицательного числа или нуля не существует";
  
    if (b <= 0 || b === 1) return "Основание должно быть > 0 и не равно 1";
  
    return Math.log(a) / Math.log(b);
  }
  
  // Факториал числа
  function factorial(n) {
    if (typeof n !== 'number') {
      return 'Ошибка: факториал не из числа невозможен';
    } 
  
    if (n == null || isNaN(n)) {
      return 'Ошибка: пустые значения'
    }
  
    if (n == Infinity) return 'Факториал бесконечность'
  
    if (n < 0) return "Ошибка: факториал не существует для отрицательных чисел";
  
    let result = 1;
    for (let i = 1; i <= n; i++) {
      result *= i;
    }
  
    return result;
  }
  
  module.exports = {
    add,
    divide,
    multiply,
    subtract,
    percentage,
    power,
    log,
    factorial,
  };
  