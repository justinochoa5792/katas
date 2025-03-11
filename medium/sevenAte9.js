// SevenAte9
// Write a function that removes every lone 9 that is inbetween 7s.

function sevenAte9(str) {
  return str
    .split("")
    .map((el, i, arr) =>
      arr[i - 1] === "7" && arr[i + 1] === "7" && el === "9" ? "" : el
    )
    .join("");
}
