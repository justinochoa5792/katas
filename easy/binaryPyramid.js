//Binary Pyramid 101
//Given two numbers m and n, such that 0 ≤ m ≤ n :
// convert all numbers from m to n (inclusive) to binary
// sum them as if they were in base 10
// convert the result to binary
// return as a string

function binaryPyramid(m, n) {
  //solution
  let total = [];

  for (let i = m; i <= n; i++) {
    total.push(i);
  }
  return total
    .map((el) => el.toString(2))
    .reduce((a, b) => Number(a) + Number(b))
    .toString(2);
}
