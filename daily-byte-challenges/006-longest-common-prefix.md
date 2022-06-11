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
- Iterate over each word character-by-character
- If every word shares the same character as the first word, add character to result
- Otherwise return result

### Solution:

```js
function longestCommonPrefix(words) {
    let charIdx = 0
    let result = ""

    while (charIdx < words[0].length) {
        let currentChar = words[0][charIdx]

        for (let i = 1; i < words.length; i++) {
            if (words[i][charIdx] !== currentChar) {
                return result
            }
        }

        result += currentChar
        charIdx++
    }
    return result
}
```

### Jest:

```js
// your test
    describe('longest common prefix test suite', () => {
        it('returns empty string when no letters in common', () => {
            expect(longestCommonPrefix(["a", "b", "c"])).toEqual("")
        });
        it('returns non empty common prefix correctly', () => {
            expect(longestCommonPrefix(["app", "apple", "aplet"])).toEqual("ap")
        });
    });
```

---
## Author: Victoria

### Psuedocode:

### Solution:

```js
// your solution
```

### Jest:

```js
// your test
```
