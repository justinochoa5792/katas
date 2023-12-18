// Count the Digit
// Take an integer n (n >= 0) and a digit d (0 <= d <= 9) as an integer.
// Square all numbers k (0 <= k <= n) between 0 and n.
// Count the numbers of digits d used in the writing of all the k**2.
// Implement the function taking n and d as parameters and returning this count.

function nbDig(n, d) {
  // your code
  let total = [];
  for (let i = 0; i <= n; i++) {
    total.push(i);
  }
  return total
    .flatMap((el) => (el ** 2).toString().split(""))
    .filter((el) => el === d.toString()).length;
}
