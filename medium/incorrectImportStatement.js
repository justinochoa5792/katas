// Incorrect Import Statement
// Given a string of an incorrect import statement, return the fixed string. All import statements will be the wrong way round.

function fixImport(s) {
  let [a, b, c, d] = s.split(" ");
  return `${c} ${d} ${a} ${b}`;
}
