// Spraying trees
// Your task is to create a function that takes three arguments:
// Weekday: The day of the week (e.g., Monday).
// Number of Trees: The number of trees that must be sprayed on that day.
// Cost per Litre: The cost of 1 litre of liquid needed to spray a tree. Assume that 1 tree requires 1 litre of liquid.

function task(w, t, c) {
  switch (w) {
    case "Monday":
      return `It is ${w} today, James, you have to work, you must spray ${t} trees and you need ${
        t * c
      } dollars to buy liquid`;
      break;
    case "Tuesday":
      return `It is ${w} today, John, you have to work, you must spray ${t} trees and you need ${
        t * c
      } dollars to buy liquid`;
      break;
    case "Wednesday":
      return `It is ${w} today, Robert, you have to work, you must spray ${t} trees and you need ${
        t * c
      } dollars to buy liquid`;
      break;
    case "Thursday":
      return `It is ${w} today, Michael, you have to work, you must spray ${t} trees and you need ${
        t * c
      } dollars to buy liquid`;
      break;
    default:
      return `It is ${w} today, William, you have to work, you must spray ${t} trees and you need ${
        t * c
      } dollars to buy liquid`;
  }
}
