// Reformatting the Date
// The return value will be an array formatted like: [MM, DD, YYYY], where MM, DD, and YYYY are all integers. Using the examples above:

function convertDate(date) {
  let format = [];
  let update = new Date(date);
  format.push(update.getMonth() + 1, update.getDate(), update.getFullYear());
  return format;
}
