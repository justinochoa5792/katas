// Class conundrum - Bug Fixing #7
// Oh no! Timmy's List class has broken! Can you help Timmy and fix his class? Timmy has a List class he has created, this is used for type strict arrays (which Timmy calls Lists)

class List {
  constructor(type) {
    this.type = type;
    this.items = [];
    this.count = 0;
  }
  add(item) {
    if (typeof item !== this.type) {
      return `This item is not of type: ${this.type}`;
    }

    this.items.push(item);
    this.count++;
    return this;
  }
}
