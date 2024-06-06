// Vampire Numbers
// Create a function that can receive two 'fangs' and determine if the product of the two is a valid vampire number.

function vampireTest(a, b) {
  let total = (a * b).toString().split("").sort().join(""); // fix me
  let num = (a.toString() + b.toString()).split("").sort().join("");
  return num == total;
}
