// Calculate Using String Operation
// Create a function that takes two numbers and a mathematical operator and returns the result.
function calculate(num1, num2, op) {
  switch (op) {
    case "/":
      return eval(num1 / num2);
      break;
    case "+":
      return eval(num1 + num2);
    case "*":
      return num1 * num2;
      break;
    case "-":
      return num1 - num2;
      break;
    default:
      return num1 % num2;
  }
}
