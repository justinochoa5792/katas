// Array of Consecutive Numbers
// Implement a function that returns an array containing all the consecutive numbers in ascendant order from the given value low up to the given value high (bounds included).

function getSequence(low, high) {
  var ans = [];
  for (let i = low; i <= high; i++) {
    ans.push(i);
  }
  return ans;
}
