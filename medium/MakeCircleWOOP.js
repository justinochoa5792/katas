// Make a Circle with OOP
// Your task is to create a Circle constructor that creates a circle with a radius provided by an argument. The circles constructed must have two methods getArea() (PI*r^2) and getPerimeter() (2*PI*r) which give both respective areas and perimeter (circumference).

class Rectangle {
  constructor(sideA, sideB) {
    this.sideA = sideA;
    this.sideB = sideB;
  }
  getArea() {
    return this.sideA * this.sideB;
  }
  getPerimeter() {
    return (this.sideA + this.sideB) * 2;
  }
}

class Circle {
  // put your code here
  constructor(radius) {
    this.radius = radius;
  }
  getArea() {
    return this.radius * this.radius * Math.PI;
  }
  getPerimeter() {
    return 2 * Math.PI * this.radius;
  }
}

// unquote and use run to test these cases:

let q = new Circle(4.44);
console.log(q.getArea());
console.log(q.getPerimeter());
