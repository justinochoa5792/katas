// camelCase ⇄ snake_case
// Create two functions toCamelCase() and toSnakeCase() that each take a single string and convert it into either camelCase or snake_case. If you're not sure what these terms mean, check the Resources tab above.

function toSnakeCase(str) {
  str = str.split(/(?=[A-Z])/);
  return str.map((el) => el.toLowerCase()).join("_");
}

function toCamelCase(str) {
  return str
    .toLowerCase()
    .replace(/([-_][a-z])/g, (el) =>
      el.toUpperCase().replace("-", "").replace("_", "")
    );
}
