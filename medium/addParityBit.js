// Adding Parity Bits
// Create a function that adds the correct parity bit to a binary string.

function addParityBit(b) {
  let length = b.split("").filter((item) => item === "0").length;
  return length % 2 === 0 ? b.concat("1") : b.concat("0");
}
