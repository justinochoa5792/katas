// Test's results
// It's important day today: the class has just had a math test. You will be given a list of marks. Complete the function that will:
// Calculate the average mark of the whole class and round it to 3 decimal places.
// Make a dictionary/hash with keys "h", "a", "l" to make clear how many high, average and low marks they got. High marks are 9 & 10, average marks are 7 & 8, and low marks are 1 to 6.
// Return list [class_average, dictionary] if there are different type of marks, or [class_average, dictionary, "They did well"] if there are only high marks.

function testResult(array) {
  // your code
  let high = array.filter((el) => el >= 9).length;
  let mid = array.filter((el) => el == 7 || el == 8).length;
  let low = array.filter((el) => el <= 6).length;
  let average = array.reduce((a, b) => a + b) / array.length;
  return low == 0 && mid == 0
    ? [
        Number(average.toFixed(3)),
        { "h": high, "a": mid, "l": low },
        "They did well",
      ]
    : [Number(average.toFixed(3)), { "h": high, "a": mid, "l": low }];
}
