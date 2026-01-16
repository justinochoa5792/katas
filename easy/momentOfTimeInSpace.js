// Simple Fun #193: Moment Of Time In Space
// Time is the sum of characters that increase time (i.e. numbers in range ['1'..'9'].
// Space in the number of characters which do not increase time (i.e. all characters but those that increase time).
// time equals 1, and space equals 7, so the moment is from the past.
// time equals 5, and space equals 5, which means that it's a present moment.
// time equals 6, space equals 5, so the moment is from the future.

function momentOfTimeInSpace(moment) {
  //coding and coding..
  let time = moment.match(/[1-9]/gi).reduce((a, b) => Number(a) + Number(b), 0);
  let space = moment.match(/[^1-9]/gi).length;

  return [time < space, space === time, space < time];
}
