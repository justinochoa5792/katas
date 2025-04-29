// The Hidden Word
// Maya writes weekly articles to a well known magazine, but she is missing one word each time she is about to send the article to the editor. The article is not complete without this word. Maya has a friend, Dan, and he is very good with words, but he doesn't like to just give them away. He texts Maya a number and she needs to find out the hidden word. The words can contain only the letter:

function hiddenWord(num) {
  // Please help Maya...
  let char = {
    "6": "a",
    "1": "b",
    "7": "d",
    "4": "e",
    "3": "i",
    "2": "l",
    "9": "m",
    "8": "n",
    "0": "o",
    "5": "t",
  };
  return num
    .toString()
    .split("")
    .map((el) => el.replace(/[6174329805]/gi, (e) => char[e]))
    .join("");
}
