// Even or Odd: Which is Greater?
// Create a function to determine if the sum of all the individual even digits are greater than the sum of all the individual odd digits in a string of numbers.
// If the sum of odd numbers is greater than the sum of even numbers, return "Odd is greater than Even".
// If the sum of even numbers is greater than the odd numbers, return "Even is greater than Odd".
// If the sum of both even and odd numbers are equal, return "Even and Odd are the same".

function evenOrOdd(str) {
  str = str.split("").map((i) => Number(i));
  let even = str.filter((i) => i % 2 === 0).reduce((a, b) => a + b);
  let odd = str.filter((i) => i % 2 !== 0).reduce((a, b) => a + b);
  return odd > even
    ? "Odd is greater than Even"
    : odd === even
    ? "Even and Odd are the same"
    : "Even is greater than Odd";
}
