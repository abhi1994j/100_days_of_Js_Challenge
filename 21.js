// Write a function to calculate the factorial of a number ?(using recursion)

//f(5) = 5*4*3*2*1
console.log(factorial(5)); // 120

function factorial(num){
  if(num === 1) return 1;
  else{
    return num * factorial(num-1); 
  }
}