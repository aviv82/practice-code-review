/* Difference
Write a function that removes specific values from an array. The values to
remove are provided as a second array argument.
*/

/**
 * Creates an array of values that are in the first array, but not not in the second array.
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

// 1st Try: use Set //works
/* strategy: 
1) convert both arrays to sets that have no identical elements.
2) get the set consisting of the elements that belong to the first array and that do not belong to the second array.
3) convert the obtained set to a new array and return it.
*/
export const difference1 = (array = [], values = []) => {
  const setArray = new Set(array);
  const setValues = new Set(values);
  const setNewArray = new Set([...setArray].filter((x) => !setValues.has(x)));
  return [...setNewArray];
};

// 2nd Try: use Set and remove temp variable //works
export const difference2 = (array = [], values = []) => {
  return [...new Set(array)].filter((x) => !new Set(values).has(x));
};

// 3rd Try: inspired by coach Sander and aviv  //works
// use for loop.
export const difference3 = (array = [], values = []) => {
  const newArray = [];
  for (const ele of array) {
    if (!values.includes(ele) && !newArray.includes(ele)) {
      newArray.push(ele);
    }
  }
  return newArray;
};

// 4th Try: inspired by coach Sander //works
// use filter

export const difference4 = (array = [], values = []) => {
  const newArray = array.filter((ele, i) => {
    return !values.includes(ele) && array.indexOf(ele) === i;
  });
  return newArray;
};

// Inspiration 1: from coach Sander-> reduce + concat.
/* const differenceFunction = (array1, array2) => {
  return array1.reduce((acc, array1Item) => {
    if (!array2.includes(array1Item) && !acc.includes(array1Item)) {
      return acc.concat(array1Item);
    }

    return acc;
  }, []);
}; */

// Inspiration 2: by aviv and study group.
/*
const firstTry = (array, values) => {
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
*/
