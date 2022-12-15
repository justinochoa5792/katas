// Get the Date
// To illustrate, the day of the week for "12/07/2016" is "Wednesday".

function getDay(day) {
  let date = new Date(day);
  if (date.getDay() === 3) {
    return "Wednesday";
  } else if (date.getDay() === 4) {
    return "Thursday";
  } else if (date.getDay() === 5) {
    return "Friday";
  } else if (date.getDay() === 2) {
    return "Tuesday";
  } else {
    return "Sunday";
  }
}
