/**
 * Sort Numbers
 * Write a function that sorts an array of numbers. There's many many strategies
 * for sorting numbers, enjoy!
 * */

/**
 * Sorts an array of numbers from smallest to largest to largest.
 * Returns a new array without modifying the original array.
 * Does not need to support: NaN, Infinity, -Infinity.
 *
 * @param {number[]} [arrayOfNumbers=[]] - The array of numbers to sort.
 * @returns {number[]} A new array with the same numbers, but sorted.
 * @example
 * sortNumbers([1.5, 1, -1.5, 0, -1]);
 * // -> [-1.5, -1, 0, 1, 1.5]
 */
/* 

strategy:
1. build a Compare function.
2. use .sort() to return an array with ascending as default sort order.
*/

// 1st Try: inspired by Evan. //works
export const sortNumbers1 = (arrayOfNumbers = []) => {
  const copy = arrayOfNumbers.map((x) => x);
  return copy.sort((firstEl, secondEl) => firstEl - secondEl);
};

// 2nd Try: use pop up. // works
export const sortNumbers2 = (arrayOfNumbers = []) => {
  const copy = [...arrayOfNumbers];
  for (let j = 0; j <= copy.length - 2; j++) {
    let indexOfMin = j;
    for (let i = j + 1; i < copy.length; i++) {
      if (copy[indexOfMin] > copy[i]) {
        indexOfMin = i;
      }
    }
    const temp = copy[j];
    copy[j] = copy[indexOfMin];
    copy[indexOfMin] = temp;
  }
  return copy;
};

// 3rd Try: use insert. // works
export const sortNumbers3 = (arrayOfNumbers = []) => {
  const copy = [...arrayOfNumbers];
  // sort the copy
  for (let j = 1; j < copy.length; j++) {
    let i;
    for (i = 0; i < j; i++) {
      // find the one that is larger than copy[j]
      if (copy[j] < copy[i]) {
        break;
      }
    }
    if (i === j) {
      continue;
    }
    // insert copy[j]
    const temp = copy[j];
    for (let k = j - 1; k >= i; k--) {
      // shift one position to right
      copy[k + 1] = copy[k];
    }
    copy[i] = temp; // insert copy[j]
  }

  return copy;
};

//4th Try:inspired by coach Michiel //use indexOf(), Math.min() , splice() //works
export const sortNumbers4 = (arrayOfNumbers = []) => {
  const copy = [...arrayOfNumbers];
  let sortedArr = [];
  while (copy.length !== 0) {
    const indexOfMin = copy.indexOf(Math.min(...copy));
    sortedArr = sortedArr.concat(Math.min(...copy));
    copy.splice(indexOfMin, 1);
  }
  return sortedArr;
};
