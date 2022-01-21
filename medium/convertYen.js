// Convert Yen to USD
// Create a function that can turn JPY (Japanese yen) to USD (American dollar).

function yenToUsd(yen) {
  let total = yen / 107.5;
  return Number(total.toFixed(2));
}
