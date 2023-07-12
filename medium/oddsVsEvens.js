// Odds vs. Evens
// Given an integer, return "odd" if the sum of all odd digits is greater than the sum of all even digits. Return "even" if the sum of even digits is greater than the sum of odd digits, and "equal" if both sums are the same.

function oddsVsEvens(num) {
  num = num.toString().split("");
  let evens = num
    .filter((el) => el % 2 === 0)
    .reduce((prev, curr) => Number(prev) + Number(curr), 0);
  let odds = num
    .filter((el) => el % 2 !== 0)
    .reduce((prev, curr) => Number(prev) + Number(curr), 0);
  return evens > odds ? "even" : evens === odds ? "equal" : "odd";
}
