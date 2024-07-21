// Century From Year
// Given a year, return the century it is in.

function century(year) {
  // Finish this :)
  let newYear = year.toString().split("");
  let splitYear = newYear.join("").substring(0, newYear.join("").length - 2);
  return Number(newYear.splice(newYear.length - 2, newYear.length).join("")) > 0
    ? Number(splitYear) + 1
    : Number(splitYear);
}
