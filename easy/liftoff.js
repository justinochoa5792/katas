// We Have Liftoff
// Unfortunately, the person reading the countdown only knows how to read strings. After the array is sorted correctly make sure it's in a format he can understand.
// Between each number should be a space and after the final number (n) should be the word 'liftoff!'

function liftoff(instructions) {
  //...
  return instructions
    .sort((a, b) => b - a)
    .join(" ")
    .concat(" liftoff!");
}
