// Quicksum
// A Quicksum is the sum of the products of each character’s position in the packet times the character’s value. A space has a value of zero, while letters have a value equal to their position in the alphabet.
// So, A = 1, B = 2, etc., through Z = 26. Here are example Quicksum calculations for the packets "ACM" and "A C M":
// When the packet doesn't have only uppercase letters and spaces or just spaces the result to quicksum have to be zero (0).

function quicksum(packet) {
  // Code time :)
  let regex = /[A-Z\s]/g;
  return packet.split("").filter((el) => !el.match(regex)).length > 0
    ? 0
    : packet
        .split("")
        .map((el, i) =>
          el.match(/[a-z]/gi)
            ? (el.toLowerCase().charCodeAt() - 96) * (i + 1)
            : 0
        )
        .reduce((a, b) => a + b, 0);
}
