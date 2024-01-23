// Sum without highest and lowest number
// Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).
// The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.

function sumArray(array) {
  if (!array || array.length === 0) {
    return 0;
  } else {
    array.sort((a, b) => b - a).shift();
    array.sort((a, b) => b - a).pop();
    return array.reduce((a, b) => a + b, 0);
  }
}
