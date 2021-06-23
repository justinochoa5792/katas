// Among Us Imposter Formula
// Create a function that calculates the chance of being an imposter.

function imposterFormula(i, p) {
  let total = Math.round(100 * (i / p));
  return total + "%";
}
