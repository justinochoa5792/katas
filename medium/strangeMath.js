// Strange mathematics
// Help your students to learn this science: write a function that receives two integer numbers: n (total amount of numbers in strange mathematics) and k (number from sequence) and returns the location of a given number k in the order defined in strange mathematics.

function strangeMath(n, k) {
  let total = [];
  for (let i = 1; i <= n; i++) {
    total.push(i);
  }
  return total
    .sort()
    .map((el, i) => (el == k ? i + 1 : ""))
    .filter((el) => el != "");
}
