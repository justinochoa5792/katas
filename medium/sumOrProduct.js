// Larger Product or Sum
// If the sum of the n largest numbers is higher, return "sum"
// If the product of the n smallest numbers is higher, return "product"
// If the 2 values are equal, return "same"

function sumOrProduct(array, n) {
  // your code here
  let largest = array
    .sort((a, b) => b - a)
    .slice(0, n)
    .reduce((a, b) => a + b);
  let smallest = array
    .sort((a, b) => a - b)
    .slice(0, n)
    .reduce((a, b) => a * b);
  return largest > smallest ? "sum" : largest == smallest ? "same" : "product";
}
