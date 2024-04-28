// Area of a Circle
// Complete the function which will return the area of a circle with the given radius.

function circleArea(radius) {
  let total = Math.PI * Math.pow(radius, 2);
  if (radius > 0) {
    return total;
  } else {
    throw new Error("Error");
  }
}
