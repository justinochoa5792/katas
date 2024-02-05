// Sum - Square Even, Root Odd
// Complete the function that takes a list of numbers (nums), as the only argument to the function. Take each number in the list and square it if it is even, or square root the number if it is odd. Take this new list and return the sum of it, rounded to two decimal places.
// The list will never be empty and will only contain values that are greater than or equal to zero.

const sumSquareEvenRootOdd = (ns) => {
  // your code goes here
  let number = ns
    .map((el) => (el % 2 === 0 ? Math.pow(el, 2) : Math.sqrt(el)))
    .reduce((a, b) => a + b)
    .toFixed(2);
  return Number(number);
};
