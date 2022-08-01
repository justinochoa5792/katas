// Reverse the Case
// Given a string, create a function to reverse the case. All lower-cased letters should be upper-cased, and vice versa.

function reverseCase(str) {
  return str
    .split("")
    .map((item) => {
      return item === item.toUpperCase()
        ? item.toLowerCase()
        : item.toUpperCase();
    })
    .join("");
}
