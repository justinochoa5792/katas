// Flash Cards
// Create a function that outputs the results of a flashcard. A flashcard is an array of three elements: a number, an operator symbol, and another number. Return the mathematical result of that expression.
// There are 4 operators: + (addition), - (subtraction), x (multiplication), and / (division). If the flashcard displays a number being divided by zero, e.g. [3, "/", 0], then return undefined. For division, round to the hundredths place. So [10, "/", 3] should return 3.33.

function flash([num1, op, num2]) {
  switch ((num2, num1, op)) {
    case (op = "+"):
      return num1 + num2;
      break;
    case (op = "-"):
      return num1 - num2;
      break;
    case (op = "x"):
      return num1 * num2;
      break;
    case (op = "/"):
      if (num2 == 0) {
        return undefined;
      } else {
        return +(num1 / num2).toFixed(2);
      }
      break;
  }
}
