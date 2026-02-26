// 80's Kids #5: You Can't Do That on Television
// Write a function, bucketOf(str), that takes a string and determines what will be dumped on your head. If you haven't said anything you shouldn't have, the bucket should be filled with "air". The words should be tested regardless of case.

function bucketOf(str) {
  // Watch what you say!
  const lower = str.toLowerCase();

  const hasWater = /(water|wet|wash)/.test(lower);
  const hasSlime = /i don't know|slime/.test(lower);

  return hasWater && hasSlime
    ? "sludge"
    : hasWater && !hasSlime
      ? "water"
      : !hasWater && hasSlime
        ? "slime"
        : "air";
}
