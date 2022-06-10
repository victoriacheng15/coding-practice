# Longest Common Prefix

This question is asked by Microsoft. 

Given an array of strings, return the longest common prefix 
that is shared amongst all strings.

Note: you may assume all strings only contain lowercase alphabetical characters.

Ex: Given the following arrays...

["colorado", "color", "cold"], return "col"

["a", "b", "c"], return ""

["spot", "spotty", "spotted"], return "spot"


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

- return empty string  if there is no parameters
- set firstWord = strs[0]
- loop through the all strs
- compare each letter based on firstWord
- if they are same letter, increase index by 1 each time
- until the loop reaches first different letter or the shortest string
- extract letters from the firstWord based on the index

### Solution:

```js
function commonPrefix(strs) {
  let index = 0;
  const firstWord = strs[0];
  const checkStr = (string) => firstWord[index] === string[index];
  while (strs.every(checkStr)) {
    index += 1;
  }

  return firstWord.slice(0, index);
}
```

### Jest:

```js
describe('longest common prefix', () => {
  it('should return the same letters from the array', () => {
    expect(commonPrefix(['colorado', 'color', 'cold'])).toEqual('col');
    expect(commonPrefix(['spot', 'spotty', 'spotted'])).toEqual('spot');
  });

  it('should return emtpy string', () => {
    expect(commonPrefix(['a', 'b', 'c'])).toEqual('');
  });
});
```
