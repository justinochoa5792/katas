// Even Number Generator
// Create a function that finds all even numbers from 1 to the given number.

function findEvenNums(num) {
  let total = [];
  for (let i = 1; i <= num; i++) {
    total.push(i);
  }
  return total.filter((num) => num % 2 === 0);
}
