// Face Interval
// Create a function that takes an array and returns ":)" if the interval of the array is equal to any other element; otherwise return ":(".

function faceInterval(num) {
  let total = num[num.length - 1] - num[0];
  if (num.includes(total) === true) {
    return ":)";
  } else if (typeof num === "string") {
    return ":/";
  } else {
    return ":(";
  }
}
