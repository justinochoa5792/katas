// Most digits
// Find the number with the most digits.

function findLongest(array) {
  // code here
  let max = array
    .map((el) => el.toString().split(""))
    .sort((a, b) => b.length - a.length);
  return Number(max[0].join(""));
}
