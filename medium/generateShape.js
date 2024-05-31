// Build a square
// I will give you an integer. Give me back a shape that is as long and wide as the integer. The integer will be a whole number between 1 and 50.

function generateShape(integer) {
  let int = `${"+".repeat(integer)}\n`.repeat(integer);
  return int.substring(0, int.length - 1);
}
