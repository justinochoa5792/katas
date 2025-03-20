// Sum squares of numbers in list that may contain more lists
// Write a function that sums squares of numbers in list that may contain more lists

function SumSquares(l) {
  return l
    .flat(Infinity)
    .map((el) => Math.pow(el, 2))
    .reduce((a, b) => a + b);
}
