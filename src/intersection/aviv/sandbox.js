/**
 * Creates an array of values that are in both the first and the second arrays.
 *
 * Repeated values are not duplicated in the return value, and the order of result values are determined by the first array.
 *
 * **Note:** This function returns a new array, and has no side-effects.
 *
 * @param {Array} [array=[]] - The array to inspect.
 * @param {Array} [values=[]] - The values to include.
 * @returns {Array} Returns the new array of filtered values.
 * @example
 *
 * intersection([2, 1], [2, 3]);
 * // -> [2]
 *
 * @example
 *
 * intersection([2, 1, 2], [2, 3]);
 * // -> [2]
 */

const stub = (array = [], values = []) => {
  const newArray = [];
  return newArray;
};

/*
strategy:
1. declare empty array variable for storing intersecting array values
2. declare empty array variable for storing non-repeating values
3. create loop to compare values between two arrays
4. use conditional in loop to construct intersecting array
5. create loop to compare intersecting array to non-repeating empty array
6. use conditional in loop to construct non-repeating array   
*/

// following original strategy and inspired by alina's solution to the difference challenge
export const firstTry = (array = [], values = []) => {
  const newArray = [];
  const finalArray = [];
  for (const arr of array) {
    if (values.includes(arr)) {
      newArray.push(arr);
    }
    for (const value of newArray) {
      if (!finalArray.includes(value)) {
        finalArray.push(value);
      }
    }
  }
  return finalArray;
}; // works

// first try passes first round of tests but has no guards set against faulty user input or edge cases
// it is also very long and clunky, with too many variables

// second attempt; will add guards and try to slim down code
export const secondTry = (array = [], values = []) => {
  const newArray = [];

  if (!Array.isArray(array) || !Array.isArray(values)) {
    throw new TypeError('argument is not an array');
  }
  return newArray;
};
