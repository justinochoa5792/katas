// Valid Division
// Create a function that takes a division equation d and checks if it will return a whole number without decimals after dividing.

function validDivision(d) {
  let num = d.split("/");
  return Number(num[1]) === 0 || Number(num[1]) === 0
    ? "invalid"
    : Number.isInteger(Number(num[0]) / Number(num[1]));
}
