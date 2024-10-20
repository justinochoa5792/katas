// What dominates your array?
// Write a function dominator(arr) that, given a zero-indexed array arr consisting of n integers, returns the dominator of arr. The function should return −1 if array does not have a dominator. All values in arr will be >=0.

function dominator(arr) {
  //code me
  const half = Math.floor(arr.length / 2) + 1;
  const count = {};

  arr.forEach((num) => {
    count[num] = count[num] ? count[num] + 1 : 1;
  });

  for (const key in count) {
    if (count[key] >= half) return parseInt(key);
  }
  return -1;
}
