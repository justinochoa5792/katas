// Lost number in number sequence
// An ordered sequence of numbers from 1 to N is given. One number might have deleted from it, then the remaining numbers were mixed. Find the number that was deleted.
// If no number was deleted from the starting array, your function should return the int 0.

function findDeletedNumber(arr, mixArr) {
  // your code
  let diff = arr.filter((e) => !mixArr.includes(e));
  return diff.length === 0 ? 0 : diff[0];
}
