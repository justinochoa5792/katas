// Count the number of cubes with paint on
// Your function takes as parameter the number of times the cube has been cut. You must return the number of smaller cubes created by the cuts that have at least one red face.

function countSquares(cuts) {
  return cuts === 0 ? 1 : cuts ** 2 * 6 + 2;
}
