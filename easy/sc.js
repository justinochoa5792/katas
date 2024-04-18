// Coding 3min : Jumping Dutch act
// Scientific research shows that a man jumped from the top of the roof, when the floor more than 6, the person will often die in an instant; When the floor is less than or equal to 6, the person will not immediately die, he would scream. (without proof)

function sc(floor) {
  return floor > 6
    ? "Aa~ ".repeat(floor - 1).concat("Pa!")
    : floor <= 1
    ? ""
    : "Aa~ ".repeat(floor - 1).concat("Pa! Aa!");
}
