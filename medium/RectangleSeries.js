// Rectangle Series 1: Skeleton
// Write a class called Rectangle that represents a rectangular two-dimensional region. It should have the following constructor:

// Rectangle Class
class Rectangle {
  constructor(height, width, x, y) {
    this.height = height;
    this.width = width;
    this.x = x;
    this.y = y;
  }
}
toString(){
    return `[x=${this.x}, y=${this.y}, width=${this.width}, height=${this.height}]`
}