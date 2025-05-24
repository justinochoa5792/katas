// regex validation of 24 hours time.
// Write a regex to validate a 24 hours time string. See examples to figure out what you should check for:
// Accepted: 01:00, 1:00, 00:00
// Not accepted: 24:00, 13:1, 12:60
// You should check for correct length and no spaces.

function validateTime(time) {
  let res = /^(?:[0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/.test(time);
  return res;
}
