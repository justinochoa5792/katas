// Friday the 13th Part 1
// Your function must return an array of the names of all the counselors who can be outsmarted and killed by Jason.
// Create a function, killcount, that accepts two arguments: an array of array pairs (the conselor's name and intelligence - ["Chad", 2]) and an integer representing Jason's intellegence.

function killcount(counselors, jason) {
  return counselors
    .filter(([name, intelligence]) => intelligence < jason)
    .map((counselor) => counselor[0]);
}
