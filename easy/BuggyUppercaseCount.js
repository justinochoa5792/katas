// Buggy Uppercase Counting
// In the Code tab is a function which is meant to return how many uppercase letters there are in a list of various words. Fix the list comprehension so that the code functions normally!

function countUppercase(str) {
  return str.join("").replace(/[a-z]/g, "").length;
}
