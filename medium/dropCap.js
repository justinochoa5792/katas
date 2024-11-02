// Dropcaps
// But for a change, let"s do that for each and every word of the given String. Your task is to capitalize every word that has length greater than 2, leaving smaller words as they are.

function dropCap(n) {
  return n
    .split(" ")
    .map((el, i) =>
      el.length > 2
        ? el.substring(0, 1).toUpperCase().concat(el.slice(1).toLowerCase())
        : el
    )
    .join(" ");
}
