# difference: strategy name

- function that compares an array to another array and removes similar values
  and also doubles from the original array

## Strategy

---

## Implementation

---

## Use Cases

- this function can be used to compare lists and get rid of repeating items

- sort through items on subscription lists or contact lists

  ```js
  const contactList = ['sanne', 'mervat', 'alina', 'maurice', 'tahmina'];
  const referenceList = ['daniel', 'mervat', 'aviv', 'maurice', 'tahmina'];
  const updatedList = difference(contactList, referenceList); // ['sanne','alina'];
  ```

## Inspiration

- coach sander
