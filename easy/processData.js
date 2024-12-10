// Thinkful - List and Loop Drills: Lists of lists
// Each sub-list contains two items, and each item in the sub-lists is an integer.
// Write a function process_data()/processData() that processes each sub-list like so:
// and then returns the product of all the processed sub-lists: -3 * -1 * 1 --> 3.

function processData(data) {
  //your code here
  return data.map((el) => el.reduce((a, b) => a - b)).reduce((a, b) => a * b);
}
