import { solutionName } from './solution-name.js';
/**
* Split Object
* Split an object into an array of objects. Each entry in the array will be one
* key/value pair from the object. 
*/


/**
 * Splits an object into multiple objects with one key/value pair each.
 * The new objects are returned in an array.
 *
 * This function has no side-effects, the argument object is not modified
 *
 * @param {Object} [toSeparate={}] - The object to split into key/value pairs.
 * @returns {Array} Returns a new array with one entry for each key/value pair.
 * @example
 *
 * splitObject({ a: 1, b: 2, c: 3 });
 * // -> [{ a: 1 }, { b: 2 }, { c: 3 }]
 *
 * @example
 *
 * splitObject({ name: 'robs', age: 25, tall: true, userName: 'sbor' });
 * // -> [{ name: 'robs }, { age: 25 }, { tall: true }, { userName: 'sbor' }]
 *
 * @example
 *
 * splitObject({});
 * // -> []
 */


/* 
`strategy`:
1) use Object.keys() to find all the keys of the object.
2) get the respective value of each key and create a new object with that single key-value pair.
3) put each new object in an array.
 */


// 1st Try: iteration for...in statement.  //works
export const splitObject1 = (toSeparate={}) => {
    const finalArray = [];
    for (const key in toSeparate) {
        finalArray.push({[key]: toSeparate[key]});
    }
    return finalArray;
};


//  2nd Try: use entries(). //works
export const splitObject2 = (toSeparate={}) => {
    let finalArray = [];
    for (const [key, value] of Object.entries(toSeparate)) {
        finalArray.push({[key]: value});
    }
    return finalArray;
};


// 3rd Try: use keys(). //works
export const splitObject3 = (toSeparate={}) => {
    let finalArray = [];
    const keyArray = Object.keys(toSeparate);
    for (const key of keyArray) {
        finalArray.push({[key]: toSeparate[key]});
    }
    return finalArray;
};


// 4th Try: use reduce(). //works
export const splitObject4 = (obj) => Object.keys(obj).reduce( (acc, current) => acc.concat([{[current]:obj[current]}]), []);
    



