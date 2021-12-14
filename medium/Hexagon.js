// Find the Area of a (Regular) Hexagon
// Given the side length x find the area of a hexagon.

function areaOfHexagon(x) {
  let num = ((Math.sqrt(3) * 3 * x ** 2) / 2).toFixed(1);
  return x > 0 ? +num : null;
}
