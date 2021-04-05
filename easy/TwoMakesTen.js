// Two Makes Ten
// Create a function that takes two arguments. Both arguments are integers, a and b. Return true if one of them is 10 or if their sum is 10.
function makesTen(a, b) {
  let number = [a, b];
  if (number.includes(10)) {
    return true;
  } else if (a + b === 10) {
    return true;
  }
  return false;
}
