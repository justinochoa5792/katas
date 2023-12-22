// Find the nth Digit of a Number
// Complete the function that takes two numbers as input, num and nth and return the nth digit of num (counting from right to left).

var findDigit = function (num, nth) {
  let test = Math.abs(num).toString();
  return nth <= 0 ? -1 : test.charAt(test.length - nth) * 1;
};
