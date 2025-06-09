// Number Manipulation I (Easy)
// For a given large number (num), write a function which returns the number with the second half of digits changed to 0.
// In cases where the number has an odd number of digits, the middle digit onwards should be changed to 0.

function manipulate(num) {
  let middle = num.toString().split("").length;
  return middle % 2 == 0
    ? Number(
        num
          .toString()
          .slice(0, middle / 2)
          .concat("0".repeat(middle / 2))
      )
    : Number(
        num
          .toString()
          .slice(0, Math.floor(middle / 2))
          .concat("0".repeat(Math.round(middle / 2)))
      ); // your code here
}
