// What is between?
// Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.

function between(a, b) {
  // your code here
  let total = [];
  for (let i = a; i <= b; i++) {
    total.push(i);
  }
  return total;
}
