// Tail Swap
// Your job is to return a list of two strings (in the same order as the original list), but with the characters after each colon swapped.

function tailSwap(arr) {
  // your code here
  let splitArr = arr.map((el) => el.split(":"));
  let newArr = [];
  newArr.push([splitArr[0][0], splitArr[1][1]].join(":"));
  newArr.push([splitArr[1][0], splitArr[0][1]].join(":"));
  return newArr;
}
