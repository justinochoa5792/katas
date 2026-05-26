// Simple Fun #63: Shape Area
// A 1-interesting polygon is just a square with a side of length 1. An n-interesting polygon is obtained by taking the n - 1-interesting polygon and appending 1-interesting polygons to its rim side by side. You can see the 1-, 2- and 3-interesting polygons in the picture below.

function shapeArea(n) {
  //coding and coding...
  return 2 * Math.pow(n, 2) - 2 * n + 1;
}
