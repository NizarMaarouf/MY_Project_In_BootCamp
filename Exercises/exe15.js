function joining() {
  const reandlineSync = require("readline-sync");
  const {question} = require("readline-sync");
  const array1 = question("please Enter a string : ");
  const array2  = question("please Enter another string : ");
  return array1.concat(',', array2 ) ;
}
console.log(joining());