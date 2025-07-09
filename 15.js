//*-
//* Coding Challenge: Find the Minimum Value in an Array
//*-
// 16: Write a function findMin that takes an array of numbers as input and returns the minimum value found in the array.
//* Constraints:
//? The input array may contain both positive and negative integers.
//? The input array may be empty.
//? The input array may contain duplicate values. Example usage:

console.log(findMin([5, 10, 2, 3])); // Output: 2
console.log(findMin([5, -3, 0, 12, -7])); // Output: -7
console.log(findMin([])); // Output: undefined (or any suitable message for empty array)

// method 1
function findMin(arr){
  if(arr.length === 0) return 0
  return Math.min(...arr);
}

//method 2 
function findMin(arr){
  let min = Number.MAX_SAFE_INTEGER;
  // console.log(min);
  for(let ele of arr){
    if(ele < min) min = ele;
  }
  return min
}