// Find the calculation type
// Based on those 3 values you have to return a string, that describes which operation was used to get the given result.

function calcType(a, b, res) {
  // your code here
  if (a + b === res) {
    return "addition";
  } else if (a - b == res) {
    return "subtraction";
  } else if (a * b == res) {
    return "multiplication";
  } else {
    return "division";
  }
}
