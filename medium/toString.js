// toString() Hooking
// You have one job and one job only, to ruin the day of any unsuspecting victim using the toString() function. Hook the String prototype toString() to instead return a string that is in reverse.

String.prototype.toString = function () {
  return String.reverse();
};
