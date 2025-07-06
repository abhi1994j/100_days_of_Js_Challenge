// Write a function arraysAreEqual that takes two arrays arr1 and arr2 as input and returns true if the arrays are equal (i.e., contain the same elements in the same order), and false otherwise.

// Example usage:
console.log(arraysAreEqual([1, 2, 3], [1, 2, 3])); //
Output: true
console.log(arraysAreEqual([1, 2, 3], [1, 2, 4])); //
Output: false
console.log(arraysAreEqual( [], [])); // Output: true

function arraysAreEqual(a , b){
  if(a.length !== b.length) return false ;
  return a.every((val , index)=>val === b[index])
}