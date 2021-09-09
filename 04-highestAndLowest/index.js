/**
 * highestAndLowest - Modify initial string into new one, that start with highest number and and with lowest:
 * @param {string} numbers - the source numbers
 * @returns {string} - returns the new string
 */
// export const highestAndLowest = (numbers) => {
// }


const numbers = '-100 40 -20 10 -101 44';

function highestAndLowest(numbers) {
  /**
   * in this function I go through array and find min and max value than concat it to string and return
   */
  //I don't know why, but I find min number always incorrect :(

  let arr = numbers.split(' ');
  let min = 0;
  let max = 0;
  let res = "";
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  res = "".concat(max.toString()).concat(" ").concat(min.toString());
  return res;
}

