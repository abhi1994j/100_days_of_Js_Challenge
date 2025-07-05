// Write a function findMax that takes an array of numbers as input and returns the maximum number in the array.
// Example usage:
console.log(findMax([1, 5, 3, 9, 2])); // Output: 9
console.log(findMax( [-10, -5, -3, -9, -2])); // Output: -2
console.log(findMax( [5])); // Output: 5

// Method - 1 

// function findMax(arr){
//   const max = arr.reduce((acc, curr)=> acc>curr? acc: curr , arr[0])
//   return max;
// }

// Method -2 

function findMax(arr){
  return Math.max(...arr)
}