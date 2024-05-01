// Training JS #14: Methods of Number object--toString() and toLocaleString()
// Use toString(16) Convert numbers r g b to hex string form. at last, combine them to a web color code and return it.

function colorOf(r, g, b) {
  //coding here
  return `#${[r, g, b].map((el) => el.toString(16).padStart(2, 0)).join("")}`;
}
