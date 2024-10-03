// Are they square?
// Your function should return true if all elements in the array are square numbers and false if not.

var isSquare = function (arr) {
  //Your code here
  let squared = arr.map((el) => Math.sqrt(el) % 1 === 0);
  if (arr.length == 0) {
    return undefined;
  } else if (squared.includes(false)) {
    return false;
  } else {
    return true;
  }
};
