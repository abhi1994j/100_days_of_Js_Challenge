//* Coding Challenge: Number Range Generator //*

//? Write a function called numberRange that generates an array containing consecutive numbers from a to b(inclusive).

//* Input:
//? a: An integer representing the starting number of the range.
//? b: An integer representing the ending number of the range.
//? arr: An optional parameter representing the array to store the numbers in the range. It defaults to an empty array.

//* Output:
//? An array containing consecutive numbers from a to b (inclusive).
//* Constraints:
//? a and b will be integers.
//? a will be less than or equal to b

console.log(numberRange(1, 6));
console.log(numberRange(6, 2));

function numberRange(num1, num2) {
  let arr = []
  if (num1 < num2) {
    while (num1 <= num2) {
      arr.push(num1)
      num1++
    }
  }
  else{
     while (num2 <= num1) {
      arr.push(num2)
      num2++
    }
  }

  return arr;
}