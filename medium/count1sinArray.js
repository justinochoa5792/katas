// Count Ones in a 2D Array
// Create a function to count the number of 1s in a 2D array.

function countOnes(matrix) {
  return matrix.flat().filter((num) => num === 1).length;
}
