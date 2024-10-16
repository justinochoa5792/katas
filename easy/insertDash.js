// Insert dashes
// Write a function that takes an integer num (num >= 0) and inserts dashes ('-') between each two odd digits in num.

function insertDash(num) {
  //code me
  let numbs = num
    .toString()
    .split("")
    .map((el, i, arr) =>
      el % 2 == 0 || arr[i + 1] % 2 === 0 ? el : el.concat("-")
    );
  numbs = numbs.join("");
  return numbs.endsWith("-") ? numbs.slice(0, -1) : numbs;
}
