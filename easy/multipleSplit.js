// Split string by multiple delimiters
// Your task is to write function which takes string and list of delimiters as an input and returns list of strings/characters after splitting given string.

function multipleSplit(string, delimiters = []) {
  if (!string) return [];

  if (!delimiters.length) return [string];

  const escaped = delimiters.map((d) =>
    d.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"),
  );

  const regex = new RegExp(escaped.join("|"), "g");

  return string.split(regex).filter(Boolean);
}
