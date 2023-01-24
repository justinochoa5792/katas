// The Million Dollar Fence
// Create a function which constructs this pricey pricey fence, using the letter "H" to build.

function constructFence(price) {
  let test = price.replace(/[$,]/g, "");
  return "H".repeat(1000000 / Number(test));
}
