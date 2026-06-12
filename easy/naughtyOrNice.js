// Naughty or Nice
// Your function should return "Naughty!" or "Nice!" depending on the total number of occurrences in a given year (whichever one is greater). If both are equal, return "Nice!"

function naughtyOrNice(data) {
  let arr = Object.values(data)
    .map((el) => Object.values(el))
    .flat(Infinity);
  return arr.filter((el) => el == "Nice").length >=
    arr.filter((el) => el == "Naughty").length
    ? "Nice!"
    : "Naughty!";
}
