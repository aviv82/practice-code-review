/* eslint-disable sonarjs/no-duplicate-string */
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
  const intersect = (s) => {
    if (values.includes(s) && !newArray.includes(s)) {
      newArray.push(s);
    }
    return newArray;
  };
  array.forEach(intersect);
  return newArray;
}; // works

// third attempt; contains guard for edge case - NaN !== NaN
export const thirdTry = (array = [], values = []) => {
  const newArray = [];
  if (!Array.isArray(array) || !Array.isArray(values)) {
    throw new TypeError('argument is not an array');
  } else if (array.includes(NaN)) {
    throw new TypeError('first argument contains NaN');
  }
  // eslint-disable-next-line sonarjs/no-identical-functions
  const intersect = (s) => {
    if (values.includes(s) && !newArray.includes(s)) {
      newArray.push(s);
    }
    return newArray;
  };
  array.forEach(intersect);
  return newArray;
}; // works!

// fourth attempt try to optimize code using methods and logical operators inspired by alina

export const fourthTry = (array = [], values = []) => {
  if (!Array.isArray(array) || !Array.isArray(values)) {
    throw new TypeError('argument is not an array');
  } else if (array.includes(NaN)) {
    throw new TypeError('first argument contains NaN');
  }
  const newArray = array.filter((value, i) => {
    return values.includes(value) && array.indexOf(value) === i;
  });
  return newArray;
}; // works

// const newArray = array.filter((ele, i) => {
// return !values.includes(ele) && array.indexOf(ele) === i;
// });

// ok function works and is complete. time to try and trim it

// fifth attempt refract code using sets set inspired by alina:
export const fifthTry = (array = [], values = []) => {
  if (!Array.isArray(array) || !Array.isArray(values)) {
    throw new TypeError('argument is not an array');
  }
  if (array.includes(NaN)) {
    throw new TypeError('first argument contains NaN');
  }
  const arraySet = new Set(array);
  const ValuesSet = new Set(values);
  const newArray = new Set([
    ...arraySet.filter((value) => ValuesSet.has(value)),
  ]);
  return newArray;
};

// const setNewArray = new Set([...setArray].filter((x) => !setValues.has(x)));

// sixth attempt; optimized function using set method
//   return [...new Set(array)].filter((x) => !new Set(values).has(x));
export const sixthTry = (array = [], values = []) => {
  if (!Array.isArray(array) || !Array.isArray(values)) {
    throw new TypeError('argument is not an array');
  }
  if (array.includes(NaN)) {
    throw new TypeError('first argument contains NaN');
  }
  return [...new Set(array)].filter((value) => new Set(values).has(value));
}; // works
