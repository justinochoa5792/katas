// Pythagorean Triplet
// Create a function that validates whether three given integers form a Pythagorean triplet. The sum of the squares of the two smallest integers must equal the square of the largest number to be validated.

function isTriplet(n1, n2, n3) {
  let arr = [n1, n2, n3];
  arr = arr.sort((a, b) => a - b);
  return Math.pow(arr[0], 2) + Math.pow(arr[1], 2) === Math.pow(arr[2], 2)
    ? true
    : false;
}
