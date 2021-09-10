// Fraction Greater Than One
// Given a fraction as a string, return whether or not it is greater than 1 when evaluated.

function greaterThanOne(frac) {
  if (eval(frac) > 1) {
    return true;
  } else if (eval(frac) < 1 || eval(frac) === 1) {
    return false;
  }
}
