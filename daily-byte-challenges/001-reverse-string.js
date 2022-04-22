/* 
This question is asked by Google. 

Given a string, reverse all of its characters and return the resulting string.

Ex: Given the following strings...

“Cat”, return “taC”
“The Daily Byte”, return "etyB yliaD ehT”
“civic”, return “civic”
*/



// Author: Abdul

/*
Psuedocode:
1. [...str] will grab all characters in str and spread these into an array
2. once we have the characters in an array we can reverse the array elements
3. then we can join all the elements together without a separator and this will reverse the string
*/

// function reverseString(str) {
//     return [...str].reverse().join("")
// }

// will log "Assertion failed" if test fails and nothing if test passes
// console.assert(reverseString("Cat") === "taC")
// console.assert(reverseString("The Daily Byte") === "etyB yliaD ehT")
// console.assert(reverseString("civic") === "civic")

// Author: Victoria

/* 
Psuedocode:
- convert str to array
- reverse elements order in the array
- lastly, join all elements

or 
- use for loop
- set newStr = ''
- set i equal to last element of the str
- loop through all until it reach 0
- set newStr equal to the specific index of the array
- return newStr
*/

function reverseString(str) {
    return [...str].reverse().join('');
    // let newStr = '';
    // for (let i = str.length - 1; i >= 0; i -= 1) {
    //   newStr += str[i];
    // }
    // return newStr;
}
  
module.exports = reverseString;
  
// jest testing

const reverseString = require('./script');

describe('check for reversed string', () => {
  test('reverse 1 word', () => {
    expect(reverseString('cat')).toBe('tac');
  });

  test('reverse more than 1 word', () => {
    expect(reverseString('The Daily Byte')).toBe('etyB yliaD ehT');
  });

  test('reverse 1 word that is the same as before', () => {
    expect(reverseString('civic')).toBe('civic');
  });
});