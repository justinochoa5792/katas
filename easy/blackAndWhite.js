// Training JS #31: methods of arrayObject---isArray() indexOf() and toString()
// Coding in function blackAndWhite. function accept 1 parameter arr(a number array).

function blackAndWhite(arr) {
  //coding here...
  let nums = [5, 13];
  return !Array.isArray(arr)
    ? "It's a fake array"
    : arr.indexOf(5) !== -1 && arr.indexOf(13) !== -1
      ? `It's a black array`
      : `It's a white array`;
}
