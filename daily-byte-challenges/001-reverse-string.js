/* 
This question is asked by Google. 

Given a string, reverse all of its characters and return the resulting string.

Ex: Given the following strings...

“Cat”, return “taC”
“The Daily Byte”, return "etyB yliaD ehT”
“civic”, return “civic”
*/

// Author: Abdul
function reverseString(str) {
    return [...str].reverse().join("")
}

// will log "Assertion failed" if test fails and nothing if test passes
console.assert(reverseString("Cat") === "taC")
console.assert(reverseString("The Daily Byte") === "etyB yliaD ehT")
console.assert(reverseString("civic") === "civic")