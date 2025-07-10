//*  Coding Challenge //*

// 18: Write a function to convert a string to camel Case & snake_case.

// Example usage:
console.log(toCamelCase("hello world abhishek")); // Output: helloWorld

//todo HomeWork:
console.log(toSnakeCase("helloWorld")); // Output: hello_world

function toCamelCase(str){
  console.log(str.split(" "));
  let arr = str.trim().split(" ");
  let camalCase = arr[0];
  for(let i=1;i<arr.length;i++){
   let words = arr[i];
   camalCase += words.charAt(0).toUpperCase() + words.substring(1, words.length);
  }
  return camalCase;
}

// function toSnakeCase(str){
//   return str.replace(/ /g , '_');
// }

function toSnakeCase(str){
  return str.replace(/([a-z])([A-Z])/g , '$1_$2').toLowerCase()
}