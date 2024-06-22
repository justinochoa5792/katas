// Name on billboard
// You can print your name on a billboard ad. Find out how much it will cost you. Each character has a default price of £30, but that can be different if you are given 2 parameters instead of 1 (allways 2 for Java).
// You can not use multiplier "*" operator.

function billboard(name, price = 30) {
  return name.split("").length / (1 / price);
}