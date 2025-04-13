// Green Glass Door
// Have you figured it out? Good! Then write a program that can figure it out as well.

function stepThroughWith(s) {
  //You can't bring your code, but you can bring this comment
  for (let i = 0; i < s.length - 1; i++) {
    if (s[i] === s[i + 1]) {
      return true;
    }
  }
  return false;
}
