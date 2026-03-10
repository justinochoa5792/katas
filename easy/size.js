// Array.prototype.size()
// Implement Array.prototype.size(), which should simply return the length of the array. But do it entirely without using Array.prototype.length!
// Where .length is a property, .size() is a method.

Array.prototype.size = function () {
  let count = 0;

  for (const index in this) {
    count++;
  }
  return count - 1;
};
