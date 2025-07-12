// Write a JavaScript function to count the occurrences of each element in an array and store the counts in an object. The keys of the object should represent the elements of the array, and the values should represent the number of times each element appears in the array.

// Here's what the function should do: I
// Accept an array of numbers as input.
// Create an empty object called counts to store thecounts of each element. each number in the array.
// For each number, increment the count in the counts object.

// If the count for a number does not exist yet, initialize it to 1.
// Return the counts object containing the counts of each element.
// Input

// Output
// { '1': 2, '2': 3, '3': 1, '4': 1 }
// Constraints:
// The input array may contain positive integers only.
// You can assume that the input array is not empty.
const numbers = [1, 2, 2, 3, 1, 4, 2];
console.log(countValues(numbers));

function countValues(arr){
  const obj = {};
  for (const num of arr) {
    obj[num] = (obj[num] || 0) + 1;
  }
  return obj;
}
