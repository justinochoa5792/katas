// String to integer conversion
// You are asked to write a myParseInt method with the following rules:
// It should make the conversion if the given string only contains a single integer value (and possibly spaces - including tabs, line feeds... - at both ends)
// For all other strings (including the ones representing float values), it should return NaN
// It should assume that all numbers are not signed and written in base 10

function myParseInt(str) {
  return str.trim().match(/[\D]/) ? "NaN" : parseInt(str);
}
