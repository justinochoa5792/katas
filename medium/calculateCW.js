// Fruit string calculator
// You are given a string of words and numbers. Extract the expression including:
// the operator: either addition ("gains") or subtraction ("loses")
// the two numbers that we are operating on

function calculate(string) {
  // Add your code here
  let numbers = string
    .split(" ")
    .map((el) => (!el.match(/[\d]/gi) ? el : Number(el)))
    .filter((el) => typeof el === "number");
  return string.includes("gains")
    ? numbers.reduce((a, b) => a + b)
    : numbers.reduce((a, b) => a - b);
}
