function reverseArray(arr) {
    let newArray = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        newArray.push(arr[i]);
    }
    return newArray;
}
require("readline-sync");
 const {question} = require("readline-sync");
 let num = question("please Enter a number : ");
 let size = num;
 const array = [];
for(let i=0; i<size; i++) {
    array[i] = question("Enter Element : " );
}
console.log(array);
console.log(reverseArray(array));



