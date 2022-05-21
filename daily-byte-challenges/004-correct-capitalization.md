# Correct Capitalization

This question is asked by Google. 

Given a string, return whether or not it uses capitalization correctly. 
A string correctly uses capitalization if all letters are capitalized, 
no letters are capitalized, or only the first letter is capitalized.

Ex: Given the following strings...

"USA", return true

"Calvin", return true

"compUter", return false

"coding", return true


---

## Author: Abdul

### Psuedocode:


### Solution:

```js
// your solution
```

### Jest:

```js
// your test
```

---
## Author: Victoria

### Psuedocode:

- set up a function to convert str to upper case or lower case based on the getUpper condition
- compare original string with upper case and lower case string
  - if condition met, return true
  - if not true, continue
- check to see if first letter is equal to original first letter
  - if true
    - check rest of letters with upper case and lower case string
    - if conditon is met, return true
    - if not, return false
- lastly, if no match, return false

### Solution:

```js
function correctCaptialization(str) {
  const convertCase = (string, getUpper = true) =>
    getUpper ? string.toUpperCase() : string.toLowerCase();

  if (convertCase(str) === str || convertCase(str, false) === str) return true;

  if (convertCase(str[0]) === str[0]) {
    const condition =
      str.slice(1) === convertCase(str.slice(1)) ||
      str.slice(1) === convertCase(str.slice(1), false);

    if (condition) {
      return true;
    }
    return false;
  }
  return false;
}
```

### Jest:

```js
describe('correct captilization', () => {
  it('should check if the string has correct captilization or not', () => {
    expect(correctCaptialization('USA')).toBeTruthy();
    expect(correctCaptialization('Calvin')).toBeTruthy();
    expect(correctCaptialization('coding')).toBeTruthy();
    expect(correctCaptialization('compUter')).toBeFalsy();
  });
});

```