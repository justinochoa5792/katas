// Circle or Square
// Given the radius of a circle and the area of a square, return true if the circumference of the circle is greater than the square's perimeter and false if the square's perimeter is greater than the circumference of the circle.

function circle_or_square(rad, area) {
  let per = 2 * Math.PI * rad;
  let sqr = Math.sqrt(area) * 4;
  return per > sqr ? true : false;
}
