//*  Coding Challenge  //*
// 17: Write a function to check if a character is uppercase or lowercase.

//* Constraints:
//? The input char will be a single character.
//? The character can be any printable ASCII character.
//? You can assume that the input will always be a string of length 1.

// Example usage:
console.log(isUpperCase("s")); // Output: true
console.log(isLowerCase("b")); // Output: true

//* Notes:
//? Ensure that the function correctly identifies uppercase characters based on their ASCII values.
//? Optimize the function to handle edge cases efficiently.

console.log(checkCharacter("hello World" , "hello"));

function isLowerCase(ch){
  return ch.toLowerCase(ch) === ch ? true : false ;
}
function checkCharacter(ch , ch1){
   
}