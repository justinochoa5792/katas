// Oh dear God! Is it bugged?
// Chingel was creating a function which would return true if the input followed this time format 14-10-2016 01:12 (it doesn't need to reflect an actual time) and false otherwise. But looks like he has messed it up. Could you help him out? Please!

function isItBugged(code) {
  //hmm, Looks like its bugged man!
  let regex = /^\d{2}-\d{2}-\d{4}\s\d{2}:\d{2}$/;
  return regex.test(code);
}
