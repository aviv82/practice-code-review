/** 
 * Sort Numbers
 * Write a function that sorts an array of numbers. There's many many strategies
for sorting numbers, enjoy! 
*/

/**
 * Sorts an array of numbers from smallest to largest to largest.
 *
 * Returns a new array without modifying the original array.
 *
 * Does not need to support: NaN, Infinity, -Infinity.
 *
 * @param {number[]} [arrayOfNumbers=[]] - the array of numbers to sort
 * @returns {number[]} a new array with the same numbers, but sorted
 * @example
 *
 * sortNumbers([1.5, 1, -1.5, 0, -1]);
 * // -> [-1.5, -1, 0, 1, 1.5]
 */
/* 

strategy:
1. build a Compare function.
2. use .sort() to return an array with ascending as default sort order.
*/

// 1st Try: inspired by Evan. //works
export const sortNumbers1 = (number = []) => {
  const copyOfNumber = number.map((x) => x);
  return copyOfNumber.sort((firstEl, secondEl) => firstEl - secondEl);
};

// 2nd Try: use pop up. // works
export const sortNumbers2 = (number = []) => {
  const copyOfNumber = number.map((x) => x);
  for (let j = 0; j <= copyOfNumber.length - 2; j++) {
    let indexOfMin = j;
    for (let i = j + 1; i < copyOfNumber.length; i++) {
      if (copyOfNumber[indexOfMin] > copyOfNumber[i]) {
        indexOfMin = i;
      }
    }
    let temp;
    temp = copyOfNumber[j];
    copyOfNumber[j] = copyOfNumber[indexOfMin];
    copyOfNumber[indexOfMin] = temp;
  }
  return copyOfNumber;
};

// 3rd Try: use insert //works
export const sortNumbers3 = (number = []) => {
  const copyOfNumber = number.map((x) => x);
  for (let j = 1; j < copyOfNumber.length; j++) {
    for (let i = 0; i < j; i++) {
      if (copyOfNumber[j] < copyOfNumber[i]) {
        break;
      }
    }
    if (i === j) {
      continue;
    }

    let temp = copyOfNumber[j];
    for (let k = j - 1; k >= i; k--) {
      copyOfNumber[k + 1] = copyOfNumber[k];
    }
    copyOfNumber[i] = temp;
  }
  return copyOfNumber;
};
