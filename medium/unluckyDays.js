// unluckyDays
// Find the number of Friday 13th in the given year.

function unluckyDays(year) {
  //your code here
  let count = 0;
  for (var i = 0; i < 12; i++) {
    var d = new Date(year, i, 13);
    if (d.getDay() == 5) {
      count++;
    }
  }
  return count;
}
