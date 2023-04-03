// Capitalize the Last Letter
// Create a function that capitalizes the last letter of every word.
function capLast(txt) {
  return txt
    .split(" ")
    .map(function (item) {
      return item.slice(0, -1) + item.slice(-1).toUpperCase();
    })
    .join(" ");
}
