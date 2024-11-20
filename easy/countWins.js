// Find how many times did a team from a given country win the Champions League?
// You function should then return the number which represents the number of times a team from a given country has won. Return 0 if there have been no wins.

function countWins(winnerList, country) {
  // your awesome code here
  return winnerList.filter((el) => el.country == country).length;
}
