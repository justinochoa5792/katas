// Is It a Triangle?
// Create a function that takes three numbers as arguments and returns true if it's a triangle and false if not.

function isTriangle(a, b, c) {
  if (a + b > c && b + c > a && a + c > b) {
    return true;
  } else return false;
}
