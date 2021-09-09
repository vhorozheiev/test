/**
 * repeatString - Duplicates every char in the string some times according to char index
 * @param {string} str - the string
 * @returns {string} - returns the new string
 */
export const repeatString = (str = '') => {
  let newString = '';
  for (let i = 0; i < str.length; i++) {
    newString += str[i].toUpperCase() + str[i].repeat(i) + "-";
  }
  return newString.slice(0, newString.length - 1);
}
