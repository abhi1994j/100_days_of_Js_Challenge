// *
//* Programming Question: Longest Word in a String

// ------------------------------------------------------------------------

//* Q: Write a function find Longest Word that takes a string as input and returns the longest word in the string. If there are multiple longest words, return the first one encountered.

//* Constraints:
// The input string may contain alphabetic characters, digits, spaces, and punctuation.
// The input string is non-empty.
// The input string may contain multiple words separated by spaces.

//* Note:
// If the input string is empty or contains only whitespace, the function should return an false.
// The function should ignore leading and trailing whitespace when determining the longest word.

console.log(findLongestWord("Watch Thapa Technical javascript course on youtube"));

function findLongestWord(str) {

  //* Method -1

  /* if(!str.trim()) return false
   let arr = str.split(" ");
   arr = arr.sort((a,b)=>a.length-b.length)
   return arr[arr.length-1] */

  //* Method 2 

  return str.split(" ").reduce((acc,curr)=>curr.length>acc.length ? curr : acc , "")
}