// Limit a Number's Value
// Create a function that takes three number arguments — one number as an input and two additional numbers representing the endpoints of a closed range — and return the number limited to this range.
// If the number falls within the range, the number should be returned.
// If the number is less than the lower limit of the range, the lower limit should be returned.
// If the number is greater than the upper limit of the range, the upper limit should be returned.

function limitNumber(num, rangeLow, rangeHigh) {
  if (num > rangeLow && num < rangeHigh) {
    return num;
  } else if (num < rangeLow) {
    return rangeLow;
  } else return rangeHigh;
}
