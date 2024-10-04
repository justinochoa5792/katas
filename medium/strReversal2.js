// Simple string reversal II
// In this Kata, you will be given a string and two indexes (a and b). Your task is to reverse the portion of that string between those two indices inclusive.
// The first index a will always be lower that than the string length; the second index b can be greater than the string length. More examples in the test cases. Good luck!

function solve(st, a, b) {
  //..
  let total = [];
  for (let i = a; i <= b; i++) {
    total.push(st[i]);
  }
  return st
    .substring(0, a)
    .concat(total.reverse().join(""))
    .concat(st.substring(b + 1));
}
