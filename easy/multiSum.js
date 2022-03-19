// Sum of Multiplication
// Given a number, return the total sum of that number multiplied by every number between 1 and 10.

function multiSum(num, ten = 10) {
  if (ten === 1) {
    return num;
  }
  return num * ten + multiSum(num, ten - 1);
}
