// "EdaBit" Challenge
// Create a function that returns the array of numbers from a given range. But for multiples of three, return “Eda” instead of the number and for the multiples of five, return “Bit”. For numbers which are multiples of both three and five, return “EdaBit”.

function edaBit(start, end) {
  let arr = [];
  for (let i = start; i <= end; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      arr.push("EdaBit");
    } else if (i % 3 === 0) {
      arr.push("Eda");
    } else if (i % 5 === 0) {
      arr.push("Bit");
    } else {
      arr.push(i);
    }
  }
  return arr;
}
