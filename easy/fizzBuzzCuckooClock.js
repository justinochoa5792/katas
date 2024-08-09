// Fizz Buzz Cuckoo Clock
// When a minute is evenly divisible by three, the clock will say the word "Fizz".
// When a minute is evenly divisible by five, the clock will say the word "Buzz".
// When a minute is evenly divisible by both, the clock will say "Fizz Buzz", with two exceptions:
// On the hour, instead of "Fizz Buzz", the clock door will open, and the cuckoo bird will come out and "Cuckoo" between one and twelve times depending on the hour.
// On the half hour, instead of "Fizz Buzz", the clock door will open, and the cuckoo will come out and "Cuckoo" just once.
// With minutes that are not evenly divisible by either three or five, at first you had intended to have the clock just say the numbers ala Fizz Buzz, but then you decided at least for version 1.0 to just have the clock make a quiet, subtle "tick" sound for a little more clock nature and a little less noise.

function fizzBuzzCuckooClock(time) {
  // your code here
  let split = time.split(":");
  let hours = ((Number(split[0]) + 11) % 12) + 1;
  if (Number(split[1]) == 00) {
    return "Cuckoo ".repeat(hours).trim();
  } else if (Number(split[1]) === 30) {
    return "Cuckoo";
  } else if (Number(split[1]) % 3 == 0 && Number(split[1]) % 5 == 0) {
    return "Fizz Buzz";
  } else if (Number(split[1]) % 3 == 0) {
    return "Fizz";
  } else if (Number(split[1]) % 5 == 0) {
    return "Buzz";
  } else {
    return "tick";
  }
}
