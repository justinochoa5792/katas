// Perfect squares, perfect fun
// Given an integer, if the length of it's digits is a perfect square, return a square block of sqroot(length) * sqroot(length). If not, simply return "Not a perfect square!".

function squareIt(int) {
  const str = String(int);
  const len = str.length;
  const size = Math.sqrt(len);
  const rows = [];

  if (!Number.isInteger(size)) {
    return "Not a perfect square!";
  }

  for (let i = 0; i < len; i += size) {
    rows.push(str.slice(i, i + size));
  }

  return rows.join("\n");
}
