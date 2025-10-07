// Spanish sentences #1
// Keeping in mind only the above-mentioned fact, your task is to find out how many sentences in unput array are "spanish" and return '¡n spanish sentence(s) here and hasta la vista, baby!'

function spanishSent(arr) {
  const count = arr.filter(
    (el) =>
      (el.startsWith("¿") && el.endsWith("?")) ||
      (el.startsWith("¡") && el.endsWith("!"))
  ).length;

  return `¡${count} spanish sentence${
    count !== 1 ? "s" : ""
  } here and hasta la vista, baby!`;
}
