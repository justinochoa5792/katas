// Check if a String is a Mathematical Expression
// Create a function that takes an input (e.g. "5 + 4") and returns true if it's a mathematical expression or false if not.

function mathExpr(expr) {
  return expr.match(/[0-9]/g) !== null && expr.match(/[0-9]/g).length === 2
    ? true
    : false;
}
