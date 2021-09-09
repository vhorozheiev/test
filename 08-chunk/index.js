// TODO: rename function, maybe array-of-arrays


/**
 * in this function I create new array and counter for shift index in new array
 * than I go through array and slice some part with numbers to new array, and increase counter for +1
 * i + size, because we need shift position in array arr
 * @param arr
 * @param size
 * @returns {*[]}
 */
export const chunk = (arr = [], size = 0) => {
  let filteredArray = [];
  let counter = 0;
  for (let i = 0; i < arr.length; i += size) {
    filteredArray[counter] = arr.slice(i, i + size);
    counter++;
  }
  return filteredArray;
};

