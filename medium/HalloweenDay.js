// Halloween Day
// Create a function that takes date in the format yyyy/mm/dd as an input and returns "Bonfire toffee" if the date is October 31, else return "toffee".

function halloween(dt) {
  month = dt.getMonth() + 1;
  day = dt.getDate();
  if (month === 10 && day == 31) {
    return "Bonfire toffee";
  } else return "toffee";
}
