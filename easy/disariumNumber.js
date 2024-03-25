// Disarium Number (Special Numbers Series #3)
// Disarium number is the number that The sum of its digits powered with their respective positions is equal to the number itself.

function disariumNumber(n) {
  //your code here
  let disarium = n
    .toString()
    .split("")
    .map((el, i) => Math.pow(Number(el), i + 1))
    .reduce((a, b) => a + b);
  return disarium === n ? "Disarium !!" : "Not !!";
}
