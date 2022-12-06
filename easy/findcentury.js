// Get the Century
// Create a function that takes in a year and returns the correct century.

function century(year) {
  let cent = Math.ceil(year / 100);
  return cent < 21 ? `${cent}th century` : `${cent}st century`;
}
