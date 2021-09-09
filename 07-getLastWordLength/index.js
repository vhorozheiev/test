/**
 *in this function I remove all spaces and use split for create array from input string
 * than I get a last word from array and return his length
 * @param str
 * @returns {number}
 */

export const getLastWordLength = str => {
  let lastWorld = str.trim();
  lastWorld = lastWorld.split(" ");
  lastWorld = lastWorld[lastWorld.length - 1];
  return lastWorld.length;
};


