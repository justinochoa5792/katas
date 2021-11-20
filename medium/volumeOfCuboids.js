// Difference of Volumes of Cuboids
// Create a program that will take two arrays of integers, a and b. Each array will consist of 3 positive integers, representing the dimensions of cuboids a and b. Find the difference of the cuboids' volumes.

function findDifference(a, b) {
  let arr1 = a.reduce(function (acc, val) {
    return acc * val;
  });
  let arr2 = b.reduce(function (acc, val) {
    return acc * val;
  });

  return Math.abs(arr1 - arr2);
}
