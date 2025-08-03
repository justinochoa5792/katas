// Tricky Doubles
// A number is considered a tricky double if it consists of two identical halves with no extra digits. For example, 44, 1212, and 7777 are tricky doubles because each half of the number is the same (4 and 4, 12 and 12, 77 and 77).
// If the input value is a tricky double, return it as-is. Otherwise, return the value multiplied by 2.

function trickyDoubles(n) {
  //insert your code here
  let mid = n.toString().length / 2;
  return n.toString().substring(0, mid) === n.toString().substring(mid)
    ? n
    : n * 2;
}
