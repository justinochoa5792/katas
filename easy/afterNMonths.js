// After N Months...
// Create a function that takes in year and months as input, then return what year it would be after n-months have elapsed

function afterNMonths(year, months) {
  let newMonth = Math.floor(months / 12);
  if (!year) {
    return "year missing";
  } else if (!months) {
    return "month missing";
  } else return year + newMonth;
}
