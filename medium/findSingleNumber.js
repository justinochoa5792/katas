// Find Unique Number in Array
// Create a function that takes an array of integers as an argument and returns a unique number from that array. All numbers except unique ones have the same number of occurrences in the array.

function findSingleNumber(numbers) {
  return numbers.length === 0
    ? null
    : numbers.find(
        (item) => numbers.indexOf(item) === numbers.lastIndexOf(item)
      );
}
