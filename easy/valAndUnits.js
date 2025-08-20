// Extract Values and Units
// Assume all inputs have a numerical value, but not necessarily any specified units.
// There may also be space(s) between the value and the unit, in which case ignore them.

function valAndUnits(s) {
  let num = Number(s.match(/[0-9.-]/gi).join(""));
  let unit = !s.match(/[a-zA-Z%]/gi) ? "" : s.match(/[a-zA-Z%]/gi).join("");
  return { val: num, units: unit };
}
