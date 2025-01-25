// Remove the noise from the string
// We have a broken message machine that introduces noise to our incoming messages. We know that our messages can't be written using %$&/#·@|º\ª and white characters (like spaces or tabs). Unfortunately our machine introduces noise, which means that our message arrives with characters like: %$&/#·@|º\ª within our original message.
// Your mission is to write a function which removes this noise from the message.

function removeNoise(str) {
  // write your code below
  let words = str.match(/[^%$&/\//#·@|ºª\\]/gi);
  return !words ? "" : words.join("");
}
