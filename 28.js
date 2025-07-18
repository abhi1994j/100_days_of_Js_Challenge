
//*
//* Programming Challenge: Convert Object to Array and Vice Versa //*.
//* Your task is to implement two functions:
// Convert Object to Array: Write a function objectToArray that takes an object as input and returns an array of key-value pairs, where each element in the array is an array with two elements: the key and the corresponding value from the object.


//Convert Array to Object: Write a function arrayToObject that takes an array of key-value pairs (as returned by the objectToArray function) and returns a new object with the keys and values from the array.


const obj ={
    name:"Abhi",
    age:90,
    place:"Noida"
}
const arr1 = [[ 'name', 'Abhi' ], [ 'age', 90 ], [ 'place', 'Noida' ]]
console.log(convertArrtoObj(arr1));
console.log(convertObjtoArr(obj));

function convertObjtoArr(obj){
    let arr = new Array(3);
    let index = 0
    // console.log(arr)
    for(let ele in obj){
        arr[index] = [ele , obj[ele]];
        index++
    }
    return arr;   
}

function convertArrtoObj(arr){
  let ob ={};
   return Object.fromEntries(arr)
}

