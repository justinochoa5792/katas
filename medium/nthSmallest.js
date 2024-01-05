// Nth Smallest Element (Array Series #4)
// Given an array/list of integers, find the Nth smallest element in the array.

function nthSmallest(arr, pos) {
  //your code here
  //return arr.sort((a,b) => a - b).filter((el,i) => i === pos )
  return arr.sort((a, b) => a - b).filter((el, i) => i === pos - 1)[0];
}
