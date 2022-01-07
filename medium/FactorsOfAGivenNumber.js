// Factors of a Given Number
// Create a function that finds each factor of a given number n. Your solution should return an array of the number(s) that meet this criteria.

function findFactors(num) {
  return Array.from(Array(num + 1), (_, i) => i).filter((i) => num % i === 0);
}
