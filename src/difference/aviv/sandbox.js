/**
 * Creates an array of values that are in the first array, but not in the second array.
 *
 * Repeated values are not duplicated in the return value, and the order of result values are determined by the first array.
 *
 * **Note:** This function returns a new array, and has no side-effects.
 *
 * @param {Array} [array=[]] - The array to inspect.
 * @param {Array} [values=[]] - The values to exclude.
 * @returns {Array} Returns the new array of filtered values.
 * @example
 *
 * difference([2, 1], [2, 3]); //  [1]
 *
 * @example
 *
 * difference([1, 2, 1], [2, 3]); //  [1]
 */

// filter and reduce!

/* const stub = (array[], values[]) {
    return newArray[]
}; */

/*
strategy
1. sort through first array with a function that compares the value to the values array
2. use filter method 
*/

// hint from coach sander!

/* const firstTry = (array1, array2) => {
    const filteredValues = array1.filter((item) => !array2.includes(item))
}; */

export const firstTry = (array, values) => {
  const newArray = [];
  for (const value of array) {
    if (!values.includes(value)) {
      newArray.push(value);
    }
  }
  for (let i = 0; i < newArray.length; i++) {
    if (newArray.includes(newArray[i])) {
      newArray.slice(i);
    }
  }
  console.log(newArray);
  return newArray;
};