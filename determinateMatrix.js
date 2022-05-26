// Calculate Determinant of a 2x2 Matrix
// Create a function to calculate the determinant of a 2 * 2 matrix. The determinant of the following matrix is: ad - bc:

function calcDeterminant(matrix) {
  return matrix[0][0] * matrix[1][1] - matrix[1][0] * matrix[0][1];
}
