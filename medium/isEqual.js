// Learn Lodash: isEqual, Check if Two Items Are Equal
// Write your own version of the lodash _.isEqual function using vanilla JavaScript (so, no external libraries - namely, lodash; don't import it). isEqual performs a deep comparison between two values to determine if they are equal. You can use it to compare arrays, booleans, dates, objects, sets, regexs, and typed arrays.

function isEqual_myVersion(a, b) {
  let caseA = JSON.stringify(a);
  let caseB = JSON.stringify(b);
  return caseA === caseB ? true : false;
}
