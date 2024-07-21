// 2727. Is Object Empty
// Given an object or an array, return if it is empty.
// An empty object contains no key-value pairs.
// An empty array contains no elements.

/**
 * @param {Object|Array} obj
 * @return {boolean}
 */
var isEmpty = function (obj) {
  return Object.entries(obj).length === 0 ? true : false;
};
