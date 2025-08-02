// Grandma learning to text
// Write a function that replaces 'two', 'too' and 'to' with the number '2'. Even if the sound is found mid word (like in octopus) or not in lowercase grandma still thinks that should be replaced with a 2. Bless her.

function textin(s) {
  return s.replace(/two|too|to/gi, "2");
}
