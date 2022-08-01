// Basic Calculator
// Create a function that takes two numbers and a mathematical operator + - / * and will perform a calculation with the given numbers.

function calculator(num1, operator, num2) {
  return num2 === 0
    ? "Can't divide by 0!"
    : eval(`${num1} ${operator} ${num2}`);
}
