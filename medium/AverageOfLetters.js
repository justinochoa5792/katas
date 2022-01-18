// Find the Average of the Letters 📊
// Create a function that returns the average of a list composed of letters. First, find the number of the letter in the alphabet in order to find the average of the list.

function averageIndex(arr) {
  let array = arr.map((s) => s.charCodeAt(0) - 97);
  let num = array.reduce((a, b) => a + b) / arr.length + 1;
  return Number(num.toFixed(2));
}
