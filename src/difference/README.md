# Intersection: use Set method

Compares two arrays and returns their intersecting values in a new array
containing no repetitions without altering original arrays

## Strategy

We chose to use the set method because it automatically removes repeating items
from an array

## Implementation

- Set up guards first to make sure arguments are both arrays. this was done
  using an`if` conditional and `Array.isArray` method
- Set up guards that assure arguments do not contain NaNs. This is because NaNs
  are not equal to each other and therefore will interrupt the function of the
  intersection comparison. This was done using another `if` conditional
  and`.includes` method
- Created a new array which included every iteration of a `new Set` using
  `[...]` then filtered using `.filter` method only the repeating values from
  the values array using `.has` method. The new array was then returned

## Use Cases

- This function could be used to compare data lists or sets for repeating
  entries, for example, itineraries or inventories

```js
const acquisitions = ['books', 'desks', 'pens', 'robots', 'fire crackers'];
const inventory = ['books', 'folders', 'forms', 'pens', 'lasers'];

const accessItems = intersection(acquisitions, inventory);
```

## Inspiration

- This [page](https://www.w3schools.com/js/js_object_sets.asp) helped us
  understand how sets are used

- This [thread](https://stackoverflow.com/questions/6976721/is-nan-equal-to-nan)
  explains how NaN are not equal to each other and why
