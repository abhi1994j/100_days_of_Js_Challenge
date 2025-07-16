//* Write a function called simplePasswordValidator that takes a single parameter:

// password: A string representing the password to be validated.

// The function should validate the password based on the following criteria:
// The password must contain at least one lowercase letter one uppercase letter and one digit.
// The length of the password must be at least 8 characters.
// The function should return true if the password meets all the criteria otherwise it should return false.

//* Input :
// password: A non-empty string representing the password to be validated.

//* Output:
// true if the password meets all the criteria.
// false otherwise.

//* Constraints:
// The input string password will contain only alphanumeric characters and punctuation marks.

console.log(simplePasswordValidator("asd123Abhfk"));
console.log(simplePasswordValidator("asd123bhfk"));

function simplePasswordValidator(str){
  let uppercase = false , lowercase = false , digits = false
  if(str.length<8) return false;
  
  for(let i = 0 ; i<str.length ; i++){
    if(/[a-z]/.test(str[i]) ){
      lowercase = true
    }else if(/[A-Z]/.test(str[i])){
      uppercase = true; 
    }
    else if(/[0-9]/.test(str[i])){
      digits = true
    }
   } 
    return uppercase && lowercase && digits 
 
}

// console.log(isNaN(Number(7)));