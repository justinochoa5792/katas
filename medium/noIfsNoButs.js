// No ifs no buts
// Write a function that accepts two numbers a and b and returns whether a is smaller than, bigger than, or equal to b, as a string.
// You cannot use if statements, and you cannot use the ternary operator ? :.

function noIfsNoButs(a, b) {
  switch (true) {
    case a > b:
      return `${a} is greater than ${b}`;
      break;
    case a < b:
      return `${a} is smaller than ${b}`;
      break;
    case a == b:
      return `${a} is equal to ${b}`;
      break;
  }
}
