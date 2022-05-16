// Date Format
// Create a function that converts a date formatted as MM/DD/YYYY to YYYYDDMM.

function formatDate(date) {
  return date.split("/").reverse().join("");
}
