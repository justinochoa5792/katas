// Snail Race
// Steve and Maurice have racing snails. They each have three, a slow s, medium m and fast f one. Although Steve's snails are all a bit stronger than Maurice's, Maurice has a trick up his sleeve. His plan is

function mauriceWins(mSnails, sSnails) {
  return mSnails[1] > sSnails[0] && mSnails[2] > sSnails[1];
}
