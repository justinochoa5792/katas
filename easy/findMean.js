// Find the Mean of All Digits
// Create a function that returns the mean of all digits.

function mean(num) {
  let split = num.toString().split("");
  return (
    split.map((item) => Number(item)).reduce((a, b) => a + b) / split.length
  );
}
