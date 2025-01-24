// Who Took The Car Key?
// Given an array of binary numbers, figure out and return the culprit's message to find out who took the missing car key.

function whoTookTheCarKey(message) {
  //Find that Freakin' Key!
  return message.map((el) => String.fromCharCode(parseInt(el, 2))).join("");
}
