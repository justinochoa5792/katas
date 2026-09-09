// 171. Excel Sheet Column Number
// Given a string columnTitle that represents the column title as appears in an Excel sheet, return its corresponding column number.

/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function (columnTitle) {
  return columnTitle
    .split("")
    .map((el) => el.toLowerCase().charCodeAt(0) - 96)
    .reduce((total, value) => total * 26 + value, 0);
};
