// Even Odd Partition
// Write a function that partitions the array into two subarrays: one with all even integers, and the other with all odd integers. Return your result in the following format

function evenOddPartition(arr) {
  let even = arr.filter((num) => num % 2 === 0);
  let odd = arr.filter((num) => num % 2 !== 0);
  return [even, odd];
}
