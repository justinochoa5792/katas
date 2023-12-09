// Count the Monkeys!
// As a good parent, you will sit and count with him. Given the number (n), populate an array with all numbers up to and including that number, but excluding zero.

function monkeyCount(n) {
  // your code here
  let monkey = [];

  for (let i = 1; i <= n; i++) {
    monkey.push(i);
  }
  return monkey;
}
