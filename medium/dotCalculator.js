// Dot Calculator
// You have to write a calculator that receives strings for input. The dots will represent the number in the equation. There will be dots on one side, an operator, and dots again after the operator. The dots and the operator will be separated by one space.

function dotCalculator(equation) {
  let split = equation.split(" ");
  //   return split[0].length
  if (split[1] == "+") {
    return ".".repeat(split[0].length + split[2].length);
  } else if (split[1] == "-") {
    return ".".repeat(split[0].length - split[2].length);
  } else if (split[1] == "*") {
    return ".".repeat(split[0].length * split[2].length);
  } else if (split[1] == "//") {
    return ".".repeat(split[0].length / split[2].length);
  }
}
