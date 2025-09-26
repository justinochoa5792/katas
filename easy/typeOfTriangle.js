// Which triangle is that?
// Build a function that will take the length of each side of a triangle and return if it's either an Equilateral, an Isosceles, a Scalene or an invalid triangle.
// It has to return a string with the type of triangle.

var typeOfTriangle = function (a, b, c) {
  // Check for valid triangle
  if (typeof a !== "number" || typeof b !== "number" || typeof c !== "number") {
    return "Not a valid triangle";
  }
  if (a <= 0 || b <= 0 || c <= 0) return "Not a valid triangle";
  if (a + b <= c || a + c <= b || b + c <= a) return "Not a valid triangle";

  // Check triangle type
  if (a === b && b === c) return "Equilateral";
  if (a === b || a === c || b === c) return "Isosceles";
  return "Scalene";
};
