// Decreasing Inputs
// This kata is all about adding numbers.
// You will create a function named add. It will return the sum of all the arguments. Sounds easy, doesn't it?
// Well Here's the Twist. The inputs will gradually decrease with their index as parameter to the function.

function add(...a) {
  return Math.round(a.map((el, i) => el / (i + 1)).reduce((a, b) => a + b, 0));
}
