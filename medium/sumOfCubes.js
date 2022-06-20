// Sum of Cubes
// Create a function that takes in an array of numbers and returns the sum of its cubes.

function sumOfCubes(nums) {
  return nums.reduce((a, b) => a + Math.pow(b, 3), 0);
}
