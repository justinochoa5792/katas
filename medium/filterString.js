// Filter the number
// Your task is to return a number from a string.

var filterString = function (value) {
  //Complete this function :)
  return Number(value.match(/[0-9]/gi).join(""));
};
