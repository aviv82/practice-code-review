# Difference: use Set method

Compares two arrays and returns the values that are not repeating and removes
doubles

## Strategy

We chose to use the set method because it automatically removes repeating items
from an array

## Implementation

- Declaring a new array using `new Set`
- Created an iterration that filtered only the non repeating values from the
  values array to the `new Set`
- We did this using the `filter` method

## Use Cases

- This function could be used to indentify candidates, who applied for the first
  time

```js
const candidateList2020 = ['John', 'Jack', 'Andrea', 'John'];
const candidateList2021 = ['Bill', 'John', 'Karen', 'Ross'];

const firstTimeCandidates = difference(candidateList2020, candidateList2021);
```

## Inspiration

<https://www.w3schools.com/js/js_object_sets.asp>
<https://www.w3schools.com/jsref/jsref_filter.asp>

These article helped me to understand how sets are used
