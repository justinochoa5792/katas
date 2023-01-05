// Sum of all Evens in a Matrix
// Create a function that returns the sum of all even elements in a 2D matrix.

function sumOfEvens(arr) {
  return arr
    .flat()
    .filter((i) => i % 2 === 0)
    .reduce((a, b) => a + b, 0);
}
