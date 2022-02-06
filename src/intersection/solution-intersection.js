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

// function returns a new array containing intersecting values from two other arrays without repetitions
export const intersection = (array = [], values = []) => {
  // guard assuring arguments are both arrays
  if (!Array.isArray(array) || !Array.isArray(values)) {
    throw new TypeError('argument is not an array');
  }
  // guard assuring first argument does not contain NaN
  if (array.includes(NaN)) {
    throw new TypeError('first argument contains NaN');
  }
  // return new set containing only intersecting values from the two arguments without repetitions
  return [...new Set(array)].filter((value) => new Set(values).has(value));
};
