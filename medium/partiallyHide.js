// Partially Hidden String
// Create a function that takes a phrase and transforms each word using the following rules:
// Keep first and last character the same.
// Transform middle characters into a dash -.

function partiallyHide(phrase) {
  return phrase
    .split(" ")
    .map((el) =>
      el.replace(
        el.substring(1, el.length - 1),
        el
          .substring(1, el.length - 1)
          .split("")
          .map((el) => el.replace(el, "-"))
          .join("")
      )
    )
    .join(" ");
}
