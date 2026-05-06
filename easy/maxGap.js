// Maximum Gap (Array Series #4)
// Given an array/list [] of integers , Find The maximum difference between the successive elements in its sorted form.

function maxGap(numbers) {
  //your code here
  return numbers
    .sort((a, b) => b - a)
    .map((el, i, arr) => el - arr[i + 1])
    .sort((a, b) => b - a)[0];
}
