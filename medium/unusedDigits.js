// Filter unused digits
// Given a varying number of integer arguments, return the digits that are not present in any of them.

function unusedDigits(...arr) {
  let nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  let str = arr.map((el) => el.toString()).join("");
  return nums.filter((el) => !str.includes(el)).join("");
}
