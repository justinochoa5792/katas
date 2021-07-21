// String and Number Conversions
// You need to create two functions to substitute toString() and parseInt(); A function called intToString() that converts integers into strings and a function called stringToInt() that converts strings into integers.

function intToString(num) {
  let newNum = "" + num;
  return newNum;
}

function stringToInt(num) {
  let nxtNum = Number(num);
  return nxtNum;
}
