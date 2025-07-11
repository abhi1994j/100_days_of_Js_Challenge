//* Coding Challenge //*

//?20. Write a function to reverse a string without using any built-in methods or libraries. The function should take a string as input and return the reversed string.

// Example usage:
console.log(reverseString("hello")); // Output: olleH

function reverseString(str) {
  // return ch.split("").reverse().join("")
  let reverse_word = "";
  for (let i = ch.length - 1; i >= 0; i--) {
    reverse_word += ch[i];
  }
  return reverse_word;
}