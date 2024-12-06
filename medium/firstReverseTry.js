// Simple Fun #20: First Reverse Try
// Reversing an array can be a tough task, especially for a novice programmer. Mary just started coding, so she would like to start with something basic at first. Instead of reversing the array entirely, she wants to swap just its first and last elements.

function firstReverseTry(arr) {
  //coding and coding..
  let reversed = [arr.slice(arr.length - 1), arr.slice(1, arr.length - 1)];
  reversed = [...reversed, arr.slice(0, 1)].flat();
  return arr.length === 1 ? arr : reversed;
}
