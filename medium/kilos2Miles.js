// Convert Kilometers to Miles
// In this challenge, you have to implement a function that returns the given distance kilometers converted into miles. You have to round the result up to the fifth decimal digit.

function kmtomiles(kilometers) {
  let num = kilometers * 0.621371;
  let newNum = num.toFixed(5);
  return Number(newNum);
}
