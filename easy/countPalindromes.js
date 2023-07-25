// Count Palindrome Numbers in a Range
// Create a function that returns the number of palindrome numbers in a specified range (inclusive).

function countPalindromes(num1, num2) {
  let test = [];
  for (let i = num1; i <= num2; i++) {
    test.push(i);
  }
  return test.filter(
    (el) => Number(el.toString().split("").reverse().join("")) === el
  ).length;
}
