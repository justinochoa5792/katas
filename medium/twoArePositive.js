// Two numbers are positive
// Your job is to write a function, which takes three integers a, b, and c as arguments, and returns True if exactly two of the three integers are positive numbers (greater than zero), and False - otherwise.

function twoArePositive(a, b, c) {
  // Happy Coding
  return [a, b, c].filter((el) => el > 0).length == 2 ? true : false;
}
