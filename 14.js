//*-
//* Interview Question:
//*: Write a function to calculate the sum of squares of all elements in an array. For example, given the array [1, 2, 3], the function should return 14 because 1*1 + 2*2 + 3*3 = 1 + 4 + 9 = 14.

// Example usage:
console.log(sumOfSquares([1, 2, 3])); // Output: 14
console.log(sumOfSquares([1, 2, 7])); // Output: 54
console.log(sumOfSquares([1, 2, 9])); // Output: 86

// method 1
// function sumOfSquares(arr){
//   let count = 0;
//   for(let ele of arr) {
//     count += ele*ele
//   }
//   return count;
// }
//method 2

function sumOfSquares(arr){
  return arr.reduce((acc, curr)=> acc+= curr*curr , 0)
}