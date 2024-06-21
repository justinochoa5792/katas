// Number-Star ladder
// Using n as a parameter in the function pattern, where n>0, complete the codes to get the pattern (take the help of examples):

function pattern(n) {
  let total = [];
  //being coder
  for (let i = 1; i <= n; i++) {
    if (i == 1) {
      total.push(i);
    } else {
      total.push(`${1}${"*".repeat(i - 1)}${i}`);
    }
  }
  return total.join("\n");
}
