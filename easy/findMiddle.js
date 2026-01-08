// Find the Middle of the Product
// Given a string of characters, create a function returning the middle number in the product of each digit in the string.

function findMiddle(str) {
  if (typeof str !== "string") return -1;

  const digits = str.match(/\d/g);
  if (!digits) return -1;

  const productStr = digits.reduce((a, b) => a * Number(b), 1).toString();

  const len = productStr.length;
  const mid = Math.floor(len / 2);

  if (len % 2 === 0) {
    return Number(productStr.slice(mid - 1, mid + 1));
  }

  return Number(productStr[mid]);
}
