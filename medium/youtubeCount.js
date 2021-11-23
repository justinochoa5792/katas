// YouTube Upload Count
// You are given an array of dates in the format Dec 11 and a monthin the format Dec as arguments. Each date represents a video that was uploaded on that day. Return the number of uploads for a given month.

function uploadCount(dates, month) {
  return dates.filter((mon) => mon.includes(month)).slice("").length;
}
