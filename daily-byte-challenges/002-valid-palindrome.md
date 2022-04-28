# Valid Palindrome

This question is asked by Facebook. 

Given a string, return whether or not it forms a palindrome ignoring case 
and non-alphabetical characters.

Note: a palindrome is a sequence of characters that reads the same forwards and backwards.

Ex: Given the following strings...

"level", return true

"algorithm", return false

"A man, a plan, a canal: Panama.", return true

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

- set up regex for non-words \W
- convert str to lower case
- replace non-words to empty str
- reverse the string with reverse() and join() functions
- compare lowerCase and reversed 
- return either true or false

### Solution:

```js
function isPalindrome(str) {
  const regex = /\W/g;
  const LowerCase = str.toLowerCase().replace(regex, '');
  const reversed = [...LowerCase].reverse().join('');
  return LowerCase === reversed;
}

module.exports = isPalindrome;
```

### Jest:

```js
describe('check for a valid palindrome', () => {
  it('should be true, and spelling is the same', () => {
    expect(isPalindrome('level')).toBeTruthy();
  });

  it('should be false, spelling is not the same', () => {
    expect(isPalindrome('algorithm')).toBeFalsy();
  });

  it('should not have any non-words', () => {
    expect(isPalindrome('A man, a plan, a canal: Panama.')).toBeTruthy();
  });
});

```