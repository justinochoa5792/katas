// Height of an Equilateral Triangle
// Create a function that takes the length of the side of an equilateral triangle in centimeters and returns the height of the triangle in millimeters.

function height(side) {
  let height = side * 8.66;
  return `${height.toFixed(1)} mm`;
}
