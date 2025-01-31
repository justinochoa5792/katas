// Complete The Pattern #5 - Even Ladder
// You have to write a function pattern which creates the following pattern up to n/2 number of lines.
// If n <= 1 then it should return "" (i.e. empty string).
// If any odd number is passed as argument then the pattern should last up to the largest even number which is smaller than the passed odd number.

function pattern(n) {
  let total = [];
  // Happy Coding ^_^
  for (let i = 1; i <= n; i++) {
    if (i % 2 == 0) {
      total.push(i);
    }
  }
  return total.map((el) => el.toString().repeat(el)).join("\n");
}
