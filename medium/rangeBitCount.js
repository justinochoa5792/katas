// Simple Fun #10: Range Bit Counting
// You are given two numbers a and b where 0 ≤ a ≤ b. Imagine you construct an array of all the integers from a to b inclusive. You need to count the number of 1s in the binary representations of all the numbers in the array.

function rangeBitCount(a, b) {
  //coding and coding..
  let total = [];
  for (let i = a; i <= b; i++) {
    total.push(i);
  }
  return total
    .map((el) => el.toString(2).split(""))
    .flat()
    .filter((el) => el === "1").length;
}
