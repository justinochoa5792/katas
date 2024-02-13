// Multiplication table for number
// Your goal is to return multiplication table for number that is always an integer from 1 to 10.

function multiTable(number) {
  // good luck
  let total = [];
  for (let i = 1; i <= 10; i++) {
    total.push(i);
  }
  return total.map((el) => `${el} * ${number} = ${el * number}`).join("\n");
}
