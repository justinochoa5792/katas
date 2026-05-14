// Circle area inside square
// Turn an area of a square in to an area of a circle that fits perfectly inside the square.
// Your function gets a number which represents the area of the square and should return the area of the circle. The tests are rounded by 8 decimals to make sure multiple types of solutions work.

function squareAreaToCircle(size) {
  return (Math.PI * size) / 4;
}
