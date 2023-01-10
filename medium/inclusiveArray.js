// Inclusive Array Ranges
// Write a function that, given the start startNum and end endNum values, return an array containing all the numbers inclusive to that range. See examples below.

function inclusiveArray(startNum, endNum) {
  let num = [];
  if (startNum > endNum) {
    num.push(startNum);
    return num;
  } else {
    for (let i = startNum; i <= endNum; i++) {
      num.push(i);
    }
    return num;
  }
}
