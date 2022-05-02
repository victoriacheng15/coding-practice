# Vaccum Cleaner Route

This question is asked by Amazon. 

Given a string representing the sequence of moves a robot vacuum makes, 
return whether or not it will return to its original position. 
The string will only contain L, R, U, and D characters, 
representing left, right, up, and down respectively.

Ex: Given the following strings...

"LR", return true

"URURD", return false

"RUULLDRD", return true

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

- set x and y equal to 0 (the original position)
- convert str to lower case and array
- check dir in the array
- if l, x -= 1
- if r, x += 1
- if u, y += 1
- if d, y -= 1
- check if x === 0 and y === 0 or not
  - if true, the cleaner is back to its original position
  - if false, the cleaner is not at its original position

### Solution:

```js
function vaccumeCleanerRoute(str) {
  let x = 0;
  let y = 0;
  const directions = [...str.toLowerCase()];
  for (let dir of directions) {
    if (dir === 'l') x -= 1;
    else if (dir === 'r') x += 1;
    else if (dir === 'u') y += 1;
    else if (dir === 'd') y -= 1;
  }
  return x === 0 && y === 0;
}

```

### Jest:

```js
describe('check the robots position', () => {
  test('the robot is not at the origin', () => {
    expect(vaccumeCleanerRoute('URURD')).toBeFalsy();
  });

  test('the robot is at the origin', () => {
    expect(vaccumeCleanerRoute('RUULLDRD')).toBeTruthy();
  });
});
```