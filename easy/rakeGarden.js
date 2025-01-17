// Help Suzuki rake his garden!
// The monastery has a magnificent Zen garden made of white gravel and rocks and it is raked diligently everyday by the monks. Suzuki having a keen eye is always on the lookout for anything creeping into the garden that must be removed during the daily raking such as insects or moss.
// Rake out any items that are not a rock or gravel and replace them with gravel such that:

function rakeGarden(garden) {
  // TODO: Program Me
  return garden
    .split(" ")
    .map((el) =>
      el === "gravel" || el == "rock" ? el : el.replace(el, "gravel")
    )
    .join(" ");
}
