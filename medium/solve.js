// Simple string characters
// In this Kata, you will be given a string and your task will be to return a list of ints detailing the count of uppercase letters, lowercase, numbers and special characters (everything else), as follows.
// The order is: uppercase letters, lowercase letters, numbers and special characters.

function solve(s) {
  //..
  let lower = !s.match(/[a-z]/g) ? 0 : s.match(/[a-z]/g).length;
  let upper = !s.match(/[A-Z]/g) ? 0 : s.match(/[A-Z]/g).length;
  let numbers = !s.match(/[\d]/g) ? 0 : s.match(/[\d]/g).length;
  let special = !s.match(/[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/g)
    ? 0
    : s.match(/[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/g).length;
  return s.length == 0 ? [0, 0, 0, 0] : [upper, lower, numbers, special];
}
