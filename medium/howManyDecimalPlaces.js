// How Many Decimal Places?
// Create a function that returns the number of decimal places a number (given as a string) has. Any zeros after the decimal point count towards the number of decimal places.

function getDecimalPlaces(num) {
  return !num.split(".")[1] ? 0 : num.split(".")[1].length;
}
