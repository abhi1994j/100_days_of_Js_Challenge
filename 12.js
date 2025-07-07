// 13: Write a function that takes a string as input and returns the count of vowels in that string. Consider 'a', 'e', 'i', 'o', and 'u' as vowels (both lowercase and uppercase).

// Example usage:

console.log(countVowels("Hello world"));  // Output: 3
console.log(countVowels("ThE quick brown fox")); // Output: 5
console.log(countVowels("Brrrp")); // Output: 0

// Constraints:

// The input string may contain letters in both uppercase and lowercase.
// The output should be a non-negative integer representing the count of vowels in the input string.

function countVowels(str){
  let count = 0
  const vowels = ['a' , 'e' , 'i' ,'o' , 'u'];
  const arr = str.split('');
  // console.log(arr);
  for(let i = 0; i<arr.length;i++){
    // console.log(arr[i]);
    if(vowels.includes(arr[i])){  
      count++;
    }
  }
  return count;
}