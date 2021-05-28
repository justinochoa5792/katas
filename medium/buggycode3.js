// Buggy Code (Part 3)
// Fix the code in the code tab to pass this challenge (only syntax errors). Look at the examples below to get an idea of what the function should do.

// original
// function sumArray(arr) {
// 	sum ,
//   for (i=0, i<arr, i++) {
// 	  sum+=arr[i]
// 	}
//   return sum
// }

// fixed
function sumArray(arr) {
  var sum = 0;
  for (i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
