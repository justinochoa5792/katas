// testit
// No Story
// No Description
// Only by Thinking and Testing
// Look at result of testcase, guess the code!

function testit(s) {
  return s
    .split(" ")
    .map((el) =>
      el.length == 1
        ? el.toUpperCase()
        : el.slice(0, -1).concat(el.substring(el.length - 1).toUpperCase())
    )
    .join(" ");
}
