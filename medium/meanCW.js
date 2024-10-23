// Calculate mean and concatenate string
// Return an array of length 2 with a[0] representing the mean of the ten integers as a floating point number. There will always be 10 integers and 10 characters. Create a single string with the characters and return it as a[1] while maintaining the original order.

function mean(lst) {
  //your code here
  let letters = lst.filter((el) => el.match(/[a-z]/gi)).join("");
  let nums = lst.filter((el) => el.match(/[0-9]/gi));
  nums = nums.reduce((a, b) => Number(a) + Number(b)) / nums.length;
  return [nums, letters];
}
