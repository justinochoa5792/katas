// How Many Rectangles?
// Create a function that takes the order of the matrix as input and returns the number of rectangles in them.

function rectangles(step) {
  return ((step * (step + 1)) / 2) ** 2;
}
