// Easy Time Convert
// This kata requires you to convert minutes (int) to hours and minutes in the format hh:mm (string).
// If the input is 0 or negative value, then you should return "00:00"
// Hint: use the modulo operation to solve this challenge. The modulo operation simply returns the remainder after a division. For example the remainder of 5 / 2 is 1, so 5 modulo 2 is 1.

function timeConvert(num) {
  let hours = Math.floor(num / 60);
  let minutes = num % 60;

  if (num <= 0) {
    return "00:00";
  } else {
    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}`;
  }
}
