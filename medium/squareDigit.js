// Square Every Digit
// Create a function that squares every digit of a number.

function squareDigits(n) {
  return Number(
    n
      .toString()
      .split("")
      .map((item) => item ** 2)
      .join("")
  );
}
