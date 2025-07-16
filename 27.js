// Programming Challenge: Check Object Emptiness

//Task:

//Write a function called isEmptyObject that takes an object as input and determines whether it is empty or not.

// An empty object is defined as an object with no own properties.

// Your task:

// Implement the isEmptyObject function using JavaScript.

// Return a message indicating whether the object is empty or not.

// Constraints:

// The input object may have any number of properties, including zero.

// The function should return a message indicating whether the object is empty or not.

// You must use the provided isEmptyObject function signature without adding extra parameters.


console.log(checkISEmpty({}));
console.log(checkISEmpty({ b : null}));
console.log(checkISEmpty({ b : undefined}));
console.log(checkISEmpty({a:"z"}));

function checkISEmpty(obj){
  for(let key in obj){
    if(obj.hasOwnProperty(key)) {
      return "Object is not Empty"
    }
  }
    return "Object is Empty"
}