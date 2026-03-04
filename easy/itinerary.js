// Airport itinerary
// In order to propose the unique list of airports that your trip uses we have to create an itinerary feature that can compress the list of airports including only the list of unique in/out combination.

function itinerary(flights) {
  if (!flights || flights.length === 0) return "";

  const airports = [];
  for (const flight of flights) {
    if (airports[airports.length - 1] !== flight.in) {
      airports.push(flight.in);
    }
    if (airports[airports.length - 1] !== flight.out) {
      airports.push(flight.out);
    }
  }

  return airports.join("-");
}
