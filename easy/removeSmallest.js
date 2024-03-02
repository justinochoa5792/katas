// Remove the minimum
// Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with the lowest index. If you get an empty array/list, return an empty array/list.

function removeSmallest(numbers) {
  let min = Math.min(...numbers);
  const index = numbers.indexOf(min);
  return numbers.length <= 1 ? [] : numbers.filter((_, i) => i !== index);
}
