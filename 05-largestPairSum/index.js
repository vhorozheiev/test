/**
 * largestPairSum - Returns sum of highest and lowest values in array:
 * @param {array} numbers - the array of numbers
 * @returns {number} - returns the new number
 */


export const largestPairSum = (numbers) => {
  /**
   * in this function I sort input string and use method splice for cut two biggest numbers of this array
   * than I go through array and add this numbers two sum variable and return it
   * @type {number}
   */
  let sum = 0;
  let numbersForSum = numbers.sort((a, b) => b - a).splice(0, 2);
  for (let i = 0; i < numbersForSum.length; i++) {
    sum += numbersForSum[i];
  }
  return sum;
}
