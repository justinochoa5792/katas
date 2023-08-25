// Tidy Hyperlinks
// Using markdown, it's possible to format links such as https://edabit.com/challenges, into something tidier like this. Notice how the text "Go to the challenges!" appears when hovering over the link.

function tidyLink(url, name, hoverText) {
  hoverText === undefined ? (hoverText = "") : (hoverText = ` "${hoverText}"`);
  return `[${name}](${url}${hoverText})`;
}
