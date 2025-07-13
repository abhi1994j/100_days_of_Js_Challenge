// Write a function to find the nth fibonacci number ?(using recursion)
// formula : f(n) = f(n-1) + f(n-2)
console.log(fibonacci(8)); // 21

function fibonacci(num){
  if(num <= 1) return num;
  return fibonacci(num-1) + fibonacci(num-2);
}