// Both Zero, Negative or Positive
// Write a function that returns true if both numbers are:
// Smaller than 0, OR ...
// Greater than 0, OR ...
// Exactly 0

function both(n1, n2) {
  return (n1 > 0 && n2 > 0) || (n1 <= 0 && n2 <= 0) ? true : false;
}
