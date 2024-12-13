// Kebabize
// Modify the kebabize function so that it converts a camel case string into a kebab case.

function kebabize(str) {
  // TODO
  return str
    .match(/[a-zA-Z]/gi)
    .join("")
    .split(/(?=[A-Z])/)
    .map((el) => el.toLowerCase())
    .join("-");
}
