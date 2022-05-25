# Add Binary

This question is asked by Apple. 

Given two binary strings (strings containing only 1s and 0s) 
return their sum (also as a binary string).

Note: neither binary string will contain leading 0s unless the string itself is 0

Ex: Given the following binary strings...

"100" + "1", return "101"

"11" + "1", return "100"

"1" + "0", return  "1"


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

- use parseInt() with 2 as the argument for radix 
- add both of them
- use toString(2) to convert it to binary

### Solution:

```js
function addBinary(str1, str2) {
  const conversion = (str) => parseInt(str, 2);
  const addBoth = conversion(str1) + conversion(str2);
  return addBoth.toString(2);
}

```

### Jest:

```js
describe('correct captilization', () => {
  it('should check if the string has correct captilization or not', () => {
    expect(addBinary('100', '1')).toMatch('101');
    expect(addBinary('11', '1')).toMatch('100');
    expect(addBinary('1', '0')).toMatch('1');
  });
});

```