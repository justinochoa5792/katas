// Magic Date
// Determine whether the entered date is a magic date. Here are the rules for a magic date:
// mm * dd is a 1-digit number that matches the last digit of yyyy or
// mm * dd is a 2-digit number that matches the last 2 digits of yyyy or
// mm * dd is a 3-digit number that matches the last 3 digits of yyyy
// The program should then display true if the date is magic, or false if it is not.

function Magic(str) {
  let split = str.split(" ");
  let total = Number(split[0]) * Number(split[1]);
  return split[2].endsWith(total);
}
