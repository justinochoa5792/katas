// X and Y Coordinates
// Create a function that converts two arrays of x- and y- coordinates into an array of (x, y) coordinates.

function convertCartesian(x, y) {
  return y.map((el, i) => [x[i], el]);
}
