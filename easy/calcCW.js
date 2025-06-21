// Operations with sequence
// Square the numbers that are greater than zero.
// Multiply by 3 every third number.
// Multiply by -1 every fifth number.
// Return the sum of the sequence
// P.S.: The sequence consists only of integers. And try not to use "for", "while" or "loop" statements.

var calc = function (a) {
  return a
    .map((el, i) => {
      if (el > 0) {
        el = el ** 2;
      }
      if ((i + 1) % 3 === 0) {
        el *= 3;
      }
      if ((i + 1) % 5 === 0) {
        el *= -1;
      }
      return el;
    })
    .reduce((a, b) => a + b, 0);
};
