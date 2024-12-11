const { addTestCases } = require("./calculatorAdd.test.js");
const { DivideTestCases } = require("./calculatorDivide.test.js");
const { multiplyTestCases } = require("./calculatorMultiply.test.js");
const { factorialTestCases } = require("./calculatorFactorial.test.js");
const { logTestCases } = require("./calculatorLog.test.js");
const { percentageTestCases } = require("./calculatorPercentage.test.js");
const { subtractTestCases } = require("./calculatorSubtract.test.js");
const { powerTestCases } = require("./calculatorPower.test.js");

const {
  add,
  divide,
  multiply,
  subtract,
  percentage,
  power,
  log,
  factorial,
} = require("./calculator");

addTestCases.forEach(({ description, args, expected }) => {
  test(description, () => {
    expect(add(...args)).toBe(expected);
  });
});

DivideTestCases.forEach(({ description, args, expected }) => {
  test(description, () => {
    expect(divide(...args)).toBe(expected);
  });
});

multiplyTestCases.forEach(({ description, args, expected }) => {
  test(description, () => {
    expect(multiply(...args)).toBe(expected);
  });
});

subtractTestCases.forEach(({ description, args, expected }) => {
  test(description, () => {
    expect(subtract(...args)).toBe(expected);
  });
});

factorialTestCases.forEach(({ description, args, expected }) => {
  test(description, () => {
    expect(factorial(...args)).toBe(expected);
  });
});

logTestCases.forEach(({ description, args, expected }) => {
  test(description, () => {
    expect(log(...args)).toBe(expected);
  });
});

percentageTestCases.forEach(({ description, args, expected }) => {
  test(description, () => {
    expect(percentage(...args)).toBe(expected);
  });
});

powerTestCases.forEach(({ description, args, expected }) => {
  test(description, () => {
    expect(power(...args)).toBe(expected);
  });
});
