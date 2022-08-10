// Convert to Decimal Notation
// Create a function to convert an array of percentages to their decimal equivalents.

function convertToDecimal(perc) {
  return perc.map((num) => num.replace(/%/g, "") * 0.01);
}
