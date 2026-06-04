// Simple Fun #22: Is Smooth?
// if arr contains an odd number of elements, its middle is the element whose index number is the same when counting from the beginning of the array and from its end;
// if arr contains an even number of elements, its middle is the sum of the two elements whose index numbers when counting from the beginning and from the end of the array differ by one.
// An array is called smooth if its first and its last elements are equal to one another and to the middle. Given an array arr, determine if it is smooth or not.

function isSmooth(arr) {
  //coding and coding..
  let total = 0;

  if (arr.length % 2 == 0) {
    total = arr[arr.length / 2] + arr[arr.length / 2 - 1];
  } else {
    total = arr[Math.floor(arr.length / 2)];
  }
  return arr[0] === total && arr[arr.length - 1] === total;
}
