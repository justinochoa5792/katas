// Greatest common divisor
// Find the greatest common divisor of two positive integers. The integers can be large, so you need to find a clever solution.

function mygcd(x, y) {
  //your code here
  if (y) {
    return mygcd(y, x % y);
  } else {
    return x;
  }
}
