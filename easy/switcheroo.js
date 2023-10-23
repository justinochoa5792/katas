// switcheroo
// Given a string made up of letters a, b, and/or c, switch the position of letters a and b (change a to b and vice versa). Leave any incidence of c untouched.

function switcheroo(x) {
  return x
    .split("")
    .map((el) =>
      el === "a" ? el.replace("a", "b") : el === "b" ? el.replace("b", "a") : el
    )
    .join("");
}
