//* ---------------------------------------------
//* Programming Question: Hash Tag Generator
//* ----------------------------------------------

//? You are required to implement a function generateHash that generates a hash tag from a given input string. The hash tag should be constructed as follows:

//? The input string should be converted to a hash tag format, where each word is capitalized and concatenated together without spaces.

//? If the length of the input string is greater than 280 characters or if the input string is empty or contains only whitespace, the function should return false.

//? Otherwise, the function should return the generated hash tag prefixed with #.

//* Write a function generateHash to accomplish this task.

console.log(generateHash("my name is abhishek chatterjee"));

// o/p = "#MyNameIsAbhishekChatterjee"

function generateHash(val) {
  if (val.length > 280 && val.trim().length === 0) return false;
  let str = val.split(" ");
  console.log(str);

  // Method 1 
  //  str = str.map((ele)=> ele.replace(ele[0], ele[0].toUpperCase()));

  // Method 2
  str = str.map((ele) => ele.charAt(0).toUpperCase() + ele.slice(1));

  return `#${str.join("")}`
}