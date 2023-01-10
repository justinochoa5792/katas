// Chocolate Dilemma
// Write a function that returns true if the total area of chocolate is the same for each sister.

function testFairness(agatha, bertha) {
  agatha = agatha
    .map((i) => i.reduce((prev, curr) => prev * curr))
    .reduce((prev, curr) => prev + curr);
  bertha = bertha
    .map((i) => i.reduce((prev, curr) => prev * curr))
    .reduce((prev, curr) => prev + curr);
  return agatha === bertha ? true : false;
}
