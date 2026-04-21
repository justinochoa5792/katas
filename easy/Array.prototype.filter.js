// What we want to implement is Array.prototype.filter() function, just like the existing Array.prototype.filter(). Another similar function is _.filter() in underscore.js and lodash.js.

Array.prototype.filter = function (func) {
  //nothing here, you will feel pretty awesome to write down by yourself
  //have fun :)
  let total = [];

  for (let i = 0; i < this.length; i++) {
    if (func(this[i])) {
      total.push(this[i]);
    }
  }
  return total;
};
