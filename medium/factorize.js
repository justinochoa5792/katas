// Factorize a Number
// Create a function that takes a number as its argument and returns an array of all its factors.

function factorize(num) {
  return [...Array(num + 1).keys()].filter((i) => num % i === 0);
}
