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
- make a single pass through string
    - if only first letter is capitalized return true
    - if all letters are capitalized return true
    - if all letters are lowercase return true
    - else return false

### Solution:

```js
function isLowerCase(char) {
    return char.toLowerCase() === char
}

function isUpperCase(char) {
    return char.toUpperCase() === char
}

function correctCapitalization(str) {
    // set up default values based on first character
    let allCaps = isUpperCase(str[0])
    let allLowerCase = isLowerCase(str[0])
    let onlyFirstCapitalized = isUpperCase(str[0])

    for (let i = 1; i < str.length; i++) {
        // if character lowercase, allCaps must be false
        if (isLowerCase(str[i])) {
            allCaps = false
        } else {
            // character is uppercase
            allLowerCase = false 
            onlyFirstCapitalized = false
        }
    }

    return allCaps || allLowerCase || onlyFirstCapitalized
}
```

### Jest:

```js
describe('correct capitalization test suite', () => {
    test('all caps word returns true', () => {
        expect(correctCapitalization("USA")).toBeTruthy();
    })
    test('all lowercase word returns true', () => {
        expect(correctCapitalization("coding")).toBeTruthy();
    })
    test('first letter capitalized only return true', () => {
        expect(correctCapitalization("Hello")).toBeTruthy();
    })
    test('lower case word with random capitalization in the middle returns fales', () => {
        expect(correctCapitalization("compUter")).toBeTruthy();
    })
});
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
const convertCase = (string, getUpper = true) =>
    getUpper ? string.toUpperCase() : string.toLowerCase();

function correctCapitalization(str) {
  if (convertCase(str) === str || convertCase(str, false) === str) return true;
  if (convertCase(str[0]) === str[0]) {
    const condition =
      str[0] === convertCase(str[0]) || str[0] === convertCase(str[0], false);

    if (condition) return true;
  }

  return false;
}
```

### Jest:

```js
describe('correct captilization', () => {
  it('should check if the string has correct captilization or not', () => {
    expect(correctCapitalization('USA')).toBeTruthy();
    expect(correctCapitalization('Calvin')).toBeTruthy();
    expect(correctCapitalization('coding')).toBeTruthy();
    expect(correctCapitalization('compUter')).toBeFalsy();
  });
});

```