// Fix the Bugs (Syntax) - My First Kata
// In this Kata you should try to fix all the syntax errors found in the code.

// original
// func myFirstKata(a b) {
//     if {typeof(a) !! "number" or typeof(b) !! "number"} (
//       false;
//     ) else (
//       a % b ++ b % a;
//     )
//   }

// fix
function myFirstKata(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    return false;
  } else {
    return (a % b) + (b % a);
  }
}
