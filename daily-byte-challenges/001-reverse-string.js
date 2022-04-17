/* 
This question is asked by Google. 

Given a string, reverse all of its characters and return the resulting string.

Ex: Given the following strings...

“Cat”, return “taC”
“The Daily Byte”, return "etyB yliaD ehT”
“civic”, return “civic”
*/

/*
    Psuedocode:
    1. [...str] will grab all characters in str and spread these into an array
    2. once we have the characters in an array we can reverse the array elements
    3. then we can join all the elements together without a separator and this will reverse the string
*/

// Author: Abdul
function reverseString(str) {
    return [...str].reverse().join("")
}

// will log "Assertion failed" if test fails and nothing if test passes
console.assert(reverseString("Cat") === "taC")
console.assert(reverseString("The Daily Byte") === "etyB yliaD ehT")
console.assert(reverseString("civic") === "civic")