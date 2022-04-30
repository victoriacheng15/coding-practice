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
- convert str to lowercase
- remove all non-alphanumeric characters
- check recursively if str is palindrome
    - base case: if string is one character or two characters it is a palindrome
    - recursive step: if first and last characters match AND the substring from 0 ... N-2 is a palindrome then the original string is a palindrome

### Solution:

```js
function isPalindrome(str) {
  str = str.toLowerCase()
  str = str.replace(/[^A-Za-z0-9]/g, "")
  return isPalindromeRecurse(str)
}

function isPalindromeRecurse(str) {
  if (str.length <= 1) {
      return true
  }
  let end = str.length - 1
  return str[0] === str[end] && isPalindrome(str.substring(1, end))
}
```

### Jest:

```js
// your test
describe('isPalindrome test suite', () => {
  it('returns true for one-word palindrome', () => {
    expect(isPalindrome('racecar')).toBeTruthy();
  });

  it('returns false for a one-word non-palindrome', () => {
    expect(isPalindrome('palindrome')).toBeFalsy();
  });

  it('returns true for multiple word palindrome with punctuation', () => {
    expect(isPalindrome('A man, a plan, a canal: Panama.')).toBeTruthy();
  });
  it('returns false for multiple word palindrome with punctuation', () => {
    expect(isPalindrome('A man, a plan, a canal, a boat: Panama.')).toBeFalsy();
  });
});
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
  const lowerCase = str.toLowerCase().replace(regex, '');
  const reversed = [...lowerCase].reverse().join('');
  return lowerCase === reversed;
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