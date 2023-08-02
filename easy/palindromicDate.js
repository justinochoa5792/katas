// Palindromic Dates
// The 2nd of February 2020 is a palindromic date in both dd/mm/yyyy and mm/dd/yyyy format (02/02/2020). Given a date in dd/mm/yyyy format, return true if the date is palindromic in both date formats, otherwise return false.

function palindromicDate(date) {
  const [m, d, y] = date.split("/");
  return m === d && m + d === [...y].reverse().join("");
}
