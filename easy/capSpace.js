// Capital Split
// Create a function which adds spaces before every capital in a word. Uncapitalize the whole string afterwards.

function capSpace(txt) {
  return txt
    .split("")
    .map((el) =>
      el === el.toUpperCase() ? el.replace(el, " " + el.toLowerCase()) : el
    )
    .join("");
}
