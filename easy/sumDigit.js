// Sum of Digits of a Positive Integer
// An instructor has given her student an assignment to calculate the sum of the digits of a positive integer using recursion.The student came up with the solution but the solution does not seem to be correct. Help her fix the error.

function sumDigit(positiveInteger) {
  return Math.abs(
    positiveInteger
      .toString()
      .split("")
      .reduce((acc, v) => acc - v, 0)
  );
}
