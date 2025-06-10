//So Easy: Show my password
//But he is very forgetful, afraid to forget the password, so he wanted to write a function showMyPassword, and then run the function can get the correct password. The funciton accepts an array as argument. It contains the birthday of John, John's girlfriend, John's dad, John's mom, but not in a fixed order. We only know that John is older than his girlfriend, and John's dad is older than his wife. All birthday are given by string format like this:

function showMyPassword(birthdays) {
  //coding and coding..
  let sorted = birthdays.sort((a, b) => new Date(a) - new Date(b));
  return sorted[2]
    .split("-")[0]
    .slice(2)
    .concat(sorted[3].split("-")[0].slice(2))
    .concat(
      sorted[0].split("-")[1].length < 2
        ? `0${sorted[0].split("-")[1]}`
        : sorted[0].split("-")[1]
    )
    .concat(
      sorted[1].split("-")[2].length < 2
        ? `0${sorted[1].split("-")[2]}`
        : sorted[1].split("-")[2]
    );
}
