// Add, Subtract, Multiply or Divide?
// Write a function that takes two numbers and returns if they should be added, subtracted, multiplied or divided to get 24. If none of the operations can give 24, return null.

function operation(num1, num2) {
  let total = num1 + num2;
  if (num1 + num2 === 24) {
    return "added";
  } else if (num1 - num2 === 24) {
    return "subtracted";
  } else if (num1 / num2 === 24) {
    return "divided";
  } else if (num1 * num2 === 24) {
    return "multiplied";
  }
  return null;
}
