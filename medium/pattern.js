// Complete The Pattern #1
// You have to write a function pattern which returns the following Pattern(See Pattern & Examples) upto n number of rows.
// Note:Returning the pattern is not the same as Printing the pattern.
// Rules/Note:
// If n < 1 then it should return "" i.e. empty string.
// There are no whitespaces in the pattern.

function pattern(n) {
  let total = [];
  // Happy Coding ^_^
  output = n.toString();
  for (let i = 1; i <= n; i++) {
    total.push(i.toString().repeat(i));
  }
  return total.join("\n");
}
