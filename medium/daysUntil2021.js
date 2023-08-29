// How Many Days Until 2021?
// Given a date, return how many days date is away from 2021 (end date not included). date will be in mm/dd/yyyy format.

function daysUntil2021(date) {
  const now = new Date(date);
  const newYear = new Date(`January 01, 2021 00:00:00`);
  const timeUntil = newYear.getTime() - now.getTime();
  const daysUntil = Math.abs(Math.ceil(timeUntil / (1000 * 60 * 60 * 24)));
  return daysUntil === 1 ? `${daysUntil} day` : `${daysUntil} days`;
}
