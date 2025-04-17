// Count number of zeros from 1 to N
// Create an algorithm to count the number of zeros that appear between 1 and N.

function countZeros(n) {
  // code here
  let total = [];
  for (let i = 1; i <= n; i++) {
    total.push(i);
  }
  return total.toString().match(/[0]/gi).length;
}
