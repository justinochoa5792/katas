// Credit Card Mask
// Your task is to write a function maskify, which changes all but the last four characters into '#'.

// return masked string
function maskify(cc) {
  const lastFour = cc.slice(-4);
  const remaining = cc.slice(0, -4);

  const masked = "#".repeat(remaining.length) + lastFour;

  return masked;
}
