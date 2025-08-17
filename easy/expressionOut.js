// Write out expression!
// Math hasn't always been your best subject, and these programming symbols always trip you up! I mean, does ** mean "Times, Times" or "To the power of"? Luckily, you can create the function to write out the expressions for you!
// The operators you'll need to use are:

function expressionOut(expr) {
  const NUMS = {
    "1": "One",
    "2": "Two",
    "3": "Three",
    "4": "Four",
    "5": "Five",
    "6": "Six",
    "7": "Seven",
    "8": "Eight",
    "9": "Nine",
    "10": "Ten",
  };

  const OPERATORS = {
    "+": "Plus",
    "-": "Minus",
    "*": "Times",
    "/": "Divided By",
    "**": "To The Power Of",
    "=": "Equals",
    "!=": "Does Not Equal",
  };

  let [left, op, right] = expr.split(" ");

  if (!OPERATORS[op]) {
    return "That's not an operator!";
  }

  return `${NUMS[left]} ${OPERATORS[op]} ${NUMS[right]}`;
}
