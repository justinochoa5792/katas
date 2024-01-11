// Automorphic Number (Special Numbers Series #6)
// A number is called Automorphic number if and only if its square ends in the same digits as the number itself.

function automorphic(n) {
  //your code here
  let squared = Math.pow(n, 2);
  let length = squared.toString().length;
  return squared.toString().endsWith(n.toString(), length)
    ? "Automorphic"
    : "Not!!";
}
