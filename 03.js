//*.
//* Interview Question: Count Occurrences of Character
//*
//! Task:
//? Write a function called countChar that takes two parameters: a string and a character to count. The function should return the number of times the specified character appears in the string.
//°

console.log(countChar("Mississippi", "I")); // Output: 4

//todo Constraints:
//? The function should be case-sensitive.
//? The function should handle both lowercase and uppercase characters.
//? The character parameter can be any printable ASCII character (the function sho accept any character that is part of the ASCII character set and is printable).

function countChar(str , val){
  let arr = str.toLowerCase().split("");
  val = val.toLowerCase()
  console.log(val);
  let countVal = 0
  // console.log(arr);
  let count = arr.reduce((acc, cur)=> {
    if(cur === val) acc++
    return acc;
  }  , 0)
  // console.log(count);
  return count;
}