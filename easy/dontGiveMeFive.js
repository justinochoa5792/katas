// Don't give me five!
// In this kata you get the start number and the end number of a region and should return the count of all numbers except numbers with a 5 in it. The start and the end number are both inclusive!

function dontGiveMeFive(start, end) {
  let total = [];
  for (let i = start; i <= end; i++) {
    total.push(i);
  }
  return total.filter((number) => !String(number).includes("5")).length;
}
