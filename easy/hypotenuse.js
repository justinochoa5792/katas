// All Star Code Challenge #24
// hypotenuse(), which takes 2 integer arguments, the length of two regular sides of a right triangle, and returns the length of the missing side, the hypotenuse, as a number.
// leg(), which takes 2 integer arguments, the first being the length of the hypotenuse, and the second being the length of a regular side of a right triangle. This function should return the length of the missing regular side, as a number.

function hypotenuse(a, b) {
  //code here
  return Math.hypot(a, b);
}

function leg(c, a) {
  //code here
  let missing = c * c - a * a;
  return Math.sqrt(missing);
}
