//Operator overload ?
// We want to be able to sum two Foo object using the '+' operator.

var Foo = function (value) {
  this.val = value;
};

Foo.prototype.valueOf = function () {
  return this.val;
};
