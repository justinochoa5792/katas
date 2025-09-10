// Print count and numbers
// Given a string of integers, count how many times that integer repeats itself, then return a string showing the count and the integer.

function countMe(data) {
  if (!data || !/^\d+$/.test(data)) return "";

  let result = "";
  let count = 1;

  for (let i = 0; i < data.length; i++) {
    if (data[i] === data[i + 1]) {
      count++;
    } else {
      result += count.toString() + data[i];
      count = 1;
    }
  }

  return result;
}
