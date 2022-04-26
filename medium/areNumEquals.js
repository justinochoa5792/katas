// Are the Numbers Equal?
// Create a function that takes two integers and checks if they are equal.

function isEqual(num1, num2) {
  if (typeof num1 === "string" || typeof num2 === "string") {
    return false;
  } else if (num1 === num2) {
    return true;
  } else {
    return false;
  }
}
