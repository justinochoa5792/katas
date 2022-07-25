// Sort Numbers in Descending Order
// Create a function that takes any nonnegative number as an argument and return it with it's digits in descending order. Descending order is when you sort from highest to lowest.

function sortDescending(num) {
  return Number(
    num
      .toString()
      .split("")
      .sort((a, b) => b - a)
      .join("")
  );
}
